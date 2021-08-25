import {Component, Input, OnInit} from '@angular/core';
import {Contenu} from '../model/contenu';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  @Input() content: Contenu;
  constructor() {}
  ngOnInit(): void {}
}
