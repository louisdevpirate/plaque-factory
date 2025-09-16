# Composants CTA Réutilisables

## CTAButton

Composant de bouton d'appel à l'action réutilisable avec plusieurs variantes et tailles.

### Props

- `href`: URL de destination
- `children`: Contenu du bouton
- `variant`: Style du bouton (`primary` | `secondary` | `blog`)
- `size`: Taille du bouton (`sm` | `md` | `lg`)
- `className`: Classes CSS supplémentaires
- `title`: Attribut title pour l'accessibilité
- `onClick`: Fonction de callback
- `external`: Si le lien est externe (ouvre dans un nouvel onglet)

### Exemples d'utilisation

```tsx
// Bouton principal
<CTAButton href="#personnalisation" variant="primary" size="lg">
  Je crée ma plaque
</CTAButton>

// Bouton secondaire
<CTAButton href="/blog" variant="secondary" size="md">
  Voir tous les articles
</CTAButton>

// Bouton blog avec prix
<CTAButton href="#personnalisation" variant="blog" size="md">
  Créer ma plaque dès 15€
</CTAButton>

// Lien externe
<CTAButton 
  href="https://module.plaqueimmat.fr" 
  variant="secondary" 
  external
>
  Accéder au module complet
</CTAButton>
```

## CTAContainer

Composant conteneur pour gérer les groupes de boutons CTA.

### Props

- `children`: Boutons CTA à contenir
- `direction`: Direction du layout (`row` | `col`)
- `gap`: Espacement entre les boutons (`sm` | `md` | `lg`)
- `className`: Classes CSS supplémentaires
- `center`: Centrer les boutons (défaut: true)

### Exemples d'utilisation

```tsx
// Boutons en ligne
<CTAContainer direction="row" gap="sm">
  <CTAButton href="#personnalisation" variant="primary">
    Je crée ma plaque
  </CTAButton>
  <CTAButton href="/blog" variant="secondary">
    Voir le blog
  </CTAButton>
</CTAContainer>

// Boutons en colonne
<CTAContainer direction="col" gap="md">
  <CTAButton href="/blog" variant="secondary">
    Voir tous les articles
  </CTAButton>
  <CTAButton href="#personnalisation" variant="blog">
    Créer ma plaque dès 15€
  </CTAButton>
</CTAContainer>
```

## Variantes disponibles

### Primary (Jaune)
- Couleur de fond: `bg-yellow-400`
- Couleur de texte: `text-black`
- Hover: `hover:bg-yellow-500`

### Secondary (Blanc avec bordure)
- Couleur de fond: `bg-white`
- Bordure: `border border-black`
- Couleur de texte: `text-black`
- Hover: `hover:bg-black hover:text-white`

### Blog (Jaune avec font-semibold)
- Couleur de fond: `bg-yellow-400`
- Couleur de texte: `text-black`
- Font: `font-semibold`
- Hover: `hover:bg-yellow-500`
