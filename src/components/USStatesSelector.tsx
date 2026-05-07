"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubCategory, SubCategoryVariation } from "@/types/category";
import { getPersonnalizationUrl } from "@/lib/personnalizationUrls";

interface USStatesSelectorProps {
  states: SubCategory[];
}

export default function USStatesSelector({ states }: USStatesSelectorProps) {
  const [selectedState, setSelectedState] = useState<SubCategory | null>(null);
  const [showVariations, setShowVariations] = useState(false);
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge badge-sm mb-4 rounded-2xl border-gray-300 text-gray-700 bg-white">
            🇺🇸 États américains
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre <span className="italic">État</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sélectionnez l'état américain de votre choix pour personnaliser votre plaque 
            avec le style authentique de votre région préférée.
          </p>
        </div>

        {/* Grille des états */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {states.map((state, index) => (
            <div
              key={state.slug}
              className="group cursor-pointer"
              onClick={() => {
                if (state.variations && state.variations.length > 0) {
                  setSelectedState(state);
                  setShowVariations(true);
                } else {
                  window.open(getPersonnalizationUrl(state.code), '_blank');
                }
              }}
              title={`Créer une plaque ${state.title}`}
            >
              <div 
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image de fond avec drapeau/écusson de l'état */}
                <div className="aspect-square relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-gray-100"
                    style={{
                      backgroundImage: `url(${state.image})`,
                    }}
                  >
                    {/* Overlay pour améliorer la lisibilité */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  {/* Nom de l'état */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-bold text-sm md:text-base text-center">
                      {state.title}
                    </h3>
                    {state.variations && state.variations.length > 0 && (
                      <p className="text-white text-xs text-center opacity-80">
                        {state.variations.length + 1} variations
                      </p>
                    )}
                  </div>

                  {/* Badge de prix */}
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      À partir de 15€
                    </span>
                  </div>

                  {/* Indicateur de variations */}
                  {state.variations && state.variations.length > 0 && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {state.variations.length + 1}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description au survol */}
                <div className="p-3 bg-white">
                  <p className="text-xs text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                    {state.description}
                  </p>
                  {state.variations && state.variations.length > 0 && (
                    <p className="text-xs text-blue-600 text-center mt-1 font-medium">
                      Cliquez pour voir les variations
                    </p>
                  )}
                </div>

                {/* Effet de survol */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400 rounded-xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA général */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre état ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour créer une plaque personnalisée avec le style de votre état américain préféré.
            </p>
            <Link
              href={getPersonnalizationUrl('1275')} // Code général US
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Créer une plaque US personnalisée
            </Link>
          </div>
        </div>
      </div>

      {/* Modal des variations */}
      {showVariations && selectedState && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Header du modal */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Variations disponibles - {selectedState.title}</h3>
                <button
                  onClick={() => setShowVariations(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-orange-100 mt-2">
                Choisissez la variation de plaque qui vous convient le mieux
              </p>
            </div>

            {/* Contenu du modal */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-4">
                {/* Variation principale */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedState.title}</h4>
                      <p className="text-sm text-gray-600">{selectedState.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Code: {selectedState.code}</p>
                    </div>
                    <Link
                      href={getPersonnalizationUrl(selectedState.code)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      onClick={() => setShowVariations(false)}
                    >
                      Choisir
                    </Link>
                  </div>
                </div>

                {/* Variations supplémentaires */}
                {selectedState.variations?.map((variation, index) => (
                  <div key={variation.slug} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{variation.name}</h4>
                        <p className="text-sm text-gray-600">Variation {index + 2} de {selectedState.title}</p>
                        <p className="text-xs text-gray-500 mt-1">Code: {variation.code}</p>
                      </div>
                      <Link
                        href={getPersonnalizationUrl(variation.code)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        onClick={() => setShowVariations(false)}
                      >
                        Choisir
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer du modal */}
            <div className="bg-gray-50 p-4 border-t">
              <p className="text-sm text-gray-600 text-center">
                Toutes les plaques sont homologuées et livrées rapidement
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
