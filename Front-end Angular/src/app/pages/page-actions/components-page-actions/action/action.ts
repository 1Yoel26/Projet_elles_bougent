import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action',
  imports: [MatIconModule],
  templateUrl: './action.html',
  styleUrl: './action.scss',
})

export class Action {

  @Input() region: string = "";
  @Input() categorie: string = "";
  @Input() dateEtHeure: string = "";
  @Input() ville: string = "";
  @Input() titre: string = "";

}
