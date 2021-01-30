import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  constructor(
    private router: Router
  ) { }

  login(userName: string, password: string) {
    localStorage.setItem('token', `${userName}${password}`);
    this.router.navigate(['']);

  }

  isValid(): boolean {
    const token = localStorage.getItem('token');

    if (token) { return true; }
    else { return false; }
  }

  getUser() {

  }
}
