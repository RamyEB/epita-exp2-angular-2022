import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component';
import { VisualisationComponent } from './visualisation/visualisation.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreDeRechercheComponent,
    VisualisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
