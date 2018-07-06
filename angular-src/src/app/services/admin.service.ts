import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule , HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient) { }

  getAllUsers(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/getAllUsers', {headers: headers})
      .pipe(map(res => res));
  }

  getAllRequestedBooks(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/getAllRequestedBooks', {headers: headers})
      .pipe(map(res => res));
  }

  updateBookStatus(book){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/updateBookStatus', book,{headers: headers})
      .pipe(map(res => res));
  }

  addFine(fine){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/addFine', fine,{headers: headers})
      .pipe(map(res => res));
  }

  getFines(filter, today){
    let dates  = {
      filter: filter,
      today: today
    };
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/getFines', dates,{headers: headers})
      .pipe(map(res => res));
  }
}
