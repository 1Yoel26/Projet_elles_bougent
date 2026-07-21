import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-component-accueil-inscription',
  imports: [MatButtonModule, NgStyle],
  templateUrl: './component-accueil-inscription.html',
  styleUrl: './component-accueil-inscription.scss',
})
export class ComponentAccueilInscription {

  @Input() backgroundImage: string = "";
  @Input() texte: string = "";
  @Input() texteBoutton = "";

}
