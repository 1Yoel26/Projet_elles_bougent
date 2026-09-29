import { Component, Input } from '@angular/core';
import { listeChiffreTitre } from '../../../../interfaces/listeChiffreTitre';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { EspacePetit } from '../../../../components/components-espaces-verticales/components-espaces/espace-petit/espace-petit';

@Component({
  selector: 'app-bloc-chiffre-rose',
  imports: [
    RouterLink,
    MatButton,
    EspacePetit
],
  templateUrl: './bloc-chiffre-rose.html',
  styleUrl: './bloc-chiffre-rose.scss',
})
export class BlocChiffreRose {

  @Input() titre: string = "";

  @Input() listeChiffreTitre: listeChiffreTitre[] = [];

  @Input() titreBouton: string = "";

  @Input() lienBouton: string = "";

}
