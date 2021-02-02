import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lng;
  lat;
  isOpen = false;

  sellers = [
    {
      lng : 24.029716999999999,
      lat : 49.839680
    },
    {
      lng : 24.029716999999999,
      lat : 49.839684
    },
    {
      lng : 24.029716999999998,
      lat : 49.839683
    }
  ];

  constructor() {
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('click');
  }


}
