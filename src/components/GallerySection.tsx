'use client'
import { useTheme } from '@/hooks/useTheme'
import Image from 'next/image';

export default function GallerySection() {
  const theme = useTheme();

  return (
    <section id="galerie" className="gallery-section">
      <div className="mx-auto">
        <h1 className="font-light mb-8">Exemple</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8 px-4">
          {theme.gallery.images.sources.slice(0, 4).map((image, index) => (
            <div key={index} className="gallery-image-wrapper transition-transform duration-300 hover:scale-105">
              <Image 
                src={image.path}
                alt={image.alt}
                className="gallery-image w-full h-auto object-cover"
                width={parseInt(theme.gallery.images.settings.width, 10)}
                height={parseInt(theme.gallery.images.settings.height, 10)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
