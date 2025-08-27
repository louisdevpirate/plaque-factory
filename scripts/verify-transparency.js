const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const faviconDir = path.join(__dirname, '..', 'public', 'favicon');

console.log('🔍 Vérification de la transparence des favicons...');
console.log(`📁 Dossier : ${faviconDir}`);
console.log('');

// Récupérer tous les fichiers PNG
const pngFiles = fs.readdirSync(faviconDir)
  .filter(file => file.endsWith('.png'))
  .sort();

let transparentCount = 0;
let totalCount = 0;

pngFiles.forEach(filename => {
  const filePath = path.join(faviconDir, filename);
  
  try {
    // Utiliser la commande file pour vérifier le type d'image
    const output = execSync(`file "${filePath}"`, { encoding: 'utf8' });
    totalCount++;
    
    if (output.includes('alpha') || output.includes('RGBA')) {
      console.log(`✅ ${filename} - Transparent`);
      transparentCount++;
    } else {
      console.log(`❌ ${filename} - Pas transparent`);
    }
  } catch (error) {
    console.error(`⚠️  Erreur lors de la vérification de ${filename}:`, error.message);
  }
});

console.log('');
console.log('📊 Résultats :');
console.log(`   - Total des fichiers PNG : ${totalCount}`);
console.log(`   - Fichiers transparents : ${transparentCount}`);
console.log(`   - Fichiers non transparents : ${totalCount - transparentCount}`);

if (transparentCount === totalCount) {
  console.log('\n🎉 Tous vos favicons sont transparents !');
  console.log('✨ Aucun fond blanc ne sera visible');
} else {
  console.log('\n⚠️  Certains favicons ne sont pas transparents');
  console.log('🔧 Vérifiez la source PNG ou le processus de conversion');
}

console.log('');
console.log('🚀 Testez maintenant votre site pour voir le résultat !');
console.log('🌐 Votre site devrait être accessible sur : http://localhost:3001');
