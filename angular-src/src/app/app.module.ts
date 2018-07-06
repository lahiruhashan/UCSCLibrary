import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//angular material imports
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from "@angular/material";
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component'
import { SearchBarComponent } from './components/home/search-bar/search-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchResultComponent } from './components/home/search-result/search-result.component';
import {HttpClientModule} from "@angular/common/http";
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {AuthGuard} from "./guards/auth.guard";
import { DialogOverviewDialog } from "./components/book-details/book-details.component";
import { DialogOverviewDialogRemoveBook} from "./components/admin-home/admin-home.component";
import { RequestBookComponent } from './components/request-book/request-book.component';
import {
  AddBookComponent, DialogOverviewDialogDeleteBook,
  DialogOverviewDialogUpdateBook
} from './components/add-book/add-book.component';
import { DialogOverviewDialogRequestedBook, RequestedBooksComponent } from './components/requested-books/requested-books.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ReportComponent } from './components/report/report.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { EditComponent } from './components/profile/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    SearchBarComponent,
    SearchResultComponent,
    BookDetailsComponent,
    DialogOverviewDialog,
    DialogOverviewDialogRemoveBook,
    DialogOverviewDialogRequestedBook,
    DialogOverviewDialogUpdateBook,
    DialogOverviewDialogDeleteBook,
    RequestBookComponent,
    AddBookComponent,
    RequestedBooksComponent,
    AdminHomeComponent,
    ReportComponent,
    AddAdminComponent,
    UpdateBookComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDividerModule,
    MatTabsModule,
    Ng2CarouselamosModule,
    MatBadgeModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogOverviewDialog,
    DialogOverviewDialogRemoveBook,
    DialogOverviewDialogRequestedBook,
    DialogOverviewDialogUpdateBook,
    DialogOverviewDialogDeleteBook,],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
