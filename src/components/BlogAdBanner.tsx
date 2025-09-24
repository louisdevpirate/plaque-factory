"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogAdBanner() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Image de plaque */}
        <div className="flex-shrink-0">
          <Image
            src="/images/carousel/optimized/plaque1.webp"
            alt="Plaque personnalisée exemple"
            width={80}
            height={50}
            className="rounded object-cover"
            quality={90}
          />
        </div>
        
        {/* Contenu */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Créez votre plaque personnalisée
          </h3>
          <p className="text-xs text-gray-600 mb-2">
            Design unique • Livraison 24h • Satisfait ou remboursé
          </p>
        </div>
        
        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white border border-black text-black text-sm font-medium rounded hover:bg-yellow-400 transition-colors hover:text-black"
          >
            Créer ma plaque
          </Link>
        </div>
      </div>
    </div>
  );
}

