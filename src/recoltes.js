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

export function revenu(kg, prixKg) {
  return (kg*prixKg);

}

export function bilanRecoltes(parcelles, recoltes, cultures) {
 return parcelles.map((parcelle) => {
    const culture = cultures.find(
      (culture) => {
        return culture.code === parcelle.culture;
      }
    )
    let kgprevu = totalRecolte(recoltes, parcelle.id);
    let rendementprevu = rendement(kgprevu, parcelle.surface);
    let revenuprevu = revenu(kgprevu, culture.prixKg);

    return {
      id : parcelle.id,
      producteur: parcelle.producteur,
      culture: culture.code,
      kg: kgprevu,
      rendement: rendementprevu,
      revenu:  revenuprevu
    }
    
 })
}

export function classerParRevenu(bilan) {
  
}
