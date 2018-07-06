import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AdminService} from "../../services/admin.service";
import {BookDataService} from "../../services/book-data.service";
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  displayedColumns = ['Student Index', 'Book Name', 'Date Paid', 'Amount'];
  displayedColumnsBook = ['Book Name', 'Author', 'Publisher', 'Added Date', 'Copies'];
  dataSourceFine: MatTableDataSource<FineData>;
  dataSourceBook: MatTableDataSource<BookData>;

  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginatorBook') paginatorBook:MatPaginator;
  @ViewChild(MatSort) sortBook: MatSort;

  finesSet: FineData [];
  booksSet: BookData [];

  isLoadingResults = true;
  isLoadingResultsBook = true;

  selected = 'Last 30 Days';
  newSelected = 'Last 30 Days';
  totalFine = 0;

  selectedBook = 'Last 30 Days';
  newSelectedBook = 'Last 30 Days';
  totalBooks = 0;

  constructor(private adminService: AdminService, private bookDataService: BookDataService) {  }

  ngOnInit() {
    this.prepareFineTable(Date.now() - 2592000000,  Date.now());
    this.prepareBookTable(Date.now() - 2592000000,  Date.now());
  }

  prepareFineTable(filter, today){
    this.finesSet = [];
    this.totalFine = 0;
    this.adminService.getFines(filter,today).subscribe(fineData => {
      fineData['fines'].forEach(item => {

        let newFine :FineData = {
          indexNumber : item['indexNumber'],
          bookName: item['bookName'],
          datePaid: new Date(Number(item['datePaid'])).toLocaleString(),
          amount: item['amount']
        };
        this.finesSet.push(newFine);
        this.totalFine+=item['amount'];
      });
      this.isLoadingResults = false;
      this.dataSourceFine = new MatTableDataSource(this.finesSet);
      this.dataSourceFine.paginator = this.paginator;
      this.dataSourceFine.sort = this.sort;

    });
  }

  prepareBookTable(filter, today){
    this.booksSet = [];
    this.totalBooks = 0;
    this.bookDataService.getBooksFilter(filter,today).subscribe(bookData => {
      bookData['books'].forEach(item => {

        let newBook :BookData = {
          bookName : item['name'],
          author: item['author'],
          publisher: item['publisher'],
          dateAdded: new Date(Number(item['from'])).toLocaleString(),
          copies: item['copies']
        };
        this.booksSet.push(newBook);
        this.totalBooks+=item['copies'];
      });
      this.isLoadingResultsBook = false;
      this.dataSourceBook = new MatTableDataSource(this.booksSet);
      this.dataSourceBook.paginator = this.paginatorBook;
      this.dataSourceBook.sort = this.sortBook;

    });
  }

  dropDownFilter(){
    this.newSelected = this.selected;
    if (this.selected == 'Today'){
      let theDay = new Date(Date.now());
      let todayMilliseconds = new Date(theDay.getFullYear(),theDay.getMonth(),theDay.getDate()).getTime();
      this.prepareFineTable(todayMilliseconds, Date.now());
    }else if(this.selected == 'Last 7 Days'){
      this.prepareFineTable(Date.now() - 604800000, Date.now());
    }else if (this.selected == 'Last 30 Days'){
      this.prepareFineTable(Date.now() - 2592000000, Date.now());
    }else if (this.selected == 'Last Year'){
      this.prepareFineTable(Date.now() - 31536000000, Date.now());
    }else if (this.selected == 'All Times'){
      this.prepareFineTable(null, Date.now);
    }
  }

  dropDownFilterBook(){
    this.newSelectedBook = this.selectedBook;
    if (this.selectedBook == 'Today'){
      let theDay = new Date(Date.now());
      let todayMilliseconds = new Date(theDay.getFullYear(),theDay.getMonth(),theDay.getDate()).getTime();
      this.prepareBookTable(todayMilliseconds, Date.now());
    }else if(this.selectedBook == 'Last 7 Days'){
      this.prepareBookTable(Date.now() - 604800000, Date.now());
    }else if (this.selectedBook == 'Last 30 Days'){
      this.prepareBookTable(Date.now() - 2592000000, Date.now());
    }else if (this.selectedBook == 'Last Year'){
      this.prepareBookTable(Date.now() - 31536000000, Date.now());
    }else if (this.selectedBook == 'All Times'){
      this.prepareBookTable(null, Date.now);
    }
  }

  downloadFinesPdf(){
    let columns = [
      {title : "Index Number",dataKey:"indexNumber"},
      {title : "Book Name",dataKey:"bookName"},
      {title : "Paid Date",dataKey:"datePaid"},
      {title : "Amount (LKR)",dataKey:"amount"}
      ];
    let rows = this.finesSet;
    let total : FineData = {
      indexNumber : "Total",
      bookName: '',
      datePaid: '',
      amount: Number(this.totalFine.toFixed(2))
    };
    rows.push(total);

    let doc = new jsPDF('p', 'pt');
    doc.text("Report Of Fines Formongo " + this.selectedBook, 40, 30);
    doc.autoTable(columns, rows);
    doc.save('fines.pdf');

  }

  downloadBooksPdf(){
    let columns = [
      {title : "Book Name",dataKey:"bookName"},
      {title : "Author",dataKey:"author"},
      {title : "Publisher",dataKey:"publisher"},
      {title : "Added On",dataKey:"dateAdded"},
      {title : "Copies",dataKey:"copies"}
    ];
    let rows = this.booksSet;
    let total : BookData = {
      bookName : "Total",
      author: '',
      publisher: '',
      dateAdded: '',
      copies: this.totalBooks
    };
    rows.push(total);

    let doc = new jsPDF('p', 'pt');
    doc.text("Report Of Books For " + this.selectedBook, 40, 30);
    doc.autoTable(columns, rows);
    doc.save('books.pdf');

  }
}


export interface FineData {
  indexNumber: any,
  bookName: string,
  datePaid: string,
  amount: number
}

export interface BookData{
  bookName: string,
  author: string,
  publisher: string,
  dateAdded: string,
  copies: number
}
