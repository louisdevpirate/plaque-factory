#!/usr/bin/env node

/**
 * Script pour créer des images placeholder pour les états US
 * Ces images seront remplacées par les vraies images des plaques d'états
 */

const fs = require('fs');
const path = require('path');

const states = [
  { slug: 'california', name: 'Californie', color: '#1f2937' },
  { slug: 'texas', name: 'Texas', color: '#dc2626' },
  { slug: 'florida', name: 'Floride', color: '#059669' },
  { slug: 'new-york', name: 'New York', color: '#7c3aed' },
  { slug: 'nevada', name: 'Nevada', color: '#ea580c' },
  { slug: 'arizona', name: 'Arizona', color: '#dc2626' }
];

const outputDir = path.join(__dirname, '../public/images/templates/us-states');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Générer un fichier README pour expliquer le dossier
const readmeContent = `# Images des États US

Ce dossier contient les images des plaques d'immatriculation pour chaque état américain.

## Structure attendue :
- \`california.webp\` - Plaque Californie
- \`texas.webp\` - Plaque Texas  
- \`florida.webp\` - Plaque Floride
- \`new-york.webp\` - Plaque New York
- \`nevada.webp\` - Plaque Nevada
- \`arizona.webp\` - Plaque Arizona

## Format recommandé :
- Format : WebP (optimisé pour le web)
- Dimensions : 300x200px minimum
- Qualité : Haute résolution pour un bon rendu

## Remplacement :
Remplacez ces fichiers par les vraies images des plaques d'immatriculation de chaque état.
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), readmeContent);

console.log('✅ Dossier us-states créé avec succès !');
console.log('📁 Emplacement : public/images/templates/us-states/');
console.log('📝 Ajoutez vos images de plaques d\'états dans ce dossier');
console.log('🎯 Formats attendus : california.webp, texas.webp, etc.');

