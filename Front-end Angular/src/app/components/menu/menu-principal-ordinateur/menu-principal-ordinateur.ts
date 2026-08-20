import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SousMenuPrincipal } from '../../../interfaces/sous-menu-principal';
import { NgIf } from '@angular/common';
import { dataMenuOrdinateur } from '../../../data-statique/menu-ordinateur';

@Component({
  selector: 'app-menu-principal-ordinateur',
  imports: [MatToolbarModule, RouterLink, MatButtonModule, NgIf],
  templateUrl: './menu-principal-ordinateur.html',
  styleUrl: './menu-principal-ordinateur.scss',
})
export class MenuPrincipalOrdinateur {

  constructor(private cdr: ChangeDetectorRef){}


  public contenuSousMenu!: SousMenuPrincipal;
  lienEstSurvoler: string | null = null;
  listeDesLiensASurvoler: string[] = ["association", "actions", "delegation", "engagement"];


  public lienSurvoler(lien: string){
    
    // recuperation du lien survoler parmis les 4 liens qui on l'evenement pour detecter le (mouseenter):
    this.lienEstSurvoler = lien;

    // si le lien survoler fait bien partie de la listeDesLiensASurvoler,
    // alors on charge les données pour le contenuSousMenu (qui sera affiché dans le menu-ordinateur.html):
    if(this.lienEstSurvoler != null && this.listeDesLiensASurvoler.includes(this.lienEstSurvoler)){
      
      this.contenuSousMenu = dataMenuOrdinateur[this.lienEstSurvoler];
      
    }
    // si le lien récupérer n'est pas valide (par mesure de sécurité):
    else{

      this.lienEstSurvoler = null;

    }

  }

  // cette fonction detecte lorsque la souris sors du sous-menu, avec le (mouseleave) dans le fichier .html):
  public sousMenuQuitter(){

    this.lienEstSurvoler = null;
    
  }

  public fermerSousMenuAvecDelais(){

    setTimeout(() => {

      this.lienEstSurvoler = null;
      alert(this.lienEstSurvoler);

      this.cdr.detectChanges();
      
    }, 2000);
    

  }

}
