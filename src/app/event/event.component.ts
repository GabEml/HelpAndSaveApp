import { Component, OnInit } from '@angular/core';
import { Event } from '../event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event : Event = {
    name: "event 1",
    startDate: "15/07/21",
    endDate: "23/07/21",
    description: "Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.",
    maxParticipants: 10,
    adress: "51 Avenue des Gobelins, 75013 Paris",
    organizer: "name",
  };

  center: google.maps.LatLngLiteral = {lat: 48, lng: 2};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral = {lat: 48, lng: 2};

  constructor() { }

  ngOnInit(): void {
  }

}
