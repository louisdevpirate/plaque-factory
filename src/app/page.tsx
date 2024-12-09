import PersonalizationSection from '../components/PersonalizationSection'
import GallerySection from '../components/GallerySection'
import CategoriesSection from '../components/CategoriesSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Plaque Factory</h1>
            <div className="space-x-6">
              <a href="#personnalisation" className="hover:text-blue-600 transition-colors">Personnaliser</a>
              <a href="#galerie" className="hover:text-blue-600 transition-colors">Galerie</a>
              <a href="#categories" className="hover:text-blue-600 transition-colors">Catégories</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </nav>

      <PersonalizationSection />
      <GallerySection />
      <CategoriesSection />
      <FaqSection />
      <Footer />
    </main>
  )
}