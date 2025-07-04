import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="about" className="pt-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Texte gauche */}
        <div className="max-w-lg">
          <div className="badge badge-sm mb-8 rounded-2xl">
            <i className="fa fa-house"></i>À propos
          </div>
          <h2 className="text-left">
            La Bonne Plaque,
            <br />
            votre <span className="italic text-yellow-300">expert</span> plaque.
          </h2>
          <div className="flex flex-col">
            <p className="text-lg italic">
              "Depuis plus de 8 ans, nous créons des plaques d’immatriculation de
              qualité, homologuées et personnalisées pour tous les passionnés
              d'automobile. Votre véhicule mérite ce qu’il y a de mieux, livré
              rapidement, avec le souci du détail."
            </p>
            <Image
              src="/images/authors/signature.png"
              alt="Signature de Fabien"
              width={200}
              height={20}
              className="self-start mt-8"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-10">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold">
                <CountUp end={inView ? 8 : 0} duration={2} suffix="+" />
              </span>
              <span className="mt-1">Années d'expérience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold">
                <CountUp end={inView ? 100000 : 0} duration={2} suffix="+" separator="," />
              </span>
              <span className="mt-1">Plaques vendues</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold">
                <CountUp end={inView ? 99 : 0} duration={2} suffix="%" />
              </span>
              <span className="mt-1">Avis positifs</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold">
                <CountUp end={inView ? 75000 : 0} duration={2} suffix="+" separator="," />
              </span>
              <span className="mt-1">Clients satisfaits</span>
            </div>
          </div>
        </div>

        {/* Photo droite */}
        <div className="overflow-hidden w-full max-w-md flex items-end self-end">
          <Image
            src="/images/authors/fabien.png"
            alt="Fabien"
            width={400}
            height={400}
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}