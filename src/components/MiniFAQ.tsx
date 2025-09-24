import React from 'react'
import Link from 'next/link'
import StructuredData from './StructuredData'

interface FAQItem {
  question: string
  answer: string
}

interface MiniFAQProps {
  articleTitle: string
  faqItems?: FAQItem[]
}

export default function MiniFAQ({ articleTitle, faqItems }: MiniFAQProps) {
  // FAQ par défaut si aucune FAQ spécifique n'est fournie
  const defaultFAQ: FAQItem[] = [
    {
      question: "Comment commander une plaque d'immatriculation personnalisée ?",
      answer: "Rendez-vous sur notre configurateur en ligne, choisissez votre style, personnalisez votre plaque et commandez en quelques clics. Livraison rapide 24h garantie."
    },
    {
      question: "Les plaques sont-elles homologuées ?",
      answer: "Oui, toutes nos plaques sont 100% homologuées et conformes à la réglementation française en vigueur."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Livraison rapide en 24h pour la plupart de nos plaques personnalisées. Certains modèles peuvent nécessiter 2-3 jours."
    }
  ]

  const faqToShow = faqItems || defaultFAQ

  return (
    <section className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
      <StructuredData type="FAQPage" data={{ faqItems: faqToShow }} />
      
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Questions fréquentes sur les plaques d'immatriculation
      </h2>
      
      <div className="space-y-4">
        {faqToShow.map((item, index) => (
          <details key={index} className="group">
            <summary className="cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors list-none">
              <span className="flex items-center justify-between">
                {item.question}
                <span className="text-blue-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </span>
            </summary>
            <div className="mt-2 text-gray-600 pl-4 border-l-2 border-blue-200">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-blue-200">
        <p className="text-sm text-gray-600 mb-3">
          Vous avez d'autres questions ? Consultez notre FAQ complète ou contactez-nous.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href="/#faq" 
            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
            title="Consulter la FAQ complète"
          >
            FAQ Complète
          </Link>
          <Link 
            href="/categories/moto" 
            className="inline-flex items-center px-3 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
            title="Découvrir nos plaques moto"
          >
            Plaques Moto
          </Link>
          <Link 
            href="/plaques-personnalisees" 
            className="inline-flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
            title="Personnaliser votre plaque"
          >
            Personnaliser
          </Link>
        </div>
      </div>
    </section>
  )
}
