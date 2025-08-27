"use client";

import { useState, useRef } from "react";
import BlogCard from "@/components/BlogCard";
import type { Article } from "@/lib/supabase";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type BlogCarouselProps = {
  articles: Article[];
};

export default function BlogCarousel({ articles }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Calculer le nombre de groupes (3 articles par groupe)
  const totalGroups = Math.ceil(articles.length / 3);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    const scrollPosition = index * cardWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const scrollPrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalGroups - 1;
    scrollToIndex(newIndex);
  };

  const scrollNext = () => {
    const newIndex = currentIndex < totalGroups - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto mb-4 px-2 md:px-8 lg:px-6">
        <button
          onClick={scrollPrev}
          className="text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-[100%] hover:bg-neutral-800 transition mx-2"
          aria-label="Article précédent"
        >
          <ChevronLeftIcon />
        </button>
        
        <div className="overflow-hidden w-full max-w-5xl md:max-w-2xl lg:max-w-5xl px-6">
          <div 
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 snap-start"
              >
                <BlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={scrollNext}
          className="text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center mx-2 rounded-[100%] hover:bg-neutral-800 transition"
          aria-label="Article suivant"
        >
          <ChevronRightIcon />
        </button>
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-6">
        {Array.from({ length: totalGroups }, (_, index) => (
          <button
            title="Boutons de slider"
            key={index}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-black w-4 h-2" : "bg-gray-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
