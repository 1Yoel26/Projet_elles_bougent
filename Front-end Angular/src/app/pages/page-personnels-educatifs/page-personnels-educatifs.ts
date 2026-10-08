import { Component } from '@angular/core';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { BlocTexteImage } from '../../components/components-reutilisables/bloc-texte-image/bloc-texte-image';
import { BlocImageTexte } from '../../components/components-reutilisables/bloc-image-texte/bloc-image-texte';
import { EspaceMini } from '../../components/components-espaces-verticales/components-espaces/espace-mini/espace-mini';

@Component({
  selector: 'app-page-personnels-educatifs',
  imports: [TitrePage, EspacePetit, BlocTexteImage, BlocImageTexte, EspaceMini],
  templateUrl: './page-personnels-educatifs.html',
  styleUrl: './page-personnels-educatifs.scss',
})
export class PagePersonnelsEducatifs {

}
