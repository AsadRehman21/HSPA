import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css']
})
export class PropertyCartComponent implements OnInit {

  constructor() { }
  Property: any = {
    Id: 1,
    Name : 'Birla House',
    Type: 'House',
    Price: 120000
  };

  ngOnInit() {
  }

}
