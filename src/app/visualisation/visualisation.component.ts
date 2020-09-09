import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../Services/network.service'
@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {

  businesses: string[] = [];
  total: number = 0;
  constructor(private networkService: NetworkService) { }


  ngOnInit(): void {
    this.networkService.getRestaurants().subscribe(data => {
      console.log(data)
      this.businesses = data.businesses;
      this.total = data.total;
    },
    (err) => {
      if (err.error instanceof Error)
        console.log(`Error: ${err}`)
      else
        console.log('Server side error')
    })
  }
}
