import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../Services/network.service'
import { Filtre } from '../Interfaces/filtre'

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {
  term: string;
  businesses: string[];
  total: number = -1;

  constructor(private networkService: NetworkService) { }
  
  launchSearch(filtre: Filtre)
  {
    console.log(filtre)

    this.term = filtre.term;
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
