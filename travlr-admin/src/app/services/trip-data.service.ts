import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Http } from '@angular/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

import { Trip } from '../models/trip';
// import { interval, take, lastValueFrom } from 'rxjs';

@Injectable()
export class TripDataService {
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http  
      .post(this.tripUrl, formData)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
        .get(this.tripUrl + tripCode)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
        .get(this.tripUrl)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response as Trip[])
    .catch(this.handleError);
   }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}


// @Injectable({
//   providedIn: 'root'
// })
// export class TripDataService {

//   constructor() { }
// }
