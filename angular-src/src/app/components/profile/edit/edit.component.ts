import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {ErrorStateMatcher, MatSnackBar} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: Object;

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile['user'];
        this.firstNameFormControl.setValue(this.user['firstName']);
        this.lastNameFormControl.setValue(this.user['lastName']);
      },
      error => {
        console.log(error);
        return false;
      });
  }

  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  updateProfile(){
    if(!this.firstNameFormControl.invalid && !this.lastNameFormControl.invalid){
      const user = {
        firstName:  this.firstNameFormControl.value,
        lastName: this.lastNameFormControl.value,
        email: this.user['email']
      };
      this.authService.updateUser(user).subscribe( result => {
        if (result['success']){
          this.snackBar.open("Updated Successfully","Close",{
            duration: 3000
          });
          this.router.navigate(['/profile']);
        }
      });
    }
  }

}
