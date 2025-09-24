# ANALYSE MAILLAGE INTERNE - LABONNEPLAQUE.FR

## 🔗 STRUCTURE DE NAVIGATION

### Navigation Principale (Navbar)
```
Accueil (/) → Page d'accueil
Catégories (/#catégories) → Section catégories sur la page d'accueil
À propos (/about) → Page à propos
FAQ (/#faq) → Section FAQ sur la page d'accueil
Blog (/blog) → Page blog
```

### Navigation Mobile
- Menu hamburger avec les mêmes liens
- CTA principal : "Je crée ma plaque" → `#personnalisation`

---

## 🎯 LIENS INTERNES PAR PAGE

### Page d'Accueil (`/`)
**Liens de navigation :**
- `/#catégories` → Section catégories
- `/#faq` → Section FAQ
- `/#personnalisation` → Section configurateur
- `/about` → Page à propos
- `/blog` → Page blog

**Liens dans le contenu :**
- `https://plaqueimmat.fr/?aff=9c7pyekcpurn` → Site partenaire
- `https://www.avis-verifies.com/avis-clients/plaqueimmat.fr` → Avis clients
- `https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn` → Configurateur

### Page Plaques Personnalisées (`/plaques-personnalisees`)
**Liens de navigation :**
- Navigation standard (navbar)
- CTA vers configurateur externe

### Page À Propos (`/about`)
**Liens internes :**
- `/#personnalisation` → Section configurateur (2x)
- `https://plaqueimmat.fr/?aff=9c7pyekcpurn` → Site partenaire

### Page Blog (`/blog`)
**Liens internes :**
- `/blog/{slug}` → Articles individuels
- `/categories/moto` → Catégorie moto
- `/categories/us` → Catégorie US
- `/categories/suv` → Catégorie SUV
- `/categories/collection` → Catégorie collection
- `/plaques-personnalisees` → Page plaques personnalisées
- `https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn` → Configurateur

### Articles de Blog (`/blog/[slug]`)
**Liens internes :**
- `/` → Accueil (breadcrumb)
- `/blog` → Page blog (breadcrumb)
- `/blog/{slug}` → Autres articles
- `/categories/moto` → Catégorie moto
- `/categories/us` → Catégorie US
- `/categories/suv` → Catégorie SUV
- `/categories/collection` → Catégorie collection
- `/blog` → Retour au blog (2x)

**Liens externes (partage) :**
- Facebook, Twitter, LinkedIn, Email, Pinterest

### Pages Catégories (`/categories/[slug]`)
**Liens internes :**
- `/#catégories` → Retour aux catégories
- `#personnalisation` → Section configurateur
- Sections standards : Delivery, Feedback, FAQ, Blog

---

## 🤖 LIENS AUTOMATIQUES (ArticleContentWithLinks)

### Mots-clés → Liens Automatiques
```javascript
const categoryKeywords = {
  // Plaques moto
  'moto': '/categories/moto',
  'motos': '/categories/moto',
  'motocyclette': '/categories/moto',
  'motocyclettes': '/categories/moto',
  'deux-roues': '/categories/moto',
  'scooter': '/categories/moto',
  'scooters': '/categories/moto',
  
  // Plaques US
  'américain': '/categories/us',
  'américaine': '/categories/us',
  'américains': '/categories/us',
  'américaines': '/categories/us',
  'usa': '/categories/us',
  'us': '/categories/us',
  'style américain': '/categories/us',
  
  // Plaques SUV/4x4
  'suv': '/categories/suv',
  '4x4': '/categories/suv',
  'quatre-quatre': '/categories/suv',
  'tout-terrain': '/categories/suv',
  'cross': '/categories/suv',
  
  // Plaques collection
  'collection': '/categories/collection',
  'vintage': '/categories/collection',
  'ancien': '/categories/collection',
  'ancienne': '/categories/collection',
  'anciens': '/categories/collection',
  'anciennes': '/categories/collection',
  'rétro': '/categories/collection',
  
  // Plaques cyclo
  'cyclo': '/categories/cyclo',
  'cyclomoteur': '/categories/cyclo',
  'cyclomoteurs': '/categories/cyclo',
  
  // Plaques personnalisées
  'personnalisé': '/plaques-personnalisees',
  'personnalisée': '/plaques-personnalisees',
  'personnalisés': '/plaques-personnalisees',
  'personnalisées': '/plaques-personnalisees',
  'custom': '/plaques-personnalisees',
  'sur mesure': '/plaques-personnalisees'
};
```

---

## 🦶 LIENS DU FOOTER

### Navigation Footer
```
Personnaliser (#personnaliser) → Section configurateur
Galerie (#galerie) → Section galerie
Catégories (#catégories) → Section catégories
FAQ (#faq) → Section FAQ
Blog (#blog) → Section blog
```

### Liens Légaux
- Mentions légales
- Politique de confidentialité
- CGV
- Contact

### Liens Sociaux
- Instagram : `https://www.instagram.com/plaqueimmat.fr/`
- Facebook : `https://www.facebook.com/PlaqueimmatByPlaqueDigital?locale=fr_FR`
- TikTok : `https://www.tiktok.com/@plaqueimmat.fr`

---

## 📊 ANALYSE DU MAILLAGE

### Points Forts
1. **Navigation cohérente** avec navbar et footer
2. **Liens automatiques** intelligents dans les articles
3. **Breadcrumbs** sur les articles de blog
4. **CTAs** bien positionnés
5. **Liens de partage** sociaux complets

### Points Faibles
1. **Peu de liens croisés** entre catégories
2. **Pas de "pages liées"** ou "vous pourriez aussi aimer"
3. **Liens contextuels** limités dans le contenu
4. **Pas de navigation** entre articles similaires
5. **Liens de retour** limités depuis les catégories

### Liens Externes (Affiliation)
- **Configurateur principal** : `https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn`
- **Site partenaire** : `https://plaqueimmat.fr/?aff=9c7pyekcpurn`
- **Avis clients** : `https://www.avis-verifies.com/avis-clients/plaqueimmat.fr`

---

## 🎯 RECOMMANDATIONS D'AMÉLIORATION

### 1. Liens Croisés entre Catégories
```html
<!-- Sur chaque page catégorie -->
<div class="related-categories">
  <h3>Catégories similaires</h3>
  <a href="/categories/moto">Plaques Moto</a>
  <a href="/categories/us">Plaques US</a>
  <a href="/categories/suv">Plaques SUV</a>
</div>
```

### 2. Navigation entre Articles
```html
<!-- Sur chaque article -->
<div class="article-navigation">
  <a href="/blog/article-precedent">← Article précédent</a>
  <a href="/blog/article-suivant">Article suivant →</a>
</div>
```

### 3. Pages "Vous pourriez aussi aimer"
```html
<!-- Sur chaque page -->
<div class="related-content">
  <h3>Vous pourriez aussi aimer</h3>
  <div class="related-links">
    <a href="/categories/moto">Plaques Moto</a>
    <a href="/blog/guide-moto">Guide Plaques Moto</a>
    <a href="/plaques-personnalisees">Personnaliser</a>
  </div>
</div>
```

### 4. Liens Contextuels Améliorés
```html
<!-- Dans le contenu des articles -->
<p>Pour en savoir plus sur les <a href="/categories/moto">plaques moto</a>, 
consultez notre <a href="/blog/guide-moto">guide complet</a> ou 
<a href="/plaques-personnalisees">personnalisez votre plaque</a>.</p>
```

### 5. Breadcrumbs Structurés
```html
<!-- Sur toutes les pages -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Accueil</a></li>
    <li><a href="/categories">Catégories</a></li>
    <li><a href="/categories/moto">Moto</a></li>
    <li aria-current="page">Plaque Moto Personnalisée</li>
  </ol>
</nav>
```

### 6. Liens de Retour Intelligents
```html
<!-- Sur les pages catégories -->
<div class="back-navigation">
  <a href="/#catégories">← Retour aux catégories</a>
  <a href="/blog">Voir nos articles</a>
  <a href="/about">En savoir plus</a>
</div>
```

### 7. Liens de Navigation Contextuelle
```html
<!-- Dans les sections -->
<div class="section-navigation">
  <a href="#personnalisation">Personnaliser</a>
  <a href="#galerie">Voir la galerie</a>
  <a href="#faq">Questions fréquentes</a>
</div>
```

---

## 📈 MÉTRIQUES DE MAILLAGE

### Liens Internes par Page
- **Page d'accueil** : 8-10 liens internes
- **Page blog** : 6-8 liens internes
- **Articles** : 4-6 liens internes
- **Catégories** : 3-5 liens internes
- **À propos** : 2-3 liens internes

### Profondeur de Navigation
- **Niveau 1** : Page d'accueil
- **Niveau 2** : Blog, Catégories, À propos
- **Niveau 3** : Articles, Pages catégories
- **Niveau 4** : Sections spécifiques

### Liens de Sortie
- **Configurateur** : 5-7 occurrences
- **Site partenaire** : 2-3 occurrences
- **Avis clients** : 1-2 occurrences
- **Réseaux sociaux** : 3-5 occurrences

---

## 🎯 PLAN D'ACTION MAILLAGE

### Phase 1 : Amélioration Immédiate
1. **Ajouter des liens croisés** entre catégories
2. **Implémenter la navigation** entre articles
3. **Créer des pages "liées"** sur chaque page

### Phase 2 : Optimisation Avancée
1. **Breadcrumbs structurés** sur toutes les pages
2. **Liens contextuels** améliorés dans le contenu
3. **Navigation intelligente** basée sur le comportement

### Phase 3 : Analyse et Mesure
1. **Tracking des clics** sur les liens internes
2. **Analyse du parcours** utilisateur
3. **Optimisation continue** basée sur les données

Ce plan d'amélioration du maillage interne permettra d'augmenter le temps passé sur le site, de réduire le taux de rebond et d'améliorer le référencement global.
