import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "LABONNEPLAQUE.fr - Plaques d’immatriculation personnalisées",
    description: "Commandez des plaques personnalisées, homologuées et livrées rapidement. Créez votre plaque en ligne dès maintenant.",
    alternates: {
      canonical: "https://www.labonneplaque.fr/",
    },
    openGraph: {
      title: "LABONNEPLAQUE.fr - Plaques personnalisées et homologuées",
      description: "Créez votre plaque d'immatriculation personnalisée avec notre module en ligne.",
      url: "https://www.labonneplaque.fr/",
      siteName: "La Bonne Plaque",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.labonneplaque.fr/favicon.png",
          width: 1200,
          height: 630,
          alt: "Exemple de plaque personnalisée",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "LABONNEPLAQUE.fr",
      description: "Créez votre plaque personnalisée dès maintenant",
      images: ["https://www.labonneplaque.fr/favicon.png"],
    },
  }
}

export default function Page() {
  return <HomePage />
}