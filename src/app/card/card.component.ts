import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() business: any;

  dummy_image: string = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/4f30aa60678e/assets/img/default_avatars/business_large_square.png"
  
  constructor() { }

  arrayStars(n: number): any[] {
    let tab = []
    for (let i = 0; i < n; i++){
      tab.push(i)
    }
    return tab;
  }

  appeler(event: any, phone: string){
    let target = event.target
    if(phone)
    target.innerHTML = `<span style="font-weight: lighter;">${phone.replace("+33", "0")}</span>`;
    else target.innerHTML = `<span style="font-weight: lighter;">Pas de numéro</span>`;

  }

  ngOnInit(): void {
  }

}
