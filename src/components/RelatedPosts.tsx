import Link from 'next/link'
import Image from 'next/image'
import React, { useMemo } from 'react'

interface RelatedPost {
  slug: string
  title: string
  description: string
  image: string
  createdAt: string
}

interface RelatedPostsProps {
  currentSlug: string
  posts: RelatedPost[]
  maxPosts?: number
}

export default function RelatedPosts({ 
  currentSlug, 
  posts, 
  maxPosts = 3
}: RelatedPostsProps) {
  // Fonction pour créer une graine déterministe basée sur le slug
  const createSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  // Fonction pour mélanger un tableau de manière déterministe
  const shuffleArrayDeterministic = (array: RelatedPost[], seed: number) => {
    const shuffled = [...array];
    let currentSeed = seed;
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      // Générer un nombre pseudo-aléatoire basé sur la graine
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      const j = Math.floor((currentSeed / 233280) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Filtrer l'article actuel et mélanger de manière déterministe avec useMemo
  const relatedPosts = useMemo(() => {
    const seed = createSeed(currentSlug);
    return shuffleArrayDeterministic(
      posts.filter(post => post.slug !== currentSlug),
      seed
    ).slice(0, maxPosts);
  }, [currentSlug, posts.length, maxPosts]);

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        À lire aussi
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block hover:bg-gray-50 p-3 rounded-lg transition-colors line"
            title={`Lire l'article : ${post.title}`}
          >
            <div className="aspect-video relative mb-3 overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
