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

  const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      width={36}
      height={36}
      className="rounded-full"
    >
      <source src={icon} type="video/mp4" />
    </video>
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
  </div>
)

  return (
    <section id="faq" className="faq-section">
      <SectionTitle icon="/public/icons/faq.mp4" title="Créez votre plaque personnalisée" />
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
