"use client";

import CTAButton from "./CTAButton";
import Link from "next/link";

interface ArticleCTAProps {
  articleTitle?: string;
  variant?: "primary" | "secondary";
}

export default function ArticleCTA({ 
  articleTitle = "cet article", 
  variant = "primary" 
}: ArticleCTAProps) {
  
  const ctaText = variant === "primary" 
    ? "Créer ma plaque maintenant" 
    : "Découvrir nos plaques";

  const ctaDescription = variant === "primary"
    ? "Créez votre plaque personnalisée en quelques clics seulement."
    : "Explorez nos différentes catégories de plaques d'immatriculation.";

  return (
    <section className="mx-auto my-12 text-center px-4 py-10 border-t bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
      <h2 className="mb-4">
        Besoin d'une nouvelle plaque ?
      </h2>
      <p className="text-gray-600 mb-6 text-md max-w-2xl mx-auto">
        {ctaDescription}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CTAButton
          href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
          variant="primary"
          size="lg"
          external
          className="font-medium"
        >
          {ctaText}
        </CTAButton>
        
        <CTAButton
          href="/#catégories"
          variant="secondary"
          size="lg"
          className="font-medium"
        >
          Voir nos catégories
        </CTAButton>
      </div>
      
      {/* Liens rapides vers les catégories populaires */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-3">Ou découvrez directement :</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/categories/moto" 
            className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
          >
            🏍️ Plaques Moto
          </Link>
          <Link 
            href="/categories/us" 
            className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
          >
            🇺🇸 Plaques US
          </Link>
          <Link 
            href="/categories/suv" 
            className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
          >
            🚙 Plaques SUV
          </Link>
          <Link 
            href="/categories/collection" 
            className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
          >
            🏆 Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
