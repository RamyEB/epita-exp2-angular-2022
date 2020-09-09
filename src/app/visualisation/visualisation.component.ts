import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../Services/network.service'
@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {

  term: string;
  businesses: string[];
  total: number;
  constructor(private networkService: NetworkService) { }


  launchSearch(term: string)
  {
    this.term = term;
    console.log(term)
    this.networkService.getRestaurants(this.term).subscribe(data => {
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

  ngOnInit(): void {

  }
}
