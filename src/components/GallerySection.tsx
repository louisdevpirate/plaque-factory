'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function GallerySection() {
  const images = [
    '/images/carousel/plaque1.png',
    '/images/carousel/Plaque_Marine_2.png',
    '/images/carousel/Plaque_Marine_3.png',
    '/images/carousel/Plaque_Marine_4.png'
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,  // Nouveau
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  

  return (
    <section id="galerie" className="py-20">
      <div className="mx-auto">
        <h2 className="text-3xl font-medium text-center mb-12">Galerie d'inspirations</h2>
        <Slider {...settings}>
          {images.concat(images).map((image, index) => (
            <div key={index} style={{width: 'auto'}}>
              <img 
                src={image}
                alt={`Plaque d'immatriculation exemple ${(index % images.length) + 1}`}
                className="h-[300px] w-auto object-contain mx-10"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )

  return (
    <section id="galerie" className="py-10">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-3xl font-medium text-center mb-12">Galerie d'inspirations</h2>
        <div className="mx-[-10px]"> {/* Compensation négative pour l'alignement */}
          <Slider {...settings}>
            {images.concat(images).map((image, index) => (
              <div key={index}>
                <div className="aspect-[16/9]">
                  <img 
                    src={image}
                    alt={`Plaque d'immatriculation exemple ${(index % images.length) + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}