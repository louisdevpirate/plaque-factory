'use client'
import { useState } from 'react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Quel est le délai de livraison ?",
      answer: "Le délai de livraison moyen est de 2 à 3 jours ouvrés après validation de la commande."
    },
    {
      question: "Les plaques sont-elles homologuées ?",
      answer: "Oui, toutes nos plaques sont homologuées et conformes à la législation en vigueur."
    },
    {
      question: "Peut-on personnaliser le design ?",
      answer: "Oui, notre module de personnalisation vous permet de créer votre design unique tout en respectant la réglementation."
    },
    {
      question: "Comment sont fixées les plaques ?",
      answer: "Nos plaques sont livrées avec un kit de fixation complet et des instructions de montage détaillées."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions Fréquentes
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center font-medium"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <span className="transform transition-transform duration-200">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}