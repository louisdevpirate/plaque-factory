"use client";

import React from "react";

export default function FeedbackSection() {
  const reviews = [
    {
      text: "Super service, jai commandé ma plaque d’immatriculation personnalisée directement en ligne, la qualité en plexiglass est top et l’expédition a été rapide. Je recommande à tout ceux qui veulent une plaque homologué et esthétique pour leur voiture.",
      author: "Yassine H.",
      imgSrc: "/images/authors/yassine.jpg"
    },
    {
      text: "Le configurateur est très simple et j’ai pu personnaliser ma plaque auto en quelques clics. Résultat impeccable, merci !",
      author: "Max VH",
      imgSrc: "/images/authors/max.jpg"
    },
    {
      text: "Très satisfaite de mon achat sur labonneplaque.fr, j’avais besoin d’une plaque moto homologuée et personnalisée...le site est clair, les plaques conformes, et la livraison ultra rapide. Un site au top pour créer ses plaques d’immatriculation en ligne.",
      author: "Sabine Joliveau",
      imgSrc: "/images/authors/sabine.jpg"
    }
  ];

  return (
    <section className="w-full bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
                 <div className="badge badge-sm mb-2 rounded-2xl">
        <i className="fa fa-star"></i>Avis
      </div>
        <h2 className="">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-600 mb-12">
          Découvrez les avis de nos clients satisfaits, qui ont choisi La Bonne Plaque pour la qualité, la rapidité et le style.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-gray-200 ring-offset-2">
                  <img src={review.imgSrc} alt={review.author} />
                </div>
              </div>
              <div className="text-left ml-3">
                <p className="text-sm text-gray-700 font-semibold">{review.author}</p>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              "{review.text}"
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
