import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit{

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const tripCode = localStorage.getItem("tripCode");
    console.log(`Inside delete-trip Component and this is tripCode: ${tripCode} #DeleteTrip`);
    if(!tripCode) {
      console.log("Can't get stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    this.tripService.deleteTrip(tripCode)
    .then(() => {
      console.log(`Trip with code ${tripCode} was deleted`);
      this.router.navigate(['']);
    })
    .catch(error => {
      console.error(`Error deleting trip with code ${tripCode}: ${error}`);
    });
  }
}


