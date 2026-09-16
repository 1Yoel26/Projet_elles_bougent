import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EspacePetit } from "../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit";
import { MatButtonModule } from '@angular/material/button';
import { ComponentTextCentrerTitreRoseMarron } from "../../components/components-reutilisables/component-titre-rose-marron-centrer/component-text-centrer-titre-rose-marron";
import * as Leaflet from 'leaflet';
import "leaflet.markercluster";
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
  carte!: Leaflet.Map;
  groupeDeCluster!: Leaflet.MarkerClusterGroup;
  

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

    // définition de la carte Leaflet sur le div-item-carte:
    this.carte = Leaflet.map("div-item-carte");

    // ajustement du zoom sur la France avec un zoom sur 5 :
    this.carte
    .setView([46.603354, 1.888334], 5);
  

    // definition du fond d'ecran de la carte (avec la carte du monde)
    Leaflet.tileLayer(

    'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

    ).addTo(this.carte);


    // Configuration des Icones points dans Leaflet :

    // suppression du chemin par défaut des icones
    delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
      
    // fusion des autres infos sur les icones avec celles-ci,
    // qui servent à indiquer le chemin des images :
    Leaflet.Icon.Default.mergeOptions(
      {
        iconUrl: "icones-leaflet/marker-icon.png",
        iconRetinaUrl: "icones-leaflet/marker-icon-2x.png",
        shadowUrl: "icones-leaflet/marker-shadow.png",
        
      }
    );


    // ajout de quelques point au GroupLayer:
    
    this.groupeDeCluster = Leaflet.markerClusterGroup();

    Leaflet.marker([45.7640, 4.8350]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7641, 4.8351]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7642, 4.8352]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7643, 4.8353]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7644, 4.8354]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7645, 4.8355]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7646, 4.8356]).addTo(this.groupeDeCluster);
    Leaflet.marker([45.7647, 4.8357]).addTo(this.groupeDeCluster);


    // ajout du groupeDeCluster à la carte:
    this.groupeDeCluster.addTo(this.carte);


  }
  
}
