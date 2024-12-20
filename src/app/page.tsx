import HeaderSection from '../components/HeaderSection'
import Navbar from '../components/Navbar'
import PersonalizationSection from '../components/PersonalizationSection'
import GallerySection from '../components/GallerySection'
import CategoriesSection from '../components/CategoriesSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Logo */}
      <a href="/" className="absolute top-8 left-10 flex items-center">
        <img 
          src="/images/logo/1.png"
          alt="Plaque Factory Logo"
          className="h-auto w-60"
        />
      </a>

      <Navbar />
      <HeaderSection />
      <PersonalizationSection />
      
      {/* Section blanche englobante */}
      <div className="bg-white py-10">
        <GallerySection />
        <CategoriesSection />
      </div>

      <FaqSection />
      <Footer />
    </main>
  )
}