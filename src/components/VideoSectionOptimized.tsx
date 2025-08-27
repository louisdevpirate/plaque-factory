"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/Icons";
import { ArrowRightIcon } from "@/components/Icons";

export default function VideoSectionOptimized() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // triggerOnce manuel
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    setIsVideoLoaded(true);
    setIsPlaying(true);
  };

  return (
    <section className="py-10 md:py-16 text-left bg-white w-full border md:pb-12">
      <div className="max-w-3xl mx-auto md:flex flex-col justify-center">
        <div className="badge badge-sm mb-4 rounded-2xl mx-auto text-white">
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
      </div>

      <div
        ref={videoRef}
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
