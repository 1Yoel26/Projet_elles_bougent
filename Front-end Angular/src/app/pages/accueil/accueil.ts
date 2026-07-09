import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EspacePetit } from "../../components/components-espaces/components-espaces/espace-petit/espace-petit";

@Component({
  selector: 'app-accueil',
  imports: [MatCardModule, EspacePetit],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
