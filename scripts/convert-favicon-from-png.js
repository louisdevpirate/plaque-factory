const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration des tailles de favicon nécessaires
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 167, name: 'apple-touch-icon-167x167.png' },
  { size: 180, name: 'apple-touch-icon-180x180.png' },
  { size: 144, name: 'msapplication-144x144.png' },
  { size: 150, name: 'mstile-150x150.png' }
];

// Vérifier que ImageMagick est installé
try {
  execSync('which convert', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ ImageMagick n\'est pas installé. Installez-le avec : brew install imagemagick');
  process.exit(1);
}

// Chemins des fichiers
const sourcePng = path.join(__dirname, '..', 'public', 'LABONNEPLAQUE.FR.png');
const faviconDir = path.join(__dirname, '..', 'public', 'favicon');

// Vérifier que le fichier source existe
if (!fs.existsSync(sourcePng)) {
  console.error('❌ Fichier source LABONNEPLAQUE.FR.png introuvable dans public/');
  process.exit(1);
}

// Créer le dossier favicon s'il n'existe pas
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

console.log('🎨 Conversion de votre PNG en kit de favicon complet (sans fond blanc)...');
console.log(`📁 Source : ${sourcePng}`);
console.log(`📁 Destination : ${faviconDir}`);
console.log('');

// Convertir le PNG en PNG pour chaque taille (en préservant la transparence)
faviconSizes.forEach(({ size, name }) => {
  const outputPath = path.join(faviconDir, name);
  
  try {
    console.log(`🔄 Conversion ${size}x${size}px → ${name}...`);
    
    // Commande ImageMagick pour convertir PNG en PNG en préservant la transparence
    const command = `convert "${sourcePng}" -resize ${size}x${size} -background transparent "${outputPath}"`;
    
    execSync(command, { stdio: 'pipe' });
    console.log(`✅ ${name} créé avec succès`);
  } catch (error) {
    console.error(`❌ Erreur lors de la création de ${name}:`, error.message);
  }
});

// Créer le favicon.ico (combinaison de plusieurs tailles)
try {
  console.log('\n🔄 Création du favicon.ico...');
  const icoCommand = `convert "${path.join(faviconDir, 'favicon-16x16.png')}" "${path.join(faviconDir, 'favicon-32x32.png')}" "${path.join(faviconDir, 'favicon-48x48.png')}" "${path.join(faviconDir, 'favicon.ico')}"`;
  execSync(icoCommand, { stdio: 'pipe' });
  console.log('✅ favicon.ico créé avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la création du favicon.ico:', error.message);
}

// Créer le site.webmanifest
const webmanifest = {
  name: "La Bonne Plaque",
  short_name: "La Bonne Plaque",
  description: "Votre spécialiste des plaques d'immatriculation personnalisées",
  start_url: "/",
  display: "standalone",
  background_color: "#000000",
  theme_color: "#000000",
  icons: [
    {
      src: "/favicon/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/favicon/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

fs.writeFileSync(
  path.join(faviconDir, 'site.webmanifest'),
  JSON.stringify(webmanifest, null, 2)
);

// Créer le browserconfig.xml pour Windows
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/favicon/mstile-150x150.png"/>
            <TileColor>#000000</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

fs.writeFileSync(path.join(faviconDir, 'browserconfig.xml'), browserconfig);

console.log('\n🎉 Kit de favicon créé avec succès (sans fond blanc) !');
console.log(`📁 Dossier : ${faviconDir}`);
console.log(`📊 ${faviconSizes.length} fichiers PNG générés`);
console.log('📄 Fichiers de configuration créés');
console.log('');
console.log('✨ Avantages de cette version :');
console.log('   - ✅ Aucun fond blanc');
console.log('   - ✅ Transparence préservée');
console.log('   - ✅ Qualité optimale');
console.log('   - ✅ Compatible tous navigateurs');
console.log('');
console.log('🔧 Prochaines étapes :');
console.log('1. Vérifiez que vos favicons n\'ont plus de fond blanc');
console.log('2. Testez sur différents navigateurs et appareils');
console.log('3. Vérifiez que les icônes s\'affichent correctement');
console.log('');
console.log('📋 Fichiers créés :');
const files = fs.readdirSync(faviconDir);
files.forEach(file => {
  const stats = fs.statSync(path.join(faviconDir, file));
  const size = (stats.size / 1024).toFixed(1);
  console.log(`   - ${file} (${size} KB)`);
});
