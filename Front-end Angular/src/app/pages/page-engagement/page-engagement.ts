import { Component } from '@angular/core';
import { BlocInfoTitreMarron } from '../../components/components-reutilisables/bloc-info-titre-marron/bloc-info-titre-marron';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { BlocImageTexte } from '../../components/components-reutilisables/bloc-image-texte/bloc-image-texte';
import { BlocTexteImage } from '../../components/components-reutilisables/bloc-texte-image/bloc-texte-image';

@Component({
  selector: 'app-page-engagement',
  imports: [BlocInfoTitreMarron, TitrePage, EspacePetit, BlocImageTexte, BlocTexteImage],
  templateUrl: './page-engagement.html',
  styleUrl: './page-engagement.scss',
})
export class PageEngagement {

}
