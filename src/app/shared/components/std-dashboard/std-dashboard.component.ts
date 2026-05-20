import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stdsArr: Array<Istd> = [
    {
      fname: 'Tony',
      lname: 'Stark',
      email: 'tony@starkind.com',
      contact: 1234567890,
      stdId: '123',
      isActive: false
    },
    {
      fname: 'Bruce',
      lname: 'Wayne',
      email: 'bruse@starkind.com',
      contact: 4569871230,
      stdId: '124',
      isActive: true
    },
    {
      fname: 'Stiffen',
      lname: 'Strange',
      email: 'tony@starkind.com',
      contact: 3698521470,
      stdId: '125',
      isActive: false
    },
    {
      fname: 'Clark',
      lname: 'Kent',
      email: 'clark@starkind.com',
      contact: 9876543210,
      stdId: '126',
      isActive: true
    }
  ];
}



