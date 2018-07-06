import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
    if (this.authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
}
