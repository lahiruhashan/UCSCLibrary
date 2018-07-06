import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {routerNgProbeToken} from "@angular/router/src/router_module";
import {MatSnackBar} from "@angular/material";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    console.log(control);
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  onLoginSubmit(){
    if(!this.emailFormControl.invalid){
      const user = {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value
      };
      this.authService.authenticateUser(user).subscribe(data => {
        if (data['success']){
          this.authService.storeUserData(data['token'], data['user']);
          if(data['user'].type == 'member'){
            this.router.navigate(['/']);
          }else if (data['user'].type == 'admin'){
            this.router.navigate(['/adminHome']);
          }
        }else{
          if (data['msg'] == 'User not found'){
            this.snackBar.open('Invalid Credentials', 'Close',{
              duration: 2000
            });
          }else{
            this.snackBar.open('Wrong Password', 'Close',{
              duration: 2000
            });
          }

        }
      });
    }
  }

}
