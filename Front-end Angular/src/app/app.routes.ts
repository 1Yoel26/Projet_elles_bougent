import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Page2 } from './pages/page2/page2';

export const routes: Routes = [
    {path: "", component: Accueil},
    {path: "page2", component: Page2}
];
