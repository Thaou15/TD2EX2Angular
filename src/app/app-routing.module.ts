import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  // new sous menu de about : dans l'url on aura : about/news
    { path: 'about', component: AboutComponent, children :[{path: 'news', component: NewsComponent }]},
    { path: 'accueil', component: AccueilComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'recherche', component: RechercheComponent}, 
    //Rediriger vers la page d'accueil
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    //Lorsque que l'on va taper un lien inconnue
    { path: '**', component: PageNotFoundComponent }
   
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
