import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SousMenuPrincipal } from '../../../../../interfaces/sous-menu-principal';
import { MatSidenav } from '@angular/material/sidenav';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-bloc-sous-menu',
  imports: [
    RouterLink, 
    MatAnchor, 
    MatButtonModule],
  templateUrl: './bloc-sous-menu.html',
  styleUrl: './bloc-sous-menu.scss',
})
export class BlocSousMenu {

  @Input() contenuSousMenu!: SousMenuPrincipal;

  @Input() idMenu!: MatSidenav;

  public fermerLeMenu(){

    this.idMenu.close();

  }
 
}
