import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  list = [
    {
      name: 'event 1',
      startDate: '15/07/21',
      endDate: '23/07/21',
      description:
        'Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.',
      maxParticipants: 10,
      adress: '51 Avenue des Gobelins, 75013 Paris',
      organizer: 'name',
    },
    {
      name: 'event 2',
      startDate: '05/07/21',
      endDate: '14/07/21',
      description:
        'Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.',
      maxParticipants: 8,
      adress: '13 Avenue des Coquelicots, 75013 Paris',
      organizer: 'name 2',
    },
    {
      name: 'event 3',
      startDate: '05/07/21',
      endDate: '14/07/21',
      description:
        'Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.',
      maxParticipants: 8,
      adress: '13 Avenue des Coquelicots, 75013 Paris',
      organizer: 'name 2',
    },
  ];

  dateValue: Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
