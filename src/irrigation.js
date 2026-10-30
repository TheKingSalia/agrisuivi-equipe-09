
export function relevesDeParcelle(releves, idParcelle) {
  return releves.filter(
    (releve)=>{
      return releve.parcelle === idParcelle
      
    }
  )
}

export function moyenneHumidite(releves) {
  if (releves.length === 0) {
    return null;}
     
const somme = releves.reduce((total, releve) => total + releve.humidite, 0);
  return Math.round(somme / releves.length);
}


export function etatIrrigation(humidite, culture) {

  if (humidite === null) {
    return 'INCONNU';
  }
  if (humidite < culture.humiditeMin) {
    return 'ARROSER';
  }
  if (humidite > culture.humiditeMax) {
    return 'DRAINER';
  }
  return 'OK';
}
  

// Renvoie un tableau d'alertes, une par parcelle, dans le même ordre que parcelles.
// Chaque alerte : { id, producteur, culture, moyenne, etat }
export function alertesIrrigation(parcelles, releves, cultures) {
  throw new Error(
    "TODO Membre 2 : coder alertesIrrigation dans src/irrigation.js",
  );
}
