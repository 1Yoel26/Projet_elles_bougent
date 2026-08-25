import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SousMenuPrincipal } from '../../../interfaces/sous-menu-principal';
import { dataMenuOrdinateur } from '../../../data-statique/menu-ordinateur';

@Component({
  selector: 'app-menu-principal-ordinateur',
  imports: [MatToolbarModule, RouterLink, MatButtonModule],
  templateUrl: './menu-principal-ordinateur.html',
  styleUrl: './menu-principal-ordinateur.scss',
})
export class MenuPrincipalOrdinateur {


  public contenuSousMenu!: SousMenuPrincipal;
  lienEstSurvoler: string | null = null;
  listeDesLiensASurvoler: string[] = ["association", "actions", "delegation", "engagement"];


  public lienSurvoler(lien: string){
    
    // recuperation du lien survoler parmis les 4 liens qui on l'evenement pour detecter le (mouseenter):
    this.lienEstSurvoler = lien;

    console.trace();

    console.log("mouseenter :", lien);

    // si le lien survoler fait bien partie de la listeDesLiensASurvoler,
    // alors on charge les données pour le contenuSousMenu (qui sera affiché dans le menu-ordinateur.html):
    if(this.lienEstSurvoler != null && this.listeDesLiensASurvoler.includes(this.lienEstSurvoler)){
      
      this.contenuSousMenu = dataMenuOrdinateur[this.lienEstSurvoler];
      
    }
    // si le lien récupérer n'est pas valide (par mesure de sécurité):
    else{

      this.lienEstSurvoler = null;
      alert('lien invalide');

    }

  }

  // cette fonction detecte lorsque la souris sors du sous-menu, avec le (mouseleave) dans le fichier .html):
  public sousMenuQuitter(){

    this.lienEstSurvoler = null;
    
  }


}
