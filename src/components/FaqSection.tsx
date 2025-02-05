'use client'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function FaqSection() {
  const theme = useTheme();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Ferme la question si déjà ouverte
        : [...prevIndexes, index] // Ouvre la question si elle est fermée
    );
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">{theme.faq.layout.title.text}</h2>
      <div className="faq-container">
        <div className="faq-list">
          {theme.faq.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndexes.includes(index) ? 'open' : ''}`}
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="faq-question"
              >
                <span>{item.question}</span>
                <span className="faq-toggle">{openIndexes.includes(index) ? '−' : '+'}</span>
              </button>

              {/* Réponse */}
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
