import { Component, Input } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MatListModule } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { SousMenuPrincipal } from '../../../interfaces/sous-menu-principal';
import { dataMenuOrdinateur } from '../../../data-statique/menu-ordinateur';
import { MatSidenav } from '@angular/material/sidenav';
import { BlocSousMenu } from "./components/bloc-sous-menu/bloc-sous-menu";

@Component({
  selector: 'app-menu-mobile-deroulant',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatListModule,
    RouterLink,
    BlocSousMenu
],
  templateUrl: './menu-mobile-deroulant.html',
  styleUrl: './menu-mobile-deroulant.scss',
})
export class MenuMobileDeroulant {

  public contenuSousMenu: SousMenuPrincipal = dataMenuOrdinateur["actions"]; 

  @Input() idDuMenuPourEnfant3!: MatSidenav;


  public recupererLien(lien: string){
    this.contenuSousMenu = dataMenuOrdinateur[lien];
  }

  public fermerLeMenu(){
    this.idDuMenuPourEnfant3.close();
  }


}
