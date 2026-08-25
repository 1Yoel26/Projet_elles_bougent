import { Component } from '@angular/core';
import { TitrePage } from "../../components/components-reutilisables/titre-page/titre-page";
import { EspacePetit } from "../../components/components-espaces/components-espaces/espace-petit/espace-petit";
import { BlocTexteImage } from "../../components/components-reutilisables/bloc-texte-image/bloc-texte-image";
import { BlocImageTexte } from "../../components/components-reutilisables/bloc-image-texte/bloc-image-texte";

@Component({
  selector: 'app-association',
  imports: [TitrePage, EspacePetit, BlocTexteImage, BlocImageTexte],
  templateUrl: './association.html',
  styleUrl: './association.scss',
})
export class Association {

}
