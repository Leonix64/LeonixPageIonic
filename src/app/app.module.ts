import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { WatchComponent } from './watch/watch.component';
import { IndexPage } from './index/index.page';
import { InformationCardComponent } from './information-card/information-card.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, WatchComponent, IndexPage, InformationCardComponent, MyJourneyComponent, PortfolioComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [WatchComponent]
})
export class AppModule { }
