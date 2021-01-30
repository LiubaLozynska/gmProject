import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
      private authService: AuthenticationService,
      private router: Router
    ) { }

    canActivate() {
      if (this.authService.isValid()) {
          return true;
      } else {
        this.router.navigate(['sign-in']);
        return false;
      }
    }

}
