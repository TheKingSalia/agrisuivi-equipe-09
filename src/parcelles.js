export function formaterParcelle(parcelle) {
  return `${parcelle.id} | ${parcelle.producteur} | ${parcelle.localite} | ${parcelle.culture} | ${parcelle.surface} ha` 
}

export function trouverParcelle(parcelles, id) {
    return parcelles.find((parcelle) => {
      id === parcelle.id
    } )
}


export function parcellesParCulture(parcelles, culture) {
  return parcelles.filter(
    (parcelle) => {
      culture === parcelle.culture
    } )
}


export function surfaceTotale(parcelles) {
    if(parcelles.length === 0){
      return 0
    } else{
      return parcelles.reduce((accum,valeur)=> acc + val, 0
    )
    }
}

// Renvoie un objet : pour chaque culture, le nombre de parcelles et leur surface.
// Exemple : { cacao: { nombre: 2, surface: 5 }, riz: { nombre: 1, surface: 1 } }
export function resumeParCulture(parcelles) {
  throw new Error(
    "TODO Membre 1 : coder resumeParCulture dans src/parcelles.js",
  );
}
