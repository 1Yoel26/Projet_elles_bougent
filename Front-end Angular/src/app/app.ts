import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MenuMobileDeroulant } from "./components/menu/contenu-menu-mobile-deroulant/menu-mobile-deroulant";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    MenuMobileDeroulant,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('App-elles-bougent');

}
