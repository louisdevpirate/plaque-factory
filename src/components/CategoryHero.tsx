import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CheckIcon } from './Icons'
import { Category } from '@/types/category'
import CTAButton from './CTAButton'
import { getPersonnalizationUrl } from '@/lib/personnalizationUrls'

interface CategoryHeroProps {
  category: Category
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <>
      {/* Spacing for navbar */}
      <div className="h-20 bg-white"></div>
      
      {/* Main Hero Section - Clean, Conversion-Focused Design */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE - Information & CTA */}
            <div className="order-2 lg:order-1">
              {/* Back Button */}
              <Link
                href="/#catégories"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                title="Retour aux catégories"
              >
                <ArrowRightIcon className="rotate-180 w-4 h-4 mr-2" />
                Retour aux catégories
              </Link>

              {/* Title */}
              <div className="mb-4">
                <h1 className=" text-gray-900">
                  {category.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-md text-gray-700 mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Vehicle Types */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Compatible avec :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.vehicleTypes.map((type, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <CTAButton
                href={getPersonnalizationUrl(category.code)}
                variant="primary"
                size="lg"
                external
                className="text-lg font-bold"
              >
                Je crée ma plaque
              </CTAButton>

              {/* Trust Indicators */}
              <div className="mt-4 flex items-center text-sm text-gray-500 space-x-6">
                <div className="flex items-center">
                  <span className="mr-2"><CheckIcon /></span>
                  Production en 24h
                </div>
                <div className="flex items-center">
                  <span className="mr-2"><CheckIcon /></span>
                  Livraison express
                </div>
              </div>
            </div>

              {/* RIGHT SIDE - Visual */}
              <div className="order-1 lg:order-2">
                <div className="relative">
              {/* RIGHT SIDE - Visual */}
              <div className="relative rounded-2xl">
                {/* Image content */}
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl aspect-square">
                  <Image
                    src={category.imagePlaque}
                    width={600}
                    height={600}
                    alt={`Plaque ${category.title.toLowerCase()}`}
                    priority
                    className="object-contain w-full h-full floating"
                  />
                  
                  {/* Dimensions badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 border border-gray-500 text-gray-500 rounded-full text-sm font-light shadow-lg">
                    {category.dimensions}
                  </div>
                </div>
              </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-gray-600 font-medium mb-3">
              +50 000 plaques expédiées • Satisfaction garantie
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg mr-1">★★★★★</span>
                <span className="text-sm">4.8/5</span>
              </div>
              <span>•</span>
              <div className="text-sm">Support client réactif</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

