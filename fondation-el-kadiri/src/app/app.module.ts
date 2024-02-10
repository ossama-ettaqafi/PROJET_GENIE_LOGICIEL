import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './standalone/navbar/navbar.component';
import { FooterComponent } from './standalone/footer/footer.component';
import { FormComponent } from './standalone/form/form.component';
import { DetailCardComponent } from './standalone/detail-card/detail-card.component';
import { CardsComponent } from './standalone/cards/cards.component';
import { HistoryComponent } from './standalone/history/history.component';
import { BgTitleComponent } from './standalone/bg-title/bg-title.component';
import { ToTopComponent } from './standalone/to-top/to-top.component';
import { ContactComponent } from './page/contact/contact.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HistoireComponent } from './page/histoire/histoire.component';
import { SideImgSideTxtComponent } from './page/side-img-side-txt/side-img-side-txt.component';
import { TxtImgbgComponent } from './page/txt-imgbg/txt-imgbg.component';
import { CardDetailComponent } from './page/card-detail/card-detail.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingIndicatorComponent } from './standalone/loading-indicator/loading-indicator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, FormComponent, DetailCardComponent, CardsComponent, HistoryComponent, BgTitleComponent, ToTopComponent, ContactComponent, AccueilComponent, HistoireComponent, SideImgSideTxtComponent, TxtImgbgComponent, CardDetailComponent, NotfoundComponent, LoadingIndicatorComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CarouselModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
