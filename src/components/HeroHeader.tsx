import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from './Icons'

interface HeroHeaderProps {
  title: string
  description: string
  backgroundImage: string
  plaqueImage: string
  ctaText?: string
  ctaHref?: string
  showBackButton?: boolean
}

export default function HeroHeader({
  title,
  description,
  backgroundImage,
  plaqueImage,
  ctaText = "Je crée ma plaque",
  ctaHref = "#personnalisation",
  showBackButton = true
}: HeroHeaderProps) {
  return (
    <>
      <div className="h-20 bg-white"></div>
      <header className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />

        {showBackButton && (
          <Link
            href="/#catégories"
            className="hidden md:block absolute top-4 left-4 z-40 text-white px-4 py-2 cursor-pointer hover:text-white transition-colors"
            title="Retour aux catégories"
          >
            <ArrowRightIcon className="rotate-180 w-3 h-3 inline mr-2 text-white" />
            Retour
          </Link>
        )}

        <div className="absolute inset-0 z-30 flex items-center justify-center max-w-7xl h-full px-4 md:px-12 mx-auto">
          <div className="w-1/2 flex flex-col items-start justify-center text-white text-left max-w-md">
            <h1 className="text-3xl md:text-6xl font-medium mb-4">
              {title}
            </h1>
            <p className="mt-4 mb-8 text-base md:text-lg text-white/90">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="header-cta bg-yellow-400 text-black font-normal py-4 px-6 rounded-lg shadow-lg transition duration-300 inline-flex items-center hover:bg-yellow-300 hover:shadow-xl"
              title={ctaText}
            >
              {ctaText}
              <ArrowRightIcon className="inline w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="w-1/2 hidden md:flex justify-center items-center">
            <Image
              src={plaqueImage}
              width={500}
              height={100}
              alt={`Plaque ${title.toLowerCase()}`}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </header>
    </>
  )
}
