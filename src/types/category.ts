export interface Category {
  slug: string
  title: string
  description: string
  image: string
  imagePlaque: string
  code: string
  features: string[]
  vehicleTypes: string[]
  dimensions: string
  icon: string
  subcategories?: SubCategory[]
}

export interface SubCategory {
  slug: string
  title: string
  code: string
  image: string
  description?: string
  variations?: SubCategoryVariation[]
}

export interface SubCategoryVariation {
  name: string
  code: string
  slug: string
}