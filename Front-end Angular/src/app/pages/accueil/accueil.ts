import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EspacePetit } from "../../components/components-espaces/components-espaces/espace-petit/espace-petit";
import { ComponentAccueil1 } from "../../components/components-reutilisables/component-accueil1/component-accueil1";
import { MatButtonModule } from '@angular/material/button';
import { ComponentTextCentrerTitreRoseMarron } from "../../components/components-reutilisables/component-text-centrer-titre-rose-marron/component-text-centrer-titre-rose-marron";
import { ComponentAccueilInscription } from "../../components/components-reutilisables/component-accueil-inscription/component-accueil-inscription";
import { NgStyle } from '@angular/common';
import { ComponentAccueilActualite } from '../../components/components-reutilisables/component-accueil-actualite/component-accueil-actualite';

@Component({
  selector: 'app-accueil',
  imports: [
    MatCardModule,
    EspacePetit,
    ComponentAccueil1,
    MatButtonModule,
    ComponentTextCentrerTitreRoseMarron,
    ComponentAccueilInscription,
    ComponentAccueilActualite
],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
