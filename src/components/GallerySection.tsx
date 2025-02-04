'use client'
import Slider from 'react-slick'
import { useTheme } from '@/hooks/useTheme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';

export default function GallerySection() {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: theme.gallery.carousel.speed,
    slidesToShow: theme.gallery.carousel.slidesToShow,
    slidesToScroll: 1,
    autoplay: theme.gallery.carousel.autoplay,
    autoplaySpeed: theme.gallery.carousel.autoplaySpeed,
    cssEase: theme.gallery.carousel.cssEase,
    pauseOnHover: theme.gallery.carousel.pauseOnHover,
    arrows: false,
    adaptiveHeight: true, // ✅ Évite les bugs de hauteur
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.max(1, theme.gallery.carousel.slidesToShow - 1),
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="galerie" className="gallery-section">
      <div className="mx-auto">
        <h2 className="gallery-title">{theme.gallery.layout.title.text}</h2>

        <div className="relative w-full max-w-5xl mx-auto">
          <Slider {...settings}>
            {theme.gallery.images.sources.map((image, index) => (
              <div key={index} className="gallery-image-wrapper">
                <Image 
                  src={image.path}
                  alt={image.alt}
                  className="gallery-image"
                  width={parseInt(theme.gallery.images.settings.width, 10)}
                  height={parseInt(theme.gallery.images.settings.height, 10)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
