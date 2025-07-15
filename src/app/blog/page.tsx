// app/blog/page.tsx
import { getCachedAllArticles } from "@/lib/supabase";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { Clock } from "lucide-react";
import { ArrowRightIcon } from "@/components/Icons";
import BlogClientPage from "@/components/BlogClientPage";

// Remove force-dynamic to enable caching
export const revalidate = 3600; // Revalidate every hour

interface BlogPageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const articles = await getCachedAllArticles();
  if (!articles || articles.length === 0)
    return <p>Aucun article pour le moment.</p>;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const latestArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  const pageParam = resolvedSearchParams?.page;
  const page = parseInt(
    Array.isArray(pageParam) ? pageParam[0] : pageParam ?? "1",
    10
  );
  const visibleCount = page * 7;

  return (
    <div>
      <Navbar />

      <main className="bg-white pb-20 flex flex-col items-center">
        <div className="blog-grid flex flex-col items-center px-2 py-2 max-w-6xl pt-20">
          {/* HERO */}
          <Link
            href={`/blog/${latestArticle.slug}`}
            className="featured-article relative w-full h-[280px] md:h-[360px] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="featured-article relative w-full h-[280px] md:h-[360px] rounded-lg shadow-lg overflow-hidden">
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
                <div className="badge badge-sm mb-4 rounded-2xl border border-white/30">
                  <Clock size={16} /> À la une
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-left max-w-3xl bg-black/50">
                  {latestArticle.title}
                </h2>
                <p className="mt-2 text-sm md:text-base max-w-3xl bg-black/50">
                  {latestArticle.description}
                </p>
                <div className="mt-auto">
                  <span className="group/button inline-block w-full text-center py-2 text-sm font-medium text-white">
                    <span className="flex items-center gap-1 text-white transition-all duration-300 hover:text-gray-500 bg-black py-4 px-4 rounded-md w-fit mt-4">
                      En Savoir Plus <ArrowRightIcon />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div>
            <div className="mt-8">
              <h1 className="mb-2 text-left font-medium">
                Ne roulez plus à côté de la plaque !
              </h1>
              <p className="mb-10 text-left max-w-4xl">
                Bienvenue sur le blog de labonneplaque.fr. Ici, on explore tous
                les sujets liés aux plaques d'immatriculation : conseils
                pratiques, points de législation, astuces de personnalisation,
                erreurs à éviter, ou encore comparatifs entre les matériaux
                comme le plexiglas et l’aluminium.
                <br />
                Que vous cherchiez à personnaliser votre véhicule, à comprendre
                les obligations légales ou simplement à faire le bon choix pour
                une plaque durable et conforme, ce blog est fait pour vous. Nos
                articles sont pensés pour répondre à vos questions, vous guider
                pas à pas et vous inspirer des idées qui vous ressemblent.{" "}
                <br />
                Notre objectif : vous aider à rouler en toute simplicité, avec
                style, conformité… et un brin d’originalité.
              </p>
            </div>
            {/* ARTICLES */}{" "}
              <BlogClientPage articles={otherArticles} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
