import { notFound } from "next/navigation";
import { Metadata } from "next";
import articles from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

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
  }
}

// ✅ Correction ici : ArticlePage devient async
export default async function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()

  const recentArticles = articles
    .filter((a) => a.slug !== params.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar forceScrolled />
      <main className="pt-24 px-4 max-w-4xl mx-auto">
        {/* Fil d’Ariane */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{article.title}</span>
        </nav>

        <article>
          <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-xl mb-8"
          />
          <div className="prose prose-lg max-w-none mb-12">
            {article.content}
          </div>
        </article>

        {/* Articles récents */}
        <h2 className="text-2xl font-semibold mb-4">Articles récents</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {recentArticles.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
