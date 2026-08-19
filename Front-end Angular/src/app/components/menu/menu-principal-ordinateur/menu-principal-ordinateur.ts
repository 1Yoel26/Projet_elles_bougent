import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SousMenuPrincipal } from '../../../interfaces/sous-menu-principal';

@Component({
  selector: 'app-menu-principal-ordinateur',
  imports: [MatToolbarModule, RouterLink, MatButtonModule],
  templateUrl: './menu-principal-ordinateur.html',
  styleUrl: './menu-principal-ordinateur.scss',
})
export class MenuPrincipalOrdinateur implements OnInit{

  public contenuSousMenu!: SousMenuPrincipal;
  lienSurvoler: string | null = "delegation";


  ngOnInit(): void {

    if(this.lienSurvoler && this.lienSurvoler == "delegation"){

      this.contenuSousMenu = {
        titrePresentation1: "Présentation",
        paragraphePresentation1: "Elles bougent œuvre pour renforcer la mixité dans les secteurs scientifiques, technologiques et industriels, en donnant aux jeunes filles les clés pour s’orienter vers les métiers d’ingénieure et de technicienne.",
        tableauTitreBouton: [
          "En savoir plus"
        ],
        listeNomsImages: [
          {
            titreImage: "En France",
            cheminImage: "images/images-menu/subnav-france.jpg"
          },

          {
            titreImage: "À l'international",
            cheminImage: "images/images-menu/subnav-international.jpg"
          },

          {
            titreImage: "En France",
            cheminImage: "images/images-menu/subnav-france.jpg"
          },

          {
            titreImage: "À l'international",
            cheminImage: "images/images-menu/subnav-international.jpg"
          },
        ],

        titrePresentation2: "Devenez déléguée régionale !",
        paragraphePresentation2: "Coordonnez nos actions, mobilisez le réseau local et inspirez les filles sur votre territoire.",
        titreBouton2: "Demande d'information"

      }


    }


    
  }

}
