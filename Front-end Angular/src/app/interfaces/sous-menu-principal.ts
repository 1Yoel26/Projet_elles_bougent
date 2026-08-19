export interface SousMenuPrincipal {

    titrePresentation1: string,
    paragraphePresentation1: string,
    tableauTitreBouton: string[] | null,

    listeNomsImages: ListeNomsImages[],

    titrePresentation2: string,
    paragraphePresentation2: string,
    titreBouton2: string

}



export interface ListeNomsImages {

    cheminImage: string,
    titreImage: string

}

