'use client'
import { useTheme } from '@/hooks/useTheme'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GallerySection() {
  const theme = useTheme();
  const images = theme.gallery.images.sources;
  const imgWidth = parseInt(theme.gallery.images.settings.width, 10);
  const imgHeight = parseInt(theme.gallery.images.settings.height, 10);

  return (
    <section id="galerie" className="w-full overflow-hidden py-8 bg-white">
      <h1 className="font-light mb-8 text-center">Exemple</h1>
      <div className="relative w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: [`0%`, `-${imgWidth * images.length}px`] }}
          transition={{
            ease: "linear",
            duration: 100,
            repeat: Infinity
          }}
        >
          {[...images, ...images].map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 border border-gray-200 shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
              style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
            >
              <Image
                src={image.path}
                alt={image.alt}
                width={imgWidth}
                height={imgHeight}
                className="object-cover w-full h-full rounded-lg"
                priority={idx < images.length}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
