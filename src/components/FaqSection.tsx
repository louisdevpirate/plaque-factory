'use client'
import { useState } from 'react'

export default function FaqSection() {
 const [openIndex, setOpenIndex] = useState<number | null>(null)

 const faqItems = [
   {
     question: "Les plaques sont-elles en plexiglass ?",
     answer: "Oui, nos plaques sont fabriquées en plexiglass de haute qualité, garantissant durabilité et résistance aux intempéries."
   },
   {
     question: "Est-ce que les plaques sont homologuées ?",
     answer: "Toutes nos plaques sont 100% homologuées et conformes à la réglementation en vigueur."
   },
   {
     question: "Peut-on personnaliser le design ?",
     answer: "Notre module de personnalisation vous permet de créer votre design unique tout en respectant les normes légales."
   },
   {
     question: "Comment sont fixées les plaques ?",
     answer: "Chaque plaque est livrée avec un kit de fixation complet et des instructions détaillées pour une installation facile."
   },
   {
     question: "Quel est le délai de livraison ?",
     answer: "La livraison est effectuée sous 48-72h ouvrées après validation de votre commande."
   }
 ]

 return (
   <section id="faq" className="py-20 px-4">
     <h2 className="text-4xl font-semibold text-center mb-12 text-white">
       Questions Fréquentes
     </h2>
     <div className="max-w-2xl mx-auto space-y-3">
       {faqItems.map((item, index) => (
         <div 
           key={index} 
           className="rounded-xl bg-white/10 backdrop-blur-md border border-white/10"
         >
           <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-8 py-6 text-left flex justify-between items-center text-white"
          >
             <span className="font-medium text-lg">{item.question}</span>
             <span className="transform transition-transform duration-300">
               {openIndex === index ? '−' : '+'}
             </span>
           </button>
           <div 
             className={`
               overflow-hidden transition-all duration-300 ease-in-out
               ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
             `}
           >
             <p className="px-6 pb-4 text-white/90">
               {item.answer}
             </p>
           </div>
         </div>
       ))}
     </div>
   </section>
 )
}