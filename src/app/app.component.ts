import { Component } from '@angular/core';
import { NetworkService } from './Services/network.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  term = ""


  constructor(private networkService: NetworkService){}

  ngOnInit(): void {
    this.networkService.getCurrentLocation().then(pos => {
      window.localStorage.setItem("Longitude", pos.lng);
      window.localStorage.setItem("Latitude", pos.lat)
    })
  }
}
