import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: "Plaques personnalisées dès 15€ | Livraison 24h | LABONNEPLAQUE.fr",
  description: "Créez votre plaque d'immatriculation personnalisée dès 15€. Large choix de styles, finitions premium, livraison rapide 24h. Configurateur en ligne simple et sécurisé.",
  openGraph: {
    title: "Plaques personnalisées dès 15€ | Livraison 24h | LABONNEPLAQUE.fr",
    description: "Créez votre plaque d'immatriculation personnalisée dès 15€. Large choix de styles, finitions premium, livraison rapide 24h.",
  },
}

export default function PlaquesPersonnaliseesPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black pt-24">
        {/* HERO */}
        <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div>
                <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                  Plaques <span className="italic">personnalisées</span>
                  <span className="text-2xl text-green-600 block mt-2 font-bold">À partir de 15€</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Créez votre plaque d'immatriculation personnalisée avec notre configurateur intelligent. 
                  Large choix de styles, finitions premium, livraison rapide 24h.
                </p>
                <CTAButton
                  href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
                  variant="primary"
                  size="lg"
                  external
                  className="text-lg py-4 px-8"
                >
                  Créer ma plaque maintenant
                </CTAButton>
              </div>
              <div className="text-center">
                <Image
                  src="/images/social-proof.png"
                  alt="Plaque personnalisée exemple"
                  width={500}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AVANTAGES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-12">
              Pourquoi choisir nos plaques personnalisées ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Livraison 24h</h3>
                <p className="text-gray-600">Recevez votre plaque rapidement</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-medium mb-2">100% Homologuées</h3>
                <p className="text-gray-600">Conformes à la réglementation</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Large Choix</h3>
                <p className="text-gray-600">Styles et finitions variés</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
