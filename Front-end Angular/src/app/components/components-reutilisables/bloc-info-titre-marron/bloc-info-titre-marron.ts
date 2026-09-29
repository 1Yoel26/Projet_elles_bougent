import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-info-titre-marron',
  imports: [],
  templateUrl: './bloc-info-titre-marron.html',
  styleUrl: './bloc-info-titre-marron.scss',
})
export class BlocInfoTitreMarron {

  @Input() titre: string = "";
  @Input() texte: string = "";

}
