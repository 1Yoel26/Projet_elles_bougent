import { Component, Input } from '@angular/core';
import { EspacePetit } from '../../components-espaces-verticales/components-espaces/espace-petit/espace-petit';

@Component({
  selector: 'app-titre-page',
  imports: [EspacePetit],
  templateUrl: './titre-page.html',
  styleUrl: './titre-page.scss',
})
export class TitrePage {

  @Input() titre: string = "";

}
