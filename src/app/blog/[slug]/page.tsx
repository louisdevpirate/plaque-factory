import { getCachedAllArticles, getCachedArticleBySlug } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterOptimized from "@/components/FooterOptimized";
import BlogCard from "@/components/BlogCard";
import ArticleContentWithLinks from "@/components/ArticleContentWithLinks";
import ArticleCTA from "@/components/ArticleCTA";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedPosts from "@/components/RelatedPosts";
import BlogAdBanner from "@/components/BlogAdBanner";
import BlogCTABanner from "@/components/BlogCTABanner";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";
import {
  FacebookSquareIcon,
  XSquareIcon,
  LinkedInSquareIcon,
  MailSquareIcon,
  PinterestSquareIcon,
} from "@/components/Icons";
import { generateCanonicalMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import MiniFAQ from "@/components/MiniFAQ";

export const revalidate = 3600; // Revalidate every hour

const ARTICLE_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  'amende-plaque-noire': {
    title: "Amende Plaque Noire 2025 : Montant, Risques et Comment l'Éviter",
    description: "Rouler avec une plaque noire non homologuée peut coûter jusqu'à 750€ d'amende. Découvrez les règles, les risques et comment avoir une plaque noire légale en France.",
  },
  'plaque-noire-amende': {
    title: "Amende Plaque Noire 2025 : Montant, Risques et Comment l'Éviter",
    description: "Rouler avec une plaque noire non homologuée peut coûter jusqu'à 750€ d'amende. Découvrez les règles, les risques et comment avoir une plaque noire légale en France.",
  },
  'amende-plaque-immatriculation-noire': {
    title: "Amende Plaque Noire 2025 : Montant, Risques et Comment l'Éviter",
    description: "Rouler avec une plaque noire non homologuée peut coûter jusqu'à 750€ d'amende. Découvrez les règles, les risques et comment avoir une plaque noire légale en France.",
  },
}

// ✅ Nouveau typage compatible Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getCachedArticleBySlug(slug);
  if (!article) return {};

  const override = ARTICLE_SEO_OVERRIDES[slug]

  return generateCanonicalMetadata({
    url: `/blog/${slug}`,
    title: override?.title ?? article.title,
    description: override?.description ?? article.description,
    image: article.image,
    type: 'article'
  });
}

function splitAtMidpoint(content: string): [string, string] {
  if (!content || content.length < 200) return [content, ''];
  const mid = Math.floor(content.length / 2);
  const splitIndex = content.indexOf('\n\n', mid);
  if (splitIndex === -1) return [content, ''];
  return [content.slice(0, splitIndex), content.slice(splitIndex + 2)];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// ✅ Utilisation de Promise<{ slug }> pour compatibilité avec PageProps
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getCachedArticleBySlug(slug);
  if (!article) return notFound();
  const allArticles = await getCachedAllArticles();
  const recentArticles = allArticles
    .filter((a) => a.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  const featuredArticle = recentArticles[0];
  const otherArticles = recentArticles.slice(1, 11);

  const allCategoryLinks = [
    { href: '/categories/moto', label: 'Plaques moto', icon: '🏍️' },
    { href: '/categories/us', label: 'Plaques US', icon: '🇺🇸' },
    { href: '/categories/suv', label: 'Plaques SUV', icon: '🚙' },
    { href: '/categories/collection', label: 'Collection', icon: '🕰️' },
    { href: '/categories/enduro', label: 'Enduro / Cross', icon: '🏔️' },
    { href: '/categories/cyclo', label: 'Cyclomoteur', icon: '🛵' },
    { href: '/categories/little-moto', label: 'Mini moto', icon: '🏍️' },
    { href: '/categories/plaques-personnalisees', label: 'Personnalisées', icon: '🎨' },
  ];

  const articleText = ((article.title || '') + ' ' + (article.content || '') + ' ' + (article.description || '')).toLowerCase();

  const categoryKeywordMap: { href: string; label: string; icon: string; keywords: string[] }[] = [
    { href: '/categories/moto', label: 'Plaques moto', icon: '🏍️', keywords: ['moto', 'scooter', 'deux-roues', 'motocyclette'] },
    { href: '/categories/us', label: 'Plaques US', icon: '🇺🇸', keywords: ['américain', 'usa', 'us ', ' us,', 'mustang', 'muscle car', 'pick-up'] },
    { href: '/categories/suv', label: 'Plaques SUV', icon: '🚙', keywords: ['suv', '4x4', 'tout-terrain', 'quatre-quatre'] },
    { href: '/categories/collection', label: 'Collection', icon: '🕰️', keywords: ['collection', 'vintage', 'ancien', 'rétro', 'classique'] },
    { href: '/categories/enduro', label: 'Enduro / Cross', icon: '🏔️', keywords: ['enduro', 'cross', 'trial', 'motocross', 'off-road'] },
    { href: '/categories/cyclo', label: 'Cyclomoteur', icon: '🛵', keywords: ['cyclo', 'cyclomoteur', 'mobylette', 'vélomoteur'] },
    { href: '/categories/little-moto', label: 'Mini moto', icon: '🏍️', keywords: ['pit bike', 'pocket bike', 'dirt bike', 'mini moto', 'miniature'] },
  ];

  const matchedLinks = categoryKeywordMap
    .filter((cat) => cat.keywords.some((kw) => articleText.includes(kw)))
    .map(({ href, label, icon }) => ({ href, label, icon }));

  const categoryLinks = matchedLinks.length >= 2
    ? matchedLinks.slice(0, 5)
    : allCategoryLinks.slice(0, 5);

  return (
    <div>
      <StructuredData type="BlogPosting" data={article} />
      <Navbar />
      <main className="bg-gray-50 pb-10 pt-18 md:py-20">
        <div className="mx-auto max-w-7xl px-2 md:py-10 md:flex md:gap-6">
          <div className="md:w-3/4">
            <section>
              {/* Encart publicitaire */}
              <BlogAdBanner />
              
              <div className="max-w-7xl mb-8">
                <nav className="text-sm text-gray-500">
                  <Link href="/" className="hover:underline text-blue-700">
                    Accueil
                  </Link>
                  <span className="mx-2">›</span>
                  <Link href="/blog" className="hover:underline text-blue-700">
                    Blog
                  </Link>
                  <span className="mx-2">›</span>
                  <span className="text-gray-700">{article.title}</span>
                </nav>
              </div>
              <h1 className="text-4xl font-bold text-left">{article.title}</h1>

              {/* Résumé Express optimisé SEO - seulement si pas déjà dans le contenu */}
              {article.content && !article.content.includes(article.description) && (
                <section className="bg-neutral-100 p-4 rounded-md my-6">
                  <h2 className="text-sm font-bold uppercase mb-2">Résumé express</h2>
                  <p className="text-gray-700">{article.description}</p>
                </section>
              )}

              <div className="flex items-center space-x-4 mt-4 mb-6">
                <span className="text-sm text-gray-600 font-medium">
                  Partager :
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://www.labonneplaque.fr/blog/${article.slug}`
                  )}`}
                  title="Facebook Icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3b5998] hover:text-blue-400 transition-colors"
                >
                  <FacebookSquareIcon className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `https://www.labonneplaque.fr/blog/${article.slug}`
                  )}&text=${encodeURIComponent(article.title)}`}
                  title="Twitter Icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/10 transition-colors"
                >
                  <XSquareIcon className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://www.labonneplaque.fr/blog/${article.slug}`
                  )}`}
                  title="Linkedin Icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0e76a8] hover:opacity-10 transition-colors"
                >
                  <LinkedInSquareIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    article.title
                  )}&body=${encodeURIComponent(
                    `Découvrez cet article : https://www.labonneplaque.fr/blog/${article.slug}`
                  )}`}
                  title="Mail Icon"
                  className="text-gray-600 hover:opacity-10 transition-colors"
                >
                  <MailSquareIcon className="w-5 h-5" />
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    `https://www.labonneplaque.fr/blog/${article.slug}`
                  )}&description=${encodeURIComponent(article.title)}`}
                  title="Pinterest Icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E70026] hover:opacity-10 transition-colors"
                >
                  <PinterestSquareIcon className="w-5 h-5" />
                </a>
              </div>
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="rounded-lg w-full mb-6"
                loading="lazy"
                quality={70}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
              />
              <div className="flex items-center space-x-4 mt-6 mb-10">
                {article.author && (
                  <>
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={70}
                      height={70}
                      className="rounded-full"
                      quality={70}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Publié par {article.author.name}
                      </p>
                      <p className="text-sm font-light">{article.author.bio}</p>
                      <p className="text-sm font-light">
                        {formatDate(article.createdAt)}
                      </p>
                    </div>
                  </>
                )}
              </div>
    
              {(() => {
                const [firstHalf, secondHalf] = splitAtMidpoint(article.content || '');
                return (
                  <>
                    <ArticleContentWithLinks
                      content={firstHalf}
                      articleTitle={article.title}
                    />
                    {secondHalf && (
                      <>
                        <BlogCTABanner />
                        <ArticleContentWithLinks
                          content={secondHalf}
                          articleTitle={article.title}
                        />
                      </>
                    )}
                  </>
                );
              })()}
              
              {/* Mini FAQ */}
              <MiniFAQ articleTitle={article.title} />
              
              {/* Articles liés - sous la FAQ */}
              <RelatedPosts
                currentSlug={slug}
                posts={allArticles.map(a => ({
                  slug: a.slug,
                  title: a.title,
                  description: a.description,
                  image: a.image,
                  createdAt: a.createdAt
                }))}
                maxPosts={3}
                categoryLinks={categoryLinks}
              />
            </section>
          </div>
          <aside className="hidden md:block md:w-1/3">
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-600 px-2">
                Articles récents
              </h3>
              {featuredArticle && (
                <div className="bg-white p-6 shadow mb-6 rounded">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="block text-md text-gray-900 font-semibold hover:text-blue-600 leading-snug"
                  >
                    {featuredArticle.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-3">
                    {featuredArticle.description}
                  </p>
                </div>
              )}
              <ul className="space-y-4 px-2">
                {otherArticles.map((article, index) => (
                  <React.Fragment key={article.slug}>
                    <li>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-sm text-gray-800 font-bold hover:text-blue-600 transition-colors capitalize
"
                      >
                        {article.title}
                      </Link>
                    </li>
                    {index !== otherArticles.length - 1 && (
                      <hr className="border-gray-200" />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <ArticleCTA articleTitle={article.title} />
        <RelatedArticles 
          currentArticle={article} 
          allArticles={allArticles}
          excludeSlugs={allArticles
            .filter(a => a.slug !== slug)
            .slice(0, 3)
            .map(a => a.slug)
          }
        />
      </main>
      <FooterOptimized />
    </div>
  );
}
