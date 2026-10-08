import { Component } from '@angular/core';
import { BlocTexteImage } from '../../components/components-reutilisables/bloc-texte-image/bloc-texte-image';
import { EspaceMini } from '../../components/components-espaces-verticales/components-espaces/espace-mini/espace-mini';
import { BlocImageTexte } from '../../components/components-reutilisables/bloc-image-texte/bloc-image-texte';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { BlocInfoRose } from '../../components/components-reutilisables/bloc-info-rose/bloc-info-rose';

@Component({
  selector: 'app-page-etudiante',
  imports: [BlocTexteImage, EspaceMini, BlocImageTexte, EspacePetit, TitrePage, BlocInfoRose],
  templateUrl: './page-etudiante.html',
  styleUrl: './page-etudiante.scss',
})
export class PageEtudiante {

}
