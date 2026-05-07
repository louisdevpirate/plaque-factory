import { notFound } from 'next/navigation'
import { getCategoryBySlug } from '@/lib/categoryUtils'
import { categories } from '@/data/categoryConfig'
import Template from '@/components/Template'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

const CATEGORY_SEO: Record<string, { title: string; description: string }> = {
  'moto': {
    title: 'Plaque Moto Personnalisée Homologuée | Format 21x13 cm, livraison 48h',
    description: 'Commandez votre plaque moto homologuée CE au format réglementaire 21x13 cm. Personnalisation complète, plexiglass résistant, livraison express. Dès 15€.',
  },
  'us': {
    title: 'Plaque Immatriculation Américaine | Format US 30x15 cm Personnalisé',
    description: 'Créez votre plaque US personnalisée au format américain 30x15 cm. Parfaite pour véhicules de collection, déco garage ou cadeau original. Fabrication française.',
  },
  'collection': {
    title: 'Plaque Collection Personnalisée | Anciennes, Vintage, Homologuées',
    description: "Plaque d'immatriculation de collection personnalisée pour véhicules anciens. Formats conformes SIV, fabrication française, livraison 48h.",
  },
  'collection-compact': {
    title: 'Plaque Collection Compact Vintage | Format 27x7,5 cm Personnalisée',
    description: "Plaque de collection petit format pour voitures et motos anciennes. Style vintage authentique au format 27,5x7,5 cm. Fabrication française, livraison 48h.",
  },
  'plaques-personnalisees': {
    title: "Plaque Personnalisée Homologuée CE | Livraison 48h, dès 15€",
    description: "Configurez votre plaque d'immatriculation personnalisée en ligne. 100% homologuée CE, fabrication française, livraison express 48h. À partir de 15€.",
  },
  'suv': {
    title: 'Plaque SUV et 4x4 Personnalisée | Format 27x20 cm, livraison 48h',
    description: 'Commandez votre plaque SUV ou 4x4 homologuée CE au format 27x20 cm. Personnalisation complète, aluminium haute résistance, livraison express 48h. Dès 15€.',
  },
  'cyclo': {
    title: 'Plaque Cyclomoteur Personnalisée | Format 14x12 cm, livraison 48h',
    description: 'Commandez votre plaque cyclomoteur homologuée CE au format 14x12 cm. Idéale pour mobylette, vélomoteur ou cyclo ancien ou récent. Livraison express 48h.',
  },
  'little-moto': {
    title: 'Plaque Mini Moto Personnalisée | Pit Bike, Dirt Bike, 17x13 cm',
    description: 'Commandez votre plaque mini moto personnalisée au format 17x13 cm. Idéale pour pit bike, dirt bike ou pocket bike. Fabrication française, livraison 48h.',
  },
  'enduro': {
    title: 'Plaque Enduro Cross Personnalisée | Format 10x10 cm, Tout-terrain',
    description: 'Commandez votre plaque enduro ou cross personnalisée au format 10x10 cm. Ultra-résistante, anti-vibration, style tout-terrain. Fabrication française, 48h.',
  },
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return { title: '404 – Catégorie introuvable' }
  }

  const seo = CATEGORY_SEO[slug]

  return {
    title: seo?.title ?? category.title,
    description: seo?.description ?? category.description,
    alternates: {
      canonical: `https://labonneplaque.fr/categories/${slug}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return notFound()
  }

  return <Template category={category} />
}