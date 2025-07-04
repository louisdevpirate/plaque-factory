"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import BlogCard from "@/components/BlogCard";

// 🪐 Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  return (
    <section id="blog" className="blog-section text-center bg-white pb-40">
      <div className="badge badge-sm mb-2 rounded-2xl">
        <i className="fa fa-rss"></i>Blog
      </div>
      <h2>Des trucs et d'autres</h2>
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <Link
            href="/blog"
            role="button"
            className="bg-white border border-black text-black hover:bg-white hover:text-black transition-colors duration-200 px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Voir tous les articles{" "}
            <i className="fa fa-arrow-right -rotate-45"></i>
          </Link>
        </div>

        <div className="mx-auto">
          <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto mb-4 px-2 md:px-8 lg:px-6">
            <button className="swiper-button-prev-custom text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-[100%] hover:bg-neutral-800 transition mx-2">
              <i className="fa fa-arrow-left"></i>
            </button>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              loop
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full max-w-5xl md:max-w-2xl lg:max-w-5xl px-6"
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id} className="mb-8">
                  <BlogCard
                    article={{ ...article, category: article.category?.[0] }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-next-custom text-black p-2 border border-black  w-6 h-6  md:w-10 md:h-10 flex justify-center items-center mx-2 rounded-[100%] hover:bg-neutral-800 transition">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
For custom dot styling, add the following to your global CSS file:

.swiper-pagination-bullet {
  @apply bg-neutral-400 !important;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active {
  @apply bg-black !important;
}

*/
