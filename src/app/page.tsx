'use client'
import { useTheme } from '@/hooks/useTheme'
import HeaderSection from '../components/HeaderSection'
import Navbar from '../components/Navbar'
import PersonalizationSection from '../components/PersonalizationSection'
import GallerySection from '../components/GallerySection'
import CategoriesSection from '../components/CategoriesSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
 const theme = useTheme();

 return (
   <main 
     className="min-h-screen"
     style={{ background: theme.colors.primary.gradient }}
   >
     {/* Logo */}
     <Link href="/" className="absolute top-8 left-10 flex items-center">
        <Image 
          src="/images/logo/1.svg"
          alt="Plaque Factory Logo"
          width={150}
          height={200}
        />
     </Link>

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
 );
}