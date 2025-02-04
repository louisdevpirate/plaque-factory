'use client'
import Slider from 'react-slick'
import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'

export default function CategoriesSection() {
  const theme = useTheme();
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
      <div className="category-dots-wrapper">
        <ul>{dots}</ul>
      </div>
    ),
    responsive: theme.categories.carousel.responsive
  };

  return (
    <section id="categories" className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">{theme.categories.layout.title.text}</h2>

        <Slider {...settings}>
          {theme.categories.items.map((category) => (
            <div key={category.id} className="category-slide">
              <div 
                className={`category-card ${hoveredCard === category.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <h3 className="category-card-title">{category.title}</h3>
                  <p className="category-card-description">{category.description}</p>
                  <p className="category-card-size">Format : {category.sizes}cm</p>
                </div>

                <a href={category.link} className="category-link">
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
