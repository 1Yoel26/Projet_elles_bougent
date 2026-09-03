import { Component } from '@angular/core';
import { TitrePage } from "../../components/components-reutilisables/titre-principal-page/titre-page";
import { BlocImageTexte } from "../../components/components-reutilisables/bloc-image-texte/bloc-image-texte";
import { TitreMarron } from "../../components/components-reutilisables/titre-marron/titre-marron";
import { EspacePetit } from "../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit";
import { BlocTexteImage } from "../../components/components-reutilisables/bloc-texte-image/bloc-texte-image";
import { Action } from './components-page-actions/action/action';

@Component({
  selector: 'app-actions',
  imports: [TitrePage, BlocImageTexte, TitreMarron, EspacePetit, BlocTexteImage, Action],
  templateUrl: './actions.html',
  styleUrl: './actions.scss',
})
export class Actions {

}
