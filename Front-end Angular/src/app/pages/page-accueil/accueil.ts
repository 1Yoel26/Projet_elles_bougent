import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EspacePetit } from "../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit";
import { MatButtonModule } from '@angular/material/button';
import { ComponentTextCentrerTitreRoseMarron } from "../../components/components-reutilisables/component-titre-rose-marron-centrer/component-text-centrer-titre-rose-marron";
import * as Leaflet from 'leaflet';
import { ComponentAccueil1 } from './components-page-accueil/component-accueil1/component-accueil1';
import { ComponentAccueilInscription } from './components-page-accueil/component-accueil-inscription/component-accueil-inscription';
import { ComponentAccueilActualite } from './components-page-accueil/component-accueil-actualite/component-accueil-actualite';
import { Diaporama } from './components-page-accueil/diaporama/diaporama';

@Component({
  selector: 'app-accueil',
  imports: [
    MatCardModule,
    EspacePetit,
    ComponentAccueil1,
    MatButtonModule,
    ComponentTextCentrerTitreRoseMarron,
    ComponentAccueilInscription,
    ComponentAccueilActualite,
    Diaporama
],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil implements OnInit, AfterViewInit{

  listeNomsImages!: string[];
  cheminImage!: string;

  ngOnInit(): void {

    this.listeNomsImages = [
      "bordeaux-inp.logo.jpg",
      "11721-totalenergies_logo_rgb.logo.jpg",
      "groupe-adp.thumb.jpg",
      "sodern-logo.logo.jpg",
      "port-de-la-rochelle.logo.jpg",
      "logo-circet.logo.jpg"
    ];

    this.cheminImage = "/images/images-page-accueil/images-partenaires/";
    
  }
  
  ngAfterViewInit(): void {

    const map = Leaflet.map('div-item-carte').setView([48.8566, 2.3522], 1);
  
    Leaflet.tileLayer(

    'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

    ).addTo(map);
  }
  
}
