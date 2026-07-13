import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-accueil1',
  imports: [],
  templateUrl: './component-accueil1.html',
  styleUrl: './component-accueil1.scss',
})
export class ComponentAccueil1 {

  @Input() sourceImage = "";
  @Input() titre = "";
  @Input() description = "";

}
