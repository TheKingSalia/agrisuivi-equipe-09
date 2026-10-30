import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { surfaceTotale } from "./parcelles.js";
import { alertesIrrigation } from "./irrigation.js";
import { bilanRecoltes, classerParRevenu } from "./recoltes.js";

export function listerParEtat(alertes, etat) {
  const ids = alertes
    .filter((alerte) => alerte.etat === etat)
    .map((alerte) => alerte.id);

  if (ids.length === 0) {
    return "aucune";
  }
  return ids.join(", ");
}



export function construireRapport(donnees, date) {
  const { parcelles, cultures, releves, recoltes } = donnees;

  const alertes = alertesIrrigation(parcelles, releves, cultures);
  const bilan = bilanRecoltes(parcelles, recoltes, cultures);
  const classement = classerParRevenu(bilan);

  const productionTotale = bilan.reduce((total, ligne) => total + ligne.kg, 0);
  const revenuTotal = bilan.reduce((total, ligne) => total + ligne.revenu, 0);

  const meilleure = classement[0];
  const ligneMeilleure =
    meilleure === undefined
      ? "Meilleure parcelle : aucune"
      : `Meilleure parcelle : ${meilleure.id} (${meilleure.producteur}) avec ${meilleure.revenu} FCFA`;

  const lignes = [
    `=== RAPPORT AGRISUIVI DU ${date} ===`,
    `Parcelles suivies : ${parcelles.length}`,
    `Surface totale : ${surfaceTotale(parcelles)} ha`,
    "",
    "--- Irrigation ---",
    `À arroser : ${listerParEtat(alertes, "ARROSER")}`,
    `À drainer : ${listerParEtat(alertes, "DRAINER")}`,
    `Sans relevé : ${listerParEtat(alertes, "INCONNU")}`,
    "",
    "--- Récoltes ---",
    `Production totale : ${productionTotale} kg`,
    `Revenu estimé : ${revenuTotal} FCFA`,
    ligneMeilleure,
  ];
  return lignes.join("\n") + "\n";
}

