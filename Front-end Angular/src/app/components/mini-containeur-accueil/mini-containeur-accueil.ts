import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-containeur-accueil',
  imports: [],
  templateUrl: './mini-containeur-accueil.html',
  styleUrl: './mini-containeur-accueil.scss',
})
export class MiniContaineurAccueil {

  // variables qui seront remplis dynamiquement dans le fichier html de la page d'accueil :
  @Input() sourceImage = "";
  @Input() titre = "";
  @Input() description = "";

}
