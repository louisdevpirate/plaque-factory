import { getCachedArticles } from "@/lib/supabase";
import BlogCarousel from "./BlogCarousel";
import { RssIcon } from "./Icons";
import BlogCTA from "./BlogCTA";

export default async function BlogSectionServer() {
  const articles = await getCachedArticles(5);

  return (
    <section
      id="blog"
      className="blog-section md:text-center bg-white py-10 md:pb-10 md:pt-14"
    >
      <div className="badge badge-sm mb-4 rounded-2xl text-white">
        <RssIcon className="w-3 h-3 text-white" />
        Blog
      </div>
      <h2 className="text-left md:text-center">
        Le coin des <span className="italic">passionnés</span>
      </h2>
      <p className="max-w-2xl mx-auto mb-6">
        Découvrez nos astuces, histoires insolites et conseils pratiques autour
        des plaques d'immatriculation et du monde automobile. <br />
        <strong>
          Après chaque article, créez votre plaque personnalisée dès 15€ !
        </strong>
      </p>
      <div className="mx-auto">
        <BlogCTA />

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
