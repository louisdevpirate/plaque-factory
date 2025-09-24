# ANALYSE MÉTADONNÉES COMPLÈTE - LABONNEPLAQUE.FR

## 📊 MÉTADONNÉES PAR PAGE

### 🏠 PAGE D'ACCUEIL (`/`)

#### Métadonnées de Base
```html
<title>LABONNEPLAQUE.fr</title>
<meta name="description" content="Commandez votre plaque d'immatriculation personnalisée dès 15€. Livraison rapide 24h, qualité professionnelle garantie. Création en ligne simple et sécurisée.">
<link rel="canonical" href="https://labonneplaque.fr/">
```

#### Open Graph
```html
<meta property="og:title" content="LABONNEPLAQUE.fr">
<meta property="og:description" content="Plaques d'immatriculation personnalisées et homologuées dès 15€. Livraison rapide 24h, création simple en ligne.">
<meta property="og:url" content="https://www.labonneplaque.fr/">
<meta property="og:site_name" content="La Bonne Plaque">
<meta property="og:locale" content="fr_FR">
<meta property="og:type" content="website">
<meta property="og:image" content="https://www.labonneplaque.fr/favicon.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Plaque d'immatriculation personnalisée dès 15€">
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="LABONNEPLAQUE.fr">
<meta name="twitter:description" content="Commandez votre plaque d'immatriculation personnalisée dès 15€. Livraison rapide 24h, création simple en ligne.">
<meta name="twitter:image" content="https://www.labonneplaque.fr/favicon.png">
```

#### JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LABONNEPLAQUE.fr",
  "url": "https://www.labonneplaque.fr",
  "logo": "https://www.labonneplaque.fr/images/logo/1.svg"
}
```

---

### 🎨 PAGE PLAQUES PERSONNALISÉES (`/plaques-personnalisees`)

#### Métadonnées de Base
```html
<title>Plaques personnalisées dès 15€ | Livraison 24h | LABONNEPLAQUE.fr</title>
<meta name="description" content="Créez votre plaque d'immatriculation personnalisée dès 15€. Large choix de styles, finitions premium, livraison rapide 24h. Configurateur en ligne simple et sécurisé.">
```

#### Open Graph
```html
<meta property="og:title" content="Plaques personnalisées dès 15€ | Livraison 24h | LABONNEPLAQUE.fr">
<meta property="og:description" content="Créez votre plaque d'immatriculation personnalisée dès 15€. Large choix de styles, finitions premium, livraison rapide 24h.">
```

---

### 📖 PAGE BLOG (`/blog`)

#### Métadonnées de Base
- **Titre** : Généré dynamiquement
- **Description** : Générée dynamiquement
- **Pas de métadonnées spécifiques** définies

---

### 📝 ARTICLES DE BLOG (`/blog/[slug]`)

#### Métadonnées Dynamiques
```html
<title>{article.title}</title>
<meta name="description" content="{article.description}">
```

#### Open Graph
```html
<meta property="og:title" content="{article.title}">
<meta property="og:description" content="{article.description}">
<meta property="og:image" content="{article.image}">
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{article.title}">
<meta name="twitter:description" content="{article.description}">
<meta name="twitter:image" content="{article.image}">
```

---

### 🏷️ PAGES CATÉGORIES (`/categories/[slug]`)

#### Métadonnées Dynamiques
```html
<title>{category.title}</title>
<meta name="description" content="{category.description}">
<link rel="canonical" href="https://labonneplaque.fr/categories/{slug}">
```

---

### ℹ️ PAGE À PROPOS (`/about`)

#### Métadonnées de Base
- **Titre** : Généré par défaut (LABONNEPLAQUE.fr)
- **Description** : Générée par défaut
- **Pas de métadonnées spécifiques** définies

---

## 🌐 MÉTADONNÉES GLOBALES (layout.tsx)

### Métadonnées de Base
```html
<title>LABONNEPLAQUE.fr</title>
<meta name="description" content="Créez vos plaques d'immatriculation personnalisées et homologuées en quelques clics.">
<meta name="keywords" content="plaque d'immatriculation, plaque personnalisée, plaque auto, plaque moto, plaque plexiglass, plaque homologuée">
<meta name="author" content="LABONNEPLAQUE.fr">
<meta name="publisher" content="LABONNEPLAQUE.fr">
<meta name="robots" content="index, follow">
```

### Viewport et Responsive
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
```

### Vérification Google
```html
<meta name="google-site-verification" content="V6KAzX4v_RTEpEchSzE0YyWi0pbjg5gfygwwZLhaqrU">
```

### DNS Prefetch et Preconnect
```html
<link rel="dns-prefetch" href="https://images.unsplash.com">
<link rel="preconnect" href="https://images.unsplash.com" crossorigin="anonymous">
<link rel="dns-prefetch" href="{NEXT_PUBLIC_SUPABASE_URL}">
<link rel="preconnect" href="{NEXT_PUBLIC_SUPABASE_URL}" crossorigin="anonymous">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="dns-prefetch" href="https://supabase.co">
<link rel="preconnect" href="https://supabase.co">
```

### Preload des Polices
```html
<link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/fonts/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

---

## 🏷️ FAVICONS ET ICÔNES

### Favicon Principal
```html
<link rel="icon" href="/favicon/favicon.ico">
<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg">
```

### Favicons Multi-Tailles
```html
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png">
```

### Apple Touch Icons
```html
<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
```

### Android Chrome Icons
```html
<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png">
```

### Windows Tiles
```html
<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="/favicon/mstile-150x150.png">
<meta name="msapplication-config" content="/favicon/browserconfig.xml">
```

### PWA Manifest
```html
<link rel="manifest" href="/favicon/site.webmanifest" title="Manifest PWA de La Bonne Plaque">
```

---

## 📊 DONNÉES STRUCTURÉES (SCHEMA.ORG)

### Organisation (Page d'Accueil)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LABONNEPLAQUE.fr",
  "url": "https://www.labonneplaque.fr",
  "logo": "https://www.labonneplaque.fr/images/logo/1.svg"
}
```

### FAQ (Section FAQ)
```html
<div itemScope itemType="https://schema.org/FAQPage">
  <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
    <span itemProp="name">Question</span>
    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
      <p itemProp="text">Réponse</p>
    </div>
  </div>
</div>
```

---

## 🚨 PROBLÈMES IDENTIFIÉS

### 1. Métadonnées Manquantes
- **Page Blog** : Pas de métadonnées spécifiques
- **Page À Propos** : Pas de métadonnées spécifiques
- **Pages Catégories** : Métadonnées basiques uniquement

### 2. Données Structurées Insuffisantes
- **Pas de schema.org Product** pour les plaques
- **Pas de LocalBusiness** si applicable
- **Pas de BreadcrumbList** structuré
- **Pas de WebSite** avec SearchAction

### 3. Open Graph Incomplet
- **Pas d'images optimisées** pour toutes les pages
- **Pas de type spécifique** pour chaque page
- **Pas de données de contact** dans l'organisation

### 4. Twitter Cards Basiques
- **Même image** pour toutes les pages
- **Pas de données spécifiques** par type de contenu

---

## 🎯 RECOMMANDATIONS D'AMÉLIORATION

### 1. Métadonnées Spécifiques par Page
```html
<!-- Page Blog -->
<title>Blog Plaques d'Immatriculation | Conseils & Actualités | LABONNEPLAQUE.fr</title>
<meta name="description" content="Découvrez nos conseils, actualités et guides sur les plaques d'immatriculation. Personnalisation, législation, entretien et plus encore.">

<!-- Page À Propos -->
<title>À Propos | LABONNEPLAQUE.fr - Votre Guide Plaques d'Immatriculation</title>
<meta name="description" content="Découvrez l'histoire de LABONNEPLAQUE.fr, votre guide indépendant pour des plaques d'immatriculation personnalisées et homologuées.">
```

### 2. Données Structurées Avancées
```json
// Schema.org Product pour chaque type de plaque
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Plaque Moto Personnalisée",
  "description": "Plaque d'immatriculation moto homologuée et personnalisable",
  "brand": {
    "@type": "Brand",
    "name": "LABONNEPLAQUE.fr"
  },
  "offers": {
    "@type": "Offer",
    "price": "15.00",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}

// BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.labonneplaque.fr/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Catégories",
      "item": "https://www.labonneplaque.fr/categories"
    }
  ]
}
```

### 3. Open Graph Optimisé
```html
<!-- Images spécifiques par page -->
<meta property="og:image" content="https://www.labonneplaque.fr/images/og/blog.jpg">
<meta property="og:image" content="https://www.labonneplaque.fr/images/og/about.jpg">
<meta property="og:image" content="https://www.labonneplaque.fr/images/og/categories.jpg">
```

### 4. Meta Descriptions Optimisées
- **Longueur** : 150-160 caractères
- **Mots-clés** : Inclus naturellement
- **Call-to-action** : Inclus quand pertinent
- **Unique** : Une par page

### 5. Titres Optimisés
- **Longueur** : 50-60 caractères
- **Mots-clés** : En début de titre
- **Brand** : LABONNEPLAQUE.fr en fin
- **Unique** : Un par page

Cette analyse détaillée des métadonnées permettra d'optimiser chaque page pour un meilleur référencement et une meilleure visibilité sur les moteurs de recherche.
