import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.css']
})
export class BarreDeRechercheComponent implements OnInit {
  @Output() searchName = new EventEmitter<string>();

  term = "";

  recherche() {
    this.searchName.emit(this.term)
    this.term = ""
    document.getElementById("wallpaper").classList.add("firstSearch");
    document.getElementById("result_container").classList.add("firstSearchMargin");


  }

  onKey(event: any)
  {
    if (event.key === 'Enter' || event.keyCode === 13)
      this.recherche()
  }
  constructor() { }

  ngOnInit(): void {
  }
}
