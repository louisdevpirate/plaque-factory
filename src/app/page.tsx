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
      <PersonalizationSection />
      <GallerySection />
      <CategoriesSection />
      <FaqSection />
      <Footer />
    </main>
  )
}