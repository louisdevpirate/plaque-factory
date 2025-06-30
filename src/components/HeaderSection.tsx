"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeaderSection() {
  const [, setIsHovered] = useState(false);

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const layers = parallaxRef.current?.querySelectorAll("[data-depth]");
      layers?.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute("data-depth") || "0");
        const translateY = scrollY * depth * 0.2;
        (
          layer as HTMLElement
        ).style.transform = `translateY(${translateY}px) scale(1.1)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      ></link>

      <header className="relative px-4 p-12 sm:py-40 flex-col items-center bg-white bg-cover bg-center">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-2/3 max-w-7xl mx-auto min-w-80">
          <div className="text-left sm:w-1/2 space-y-4">
            <div className="inline-flex items-center border border-black rounded-full px-3 py-1 text-sm w-fit bg-white/80 backdrop-blur-sm">
              <Image
                src="/images/icons/france-flag.png"
                alt="fabrication plaques françaises"
                width={16}
                height={16}
                className="rounded-full mr-2"
              />
              <span>Fabrication française</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-medium text-left">
              Créez votre plaque personnalisée,<br /> en un clic.
            </h1>

            <div className="max-w-x mb-2">
              <p className="sm:text-lg font-light">
                Commandez votre plaque d’immatriculation 100% personnalisée.
                Choisissez votre style, votre format <br></br>et vos options —
                le tout en <strong>quelques clics.</strong>
              </p>
              <p className="mt-4 text-sm mb-6">
                Fabrication française en partenariat avec{" "}
                <a
                  href="https://plaqueimmat.fr/?aff=9c7pyekcpurn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-yellow-300 transition"
                >
                  PlaqueImmat.fr
                </a>
                <br />
                Livraison rapide & qualité certifiée
              </p>
              <div className="flex items-center gap-1 mt-2 mb-14 ">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/trust.png"
                    alt="Trustpilot star"
                    className="hover:scale-105"
                    width={24}
                    height={24}
                  />
                ))}
                <span className="text-lg font-semibold ml-2">4.9</span>
                <span className="text-sm">(15 008)</span>
                <span className="text-sm font-medium ml-1">Excellent</span>
              </div>
            </div>

            <div className="flex flex-row gap-[10px] items-center cta-container">
              <a
                href="#personnalisation"
                className="header-cta bg-yellow-400 text-black font-normal px-6 py-4 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Je crée ma plaque{" "}
                <i className="fas fa-arrow-right cta-arrow"></i>
              </a>
              <a
                href="https://module.plaqueimmat.fr/?aff=cc58d6de-e03b-45b5-b678-0f6103f8d0e6"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta-2 font-normal px-8 py-4 rounded-lg shadow-lg transition duration-300 inline-flex items-center "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Accéder au module complet{" "}
                <i className="fas fa-arrow-right cta-arrow-2"></i>
              </a>
            </div>
          </div>

          <div
            ref={parallaxRef}
            className="relative w-full sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[800px] max-w-none overflow-visible rounded-3xl mt-8 sm:mt-0 flex justify-center"
          >
            <div className="absolute w-4/5 h-4/5 rounded-full bg-[#FFD812] opacity-10 blur-2xl -z-10"></div>
            <Image
              src="/images/header.png"
              alt="Illustration FAQ"
              width={600}
              height={600}
              className="object-cover rounded-3xl floating"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />
      </header>
    </>
  );
}
