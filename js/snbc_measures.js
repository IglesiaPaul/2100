const snbcMeasures = [
  {
    id: 1,
    title: "Objectif général – Réduction des émissions territoriales hors puits de carbone",
    description: "Atteindre -50 % d'émissions de GES en 2030 par rapport à 1990 (≈ 275 Mt CO2e). Neutralité carbone en 2050 (division par >8 des émissions brutes).",
    secteurs: ["atténuation", "neutralité carbone", "objectif général"],
    horizon: "2030-2050",
    cible: "-50% en 2030, neutralité en 2050"
  },
  {
    id: 2,
    title: "Objectif – Réduction des émissions du secteur Transports (domestique)",
    description: "Atteindre 92 Mt CO2e en 2030 soit -26 % par rapport à 1990 ; quasi zéro en 2050 (0,6 Mt).",
    secteurs: ["transport", "mobilité", "voiture", "poids lourd", "avion", "train"],
    horizon: "2030-2050",
    cible: "92 Mt CO2e en 2030, 0,6 Mt en 2050"
  },
  {
    id: 3,
    title: "Objectif – Transports : électrification des voitures particulières",
    description: "66 % des ventes de voitures neuves électriques en 2030, 15 % du parc roulant électrifié. 2 millions de véhicules électrifiés produits en France en 2030.",
    secteurs: ["transport", "voiture électrique", "électrification", "industrie automobile"],
    horizon: "2030",
    cible: "66% des ventes neuves, 15% du parc"
  },
  {
    id: 4,
    title: "Objectif – Transports : électrification des bus et cars",
    description: "90 % des autobus neufs électriques en 2030, 100 % en 2035. 30 % des autocars neufs électriques en 2030.",
    secteurs: ["transport", "bus", "car", "électrification"],
    horizon: "2030-2035",
    cible: "90% bus neufs (2030), 30% cars neufs (2030)"
  },
  {
    id: 5,
    title: "Objectif – Transports : report modal et covoiturage",
    description: "Triplement de la mobilité à vélo entre 2019 et 2030 ; triplement des trajets covoiturés entre 2019 et 2027 ; nombre moyen de personnes par voiture passe de 1,43 à 1,51 en 2030.",
    secteurs: ["transport", "vélo", "covoiturage", "report modal"],
    horizon: "2027-2030",
    cible: "triplement du vélo et du covoiturage"
  },
  {
    id: 6,
    title: "Objectif – Transports : fret ferroviaire et fluvial",
    description: "Doubler la part modale du fret ferroviaire d’ici 2030 par rapport à 2019 ; augmenter de 50 % la part modale du fret fluvial.",
    secteurs: ["transport", "fret", "ferroviaire", "fluvial", "logistique"],
    horizon: "2030",
    cible: "doublement du ferroviaire, +50% fluvial"
  },
  {
    id: 7,
    title: "Objectif – Agriculture : réduction des émissions",
    description: "Atteindre 67 Mt CO2e en 2030 (-28 % par rapport à 1990) et 43 Mt CO2e en 2050 (-54 %).",
    secteurs: ["agriculture", "élevage", "cultures", "engrais"],
    horizon: "2030-2050",
    cible: "67 Mt en 2030, 43 Mt en 2050"
  },
  {
    id: 8,
    title: "Objectif – Agriculture : réduction des engrais minéraux azotés",
    description: "Réduire la consommation d’engrais minéraux azotés de 30 % en 2030 et de 50 % en 2050 par rapport à 2020.",
    secteurs: ["agriculture", "engrais", "azote", "fertilisation"],
    horizon: "2030-2050",
    cible: "-30% en 2030, -50% en 2050"
  },
  {
    id: 9,
    title: "Objectif – Agriculture : développement de l’agroécologie et du bio",
    description: "Systèmes agroécologiques sur 36 % des surfaces en 2030 (21 % en bio).",
    secteurs: ["agriculture", "agroécologie", "bio", "surfaces"],
    horizon: "2030",
    cible: "36% agroécologie, 21% bio"
  },
  {
    id: 10,
    title: "Objectif – Agriculture : haies et agroforesterie",
    description: "+50 000 km nets de haies d’ici 2030 (pacte haie). 100 kha d’agroforesterie intraparcellaire en 2030.",
    secteurs: ["agriculture", "haie", "agroforesterie", "stockage carbone"],
    horizon: "2030",
    cible: "+50 000 km haies, 100 kha agroforesterie"
  },
  {
    id: 11,
    title: "Objectif – Industrie : réduction des émissions brutes",
    description: "Atteindre 45 Mt CO2e en 2030 (-68 % par rapport à 1990) et 4 Mt CO2e en 2050 (-97 %).",
    secteurs: ["industrie", "décarbonation", "procédés"],
    horizon: "2030-2050",
    cible: "45 Mt en 2030, 4 Mt en 2050"
  },
  {
    id: 12,
    title: "Objectif – Industrie : électrification et hydrogène",
    description: "Part de l’électricité dans le mix industriel : 47 % en 2030, 57 % en 2050. Consommation d’hydrogène électrolytique : 5 TWh en 2030, 22 TWh en 2050.",
    secteurs: ["industrie", "électricité", "hydrogène", "électrification"],
    horizon: "2030-2050",
    cible: "47% électricité (2030), 5 TWh H2 (2030)"
  },
  {
    id: 13,
    title: "Objectif – Industrie : capture et stockage de carbone (CCUS)",
    description: "Capter 4 à 8 Mt CO2e/an dans l’industrie en 2030, 20 à 30 Mt en 2050 (dont 50 % biogénique).",
    secteurs: ["industrie", "CCUS", "capture carbone", "stockage"],
    horizon: "2030-2050",
    cible: "4-8 Mt (2030), 20-30 Mt (2050)"
  },
  {
    id: 14,
    title: "Objectif – Bâtiments (résidentiel+tertiaire) : réduction des émissions directes",
    description: "Atteindre 37 Mt CO2e en 2030 (-60 % par rapport à 1990) et 3 Mt CO2e en 2050 (-97 %).",
    secteurs: ["bâtiment", "logement", "tertiaire", "chauffage"],
    horizon: "2030-2050",
    cible: "37 Mt en 2030, 3 Mt en 2050"
  },
  {
    id: 15,
    title: "Objectif – Bâtiments : rénovation énergétique",
    description: "700 000 rénovations par an d’ici 2030 permettant au moins deux sauts de classe DPE (dont 250 000 rénovations d’ampleur).",
    secteurs: ["bâtiment", "rénovation", "DPE", "efficacité énergétique"],
    horizon: "2030",
    cible: "700 000 rénovations/an"
  },
  {
    id: 16,
    title: "Objectif – Bâtiments : pompes à chaleur (PAC)",
    description: "8,8 millions de logements équipés de PAC en 2030 (850 000 installations/an).",
    secteurs: ["bâtiment", "pompe à chaleur", "PAC", "chauffage décarboné"],
    horizon: "2030",
    cible: "8,8 millions de logements"
  },
  {
    id: 17,
    title: "Objectif – Bâtiments : sortie des chaudières fioul et gaz",
    description: "Sortie du fioul d’ici 2035. Remplacement de 20 % des chaudières gaz d’ici 2030 (350 000 foyers/an).",
    secteurs: ["bâtiment", "fioul", "gaz", "chaudière", "décarbonation"],
    horizon: "2030-2035",
    cible: "sortie fioul 2035, -20% chaudières gaz en 2030"
  },
  {
    id: 18,
    title: "Objectif – Production d’énergie : réduction des émissions",
    description: "Atteindre 26 Mt CO2e en 2030 (-67 % par rapport à 1990) et 3 Mt CO2e en 2050 (-96 %).",
    secteurs: ["énergie", "électricité", "chaleur", "raffinage"],
    horizon: "2030-2050",
    cible: "26 Mt en 2030, 3 Mt en 2050"
  },
  {
    id: 19,
    title: "Objectif – Production d’électricité décarbonée",
    description: "585 TWh de production électrique décarbonée en 2030 ; 800 TWh en 2050. Sortie du charbon en 2027, du fioul en 2030.",
    secteurs: ["énergie", "électricité", "nucléaire", "renouvelable"],
    horizon: "2030-2050",
    cible: "585 TWh (2030), 800 TWh (2050)"
  },
  {
    id: 20,
    title: "Objectif – Déchets : réduction des émissions",
    description: "Atteindre 12 Mt CO2e en 2030 (-28 % par rapport à 1990) et 8 Mt CO2e en 2050 (-55 %).",
    secteurs: ["déchets", "ISDND", "méthanisation", "recyclage"],
    horizon: "2030-2050",
    cible: "12 Mt en 2030, 8 Mt en 2050"
  },
  {
    id: 21,
    title: "Objectif – Déchets : réduction du stockage en ISDND",
    description: "Diminuer de 40 % le volume de déchets stockés en ISDND entre 2022 et 2030, et de 70 % entre 2022 et 2050.",
    secteurs: ["déchets", "ISDND", "stockage", "méthane"],
    horizon: "2030-2050",
    cible: "-40% (2030), -70% (2050)"
  },
  {
    id: 22,
    title: "Objectif – UTCATF (puits de carbone naturel)",
    description: "Absorber 25 Mt CO2e en 2030 et 24 Mt CO2e en 2050 (secteur UTCATF).",
    secteurs: ["forêt", "puits de carbone", "UTCATF", "sol"],
    horizon: "2030-2050",
    cible: "-25 Mt (2030), -24 Mt (2050)"
  },
  {
    id: 23,
    title: "Objectif – Forêt : renouvellement et adaptation",
    description: "Renouveler et adapter 10 % de la forêt métropolitaine d’ici 2032. Augmenter le boisement hors forêt : 200 000 ha entre 2030 et 2039.",
    secteurs: ["forêt", "renouvellement", "boisement", "adaptation"],
    horizon: "2032",
    cible: "10% de la forêt renouvelée"
  },
  {
    id: 24,
    title: "Objectif – Empreinte carbone : objectif général",
    description: "Réduire l’empreinte carbone de 71 % à 79 % en 2050 par rapport à 2010 (soit 160 à 215 Mt CO2e).",
    secteurs: ["empreinte", "consommation", "importations", "cycle de vie"],
    horizon: "2050",
    cible: "160-215 Mt CO2e"
  },
  {
    id: 25,
    title: "Objectif – Empreinte carbone de l’alimentation",
    description: "Réduction de 52 % à 57 % en 2050 par rapport à 2010 (69-77 Mt CO2e).",
    secteurs: ["alimentation", "empreinte", "régime alimentaire", "importations"],
    horizon: "2050",
    cible: "69-77 Mt CO2e"
  },
  {
    id: 26,
    title: "Objectif – Empreinte carbone de l’habitat",
    description: "Réduction de 90 % à 93 % en 2050 par rapport à 2010 (13-18 Mt CO2e).",
    secteurs: ["habitat", "empreinte", "construction", "matériaux"],
    horizon: "2050",
    cible: "13-18 Mt CO2e"
  },
  {
    id: 27,
    title: "Objectif – Empreinte carbone du transport",
    description: "Réduction de 86 % à 92 % en 2050 par rapport à 2010 (13-24 Mt CO2e).",
    secteurs: ["transport", "empreinte", "fabrication véhicules", "cycle de vie"],
    horizon: "2050",
    cible: "13-24 Mt CO2e"
  },
  {
    id: 28,
    title: "Objectif – Empreinte carbone des biens d’équipements",
    description: "Réduction de 75 % à 84 % en 2050 par rapport à 2010 (15-23 Mt CO2e).",
    secteurs: ["biens d'équipements", "empreinte", "textile", "électronique", "économie circulaire"],
    horizon: "2050",
    cible: "15-23 Mt CO2e"
  },
  {
    id: 29,
    title: "Objectif – Sobriété énergétique et efficacité",
    description: "Réduction de la consommation d’énergie finale de 29 % en 2030 par rapport à 2012 (objectif DEE : 1243 TWh).",
    secteurs: ["énergie", "sobriété", "efficacité énergétique", "consommation"],
    horizon: "2030",
    cible: "1243 TWh (finale)"
  },
  {
    id: 30,
    title: "Orientation – Sortie des énergies fossiles",
    description: "Sortie du charbon en 2030, du pétrole d’ici 2045, du gaz fossile d’ici 2050.",
    secteurs: ["énergie", "fossile", "charbon", "pétrole", "gaz"],
    horizon: "2030-2050",
    cible: "sortie charbon 2030, pétrole 2045, gaz 2050"
  },
  {
    id: 31,
    title: "Orientation – Réindustrialisation verte et relocalisation",
    description: "Favoriser la réindustrialisation bas-carbone (mix électrique décarboné). Objectif : 2 millions de véhicules électrifiés produits en France en 2030.",
    secteurs: ["industrie", "réindustrialisation", "relocalisation", "emploi", "compétitivité"],
    horizon: "2030",
    cible: "2M véhicules électrifiés produits"
  },
  {
    id: 32,
    title: "Orientation – Économie circulaire et réparation",
    description: "Bonus réparation, indices de réparabilité et durabilité, développement du réemploi et du recyclage.",
    secteurs: ["économie circulaire", "réparation", "réemploi", "recyclage", "déchets"],
    horizon: "2030",
    cible: "généralisation bonus réparation"
  }
];
