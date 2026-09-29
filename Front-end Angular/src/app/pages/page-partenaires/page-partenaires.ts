import { Component, Input } from '@angular/core';
import { BlocTexteImage } from '../../components/components-reutilisables/bloc-texte-image/bloc-texte-image';
import { TitrePage } from '../../components/components-reutilisables/titre-principal-page/titre-page';
import { EspacePetit } from '../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';
import { BlocChiffreRose } from './components/bloc-chiffre-rose/bloc-chiffre-rose';
import { listeChiffreTitre } from '../../interfaces/listeChiffreTitre';
import { TitreMarron } from '../../components/components-reutilisables/titre-marron/titre-marron';
import { UnPartenaire } from './components/un-partenaire/un-partenaire';
import { BlocInfoRose } from './components/bloc-info-rose/bloc-info-rose';

@Component({
  selector: 'app-page-partenaires',
  imports: [BlocTexteImage, TitrePage, EspacePetit, BlocChiffreRose, TitreMarron, UnPartenaire, BlocInfoRose],
  templateUrl: './page-partenaires.html',
  styleUrl: './page-partenaires.scss',
})
export class PagePartenaires {

  titre: string = "Les partenaires Elles bougent, ce sont...";
  
  listeChiffreTitre: listeChiffreTitre[] = [

    {
      chiffre: 254,
      titre: "entreprises"
    },

    {
      chiffre: 11,
      titre: "fédérations"
    },

    {
      chiffre: 11,
      titre: "fédérations"
    },

    {
      chiffre: 68,
      titre: "grandes écoles et universités"
    },

    {
      chiffre: 11,
      titre: "associations"
    },

    {
      chiffre: 26,
      titre: "institutionnels"
    },

  ];
  
  
  titreBouton: string = "Découvrir nos 375 partenaires";
  
  lienBouton: string = "/engagement/partenaires/annuaire";
  

}
