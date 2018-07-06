import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort,
  MatTableDataSource
} from "@angular/material";
import {AdminService} from "../../services/admin.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {

  displayedColumns = ['Book Name', 'Author', 'Publisher', 'Edition', 'Category', 'Description', 'Requested By', 'Requested Date', 'Update'];
  dataSource: MatTableDataSource<RequestedBookData>;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user: Object;
  requestedBooks: RequestedBookData[] = [];

  isLoadingResults = true;
  isLoadingResultsBookRead = true;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
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
    this.adminService.getAllRequestedBooks().subscribe(books => {
      let arrayIndex = 0;
      books['books'].forEach(item => {

        let newBook :RequestedBookData = {
          id : item['_id'],
          bookName: item['name'],
          author: item['author'],
          publisher: item['publisher'],
          edition: item['edition'],
          category: item['category'],
          description: item['description'],
          requestedBy: item['requestedUser'],
          requestedDate: new Date(item['requestedDate']).toLocaleString(),
          arrayIndex: arrayIndex
        };
        arrayIndex++;
        this.requestedBooks.push(newBook);

        this.dataSource = new MatTableDataSource(this.requestedBooks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  updateRequestedBook(id, arrayIndex){
    let dialogRef = this.dialog.open(DialogOverviewDialogRequestedBook, {
      width: '400px',
      data: { id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        let bookData = {
          id : id
        };

        this.adminService.updateBookStatus(bookData).subscribe(result => {
          if (result['success']){
            this.snackBar.open("Status Updated Successfully", 'Close', {
              duration: 2000
            });
            this.dataSource.data.splice(arrayIndex,1);
            this.dataSource = new MatTableDataSource<RequestedBookData>(this.dataSource.data);
            this.router.navigate(['/requestedBooks']);

          }else{
            this.snackBar.open("Updating Failed", 'Close', {
              duration: 2000
            });
          }
        });
      }
    });
  }

}

export interface RequestedBookData{
  id: string,
  bookName: string,
  author: string,
  publisher: string,
  edition: string,
  category: string,
  description: string,
  requestedBy: string,
  requestedDate: string,
  arrayIndex: number
}

@Component({
  selector: 'dialog-overview-dialog-requested-book',
  templateUrl: 'dialog-overview-dialog-requested-book.html',
})
export class DialogOverviewDialogRequestedBook {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogRequestedBook>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClickRequested(): void {
    this.dialogRef.close();
  }

}
