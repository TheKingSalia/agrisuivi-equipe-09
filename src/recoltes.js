export function totalRecolte(recoltes, idParcelle) {
  return recoltes.filter(
    (parcelle) => {
      return parcelle.parcelle === idParcelle 
    } ).reduce((accum,valeur)=> accum + valeur.kg, 0)
}

export function rendement(kg, surface) {
  if(surface<=0){
    throw new RangeError('La surface doit être supérieure à 0');
  } else{
    return Math.round(kg / surface);

  }
}

// Renvoie le revenu estimé en FCFA.
export function revenu(kg, prixKg) {
  throw new Error("TODO Membre 3 : coder revenu dans src/recoltes.js");
}

// Renvoie une ligne de bilan par parcelle, dans le même ordre que parcelles.
// Chaque ligne : { id, producteur, culture, kg, rendement, revenu }
export function bilanRecoltes(parcelles, recoltes, cultures) {
  throw new Error("TODO Membre 3 : coder bilanRecoltes dans src/recoltes.js");
}

// Renvoie une COPIE du bilan, triée du plus grand revenu au plus petit.
// Le tableau reçu ne doit pas changer d'ordre.
export function classerParRevenu(bilan) {
  throw new Error(
    "TODO Membre 3 : coder classerParRevenu dans src/recoltes.js",
  );
}
