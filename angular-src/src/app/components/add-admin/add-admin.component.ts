import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  hide = true;
  rehide = true;

  constructor(
    private snackBar: MatSnackBar,
    private router:Router,
    private authService: AuthService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
  }

  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  rePasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  onAddAdminSubmit(){
    if(!this.firstNameFormControl.invalid &&
      !this.lastNameFormControl.invalid &&
      !this.emailFormControl.invalid &&
      !this.passwordFormControl.invalid &&
      !this.rePasswordFormControl.invalid
    ) {
      if (this.passwordFormControl.value !== this.rePasswordFormControl.value){
        this.snackBar.open('Passwords Does Not Match', 'Close',{
          duration: 2000
        });
      }else{
        const user = {
          firstName:  this.firstNameFormControl.value,
          lastName: this.lastNameFormControl.value,
          email: this.emailFormControl.value,
          password: this.passwordFormControl.value,
          type : 'admin'
        };

        this.authService.checkAdminAvailability(user).subscribe( data => {
          if (data['success']){
            this.authService.registerUser(user).subscribe(data => {
              if(data['success']){
                this.snackBar.open("Admin Added Successfully", "Close", {
                  duration: 3000
                });
                this.router.navigate(['/addAdmin']);
              }
            });
          }else{
            this.snackBar.open("You Are Already Registered, Please Login", "Close", {
              duration: 3000
            });
          }
        });

      }
    }

  }

}
