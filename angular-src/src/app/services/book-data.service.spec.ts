import { TestBed, inject } from '@angular/core/testing';

import { BookDataService } from './book-data.service';
import {HttpClient} from "@angular/common/http";

describe('BookDataService', () => {


  let http = new HttpClient(null);
  let bookData = new BookDataService(http);

  it('getBook', () => {
    expect(bookData.getBooks("Angular")).not.toBe(null);
  });

  it('getBookById', () => {
    expect(bookData.getBookById("id")).not.toBe(null);
  });

  it('getNewBooks', () => {
    expect(bookData.getNewBooks(10)).not.toBe(null);
  });

  it('requestBook', () => {
    expect(bookData.requestBook("book")).not.toBe(null);
  });

  it('checkBookAvailability', () => {
    expect(bookData.checkBookAvailability("id")).not.toBe(null);
  });

  it('addBook', () => {
    expect(bookData.addBook("book")).not.toBe(null);
  });

  it('getAllBooks', () => {
    expect(bookData.getAllBooks()).not.toBe(null);
  });

  it('updateBook', () => {
    expect(bookData.updateBook("book")).not.toBe(null);
  });

  it('deleteBook', () => {
    expect(bookData.deleteBook("book")).not.toBe(null);
  });

  it('getBooksFilter', () => {
    expect(bookData.getBooksFilter(15000015444, 15488785511)).not.toBe(null);
  });
});
