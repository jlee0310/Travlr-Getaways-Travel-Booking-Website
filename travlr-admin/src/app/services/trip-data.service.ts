import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {
  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  // Create
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data service #AddTrip');
    return this.http  
      .post(this.tripUrl, formData)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  // Read - Single trip
  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside trip-data service #GetTrip');
    return this.http
        .get(this.tripUrl + tripCode)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }

  // Read - All trips
  public getTrips(): Promise<Trip[]> {
    console.log('Inside trip-data service #GetTrips');
    return this.http
        .get(this.tripUrl)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }

  // Update
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data service #UpdateTrip');
    console.log(formData);
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response as Trip[])
    .catch(this.handleError);
   }

  public deleteTrip(tripCode: string) {
    console.log('Inside trip-data service #DeleteTrip');
    try {
      this.http.delete(this.tripUrl + tripCode).subscribe(() => console.log("Deleted."));
    } catch (error) {
      this.handleError(error)
    }
  }

   // Delete
  //  public deleteTrip(tripCode: string): Promise<Trip> {
  //   console.log('Inside trip-data service #DeleteTrip');
  //   return this.http
  //     .delete(this.tripUrl + tripCode)
  //     // .delete(trip.code)
  //     .toPromise()
  //     .then(response => response as Trip[])
  //     .catch(this.handleError);
  //  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('login', user);
    }

  public register(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('register', user);
    }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
     const url: string = `${this.apiBaseUrl}${urlPath}`;
     return this.http
     .post(url, user)
     .toPromise()
     .then(response => response as AuthResponse)
     .catch(this.handleError);
    } 





}

