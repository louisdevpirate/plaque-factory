import { categories } from '@/data/categoryConfig'
import { Category } from '@/types/category'

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}