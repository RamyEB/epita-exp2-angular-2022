import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {NgForm}  from '@angular/forms';
import { Filtre } from '../Interfaces/filtre'


interface Prix {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.css']
})
export class BarreDeRechercheComponent implements OnInit {
  @Output() searchName = new EventEmitter<string>();
  @Output() filtre_emit = new EventEmitter<Filtre>();
  
  filtre: Filtre =   {
    term: "",
    price: 4,
    radius: 40000,
    open_now: false
  }

  nb_recherche: number = 0

  onSubmit(form: NgForm){
    this.nb_recherche+=1
    
    if(form.value.rayon!="")
      this.filtre.radius = form.value.rayon
      
    if(form.value.prix != "")
      this.filtre.price = Number(form.value.prix)
    else
      this.filtre.price = 4

    if(form.value.open!="")
      this.filtre.open_now = true
    else
      this.filtre.open_now = false

    this.filtre.term = form.value.term

    this.filtre_emit.emit(this.filtre)
    if(!(this.nb_recherche>1)){
      document.getElementById("YAYC").classList.add('element-disappears')
      document.getElementById("titleText").classList.add('element-disappears')
      setTimeout(function() {
        document.getElementById("titleText").classList.add('element-position')
        document.getElementById("YAYC").classList.add("element-position");
        document.getElementById("wallpaper").classList.add("firstSearch-justify-content");
        document.getElementById("wallpaper").classList.add("firstSearch");
        document.getElementById("result_container").classList.add("firstSearchMargin");
        document.getElementById("giga_result_container").classList.add("transformContainer");
      }, 200);

    }

    
  }



  prices: Prix[] = [
    {value: '1', viewValue: '€'},
    {value: '2', viewValue: '€€'},
    {value: '3', viewValue: '€€€'},
    {value: '4', viewValue: '€€€€'}
  ];

  panelOpenState: boolean = false;

  togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }
    return value;
    
  }

  // onKey(event: any)
  // {
  //   if (event.key === 'Enter' || event.keyCode === 13)
  //   document.getElementById('#form').submit;
  // }
  constructor() { }

  ngOnInit(): void {
  }
}
