import { Category } from '@/types/category'

export const categories: Category[] = [
  {
    slug: 'moto',
    title: 'Plaques moto personnalisées',
    description: 'Commandez votre plaque moto homologuée en quelques clics.',
    image: '/images/templates/moto.webp',
    iframeUrl: 'https://labonneplaque.fr/module-moto',
  },
  {
    slug: 'us',
    title: 'Plaques US pour véhicules américains',
    description: 'Des plaques à l’américaine, au format 30x15 ou 30x10 cm.',
    image: '/images/templates/us.jpg',
    iframeUrl: 'https://labonneplaque.fr/module-us',
  },
]