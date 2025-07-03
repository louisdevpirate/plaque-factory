"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "@/components/BlogCard";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
  };

  return (
    <section id="blog" className="blog-section text-center bg-white pb-40">
      <div className="badge badge-sm mb-6 rounded-2xl">
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
            Voir tous les articles <i className="fa fa-arrow-right -rotate-45"></i>
          </Link>
        </div>

        <div className="slider-container relative max-w-6xl mx-auto">
          <Slider {...settings} className="blog-slider">
            {articles.map((article) => (
              <BlogCard
                key={article.id}
                article={{ ...article, category: article.category?.[0] }}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
