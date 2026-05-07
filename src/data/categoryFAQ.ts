export interface FAQItem {
  question: string
  answer: string
}

const categoryFAQData: Record<string, FAQItem[]> = {
  'plaques-personnalisees': [
    {
      question: "Qu'est-ce qu'une plaque d'immatriculation personnalisée homologuée ?",
      answer: "Une plaque personnalisée homologuée respecte les normes SIV françaises (fond blanc réfléchissant, caractères noirs normalisés, logo région optionnel) tout en offrant des options de personnalisation sur la finition, les inserts et les accessoires. Elle porte le marquage CE obligatoire et est valable sur la voie publique.",
    },
    {
      question: "Quels éléments peut-on personnaliser sur une plaque d'immatriculation ?",
      answer: "Vous pouvez personnaliser le logo de région (bandelette bleue gauche) et de département (droite), la finition du fond (plexiglass poli, givré, carbone), les inserts décoratifs sur les bords et les vis de fixation. Le numéro d'immatriculation, les polices de caractères et les dimensions restent fixés par la réglementation.",
    },
    {
      question: "Peut-on mettre le drapeau d'une région sur sa plaque d'immatriculation ?",
      answer: "Oui. Depuis la réforme SIV, vous pouvez apposer le logo de votre région (fleur de lys, croix occitane, hermine bretonne, etc.) sur la bandelette bleue à gauche. Seuls les logos régionaux homologués sont autorisés — ils sont directement disponibles dans notre configurateur.",
    },
    {
      question: "Les plaques personnalisées sont-elles légales pour circuler en France ?",
      answer: "Oui, à condition de respecter la réglementation : fond blanc réfléchissant, polices de caractères normalisées, dimensions 520×110 mm et marquage CE. Tout écart à ces normes rend la plaque illégale sur la voie publique et peut entraîner une immobilisation du véhicule.",
    },
    {
      question: "Quel est le délai de livraison pour une plaque personnalisée ?",
      answer: "Les plaques sont produites en atelier sous 24h puis expédiées en livraison express. Vous recevez généralement votre commande en 48h ouvrées à domicile, avec numéro de suivi. Une option de livraison en point relais est également disponible.",
    },
  ],

  'moto': [
    {
      question: "Quel est le format réglementaire d'une plaque moto en France ?",
      answer: "Le format réglementaire pour une plaque moto est 210×130 mm (21×13 cm) depuis le décret du 9 février 2009. Ce format s'applique aux motos, scooters et vélomoteurs immatriculés dans le système SIV. Le fond est blanc réfléchissant avec des caractères noirs de hauteur normalisée.",
    },
    {
      question: "Les motos ont-elles une plaque avant et une plaque arrière ?",
      answer: "Non. En France, les deux-roues motorisés n'ont qu'une seule plaque, à l'arrière. La plaque avant est formellement interdite sur les motos et scooters. Seule la plaque arrière est obligatoire et doit être éclairée la nuit par un feu de plaque homologué.",
    },
    {
      question: "Mon scooter 50 cc a-t-il besoin d'une plaque d'immatriculation ?",
      answer: "Oui. Depuis la réforme de 2004, tous les cyclomoteurs (moins de 50 cc) et scooters doivent être immatriculés avec un numéro SIV. La plaque est obligatoire, mais au format cyclomoteur 140×120 mm — et non au format moto 210×130 mm.",
    },
    {
      question: "Puis-je personnaliser ma plaque moto avec un logo de région ?",
      answer: "Oui. Comme pour les voitures, vous pouvez choisir le logo de votre région sur la bandelette bleue gauche. La personnalisation reste limitée aux éléments autorisés par la réglementation SIV. Le fond blanc, les caractères noirs normalisés et les dimensions 210×130 mm sont obligatoires.",
    },
    {
      question: "La plaque moto doit-elle être éclairée la nuit ?",
      answer: "Oui, absolument. La plaque arrière d'une moto doit être éclairée la nuit par un feu de plaque homologué. L'absence d'éclairage de plaque est une infraction relevée lors des contrôles routiers et peut entraîner une contravention de 4e classe.",
    },
  ],

  'us': [
    {
      question: "Les plaques US sont-elles homologuées pour circuler en France ?",
      answer: "Non. Les plaques au format américain (300×150 mm) ne respectent pas les dimensions réglementaires françaises (520×110 mm) et ne sont donc pas homologuées pour la circulation sur la voie publique. Elles sont destinées à un usage décoratif, collectionneur ou événementiel.",
    },
    {
      question: "Pour quels usages une plaque de style américain est-elle adaptée ?",
      answer: "Les plaques US sont idéales pour décorer votre garage ou votre intérieur, personnaliser l'habitacle d'une voiture américaine, participer à des expositions de véhicules ou des clubs automobiles, ou offrir un cadeau original. Certains propriétaires de muscle cars les utilisent également lors de sorties sur circuit privé.",
    },
    {
      question: "Quelles sont les dimensions d'une plaque US ?",
      answer: "Le format standard américain est 300×150 mm (30×15 cm), utilisé par la quasi-totalité des États américains. Un format plus court de 300×100 mm (30×10 cm) existe également pour certains modèles. Les deux formats sont disponibles dans notre configurateur avec finition aluminium 3D embossé.",
    },
    {
      question: "Puis-je personnaliser le texte et le design d'une plaque US ?",
      answer: "Oui, totalement. Vous saisissez le texte de votre choix (jusqu'à 7 caractères), sélectionnez le fond souhaité (inspiration état américain, couleur unie, drapeau) et ajoutez des éléments graphiques. L'aluminium est embossé en 3D comme les vraies plaques d'État pour un rendu 100 % authentique.",
    },
    {
      question: "Quelle est la différence entre le format 30×15 et le format 30×10 cm ?",
      answer: "Le format 30×15 est le standard US, correspondant aux plaques de la majorité des États (Californie, Texas, New York, etc.). Le format 30×10, plus étroit, est adapté aux espaces réduits ou pour un look plus discret. Les deux sont fabriqués en aluminium embossé 3D avec la même qualité de finition.",
    },
  ],

  'suv': [
    {
      question: "En quoi la plaque SUV/4×4 diffère-t-elle d'une plaque standard ?",
      answer: "La plaque au format 275×200 mm est plus haute (200 mm vs 110 mm) que la plaque standard, ce qui la rend compatible avec les emplacements de plaque spécifiques de certains SUV et 4×4 dont la porte arrière verticale ou les pare-chocs imposent un emplacement de dimensions différentes.",
    },
    {
      question: "Mon SUV peut-il avoir une plaque de format non standard ?",
      answer: "Oui, si votre véhicule est homologué avec un emplacement de plaque au format 275×200 mm (prévu par le constructeur), vous pouvez légalement y apposer une plaque de ce format. Elle doit toujours respecter les normes CE et SIV : fond blanc réfléchissant et caractères normalisés.",
    },
    {
      question: "Les plaques SUV sont-elles résistantes au tout-terrain ?",
      answer: "Oui. Nos plaques SUV sont fabriquées en plexiglass premium anti-abrasion avec fixations renforcées. Elles résistent aux projections de boue, aux UV, aux variations de température extrêmes et aux chocs légers liés à un usage tout-terrain ou en piste forestière.",
    },
    {
      question: "Quelle fixation utiliser pour une plaque SUV ou 4×4 ?",
      answer: "Les plaques SUV s'installent généralement avec 4 vis de fixation standard (diamètre 7 mm). Pour les 4×4 à usage intensif, nous recommandons des vis inox traitement anti-corrosion. Des supports de plaque avec amortisseurs anti-vibration sont disponibles pour les usages tout-terrain réguliers.",
    },
    {
      question: "La plaque SUV est-elle homologuée CE et conforme SIV ?",
      answer: "Oui. Nos plaques SUV sont 100% homologuées CE et conformes au Système d'Immatriculation des Véhicules (SIV) français. Elles portent le marquage CE obligatoire et peuvent être utilisées légalement sur la voie publique dès lors que l'emplacement de plaque du véhicule correspond à ce format.",
    },
  ],

  'cyclo': [
    {
      question: "Quel est le format réglementaire d'une plaque pour cyclomoteur ?",
      answer: "Les cyclomoteurs immatriculés dans le SIV (depuis 2009) utilisent une plaque de 140×120 mm (14×12 cm). Ce format spécifique est distinct des plaques moto (210×130 mm) et auto (520×110 mm). Le fond est blanc réfléchissant avec des caractères noirs de hauteur réglementée.",
    },
    {
      question: "Mon cyclomoteur ancienne génération nécessite-t-il une nouvelle plaque ?",
      answer: "Les cyclomoteurs immatriculés avant 2004 avec une plaque jaune d'origine peuvent la conserver tant qu'il n'y a pas de changement de propriétaire. Lors de toute nouvelle immatriculation ou cession, la plaque SIV blanche au format 140×120 mm devient obligatoire.",
    },
    {
      question: "La plaque cyclomoteur est-elle jaune ou blanche ?",
      answer: "Avant 2004, les cyclomoteurs avaient une plaque jaune caractéristique. Depuis la réforme SIV, toutes les nouvelles immatriculations de cyclomoteurs se font avec une plaque blanche réfléchissante, identique en couleur aux autres véhicules mais au format plus compact 140×120 mm.",
    },
    {
      question: "Un vélo à assistance électrique (VAE) doit-il avoir une plaque ?",
      answer: "Non. Les vélos à assistance électrique (VAE) limités à 25 km/h ne sont pas des véhicules motorisés au sens de la loi française et ne nécessitent ni immatriculation ni plaque. Seuls les speed pedelecs (jusqu'à 45 km/h) sont assimilés à des cyclomoteurs et doivent être immatriculés.",
    },
    {
      question: "Puis-je garder un numéro lié à mon département sur mon cyclomoteur ?",
      answer: "Non. Depuis la réforme SIV, les numéros d'immatriculation ne sont plus liés à un département. Votre cyclomoteur reçoit un numéro alphanumérique à vie (ex : AB-123-CD) qui reste le même quel que soit votre lieu de résidence, aucune obligation de changer lors d'un déménagement.",
    },
  ],

  'little-moto': [
    {
      question: "Les pit bikes et dirt bikes doivent-ils porter une plaque d'immatriculation ?",
      answer: "Pour un usage sur la voie publique, une immatriculation est nécessaire — mais la plupart des pit bikes et dirt bikes ne sont pas homologués pour la route. Sur circuit privé ou lors de compétitions amateurs, une plaque d'identification est souvent exigée par l'organisateur pour identifier les concurrents.",
    },
    {
      question: "Peut-on utiliser un pocket bike sur la voie publique en France ?",
      answer: "Non. Les pocket bikes (mini motos thermiques ou électriques) ne sont pas homologués pour circuler sur la voie publique française. Leur usage est strictement limité aux circuits privés, terrains de karting et propriétés privées. Toute circulation sur voie ouverte est passible de verbalisation.",
    },
    {
      question: "Quel format de plaque pour une mini moto ou pit bike ?",
      answer: "Le format 170×130 mm (17×13 cm) est le plus adapté aux mini motos, pit bikes et pocket bikes. Ce format permet une lisibilité correcte du numéro tout en s'adaptant aux dimensions réduites du cadre. Pour les machines très compactes, le format 100×100 mm est également disponible.",
    },
    {
      question: "Peut-on assurer une mini moto pour un usage sur piste privée ?",
      answer: "Oui. Certains assureurs proposent des formules loisirs motorisés pour la pratique en circuit fermé. Ces assurances couvrent les dommages corporels et matériels lors d'activités sur piste privée, même pour des véhicules non homologués route. Renseignez-vous auprès de votre assureur habituel.",
    },
    {
      question: "Les plaques mini moto résistent-elles aux vibrations et à la boue ?",
      answer: "Oui. Nos plaques mini moto sont fabriquées en plexiglass léger anti-vibration et résistant aux projections de boue, eau et graviers. Ce matériau est idéal pour les usages en piste car il encaisse les petits impacts sans se fissurer et se nettoie facilement.",
    },
  ],

  'enduro': [
    {
      question: "Les motos enduro doivent-elles avoir une plaque d'immatriculation ?",
      answer: "Pour les enduros homologués pour la route (dual sport), la plaque SIV standard 210×130 mm est obligatoire. Pour les motos utilisées uniquement en compétition off-road non homologuée, une plaque d'identification 100×100 mm est généralement exigée lors des événements FFM et FMF.",
    },
    {
      question: "Quel format de plaque pour une moto de cross ou d'enduro de compétition ?",
      answer: "Le format 100×100 mm (10×10 cm) est le standard pour les plaques d'identification des motos de cross et enduro en compétition. Ce format carré s'adapte facilement aux plastiques avant et arrière des machines tout-terrain et permet une lecture du numéro à 8 mètres, conformément à la réglementation FFM.",
    },
    {
      question: "Mon enduro est-il homologué pour rouler sur la route ?",
      answer: "Cela dépend du modèle. Les enduros 'dual sport' (KTM EXC-F, Husqvarna FE avec kit route, Beta RR) peuvent être homologués. Les motocross et enduro purs ne le sont généralement pas. Vérifiez votre carte grise : la mention 'usage route' et la présence des équipements réglementaires (feux, clignotants) confirment l'homologation.",
    },
    {
      question: "Peut-on personnaliser les couleurs d'une plaque enduro de compétition ?",
      answer: "Pour les plaques décoratives de compétition (hors homologation routière), les couleurs sont libres et souvent aux couleurs du sponsor ou du club. Pour les plaques homologuées route sur un enduro dual sport, les règles SIV s'appliquent : fond blanc et caractères noirs obligatoires.",
    },
    {
      question: "Les plaques enduro résistent-elles aux conditions extrêmes du tout-terrain ?",
      answer: "Absolument. Nos plaques enduro sont fabriquées en plexiglass renforcé anti-vibration, traité contre les UV et résistant aux projections de boue, eau et graviers. Elles sont conçues pour supporter les conditions les plus sévères de la pratique off-road sans se décoller ni se fissurer.",
    },
  ],

  'collection': [
    {
      question: "Comment immatriculer un véhicule de collection en France ?",
      answer: "Un véhicule de plus de 30 ans peut être immatriculé 'véhicule de collection' en préfecture ou via un prestataire agrée. Il faut fournir un certificat de conformité ou d'authenticité (club Fiva, FFVE), un contrôle technique allégé de moins de 5 ans et une pièce d'identité. La carte grise mentionnera 'véhicule de collection'.",
    },
    {
      question: "Puis-je conserver l'ancienne plaque d'origine sur mon véhicule de collection ?",
      answer: "Si votre véhicule a conservé sa plaque d'immatriculation d'origine (format pré-SIV), vous pouvez la conserver. En cas de perte ou d'achat sans plaque, il faut demander une nouvelle immatriculation SIV standard ou une plaque reproduction au format collection (460×100 mm ou 275×75 mm), sous réserve que le certificat d'immatriculation le permette.",
    },
    {
      question: "Quelle est la différence entre une plaque collection et une plaque standard ?",
      answer: "La plaque collection au format 460×100 mm est plus étroite (460 mm vs 520 mm) que la plaque auto standard, reproduisant les dimensions historiques des anciennes plaques françaises. Ce format s'adapte aux logements de plaque des véhicules anciens qui n'ont pas été conçus pour les dimensions modernes imposées par le SIV.",
    },
    {
      question: "Un véhicule de collection peut-il circuler librement sur route ?",
      answer: "Oui. Avec une carte grise mention 'véhicule de collection', le véhicule peut circuler sur les routes ouvertes. Restrictions : usage non commercial, non quotidien et contrôle technique allégé tous les 5 ans. Une assurance collection (kilométrage limité, valeur agréée) est fortement recommandée.",
    },
    {
      question: "Quelles conditions pour obtenir le statut 'véhicule de collection' ?",
      answer: "Le véhicule doit avoir plus de 30 ans, être dans son état d'origine ou correctement restauré à l'identique, ne pas être utilisé comme moyen de transport principal ou commercial. Une attestation d'authenticité délivrée par un club affilié à la FFVE (Fédération Française des Véhicules d'Époque) est généralement exigée.",
    },
  ],

  'collection-compact': [
    {
      question: "Quelle différence entre le format collection standard et le format compact ?",
      answer: "Le format standard collection est 460×100 mm, adapté aux voitures anciennes de grand format. Le format compact est 275×75 mm, conçu pour les motos et petits véhicules de collection dont l'emplacement de plaque est trop étroit pour le standard. Les deux offrent la même finition vintage authentique.",
    },
    {
      question: "Pour quels véhicules utiliser le format collection compact ?",
      answer: "Le format compact est idéal pour les motos et scooters anciens (pré-SIV), les petites voitures de collection (Citroën 2CV, Méhari, Renault 4), les side-cars, et les petits véhicules agricoles anciens. Il reproduit fidèlement les dimensions des plaques d'époque de ces véhicules.",
    },
    {
      question: "Le format compact est-il autorisé sur les motos de collection ?",
      answer: "Pour les motos de collection immatriculées avant le SIV avec une plaque d'origine de ce format, une reproduction conforme est acceptée. Pour toute nouvelle immatriculation SIV, la plaque moto standard 210×130 mm s'applique légalement. Consultez votre préfecture pour valider votre situation spécifique.",
    },
    {
      question: "Comment fixer une plaque collection petit format sur une moto ancienne ?",
      answer: "Les plaques compact s'installent avec 2 à 4 vis selon l'emplacement d'origine (diamètre 7 mm standard). Pour les motos anciennes, des supports universels ajustables ou des cadres de plaque vintage sont disponibles. L'utilisation de vis inox est recommandée pour éviter la corrosion sur les machines vintage.",
    },
    {
      question: "Puis-je commander ce format sur une voiture de collection de moins de 30 ans ?",
      answer: "Non. Le format compact collection est réservé aux véhicules ayant un emplacement de plaque historiquement prévu pour ce format. Pour les voitures de moins de 30 ans ou sans emplacement adapté, la plaque standard SIV 520×110 mm est obligatoire, même pour un look vintage.",
    },
  ],
}

export function getCategoryFAQ(slug: string): FAQItem[] {
  return categoryFAQData[slug] ?? []
}
