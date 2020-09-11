import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Yelp } from '../Interfaces/yelp'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  latitude: number;
  longitude: number;
  constructor(protected http: HttpClient) { }


  getCurrentLocation(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }


  getRestaurants(term): Observable<Yelp>
  {
    
    let lng = window.localStorage.getItem("Longitude");
    let lat = window.localStorage.getItem("Latitude");

    let url = `http://localhost:8080/?url=https://api.yelp.com/v3/businesses/search?term=${term}%26latitude=${lat}%26longitude=${lng}`
    // if(term=="1"){
    //   var url = "../../assets/example.api.json"
    // }else
    //   var url = "../../assets/example2.api.json"
    return this.http.get<Yelp>(url)
      
  }
}
