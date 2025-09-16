"use client";

import BlogCard from "./BlogCard";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  category?: {
    name: string;
  };
}

interface RelatedArticlesProps {
  currentArticle: Article;
  allArticles: Article[];
  maxArticles?: number;
}

export default function RelatedArticles({ 
  currentArticle, 
  allArticles, 
  maxArticles = 3 
}: RelatedArticlesProps) {
  
  // Fonction pour trouver des articles similaires
  const findRelatedArticles = () => {
    // 1. Articles de la même catégorie (priorité haute)
    const sameCategoryArticles = allArticles.filter(article => 
      article.slug !== currentArticle.slug && 
      article.category?.name === currentArticle.category?.name
    );
    
    // 2. Articles récents si pas assez d'articles de la même catégorie
    const recentArticles = allArticles
      .filter(article => article.slug !== currentArticle.slug)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    // Combiner les deux listes en évitant les doublons
    const relatedArticles = [...sameCategoryArticles];
    recentArticles.forEach(article => {
      if (!relatedArticles.find(related => related.slug === article.slug)) {
        relatedArticles.push(article);
      }
    });
    
    return relatedArticles.slice(0, maxArticles);
  };

  const relatedArticles = findRelatedArticles();

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mb-10 max-w-6xl mx-auto border-t border-gray-200 pt-8">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-2xl font-semibold">
          {currentArticle.category ? 
            `Autres articles sur les ${currentArticle.category.name.toLowerCase()}` : 
            'Articles similaires'
          }
        </h2>
        <Link
          href="/blog"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          Voir tous les articles →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
      
      {/* CTA vers le blog */}
      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-block bg-black text-white py-2 px-6 rounded hover:bg-white hover:text-black border border-black transition-colors font-medium"
        >
          Retour à la page Blog
        </Link>
      </div>
    </section>
  );
}
