"use client";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import BlogCTABanner from "@/components/BlogCTABanner";

type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
};

export default function BlogClientPage({ articles }: { articles: Article[] }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const displayedArticles = sortedArticles.slice(0, visibleCount);

  return (
    <main className="bg-white pb-10 flex flex-col items-center">
      <div className="grid col-1 md:col-2 items-center px-2 py-2 max-w-6xl">
        {/* HERO */}
        {/* 👉 à insérer comme dans ton ancien fichier */}
        {/* ... */}

        {/* ARTICLES */}
        <section className="flex flex-col gap-6 max-w-6xl w-full px-4">
          {/* Premiers articles */}
          <div className="flex flex-col gap-6">
            {/* Ligne avec 2 articles */}
            <div className="grid sm:grid-cols-2 gap-6">
              {displayedArticles.slice(0, 2).map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
            {/* Ligne avec 3 articles */}
            <div className="grid lg:grid-cols-3 gap-6">
              {displayedArticles.slice(2, 5).map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Bannière CTA après les premiers articles */}
          </div>
          
          {/* Articles restants */}
          {displayedArticles.length > 5 && (
            <div className="flex flex-col gap-6">
              {Array.from({ length: Math.ceil((displayedArticles.length - 5) / 5) }).map(
                (_, groupIndex) => {
                  const startIndex = 5 + groupIndex * 5;
                  const groupArticles = displayedArticles.slice(
                    startIndex,
                    startIndex + 5
                  );

                  return (
                    <div key={groupIndex} className="flex flex-col gap-6">
                      {/* Ligne avec 2 articles */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        {groupArticles.slice(0, 2).map((article) => (
                          <BlogCard key={article.id} article={article} />
                        ))}
                      </div>
                      {/* Ligne avec 3 articles */}
                      <div className="grid lg:grid-cols-3 gap-6">
                        {groupArticles.slice(2).map((article) => (
                          <BlogCard key={article.id} article={article} />
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </section>

        {visibleCount < sortedArticles.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 7)}
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
