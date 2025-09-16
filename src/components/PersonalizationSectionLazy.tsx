"use client";
import LazyBackgroundSection from "./LazyBackgroundSection";
import Image from "next/image";
import { MagicIcon, ArrowRightIcon } from "./Icons";
import CTAButton from "./CTAButton";

type Props = {
  code?: string;
};

function PersonalizationSectionLazy({ code }: Props) {
  return (
    <LazyBackgroundSection
      id="personnalisation"
      backgroundImage="/images/bg/bg3.webp"
      className="section-personnalisation bg-cover py-10 md:py-14 text-center border-b relative"
      threshold={0.1}
      rootMargin="50px"
    >
      <div className="personnalisation-container max-w-7xl mx-auto">
        {/* Header + Étapes en flex-col */}
        <div className="flex flex-col gap-8 items-center mb-12">
          {/* Header avec badge dans votre style */}
        <div className="max-w-2xl md:text-center mx-auto">
          <div className="badge badge-sm border-white/30 mb-4 rounded-2xl text-white">
            <MagicIcon className="w-3 h-3"/>
            Personnalisation
          </div>
            
            <h2 className="text-left md:text-center">
              Créez votre plaque <br />
              <span className="italic">personnalisée</span>
            </h2>
            
            <p className="md:text-center mb-4 md:mb-0 max-w-2xl">
              Choisissez facilement votre style, votre format et vos options
              pour créer une plaque homologuée et personnalisée adaptée à
              votre véhicule. Livraison rapide, qualité professionnelle
              <span className="font-bold"> — le tout en quelques clics.</span>
            </p>
          </div>

          {/* Étapes */}
          <div className="space-y-6">
          <ul className="steps mt-1 w-full max-w-5xl mx-auto">
            <li className="step step-primary text-xs md:text-sm text-left md:text-center">
              Personnalisez grâce à un <br />
              large choix d'options
            </li>
            <li className="step text-xs md:text-sm md:text-center">
              Sélectionnez des finitions <br />
              de haute qualité
            </li>
            <li className="step text-xs md:text-sm md:text-center">
              Validez et recevez vos plaques <br />
              en un temps record !
            </li>
          </ul>
          </div>
        </div>

        {/* Section principale avec hiérarchie visuelle claire */}
        <div className="max-w-6xl mx-auto mb-12">
          
          {/* 1. PREUVES SOCIALES - En haut pour créer la confiance */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-6 py-2 inline-block mb-6">
              <span className="font-medium text-lg">+1,247</span>
              <span className="text-sm ml-2">plaques vendues ce mois</span>
            </div>
            
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 bg-white border border-black rounded-full px-4 py-2">
                <Image
                  src="/images/marianne.avif"
                  alt="Logo homologué"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-black font-medium text-sm">Plaques Homologuées</span>
        </div>

              <div className="flex items-center gap-2 bg-white border border-black rounded-full px-4 py-2">
                <span className="text-black font-medium text-sm">✓ Satisfait ou remboursé</span>
              </div>
            </div>
          </div>

          {/* 2. CTA PRINCIPAL - Point focal prioritaire */}
          <div className="text-center mb-8">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg">
              <div className="mb-6">
                <span className="text-2xl font-medium text-green-600">À partir de 15€</span>
                <p className="text-sm text-gray-600 mt-2 font-light">Livraison rapide incluse</p>
        </div>

              <CTAButton
                href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
                variant="primary"
                size="lg"
                external
                className="w-full text-lg py-3 font-medium gap-2 flex items-center justify-center"
              >
                Je crée ma plaque maintenant
              </CTAButton>
            </div>
          </div>

          {/* 3. IMAGE + TÉMOIGNAGE - Éléments de réassurance */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            
            {/* Image de plaque - Côté gauche */}
            <div className="text-center">
              <div className="relative bg-white rounded-lg p-4 w-fit mx-auto shadow-lg">
                <Image
                  src="/images/social-proof.png"
                  alt="Plaque d'immatriculation personnalisée exemple"
                  width={350}
                  height={140}
                  className="rounded-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium">
                  ✓
                </div>
              </div>
            </div>

            {/* Témoignage - Côté droit */}
            <div className="text-center">
              <div className="bg-white border border-black rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-start gap-3 mb-4">
                  <Image
                    src="/images/authors/author1.webp"
                    alt="Client satisfait"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-medium text-base">Marie L.</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/images/trust.webp"
                          alt="Étoile"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-700 leading-relaxed">
                  "Plaque parfaite, livraison rapide ! Je recommande vivement."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section logos partenaires */}
        <div className="mt-12 mb-8">
          <p className="text-center text-sm text-white/80 mb-6">Ils nous font confiance</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white border border-black rounded-lg px-4 py-2">
              <Image
                src="/images/1.png"
                alt="Logo partenaire 1"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-white border border-black rounded-lg px-4 py-2">
              <Image
                src="/images/2.png"
                alt="Logo partenaire 2"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-white border border-black rounded-lg px-4 py-2">
              <Image
                src="/images/3.png"
                alt="Logo partenaire 3"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Avis clients supplémentaires */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/authors/author2.webp"
                alt="Client"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-xs">Pierre M.</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/trust.webp"
                      alt="Étoile"
                      width={10}
                      height={10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs italic text-gray-700">
              "Service impeccable, plaque conforme !"
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/authors/author3.webp"
                alt="Client"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-xs">Sophie D.</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/trust.webp"
                      alt="Étoile"
                      width={10}
                      height={10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs italic text-gray-700">
              "Livraison express, qualité top !"
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/authors/author4.webp"
                alt="Client"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-xs">Thomas L.</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/trust.webp"
                      alt="Étoile"
                      width={10}
                      height={10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs italic text-gray-700">
              "Prix imbattable, résultat parfait !"
            </p>
        </div>
      </div>

        {/* Section de confiance en bas dans votre style */}
      <div className="flex justify-center items-center gap-6 mt-8 max-w-3xl mx-auto">
        <div>
          <Image
            src="/images/marianne.avif"
            alt="Plaque Homologuées"
            className="hover:scale-105"
            loading="lazy"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-2 italic text-left">
          <p className="text-[0.6rem]">
            Agréé et Habilité par le Ministère de l'Intérieur et le Trésor
            public
          </p>
          <div className="flex flex-col text-[0.6rem]">
            <p>
              Agrément Trésor Public <span className="font-bold">n°59157</span>
            </p>
            <p>
              Habilitation Préfectorale{" "}
              <span className="font-bold">n°245306</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </LazyBackgroundSection>
  );
}

export default PersonalizationSectionLazy;