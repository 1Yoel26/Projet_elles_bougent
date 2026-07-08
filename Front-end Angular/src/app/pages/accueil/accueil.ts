import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MiniContaineurAccueil } from '../../components/mini-containeur-accueil/mini-containeur-accueil';

@Component({
  selector: 'app-accueil',
  imports: [MatCardModule, MiniContaineurAccueil],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
