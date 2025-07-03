// app/blog/page.tsx
import { getAllArticles } from "@/lib/articles";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface BlogPageProps {
  searchParams?: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const articles = await getAllArticles();
  if (!articles || articles.length === 0)
    return <p>Aucun article pour le moment.</p>;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const latestArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  const page = parseInt(searchParams?.page || "1", 10);
  const visibleCount = page * 7;

  return (
    <div>
      <Navbar />

      <main className="bg-white pb-20 flex flex-col items-center">
        <div className="blog-grid flex flex-col items-center px-2 py-2 max-w-6xl pt-20">
          {/* HERO */}
          <Link
            href={`/blog/${latestArticle.slug}`}
            className="featured-article relative w-full rounded-lg shadow-lg overflow-hidden"
          >
            <div className="featured-article relative w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src={latestArticle.image}
                alt={latestArticle.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
                quality={50}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
              />
              <div className="absolute bottom-0 left-0 w-full text-white p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-left max-w-5xl">
                  {latestArticle.title}
                </h2>
                <p className="mt-3 text-lg max-w-4xl">
                  {latestArticle.description}
                </p>
              </div>
            </div>
          </Link>

          <div>
            <div className="mt-8">
              <h1 className="text-4xl font-bold mb-2 text-left">Blog</h1>
              <p className="mb-10 text-left max-w-5xl text-gray-500">
                Roulez curieux : ici, on explore l’univers des{" "}
                <strong>plaques d’immatriculation</strong>, sous toutes ses
                coutures. <strong>Conseils de pose</strong>,{" "}
                <strong>législation</strong> à connaître, idées de{" "}
                <strong>personnalisation</strong> stylées, erreurs fréquentes,
                ou encore astuces pour choisir la bonne matière (
                <strong>plexi</strong>, <strong>alu</strong>)… Ce blog est votre
                copilote pour rouler <strong>en toute légalité</strong>, avec{" "}
                <strong>style</strong> et <strong>originalité</strong>. Que vous
                soyez <strong>amateur de voitures anciennes</strong>,{" "}
                <strong>passionné de tuning</strong> ou simplement soucieux de{" "}
                <strong>bien faire</strong>, vous êtes au bon endroit.
              </p>
            </div>

            {/* ARTICLES */}
            <section className="flex flex-col gap-6 max-w-6xl w-full">
              {Array.from({ length: Math.ceil(visibleCount / 7) }).map(
                (_, index) => {
                  const startIndex = index * 7;
                  const slice = otherArticles.slice(startIndex, startIndex + 7);
                  return (
                    <div key={index} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {slice.slice(0, 2).map((article) => (
                          <BlogCard key={article.id} article={article} />
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        {slice.slice(2, 5).map((article) => (
                          <BlogCard key={article.id} article={article} />
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {slice.slice(5, 7).map((article) => (
                          <BlogCard key={article.id} article={article} />
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </section>

            {visibleCount < otherArticles.length && (
              <div className="flex justify-center mt-8">
                <Link
                  href={`/blog?page=${page + 1}`}
                  className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Voir plus
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
