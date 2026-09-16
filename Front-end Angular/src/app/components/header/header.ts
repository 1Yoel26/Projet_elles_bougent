import { Component, Input } from '@angular/core';
import { MenuPrincipalOrdinateur } from "../menu/menu-principal-ordinateur/menu-principal-ordinateur";
import { MenuPrincipalMobile } from "../menu/menu-principal-mobile/menu-principal-mobile";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [MenuPrincipalOrdinateur, MenuPrincipalMobile],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() idDuMenuPourEnfant1!: MatSidenav;
}
