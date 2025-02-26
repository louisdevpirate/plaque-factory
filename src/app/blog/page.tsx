'use client'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const articles = [
    {
      id: 1,
      title: "Comment choisir une plaque d'immatriculation ?",
      excerpt: "Découvrez les critères à prendre en compte pour bien choisir votre plaque.",
      image: "/images/car.jpg",
      slug: "choisir-plaque-immatriculation",
      date: "2024-03-20",
      sujet: "Conseil"
    },
    {
      id: 2,
      title: "Les matériaux des plaques : Plexiglass vs Aluminium",
      excerpt: "Quel matériau est le plus résistant et adapté à votre véhicule ?",
      image: "/images/blog/article2.jpg",
      slug: "materiaux-plaques-immatriculation",
      date: "2024-03-18",
      sujet: "Conseil"
    },
    {
      id: 3,
      title: "L'histoire des plaques d'immatriculation en France",
      excerpt: "Un voyage dans le temps pour comprendre l'évolution des plaques.",
      image: "/images/blog/article3.jpg",
      slug: "histoire-plaques-immatriculation",
      date: "2024-03-15",
      sujet: "Histoire"
    },
    {
      id: 4,
      title: "Personnalisation des plaques : Ce que dit la loi",
      excerpt: "Tout savoir sur la législation entourant les plaques personnalisées.",
      image: "/images/blog/article4.jpg",
      slug: "personnalisation-plaques-loi",
      date: "2024-03-14",
      sujet: "Nouveauté"
    },
    {
      id: 5,
      title: "Top 5 des designs de plaques les plus originaux",
      excerpt: "Découvrez les designs de plaques les plus créatifs et uniques.",
      image: "/images/blog/article5.jpg",
      slug: "top5-designs-originaux",
      date: "2024-03-13",
      sujet: "Nouveauté"
    },
    {
      id: 6,
      title: "Entretenir ses plaques d'immatriculation : Astuces et conseils",
      excerpt: "Prolongez la durée de vie de vos plaques avec ces conseils pratiques.",
      image: "/images/blog/article6.jpg",
      slug: "entretenir-plaques-conseils",
      date: "2024-03-12",
      sujet: "Conseil"
    },
    {
      id: 7,
      title: "Plaques d'immatriculation pour motos : Spécificités et conseils",
      excerpt: "Tout ce que vous devez savoir sur les plaques pour deux-roues.",
      image: "/images/blog/article7.jpg",
      slug: "plaques-motos-conseils",
      date: "2024-03-11",
      sujet: "Conseil"
    },
    {
      id: 8,
      title: "L'évolution des plaques dans les différents pays européens",
      excerpt: "Un tour d'Europe des styles et normes des plaques d'immatriculation.",
      image: "/images/blog/article8.jpg",
      slug: "evolution-plaques-europe",
      date: "2024-03-10",
      sujet: "Histoire"
    },
    {
      id: 9,
      title: "Comment installer correctement vos plaques d'immatriculation",
      excerpt: "Guide pratique pour une installation facile et rapide de vos plaques.",
      image: "/images/blog/article9.jpg",
      slug: "installer-plaques-guide",
      date: "2024-03-09",
      sujet: "Conseil"
    }
  ];
  

export default function BlogPage() {

  // Trier les articles du plus récent au plus ancien
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  return (
    <div>
      <Navbar forceScrolled={true} />

      <main className="bg-white pb-20">
        <div className="blog-grid mx-auto px-2 py-2">

          {/* Section 1: Article le plus récent */}
          <section className="featured-article-section mb-12">
            <div className="featured-article relative w-full rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={latestArticle.image} 
                alt={latestArticle.title} 
                layout="fill" 
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full text-white p-6">
                <p className="text-sm text-gray-300 mt-1 ">{latestArticle.sujet}</p> {/* Sujet affiché ici */}
                <p className="mt-3 text-lg">{latestArticle.excerpt}</p>    
                <h2 className="text-3xl md:text-4xl font-bold text-left">{latestArticle.title}</h2>    
            </div>

            </div>
          </section>

        <div>
            <h1 className="text-4xl font-bold mb-10 px-10 text-left">Blog</h1>
            <p className='mb-10 px-10 text-left'>Ici, nous partageons des conseils sur les plaques, des informations, des nouveautés et des histoires pour inspirer vos futures aventures.</p>
        </div>
          

          {/* Section 2: Autres articles */}
          <section className="other-articles-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {otherArticles.map(article => (
              <div key={article.id} className="other-article-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={500} 
                  height={300} 
                  objectFit="cover"
                  className="w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="text-gray-600 mt-2">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
