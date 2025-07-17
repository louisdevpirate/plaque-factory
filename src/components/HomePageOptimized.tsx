// components/HomePage.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { defaultTheme } from "@/config/themes/default.theme";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import PersonalizationSectionLazy from "@/components/PersonalizationSectionLazy";
import { DeliverySection } from "./DeliverySection";

// Critical CSS for above-the-fold content
const criticalStyles = `
  .section-skeleton {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    background-color: #f3f4f6;
    height: 24rem;
    width: 100%;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }
`;

// Optimized skeleton loader
function SectionSkeleton() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
      <div className="section-skeleton">
        <div className="h-full flex items-center justify-center">
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-48"></div>
            <div className="h-4 bg-gray-300 rounded w-64"></div>
          </div>
        </div>
      </div>
    </>
  );
}

// Lazy load with preload on interaction
const lazyLoadWithPreload = (
  importFn: () => Promise<any>,
  displayName: string
) => {
  const Component = dynamic(importFn, {
    loading: () => <SectionSkeleton />,
    ssr: true,
  });
  
  // Preload on visibility
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            importFn();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );
    
    // Start observing when component mounts
    setTimeout(() => {
      const element = document.querySelector(`[data-preload="${displayName}"]`);
      if (element) observer.observe(element);
    }, 1000);
  }
  
  return Component;
};

// Lazy loaded components with preloading
const FeedbackSection = lazyLoadWithPreload(
  () => import("../components/FeedbackSection"),
  "FeedbackSection"
);

const CategoriesSectionOptimized = lazyLoadWithPreload(
  () => import("../components/CategoriesSectionOptimized"),
  "CategoriesSectionOptimized"
);

const AboutSectionOptimized = lazyLoadWithPreload(
  () => import("../components/AboutSectionOptimized"),
  "AboutSectionOptimized"
);

const FaqSectionOptimized = lazyLoadWithPreload(
  () => import("../components/FaqSectionOptimized"),
  "FaqSectionOptimized"
);

const VideoSectionOptimized = lazyLoadWithPreload(
  () => import("../components/VideoSectionOptimized"),
  "VideoSectionOptimized"
);

const BlogSectionServer = lazyLoadWithPreload(
  () => import("@/components/BlogSectionServer"),
  "BlogSectionOptimized"
);

const PaymentSection = lazyLoadWithPreload(
  () => import("../components/PaymentSection"),
  "PaymentSection"
);

const FooterOptimized = lazyLoadWithPreload(
  () => import("@/components/FooterOptimized"),
  "FooterOptimized"
);

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
        <PersonalizationSectionLazy />

        <div data-preload="ReassuranceSection">
          <Suspense fallback={<SectionSkeleton />}>
            <DeliverySection />
          </Suspense>
        </div>
        
        <div data-preload="FeedbackSection">
          <Suspense fallback={<SectionSkeleton />}>
            <FeedbackSection />
          </Suspense>
        </div>
        
        <div data-preload="CategoriesSectionOptimized">
          <Suspense fallback={<SectionSkeleton />}>
            <CategoriesSectionOptimized />
          </Suspense>
        </div>
        
        <div data-preload="AboutSectionOptimized">
          <Suspense fallback={<SectionSkeleton />}>
            <AboutSectionOptimized />
          </Suspense>
        </div>
        
        <div data-preload="FaqSection">
          <Suspense fallback={<SectionSkeleton />}>
            <FaqSectionOptimized />
          </Suspense>
        </div>
        
        <div data-preload="VideoSection">
          <Suspense fallback={<SectionSkeleton />}>
            <VideoSectionOptimized />
          </Suspense>
        </div>
        
        <div data-preload="BlogSection">
          <Suspense fallback={<SectionSkeleton />}>
            <BlogSectionServer />
          </Suspense>
        </div>

        <div data-preload="PaymentSection">
          <Suspense fallback={<SectionSkeleton />}>
            <PaymentSection />
          </Suspense>
        </div>
        
        <FooterOptimized />
      </main>
    </>
  );
}