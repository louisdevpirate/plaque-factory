"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CategoryItem } from "@/types/theme";
import { useState, useEffect, memo } from "react";
import { defaultTheme } from "@/config/themes/default.theme";
import { CategoryIcon } from "./Icons";
import Link from "next/link";

// Lazy load framer-motion Motion.div
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  }
);

function Categories() {
  const categories: CategoryItem[] = defaultTheme.categories.items;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="catégories"
      className="relative py-10 md:py-14 flex flex-col items-start md:items-center bg-[url('/images/bg/bg.webp')] bg-cover border-t border-b text-white"
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="md:flex flex-col justify-center z-10">
        <div className="badge badge-sm mb-4 rounded-2xl mx-auto border-white/30">
          <CategoryIcon className="w-3 h-3" />
          <span>Catégories</span>
        </div>
        <h2 className="text-left md:text-center">
          On a la plaque <br />
          <span className="italic">qu'il vous faut</span>
        </h2>
        <p className="md:text-center mb-4 md:mb-8 max-w-2xl">
          Si ça roule, on a la plaque d'immatriculation qui va avec. Parcourez
          nos catégories et trouvez la plaque parfaite pour votre véhicule, en
          quelques clics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto z-10 mt-4">
        {categories.map((category, index) => {
          let colSpan = "col-span-1";
          if (index === 0 || index === 5 || index === 6) {
            colSpan = "lg:col-span-2";
          }

          const Wrapper = isVisible ? MotionDiv : "div";

          return (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className={colSpan}
            >
              <Wrapper
                className="relative rounded-xl overflow-hidden group shadow-md"
                {...(isVisible
                  ? {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 20 },
                      transition: { duration: 0.4, ease: "easeInOut" },
                    }
                  : {})}
              >
                <Image
                  src={`/images/categories/${category.image}`}
                  alt={category.title}
                  width={400}
                  height={240}
                  quality={60}
                  loading="lazy"
                  className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-20 bg-black/20 group-hover:bg-white/10 group-hover:bg-opacity-60 transition pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 text-white drop-shadow z-20">
                  <h3 className="text-xl text-left font-bold uppercase">
                    {category.title}
                  </h3>
                  <p className="text-sm">{category.sizes}cm</p>
                </div>
              </Wrapper>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Categories);