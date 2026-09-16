import { SousMenuPrincipal } from "../interfaces/sous-menu-principal";

export const dataMenuOrdinateur: Record<string, SousMenuPrincipal> = {

    "association": {

        titrePresentation1: "Présentation",
        paragraphePresentation1: "Elles bougent œuvre pour renforcer la mixité dans les secteurs scientifiques, technologiques et industriels, en donnant aux jeunes filles les clés pour s’orienter vers les métiers d’ingénieure et de technicienne.",
        tableauxBoutons1: [
          {
            titreBouton: "En savoir plus",
            lienBouton: "association"
          }
        ],

        listeNomsImages: [
          {
            titreImage: "Nos missions",
            cheminImage: "images/images-menu/subnav-chiffres.jpg",
            urlPage: "association/missions"
          },

          {
            titreImage: "Organisation",
            cheminImage: "images/images-menu/subnav-equipe.jpg",
            urlPage: "association/organisation"
          },

          {
            titreImage: "Chiffres clés",
            cheminImage: "images/images-menu/subnav-chiffres.jpg",
            urlPage: "association/chiffres-cles"
          }

        ],

        titrePresentation2: "Taxe d'apprentissage",
        paragraphePresentation2: "L'association Elles bougent est habilitée à percevoir la taxe d'apprentissage.",
        boutons2: {

          titreBouton: "En savoir plus",
          lienBouton: "association/taxe-apprentissage"

        }

    },

    "actions": {

        titrePresentation1: "Nos actions",
        paragraphePresentation1: "Promouvoir les métiers scientifiques et techniques auprès des jeunes filles grâce aux événements, programmes, plaidoyer et rôles modèles d’Elles bougent.",
        tableauxBoutons1: [
          {
            titreBouton: "Je découvre",
            lienBouton: "actions"
          },

          {
            titreBouton: "Je participe",
            lienBouton: "actions/calendrier"
          }
        ],
        listeNomsImages: [
          {
            titreImage: "Grands rendez-vous",
            cheminImage: "images/images-menu/subnav-france.jpg",
            urlPage: "actions/grands-rendez-vous"
          },

          {
            titreImage: "Nos programmes",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "actions/programmes"
          },

          {
            titreImage: "Conseils et aide",
            cheminImage: "images/images-menu/subnav-france.jpg",
            urlPage: "actions/conseils"
          },

          {
            titreImage: "Sensibilisation",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "actions/sensibilisation"
          },
        ],

        titrePresentation2: "Chiffres clés",
        paragraphePresentation2: "Découvrez notre rétrospective complète dans le rapport d’activité 2025.",
        boutons2: {
          titreBouton: "Voir le rapport",
          lienBouton: "association/chiffres-cles"
        }

    },

    "delegations": {

        titrePresentation1: "Nos délégations",
        paragraphePresentation1: "Elles bougent agit sur le terrain en France et à l'international pour faire découvrir aux filles les métiers scientifiques et techniques.",
        tableauxBoutons1: [],  //pas de bouton là

        listeNomsImages: [
          {
            titreImage: "En france",
            cheminImage: "images/images-menu/subnav-chiffres.jpg",
            urlPage: "delegations/france"
          },

          {
            titreImage: "A l'international",
            cheminImage: "images/images-menu/subnav-equipe.jpg",
            urlPage: "delegations/international"
          }

        ],

        titrePresentation2: "Devenez déléguée régionale !",
        paragraphePresentation2: "Coordonnez nos actions, mobilisez le réseau local et inspirez les filles sur votre territoire.",
        boutons2: {

          titreBouton: "Demande d'information",
          lienBouton: "mailto:delegations@ellesbougent.com"

        }

    },

    "engagement": {

        titrePresentation1: "S'engager avec nous",
        paragraphePresentation1: "Entreprises, écoles, fédérations, associations, enseignant.es ou étudiantes, engagez-vous à nos côtés pour susciter les vocations pour les métiers scientifiques, technologiques et techniques.",
        tableauxBoutons1: [
          {
            titreBouton: "En savoir plus",
            lienBouton: "engagement"
          }
        ],
        listeNomsImages: [
          {
            titreImage: "Entreprises",
            cheminImage: "images/images-menu/subnav-france.jpg",
            urlPage: "engagement/entreprises"
          },

          {
            titreImage: "Enseignement superieur",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "engagement/enseignement-superieur"
          },

          {
            titreImage: "Bénévoles",
            cheminImage: "images/images-menu/subnav-france.jpg",
            urlPage: "engagement/benevoles"
          },

          {
            titreImage: "Réseau éducatif",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "engagement/reseau-educatif"
          },

          {
            titreImage: "Étudiantes",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "engagement/etudiantes"
          },

          {
            titreImage: "Associations - Institutions",
            cheminImage: "images/images-menu/subnav-international.jpg",
            urlPage: "engagement/associations"
          },
        ],
  
        titrePresentation2: "Pour aller plus loin",
        paragraphePresentation2: "Rejoignez-nous dans notre mission en faisant un don. Il nous permettra de poursuivre nos actions et d'avoir un impact positif sur l'orientation des filles vers des carrières de scientifiques, techniciennes, ingénieures.",
        boutons2: {
          titreBouton: "Faire un don",
          lienBouton: "association/dons"
        }

    }

}