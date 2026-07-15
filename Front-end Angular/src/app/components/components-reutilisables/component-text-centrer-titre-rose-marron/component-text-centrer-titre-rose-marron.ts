import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-text-centrer-titre-rose-marron',
  imports: [],
  templateUrl: './component-text-centrer-titre-rose-marron.html',
  styleUrl: './component-text-centrer-titre-rose-marron.scss',
})
export class ComponentTextCentrerTitreRoseMarron {

  @Input() titre: string = "";
  @Input() contenu: string = "";
}
