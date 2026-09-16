import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-menu-principal-mobile',
  imports: [
    MatIcon,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    RouterLink
],
  templateUrl: './menu-principal-mobile.html',
  styleUrl: './menu-principal-mobile.scss',
})
export class MenuPrincipalMobile {

  @Input() idDuMenuPourEnfant2!: MatSidenav;


  alert1(){
    alert(2);
  }

  
}
