import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaporama',
  imports: [],
  templateUrl: './diaporama.html',
  styleUrl: './diaporama.scss',
})
export class Diaporama {

  @Input() listeNomsImages!: string[];
  @Input() cheminImage!: string;



}
