import { Component, OnInit } from '@angular/core';
import {Contenu} from '../model/contenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contentList: Contenu[];

  constructor() {
    this.contentList = [];
  }

  ngOnInit(): void {
    this.contentList = [
      {
        position: false,
        image: '../assets/nettoyage.jpg',
        titre: 'Prévenir et guérir  l\'erreur humain',
        texte: 'Notre objectif faire prendre conscience à chacun de l\'importance de protéger l\'environnement et les gens qui nous entoure. Help and Save, vous guidera dans la manifestation de votre envie d\'aider et d\'agir pour que le monde de demains devienne un monde meilleure.\n' +
          '\n' + 'Aurjourd\'hui, des gens de tout les horizons partage et soutienne notre mouvement qui consiste a tendre la main ainsi que preparer l\'avenir de nos enfants.\n' +
          '\n' + 'Pour protéger l\'avenir de l\'humanité, il est indispensable de protéger l\'environnement et de tendre la main vers son prochain des aujourd\'hui.',
        class: 'bottle'
      },
      {
        position: true,
        image: '../assets/stripe.png',
        titre: 'Financement avec Stripe',
        texte: 'Help and Save pour permettra de contribuer financièrement en utilisant une plateforme de paiement Stripe.' +
          'Stripe est très complète et permettra sans souci de financer des evenement à forte croissance. ' +
          'Acceptez des paiements et transférez des fonds dans le monde entier pour financer ceux en qui vous croyez, conçues pour vous aider à manipuler vos fond.',
        class: 'stripe'
      },
      {
        position: false,
        image: '../assets/fiche-lecture.jpg',
        titre: 'Actualité ecologique',
        texte: 'Des heures de lecture sont disponible sur help and Save afin de ne rien louper sur l\'activité ecologique et sociologique dans le monde.' +
          'Le numérique est-il vraiment si polluant, La voiture électrique : plus écologique ou pas, La transition écologique est-elle compatible avec notre système économique autant d\'article populaire qui aujourd\'hui sont des sujet qui font débat dans notre société apres lecture toi aussi donne ton avis sur le monde d\'aujourd\'hui',
        class: 'book'
      }
    ];
  }
}
