'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Article = {
  id: string
  slug: string
  title: string
  description: string
  image: string
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function BlogSection() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('Article')
        .select('id, slug, title, description, image')
        .order('createdAt', { ascending: false })
        .limit(5)

      if (error) {
        console.error('Erreur Supabase :', error)
        return
      }
      console.log('Articles récupérés depuis Supabase ➜', data)
      setArticles(data || [])
    }

    fetchArticles()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }]
  }

  return (
    <section id="blog" className="blog-section">
      <div className="mx-auto">
        <div className="flex-column justify-center items-center mb-10 text-center">
          <h2 className="blog-title mb-2">Blog Section</h2>
          <Link href="/blog" className="blog-see-more">Voir plus →</Link>
        </div>

        <div className="slider-container relative max-w-6xl mx-auto">
          <Slider {...settings} className="blog-slider">
            {articles.map((article) => (
              <div
                key={article.id}
                className="blog-card"
                onClick={() => router.push(`/blog/${article.slug}`)}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="blog-image"
                />
                <div className="blog-info">
                  <h3 className="blog-title ">{article.title}</h3>
                  <p className="blog-excerpt">{article.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}