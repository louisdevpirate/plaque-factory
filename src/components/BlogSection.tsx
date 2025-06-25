"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
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
        .select("id, slug, title, description, image, category:categoryId(name)")
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
    <section id="blog" className="blog-section">
      <Image
        className="mx-auto pb-8"
        src="images/blog.svg"
        alt=""
        width={200}
        height={200}
      />
      <div className="mx-auto">
        <div className="flex-column justify-center items-center mb-10 text-center">
          <Link href="/blog" className="blog-see-more">
            Voir plus →
          </Link>
        </div>

        <div className="slider-container relative max-w-6xl mx-auto">
          <Slider {...settings} className="blog-slider">
            {articles.map((article) => (
              <BlogCard key={article.id} article={{ ...article, category: article.category?.[0] }} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
