// app/metadata.ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "LABONNEPLAQUE.fr",
  description: "Commandez votre plaque d'immatriculation personnalisée dès 15€. Livraison rapide 24h, qualité professionnelle garantie. Création en ligne simple et sécurisée.",
  openGraph: {
    title: "LABONNEPLAQUE.fr",
    description: "Plaques d'immatriculation personnalisées et homologuées dès 15€. Livraison rapide 24h, création simple en ligne.",
    url: "https://www.labonneplaque.fr",
    images: [
      {
        url: "https://www.labonneplaque.fr/favicon.png",
        alt: "Plaque d'immatriculation personnalisée dès 15€"
      }
    ],
  },
}