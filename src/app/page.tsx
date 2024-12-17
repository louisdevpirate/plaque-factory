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