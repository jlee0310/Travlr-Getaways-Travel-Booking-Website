import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

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
        let tripCode = localStorage.getItem("tripCode");
        console.log(`Inside delete-trip Component and this is tripCode: ${tripCode} #DeleteTrip`);
        if(!tripCode) {
          console.log("Can't get stashed tripCode!");
          this.router.navigate(['']);
          return;
        } else {
          this.tripService.deleteTrip(tripCode);
        }
        
    }
    ngOnDelete() {
      this.router.navigate(['']);
    }

}







