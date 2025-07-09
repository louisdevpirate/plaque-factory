import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getCachedArticles } from "@/lib/supabase";
import BlogCarousel from "./BlogCarousel";

export default async function BlogSectionServer() {
  const articles = await getCachedArticles(5);

  return (
    <section id="blog" className="blog-section md:text-center bg-white py-10 md:pb-20 md:pt-14">
      <div className="badge badge-sm mb-4 rounded-2xl">
        <i className="fa fa-rss"></i>Blog
      </div>
      <h2 className="text-left md:text-center">
        Le coin des <span className="text-[#FFD713]">passionnés</span>
      </h2>
      <p className="max-w-2xl mx-auto mb-12">
        Découvrez nos astuces, histoires insolites et conseils pratiques autour des plaques
        d'immatriculation et du monde automobile. <br />
        Bonne lecture et bonne route !
      </p>
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <Link
            href="/blog"
            role="button"
            className="bg-white border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Voir tous les articles{" "}
            <i className="fa fa-arrow-right -rotate-45"></i>
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