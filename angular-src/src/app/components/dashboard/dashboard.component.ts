import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from "../../services/auth.service";
import {BookDataService} from "../../services/book-data.service";
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['Reserved Date', 'Book Name', 'Author', 'Due Date'];
  displayedColumnsBookRead = ['Reserved Date', 'Book Name', 'Author', 'Returned Date'];
  displayedColumnsFines = ['Book Name', 'Author', 'Due Date', 'Fine'];
  dataSource: MatTableDataSource<ReservedBookData>;
  dataSourceBookRead: MatTableDataSource<ReadBookData>;
  dataSourceFines: MatTableDataSource<FineData>;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginatorRead') paginatorRead:MatPaginator;
  @ViewChild(MatSort) sortRead: MatSort;
  @ViewChild('paginatorFine') paginatorFine:MatPaginator;
  @ViewChild(MatSort) sortFine: MatSort;

  user: Object;
  booksReserved: Object;
  booksRead: Object;
  reservedBooks: ReservedBookData[] = [];
  readBooks: ReadBookData[] = [];
  fineBooks: FineData[] = [];
  isLoadingResults = true;
  isLoadingResultsBookRead = true;
  totalFines = 0;

  ngAfterViewInit() {
    if (this.dataSource != undefined && this.dataSourceFines != undefined && this.dataSourceBookRead != undefined){
      this.dataSource.paginator = this.paginator;
      this.dataSourceFines.paginator = this.paginatorFine;
      this.dataSourceBookRead.paginator = this.paginatorRead;
    }
  }

  bookInsert(i:any) {
    return this.bookData.getBookById(this.booksReserved[i].bookId).pipe(map(book => {
      let newBook :ReservedBookData = {
        reservedDate: new Date(this.booksReserved[i].date).toLocaleString(),
        bookName: book['book']['name'],
        author: book['book']['author'],
        dueDate: new Date(this.booksReserved[i].date + 604800000).toLocaleString()
      };
      this.reservedBooks.push(newBook);

      this.dataSource = new MatTableDataSource(this.reservedBooks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));
  }

  bookReadInsert(i:any) {
    return this.bookData.getBookById(this.booksRead[i].bookId).pipe(map(book => {
      let newBook :ReadBookData = {
        reservedDate: new Date(this.booksRead[i].reservedDate).toLocaleString(),
        bookName: book['book']['name'],
        author: book['book']['author'],
        returnedDate: new Date(this.booksRead[i].returnedDate).toLocaleString()
      };
      this.readBooks.push(newBook);

      this.dataSourceBookRead = new MatTableDataSource(this.readBooks);
      this.dataSourceBookRead.paginator = this.paginatorRead;
      this.dataSourceBookRead.sort = this.sortRead;
    }));
  }

  fineInsert(i:any) {
    return this.bookData.getBookById(this.booksReserved[i].bookId).pipe(map(book => {
     /* if (Date.now() + 259200000  > (this.booksReserved[i].date + 86400000)){
        this.totalFines = this.totalFines +  ((Date.now() + 259200000  - (this.booksReserved[i].date + 86400000))/86400000) * 3;
        let newBook :FineData = {
          bookName: book['book']['name'],
          author: book['book']['author'],
          dueDate: new Date(this.booksReserved[i].date + 604800000).toLocaleString(),
          fine: Number(((Date.now() + 259200000  - (this.booksReserved[i].date + 86400000))/86400000) * 3).toFixed(2)
        };
        this.fineBooks.push(newBook);
      }*/

      if (Date.now()  > (this.booksReserved[i].date + 604800000)){
        let newBook :FineData = {
          bookName: book['book']['name'],
          author: book['book']['author'],
          dueDate: new Date(this.booksReserved[i].date + 604800000).toLocaleString(),
          fine: Number(((Date.now()  - (this.booksReserved[i].date + 604800000))/86400000) * 30).toFixed(2)
        };
        this.fineBooks.push(newBook);
      }

      this.dataSourceFines = new MatTableDataSource(this.fineBooks);
      this.dataSourceFines.paginator = this.paginatorFine;
      this.dataSourceFines.sort = this.sortFine;
    }));
  }

    constructor(private authService:AuthService, private bookData : BookDataService) {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile['user'];

        this.authService.getReservedBooks(this.user['email']).subscribe(data => {
          this.booksReserved = data['books'].reservedBooks;
          let length = Object.keys(this.booksReserved).length;
          if (length == 0){
            this.dataSource = new MatTableDataSource(this.reservedBooks);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.dataSourceFines = new MatTableDataSource(this.fineBooks);
            this.dataSourceFines.paginator = this.paginatorFine;
            this.dataSourceFines.sort = this.sortFine;
          }
          for (let i = 0; i < length; i++) {
              this.bookInsert(i).subscribe(_ => {});
              this.fineInsert(i).subscribe(_ => {});
            }
          });

        this.authService.getReadBooks(this.user['email']).subscribe(data => {
          this.booksRead = data['books'].pastBooks;
          let length = Object.keys(this.booksRead).length;
          if (length == 0){
            this.dataSourceBookRead = new MatTableDataSource(this.readBooks);
            this.dataSourceBookRead.paginator = this.paginatorRead;
            this.dataSourceBookRead.sort = this.sortRead;
          }else{
            for (let i = 0; i < length; i++) {
              this.bookReadInsert(i).subscribe(_ => {});
            }
          }
        });

        },
      error => {
        console.log(error);
        return false;
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

  applyFilterRead(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceBookRead.filter = filterValue;
    if (this.dataSourceBookRead.paginator) {
      this.dataSourceBookRead.paginator.firstPage();
    }
  }

  _setDataSource(indexNumber) {
    this.dataSource.paginator = this.paginator;
    this.dataSourceFines.paginator = this.paginatorFine;
    this.dataSourceBookRead.paginator = this.paginatorRead;
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
          !this.dataSourceBookRead.paginator ? this.dataSourceBookRead.paginator = this.paginatorRead : null;
          break;
        case 1:
          !this.dataSourceFines.paginator ? this.dataSourceFines.paginator = this.paginatorFine : null;
      }
    });
  }
}

export interface ReservedBookData {
  reservedDate: string;
  bookName: string;
  author: string;
  dueDate: string;
}

export interface ReadBookData {
  reservedDate: string;
  bookName: string;
  author: string;
  returnedDate: string;
}

export interface FineData {
  bookName: string;
  author: string;
  dueDate: string;
  fine: string;
}


