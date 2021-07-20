import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import { GoogleMapsModule } from '@angular/google-maps'
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';

import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
    GoogleMapsModule,
    CalendarModule,
    CardModule,
    FormsModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 