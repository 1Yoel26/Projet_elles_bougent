import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-info-rose',
  imports: [],
  templateUrl: './bloc-info-rose.html',
  styleUrl: './bloc-info-rose.scss',
})
export class BlocInfoRose {

  @Input() cheminImage: string = "";
  @Input() titre: string = "";


}
