import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    AccueilComponent,
    RechercheComponent,
    NewsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
