import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-marron',
  imports: [],
  templateUrl: './titre-marron.html',
  styleUrl: './titre-marron.scss',
})
export class TitreMarron {

  @Input() titre: string = "";

}
