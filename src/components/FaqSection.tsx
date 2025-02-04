'use client'
import { useState } from 'react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">FAQ</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <button className="faq-question">
              <span>{item.question}</span>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Données de la FAQ
const faqData = [
  { question: "Les plaques sont-elles en plexiglass ?", answer: "Oui, nos plaques sont en plexiglass PMMA avec bords moulés de 3mm d'épaisseur." },
  { question: "Est-ce que les plaques sont homologuées ?", answer: "Oui, nos plaques sont homologuées par défaut. Une pastille de couleur indique leur statut." },
  { question: "Les plaques sont-elles vendues à l’unité ?", answer: "Oui, vous pouvez commander le nombre exact de plaques dont vous avez besoin." },
  { question: "Puis-je intégrer un logo personnalisé ?", answer: "Oui, il est possible d'ajouter un logo personnalisé sur votre plaque, selon les normes en vigueur." },
  { question: "De quelle couleur sont les rivets ?", answer: "Les rivets sont disponibles en noir, blanc et argent." },
  { question: "Les paiements sont-ils sécurisés ?", answer: "Oui, tous les paiements sont sécurisés via des protocoles SSL." }
];
