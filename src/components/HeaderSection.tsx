"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useThrottle } from "@/hooks/useThrottle";
import { MedalIcon } from "@/components/Icons";
import CTAButton from "@/components/CTAButton";
import CTAContainer from "@/components/CTAContainer";

export default function HeaderSection() {
  const [, setIsHovered] = useState(false);

  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const layers = parallaxRef.current?.querySelectorAll("[data-depth]");
    layers?.forEach((layer) => {
      const depth = parseFloat(layer.getAttribute("data-depth") || "0");
      const translateY = scrollY * depth * 0.2;
      (
        layer as HTMLElement
      ).style.transform = `translateY(${translateY}px) scale(1.1)`;
    });
  }, []);

  const throttledHandleScroll = useThrottle(handleScroll, 16); // 60fps

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [throttledHandleScroll]);

  const handleAffiliationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Envoi de l'événement GA4
    window.gtag?.('event', 'click_affiliation', {
      event_category: 'Affiliation',
      event_label: 'Lien vers module complet',
    });

    // Redirection après un léger délai
    setTimeout(() => {
      window.location.href = 'https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn';
    }, 300);
  };

  return (
    <>

      <header className="relative pt-20 pb-10 md:py-28 items-center bg-white bg-cover bg-center">
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto min-w-80">
          <div className="text-left lg:w-1/2 space-y-4 pt-6">
            <div className="inline-flex items-center border border-black rounded-full px-2 py-0.5 text-[10px] text-sm bg-white w-fit bg-white/80 backdrop-blur-sm ml-1">
              <Image
                src="/images/icons/france-flag.webp"
                alt="fabrication plaques françaises"
                width={16}
                height={16}
                className="rounded-full mr-2"
              />
              <span>Fabrication française</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium text-left">
              Créez votre plaque d'immatriculation personnalisée
              <span className="text-2xl text-green-600 block mt-2 font-medium p-2">À partir de 15,00€</span>
            </h1>

            <div className="w-5/6 mb-2 ml-2">
              <p className="text-sm lg:text-base font-light">
                Choisissez facilement votre style, votre format et vos options
                pour créer une plaque homologuée et personnalisée adaptée à
                votre véhicule.
                Livraison rapide, qualité professionnelle <br />
                <span className="font-bold">
                  {" "}
                  — le tout en quelques clics.
                </span>
              </p>
              <p className="mt-4 text-xs mb-6">
                <MedalIcon className="inline w-4 h-4 mr-1" /> Partenaire officiel de{" "}
                <a
                  href="https://plaqueimmat.fr/?aff=9c7pyekcpurn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-yellow-300 transition"
                  title="Voir le site de notre partenaire PlaqueImmat.fr"
                >
                  PlaqueImmat.fr
                </a>
              </p>
              <a
                href="https://www.avis-verifies.com/avis-clients/plaqueimmat.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mt-1 mb-8 hover:text-current"
                title="Lire les avis vérifiés sur PlaqueImmat.fr"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/trust.webp"
                      alt="Trustpilot star"
                      className="hover:scale-105 w-6 h-6"
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                  ))}
                  <span className="text-lg font-semibold ml-2">4.7</span>
                  <span className="text-sm">(255)</span>
                  <span className="text-sm font-medium ml-1">Excellent</span>
                  <Image
                    src="/images/avis.webp"
                    alt="logo avis vérifiés plaque immatriculation"
                    className="hover:scale-105"
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            </div>

            <CTAContainer direction="row" gap="sm" className="cta-container flex flex-col md:flex-row items-left justify-left p-0" center={false}>
              <CTAButton
                href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
                variant="primary"
                size="lg"
                title="Créer ma plaque personnalisée maintenant"
                className="header-cta"
              >
                Commander ma plaque
              </CTAButton>
            </CTAContainer>
          </div>

          <div
            ref={parallaxRef}
            className="relative w-full sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[800px] max-w-none overflow-visible rounded-3xl sm:mt-0 flex justify-center px-6"
          >
            <div className="absolute w-full h-full rounded-full bg-[#FFD812] opacity-10 blur-2xl -z-10"></div>
            <div className="relative w-full max-w-[600px] aspect-[5/3] rounded-3xl floating">
              <Image
                src="/images/header.webp"
                alt="Illustration FAQ"
                priority
                fetchPriority="high"
                quality={60}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="rounded-3xl object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />
      </header>
    </>
  );
}
