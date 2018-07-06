import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort,
  MatTableDataSource
} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {BookDataService} from "../../services/book-data.service";
import {AdminService} from "../../services/admin.service";
import {map} from "rxjs/internal/operators";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  displayedColumns = ['Book Name', 'Author', 'Student Index', 'Burrowed Date', 'Due Date', 'Fine', 'Return'];
  dataSource: MatTableDataSource<BurrowedBookData>;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user: Object;
  burrowedBooks: BurrowedBookData[] = [];

  isLoadingResults = true;
  isLoadingResultsBookRead = true;

  bookInsert(bookDetail:any, indexNumber:number, arrayIndex:number) {
    return this.bookDataService.getBookById(bookDetail.bookId).pipe(map(book => {
      let fine = "0.00";
      if (Date.now()  > (bookDetail.date + 604800000)){
        fine = Number(((Date.now()  - (bookDetail.date + 604800000))/86400000) * 30).toFixed(2);
      }
      let newBook :BurrowedBookData = {
        arrayIndex : arrayIndex,
        bookId: book['book']['_id'],
        bookName: book['book']['name'],
        author: book['book']['author'],
        indexNumber: indexNumber,
        burrowedDate: new Date(bookDetail.date).toLocaleString(),
        reservedDate : bookDetail.date,
        dueDate: new Date(bookDetail.date + 604800000).toLocaleString(),
        fine : fine
      };
      this.burrowedBooks.push(newBook);

      this.dataSource = new MatTableDataSource(this.burrowedBooks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));
  }

  constructor(
    private authService: AuthService,
    private adminService:AdminService,
    private bookDataService : BookDataService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(users => {
      let x = 0;
      users['users'].forEach(item => {

        let len = item['reservedBooks'].length;
        for(let i = 0; i < len; i++){
          this.bookInsert(item['reservedBooks'][i], item['indexNumber'], x).subscribe(_ => {});
          x++;
        }
      });
    });
    this.isLoadingResults = false;
    this.isLoadingResultsBookRead = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  returnBook(id: string, bookName: string, indexNumber: number, reservedDate: string, fineAmount: number, arrayIndex: number){
    let dialogRef = this.dialog.open(DialogOverviewDialogRemoveBook, {
      width: '400px',
      data: { name: bookName}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        let detail = {
          bookId: id,
          indexNumber : indexNumber,
          reservedDate: reservedDate
        };
        this.authService.returnBook(detail).subscribe(data => {
          if (data['success'] == true){
            this.bookDataService.getBookById(id).subscribe(data => {
              if(data['success'] == true){
                let bookDetails = {
                  bookId : data['book']['_id'],
                  copies : data['book']['copies']
                };
                let bookName  = data['book']['name'];
                this.authService.bookCountUp(bookDetails).subscribe(data => {
                  if (data['success'] == true){
                    if (fineAmount > 0){
                      let fine = {
                        indexNumber : indexNumber,
                        bookName : bookName,
                        amount : fineAmount
                      };
                      this.adminService.addFine(fine).subscribe(result => {
                        if (result['success']){
                          this.snackBar.open("Book Returned Successfully", 'Close', {
                            duration: 2000
                          });
                        }else{
                          this.snackBar.open("Book Return Failed", 'Close', {
                            duration: 2000
                          });
                        }
                      });
                    }else{
                      this.snackBar.open("Book Returned Successfully", 'Close', {
                        duration: 2000
                      });
                    }
                    this.dataSource.data.splice(arrayIndex,1);
                    this.dataSource = new MatTableDataSource<BurrowedBookData>(this.dataSource.data);
                    this.dataSource.paginator = this.paginator;
                    this.router.navigate(['/adminHome']);
                  }
                })
              }
            });
          }
        });
      }
    });

  }

}

export interface BurrowedBookData{
  arrayIndex: number,
  bookId: string,
  bookName: string,
  author: string,
  indexNumber: number,
  burrowedDate: string,
  reservedDate: string,
  dueDate: string,
  fine: string
}

@Component({
  selector: 'dialog-overview-dialog-return-book',
  templateUrl: 'dialog-overview-dialog-return-book.html',
})
export class DialogOverviewDialogRemoveBook {

  book$:String;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogRemoveBook>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book$ = data.name;
  }

  onNoClickRemove(): void {
    this.dialogRef.close();
  }

}
