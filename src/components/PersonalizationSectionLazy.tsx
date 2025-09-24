"use client";
import LazyBackgroundSection from "./LazyBackgroundSection";
import Image from "next/image";
import { MagicIcon, CheckIcon } from "./Icons";
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
              <MagicIcon className="w-3 h-3" />
              Personnalisation
            </div>

            <h2 className="text-center">
              Besoin d'une nouvelle
              <br />
              <span className="italic">plaque d'immatriculation</span> ?
            </h2>
          </div>

          {/* Étapes */}
          <div>
            <ul className="steps w-full max-w-5xl mx-auto">
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

        {/* Section principale - Design inspiré de l'image */}
        <div className="max-w-6xl mx-auto">
          {/* Container principal avec image + témoignage + CTA */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-[4fr_3fr] gap-0">
              {/* Colonne gauche - Image de confiance */}
              <div 
                className="bg-cover bg-left flex items-center justify-center aspect-square lg:aspect-auto lg:h-auto"
                style={{ backgroundImage: "url('/images/smile.webp')" }}
              >
              </div>

              {/* Colonne droite - Témoignage + CTA */}
              <div className="p-8 flex flex-col justify-between items-start">
                {/* Badge testimonial */}
                <div className="mb-6">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-light flex items-center gap-1 w-fit">
                    <CheckIcon className="w-3 h-3 text-white" />Avis vérifié
                  </span>
                </div>

                {/* Témoignage */}
                <div className="mb-8">
                  <p className="text-gray-800 text-sm leading-relaxed mb-6 text-left">
                  "J'étais un peu hésitant cependant je suis très content de mes plaques. Ce qui est bien c'est que la navigation est vraiment simple et vous pouvez faire votre plaque vraiment comme vous le souhaitez, taille, couleur, calligraphie, logo, département, etc. Le site vous indique en temps réel si votre plaque est homologuée pour les véhicules ou non. La livraison est propre et rapide.  Je recommande."


                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-3">

                    <div>
                      <p className="font-medium text-gray-900 text-left text-xs">Avis du 11/09/2024, suite à une expérience du 28/07/2024</p>
                      <p className=" text-gray-900 text-left text-xs font-bold pb-2">VITULIN D.</p>

                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Image
                                key={i}
                                src="/images/trust.webp"
                                alt="Étoile de confiance"
                                className="w-4 h-4"
                                loading="lazy"
                                width={16}
                                height={16}
                              />
                            ))}
                          </div>
                    </div>
                  </div>
                </div>

                {/* CTA principal */}
                <div className="border-t pt-6 text-left">
                  <div className=" mb-4">
                    <span className="text-3xl font-md text-green-600 text-left">
                      À partir de 15,00€
                    </span>
                    <p className="text-sm text-gray-600 mt-1 text-left">
                      Livraison rapide incluse
                    </p>
                  </div>

                  <CTAButton
                    href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
                    variant="primary"
                    size="lg"
                    external
                    className="w-full text-lg py-4 font-medium gap-2 flex items-center justify-center"
                  >
                    Créer ma plaque maintenant
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section logos partenaires */}
        <div className="mt-6 mb-8">
          <p className="text-center text-sm text-white/80 mb-6">
            Ils nous font confiance
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white border shadow-lg rounded-lg px-4 py-2">
              <Image
                src="/images/1.png"
                alt="Logo partenaire 1"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-white border shadow-lg rounded-lg px-4 py-2">
              <Image
                src="/images/2.png"
                alt="Logo partenaire 2"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="bg-white border shadow-lg rounded-lg px-4 py-2">
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

        {/* Section de confiance en bas dans votre style */}
        <div className="flex justify-center items-center gap-6 mt-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 italic text-center">
            <p className="text-[0.6rem]">
              Agréé et Habilité par le Ministère de l'Intérieur et le Trésor
              public
            </p>
            <div className="flex flex-col text-[0.6rem] text-center">
              <p>
                Agrément Trésor Public{" "}
                <span className="font-bold">n°59157</span>
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
