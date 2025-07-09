"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import BlogCard from "@/components/BlogCard";

// 🪐 Embla Carousel imports
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category?: {
    name: string;
  }[];
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BlogSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("Article")
        .select(
          "id, slug, title, description, image, category:categoryId(name)"
        )
        .order("createdAt", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Erreur Supabase :", error);
        return;
      }
      console.log("Articles récupérés depuis Supabase ➜", data);
      setArticles(data || []);
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="blog" className="blog-section md:text-center bg-white py-10 md:pb-20 md:pt-14">
      <div className="badge badge-sm mb-4 rounded-2xl">
        <i className="fa fa-rss"></i>Blog
      </div>
      <h2 className="text-left md:text-center">Le coin des <span className="text-[#FFD713]">passionnés</span></h2>
      <p className="max-w-2xl mx-auto mb-12">Découvrez nos astuces, histoires insolites et conseils pratiques autour des plaques d’immatriculation et du monde automobile. <br />Bonne lecture et bonne route !</p> 
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

        <div className="mx-auto">
          <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto mb-4 px-2 md:px-8 lg:px-6">
            <button 
              onClick={scrollPrev}
              className="text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-[100%] hover:bg-neutral-800 transition mx-2"
            >
              <i className="fa fa-arrow-left"></i>
            </button>
            <div className="overflow-hidden w-full max-w-5xl md:max-w-2xl lg:max-w-5xl px-6" ref={emblaRef}>
              <div className="flex gap-5">
                {articles.map((article) => (
                  <div key={article.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                    <BlogCard
                      article={{ ...article, category: article.category?.[0] }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={scrollNext}
              className="text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center mx-2 rounded-[100%] hover:bg-neutral-800 transition"
            >
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {articles.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-black" : "bg-neutral-400"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

