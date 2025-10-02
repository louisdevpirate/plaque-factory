import { Category } from '@/types/category'

export const categories: Category[] = [
  {
    slug: 'plaques-personnalisees',
    title: 'Plaques personnalisées',
    description: 'Créez votre plaque d\'immatriculation personnalisée avec notre configurateur intelligent.',
    image: '/images/templates/plaque-generale.webp',
    imagePlaque: '/images/social-proof.png',
    code: '361',
    features: ['100% Homologuées CE', 'Livraison express 24h', 'Configurateur en ligne'],
    vehicleTypes: ['Tous véhicules', 'Tous styles', 'Toutes tailles'],
    dimensions: '52×11 cm',
    icon: '🎨'
  },
  {
    slug: 'moto',
    title: 'Plaques moto personnalisées',
    description: 'Commandez votre plaque moto homologuée en quelques clics.',
    image: '/images/templates/moto.webp',
    imagePlaque: '/images/templates/header/moto.png',
    code: '764',
    features: ['Homologuées CE', 'Résistantes aux intempéries', 'Production en 24h'],
    vehicleTypes: ['Motos', 'Scooters', 'Vélomoteurs'],
    dimensions: '21×13 cm',
    icon: '🏍️'
  },
  {
    slug: 'us',
    title: 'Plaques US pour véhicules américains',
    description: 'Des plaques à l\'américaine, au format 30×15 ou 30×10 cm.',
    image: '/images/templates/us.webp',
    imagePlaque: '/images/templates/header/us.png',
    code: '1275',
    features: ['Style américain authentique', 'Aluminium 3D', 'Fixation renforcée'],
    vehicleTypes: ['Pick-up', 'Mustang', 'Camaro'],
    dimensions: '30×15 cm',
    icon: '🚗'
  },
  {
    slug: 'suv',
    title: 'Plaques SUV et 4x4',
    description: 'Des plaques robustes pour SUV, 4×4 et véhicules tout-terrain.',
    image: '/images/templates/suv.webp',
    imagePlaque: '/images/templates/header/suv.png',
    code: '1602',
    features: ['Anti-abrasion extrême', 'Coches de fixation', 'Livraison express'],
    vehicleTypes: ['SUV', '4×4', 'Tout-terrain'],
    dimensions: '27,5×20 cm',
    icon: '🚙'
  },
  {
    slug: 'cyclo',
    title: 'Plaques cyclomoteur',
    description: 'Le bon format pour les mobylettes et cyclomoteurs anciens ou récents.',
    image: '/images/templates/cyclo.webp',
    imagePlaque: '/images/templates/header/14x12.png',
    code: '1406',
    features: ['Format compact', 'Résistance optimisée', 'Finition haute qualité'],
    vehicleTypes: ['Cyclomoteurs', 'Mobylettes', 'Vélos électriques'],
    dimensions: '14×12 cm',
    icon: '🛵'
  },
  {
    slug: 'little-moto',
    title: 'Plaques mini moto',
    description: 'Des plaques compactes pour pit bikes, dirt bikes ou pocket bikes.',
    image: '/images/templates/little-moto.webp',
    imagePlaque: '/images/templates/header/17x13.png',
    code: '1404',
    features: ['Design compact', 'Fixation simplifiée', 'Légèreté maximale'],
    vehicleTypes: ['Pit bike', 'Dirt bike', 'Pocket bike'],
    dimensions: '17×13 cm',
    icon: '🏍️'
  },
  {
    slug: 'enduro',
    title: 'Plaques enduro et cross',
    description: 'Des plaques stylées pour vos motos tout-terrain, cross ou enduro.',
    image: '/images/templates/motocross.webp',
    imagePlaque: '/images/templates/header/10x10.png',
    code: '1534',
    features: ['Résistance extrême', 'Style enduro', 'Anti-vibration'],
    vehicleTypes: ['Enduro', 'Cross', 'Trial'],
    dimensions: '10×10 cm',
    icon: '🏔️'
  },
  {
    slug: 'collection',
    title: 'Plaques collection anciennes',
    description: 'Donnez du cachet à vos véhicules de collection avec des plaques rétro.',
    image: '/images/templates/collection.webp',
    imagePlaque: '/images/templates/header/collection.png',
    code: '1182',
    features: ['Style vintage authentique', 'Finition premium', 'Nostalgie garantie'],
    vehicleTypes: ['Voitures anciennes', 'Cars classiques', 'Véhicules vintage'],
    dimensions: '45×10 cm',
    icon: '🕰️'
  },
  {
    slug: 'collection-compact',
    title: 'Plaques collection petit format',
    description: 'Le style vintage en version compacte pour les petites voitures anciennes.',
    image: '/images/templates/moto-collection2.webp',
    imagePlaque: '/images/templates/header/moto-collection.png',
    code: '1539',
    features: ['Vintage compact', 'Authenticité préservée', 'Compatibilité assurée'],
    vehicleTypes: ['Petites voitures', 'Motos anciennes', 'Véhicules de collection'],
    dimensions: '27,5×7,5 cm',
    icon: '📱'
  }
]