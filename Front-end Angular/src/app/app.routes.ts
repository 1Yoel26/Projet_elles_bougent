import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Association } from './pages/association/association';

export const routes: Routes = [
    {path: "", component: Accueil},
    {path: "association", component: Association}
];
