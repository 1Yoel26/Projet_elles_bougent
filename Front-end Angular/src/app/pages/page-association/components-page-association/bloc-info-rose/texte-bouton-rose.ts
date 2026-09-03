import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-texte-bouton-rose',
  imports: [MatButtonModule],
  templateUrl: './texte-bouton-rose.html',
  styleUrl: './texte-bouton-rose.scss',
})
export class TexteBoutonRose {

  @Input() titre: string = "";
  @Input() description: string = "";
  @Input() titreBouton: string = "";

}
