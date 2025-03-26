// app/blog/page.tsx
import { getAllArticles } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogCard from "@/components/BlogCard"

export const dynamic = "force-dynamic"

export default async function BlogPage() {
  const articles = await getAllArticles()
  if (!articles || articles.length === 0) return <p>Aucun article pour le moment.</p>

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  const latestArticle = sortedArticles[0]
  const otherArticles = sortedArticles.slice(1)

  return (
    <div>
      <Navbar forceScrolled={true} />

      <main className="bg-white pb-20">
        <div className="blog-grid mx-auto px-2 py-2">
          {/* HERO */}
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
                <p className="mt-3 text-lg">{latestArticle.description}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-left">
                  {latestArticle.title}
                </h2>
              </div>
            </div>
          </section>

          <div>
            <h1 className="text-4xl font-bold mb-10 px-10 text-left">Blog</h1>
            <p className="mb-10 px-10 text-left">
              Ici, nous partageons des conseils sur les plaques, des
              informations, des nouveautés et des histoires pour inspirer vos
              futures aventures.
            </p>
          </div>

          {/* ARTICLES */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {otherArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
