import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

export async function lireJson(chemin) {
    try {
    const texte = await readFile(chemin, 'utf8');
    return JSON.parse(texte);
    } catch(erreur){
      throw new Error(`Impossible de lire ${chemin}`, { cause: erreur })
    }

}

export async function chargerDonnees(dossier) {
  const [
    parcelles,
    cultures,
    releves,
    recoltes
  ] = await Promise.all([
    lireJson(join(dossier, "parcelles.json")),
    lireJson(join(dossier, "cultures.json")),
    lireJson(join(dossier, "releves.json")),
    lireJson(join(dossier, "recoltes.json"))
  ]);

  return {
    parcelles,
    cultures,
    releves,
    recoltes
  };
}


export function creerReleve(parcelle, humiditeTexte, temperatureTexte, date) {

  if (!parcelle) {
    throw new Error("La parcelle est obligatoire");
  }

  const humidite = Number(humiditeTexte);
  const temperature = Number(temperatureTexte);

  if (
    Number.isNaN(humidite) ||
    humidite < 0 ||
    humidite > 100
  ) {
    throw new Error("L'humidité doit être un nombre entre 0 et 100");
  }

  if (Number.isNaN(temperature)) {
    throw new Error("La température doit être un nombre");
  }

  return {
    parcelle: parcelle.toUpperCase(),
    date: date,
    humidite: humidite,
    temperature: temperature
  };
}


export async function ajouterReleve(chemin, releve) {
  const releves = await lireJson(chemin);
  releves.push(releve);
  const texte = JSON.stringify(releves, null, 2);

  await writeFile(chemin, texte, 'utf8');
  return releves.length;
}