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
  total: number = -1;

  dummy_image: string = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/4f30aa60678e/assets/img/default_avatars/business_large_square.png"
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
