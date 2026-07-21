import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-accueil-actualite',
  imports: [NgStyle],
  templateUrl: './component-accueil-actualite.html',
  styleUrl: './component-accueil-actualite.scss',
})
export class ComponentAccueilActualite {
  @Input() sourceImage: string = "";
  @Input() date: string = "";
  @Input() texte: string = "";

}
