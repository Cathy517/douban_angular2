import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import axios from 'axios';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { HomeListComponent, contentPipe } from './home-list/home-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';

let rootRouterModule = RouterModule.forRoot(rootRouterConfig)

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubNavComponent,
    HomeListComponent,
    contentPipe,
    EventDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    rootRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


