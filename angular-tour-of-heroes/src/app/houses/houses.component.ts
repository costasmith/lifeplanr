import { Component, OnInit } from '@angular/core';
import { House } from '../house';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  house: House = {
    id: 1,
    name: 'Four Bed',
    location: 'California'
  };

  constructor() { }

  ngOnInit() {
  }

}
