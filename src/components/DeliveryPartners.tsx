// src/components/DeliveryPartners.tsx
import Image from "next/image";

const partners = [
  { src: "/images/logo/amazon.png", alt: "Amazon" },
  { src: "/images/logo/chronopost.png", alt: "Chronopost" },
  { src: "/images/logo/ups.png", alt: "UPS" },
  { src: "/images/logo/colissimo.png", alt: "Colissimo" },
  { src: "/images/logo/laposte.png", alt: "La Poste" },
];

export default function DeliveryPartners() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 px-4">
      {partners.map((partner) => (
        <Image
          key={partner.alt}
          src={partner.src}
          alt={partner.alt}
          width={110}
          height={50}
          className="grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition duration-300 ease-in-out hover:scale-110"
        />
      ))}
    </div>
  );
}