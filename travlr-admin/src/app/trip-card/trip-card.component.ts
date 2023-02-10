import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from "../models/trip";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public editTrip(trip: Trip): void {
    console.log('Inside trip-card Component #EditTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
  public deleteTrip(trip: Trip): void {
    console.log('Inside trip-card Component #DeleteTrip');
    localStorage.setItem("tripCode", trip.code);
    // this.router.navigate(['']);
    this.router.navigate(['delete-trip']);
  }
}
