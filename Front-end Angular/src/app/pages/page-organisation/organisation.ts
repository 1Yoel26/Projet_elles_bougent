import { Component } from '@angular/core';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { BlocInfoRose } from './components/bloc-info-rose/bloc-info-rose';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';

@Component({
  selector: 'app-organisation',
  imports: [
    TitrePage, 
    BlocInfoRose, 
    EspacePetit
  ],
  templateUrl: './organisation.html',
  styleUrl: './organisation.scss',
})
export class Organisation {


}

