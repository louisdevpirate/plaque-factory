// app/a-propos/page.tsx

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterOptimized from "@/components/FooterOptimized";

export default function AProposPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <h1 className="font-medium mb-4 md:mt-10">
           Votre guide indépendant pour des plaques sur mesure
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Découvrez la mission de labonneplaque.fr : informer, guider et permettre la personnalisation de votre plaque d’immatriculation en toute simplicité, via un configurateur intelligent.
          </p>

          <div className="overflow-hidden rounded-3xl mb-8">
            <Image 
            src="/images/team.avif"
            alt="team"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="mb-4">Une plateforme indépendante dédiée à l’univers des plaques d’immatriculation</h2>
          <p className="mb-6">
            Chez <strong>labonneplaque.fr</strong>, notre objectif est simple : vous aider à <strong>faire le bon choix</strong> en matière de plaque d’immatriculation, en toute légalité, simplicité et transparence.
            <br />
            Nous ne sommes <strong>ni un fabricant</strong>, ni un site officiel de l’État. Nous sommes une <strong>plateforme d’information spécialisée</strong>, affiliée à un partenaire de confiance, pour vous permettre de <strong>créer, personnaliser et commander</strong> votre plaque <strong>en quelques clics</strong> via un configurateur intelligent.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Pourquoi ce site existe-t-il ?</h2>
          <p className="mb-6">
            Parce que le monde des plaques d’immatriculation peut vite devenir flou. Entre les normes TPPR, les restrictions légales, les formats autorisés, les plaques décoratives, ou encore les tendances (plaques plexiglass, plaques noires, plaques moto…), il est facile de s’y perdre.
            <br />
            Nous avons donc créé <strong>labonneplaque.fr</strong> comme un <strong>hub de clarté</strong> pour :
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Répondre à toutes les <strong>questions fréquentes</strong> sur les plaques</li>
            <li><strong>Centraliser les informations à jour</strong> sur les démarches administratives</li>
            <li><strong>Proposer un configurateur pratique</strong> permettant de créer votre plaque en toute conformité</li>
            <li>Mettre à disposition des <strong>articles de fond</strong> sur l’actualité auto et les évolutions réglementaires</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Une affiliation transparente</h2>
          <p className="mb-6">
            Notre site vous redirige vers un partenaire reconnu, <strong>plaqueimmat.fr</strong>, via un lien de <strong>redirection tracké</strong>. Cela signifie que si vous commandez votre plaque via notre configurateur ou nos boutons d’appel à l’action, nous touchons <strong>une petite commission</strong>.
            <br />
            Cela <strong>ne change rien au prix que vous payez</strong>, et cela nous permet de continuer à produire <strong>du contenu de qualité</strong>.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Ce que vous trouverez ici</h2>
          <ul className="list-disc list-inside mb-6">
            <li>✅ Un <strong>configurateur interactif</strong> pour créer votre plaque</li>
            <li>✅ Une <strong>base de connaissances claire et vérifiée</strong></li>
            <li>✅ Des <strong>articles de blog</strong> sur les actualités auto</li>
            <li>✅ Des <strong>réponses concrètes</strong> à vos questions via notre FAQ</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
          <p className="mb-6">
            Nous ne cherchons pas à vendre à tout prix.  
            Nous cherchons à <strong>vous informer, vous guider</strong>, et vous permettre de <strong>faire un choix éclairé</strong>.
            <br />
            C’est pourquoi vous ne verrez ici <strong>ni pop-up agressif</strong>, ni prix barrés mensongers.  
            Juste <strong>des informations fiables</strong>, un outil pratique, et une vraie volonté de clarté.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Une question ? Un retour à nous faire ?</h2>
          <p className="mb-6">
            N’hésitez pas à nous contacter via notre <a href="/contact" className="text-blue-600 underline">formulaire de contact</a>.  
            Nous sommes à l’écoute, et toujours ouverts aux suggestions.
          </p>

          <div className="mt-12 text-center">
            <a
              href="#personnalisation"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              🎨 Je crée ma plaque personnalisée
            </a>
          </div>
        </section>
      </main>
      <FooterOptimized />
    </div>
  );
}
