
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
  
export function alertesIrrigation(parcelles, releves, cultures) {
  return parcelles.map((parcelle) => {
    const culture = cultures.find((c) => c.code === parcelle.culture);
    const relevesParcelle = relevesDeParcelle(releves, parcelle.id);
    const moyenne = moyenneHumidite(relevesParcelle);
    const etat = etatIrrigation(moyenne, culture);

    return {
      id: parcelle.id,
      producteur: parcelle.producteur,
      culture: parcelle.culture,
      moyenne: moyenne,
      etat: etat,
    };
  });
    
  
}
