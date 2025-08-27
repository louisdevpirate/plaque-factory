const fs = require('fs');
const path = require('path');

console.log('🧪 Test final du kit de favicon - La Bonne Plaque');
console.log('=' .repeat(50));
console.log('');

// Vérifier la structure des fichiers
const faviconDir = path.join(__dirname, '..', 'public', 'favicon');
const layoutFile = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');

console.log('📁 Vérification de la structure des fichiers...');

// Vérifier que le dossier favicon existe
if (!fs.existsSync(faviconDir)) {
  console.error('❌ Dossier favicon introuvable');
  process.exit(1);
}

// Vérifier que le layout.tsx existe
if (!fs.existsSync(layoutFile)) {
  console.error('❌ Fichier layout.tsx introuvable');
  process.exit(1);
}

console.log('✅ Dossier favicon trouvé');
console.log('✅ Fichier layout.tsx trouvé');

// Compter les fichiers dans le dossier favicon
const faviconFiles = fs.readdirSync(faviconDir);
const pngFiles = faviconFiles.filter(file => file.endsWith('.png'));
const configFiles = faviconFiles.filter(file => !file.endsWith('.png'));

console.log(`📊 Total des fichiers : ${faviconFiles.length}`);
console.log(`🖼️  Fichiers PNG : ${pngFiles.length}`);
console.log(`⚙️  Fichiers de config : ${configFiles.length}`);

// Vérifier les fichiers essentiels
const essentialFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'site.webmanifest'
];

console.log('\n🔍 Vérification des fichiers essentiels...');
essentialFiles.forEach(file => {
  if (faviconFiles.includes(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} manquant`);
  }
});

// Vérifier que le layout.tsx contient les bons liens
console.log('\n🔍 Vérification du layout.tsx...');
const layoutContent = fs.readFileSync(layoutFile, 'utf8');

const requiredLinks = [
  '/favicon/favicon.ico',
  '/favicon/favicon-16x16.png',
  '/favicon/favicon-32x32.png',
  '/favicon/apple-touch-icon.png',
  '/favicon/android-chrome-192x192.png',
  '/favicon/site.webmanifest'
];

let linksFound = 0;
requiredLinks.forEach(link => {
  if (layoutContent.includes(link)) {
    console.log(`✅ Lien trouvé : ${link}`);
    linksFound++;
  } else {
    console.log(`❌ Lien manquant : ${link}`);
  }
});

console.log('\n📊 Résumé de la vérification :');
console.log(`   - Fichiers favicon : ${faviconFiles.length}/18`);
console.log(`   - Fichiers essentiels : ${essentialFiles.filter(f => faviconFiles.includes(f)).length}/${essentialFiles.length}`);
console.log(`   - Liens dans layout : ${linksFound}/${requiredLinks.length}`);

if (linksFound === requiredLinks.length && faviconFiles.length >= 18) {
  console.log('\n🎉 Tous les tests sont passés avec succès !');
  console.log('✨ Votre kit de favicon est parfaitement configuré');
  console.log('');
  console.log('🚀 Prochaines étapes :');
  console.log('1. Ouvrez votre navigateur sur http://localhost:3001');
  console.log('2. Vérifiez que le favicon s\'affiche sans fond blanc');
  console.log('3. Testez sur mobile en ajoutant le site à l\'écran d\'accueil');
  console.log('4. Vérifiez que l\'icône s\'affiche dans les favoris');
} else {
  console.log('\n⚠️  Certains tests ont échoué');
  console.log('🔧 Vérifiez la configuration et relancez les scripts');
}

console.log('\n📱 Page de test disponible sur : /favicon-test');
console.log('📚 Documentation dans : public/favicon/README.md');
