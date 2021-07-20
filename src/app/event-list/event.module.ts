import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import { EventListComponent } from './event-list.component';

@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }