'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function GallerySection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Galerie d'inspirations
        </h2>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="px-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="bg-gray-200 h-64 rounded-md"></div>
                <p className="mt-4 text-center">Exemple de plaque #{item}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}