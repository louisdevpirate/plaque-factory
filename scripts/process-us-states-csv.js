#!/usr/bin/env node

/**
 * Script pour traiter les données CSV des états US et générer automatiquement
 * la configuration des catégories avec toutes les variations
 */

const fs = require('fs');
const path = require('path');

// Lire le fichier CSV
const csvPath = path.join(__dirname, '..', 'Feuille de calcul sans titre - Feuille 1 (1).csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parser le CSV
const lines = csvContent.split('\n').filter(line => line.trim());
const headers = lines[0].split(',');
const data = lines.slice(1).map(line => {
  const values = line.split(',');
  return {
    etat: values[0]?.trim(),
    code: values[1]?.trim()
  };
}).filter(item => item.etat && item.code);

console.log(`📊 ${data.length} entrées trouvées dans le CSV`);

// Grouper par état principal
const statesMap = new Map();

data.forEach(item => {
  const etatName = item.etat;
  const code = item.code;
  
  // Extraire le nom de l'état principal (sans les numéros et variations)
  let mainState = etatName
    .replace(/\s+\d+$/, '') // Enlever les numéros à la fin
    .replace(/\s+(North|South|Central|Beach)$/, '') // Enlever les suffixes géographiques
    .trim();
  
  // Cas spéciaux
  if (mainState.includes('California')) mainState = 'California';
  if (mainState.includes('New York')) mainState = 'New York';
  if (mainState.includes('North Dakota')) mainState = 'North Dakota';
  if (mainState.includes('South Dakota')) mainState = 'South Dakota';
  if (mainState.includes('New Mexico')) mainState = 'New Mexico';
  if (mainState.includes('New Hampshire')) mainState = 'New Hampshire';
  if (mainState.includes('North Carolina')) mainState = 'North Carolina';
  if (mainState.includes('West Virginia')) mainState = 'West Virginia';
  if (mainState.includes('Washington DC')) mainState = 'Washington DC';
  if (mainState.includes('Floride')) mainState = 'Florida';
  
  if (!statesMap.has(mainState)) {
    statesMap.set(mainState, []);
  }
  
  statesMap.get(mainState).push({
    name: etatName,
    code: code,
    slug: generateSlug(etatName)
  });
});

console.log(`🗺️ ${statesMap.size} états principaux identifiés`);

// Fonction pour générer un slug
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Générer la configuration TypeScript
const subcategories = [];

statesMap.forEach((variations, mainState) => {
  // Prendre la première variation comme principale
  const primary = variations[0];
  
  subcategories.push({
    slug: generateSlug(mainState),
    title: mainState,
    code: primary.code,
    image: `/images/templates/us-states/${generateSlug(mainState)}.webp`,
    description: `Plaque ${mainState} authentique`,
    variations: variations.length > 1 ? variations.slice(1).map(v => ({
      name: v.name,
      code: v.code,
      slug: v.slug
    })) : undefined
  });
});

// Trier par nom d'état
subcategories.sort((a, b) => a.title.localeCompare(b.title));

// Générer le contenu TypeScript
const tsContent = `import { Category } from '@/types/category'

export const categories: Category[] = [
  {
    slug: 'plaques-personnalisees',
    title: 'Plaques personnalisées',
    description: 'Créez votre plaque d\\'immatriculation personnalisée avec notre configurateur intelligent.',
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
    description: 'Des plaques à l\\'américaine, au format 30×15 ou 30×10 cm.',
    image: '/images/templates/us.webp',
    imagePlaque: '/images/templates/header/us.png',
    code: '1148', // US NEUTRE comme code principal
    features: ['Style américain authentique', 'Aluminium 3D', 'Fixation renforcée'],
    vehicleTypes: ['Pick-up', 'Mustang', 'Camaro'],
    dimensions: '30×15 cm',
    icon: '🚗',
    subcategories: [
${subcategories.map(state => `      {
        slug: '${state.slug}',
        title: '${state.title}',
        code: '${state.code}',
        image: '${state.image}',
        description: '${state.description}'${state.variations ? `,
        variations: [
${state.variations.map(v => `          {
            name: '${v.name}',
            code: '${v.code}',
            slug: '${v.slug}'
          }`).join(',\n')}
        ]` : ''}
      }`).join(',\n')}
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
`;

// Écrire le fichier
const outputPath = path.join(__dirname, '../src/data/categoryConfig.ts');
fs.writeFileSync(outputPath, tsContent);

console.log('✅ Fichier categoryConfig.ts généré avec succès !');
console.log(`📊 ${subcategories.length} états US intégrés`);
console.log(`🔄 ${data.length} variations totales gérées`);

// Créer la structure d'images
const imagesDir = path.join(__dirname, '../public/images/templates/us-states');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Générer un fichier README pour les images
const imagesReadme = `# Images des États US

Ce dossier contient les images des plaques d'immatriculation pour chaque état américain.

## États disponibles (${subcategories.length}) :

${subcategories.map(state => `- \`${state.slug}.webp\` - ${state.title}`).join('\n')}

## Format recommandé :
- Format : WebP (optimisé pour le web)
- Dimensions : 300x200px minimum
- Qualité : Haute résolution pour un bon rendu

## Variations disponibles :
${subcategories.filter(s => s.variations).map(state => `
### ${state.title} :
${state.variations.map(v => `- ${v.name} (Code: ${v.code})`).join('\n')}
`).join('\n')}

## Remplacement :
Remplacez ces fichiers par les vraies images des plaques d'immatriculation de chaque état.
`;

fs.writeFileSync(path.join(imagesDir, 'README.md'), imagesReadme);

console.log('📁 Structure d\'images créée dans public/images/templates/us-states/');
console.log('📝 README généré avec la liste complète des états');
