"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HouseIcon } from "@/components/Icons";
import { ArrowRightIcon } from "@/components/Icons";

// Hook personnalisé avec Intersection Observer natif
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView: isInView };
};

// Composant de compteur CSS pur
const CountUp = ({ end, prefix = "", suffix = "", separator = "", inView }: {
  end: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView && count < end) {
      const increment = Math.ceil(end / 50); // 50 étapes pour l'animation
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev + increment >= end) {
            clearInterval(timer);
            return end;
          }
          return prev + increment;
        });
      }, 40); // 40ms entre chaque étape = 2 secondes total

      return () => clearInterval(timer);
    }
  }, [inView, end, count]);

  const formatNumber = (num: number) => {
    if (separator) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return num.toString();
  };

  return (
    <span className="inline-block">
      {prefix}
      <span className="animate-count-up">{formatNumber(count)}</span>
      {suffix}
    </span>
  );
};

// Memoized stat component
const StatItem = memo(
  ({
    end,
    prefix,
    suffix,
    label,
    inView,
    separator,
  }: {
    end: number;
    prefix?: string;
    suffix: string;
    label: string;
    inView: boolean;
    separator?: string;
  }) => (
    <div className="flex flex-col">
      <span className="text-3xl md:text-4xl font-bold">
        <CountUp
          end={inView ? end : 0}
          prefix={prefix}
          suffix={suffix}
          separator={separator}
          inView={inView}
        />
      </span>
      <span className="mt-1">{label}</span>
    </div>
  )
);

StatItem.displayName = "StatItem";

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [


    
    { end: 8, prefix: "+", suffix: "", label: "Années d'expérience" },
    {
      end: 100000,
      prefix: "+",
      suffix: "",
      label: "Plaques vendues",
      separator: ",",
    },
    { end: 99, suffix: "%", label: "Avis positifs" },
    {
      end: 75000,
      prefix: "+",
      suffix: "",
      label: "Clients satisfaits",
      separator: ",",
    },
  ];

  return (
    <section id="about" className="pt-10 md:pt-14 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Texte gauche */}
        <div className="max-w-lg">
          <div className="badge badge-sm mb-4 rounded-2xl text-white">
            <HouseIcon className="w-3 h-3" />
            <span>À propos</span>
          </div>
          <h2 className="text-left">
            La Bonne Plaque,
            <span className="block">
              {" "}
              votre <span className="italic">expert</span> en plaques qui
              roulent.
            </span>
          </h2>
          <div className="flex flex-col">
            <p className="italic">
              Depuis plus de 8 ans, nous créons des plaques
              d&apos;immatriculation de qualité, homologuées et personnalisées
              pour tous les passionnés d&apos;automobile. Votre véhicule mérite
              ce qu&apos;il y a de mieux, livré rapidement, avec le souci du
              détail.
            </p>
            <Image
              src="/images/authors/signature.webp"
              alt="Signature de Fabien"
              width={200}
              height={20}
              className="self-start mt-8 w-auto h-auto"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-10">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
                separator={stat.separator}
              />
            ))}
          </div>
          <div className="flex flex-col justify-start align-self-start">
            <a
              href="/about"
              className="group text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-flex justify-center items-center px-6 border-2 border-black hover:text-black w-full md:w-fit gap-2 cta-faq mb-4"
              title="Créer ma plaque personnalisée maintenant"
            >
              En savoir Plus
              <ArrowRightIcon className="inline w-4 h-4 ml-2 cta-arrow-faq transform transition-transform duration-300 group-hover:-rotate-45" />
            </a>
            <a
              href="#personnalisation"
              className="group bg-yellow-400 text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-flex justify-center items-center px-6 border-2 border-black hover:text-black w-full md:w-fit gap-2 cta-faq mb-10"
              title="Créer ma plaque personnalisée maintenant"
            >
              Commander ma plaque
              <ArrowRightIcon className="inline w-4 h-4 ml-2 cta-arrow-faq transform transition-transform duration-300 group-hover:-rotate-90" />
            </a>
          </div>
        </div>

        {/* Photo droite */}
        <div className="overflow-hidden w-full max-w-md flex items-end self-end">
          <Image
            src="/images/authors/fabien.webp"
            alt="Fabien"
            width={400}
            height={400}
            className="w-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
