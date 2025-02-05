'use client'
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ Pour l'animation

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const categories = theme.categories.items;

  // ✅ Afficher seulement 4 catégories au départ
  const displayedCategories = showAll ? categories : categories.slice(0, 4);

  return (
    <section id="categories" className="categories-section">
      <h2 className="categories-title">Nos Formats</h2>
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
              <div className="category-icon">
                <img src={`/icons/${category.id}.svg`} alt={category.title} />
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
          {showAll ? "Voir Moins ⬆️" : "Voir Plus ⬇️"}
        </motion.button>
      </div>
    </section>
  );
}
