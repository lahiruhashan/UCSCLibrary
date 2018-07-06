import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookDataService} from "../../services/book-data.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id$: Object;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private bookDataService: BookDataService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => this.id$ = params.id);
  }

  ngOnInit() {
    this.bookDataService.getBookById(this.id$).subscribe(
      book => {
        this.bookNameFormControl.setValue(book['book'].name);
        this.authorFormControl.setValue(book['book'].author);
        this.pagesFormControl.setValue(book['book'].pages);
        this.editionFormControl.setValue(book['book'].edition);
        this.publisherFormControl.setValue(book['book'].publisher);
        this.yearFormControl.setValue(book['book'].year);
        this.imageUrlFormControl.setValue(book['book'].imageUrl);
        this.copiesFormControl.setValue(book['book'].copies);
      }
    );
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

  onUpdateBookSubmit(){
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
        bookId: this.id$,
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

      this.bookDataService.updateBook(newBook).subscribe(status => {
        if (status['success'] == true){
          this.snackBar.open('Book Update Successfully','Close',{
            duration: 3000
          });
          this.router.navigate(['/addBook']);
        }else{
          this.snackBar.open('Failed to Update','Close',{
            duration: 3000
          });
        }
      });

    }
  }
}
