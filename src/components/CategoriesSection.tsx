'use client'
import Slider from 'react-slick'

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: "AUTO",
      description: "Format standard 520x110mm, homologué pour voitures particulières et véhicules légers",
      sizes: "52x11",
      link: "#"
    },
    {
      id: 2,
      title: "4X4",
      description: "Format tout-terrain 275x200mm, adapté aux SUV, pick-up et véhicules de loisirs",
      sizes: "27,5x20",
      link: "#"
    },
    {
      id: 3,
      title: "U.S.",
      description: "Format américain 300x150mm, idéal pour les véhicules importés et style US authentique",
      sizes: "30x15",
      link: "#"
    },
    {
      id: 4,
      title: "MOTO",
      description: "Format standard moto 210x130mm, homologué pour les deux-roues motorisés",
      sizes: "21x13",
      link: "#"
    },
    {
      id: 5,
      title: "PETITE MOTO",
      description: "Format compact 170x130mm, parfait pour les motos légères et scooters",
      sizes: "17x13",
      link: "#"
    },
    {
      id: 6,
      title: "CYCLO",
      description: "Format cyclomoteur 140x120mm, spécifique pour les mobylettes et cyclomoteurs",
      sizes: "14x12",
      link: "#"
    },
    {
      id: 7,
      title: "ENDURO",
      description: "Format spécial 100x100mm, conçu pour les motos d'enduro et tout-terrain",
      sizes: "10x10",
      link: "#"
    },
    {
      id: 8,
      title: "COLLECTION COURTE",
      description: "Format collection 450x100mm, dédié aux véhicules de collection et anciennes",
      sizes: "45x10",
      link: "#"
    },
    {
      id: 9,
      title: "COLLECTION MOTO",
      description: "Format collection moto 275x75mm, spécial pour motos anciennes et classiques",
      sizes: "27,5x7,5",
      link: "#"
    }
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots: any) => (
      <div style={{ marginTop: "100px" }}>
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section id="categories" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Formats</h2>
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-4">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 h-[280px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <p className="text-sm text-blue-600 font-medium mb-4">Format : {category.sizes}cm</p>
              </div>
              <a href={category.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Explorer →
              </a>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}