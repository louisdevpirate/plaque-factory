# 🎨 Kit de Favicon - La Bonne Plaque

Ce dossier contient le kit complet de favicon généré à partir de votre image `LABONNEPLAQUE.FR.png` (sans fond blanc).

## 📁 Structure des Fichiers

### Favicons Standard
- `favicon.ico` - Favicon principal (16x16, 32x32, 48x48)
- `favicon.svg` - Version vectorielle moderne
- `favicon-16x16.png` - Petite taille pour les onglets
- `favicon-32x32.png` - Taille standard
- `favicon-48x48.png` - Taille moyenne
- `favicon-64x64.png` - Taille grande
- `favicon-96x96.png` - Taille très grande
- `favicon-128x128.png` - Taille maximale

### Apple Touch Icons
- `apple-touch-icon.png` - Icône principale (180x180)
- `apple-touch-icon-152x152.png` - iPad standard
- `apple-touch-icon-167x167.png` - iPad Pro
- `apple-touch-icon-180x180.png` - iPhone 6 Plus

### Android Chrome Icons
- `android-chrome-192x192.png` - Android standard
- `android-chrome-512x512.png` - Android haute résolution

### Windows Tiles
- `mstile-150x150.png` - Windows 8/10/11
- `msapplication-144x144.png` - Windows 8/10/11

### Configuration
- `site.webmanifest` - Manifeste PWA
- `browserconfig.xml` - Configuration Windows

## 🔧 Utilisation

### Dans votre layout.tsx
```tsx
{/* Favicon & icônes - Kit complet La Bonne Plaque */}
<link rel="icon" href="/favicon/favicon.ico" />
<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
<link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />

{/* Apple Touch Icons */}
<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

{/* Android Chrome Icons */}
<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />

{/* Windows Tiles */}
<meta name="msapplication-TileColor" content="#000000" />
<meta name="msapplication-TileImage" content="/favicon/mstile-150x150.png" />
<meta name="msapplication-config" content="/favicon/browserconfig.xml" />

{/* PWA Manifest */}
<link rel="manifest" href="/favicon/site.webmanifest" title="Manifest PWA de La Bonne Plaque" />
```

## 🎯 Compatibilité

- ✅ **Chrome/Edge** - Toutes les tailles
- ✅ **Firefox** - Toutes les tailles
- ✅ **Safari** - Apple Touch Icons
- ✅ **Mobile** - Android et iOS
- ✅ **Windows** - Tiles et métadonnées
- ✅ **PWA** - Manifeste complet

## 🚀 Régénération

Pour régénérer ce kit avec une nouvelle image :

1. Remplacez le fichier `LABONNEPLAQUE.FR.png` dans `public/`
2. Exécutez : `node scripts/convert-favicon-from-png.js`
3. Les nouveaux favicons seront automatiquement créés (sans fond blanc)

## 📱 Test

Visitez `/favicon-test` pour voir une page de test complète de vos favicons.

---

*Généré automatiquement avec ImageMagick et Node.js*
*Dernière mise à jour : $(date)*
