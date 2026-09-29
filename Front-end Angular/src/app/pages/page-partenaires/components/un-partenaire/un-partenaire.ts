import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-un-partenaire',
  imports: [NgStyle, RouterLink],
  templateUrl: './un-partenaire.html',
  styleUrl: './un-partenaire.scss',
})
export class UnPartenaire {

  @Input() cheminImage: string = "";
  @Input() lienPartrenaire: string = "";
  @Input() textePresentation: string = "";

}
