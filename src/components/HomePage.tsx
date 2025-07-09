// components/HomePage.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { defaultTheme } from "@/config/themes/default.theme";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import PersonalizationSection from "../components/PersonalizationSectionOptimized";
import Footer from "../components/Footer";

// Lazy load heavy components
const FeedbackSection = dynamic(() => import("../components/FeedbackSection"), {
  loading: () => <SectionSkeleton />,
});

const CategoriesSection = dynamic(() => import("../components/CategoriesSectionOptimized"), {
  loading: () => <SectionSkeleton />,
});

const AboutSection = dynamic(() => import("../components/AboutSectionOptimized"), {
  loading: () => <SectionSkeleton />,
});

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <SectionSkeleton />,
});

const VideoSection = dynamic(() => import("../components/VideoSection"), {
  loading: () => <SectionSkeleton />,
});

const BlogSection = dynamic(() => import("@/components/BlogSectionServer"), {
  loading: () => <SectionSkeleton />,
});

// Simple loading skeleton
function SectionSkeleton() {
  return (
    <div className="animate-pulse bg-gray-100 h-96 w-full">
      <div className="h-full flex items-center justify-center">
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-48"></div>
          <div className="h-4 bg-gray-300 rounded w-64"></div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const theme = defaultTheme;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LABONNEPLAQUE.fr",
    url: "https://www.labonneplaque.fr",
    logo: "https://www.labonneplaque.fr/logo.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className="min-h-screen"
        style={{ background: theme.colors.primary.gradient }}
      >
        <Navbar />
        <HeaderSection />
        <PersonalizationSection />
        
        <Suspense fallback={<SectionSkeleton />}>
          <FeedbackSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <CategoriesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FaqSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <VideoSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BlogSection />
        </Suspense>
        
        <Footer />
      </main>
    </>
  );
}
