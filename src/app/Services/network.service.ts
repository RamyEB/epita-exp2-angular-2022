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

  getRestaurants(term, radius, open, price): Observable<Yelp>
  {
    
    let lng = window.localStorage.getItem("Longitude");
    let lat = window.localStorage.getItem("Latitude");

    console.log(term, radius, open, price)

    console.log("Price " + price)
    let url = `https://yelp-bypass.herokuapp.com/?url=https://api.yelp.com/v3/businesses/search?term=${term}%26latitude=${lat}%26longitude=${lng}`

    url += `%26radius=${radius}`
    url += `%26open_now=${open}`
    if (price < 5)
      url += `%26price=${price}`

    console.log(url)
    return this.http.get<Yelp>(url)
  }
}
