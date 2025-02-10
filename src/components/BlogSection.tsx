'use client'
import { useTheme } from '@/hooks/useTheme'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

// 🔥 Mock temporaire avant la BDD
const articles = [
  {
    id: 1,
    title: "Comment choisir une plaque d'immatriculation ?",
    excerpt: "Découvrez les critères à prendre en compte pour bien choisir votre plaque.",
    image: "/images/blog/article1.jpg",
    slug: "choisir-plaque-immatriculation"
  },
  {
    id: 2,
    title: "Les matériaux des plaques : Plexiglass vs Aluminium",
    excerpt: "Quel matériau est le plus résistant et adapté à votre véhicule ?",
    image: "/images/blog/article2.jpg",
    slug: "materiaux-plaques-immatriculation"
  },
  {
    id: 3,
    title: "L'histoire des plaques d'immatriculation en France",
    excerpt: "Un voyage dans le temps pour comprendre l'évolution des plaques.",
    image: "/images/blog/article3.jpg",
    slug: "histoire-plaques-immatriculation"
  }
]

export default function BlogSection() {
  const theme = useTheme()
  const router = useRouter()

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3, // 2 articles visibles sur desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // 1 seul article visible sur mobile
        }
      }
    ]
  }

  return (
    <section id="blog" className="blog-section">
      <div className="mx-auto">
        <div className="flex-column justify-center items-center mb-10 text-center">
          <h2 className="blog-title mb-2">Blog Section</h2>
          <a href="/blog" className="blog-see-more">Voir plus →</a>
        </div>

        <div className="slider-container relative max-w-6xl mx-auto">
          <Slider {...settings} className='blog-slider'>
            {articles.map((article) => (
              <div key={article.id} className="blog-card" onClick={() => router.push(`/blog/${article.slug}`)}>
                <Image 
                    src={article.image}
                    alt={article.title}
                    className="blog-image"
                    width={300} // ✅ Ajusté pour correspondre à la carte
                    height={200} // ✅ Taille plus cohérente
                    layout="intrinsic" // ✅ Permet d’adapter la taille de l’image à la carte
                    />
                <div className="blog-info">
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-excerpt">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
