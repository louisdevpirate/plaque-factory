const fs = require('fs');
const path = require('path');

// Fichiers favicon à supprimer (anciens)
const filesToRemove = [
  'favicon.ico',
  'favicon-96x96.png',
  'apple-touch-icon.png',
  'web-app-manifest-192x192.png',
  'web-app-manifest-512x512.png',
  'site.webmanifest'
];

// Dossier public
const publicDir = path.join(__dirname, '..', 'public');

console.log('🧹 Nettoyage des anciens fichiers favicon...');
console.log(`📁 Dossier : ${publicDir}`);
console.log('');

let removedCount = 0;
let notFoundCount = 0;

filesToRemove.forEach(filename => {
  const filePath = path.join(publicDir, filename);
  
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Supprimé : ${filename}`);
      removedCount++;
    } catch (error) {
      console.error(`❌ Erreur lors de la suppression de ${filename}:`, error.message);
    }
  } else {
    console.log(`ℹ️  Non trouvé : ${filename}`);
    notFoundCount++;
  }
});

console.log('');
console.log('🎉 Nettoyage terminé !');
console.log(`📊 Fichiers supprimés : ${removedCount}`);
console.log(`📊 Fichiers non trouvés : ${notFoundCount}`);
console.log('');
console.log('💡 Vos nouveaux favicons sont maintenant dans public/favicon/');
console.log('🔧 Votre layout.tsx a été mis à jour pour utiliser les nouveaux liens');
console.log('');
console.log('🚀 Testez votre site pour voir les nouveaux favicons !');
