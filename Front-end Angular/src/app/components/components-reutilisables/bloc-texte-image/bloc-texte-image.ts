import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bloc-texte-image',
  imports: [
    MatButtonModule,
    NgStyle
],
  templateUrl: './bloc-texte-image.html',
  styleUrl: './bloc-texte-image.scss',
})
export class BlocTexteImage {

  @Input() titre : string = "";
  @Input() description : string = "";
  @Input() titreBouton : string = "";
  @Input() cheminImage : string = "";

}
