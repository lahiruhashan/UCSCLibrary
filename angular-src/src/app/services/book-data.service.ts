import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(bookName){
    return this.http.get('http://localhost:3000/books/' + bookName);
  }

  getBookById(id){
    return this.http.get('http://localhost:3000/books/book-details/' + id);
  }

  getNewBooks(limit){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/getNewBooks', limit, {headers: headers})
      .pipe(map(res => res));
  }

  requestBook(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/requestBook', book, {headers: headers})
      .pipe(map(res => res));
  }

  checkBookAvailability(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/checkAvailability', book, {headers: headers})
      .pipe(map(res => res));
  }

  addBook(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/addBook', book, {headers: headers})
      .pipe(map(res => res));
  }

  getAllBooks(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/getAllBooks', {headers: headers})
      .pipe(map(res => res));
  }

  updateBook(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/updateBook', book, {headers: headers})
      .pipe(map(res => res));
  }

  deleteBook(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/deleteBook', book, {headers: headers})
      .pipe(map(res => res));
  }

  getBooksFilter(filter, today){
    let dates  = {
      filter: filter,
      today: today
    };
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/getBooksFilter', dates,{headers: headers})
      .pipe(map(res => res));
  }
}
