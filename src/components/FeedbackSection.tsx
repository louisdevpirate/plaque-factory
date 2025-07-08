"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function FeedbackSection() {
  const reviews = [
    {
      text: "Super service, jai commandé ma plaque d’immatriculation personnalisée directement en ligne, la qualité en plexiglass est top et l’expédition a été rapide. Je recommande à tout ceux qui veulent une plaque homologué et esthétique pour leur voiture.",
      author: "Yassine H.",
      imgSrc: "/images/authors/yassine.avif"
    },
    {
      text: "Le configurateur est très simple et j’ai pu personnaliser ma plaque auto en quelques clics. Résultat impeccable, merci !",
      author: "Max VH",
      imgSrc: "/images/authors/max.avif"
    },
    {
      text: "Très satisfaite de mon achat sur labonneplaque.fr, j’avais besoin d’une plaque moto homologuée et personnalisée...le site est clair, les plaques conformes, et la livraison ultra rapide. Un site au top pour créer ses plaques d’immatriculation en ligne.",
      author: "Sabine Joliveau",
      imgSrc: "/images/authors/sabine.avif"
    },

  ];

  return (
    <section className="w-full bg-white py-10 md:pt-14 md:pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto lg:text-center">
        <div className="badge badge-sm mb-4 rounded-2xl border-white/10">
          <i className="fa fa-star"></i>Avis
        </div>
        <h2 className="text-left lg:text-center">
          Ce que <span className="text-[#FFD713] ">nos clients</span> en disent
        </h2>
        <p className="mb-8 md:mb-12">
          Ils ont testé <span className="italic">La Bonne Plaque</span> et ils en parlent mieux que nous. <br />Qualité, rapidité...Découvrez leurs avis sans filtre !
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition ease-in-out min-h-[250px]">
              <div className="flex items-center mb-4">
                <div className="avatar">
                  <div className="w-12 h-12 relative rounded-full ring ring-gray-200 ring-offset-2 overflow-hidden">
                    <Image
                      src={review.imgSrc}
                      alt={review.author}
                      fill
                      sizes="48px"
                      loading="lazy"
                      className="object-cover rounded-full"
                    />
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
              <p className="text-gray-600 text-sm line-clamp-5">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
