import { getAllArticles, getArticleBySlug } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogCard from "@/components/BlogCard"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import ReactMarkdown from "react-markdown"

type Props = {
  params: { slug: string }
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
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

export default async function BlogPage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return notFound()

  const allArticles = await getAllArticles()
  const otherArticles = allArticles.filter(a => a.slug !== params.slug).slice(0, 3)

  return (
    <div>
      <Navbar forceScrolled={true} />

      <main className="bg-gray-50 py-10 md:py-40">
        <div className="max-w-3xl mx-auto px-4">
          <section className="mb-20">
            <h1 className="text-4xl font-bold mb-10">{article.title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Publié par {article.author.name}</p>
                <p className="text-sm font-light">{article.author.bio}</p>
                <p className="text-xs text-gray-500">{new Date(article.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg w-full mb-6"
            />
            <p className="text-lg text-gray-700 mb-6">{article.description}</p>
            <div className="prose prose-lg text-left leading-relaxed [&_h3]:text-left [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:leading-snug">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">À lire aussi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <div className="text-center mt-10">
            <Link href="/" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Retour à la homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
