import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'HelpAndSave',
        icon: 'pi pi-globe',
        routerLink: '/'
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        routerLink: '/profil'
      },
      {
        label: 'Evenements',
        icon: 'pi pi-calendar',
        routerLink: '/evenements'
      },
      {
        label: 'Articles',
        icon: 'pi pi-folder-open',
        routerLink: '/articles'
      }
    ];
  }

}
