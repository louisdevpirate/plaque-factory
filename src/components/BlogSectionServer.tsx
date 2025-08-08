import Link from "next/link";
import { getCachedArticles } from "@/lib/supabase";
import BlogCarousel from "./BlogCarousel";
import { ArrowRightIcon, RssIcon } from "./Icons";

export default async function BlogSectionServer() {
  const articles = await getCachedArticles(5);

  return (
    <section
      id="blog"
      className="blog-section md:text-center bg-white py-10 md:pb-10 md:pt-14"
    >
      <div className="badge badge-sm mb-4 rounded-2xl text-white">
        <RssIcon className="w-3 h-3 text-white"/>Blog
      </div>
      <h2 className="text-left md:text-center">
        Le coin des <span className="italic">passionnés</span>
      </h2>
      <p className="max-w-2xl mx-auto mb-6">
        Découvrez nos astuces, histoires insolites et conseils pratiques autour
        des plaques d'immatriculation et du monde automobile. <br />
        Bonne lecture et bonne route !
      </p>
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <Link
            href="/blog"
            role="button"
            className="group bg-white border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Voir tous les articles{" "}
            <ArrowRightIcon className="w-4 h-4 transition duration-300 ease-in-out group-hover:-rotate-45" />
          </Link>
        </div>

        {articles.length > 0 ? (
          <BlogCarousel articles={articles} />
        ) : (
          <div className="text-center text-gray-500">
            <p>Aucun article disponible pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
