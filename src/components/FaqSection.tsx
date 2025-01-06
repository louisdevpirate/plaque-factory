'use client'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function FaqSection() {
  // Utilisation du thème et gestion de l'état pour l'accordéon
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
      id="faq" 
      style={{
        padding: theme.faq.layout.spacing.section,
      }}
    >
      {/* Titre de la section */}
      <h2 
        className="font-semibold text-center"
        style={{
          color: theme.faq.layout.title.color,
          fontSize: theme.faq.layout.title.fontSize,
          marginBottom: theme.faq.layout.title.marginBottom
        }}
      >
        {theme.faq.layout.title.text}
      </h2>

      {/* Container des questions/réponses */}
      <div 
        className="mx-auto"
        style={{ maxWidth: theme.faq.layout.maxWidth }}
      >
        {/* Mapping sur les items de FAQ définis dans le thème */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.faq.layout.spacing.itemGap }}>
          {theme.faq.items.map((item, index) => (
            <div 
              key={index}
              style={{
                background: openIndex === index 
                  ? theme.faq.item.background.hover 
                  : theme.faq.item.background.default,
                borderRadius: theme.faq.item.border.radius,
                border: `${theme.faq.item.border.width} solid ${theme.faq.item.border.color}`,
                transition: theme.faq.animation.timing
              }}
            >
              {/* Bouton de question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
                style={{
                  padding: theme.faq.item.padding.question,
                }}
              >
                {/* Texte de la question */}
                <span style={{
                  color: theme.faq.item.text.question.color,
                  fontSize: theme.faq.item.text.question.fontSize,
                  fontWeight: theme.faq.item.text.question.fontWeight
                }}>
                  {item.question}
                </span>

                {/* Icône +/- avec rotation animée */}
                <span 
                  className="transform transition-transform"
                  style={{
                    color: theme.faq.toggle.color,
                    fontSize: theme.faq.toggle.fontSize,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: theme.faq.toggle.transition
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Contenu de la réponse avec animation */}
              <div 
                className="overflow-hidden transition-all"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  transition: theme.faq.animation.timing
                }}
              >
                <p 
                  style={{
                    padding: theme.faq.item.padding.answer,
                    color: theme.faq.item.text.answer.color,
                    fontSize: theme.faq.item.text.answer.fontSize,
                    lineHeight: theme.faq.item.text.answer.lineHeight,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}