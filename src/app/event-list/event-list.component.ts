import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
