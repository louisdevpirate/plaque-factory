"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { StarIcon } from "./Icons";

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      text: "Super service, jai commandé ma plaque d'immatriculation personnalisée directement en ligne, la qualité en plexiglass est top et l'expédition a été rapide. Je recommande à tout ceux qui veulent une plaque homologué et esthétique pour leur voiture.",
      author: "Yassine B",
      imgSrc: "/images/authors/yassine.avif"
    },
    {
      text: "Le configurateur est très simple et j'ai pu personnaliser ma plaque auto en quelques clics. Résultat impeccable, merci !",
      author: "Max VH",
      imgSrc: "/images/authors/max.avif"
    },
    {
      text: "Très satisfaite de mon achat sur labonneplaque.fr, j'avais besoin d'une plaque moto homologuée et personnalisée...le site est clair, les plaques conformes, et la livraison ultra rapide. Un site au top pour créer ses plaques d'immatriculation en ligne.",
      author: "Sabine Joliveau",
      imgSrc: "/images/authors/sabine.avif"
    },
    {
      text: "Site très intuitif ! J'ai pu créer ma plaque en quelques minutes, avec exactement le design que je voulais. Livraison rapide et produit conforme. Bravo !",
      author: "Julie Robert",
      imgSrc: "/images/authors/julie.avif"
    },
    {
      text: "Commande facile et rapide, plaque conforme à la législation et très bien emballée. Je recommande vivement.",
      author: "Nicolas B.",
      imgSrc: "/images/authors/nicolas.avif"
    },
    {
      text: "Enfin un site clair pour commander ses plaques ! Les options sont nombreuses, et le rendu final est top. Livraison en 48h comme promis.",
      author: "Camille Larcher",
      imgSrc: "/images/authors/camille.avif"
    },
    {
      text: "Très bon service client. J'avais fait une erreur de personnalisation, ils ont été réactifs et ont corrigé avant l'envoi. Résultat impeccable.",
      author: "Laurent TRZ",
      imgSrc: "/images/authors/laurent.avif"
    },
    {
      text: "Parfait du début à la fin. Le module de personnalisation est très bien fait, et les plaques sont de qualité premium.",
      author: "Chloé Desbois",
      imgSrc: "/images/authors/chloe.avif"
    },
    {
      text: "J'ai commandé pour mon van aménagé, et je suis ravi. La plaque donne un look unique. Tout était nickel.",
      author: "Axel T.",
      imgSrc: "/images/authors/axel.avif"
    },
    {
      text: "Service rapide, site ergonomique et prix compétitif. Rien à redire. Je repasserai par vous sans hésiter.",
      author: "Sophie Volard",
      imgSrc: "/images/authors/sophie.avif"
    }
  ];

  // Calculer le nombre de groupes de 3 reviews
  const totalGroups = Math.ceil(reviews.length / 3);
  
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
    <section className="w-full bg-white py-10 md:pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto md:text-center">
        <div className="badge badge-sm mb-4 rounded-2xl border-white/10 text-white">
          <StarIcon className="w-4 h-4"/><span>Avis</span>
        </div>
        <h2 className="text-left md:text-center">
          Ce que <span className="italic">nos clients</span> en disent
        </h2>
        <p className="mb-8 md:mb-12">
          Ils ont testé <span className="italic">La Bonne Plaque</span> et ils en parlent mieux que nous. <br />Qualité, rapidité...Découvrez leurs avis sans filtre !
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={scrollPrev}
            className="text-black p-2 border border-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-neutral-800 transition"
            aria-label="Avis précédent"
          >
            ←
          </button>
          
          <div className="text-sm text-gray-600">
            {currentIndex + 1} / {totalGroups}
          </div>
          
          <button
            onClick={scrollNext}
            className="text-black p-2 border border-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-neutral-800 transition"
            aria-label="Avis suivant"
          >
            →
          </button>
        </div>

        <div className="overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 snap-start">
                <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition ease-in-out h-[320px]">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.imgSrc}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full mr-3 w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{review.author}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow overflow-hidden">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
