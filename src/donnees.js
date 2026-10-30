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

