// cdc_measures.js - Recommandations de la Cour des comptes (RPA 2026)
const cdcRecommendations = [
  // Chapitre 1 - Réorganiser le maillage de l’offre de soins hospitaliers (4)
  {
    id: 1,
    title: "Définir une nouvelle stratégie nationale d’évolution de l’offre hospitalière fondée sur la gradation des soins",
    description: "Au niveau national, définir une stratégie d’évolution de l’offre hospitalière fondée sur la gradation des soins et, par région, un scénario d’évolution de l’offre hospitalière.",
    secteurs: ["santé", "hôpital", "gradation des soins", "stratégie", "ARS"],
    horizon: "2028"
  },
  {
    id: 2,
    title: "Évaluer la qualité des parcours de soins",
    description: "Évaluer la qualité des parcours de soins, en intégrant le point de vue des patients et en renforçant les critères de résultats.",
    secteurs: ["santé", "parcours de soins", "évaluation", "qualité", "patients"],
    horizon: "2028"
  },
  {
    id: 3,
    title: "Recentrer le fonds d’intervention régional sur sa mission de recomposition de l’offre de soins",
    description: "Recentrer le fonds d’intervention régional (FIR) sur sa mission de recomposition de l’offre de soins, et non sur le soutien aux établissements en difficulté financière.",
    secteurs: ["santé", "financement", "FIR", "recomposition", "offre de soins"],
    horizon: "2028"
  },
  {
    id: 4,
    title: "Introduire la possibilité d’autorisations d’activité multisites pour les ARS",
    description: "Permettre aux agences régionales de santé de délivrer des autorisations d’activité multisites pour favoriser les coopérations entre établissements.",
    secteurs: ["santé", "autorisation", "multisites", "ARS", "coopération"],
    horizon: "2028"
  },

  // Chapitre 2 - Améliorer l’accès aux soins en outre-mer (6)
  {
    id: 5,
    title: "Assurer une collecte centralisée des données de santé en outre-mer",
    description: "Assurer une collecte et un suivi centralisé des données de santé (offre de soins, épidémiologie) des territoires d’outre-mer et renforcer le pilotage.",
    secteurs: ["outre-mer", "santé", "données", "épidémiologie", "pilotage"],
    horizon: "2027"
  },
  {
    id: 6,
    title: "Organiser des filières de postes partagés ou missions médicales régulières entre établissements ultramarins et métropolitains",
    description: "Organiser des postes partagés ou des missions médicales régulières entre établissements ultramarins et métropolitains, sous réserve de faisabilité financière.",
    secteurs: ["outre-mer", "santé", "postes partagés", "coopération", "attractivité"],
    horizon: "2026"
  },
  {
    id: 7,
    title: "Développer localement des filières professionnelles sanitaires adaptées aux spécificités des outre-mer",
    description: "Développer localement des filières professionnelles dans le domaine sanitaire, adaptées aux spécificités des outre-mer.",
    secteurs: ["outre-mer", "santé", "formation", "filières", "professionnels"],
    horizon: "2026"
  },
  {
    id: 8,
    title: "Créer des instances inter‑régionales pour favoriser l’émergence de centres référents spécialisés régionaux",
    description: "Créer des instances inter‑régionales ayant pour mission de favoriser l’émergence de centres référents spécialisés régionaux.",
    secteurs: ["outre-mer", "santé", "coopération régionale", "centres référents"],
    horizon: "2027"
  },
  {
    id: 9,
    title: "Favoriser le recours aux expérimentations article 51 de la LFSS 2018 en outre-mer",
    description: "Favoriser pour l’outre‑mer le recours aux expérimentations autorisées dans le cadre du dispositif d’innovation en santé (article 51 de la LFSS 2018).",
    secteurs: ["outre-mer", "santé", "expérimentation", "innovation", "LFSS"],
    horizon: "2026"
  },
  {
    id: 10,
    title: "Développer les consultations de spécialités avancées par télémédecine et téléexpertise dans les archipels et zones de brousse",
    description: "Développer, dans le cadre de la télémédecine et de la téléexpertise, les consultations de spécialités avancées pour améliorer l’accessibilité aux soins dans les archipels et zones de brousse.",
    secteurs: ["outre-mer", "télémédecine", "téléexpertise", "accès aux soins", "archipel"],
    horizon: "2026"
  },

  // Chapitre 3 - Adapter la carte des collèges (2)
  {
    id: 11,
    title: "Définir un nouveau maillage territorial des collèges favorisant les regroupements entre écoles, collèges et lycées",
    description: "Définir, dans un délai de cinq ans et de manière concertée, un nouveau maillage territorial des collèges et faire évoluer le cadre réglementaire pour favoriser les regroupements entre écoles, collèges et lycées.",
    secteurs: ["éducation", "collège", "maillage", "regroupement", "démographie"],
    horizon: "2030"
  },
  {
    id: 12,
    title: "Associer l’enseignement privé sous contrat à la définition du nouveau maillage pour la mixité sociale",
    description: "Associer, dès à présent, l’enseignement privé sous contrat à la définition de ce nouveau maillage territorial pour mieux remplir l’objectif de mixité sociale au sein de ses établissements.",
    secteurs: ["éducation", "privé sous contrat", "mixité sociale", "maillage", "collège"]
  },

  // Chapitre 4 - Logement social (3)
  {
    id: 13,
    title: "Rendre obligatoire la fourniture des pièces justificatives dès l’enregistrement de la demande de logement social",
    description: "Rendre obligatoire la fourniture des pièces justificatives nécessaires à la qualification des demandes dès l'enregistrement de la demande.",
    secteurs: ["logement social", "demande", "pièces justificatives", "SNE", "enregistrement"],
    horizon: "2026"
  },
  {
    id: 14,
    title: "Vérifier l’intérêt du demandeur pour le logement proposé avant son attribution",
    description: "Vérifier l'intérêt du demandeur pour le logement proposé avant son attribution.",
    secteurs: ["logement social", "attribution", "demandeur", "refus", "logement choisi"],
    horizon: "2026"
  },
  {
    id: 15,
    title: "Faire figurer au compte‑rendu de la CALEOL l’application de la cotation",
    description: "Faire figurer au compte‑rendu de la commission d'attribution des logements (CALEOL) l'application qui a été faite de la cotation dans la désignation des candidats et l'attribution du logement.",
    secteurs: ["logement social", "CALEOL", "cotation", "attribution", "transparence"],
    horizon: "2026"
  },

  // Chapitre 5 - Accès numérique aux services publics (3)
  {
    id: 16,
    title: "Établir une vision consolidée des budgets publics consacrés à l’inclusion numérique",
    description: "Établir une vision consolidée des budgets de la sphère publique consacrés à l’inclusion numérique.",
    secteurs: ["numérique", "inclusion numérique", "budget", "financement", "fracture numérique"],
    horizon: "2027"
  },
  {
    id: 17,
    title: "Renforcer le caractère opérationnel des feuilles de route numériques",
    description: "Renforcer le caractère opérationnel des feuilles de route numériques en définissant les moyens à mobiliser et les indicateurs de résultats et d’impacts sur les populations.",
    secteurs: ["numérique", "feuille de route", "territoire", "indicateurs", "résultats"],
    horizon: "2027"
  },
  {
    id: 18,
    title: "Développer la détection des difficultés numériques et l’orientation vers des lieux d’inclusion adaptés dans France services",
    description: "Dans le cadre du programme France services, développer les actions de détection des difficultés numériques et organiser l'orientation par les conseillers vers les lieux d'inclusion numérique appropriés.",
    secteurs: ["numérique", "France services", "médiation numérique", "inclusion", "orientation"],
    horizon: "2027"
  },

  // Chapitre 1 Partie 2 - Mobilités du quotidien (4)
  {
    id: 19,
    title: "Mettre en place les contrats opérationnels de mobilité et les plans d’action pour la mobilité solidaire",
    description: "Mettre en place les contrats opérationnels de mobilité et les plans d'action pour la mobilité solidaire, outils prévus par la loi d'orientation des mobilités.",
    secteurs: ["mobilité", "transports", "contrat opérationnel", "mobilité solidaire", "AOM"],
    horizon: "2026"
  },
  {
    id: 20,
    title: "Clarifier les dispositifs juridiques et fiscaux pour favoriser les coopérations (syndicats mixtes)",
    description: "Clarifier les dispositifs juridiques et fiscaux applicables aux syndicats mixtes et aux conventions, afin de favoriser les coopérations.",
    secteurs: ["mobilité", "coopération", "syndicat mixte", "juridique", "fiscal"],
    horizon: "2026"
  },
  {
    id: 21,
    title: "Accorder la priorité à la régénération des réseaux existants et aux projets favorisant les trajets du quotidien",
    description: "Accorder la priorité à la régénération des réseaux existants et aux projets favorisant les trajets du quotidien.",
    secteurs: ["transport", "réseaux", "régénération", "trajets du quotidien", "priorité"],
    horizon: "2026"
  },
  {
    id: 22,
    title: "Prévoir une loi‑cadre prenant la suite de la LOM fixant les orientations de financement des projets de transport",
    description: "Prévoir une loi‑cadre prenant la suite de la loi d'orientation des mobilités et fixant les orientations de l'État et leurs modalités d'application en matière de financement des projets de transport.",
    secteurs: ["mobilité", "loi-cadre", "financement", "État", "projets de transport"],
    horizon: "2027"
  },

  // Chapitre 2 Partie 2 - Réindustrialisation (2)
  {
    id: 23,
    title: "Renforcer la participation des acteurs décentralisés aux instances de décision de France 2030",
    description: "Renforcer la participation des acteurs décentralisés et déconcentrés aux instances de décision de France 2030 en sollicitant systématiquement leur avis préalable en amont des processus de sélection.",
    secteurs: ["industrie", "France 2030", "décentralisation", "décision", "collectivités"],
    horizon: "2026"
  },
  {
    id: 24,
    title: "Réserver le label Sites France 2030 clés en main aux terrains présentant tous les prérequis",
    description: "Réserver le label Sites France 2030 clés en main aux terrains présentant l’ensemble des prérequis nécessaires à une installation industrielle rapide.",
    secteurs: ["industrie", "foncier", "label", "clés en main", "installation"],
    horizon: "2026"
  },

  // Chapitre 3 Partie 2 - Numérique (cohésion) (5)
  {
    id: 25,
    title: "Identifier les zones sans fibre et sans couverture mobile",
    description: "Identifier les zones sans accès à la fibre optique et sans couverture mobile.",
    secteurs: ["numérique", "fibre", "couverture mobile", "zone blanche", "aménagement numérique"],
    horizon: "2026"
  },
  {
    id: 26,
    title: "Établir un partenariat ARCEP‑DGCCRF pour contrôler les débits annoncés",
    description: "Établir un partenariat entre l'ARCEP et la DGCCRF pour contrôler le respect des débits communiqués aux consommateurs par les opérateurs de télécommunications.",
    secteurs: ["numérique", "ARCEP", "DGCCRF", "débit", "consommateur"],
    horizon: "2026"
  },
  {
    id: 27,
    title: "Intégrer les réseaux de télécommunications dans les dispositifs nationaux et locaux de gestion des crises",
    description: "Sous l’égide du SGDSN et des préfets, intégrer les réseaux de télécommunications fixes et mobiles dans les dispositifs nationaux et locaux de planification et de gestion des crises.",
    secteurs: ["numérique", "résilience", "crise", "SGDSN", "préfet"],
    horizon: "2026"
  },
  {
    id: 28,
    title: "Inciter les collectivités à établir des schémas de résilience numérique",
    description: "Inciter les collectivités territoriales à établir des schémas de résilience numérique, en métropole comme en outre‑mer.",
    secteurs: ["numérique", "résilience", "schéma", "collectivités", "crise"],
    horizon: "2026"
  },
  {
    id: 29,
    title: "Réaliser des études qualitatives sur l’impact du numérique sur la cohésion et l’attractivité des territoires",
    description: "Afin de soutenir le développement des usages numériques, réaliser des études qualitatives permettant de mesurer leur impact sur la cohésion et l'attractivité des territoires.",
    secteurs: ["numérique", "usages", "impact", "cohésion", "attractivité"],
    horizon: "2026"
  },

  // Chapitre 5 Partie 2 - Sécurité du quotidien (4)
  {
    id: 30,
    title: "Engager la révision de la répartition des zones de compétence entre police et gendarmerie",
    description: "Engager la révision en 2026 de la répartition des zones de compétence entre police et gendarmerie nationales (recommandation de 2025 réitérée).",
    secteurs: ["sécurité", "police", "gendarmerie", "zones de compétence", "révision"],
    horizon: "2026"
  },
  {
    id: 31,
    title: "Rééquilibrer les effectifs de policiers nationaux et gendarmes entre départements",
    description: "Rééquilibrer d’ici 2030 les effectifs de policiers nationaux et gendarmes entre départements, en fonction des besoins objectifs.",
    secteurs: ["sécurité", "effectifs", "police", "gendarmerie", "départements"],
    horizon: "2030"
  },
  {
    id: 32,
    title: "Réaffirmer le rôle central des CLSPD et CISPD dans la stratégie de prévention de la délinquance",
    description: "Dans le cadre de la stratégie de prévention de la délinquance 2025‑2030, réaffirmer dès 2026 le rôle central des conseils locaux et intercommunaux de sécurité et de prévention de la délinquance.",
    secteurs: ["sécurité", "prévention", "CLSPD", "CISPD", "délinquance"],
    horizon: "2026"
  },
  {
    id: 33,
    title: "Doter les polices municipales des moyens juridiques et techniques pour assurer leurs missions actuelles",
    description: "Doter en 2026 les polices municipales des moyens juridiques (amendes forfaitaires délictuelles) et techniques (accès à certains fichiers en mobilité) leur permettant d’assurer leurs missions actuelles.",
    secteurs: ["sécurité", "police municipale", "amendes", "fichiers", "mobilité"],
    horizon: "2026"
  },

  // Chapitre 1 Partie 3 - Politique de la ville (2)
  {
    id: 34,
    title: "Identifier les moyens et actions de droit commun de l’État déployés dans les QPV",
    description: "Identifier les moyens et l’ensemble des actions de droit commun de l’État déployés dans les quartiers prioritaires de la ville (QPV).",
    secteurs: ["politique de la ville", "QPV", "droit commun", "moyens", "État"],
    horizon: "2026"
  },
  {
    id: 35,
    title: "Mobiliser les dispositifs de droit commun avant de créer des dispositifs spécifiques dans les QPV",
    description: "S’assurer de la mobilisation des dispositifs de droit commun dans les quartiers prioritaires de la ville avant de créer des dispositifs spécifiques.",
    secteurs: ["politique de la ville", "QPV", "droit commun", "dispositifs spécifiques", "substitution"],
    horizon: "2026"
  },

  // Chapitre 2 Partie 3 - Opérations d’intérêt national (2)
  {
    id: 36,
    title: "Suivre les projections et réalisations des OIN pour évaluer leur soutenabilité et impact",
    description: "Dans un objectif de transparence, suivre à l’échelle de chaque opération d’intérêt national les projections et les réalisations afin d’en évaluer la soutenabilité et l’impact, y compris sur les territoires attenants.",
    secteurs: ["aménagement", "OIN", "projet urbain", "évaluation", "soutenabilité"],
    horizon: "2027"
  },
  {
    id: 37,
    title: "Définir des critères objectifs de recours et de dissolution des OIN",
    description: "Définir des critères objectifs de recours et de dissolution des opérations d’intérêt national en prévoyant, dès leur création, le principe de leur terme.",
    secteurs: ["aménagement", "OIN", "critères", "dissolution", "terme"],
    horizon: "2027"
  },

  // Chapitre 3 Partie 3 - Partenariats État‑collectivités (3)
  {
    id: 38,
    title: "Rationaliser le paysage contractuel autour des CPER et CRTE",
    description: "Rationaliser le paysage contractuel entre l’État et les collectivités territoriales autour des contrats de plan État‑Région (CPER) et des contrats de relance et de transition écologique (CRTE) en intégrant autant que possible à ces instruments les autres dispositifs contractuels.",
    secteurs: ["partenariat", "contractualisation", "CPER", "CRTE", "État"],
    horizon: "2027"
  },
  {
    id: 39,
    title: "Renforcer la portée des dispositifs contractuels par des annexes financières et une évaluation régulière",
    description: "Renforcer la portée des dispositifs contractuels, en laissant le temps nécessaire à leur négociation, en précisant notamment dans une annexe financière les engagements pris par chacun des signataires et en évaluant régulièrement leur mise en œuvre.",
    secteurs: ["partenariat", "contrat", "annexe financière", "évaluation", "engagement"],
    horizon: "2027"
  },
  {
    id: 40,
    title: "Rationaliser les concours de l’État à l’investissement local en réduisant le taux du FCTVA et en regroupant les dotations",
    description: "Rationaliser les concours de l’État à l’investissement local en réduisant le taux du Fonds de compensation de la TVA en faveur des dotations à l’investissement, en regroupant celles‑ci et en les orientant notamment vers la transition écologique.",
    secteurs: ["finances locales", "FCTVA", "investissement", "dotation", "transition écologique"],
    horizon: "2027"
  },

  // Chapitre 4 Partie 3 - Péréquation (4)
  {
    id: 41,
    title: "Basculer intégralement les dotations forfaitaires vers les dotations de péréquation dans la DGF",
    description: "Au sein de la dotation globale de fonctionnement, basculer intégralement les montants des dotations forfaitaires des communes et des départements et de la dotation de compensation des intercommunalités vers les dotations de péréquation et éliminer les biais contre‑péréquateurs.",
    secteurs: ["finances locales", "DGF", "péréquation", "dotations forfaitaires", "compensation"],
    horizon: "2032"
  },
  {
    id: 42,
    title: "Répartir intégralement les transferts de TVA aux collectivités selon des critères péréquateurs",
    description: "À l’exception des sommes affectées au FNAET, répartir intégralement les transferts de recettes de TVA aux collectivités en fonction de critères péréquateurs de ressources et de charges fondés sur des données contemporaines.",
    secteurs: ["finances locales", "TVA", "péréquation", "ressources", "charges"],
    horizon: "2032"
  },
  {
    id: 43,
    title: "Accroître le montant des fonds de péréquation horizontale et réviser le fonds de solidarité régional",
    description: "Accroître le montant de l’ensemble des fonds de péréquation horizontale et réviser les critères de versement du fonds de solidarité régional afin d’en faire bénéficier de nouvelles régions.",
    secteurs: ["finances locales", "péréquation horizontale", "FPIC", "FSR", "solidarité"],
    horizon: "2032"
  },
  {
    id: 44,
    title: "Renforcer le rôle péréquateur des intercommunalités en généralisant le pacte financier et fiscal",
    description: "Renforcer le rôle péréquateur des intercommunalités, notamment en généralisant à la totalité d’entre elles l’obligation d’établir un pacte financier et fiscal.",
    secteurs: ["finances locales", "intercommunalité", "pacte financier", "péréquation", "solidarité"],
    horizon: "2032"
  }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cdcRecommendations;
}
