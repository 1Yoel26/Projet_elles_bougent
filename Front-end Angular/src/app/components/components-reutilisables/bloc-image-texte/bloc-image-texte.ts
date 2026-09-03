import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-bloc-image-texte',
  imports: [NgStyle, MatButtonModule, RouterLink],
  templateUrl: './bloc-image-texte.html',
  styleUrl: './bloc-image-texte.scss',
})
export class BlocImageTexte {

  @Input() titre : string = "";
  @Input() description : string = "";
  @Input() titreBouton : string = "";
  @Input() lienBouton: string = "";
  @Input() cheminImage : string = "";
}
