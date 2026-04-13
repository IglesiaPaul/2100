// cdc_budget_data.js - Données budgétaires issues du rapport de la Cour des comptes 2026
const cdcBudgetData = {
  title: "Cour des comptes – Budgets et besoins estimés (RPA 2026)",
  sectors: [
    {
      name: "Santé hospitalière",
      budget: {
        annual: 2.4, // Md€, déficit annuel des hôpitaux publics en 2023
        total: null,
        note: "Déficit des hôpitaux publics (2023)"
      },
      needs: "Régénération des réseaux et adaptation de l’offre – montant non précisé"
    },
    {
      name: "Outre‑mer – santé",
      budget: {
        annual: null,
        total: 0.85, // 850 M€ d’aides exceptionnelles
        note: "Aides exceptionnelles aux hôpitaux ultramarins (2022)"
      },
      needs: "Évacuations sanitaires : Mayotte 13M€, Guyane 6M€, Polynésie 21M€, Nouvelle‑Calédonie 40M€ (2023)"
    },
    {
      name: "Collèges",
      budget: {
        annual: null,
        total: null,
        note: "Coût salarial par élève : 8 900€ (petits collèges) vs 6 700€ (grands)"
      },
      needs: "Surcoût non globalisé – nécessité de réorganiser le maillage"
    },
    {
      name: "Logement social",
      budget: {
        annual: null,
        total: null,
        note: "Poids économique : 30,5 Md€ (2023), aides publiques : 8,6 Md€"
      },
      needs: "200 000 logements publics par an (objectif du programme)"
    },
    {
      name: "Mobilités du quotidien",
      budget: {
        annual: 3.7, // besoin supplémentaire annuel bas
        total: null,
        note: "Besoin de financement supplémentaire (estimation basse) : 3,7 Md€/an"
      },
      needs: "Régénération des réseaux existants et développement des SERM"
    },
    {
      name: "Réindustrialisation",
      budget: {
        annual: 26.8,
        total: null,
        note: "Soutiens publics annuels à l’industrie (2020‑2022) – dont 1% par les collectivités"
      },
      needs: "22 000 ha de foncier industriel à mobiliser d’ici 2030"
    },
    {
      name: "Numérique (infrastructures)",
      budget: {
        annual: null,
        total: 22,
        note: "Investissements publics dans la fibre optique (2010‑2024)"
      },
      needs: "Résilience : jusqu’à 2 Md€ supplémentaires"
    },
    {
      name: "Sécurité intérieure",
      budget: {
        annual: 24.4,
        total: null,
        note: "Dépenses de l’État pour la sécurité (2024)"
      },
      needs: "Répartition plus équitable des effectifs entre départements"
    },
    {
      name: "Politique de la ville",
      budget: {
        annual: 0.524,
        total: null,
        note: "Crédits exécutés du programme 147 (2024)"
      },
      needs: "Mobiliser le droit commun avant les crédits spécifiques"
    },
    {
      name: "Opérations d’aménagement (OIN)",
      budget: {
        annual: null,
        total: 0.379,
        note: "Subventions de l’État aux OIN (2015‑2024)"
      },
      needs: "Recentrer sur les projets stratégiques et temporaires"
    },
    {
      name: "Péréquation financière",
      budget: {
        annual: 14.4,
        total: null,
        note: "Montant total des concours de péréquation (2024)"
      },
      needs: "Accroître et mieux cibler la péréquation"
    }
  ]
};
