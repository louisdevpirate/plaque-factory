'use client'
import Slider from 'react-slick'
import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'


export default function CategoriesSection() {
  const theme = useTheme();
  // État pour suivre quelle carte est survolée
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const settings = {
    dots: theme.categories.carousel.dots,
    infinite: false,
    speed: theme.categories.carousel.speed,
    slidesToShow: theme.categories.carousel.slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ marginTop: theme.categories.carousel.dotsStyle.marginTop }}>
        <ul>{dots}</ul>
      </div>
    ),
    responsive: theme.categories.carousel.responsive
  };

  return (
    <section id="categories" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-center"
          style={{
            color: theme.categories.layout.title.color,
            fontSize: theme.categories.layout.title.fontSize,
            marginBottom: theme.categories.layout.title.marginBottom
          }}
        >
          {theme.categories.layout.title.text}
        </h2>

        <Slider {...settings}>
          {theme.categories.items.map((category) => (
            <div key={category.id} className="px-4">
              <div 
                className="flex flex-col justify-between transition-all duration-300"
                style={{
                  background: theme.categories.layout.card.background,
                  border: `1px solid ${theme.categories.layout.card.borderColor}`,
                  padding: theme.categories.layout.card.padding,
                  height: theme.categories.layout.card.height,
                  borderRadius: theme.categories.layout.card.borderRadius,
                  // Changement dynamique de l'ombre selon l'état de hover
                  boxShadow: hoveredCard === category.id 
                    ? theme.categories.layout.card.shadow.hover
                    : theme.categories.layout.card.shadow.default
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <h3 
                    className="font-semibold mb-3"
                    style={{
                      color: theme.categories.layout.text.title.color,
                      fontSize: theme.categories.layout.text.title.fontSize
                    }}
                  >
                    {category.title}
                  </h3>
                  
                  <p 
                    className="mb-3"
                    style={{
                      color: theme.categories.layout.text.description.color,
                      fontSize: theme.categories.layout.text.description.fontSize
                    }}
                  >
                    {category.description}
                  </p>
                  
                  <p 
                    className="font-medium mb-4"
                    style={{
                      color: theme.categories.layout.text.dimensions.color,
                      fontSize: theme.categories.layout.text.dimensions.fontSize
                    }}
                  >
                    Format : {category.sizes}cm
                  </p>
                </div>

                <a 
                  href={category.link} 
                  className="font-medium inline-flex items-center transition-colors"
                  style={{
                    color: hoveredCard === category.id
                      ? theme.categories.layout.text.link.hoverColor
                      : theme.categories.layout.text.link.color
                  }}
                >
                  Explorer →
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}