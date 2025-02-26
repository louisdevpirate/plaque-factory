'use client'
import { useTheme } from '@/hooks/useTheme'
import HeaderSection from '../components/HeaderSection'
import Navbar from '../components/Navbar'
import PersonalizationSection from '../components/PersonalizationSection'
import GallerySection from '../components/GallerySection'
import CategoriesSection from '../components/CategoriesSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import BlogSection from '@/components/BlogSection'

export default function Home() {
 const theme = useTheme();

 return (
   <main 
     className="min-h-screen"
     style={{ background: theme.colors.primary.gradient }}
   >

     <Navbar />
     <HeaderSection />
     <PersonalizationSection />
     
     {/* Section blanche englobante */}
     <div className="bg-white py-10">
       <GallerySection />
       <CategoriesSection />
     </div>

     <FaqSection />
     <BlogSection />
     <Footer />
   </main>
 );
}