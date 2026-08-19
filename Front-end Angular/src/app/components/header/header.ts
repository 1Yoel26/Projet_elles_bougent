import { Component } from '@angular/core';
import { MenuPrincipalOrdinateur } from "../menu/menu-principal-ordinateur/menu-principal-ordinateur";

@Component({
  selector: 'app-header',
  imports: [MenuPrincipalOrdinateur],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
