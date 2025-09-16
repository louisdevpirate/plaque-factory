// app/blog/page.tsx
import { getCachedAllArticles } from "@/lib/supabase";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterOptimized from "@/components/FooterOptimized";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/Icons";
import BlogClientPage from "@/components/BlogClientPage";
import CTAButton from "@/components/CTAButton";
import CategoriesSectionWrapper from "@/components/CategoriesSectionWrapper";

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

      <main className="bg-white flex flex-col items-center">
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
                  <ClockIcon className="w-3 h-3" /> À la une
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-left max-w-3xl bg-black/50 p-1">
                  {latestArticle.title}
                </h2>
                <p className="mt-2 text-sm md:text-base max-w-3xl bg-black/50 p-1">
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
            <div className="mt-8 px-4">
              <h1 className="mb-2 text-left font-medium text-3xl">
                Ne roulez plus à côté de la plaque !
              </h1>
              <p className="mb-10 text-left max-w-4xl">
                Bienvenue sur le blog. Ici, on explore tous
                les sujets liés aux plaques d'immatriculation : conseils
                pratiques, points de législation, astuces de personnalisation,
                erreurs à éviter, ou encore comparatifs entre les matériaux
                comme le plexiglas et l'aluminium.
                <br />
                Que vous cherchiez à personnaliser votre véhicule, à comprendre
                les obligations légales ou simplement à faire le bon choix pour
                une plaque durable et conforme, ce blog est fait pour vous. Nos
                articles sont pensés pour répondre à vos questions, vous guider
                pas à pas et vous inspirer des idées qui vous ressemblent.{" "}
                <br />
                Notre objectif : vous aider à rouler en toute simplicité, avec
                style, conformité… et un brin d'originalité.
              </p>
              
              {/* Liens vers les catégories populaires */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-left">Découvrez nos catégories populaires :</h3>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/categories/moto" 
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    🏍️ Plaques Moto
                  </Link>
                  <Link 
                    href="/categories/us" 
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    🇺🇸 Plaques US
                  </Link>
                  <Link 
                    href="/categories/suv" 
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    🚙 Plaques SUV
                  </Link>
                  <Link 
                    href="/categories/collection" 
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    🏆 Collection
                  </Link>
                  <Link 
                    href="/plaques-personnalisees" 
                    className="inline-flex items-center px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-gray-100 hover:text-black transition-colors text-sm font-medium"
                  >
                    ✨ Personnalisées
                  </Link>
                </div>
              </div>
              
              {/* CTA vers le configurateur */}
              <div className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-center">
                <h3 className=" text-black mb-2">Besoin d'une nouvelle plaque ?</h3>
                <p className="text-black/80 mb-4">Personnalisez votre plaque d'immatriculation en quelques clics</p>
                <CTAButton
                  href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
                  variant="primary"
                  size="lg"
                  external
                  className="font-medium"
                >
                  Créer ma plaque maintenant
                </CTAButton>
              </div>
            </div>
            
            {/* ARTICLES AVEC BANNIÈRE CTA INTÉGRÉE */}
            <BlogClientPage articles={otherArticles} />
          </div>
        </div>
      </main>

      {/* Section Catégories */}
      <CategoriesSectionWrapper />

      <FooterOptimized />
    </div>
  );
}
