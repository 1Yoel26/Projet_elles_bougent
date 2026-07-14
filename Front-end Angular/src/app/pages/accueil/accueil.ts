import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EspacePetit } from "../../components/components-espaces/components-espaces/espace-petit/espace-petit";
import { ComponentAccueil1 } from "../../components/components-reutilisables/component-accueil1/component-accueil1";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-accueil',
  imports: [
    MatCardModule, 
    EspacePetit, 
    ComponentAccueil1,
    MatButtonModule
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
