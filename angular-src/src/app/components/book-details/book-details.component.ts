import {Component, Inject, OnInit} from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id$: Object;
  book$: Object;
  chipColor: String = 'warn';
  availability: String = "Unavailable";

  constructor(
    private bookDataService: BookDataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.id$ = params.id);
  }

  ngOnInit() {
    this.bookDataService.getBookById(this.id$).subscribe(
      book => {
        this.book$ = book['book'];
        if (this.book$['copies'] > 0){
          this.chipColor = 'primary';
          this.availability = 'Available';
        }
      }
    );
  }

  reserveCopy(){
    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '400px',
      data: { name: this.book$['name']}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        let detail = {
          bookId: this.book$['_id'],
          email: localStorage.getItem('user').split('"email":"')[1].split('","')[0]
        };
        this.authService.burrowBook(detail).subscribe(data => {
          if (data['success']){
            this.bookDataService.getBookById(this.book$['_id']).subscribe(data => {
              if(data['success'] == true){
                let bookDetails = {
                  bookId : data['book']['_id'],
                  copies : data['book']['copies']
                };
                this.authService.bookCountDown(bookDetails).subscribe(data => {
                  if (data['success'] == true){
                    this.snackBar.open("Book Reserved", 'Close', {
                      duration: 2000
                    });
                    this.router.navigate(['']);
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

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: 'dialog-overview-dialog.html',
})
export class DialogOverviewDialog {

  book$:String;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book$ = data.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
