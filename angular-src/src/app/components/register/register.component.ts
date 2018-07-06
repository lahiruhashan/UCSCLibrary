import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  rehide = true;

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  indexFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.minLength(8)
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

  onRegisterSubmit(){
    if(!this.firstNameFormControl.invalid && !this.lastNameFormControl.invalid && !this.indexFormControl.invalid ||
      !this.emailFormControl.invalid && !this.passwordFormControl.invalid && !this.rePasswordFormControl) {
      if (this.passwordFormControl.value !== this.rePasswordFormControl.value){
        this.snackBar.open('Passwords Does Not Match', 'Close',{
          duration: 2000
        });
      }else{
        const user = {
          firstName:  this.firstNameFormControl.value,
          lastName: this.lastNameFormControl.value,
          indexNumber: this.indexFormControl.value,
          email: this.emailFormControl.value,
          password: this.passwordFormControl.value
        };

        this.authService.checkUserAvailability(user).subscribe( data => {
          if (data['success']){
            this.authService.registerUser(user).subscribe(data => {
              if(data['success']){
                this.snackBar.open("Registration Successful, You Can Login Now", "Close", {
                  duration: 3000
                });
                this.router.navigate(['/login']);
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
