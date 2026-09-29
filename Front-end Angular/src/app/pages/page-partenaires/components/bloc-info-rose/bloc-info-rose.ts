import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bloc-info-rose',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './bloc-info-rose.html',
  styleUrl: './bloc-info-rose.scss',
})
export class BlocInfoRose {

  @Input() titre: string = "";
  @Input() texte: string = "";
  @Input() titreBouton: string = "";
  @Input() lienBouton: string = "";

}
