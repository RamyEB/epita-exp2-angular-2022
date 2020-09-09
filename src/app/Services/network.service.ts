import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Yelp } from '../Interfaces/yelp'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  latitude: number = 37.786882;
  longitude: number = -122.399972;
  term: string = "delis";
  constructor(protected http: HttpClient) { }

  createAuthHeaders(header: HttpHeaders)
  {
    header.append('Authorization', `Bearer ${environment.yelp_api_key}`  )
  }

  getCurrentLocation()
  {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
    })
  }

  getRestaurants(): Observable<Yelp>
  {
    let header = new HttpHeaders();
    this.getCurrentLocation()
    let url = `https://api.yelp.com/v3/businesses/search?term=${this.term}&latitude=${this.latitude}&longitude=${this.longitude}`
    this.createAuthHeaders(header)
    return this.http.get<Yelp>(url, {headers: header})
  }
}
