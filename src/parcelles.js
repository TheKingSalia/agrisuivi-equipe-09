export function formaterParcelle(parcelle) {
  return `${parcelle.id} | ${parcelle.producteur} | ${parcelle.localite} | ${parcelle.culture} | ${parcelle.surface} ha` 
}

export function trouverParcelle(parcelles, id) {
    return parcelles.find((parcelle) => {
      id === parcelle.id
    } )
}

// Renvoie un nouveau tableau avec seulement les parcelles de cette culture.
export function parcellesParCulture(parcelles, culture) {
  throw new Error(
    "TODO Membre 1 : coder parcellesParCulture dans src/parcelles.js",
  );
}

// Renvoie la somme des surfaces (en hectares). Liste vide : 0.
export function surfaceTotale(parcelles) {
  throw new Error("TODO Membre 1 : coder surfaceTotale dans src/parcelles.js");
}

// Renvoie un objet : pour chaque culture, le nombre de parcelles et leur surface.
// Exemple : { cacao: { nombre: 2, surface: 5 }, riz: { nombre: 1, surface: 1 } }
export function resumeParCulture(parcelles) {
  throw new Error(
    "TODO Membre 1 : coder resumeParCulture dans src/parcelles.js",
  );
}
