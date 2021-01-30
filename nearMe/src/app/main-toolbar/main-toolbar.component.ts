import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
