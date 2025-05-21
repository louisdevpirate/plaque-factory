// app/metadata.ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "La Bonne Plaque - Plaques d'immatriculation personnalisées",
  description: "Créez vos plaques homologuées et personnalisées en quelques clics. Livraison rapide, conformité garantie.",
  openGraph: {
    title: "La Bonne Plaque",
    description: "Plaques personnalisées et homologuées",
    url: "https://www.labonneplaque.fr",
    images: [
      {
        url: "https://www.labonneplaque.fr/og-image.jpg",
        alt: "Exemple de plaque personnalisée"
      }
    ],
  },
}