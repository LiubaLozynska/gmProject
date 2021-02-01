import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<boolean>();

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.logOut();
  }

}
