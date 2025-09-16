import type { Metadata } from 'next'
import HomePageOptimized from '@/components/HomePageOptimized'

export async function generateMetadata(): Promise<Metadata> {
  return {
        title: "LABONNEPLAQUE.fr",
    description: "Commandez votre plaque d'immatriculation personnalisée dès 15€. Livraison rapide 24h, qualité professionnelle garantie. Création en ligne simple et sécurisée.",
    alternates: {
      canonical: "https://labonneplaque.fr/",
    },
    openGraph: {
      title: "LABONNEPLAQUE.fr",
      description: "Plaques d'immatriculation personnalisées et homologuées dès 15€. Livraison rapide 24h, création simple en ligne.",
      url: "https://www.labonneplaque.fr/",
      siteName: "La Bonne Plaque",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.labonneplaque.fr/favicon.png",
          width: 1200,
          height: 630,
          alt: "Plaque d'immatriculation personnalisée dès 15€",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "LABONNEPLAQUE.fr",
      description: "Commandez votre plaque d'immatriculation personnalisée dès 15€. Livraison rapide 24h, création simple en ligne.",
      images: ["https://www.labonneplaque.fr/favicon.png"],
    },
  }
}

export default function Page() {
  return <HomePageOptimized />
}