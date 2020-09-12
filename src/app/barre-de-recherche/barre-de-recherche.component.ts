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

  constructor() { }

  ngOnInit(): void {
  }
}

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f1dcb2ca9f1186a88a3a32ff1a64971&tags=sport&format=json&nojsoncallback=1&api_sig=83bfc68817e674fd392e7333bf9a26b8
// https://www.flickr.com/services/api/misc.urls.html