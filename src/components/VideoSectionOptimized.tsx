"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { PlayIcon } from "@/components/Icons";
import { ArrowRightIcon } from "@/components/Icons";

export default function VideoSectionOptimized() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handlePlayClick = () => {
    setIsVideoLoaded(true);
    setIsPlaying(true);
  };

  return (
    <section className="py-10 md:py-16 text-left bg-white w-full">
      <div className="max-w-3xl mx-auto md:flex flex-col justify-center">
        <div className="badge badge-sm mb-4 rounded-2xl mx-auto">
          <PlayIcon className="w-3 h-3" />
          <span>Vidéo</span>
        </div>
        <h2 className="text-left md:text-center lg:max-w-lg mx-auto">
          Découvrez notre
          <span className="italic"> savoir-faire</span> en action
        </h2>
        <p className="text-gray-600 mx-auto mb-8 text-left md:text-center">
          Chaque commande est préparée avec précision et passion pour vous
          fabriquer une plaque d'immatriculation conforme, stylée et prête à
          poser sans prise de tête.
        </p>{" "}
        <a
          href="#personnalisation"
          className="group bg-yellow-400 text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-flex justify-center items-center px-6 border-2 border-black hover:text-black w-full md:w-fit gap-2 cta-faq mx-auto mb-10"
          title="Créer ma plaque personnalisée maintenant"
        >
          Créer ma plaque dés maintenant
          <ArrowRightIcon className="inline w-4 h-4 ml-2 cta-arrow-faq transform transition-transform duration-300 group-hover:-rotate-90" />
        </a>
      </div>

      <div
        ref={ref}
        className="overflow-hidden rounded-2xl shadow-md border border-gray-200 p-1 mx-auto relative aspect-video w-full max-w-4xl"
      >
        {!isVideoLoaded ? (
          <>
            <Image
              src="/images/video-poster.webp"
              alt="Aperçu de notre processus de fabrication"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              className="object-cover rounded-xl"
              priority={false}
              loading="lazy"
              quality={85}
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
              aria-label="Lire la vidéo de présentation"
            >
              <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                <PlayIcon className="w-12 h-12 text-gray-800" />
              </div>
            </button>
          </>
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={isPlaying}
            className="rounded-xl shadow-lg w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
          >
            <source src="/videos/ugc-optimized.webm" type="video/webm" />
            <source src="/videos/ugc-optimized.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge cette vidéo...
          </video>
        )}
      </div>
    </section>
  );
}
