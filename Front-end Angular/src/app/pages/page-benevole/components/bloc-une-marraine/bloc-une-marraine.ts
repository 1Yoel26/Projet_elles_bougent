import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { intervalToDuration } from 'date-fns'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-bloc-une-marraine',
  imports: [NgStyle, RouterLink],
  templateUrl: './bloc-une-marraine.html',
  styleUrl: './bloc-une-marraine.scss',
})
export class BlocUneMarraine implements OnInit {

  @Input() cheminImage: string = "";
  @Input() lienIdMarraine: string = "";
  @Input() type: string = ""; // marraine ou relais
  @Input() prenom: string = "";
  @Input() nom: string = "";
  @Input() metierEtEntrepriseActuel: string = "";
  @Input() dateInscriptionString: string = ""; // pour calculer depuis combien d'années elle est membre

  dateActuel: Date = new Date();
  dateInscription!: Date;
  durerInscription: any = "";
  messageDurerInscription: string = "";

  ngOnInit(): void {

    this.dateInscription = new Date(this.dateInscriptionString);

    // Calcul de la période depuis laquelle 
    // la marraine est membre (uniquement si la date actuelle est plus grande ou égale à la date d'inscription) :
    if(this.dateInscription <= this.dateActuel){

      this.durerInscription = intervalToDuration({
        start: this.dateInscription,
        end: this.dateActuel
      });

      if(this.durerInscription.years > 0){
        this.messageDurerInscription = this.durerInscription.years + " ans";
      }

      else if(this.durerInscription.months > 0){

        this.messageDurerInscription = this.durerInscription.months + " mois";

      }

      else if(this.durerInscription.days > 0){

        this.messageDurerInscription = this.durerInscription.days + " jours";

      }

      else {

        this.messageDurerInscription = " aujourd'hui";

      }

    }    
    
  }
    
  
}
