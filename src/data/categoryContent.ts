export interface CategoryContent {
  intro: string
  points: string[]
  note?: string
}

const categoryContentData: Record<string, CategoryContent> = {
  'plaques-personnalisees': {
    intro:
      "Les plaques d'immatriculation personnalisées en France sont fabriquées selon le format standard SIV de 520×110 mm pour les véhicules légers. La réglementation impose des caractères normalisés et un fond blanc réfléchissant, mais offre plusieurs possibilités de personnalisation légale : logo de région, inserts décoratifs sur les bordures, finitions plexiglass premium (poli, givré, effet carbone) et vis de fixation personnalisées.",
    points: [
      "Format standard : 520×110 mm — compatible tous véhicules légers",
      "Polices de caractères normalisées SIV obligatoires",
      "Fond blanc réfléchissant avec marquage CE homologué NF R 10-033",
      "Logo de région et code département personnalisables",
      "Finitions disponibles : plexiglass poli, givré, effet carbone",
    ],
    note:
      "Toutes nos plaques respectent la réglementation en vigueur et sont produites dans notre atelier en France sous 24h. Livraison express en 48h partout en France.",
  },

  'moto': {
    intro:
      "Les plaques moto en France suivent un format réglementaire de 210×130 mm depuis le décret du 9 février 2009 réformant le Système d'Immatriculation des Véhicules (SIV). Le fond est blanc réfléchissant avec des caractères noirs normalisés, identiques en style au format voiture mais en version réduite. La plaque arrière est obligatoire et doit être éclairée la nuit. Sur un deux-roues, la plaque avant est formellement interdite.",
    points: [
      "Format réglementaire : 210×130 mm (21×13 cm) depuis 2009",
      "Fond blanc réfléchissant, caractères noirs normalisés",
      "Plaque arrière obligatoire, plaque avant interdite sur deux-roues",
      "Éclairage de plaque obligatoire la nuit",
      "Lisibilité garantie à 20 mètres conformément à la réglementation",
    ],
    note:
      "Compatibles avec toutes les motos, scooters et vélomoteurs immatriculés depuis 2009. Livraison express 48h, fabrication française.",
  },

  'us': {
    intro:
      "Les plaques de style américain (US) mesurent 300×150 mm ou 300×100 mm, correspondant aux dimensions standard des États américains. En France, ces plaques ne sont pas homologuées pour la circulation sur la voie publique : elles sont destinées à un usage décoratif, pour les passionnés de véhicules américains, les expositions, clubs automobiles et événements privés. Elles sont fabriquées en aluminium 3D embossé, comme les vraies plaques d'État américaines.",
    points: [
      "Format authentique : 300×150 mm (standard) ou 300×100 mm (compact)",
      "Aluminium 3D embossé — même processus que les vraies plaques d'État",
      "Usage décoratif : garage, intérieur véhicule, expo, collection",
      "Texte entièrement personnalisable (jusqu'à 7 caractères)",
      "Non homologuées pour la circulation sur voie publique française",
    ],
    note:
      "Idéales pour les propriétaires de muscle cars, pick-up, Mustang et tout véhicule d'inspiration américaine. Rendu authentique garanti.",
  },

  'suv': {
    intro:
      "Les SUV et 4×4 nécessitent parfois des plaques de format adapté à leur châssis. Si la plupart des SUV acceptent le format standard 520×110 mm, certains modèles avec porte arrière verticale ou pare-chocs spécifiques utilisent le format 275×200 mm. Nos plaques SUV sont fabriquées en plexiglass renforcé anti-abrasion, conçues pour résister aux projections de boue, graviers et intempéries inhérentes à un usage tout-terrain régulier.",
    points: [
      "Format adapté : 275×200 mm pour les SUV et 4×4 spécifiques",
      "Plexiglass renforcé anti-abrasion, résistant aux UV et intempéries",
      "Fixations renforcées pour usage tout-terrain intensif",
      "100% homologuées CE et conformes SIV",
      "Compatible SUV, 4×4, pick-up et véhicules tout-terrain",
    ],
    note:
      "Convient à tous les modèles de SUV courants. En cas de doute sur le format compatible avec votre véhicule, consultez le guide de dimensions dans notre configurateur.",
  },

  'cyclo': {
    intro:
      "Les cyclomoteurs (moins de 50 cc ou vitesse limitée à 45 km/h) utilisent un format de plaque spécifique de 140×120 mm depuis la réforme SIV de 2009. Avant cette réforme, les cyclomoteurs portaient une plaque jaune caractéristique. Les nouvelles immatriculations se font désormais avec une plaque blanche, numérotée à vie et non liée à un département. Les VAE (vélos à assistance électrique) limités à 25 km/h ne nécessitent pas de plaque.",
    points: [
      "Format réglementaire cyclomoteur : 140×120 mm (14×12 cm) depuis 2009",
      "Fond blanc réfléchissant — la plaque jaune n'est plus délivrée depuis 2009",
      "Numéro à vie non lié au département de résidence",
      "Applicable aux cyclomoteurs < 50 cc et speed pedelecs (45 km/h)",
      "Les VAE < 25 km/h sont exemptés d'immatriculation et de plaque",
    ],
    note:
      "Plaques cyclomoteur conformes SIV, fabriquées en France, livrées en 48h. Compatible toutes marques : Peugeot, MBK, Yamaha, Honda, Piaggio.",
  },

  'little-moto': {
    intro:
      "Les mini motos (pit bikes, pocket bikes, dirt bikes enfants) sont des véhicules motorisés légers dont l'usage est principalement limité aux circuits privés et propriétés privées. En France, la circulation sur la voie publique est interdite pour ces engins non homologués. Une plaque au format 170×130 mm permet de personnaliser et d'identifier votre machine lors d'événements, compétitions amateurs ou sorties en circuit.",
    points: [
      "Format recommandé : 170×130 mm (17×13 cm), adapté aux petits châssis",
      "Usage piste et propriété privée uniquement — non homologué route",
      "Plexiglass léger, résistant aux vibrations et projections de boue",
      "Identification obligatoire lors des compétitions FFM amateurs",
      "Format 100×100 mm disponible pour les machines très compactes",
    ],
    note:
      "Parfait pour les pit bikes, pocket bikes, mini-motos thermiques ou électriques. Livraison express 48h, fabrication artisanale française.",
  },

  'enduro': {
    intro:
      "Les motos de cross, enduro et trial utilisent un format de plaque carré de 100×100 mm pour les compétitions off-road. Pour les enduros homologués route (dual sport), la plaque SIV standard 210×130 mm s'impose. Lors des épreuves FFM et FMF, les plaques d'identification 100×100 mm doivent être lisibles à 8 mètres et résister aux projections de boue intense. Nos plaques enduro sont spécialement renforcées pour ce type d'usage extrême.",
    points: [
      "Format compétition : 100×100 mm — standard FFM/FMF",
      "Enduros homologués route : plaque SIV 210×130 mm obligatoire",
      "Lisibilité réglementaire à 8 mètres pour les plaques de compétition",
      "Plexiglass renforcé anti-vibration, résistance boue et UV maximale",
      "Fixation 4 vis sur plastiques avant/arrière — compatible toutes marques",
    ],
    note:
      "Conçues pour les conditions extrêmes du tout-terrain. Compatible KTM, Husqvarna, Yamaha, Honda, Kawasaki, Beta, Gas Gas. Livraison 48h.",
  },

  'collection': {
    intro:
      "Les véhicules de collection (plus de 30 ans) bénéficient d'un statut spécial en droit français depuis 2017. Ils peuvent obtenir une carte grise 'véhicule de collection' avec contrôle technique allégé (tous les 5 ans). Le format de plaque collection est 460×100 mm, reproduisant fidèlement les dimensions historiques des plaques françaises d'époque. Ces plaques conviennent aux voitures, breaks et berlines anciennes dont l'emplacement n'est pas prévu pour le format moderne 520×110 mm.",
    points: [
      "Format collection : 460×100 mm — fidèle aux dimensions historiques françaises",
      "Statut 'véhicule de collection' pour tout véhicule de plus de 30 ans",
      "Contrôle technique allégé tous les 5 ans (au lieu de 2 ans)",
      "Finition aluminium ou plexiglass premium, style rétro authentique",
      "Compatible voitures, breaks, coupés et berlines classiques",
    ],
    note:
      "Certificat d'authenticité FFVE recommandé pour l'immatriculation. Nos plaques collection sont fabriquées dans le respect des dimensions et finitions d'époque.",
  },

  'collection-compact': {
    intro:
      "Le format collection compact (275×75 mm) est conçu pour les motos et petits véhicules anciens dont l'emplacement de plaque est trop étroit pour le format standard collection (460×100 mm). Ce format plus compact reproduit l'esthétique des plaques des années 1960-1980, avec une finition aluminium ou plexiglass premium. Il est particulièrement adapté aux motos classiques, side-cars et petites voiturettes de collection.",
    points: [
      "Format compact : 275×75 mm — pour motos et petits véhicules anciens",
      "Reproduction fidèle des plaques d'époque (années 60-80)",
      "Aluminium ou plexiglass premium, finition vintage garantie",
      "Compatible motos et scooters anciens, 2CV, Méhari, Renault 4",
      "Vis inox recommandées pour éviter la corrosion sur machines vintage",
    ],
    note:
      "Pour les motos immatriculées dans le SIV, la plaque 210×130 mm reste obligatoire. Le format compact est réservé aux véhicules ayant historiquement cet emplacement.",
  },
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return categoryContentData[slug] ?? null
}
