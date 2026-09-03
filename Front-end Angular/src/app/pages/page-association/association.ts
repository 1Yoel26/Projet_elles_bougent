import { Component } from '@angular/core';
import { TitrePage } from "../../components/components-reutilisables/titre-principal-page/titre-page";
import { EspacePetit } from "../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit";
import { BlocTexteImage } from "../../components/components-reutilisables/bloc-texte-image/bloc-texte-image";
import { BlocImageTexte } from "../../components/components-reutilisables/bloc-image-texte/bloc-image-texte";
import { TexteBoutonRose } from './components-page-association/bloc-info-rose/texte-bouton-rose';

@Component({
  selector: 'app-association',
  imports: [
    TitrePage, 
    EspacePetit, 
    BlocTexteImage, 
    BlocImageTexte, 
    TexteBoutonRose
  ],
  templateUrl: './association.html',
  styleUrl: './association.scss',
})
export class Association {

}
