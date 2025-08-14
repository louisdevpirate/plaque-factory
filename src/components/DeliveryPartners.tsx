"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const partners = [
  { src: "/images/logo/colissimo.png", alt: "Colissimo" },
  { src: "/images/logo/amazon.png", alt: "Amazon" },
  { src: "/images/logo/chronopost.png", alt: "Chronopost" },
  
];

export default function DeliveryPartners() {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center gap-10 px-4">
        {partners.map((partner) => (
          <div key={partner.alt} className="flex justify-center">
            <Image
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              width={110}
              height={20}
              className="filter brightness-0 invert transition duration-300 ease-in-out hover:scale-110 w-auto h-auto"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center items-center md:justify-evenly md:items-center md:gap-4 px-4 py-2">
      {partners.map((partner) => (
        <Image
          key={partner.alt}
          src={partner.src}
          alt={partner.alt}
          loading="lazy"
          width={110}
          height={20}
          className="filter brightness-0 invert transition duration-300 ease-in-out hover:scale-110"
        />
      ))}
    </div>
  );
}
