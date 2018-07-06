import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule , HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user : any;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .pipe(map(res => res));
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .pipe(map(res => res));
  }

  checkUserAvailability(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/checkAvailability', user, {headers: headers})
      .pipe(map(res => res));

  }

  checkAdminAvailability(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/checkAdminAvailability', user, {headers: headers})
      .pipe(map(res => res));

  }

  burrowBook(detail){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/burrowBook',detail,{headers: headers})
      .pipe(map(res => res));
  }

  returnBook(detail){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/returnBook',detail,{headers: headers})
      .pipe(map(res => res));
  }

  bookCountDown(bookDetails){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/countDown',bookDetails,{headers: headers})
      .pipe(map(res => res));
  }

  bookCountUp(bookDetails){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/books/countUp',bookDetails,{headers: headers})
      .pipe(map(res => res));
  }

  getReservedBooks(email){
    let user = { email : email};
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/getReserved',user,{headers: headers})
      .pipe(map(res => res));
  }

  getReadBooks(email){
    let user = { email : email};
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/getRead',user,{headers: headers})
      .pipe(map(res => res));
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({
      'Authorization' : this.authToken,
      'Content-Type' : 'application/json'
    });
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .pipe(map(res => res));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    const isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    return !isExpired;
  }

  memberLoggedIn(){
    const isMember = localStorage.getItem('user') != undefined && localStorage.getItem('user').split('"type":"')[1].split('"}')[0] == 'member';
    return (this.loggedIn() && isMember);
  }

  adminLoggedIn(){
    const isMember = localStorage.getItem('user') != undefined && localStorage.getItem('user').split('"type":"')[1].split('"}')[0] == 'admin';
    return (this.loggedIn() && isMember);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  updateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/updateUser', user, {headers: headers})
      .pipe(map(res => res));
  }
}
