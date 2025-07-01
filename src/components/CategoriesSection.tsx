'use client'
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ Pour l'animation
import Image from 'next/image';
import { CategoryItem } from '@/types/theme';

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const categories: CategoryItem[] = theme.categories.items;
  // ✅ Afficher seulement 3 catégories au départ
  const displayedCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <section id="catégories" className="categories-section text-center">
                        <div className="badge badge-sm mb-2 rounded-2xl"><i className="fa fa-layer-group"></i>Catégories</div>
      <h1 className="font-light mb-8">Catégories</h1>
      <div className="categories-grid">
        <AnimatePresence>
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: -20 }} // ✅ Animation d'apparition avec fondu
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} // ✅ Animation de disparition avec fondu
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Icône SVG */}
              <div className="category-icon transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={category.icon as string}
                  alt={category.title}
                  width={100}
                  height={30}
                />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <p><strong>Format :</strong> {category.sizes}cm</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ✅ Bouton dynamique Voir Plus / Voir Moins */}
      <div className="button-container">
        <motion.button
          className={`toggle-button ${showAll ? 'expanded' : ''}`}
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0 }} // ✅ Fondu à l'apparition du bouton
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {showAll ? "Voir Moins -" : "Voir Plus +"}
        </motion.button>
      </div>
    </section>
  );
}
