import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as authData from '../../app/auth.json';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  login(userName: string, password: string) {
    if (userName === authData.loggedInUser.userName &&
        password === authData.loggedInUser.password) {

        localStorage.setItem('token', `${authData.jwtToken}`);
        this.router.navigate(['']);
    } else {
      this.snackBar.open('Login data not correct', 'OK', {duration: 2000});
    }
  }

  isValid(): boolean {
    const token = localStorage.getItem('token');

    if (token) { return true; }
    else { return false; }
  }

  logOut() {
    localStorage.removeItem('token');
    location.reload();
  }
}
