/* ==========================================================================
   La ferme de la Bottière — données des logements
   Contenus et tarifs repris du site labottiere.com
   ========================================================================== */
window.BOTTIERE = {
  booking: 'https://la-ferme-de-la-bottiere.amenitiz.io/fr/booking/room',
  phone: '+33643384572',
  phoneLabel: '06 43 38 45 72',
  address: 'La Bottière, En Brovant, 73340 Aillon-le-Vieux, France',
  maps: 'https://www.google.com/maps/place/La+ferme+de+la+Botti%C3%A8re+-+g%C3%AEtes+et+chambres+d\'h%C3%B4tes,+accueil+de+stages/@45.6388101,6.0903281,17z',
  instagram: 'http://instagram.com/fermedelabottieremarion',
  facebook: 'https://www.facebook.com/labottiere',

  logements: [
    {
      id: 'margeriaz',
      url: 'gite-du-margeriaz.html',
      type: 'Gîte entier',
      name: 'Gîte du Margériaz',
      tagline: 'La grande tablée des Bauges',
      label: '3 épis Gîtes de France',
      surface: 90, guests: 9, bedrooms: 2, beds: 6, baths: 2,
      price: 90, priceNote: 'à partir de',
      minNights: '2 nuits min. hors vacances · semaine (sam.→sam.) en vacances scolaires',
      img: 'margeriaz', count: 19,
      short: 'Un gîte de 90 m² avec 2 grandes chambres, une immense salle à manger pour 18 et deux salles d’eau.',
      description: [
        'Installé dans notre ancienne ferme baujue de plus de 150 ans, le Margériaz est le gîte des grandes retrouvailles. Sa pièce maîtresse : une très grande salle à manger-salon avec une table de 10 et une console dépliable qui permet d’installer jusqu’à 18 convives lorsque les deux gîtes sont réunis.',
        'Cuisine séparée, deux salles d’eau, un WC indépendant et un extérieur privatif avec barbecue : tout est pensé pour que les familles et les groupes d’amis vivent ensemble sans se marcher dessus.'
      ],
      highlights: [
        ['table', 'Salle à manger XXL', 'Jusqu’à 18 couverts en réunissant les deux grands gîtes.'],
        ['bath', 'Deux salles d’eau', 'Dont une douche à l’italienne, plus un WC séparé.'],
        ['sun', 'Extérieur privatif', 'Barbecue, table et chaises, jardin partagé avec balançoire.']
      ],
      rooms: [
        ['Chambre 1', '2 lits doubles 140 · 1 lit superposé · espace lit bébé', 9],
        ['Chambre 2', '1 lit double 140 · 1 lit simple 90 · espace lit bébé', 10]
      ],
      amenities: ['Cuisine séparée équipée', 'Grand salon-salle à manger', '2 salles d’eau', 'WC séparé', 'Lave-linge', 'Matériel bébé sur demande', 'Barbecue', 'Extérieur privatif', 'Jardin commun & balançoire', 'Herbes aromatiques', 'Chauffage inclus', 'Parking'],
      captions: ['La grande salle à manger', 'Le salon', 'Chambre 1', 'La façade de l’ancienne ferme', 'La pièce de vie', 'La table pour 9/10 personnes', 'Le coin salon', 'La cuisine séparée', 'Chambre 1 · lits superposés', 'Chambre 2', 'Salle d’eau', 'Douche à l’italienne', 'Salle d’eau 2', 'L’espace repas', 'Extérieur avec table pour 12', 'Le jardin', 'La balançoire', 'L’entrée du gîte', 'La ferme']
    },
    {
      id: 'colombier',
      url: 'gite-du-colombier.html',
      type: 'Gîte entier',
      name: 'Gîte du Colombier',
      tagline: 'Cocooning, vue sur la montagne',
      label: '3 épis Gîtes de France',
      surface: 90, guests: 10, bedrooms: 3, beds: 7, baths: 1,
      price: 90, priceNote: 'à partir de',
      minNights: '2 nuits min. hors vacances · semaine (sam.→sam.) en vacances scolaires',
      img: 'colombier', count: 10,
      short: 'Un gîte de 90 m² avec 3 chambres et jusqu’à 10 couchages, vue sur la montagne. Ambiance cocooning garantie.',
      description: [
        'Le Colombier, c’est le refuge douillet de la ferme : trois chambres, une salle à manger ouverte sur la cuisine et un salon installé à l’étage pour se retrouver au calme après une journée de randonnée ou de ski.',
        'Sa terrasse privative regarde la montagne. Le soir, barbecue et dîner dehors, les enfants filent sur la balançoire du jardin partagé.'
      ],
      highlights: [
        ['mountain', 'Vue montagne', 'Terrasse privative face au massif des Bauges.'],
        ['sofa', 'Salon à l’étage', 'Un espace séparé pour lire, jouer ou se reposer.'],
        ['bed', '3 chambres', 'Jusqu’à 10 couchages, idéal pour deux familles.']
      ],
      rooms: [
        ['Chambre 1', '1 lit double 160 · 1 lit simple 90', 6],
        ['Chambre 2', '1 lit double 160 · 1 lit bébé', 3],
        ['Chambre 3', '1 lit double 140 · 2 lits superposés enfants (70 cm)', 7]
      ],
      amenities: ['Cuisine ouverte équipée', 'Salle à manger', 'Salon séparé à l’étage', 'Salle d’eau avec WC', 'WC séparé', 'Lave-linge', 'Matériel bébé sur demande', 'Barbecue', 'Terrasse privative', 'Jardin commun & balançoire', 'Chauffage inclus', 'Parking'],
      captions: ['L’extérieur privatif et sa terrasse', 'La salle à manger', 'Chambre 2', 'La cuisine ouverte', 'Le salon à l’étage', 'Chambre 1', 'Chambre 3', 'Chambre 3 · lits superposés', 'La salle d’eau', 'La ferme']
    },
    {
      id: 'atelier',
      url: 'gite-de-l-atelier.html',
      type: 'Studio',
      name: 'Gîte l’Atelier',
      tagline: 'Autonomie & cocooning pour 4',
      label: 'Petit-déjeuner en option',
      surface: 35, guests: 4, bedrooms: 1, beds: 3, baths: 1,
      price: 70, priceNote: 'à partir de',
      minNights: '1 nuit min. hors vacances · semaine en vacances scolaires',
      img: 'atelier', count: 15,
      short: 'Notre grand studio de 35 m² : un lit 160, des lits superposés, une vraie cuisine et une salle d’eau toute neuve.',
      description: [
        'Ancien atelier de confection de bottes, l’Atelier est aujourd’hui notre grand studio : chaleur du bois en hiver, fraîcheur des pierres en été. Un mix entre autonomie et cocooning, selon vos envies.',
        'Une vraie cuisine ouverte (induction 3 feux, petit four, micro-ondes, grand réfrigérateur), un coin nuit fermé et une grande douche carrelée. Envie d’être chouchoutés ? Ajoutez le petit-déjeuner maison, sucré-salé et local, servi en panier ou à notre table.'
      ],
      highlights: [
        ['coffee', 'Petit-déjeuner maison', 'En panier ou à notre table, sucré-salé et local.'],
        ['sun', 'Terrasse plein sud', 'À partager avec notre famille, vue sur les vaches.'],
        ['snow', 'Margériaz 1400', 'Ski 100 % neige naturelle à quelques minutes.']
      ],
      rooms: [
        ['Coin nuit fermé', '2 lits simples jumelables en 160 × 200', 2],
        ['Pièce de vie', '1 lit superposé · 2 matelas confort 90 × 190', 5]
      ],
      amenities: ['Cuisine équipée', 'Plaque induction 3 feux', 'Four & micro-ondes', 'Grand réfrigérateur & congélateur', 'Vaisselle de qualité', 'Salle d’eau avec douche & WC', 'Petit-déjeuner en option', 'Terrasse plein sud', 'Barbecue', 'Jardin commun & balançoire', 'Chauffage inclus', 'Parking'],
      captions: ['Le studio', 'Le coin nuit', 'L’espace repas', 'La terrasse plein sud', 'Lit double & superposés', 'La cuisine', 'Cuisine équipée', 'La grande douche', 'Salle d’eau', 'Vaisselle & équipement', 'La pièce de vie', 'Le coin nuit fermé', 'Chaleur du bois', 'Le petit-déjeuner', 'La balançoire, vue sur les vaches']
    },
    {
      id: 'marmotte',
      url: 'chambre-marmotte.html',
      type: 'Chambre d’hôtes',
      name: 'Chambre Marmotte',
      tagline: 'La chambre en plus, ambiance chalet',
      label: 'En complément d’un gîte',
      surface: 20, guests: 3, bedrooms: 1, beds: 2, baths: 1,
      price: 65, priceNote: 'à partir de',
      minNights: 'Uniquement en supplément d’un gîte · sur demande',
      img: 'marmotte', count: 14,
      short: 'Une chambre familiale de 20 m² avec salle d’eau privative pour agrandir votre gîte. Bois et travertin.',
      description: [
        'La chambre Marmotte permet d’augmenter la capacité de votre gîte : un lit double queen-size et un lit simple, une salle d’eau privative avec douche à l’italienne, lavabo et WC.',
        'Ambiance chalet avec sa décoration bois et la faïence en travertin. Elle ouvre sur un extérieur privatif en rez-de-jardin, avec banc et chaise longue face à la montagne. Elle ne peut pas être louée seule.'
      ],
      highlights: [
        ['bath', 'Salle d’eau privative', 'Douche à l’italienne, grand meuble vasque, WC.'],
        ['tree', 'Bois & travertin', 'Une ambiance chalet chaleureuse.'],
        ['sun', 'Extérieur privatif', 'Banc et chaise longue, vue montagne.']
      ],
      rooms: [
        ['La chambre', '1 lit double 160 · 1 lit simple 90', 2]
      ],
      amenities: ['Salle d’eau privative', 'Douche à l’italienne', 'WC privatif', 'Linge de lit inclus', 'Extérieur privatif', 'Vue montagne', 'Table d’hôtes sur demande', 'Petit-déjeuner maison', 'Chauffage inclus', 'Parking'],
      captions: ['Ambiance chalet', 'La chambre', 'Poussez la porte…', 'Salle d’eau en travertin', 'L’extérieur privatif', '1 lit 160 & 1 lit 90', 'Douche à l’italienne', 'Salle d’eau', 'La porte de la chambre', 'Le petit-déjeuner', 'Brunch maison', 'Le salon cosy', 'Le salon et sa cheminée', 'La salle à manger']
    }
  ],

  // Grilles tarifaires reprises de la page « Tarifs & Dispo »
  tarifs: {
    nuits: [
      ['Gîte du Colombier', 'base 6 pers.', '—', '280 €', '300 €', '400 €', '500 €', '600 €', '600 €'],
      ['Gîte du Margériaz', 'base 6 pers.', '—', '280 €', '300 €', '400 €', '500 €', '600 €', '600 €'],
      ['Gîte l’Atelier', 'base 4 pers.', '70 €', '140 €', '210 €', '280 €', '350 €', '420 €', '420 €']
    ],
    vacances: [
      ['Été · du samedi au samedi', '750 €', '490 €'],
      ['Noël & Nouvel An · du samedi au samedi', '800 €', '490 €'],
      ['Hiver (toutes zones) · du samedi au samedi', '800 €', '490 €']
    ],
    services: [
      ['Personne supplémentaire au-delà de 6 (grand gîte)', '15 / 20 / 25 / 30 € / nuit'],
      ['Ménage fin de séjour · Atelier / grand gîte', '30 € / 90 €'],
      ['Draps lit simple + serviettes (1 pers.)', '8 €'],
      ['Draps lit double + serviettes (2 pers.)', '10 €'],
      ['Drap de bain pour le bain nordique (par pers.)', '3 €'],
      ['Frigo plein (récupération d’un drive à Chambéry)', '10 €'],
      ['Bain nordique privatif 1h30 · 15/09 → 15/06', '60 €'],
      ['Bain nordique privatif 1h30 · 16/06 → 14/09', '50 €']
    ]
  }
};
