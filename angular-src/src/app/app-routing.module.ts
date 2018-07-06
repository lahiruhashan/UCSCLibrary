import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {AuthGuard} from "./guards/auth.guard";
import {RequestBookComponent} from "./components/request-book/request-book.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {AdminGuard} from "./guards/admin.guard";
import {RequestedBooksComponent} from "./components/requested-books/requested-books.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {ReportComponent} from "./components/report/report.component";
import {AddAdminComponent} from "./components/add-admin/add-admin.component";
import {DefaultGuard} from "./guards/default.guard";
import {ProfileGuard} from "./guards/profile.guard";
import {UpdateBookComponent} from "./components/update-book/update-book.component";
import {EditComponent} from "./components/profile/edit/edit.component";

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'books/:bookName', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'books/book-details/:id', component: BookDetailsComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent,  canActivate: [DefaultGuard]},
  {path:'login', component: LoginComponent, canActivate: [DefaultGuard]},
  {path:'dashboard', component: DashboardComponent,  canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path:'requestBook', component: RequestBookComponent, canActivate: [AuthGuard]},
  {path:'addBook', component: AddBookComponent, canActivate: [AdminGuard]},
  {path:'requestedBooks', component: RequestedBooksComponent, canActivate: [AdminGuard]},
  {path:'adminHome', component: AdminHomeComponent, canActivate: [AdminGuard]},
  {path:'reports', component: ReportComponent, canActivate: [AdminGuard]},
  {path:'addAdmin', component: AddAdminComponent, canActivate: [AdminGuard]},
  {path:'updateBook/:id', component: UpdateBookComponent, canActivate: [AdminGuard]},
  {path:'profile/edit', component: EditComponent, canActivate: [ProfileGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
