import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-page',
  imports: [],
  templateUrl: './titre-page.html',
  styleUrl: './titre-page.scss',
})
export class TitrePage {

  @Input() titre: string = "";

}
