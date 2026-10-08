import { Component } from '@angular/core';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { BlocTexteImage } from '../../components/components-reutilisables/bloc-texte-image/bloc-texte-image';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { BlocInfoRose } from '../../components/components-reutilisables/bloc-info-rose/bloc-info-rose';
import { TitreMarron } from '../../components/components-reutilisables/titre-marron/titre-marron';
import { BlocUneMarraine } from './components/bloc-une-marraine/bloc-une-marraine';
import { EspaceMini } from '../../components/components-espaces-verticales/components-espaces/espace-mini/espace-mini';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-benevole',
  imports: [TitrePage, BlocTexteImage, EspacePetit, BlocInfoRose, TitreMarron, BlocUneMarraine, EspaceMini, MatButtonModule, RouterLink],
  templateUrl: './page-benevole.html',
  styleUrl: './page-benevole.scss',
})
export class PageBenevole {


}
