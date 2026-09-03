import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-diaporama',
  imports: [],
  templateUrl: './diaporama.html',
  styleUrl: './diaporama.scss',
})
export class Diaporama implements OnInit{

  @Input() listeNomsImages!: string[];
  @Input() cheminImage!: string;

  nbImagesTotal!: number;
  public dureeDiapo!: number;


  ngOnInit(): void {

    this.nbImagesTotal = this.listeNomsImages.length;
    this.dureeDiapo = this.nbImagesTotal * 1;

    console.log(this.dureeDiapo);
    
  }

}
