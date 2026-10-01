import { Component } from '@angular/core';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { InfoOrganisation } from './components/info-organisation/info-organisation';

@Component({
  selector: 'app-organisation',
  imports: [
    TitrePage,
    EspacePetit,
    InfoOrganisation
],
  templateUrl: './organisation.html',
  styleUrl: './organisation.scss',
})
export class Organisation {


}

