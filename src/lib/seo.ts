import { Metadata } from 'next'

interface CanonicalMetadataProps {
  url: string
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article'
}

export function generateCanonicalMetadata({
  url,
  title,
  description,
  image,
  type = 'website'
}: CanonicalMetadataProps): Metadata {
  const baseUrl = 'https://www.labonneplaque.fr'
  const canonicalUrl = `${baseUrl}${url}`
  
  const truncatedTitle = title && title.length > 60 ? title.slice(0, 57) + '...' : title
  const metaTitle = type === 'article'
    ? (truncatedTitle || 'La Bonne Plaque')
    : (truncatedTitle ? `${truncatedTitle} | La Bonne Plaque` : 'La Bonne Plaque')

  return {
    title: metaTitle,
    description: description || 'Commandez votre plaque d\'immatriculation personnalisée dès 15€. Livraison rapide 24h, qualité professionnelle garantie.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: description || 'Plaques d\'immatriculation personnalisées et homologuées dès 15€. Livraison rapide 24h, création simple en ligne.',
      url: canonicalUrl,
      siteName: 'La Bonne Plaque',
      locale: 'fr_FR',
      type: type,
      images: image ? [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title || 'Plaque d\'immatriculation personnalisée',
        },
      ] : [
        {
          url: `${baseUrl}/favicon.png`,
          width: 1200,
          height: 630,
          alt: 'Plaque d\'immatriculation personnalisée dès 15€',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: description || 'Commandez votre plaque d\'immatriculation personnalisée dès 15€. Livraison rapide 24h, création simple en ligne.',
      images: image ? [`${baseUrl}${image}`] : [`${baseUrl}/favicon.png`],
    },
  }
}
