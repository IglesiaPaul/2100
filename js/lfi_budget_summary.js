// lfi_budget_summary.js – Synthèse budgétaire du contre-budget LFI 2026
// Sources : document "Budget 2026 – Pour une bifurcation écologique et sociale" (LFI)

const lfiBudget = {
  title: "Contre-budget LFI 2026 – Dépenses nouvelles proposées",
  totalNewSpending: 170, // milliards d'euros (dépenses supplémentaires annuelles)
  totalNewRevenue: 180,   // milliards d'euros (recettes fiscales nouvelles)
  deficitReduction: 27,   // milliards d'euros (réduction du déficit public dès 2026)
  
  sectors: [
    {
      name: "Écologie & Énergie",
      amount: 49.0, // Md€ (estimé d'après les mesures détaillées)
      details: "Développement EnR (10,6 Md€), rénovation thermique (2,2 Md€), plan rail (6 Md€), plan vélo (0,7 Md€), eau (0,6 Md€), forêts (1,5 Md€), etc."
    },
    {
      name: "Social & Pouvoir d’achat",
      amount: 45.0,
      details: "Revalorisation SMIC (1,6 Md€), point d’indice (22 Md€), garantie autonomie jeunes (10 Md€), logement social (4,3 Md€), RSA/APL/AAH (5,5 Md€)"
    },
    {
      name: "Santé & Protection sociale",
      amount: 27.5,
      details: "Abrogation retraites (10,3 Md€), minimum contributif (8,2 Md€), EHPAD publics (0,9 Md€), franchises médicales abolies (1,5 Md€), recrutements soignants (1,3 Md€)"
    },
    {
      name: "Éducation & Jeunesse",
      amount: 13.5,
      details: "Gratuité scolaire (3,6 Md€), AESH (2,5 Md€), enseignement pro (1,25 Md€), université (0,7 Md€), petite enfance (1 Md€)"
    },
    {
      name: "Outre‑mer",
      amount: 2.0,
      details: "Eau potable (0,2 Md€), indemnisation chlordécone (0,1 Md€), etc. (mesures spécifiques)"
    },
    {
      name: "Collectivités locales",
      amount: 4.5,
      details: "Augmentation de la DGF et indexation sur l’inflation"
    },
    {
      name: "Culture & Sports",
      amount: 3.8,
      details: "Ministère des sports à 1% du budget (2 Md€), ministère de la culture à 1% du PIB (1,8 Md€)"
    },
    {
      name: "Justice & Sécurité",
      amount: 2.5,
      details: "Police de proximité, renfort police judiciaire, conditions de détention (0,4 Md€)"
    }
  ],
  
  revenues: [
    { name: "Taxe Zucman (patrimoine >100M€)", amount: 20.0 },
    { name: "Rétablissement ISF climatique", amount: 15.0 },
    { name: "Réforme héritage (plafond)", amount: 10.0 },
    { name: "Taxe solidarité dividendes (10%)", amount: 6.0 },
    { name: "Suppression flat tax", amount: 2.7 },
    { name: "IS majoré grandes entreprises", amount: 5.0 },
    { name: "Taxe Zucman multinationales", amount: 26.0 },
    { name: "Fin niches fiscales (CIR, Dutreil, etc.)", amount: 9.5 },
    { name: "Suppression exonérations patronales (>2 SMIC)", amount: 8.0 },
    { name: "Cotisations sur dividendes et rachats d’actions", amount: 15.5 },
    { name: "Surcotisation hauts salaires", amount: 6.0 },
    { name: "Rétablissement CVAE et CFE", amount: 14.35 },
    { name: "Taxe d’habitation sur les 20% les plus aisés (barème progressif)", amount: 8.0 },
    { name: "Autres mesures (TVA transport, taxe kilométrique, etc.)", amount: 7.0 }
  ]
};
