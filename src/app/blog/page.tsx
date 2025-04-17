// app/blog/page.tsx
import { getAllArticles } from "@/lib/articles";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const articles = await getAllArticles();
  if (!articles || articles.length === 0)
    return <p>Aucun article pour le moment.</p>;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const latestArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  return (
    <div>
      <Navbar forceScrolled={true} />

      <main className="bg-white pb-20">
        <div className="blog-grid mx-auto px-2 py-2">
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
              />
              <div className="absolute bottom-0 left-0 w-full text-white p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-left max-w-5xl">
                  {latestArticle.title}
                </h2>
                <p className="mt-3 text-lg max-w-4xl">{latestArticle.description}</p>
              </div>
            </div>
          </Link>

          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-2 px-10 text-left">Blog</h1>
            <p className="mb-10 px-10 text-left max-w-5xl text-gray-500">
              Roulez curieux : ici, on explore l’univers des <strong>plaques d’immatriculation</strong>, sous toutes ses coutures. <strong>Conseils de pose</strong>, <strong>législation</strong> à connaître, idées de <strong>personnalisation</strong> stylées, erreurs fréquentes, ou encore astuces pour choisir la bonne matière (<strong>plexi</strong>, <strong>alu</strong>)… Ce blog est votre copilote pour rouler <strong>en toute légalité</strong>, avec <strong>style</strong> et <strong>originalité</strong>. Que vous soyez <strong>amateur de voitures anciennes</strong>, <strong>passionné de tuning</strong> ou simplement soucieux de <strong>bien faire</strong>, vous êtes au bon endroit.
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
  );
}
