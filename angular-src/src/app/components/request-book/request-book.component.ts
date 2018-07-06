import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {BookDataService} from "../../services/book-data.service";
import {AuthService} from "../../services/auth.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private bookDataService: BookDataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  bookNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  authorFormControl = new FormControl('', [
    Validators.required,
  ]);

  publisherFormControl = new FormControl('', []);

  editionFormControl = new FormControl('', []);

  categoryFormControl = new FormControl('', []);

  descriptionFormControl = new FormControl('', []);

  matcher = new MyErrorStateMatcher();

  onRequestSubmit(){
    if (this.bookNameFormControl.value == '' && this.authorFormControl.value == ''){
      this.snackBar.open('Please fill up the required fields','Close', {
        duration: 3000
      });
    }else {
      this.authService.getProfile().subscribe(data => {
        const book = {
          name : this.bookNameFormControl.value,
          author: this.authorFormControl.value,
          publisher: this.publisherFormControl.value,
          edition: this.editionFormControl.value,
          category: this.categoryFormControl.value,
          description: this.descriptionFormControl.value,
          requestedDate: Date.now(),
          requestedUser: data['user'].indexNumber
        };

        this.bookDataService.requestBook(book).subscribe(data => {
          if (data['success']){
            this.snackBar.open("Request Send Successfully", "Close", {
              duration: 3000
            });
            this.router.navigate(['/']);
          }
        });
      });
    }
  }

}
