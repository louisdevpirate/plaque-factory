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
    code: '1148', // US NEUTRE comme code principal
    features: ['Style américain authentique', 'Aluminium 3D', 'Fixation renforcée'],
    vehicleTypes: ['Pick-up', 'Mustang', 'Camaro'],
    dimensions: '30×15 cm',
    icon: '🚗',
    subcategories: [
      {
        slug: 'alabama',
        title: 'Alabama',
        code: '1303',
        image: '/images/templates/us-states/alabama.webp',
        description: 'Plaque Alabama authentique',
        variations: [
          {
            name: 'Alabama',
            code: '1149',
            slug: 'alabama'
          }
        ]
      },
      {
        slug: 'alaska',
        title: 'Alaska',
        code: '1151',
        image: '/images/templates/us-states/alaska.webp',
        description: 'Plaque Alaska authentique',
        variations: [
          {
            name: 'Alaska',
            code: '1150',
            slug: 'alaska'
          }
        ]
      },
      {
        slug: 'alaska-the-last-frontier',
        title: 'Alaska the Last Frontier',
        code: '1305',
        image: '/images/templates/us-states/alaska-the-last-frontier.webp',
        description: 'Plaque Alaska the Last Frontier authentique'
      },
      {
        slug: 'arizona',
        title: 'Arizona',
        code: '1152',
        image: '/images/templates/us-states/arizona.webp',
        description: 'Plaque Arizona authentique'
      },
      {
        slug: 'arkansas',
        title: 'Arkansas',
        code: '1252',
        image: '/images/templates/us-states/arkansas.webp',
        description: 'Plaque Arkansas authentique'
      },
      {
        slug: 'california',
        title: 'California',
        code: '1155',
        image: '/images/templates/us-states/california.webp',
        description: 'Plaque California authentique',
        variations: [
          {
            name: 'California 2',
            code: '1411',
            slug: 'california-2'
          },
          {
            name: 'California 3',
            code: '1153',
            slug: 'california-3'
          },
          {
            name: 'California 4',
            code: '1154',
            slug: 'california-4'
          },
          {
            name: 'California 5',
            code: '1146',
            slug: 'california-5'
          },
          {
            name: 'California 6',
            code: '1147',
            slug: 'california-6'
          },
          {
            name: 'North California',
            code: '1327',
            slug: 'north-california'
          },
          {
            name: 'South California',
            code: '1335',
            slug: 'south-california'
          },
          {
            name: 'South California 2',
            code: '1281',
            slug: 'south-california-2'
          }
        ]
      },
      {
        slug: 'colorado',
        title: 'Colorado',
        code: '1253',
        image: '/images/templates/us-states/colorado.webp',
        description: 'Plaque Colorado authentique'
      },
      {
        slug: 'connecticut',
        title: 'Connecticut',
        code: '1157',
        image: '/images/templates/us-states/connecticut.webp',
        description: 'Plaque Connecticut authentique'
      },
      {
        slug: 'delaware',
        title: 'Delaware',
        code: '1254',
        image: '/images/templates/us-states/delaware.webp',
        description: 'Plaque Delaware authentique'
      },
      {
        slug: 'florida',
        title: 'Florida',
        code: '1158',
        image: '/images/templates/us-states/florida.webp',
        description: 'Plaque Florida authentique',
        variations: [
          {
            name: 'Florida 2',
            code: '1159',
            slug: 'florida-2'
          },
          {
            name: 'Floride',
            code: '1270',
            slug: 'floride'
          }
        ]
      },
      {
        slug: 'georgia',
        title: 'Georgia',
        code: '1160',
        image: '/images/templates/us-states/georgia.webp',
        description: 'Plaque Georgia authentique',
        variations: [
          {
            name: 'Georgia 2',
            code: '1307',
            slug: 'georgia-2'
          },
          {
            name: 'Georgia 3',
            code: '1308',
            slug: 'georgia-3'
          },
          {
            name: 'Georgia 4',
            code: '1255',
            slug: 'georgia-4'
          }
        ]
      },
      {
        slug: 'hawai',
        title: 'Hawai',
        code: '1161',
        image: '/images/templates/us-states/hawai.webp',
        description: 'Plaque Hawai authentique',
        variations: [
          {
            name: 'Hawai 2',
            code: '1162',
            slug: 'hawai-2'
          }
        ]
      },
      {
        slug: 'idaho',
        title: 'Idaho',
        code: '1256',
        image: '/images/templates/us-states/idaho.webp',
        description: 'Plaque Idaho authentique'
      },
      {
        slug: 'illinois',
        title: 'Illinois',
        code: '1309',
        image: '/images/templates/us-states/illinois.webp',
        description: 'Plaque Illinois authentique',
        variations: [
          {
            name: 'Illinois 2',
            code: '1163',
            slug: 'illinois-2'
          }
        ]
      },
      {
        slug: 'indiana',
        title: 'Indiana',
        code: '1310',
        image: '/images/templates/us-states/indiana.webp',
        description: 'Plaque Indiana authentique',
        variations: [
          {
            name: 'Indiana 2',
            code: '1311',
            slug: 'indiana-2'
          },
          {
            name: 'Indiana 3',
            code: '1257',
            slug: 'indiana-3'
          }
        ]
      },
      {
        slug: 'iowa',
        title: 'Iowa',
        code: '1312',
        image: '/images/templates/us-states/iowa.webp',
        description: 'Plaque Iowa authentique',
        variations: [
          {
            name: 'Iowa 2',
            code: '1313',
            slug: 'iowa-2'
          },
          {
            name: 'Iowa 3',
            code: '1258',
            slug: 'iowa-3'
          }
        ]
      },
      {
        slug: 'kansas',
        title: 'Kansas',
        code: '1314',
        image: '/images/templates/us-states/kansas.webp',
        description: 'Plaque Kansas authentique',
        variations: [
          {
            name: 'Kansas 2',
            code: '1259',
            slug: 'kansas-2'
          }
        ]
      },
      {
        slug: 'kentucky',
        title: 'Kentucky',
        code: '1315',
        image: '/images/templates/us-states/kentucky.webp',
        description: 'Plaque Kentucky authentique'
      },
      {
        slug: 'louisiana',
        title: 'Louisiana',
        code: '1316',
        image: '/images/templates/us-states/louisiana.webp',
        description: 'Plaque Louisiana authentique',
        variations: [
          {
            name: 'Louisiana 2',
            code: '1261',
            slug: 'louisiana-2'
          }
        ]
      },
      {
        slug: 'maine',
        title: 'Maine',
        code: '1317',
        image: '/images/templates/us-states/maine.webp',
        description: 'Plaque Maine authentique',
        variations: [
          {
            name: 'Maine 2',
            code: '1318',
            slug: 'maine-2'
          },
          {
            name: 'Maine 3',
            code: '1262',
            slug: 'maine-3'
          }
        ]
      },
      {
        slug: 'maryland',
        title: 'Maryland',
        code: '1263',
        image: '/images/templates/us-states/maryland.webp',
        description: 'Plaque Maryland authentique',
        variations: [
          {
            name: 'Maryland 2',
            code: '1319',
            slug: 'maryland-2'
          },
          {
            name: 'Maryland 3',
            code: '1164',
            slug: 'maryland-3'
          }
        ]
      },
      {
        slug: 'massachusetts',
        title: 'Massachusetts',
        code: '1320',
        image: '/images/templates/us-states/massachusetts.webp',
        description: 'Plaque Massachusetts authentique',
        variations: [
          {
            name: 'Massachusetts 2',
            code: '1264',
            slug: 'massachusetts-2'
          }
        ]
      },
      {
        slug: 'miami',
        title: 'Miami',
        code: '1165',
        image: '/images/templates/us-states/miami.webp',
        description: 'Plaque Miami authentique'
      },
      {
        slug: 'michigan',
        title: 'Michigan',
        code: '1321',
        image: '/images/templates/us-states/michigan.webp',
        description: 'Plaque Michigan authentique',
        variations: [
          {
            name: 'Michigan 2',
            code: '1265',
            slug: 'michigan-2'
          }
        ]
      },
      {
        slug: 'minnesota',
        title: 'Minnesota',
        code: '1266',
        image: '/images/templates/us-states/minnesota.webp',
        description: 'Plaque Minnesota authentique',
        variations: [
          {
            name: 'Minnesota 2',
            code: '1322',
            slug: 'minnesota-2'
          },
          {
            name: 'Minnesota 3',
            code: '1166',
            slug: 'minnesota-3'
          }
        ]
      },
      {
        slug: 'mississippi',
        title: 'Mississippi',
        code: '1267',
        image: '/images/templates/us-states/mississippi.webp',
        description: 'Plaque Mississippi authentique'
      },
      {
        slug: 'missouri',
        title: 'Missouri',
        code: '1268',
        image: '/images/templates/us-states/missouri.webp',
        description: 'Plaque Missouri authentique'
      },
      {
        slug: 'montana',
        title: 'Montana',
        code: '1269',
        image: '/images/templates/us-states/montana.webp',
        description: 'Plaque Montana authentique',
        variations: [
          {
            name: 'Montana 2',
            code: '1323',
            slug: 'montana-2'
          },
          {
            name: 'Montana 3',
            code: '1167',
            slug: 'montana-3'
          }
        ]
      },
      {
        slug: 'nebraska',
        title: 'Nebraska',
        code: '1324',
        image: '/images/templates/us-states/nebraska.webp',
        description: 'Plaque Nebraska authentique',
        variations: [
          {
            name: 'Nebraska 2',
            code: '1271',
            slug: 'nebraska-2'
          }
        ]
      },
      {
        slug: 'nevada',
        title: 'Nevada',
        code: '1169',
        image: '/images/templates/us-states/nevada.webp',
        description: 'Plaque Nevada authentique',
        variations: [
          {
            name: 'Nevada 2',
            code: '1170',
            slug: 'nevada-2'
          },
          {
            name: 'Nevada 3',
            code: '1171',
            slug: 'nevada-3'
          },
          {
            name: 'Nevada 4',
            code: '1168',
            slug: 'nevada-4'
          }
        ]
      },
      {
        slug: 'new-hampshire',
        title: 'New Hampshire',
        code: '1326',
        image: '/images/templates/us-states/new-hampshire.webp',
        description: 'Plaque New Hampshire authentique',
        variations: [
          {
            name: 'New Hampshire 2',
            code: '1272',
            slug: 'new-hampshire-2'
          }
        ]
      },
      {
        slug: 'new-jersey',
        title: 'New Jersey',
        code: '1273',
        image: '/images/templates/us-states/new-jersey.webp',
        description: 'Plaque New Jersey authentique'
      },
      {
        slug: 'new-mexico',
        title: 'New Mexico',
        code: '1325',
        image: '/images/templates/us-states/new-mexico.webp',
        description: 'Plaque New Mexico authentique',
        variations: [
          {
            name: 'New Mexico 2',
            code: '1276',
            slug: 'new-mexico-2'
          }
        ]
      },
      {
        slug: 'new-york',
        title: 'New York',
        code: '1173',
        image: '/images/templates/us-states/new-york.webp',
        description: 'Plaque New York authentique',
        variations: [
          {
            name: 'New York 2',
            code: '1174',
            slug: 'new-york-2'
          },
          {
            name: 'New York 3',
            code: '1274',
            slug: 'new-york-3'
          },
          {
            name: 'New York 4',
            code: '1172',
            slug: 'new-york-4'
          },
          {
            name: 'New York Central Park',
            code: '1156',
            slug: 'new-york-central-park'
          }
        ]
      },
      {
        slug: 'north-carolina',
        title: 'North Carolina',
        code: '1175',
        image: '/images/templates/us-states/north-carolina.webp',
        description: 'Plaque North Carolina authentique'
      },
      {
        slug: 'north-dakota',
        title: 'North Dakota',
        code: '1329',
        image: '/images/templates/us-states/north-dakota.webp',
        description: 'Plaque North Dakota authentique',
        variations: [
          {
            name: 'North Dakota 2',
            code: '1275',
            slug: 'north-dakota-2'
          }
        ]
      },
      {
        slug: 'ohio',
        title: 'Ohio',
        code: '1330',
        image: '/images/templates/us-states/ohio.webp',
        description: 'Plaque Ohio authentique',
        variations: [
          {
            name: 'Ohio 2',
            code: '1277',
            slug: 'ohio-2'
          }
        ]
      },
      {
        slug: 'oklahoma',
        title: 'Oklahoma',
        code: '1331',
        image: '/images/templates/us-states/oklahoma.webp',
        description: 'Plaque Oklahoma authentique'
      },
      {
        slug: 'ontario',
        title: 'Ontario',
        code: '1176',
        image: '/images/templates/us-states/ontario.webp',
        description: 'Plaque Ontario authentique'
      },
      {
        slug: 'oregon',
        title: 'Oregon',
        code: '1278',
        image: '/images/templates/us-states/oregon.webp',
        description: 'Plaque Oregon authentique',
        variations: [
          {
            name: 'Oregon 2',
            code: '1177',
            slug: 'oregon-2'
          }
        ]
      },
      {
        slug: 'pennsylvania',
        title: 'Pennsylvania',
        code: '1332',
        image: '/images/templates/us-states/pennsylvania.webp',
        description: 'Plaque Pennsylvania authentique',
        variations: [
          {
            name: 'Pennsylvania 2',
            code: '1279',
            slug: 'pennsylvania-2'
          }
        ]
      },
      {
        slug: 'qubec',
        title: 'Québec',
        code: '1333',
        image: '/images/templates/us-states/qubec.webp',
        description: 'Plaque Québec authentique',
        variations: [
          {
            name: 'Québec 2',
            code: '1334',
            slug: 'qubec-2'
          }
        ]
      },
      {
        slug: 'rhode-island',
        title: 'Rhode Island',
        code: '1280',
        image: '/images/templates/us-states/rhode-island.webp',
        description: 'Plaque Rhode Island authentique'
      },
      {
        slug: 'south-dakota',
        title: 'South Dakota',
        code: '1282',
        image: '/images/templates/us-states/south-dakota.webp',
        description: 'Plaque South Dakota authentique',
        variations: [
          {
            name: 'South Dakota 2',
            code: '1306',
            slug: 'south-dakota-2'
          }
        ]
      },
      {
        slug: 'sweet-home-alabama',
        title: 'Sweet Home Alabama',
        code: '1304',
        image: '/images/templates/us-states/sweet-home-alabama.webp',
        description: 'Plaque Sweet Home Alabama authentique'
      },
      {
        slug: 'tennessee',
        title: 'Tennessee',
        code: '1336',
        image: '/images/templates/us-states/tennessee.webp',
        description: 'Plaque Tennessee authentique',
        variations: [
          {
            name: 'Tennessee 2',
            code: '1283',
            slug: 'tennessee-2'
          }
        ]
      },
      {
        slug: 'texas',
        title: 'Texas',
        code: '1179',
        image: '/images/templates/us-states/texas.webp',
        description: 'Plaque Texas authentique',
        variations: [
          {
            name: 'Texas 2',
            code: '1284',
            slug: 'texas-2'
          },
          {
            name: 'Texas 3',
            code: '1178',
            slug: 'texas-3'
          }
        ]
      },
      {
        slug: 'us-neutre',
        title: 'US NEUTRE',
        code: '1148',
        image: '/images/templates/us-states/us-neutre.webp',
        description: 'Plaque US NEUTRE authentique'
      },
      {
        slug: 'utah',
        title: 'Utah',
        code: '1285',
        image: '/images/templates/us-states/utah.webp',
        description: 'Plaque Utah authentique'
      },
      {
        slug: 'vermont',
        title: 'Vermont',
        code: '1286',
        image: '/images/templates/us-states/vermont.webp',
        description: 'Plaque Vermont authentique'
      },
      {
        slug: 'virginia',
        title: 'Virginia',
        code: '1337',
        image: '/images/templates/us-states/virginia.webp',
        description: 'Plaque Virginia authentique',
        variations: [
          {
            name: 'Virginia 2',
            code: '1287',
            slug: 'virginia-2'
          }
        ]
      },
      {
        slug: 'washington-dc',
        title: 'Washington DC',
        code: '1289',
        image: '/images/templates/us-states/washington-dc.webp',
        description: 'Plaque Washington DC authentique',
        variations: [
          {
            name: 'Washington DC 2',
            code: '1338',
            slug: 'washington-dc-2'
          },
          {
            name: 'Washington DC 3',
            code: '1288',
            slug: 'washington-dc-3'
          }
        ]
      },
      {
        slug: 'west-virginia',
        title: 'West Virginia',
        code: '1339',
        image: '/images/templates/us-states/west-virginia.webp',
        description: 'Plaque West Virginia authentique',
        variations: [
          {
            name: 'West Virginia 2',
            code: '1290',
            slug: 'west-virginia-2'
          }
        ]
      },
      {
        slug: 'wisconsin',
        title: 'Wisconsin',
        code: '1291',
        image: '/images/templates/us-states/wisconsin.webp',
        description: 'Plaque Wisconsin authentique'
      },
      {
        slug: 'wyoming',
        title: 'Wyoming',
        code: '1293',
        image: '/images/templates/us-states/wyoming.webp',
        description: 'Plaque Wyoming authentique',
        variations: [
          {
            name: 'Wyoming 2',
            code: '1292',
            slug: 'wyoming-2'
          }
        ]
      }
    ]
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
