import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { EspacePetit } from "../components-espaces-verticales/components-espaces/espace-petit/espace-petit";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, EspacePetit, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
