'use client'
import { useState } from 'react'

export default function FaqSection() {
 const [openIndex, setOpenIndex] = useState<number | null>(null)

 const faqItems = [
   {
     question: "Les plaques sont-elles en plexiglass ?",
     answer: "Oui nos plaques sont produites en plexiglass. Nous utilisons des plaques en plexiglass PMMA aux bords moulés (arrondis), de 3mm d'épaisseur. C'est la meilleure qualité disponible en France."
   },
   {
     question: "Est-ce que les plaques sont homologuées ?",
     answer: "Oui, nos plaques sont homologuées par défaut. Lors de la personnalisation, une pastille colorée vous indique en temps réel le statut d'homologation de votre plaque : \n\nPastille verte : votre plaque est homologuée \nPastille rouge : vos modifications rendent la plaque non homologuée. \n\nCela vous permet de savoir immédiatement si vos personnalisations respectent les normes d'homologation."
   },
   {
     question: "Les plaques sont-elles vendues à l'unité ?",
     answer: "Oui, les plaques sont vendues à l'unité. Vous pouvez commander le nombre exact de plaques dont vous avez besoin. Il suffit d'indiquer la quantité souhaitée dans votre panier : 1 plaque, 2 plaques pour un jeu complet (avant + arrière), 3 plaques, 4 plaques...ou plus selon vos besoins."
   },
   {
     question: "Puis-je intégrer un logo personnalisé ?",
     answer: "Oui, à l'aide du module de personnalisation de votre plaque, vous pouvez ajouter des logos à plusieurs endroits : \n\n• Remplacer les étoiles européennes (non homologué)\n• Remplacer le logo de région (non homologué)\n• Ajouter des logos en bas de plaque, de chaque côté du texte (homologué)\n• Intégrer un logo en fond de plaque (non homologué)"
   },
   {
     question: "De quel couleurs sont les rivets ?",
     answer: "Les rivets sont disponibles en option avec deux possibilités :\n• Vous pouvez choisir leur couleur lors de la validation de votre plaque\n• Par défaut, ils s'adaptent à la couleur du fond (généralement blancs pour les plaques homologuées)\nD'autres systèmes de fixation sont disponibles dans notre rubrique \"Accessoires\"."
   },
   {
    question: "Les paiements sont-ils sécurisés ? ",
    answer: "Oui, tous vos paiements sont entièrement sécurisés grâce à notre partenariat avec PayPal, leader mondial du paiement en ligne. Nous avons choisi les options de sécurité les plus avancées pour protéger vos transactions. Vous pouvez payer en toute tranquillité via :\n\n• Carte bancaire\n• PayPal\n• Apple Pay\n• American Express\n\nTous les paiements sont cryptés et sécurisés, quel que soit le mode de paiement choisi."
  }
 ]

 return (
   <section id="faq" className="py-20 px-4">
     <h2 className="text-4xl font-semibold text-center mb-12 text-white">
       FAQ
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
             <span className="font-normal text-lg">{item.question}</span>
             <span className="transform transition-transform duration-300">
               {openIndex === index ? '−' : '+'}
             </span>
           </button>
           <div 
             className={`
               overflow-hidden transition-all duration-300 ease-in-out
               ${openIndex === index ? 'opacity-100' : 'max-h-0 opacity-0'}
             `}
           >
             <p className="px-6 pb-4 font-normal text-white/90 whitespace-pre-line">
               {item.answer}
             </p>
           </div>
         </div>
       ))}
     </div>
   </section>
 )
}