import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { HistoireComponent } from './page/histoire/histoire.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ContactComponent } from './page/contact/contact.component';
import { SideImgSideTxtComponent } from './page/side-img-side-txt/side-img-side-txt.component';
import { TxtImgbgComponent } from './page/txt-imgbg/txt-imgbg.component';
import { CardDetailComponent } from './page/card-detail/card-detail.component';
import { DetailCardComponent } from './standalone/detail-card/detail-card.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'notre-histoire', component: HistoireComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projets/:id', component: TxtImgbgComponent},
  { path: 'us/:id', component: SideImgSideTxtComponent},
  { path: 'evenements', component: CardDetailComponent},
  { path: 'evenements/:id', component: SideImgSideTxtComponent},
  { path: 'publications', component: CardDetailComponent},
  { path: 'publications/:id', component: SideImgSideTxtComponent},
  { path: 'presse', component: CardDetailComponent},
  { path: 'presse/:id', component: SideImgSideTxtComponent},
  { path: '', component: AccueilComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
