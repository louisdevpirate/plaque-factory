import { notFound } from 'next/navigation'
import { getCategoryBySlug } from '@/lib/categoryUtils'
import { categories } from '@/data/categoryConfig'
import Template from '@/components/Template'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
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

  return {
    title: category.title,
    description: category.description,
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