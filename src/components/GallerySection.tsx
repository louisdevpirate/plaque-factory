'use client'
import Slider from 'react-slick'
import { useTheme } from '@/hooks/useTheme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    variableWidth: true,
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
    <section id="galerie" style={{ padding: theme.gallery.layout.padding }}>
      <div className="mx-auto">
        <h2 
          className="text-3xl font-medium text-center mb-12"
          style={{
            color: theme.gallery.layout.title.color,
            fontSize: theme.gallery.layout.title.fontSize
          }}
        >
          {theme.gallery.layout.title.text}
        </h2>
        
        <Slider {...settings}>
          {theme.gallery.images.sources.concat(theme.gallery.images.sources).map((image, index) => (
            <div key={index} style={{width: 'auto'}}>
              <img 
                src={image.path}
                alt={image.alt}
                className="object-contain mx-10"
                style={{
                  height: theme.gallery.images.settings.height,
                  width: theme.gallery.images.settings.width
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}