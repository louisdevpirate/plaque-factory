"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import BlogCard from "@/components/BlogCard";
import type { Article } from "@/lib/supabase";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type BlogCarouselProps = {
  articles: Article[];
};

export default function BlogCarousel({ articles }: BlogCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <div className="mx-auto">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto mb-4 px-2 md:px-8 lg:px-6">
        <button
          onClick={scrollPrev}
          className="text-black p-2 border border-black w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-[100%] hover:bg-neutral-800 transition mx-2"
          aria-label="Article précédent"
        >
          <ChevronLeftIcon />
        </button>
        <div
          className="overflow-hidden w-full max-w-5xl md:max-w-2xl lg:max-w-5xl px-6"
          ref={emblaRef}
        >
          <div className="flex gap-5">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
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
      <div className="embla-dots mt-6 flex justify-center items-center gap-4">
        {articles.map((_, index) => (
          <button
            title="Boutons de slider"
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-1 h-1 rounded-full transition-colors ${
              selectedIndex === index ? "bg-black/10 w-4 h-2" : "bg-gray-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
