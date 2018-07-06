import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
  ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort,
  MatTableDataSource
} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {BookDataService} from "../../services/book-data.service";
import {NavigationEnd, Router} from "@angular/router";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  displayedColumns = ['Book Name', 'Author', 'Publisher', 'Copies', 'Update Book', 'Delete Book'];
  dataSource: MatTableDataSource<BookData>;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bookSet: BookData[] = [];

  isLoadingResults = true;

  constructor(
    private snackBar: MatSnackBar,
    private bookDataService: BookDataService,
    private router: Router,
    private dialog: MatDialog,
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
    this.bookDataService.getAllBooks().subscribe(books => {
      if (books['success']){
        let x = 0;
        books['books'].forEach(item => {
          let newBook: BookData = {
            id: item['_id'],
            bookName: item['name'],
            author: item['author'],
            publisher: item['publisher'],
            copies: item['copies'],
            arrayIndex : x
          };
          x++;
          this.bookSet.push(newBook);
        });
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource(this.bookSet);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  bookNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  authorFormControl = new FormControl('', [
    Validators.required,
  ]);

  pagesFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  editionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  publisherFormControl = new FormControl('', [
    Validators.required,
  ]);

  yearFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.minLength(4),
  ]);

  imageUrlFormControl = new FormControl('', [
    Validators.required,
  ]);

  copiesFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  matcher = new MyErrorStateMatcher();

  onAddBookSubmit(){
    if (
      !this.bookNameFormControl.invalid &&
      !this.authorFormControl.invalid &&
      !this.pagesFormControl.invalid &&
      !this.editionFormControl.invalid &&
      !this.publisherFormControl.invalid &&
      !this.yearFormControl.invalid &&
      !this.imageUrlFormControl.invalid &&
      !this.copiesFormControl.invalid
    ){
      const newBook = {
        bookName : this.bookNameFormControl.value,
        author : this.authorFormControl.value,
        pages : this.pagesFormControl.value,
        edition : this.editionFormControl.value,
        publisher : this.publisherFormControl.value,
        year : this.yearFormControl.value,
        imageUrl : this.imageUrlFormControl.value,
        copies : this.copiesFormControl.value,
        from: Date.now()
      };

      this.bookDataService.checkBookAvailability(newBook).subscribe(data => {
        if (data['success'] == false){
          this.bookDataService.addBook(newBook).subscribe(status => {
            if (status['success'] == true){
              this.snackBar.open('Book Added Successfully','Close',{
                duration: 3000
              });
              this.router.navigate(['/addBook']);
            }
          });
        }else if (data['success'] == true){
          this.snackBar.open('Book Already Exists','Close', {
            duration: 3000
          });
        }
      });
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateBook(id, bookName){
    let dialogRef = this.dialog.open(DialogOverviewDialogUpdateBook, {
      width: '400px',
      data: { bookName: bookName}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.router.navigate(['/updateBook/'+ id]);
      }
    });
  }

  deleteBook(id, bookName, arrayIndex){
    let dialogRef = this.dialog.open(DialogOverviewDialogDeleteBook, {
      width: '400px',
      data: { bookName: bookName}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        let book = {
          id : id
        };
        this.bookDataService.deleteBook(book).subscribe(status => {
          if (status['success']){
            this.snackBar.open("Deleted Successfully", "Close", {
              duration: 3000
            });
            this.dataSource.data.splice(0,this.dataSource.data.length);
            this.dataSource = new MatTableDataSource<BookData>(this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.ngOnInit();
            //this.router.navigate(['/addBook']);
          }else{
            this.snackBar.open("Deletion Failed", "Close", {
              duration: 3000
            });
          }
        });
      }
    });

  }

}

export interface BookData {
  id : string,
  bookName : string,
  author: string,
  publisher: string,
  copies: number,
  arrayIndex: number
}

@Component({
  selector: 'dialog-overview-dialog-update-book',
  templateUrl: 'dialog-overview-dialog-update-book.html',
})
export class DialogOverviewDialogUpdateBook {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogUpdateBook>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClickRemove(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'dialog-overview-dialog-delete-book',
  templateUrl: 'dialog-overview-dialog-delete-book.html',
})
export class DialogOverviewDialogDeleteBook {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogDeleteBook>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClickRemove(): void {
    this.dialogRef.close();
  }

}


