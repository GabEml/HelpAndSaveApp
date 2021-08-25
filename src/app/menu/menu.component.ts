import { Component, OnInit } from '@angular/core';
import {Photos} from '../model/photos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  photos: Photos[];

  constructor() {
  }

  ngOnInit(): void {
    this.photos = [
      {
        src: '../assets/mer.jpg'
      },
      {
        src: '../assets/desert.jpg'
      },
      {
        src: '../assets/montagne.jpg'
      }
    ];
  }
}
