import { getCachedAllArticles, getCachedArticleBySlug } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterOptimized from "@/components/FooterOptimized";
import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import React from "react";
import {
  FacebookSquareIcon,
  XSquareIcon,
  LinkedInSquareIcon,
  MailSquareIcon,
  PinterestSquareIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const revalidate = 3600; // Revalidate every hour

// ✅ Nouveau typage compatible Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getCachedArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

// Ajouter avant l'export default
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

  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 pb-10 pt-24 md:py-32">
        <div className="mx-auto max-w-7xl px-2 md:py-10 md:flex md:gap-6">
          <div className="md:w-3/4">
            <section className="mb-20">
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
              <p className="text-2xl text-gray-700 mb-6">
                {article.description}
              </p>
              <div
                className="prose prose-lg text-left leading-relaxed [&_h1]:text-2xl
  [&_h2]:text-[2rem] [&_h2]:mt-4 [&_h2]:mb-4
  [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-800
  [&_p]:mb-5 [&_p]:text-gray-700
  [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mb-2
  [&_a]:text-blue-600 hover:[&_a]:underline [&_p]:mt-2
"
              >
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
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
        <section className="max-w-4xl mx-auto my-12 text-center px-4 py-10 border-t">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Envie de personnaliser votre plaque ?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Faites comme des milliers de passionnés : créez votre plaque stylée
            en quelques clics.
          </p>
          <a
            href="/#personnalisation"
            className="header-cta bg-yellow-400 text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-block items-center mx-auto"
            title="Créer ma plaque personnalisée maintenant"
          >
            Je crée ma plaque{" "}
            <ArrowRightIcon className="inline w-4 h-4 cta-arrow ml-2" />
          </a>
        </section>
        <section className="mb-10 max-w-6xl flex flex-col justify-center mx-auto border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold mb-6 pl-2">Articles récents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherArticles.slice(0, 3).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black border border-black transition"
            >
              Retour à la page Blog
            </Link>
          </div>
        </section>
      </main>
      <FooterOptimized />
    </div>
  );
}
