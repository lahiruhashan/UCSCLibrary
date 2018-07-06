import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
    if (!this.authService.loggedIn()){
      return true;
    }else if (this.authService.adminLoggedIn()){
      this.router.navigate(['/adminHome']);
      return false;
    }else if (this.authService.memberLoggedIn()){
      this.router.navigate(['/']);
      return false;
    }

  }
}
