import { Routes } from '@angular/router';
import { Accueil } from './pages/page-accueil/accueil';
import { Association } from './pages/page-association/association';
import { Missions } from './pages/page-missions/missions';
import { Organisation } from './pages/page-organisation/organisation';
import { ChiffresCles } from './pages/page-chiffres-cles/chiffres-cles';
import { Calendrier } from './pages/page-calendrier/calendrier';
import { Actions } from './pages/page-actions/actions';
import { PageGrandsRendezVous } from './pages/page-grands-rendez-vous/page-grands-rendez-vous';
import { PageProgrammes } from './pages/page-programmes/page-programmes';
import { PageSensibilation } from './pages/page-sensibilation/page-sensibilation';
import { PageConseils } from './pages/page-conseils/page-conseils';
import { PageDelegations } from './pages/page-delegations/page-delegations';
import { PageEngagement } from './pages/page-engagement/page-engagement';
import { PageEntreprise } from './pages/page-entreprise/page-entreprise';
import { PageBenevole } from './pages/page-benevole/page-benevole';
import { PageEnseignementSuperieur } from './pages/page-enseignement-superieur/page-enseignement-superieur';
import { PageEtudiante } from './pages/page-etudiante/page-etudiante';
import { PageReseauEducatif } from './pages/page-reseau-educatif/page-reseau-educatif';
import { PageAssociationsInstitutions } from './pages/page-associations-institutions/page-associations-institutions';
import { PageDons } from './pages/page-dons/page-dons';
import { PageConnectionCompte } from './pages/page-connection-compte/page-connection-compte';
import { PageRecherche } from './pages/page-recherche/page-recherche';
import { PageActualites } from './pages/page-actualites/page-actualites';
import { PageTaxeApprentissage } from './pages/page-taxe-apprentissage/page-taxe-apprentissage';

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
        path: "association/dons", component: PageDons
    },


    {
        path: "association/taxe-apprentissage", component: PageTaxeApprentissage
    },

    {
        path: "actions", component: Actions
    },

    {
        path: "actions/calendrier", component: Calendrier
    },

    
    {
        path: "actions/grands-rendez-vous", component: PageGrandsRendezVous
    },

    
    {
        path: "actions/programmes", component: PageProgrammes
    },

    
    {
        path: "actions/sensibilisation", component: PageSensibilation
    },

    
    {
        path: "actions/conseils", component: PageConseils
    },

    
    {
        path: "delegations/:lieuDelegation", component: PageDelegations
    },


    {
        path: "engagement", component: PageEngagement
    },


    {
        path: "engagement/entreprises", component: PageEntreprise
    },

    
    {
        path: "engagement/benevoles", component: PageBenevole
    },


    {
        path: "engagement/enseignement-superieur", component: PageEnseignementSuperieur
    },


    {
        path: "engagement/etudiantes", component: PageEtudiante
    },


    {
        path: "engagement/reseau-educatif", component: PageReseauEducatif
    },


    {
        path: "engagement/associations", component: PageAssociationsInstitutions
    },

    
    {
        path: "actualites", component: PageActualites
    },



    {
        path: "compte/connection", component: PageConnectionCompte
    },

    
    {
        path: "recherche", component: PageRecherche
    },


    {
        path: "recherche/:mots-cles", component: PageRecherche
    },








    



    

];
