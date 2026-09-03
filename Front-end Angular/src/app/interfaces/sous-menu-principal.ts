export interface SousMenuPrincipal {

    titrePresentation1: string,
    paragraphePresentation1: string,
    tableauxBoutons1: TableauxBouttons[] | null,

    listeNomsImages: ListeNomsImages[],

    titrePresentation2: string,
    paragraphePresentation2: string,
    tableauxBoutons2: TableauxBouttons

}


export interface ListeNomsImages {

    cheminImage: string,
    titreImage: string,
    urlPage: string

}


export interface TableauxBouttons {

    titreBouton: string,
    lienBouton: string

}

