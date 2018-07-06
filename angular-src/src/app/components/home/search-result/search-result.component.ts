import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BookDataService} from "../../../services/book-data.service";
import { Observable } from "rxjs/index";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/internal/operators";

import {MatSnackBar} from '@angular/material';
import {HomeComponent} from "../home.component";
import {Ng2Carouselamos} from "ng2-carouselamos/dist/components";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  name$: Object;
  books$:Object;
  resultArray:boolean = true;
  items: Array<any> = [];
  newBooks: boolean = false;

  //to remove the async nature of JS
  getBooks(){
    return this.bookDataService.getBooks(this.name$).pipe(map(books => {
      this.books$ = books['book'];
      if (this.books$ === undefined && this.name$ != undefined){
        this.openSnackBar();
        this.resultArray = false;
      }
    }));
  }

  openSnackBar() {
    this.snackBar.open('No Results Found', 'Undo',{
      duration: 2000
    });
  }

  constructor(private bookDataService: BookDataService, private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
    this.route.params.subscribe(params => this.name$ = params.bookName);

    let bookLimit = {
      limit: 10
    };
    this.bookDataService.getNewBooks(bookLimit).subscribe(books => {
      if(books['success'] == true){
        this.newBooks = true;
        let booksArray = books['books'];
        for (let i = 0; i < booksArray.length; i++){
          this.items.push({
            id: booksArray[i]._id,
            imageUrl : booksArray[i].imageUrl,
            name: booksArray[i].name,
            author: booksArray[i].author,

          });
        }
      }else{
        this.newBooks =false;
      }
    });
  }

  ngOnInit() {
    this.getBooks().subscribe(_ => {});
  }

}
