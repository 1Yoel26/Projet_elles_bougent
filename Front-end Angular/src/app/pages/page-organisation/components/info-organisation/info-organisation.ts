import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-organisation',
  imports: [],
  templateUrl: './info-organisation.html',
  styleUrl: './info-organisation.scss',
})
export class InfoOrganisation {

  @Input() cheminImage: string = "";
  @Input() titre: string = "";


}
