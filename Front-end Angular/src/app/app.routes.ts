import { Routes } from '@angular/router';
import { Accueil } from './pages/page-accueil/accueil';
import { Association } from './pages/page-association/association';
import { Missions } from './pages/page-missions/missions';
import { Organisation } from './pages/page-organisation/organisation';
import { ChiffresCles } from './pages/page-chiffres-cles/chiffres-cles';
import { Calendrier } from './pages/page-calendrier/calendrier';
import { Actions } from './pages/page-actions/actions';

export const routes: Routes = [
    {
        path: "", component: Accueil,
    },

    {
        path: "association", component: Association,
    },
       
    {
        path: "association/missions", component: Missions
    },

    {
        path: "association/organisation", component: Organisation
    },

    {
        path: "association/chiffres-cles", component: ChiffresCles
    },

    {
        path: "actions", component: Actions
    },

    {
        path: "actions/calendrier", component: Calendrier
    }

];
