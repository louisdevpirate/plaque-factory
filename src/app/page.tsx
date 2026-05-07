import type { Metadata } from 'next'
import HomePageOptimized from '@/components/HomePageOptimized'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Plaque d'immatriculation personnalisée | Homologuée CE, livrée en 48h",
    description:
      "Créez votre plaque d'immatriculation personnalisée en quelques clics. Homologuée CE, fabrication française, livraison express 48h. À partir de 15€.",
    alternates: {
      canonical: "https://labonneplaque.fr/",
    },
    openGraph: {
      title: "Plaque d'immatriculation personnalisée | Homologuée CE, livrée en 48h",
      description:
        "Créez votre plaque d'immatriculation personnalisée en quelques clics. Homologuée CE, fabrication française, livraison express 48h. À partir de 15€.",
      url: "https://labonneplaque.fr/",
      siteName: "La Bonne Plaque",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://opengraph.b-cdn.net/production/images/3b60bbfa-6653-438a-8369-4e172db1a962.png?token=if9gmIgfPC8EVKPC8g-q6i5UKErGZFT1KXRPOgyYsq0&height=628&width=1200&expires=33294641719",
          width: 1200,
          height: 628,
          alt: "Plaques personnalisées en ligne - labonneplaque.fr",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Plaque d'immatriculation personnalisée | Homologuée CE, livrée en 48h",
      description:
        "Créez votre plaque d'immatriculation personnalisée en quelques clics. Homologuée CE, fabrication française, livraison express 48h. À partir de 15€.",
      images: [
        "https://opengraph.b-cdn.net/production/images/3b60bbfa-6653-438a-8369-4e172db1a962.png?token=if9gmIgfPC8EVKPC8g-q6i5UKErGZFT1KXRPOgyYsq0&height=628&width=1200&expires=33294641719",
      ],
    },
  }
}

export default function Page() {
  return <HomePageOptimized />
}