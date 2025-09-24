import type { Metadata } from 'next'
import HomePageOptimized from '@/components/HomePageOptimized'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "labonneplaque.fr | Plaques personnalisées et homologuées",
    description:
      "Commandez vos plaques d'immatriculation personnalisées en ligne. Livraison 24h. Conseils, infos et qualité pro sur un seul site.",
    alternates: {
      canonical: "https://labonneplaque.fr/",
    },
    openGraph: {
      title: "labonneplaque.fr | Plaques personnalisées et homologuées",
      description:
        "Commandez vos plaques d'immatriculation personnalisées en ligne. Livraison 24h. Conseils, infos et qualité pro sur un seul site.",
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
      title: "labonneplaque.fr | Plaques personnalisées et homologuées",
      description:
        "Commandez vos plaques d'immatriculation personnalisées en ligne. Livraison 24h. Conseils, infos et qualité pro sur un seul site.",
      images: [
        "https://opengraph.b-cdn.net/production/images/3b60bbfa-6653-438a-8369-4e172db1a962.png?token=if9gmIgfPC8EVKPC8g-q6i5UKErGZFT1KXRPOgyYsq0&height=628&width=1200&expires=33294641719",
      ],
    },
  }
}

export default function Page() {
  return <HomePageOptimized />
}