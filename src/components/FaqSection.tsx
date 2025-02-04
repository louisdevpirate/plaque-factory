'use client'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function FaqSection() {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">{theme.faq.layout.title.text}</h2>

      <div className="faq-container">
        <div className="faq-list">
          {theme.faq.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question"
              >
                <span>{item.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
