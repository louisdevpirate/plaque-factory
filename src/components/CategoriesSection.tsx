"use client";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Pour l'animation
import Image from "next/image";
import { CategoryItem } from "@/types/theme";

export default function Categories() {
  const theme = useTheme();
  const categories: CategoryItem[] = theme.categories.items;

  return (
    <section
      id="catégories"
      className="relative py-20 flex flex-col items-center bg-[url('/images/bg/bg4.png')] bg-cover border-t border-b"
    >
      <div className="badge badge-sm mb-4 rounded-2xl">
        <i className="fa fa-layer-group"></i> Catégories
      </div>
      <h2 className="font-light mb-8 text-center">
        Si vous avez un véhicule, nous avons la plaque.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 z-10">
        <AnimatePresence>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`relative rounded-xl overflow-hidden group shadow-md ${
                index === 0 || index === 5 || index === 6
                  ? "md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              }`}
            >
              <Image
                src={`/images/categories/${category.image}`}
                alt={category.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-12 left-2 w-32 h-32 rounded-full bg-yellow-300 opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-500 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-yellow-50/10 group-hover:bg-opacity-40 transition duration-300 cursor-pointer"></div>
              <div className="absolute bottom-3 left-3 text-white drop-shadow z-20">
                <h3 className="text-lg font-bold uppercase">
                  {category.title}
                </h3>
                <p className="text-sm">{category.sizes}cm</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Ajout de l'ombre blanche de transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white to-white pointer-events-none z-0" />
    </section>
  );
}
