// components/HomePage.tsx
"use client";

import { useTheme } from "@/hooks/useTheme";
import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import PersonalizationSection from "../components/PersonalizationSection";
import CategoriesSection from "../components/CategoriesSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import BlogSection from "@/components/BlogSection";
import Head from "next/head";
import FeedbackSection from "../components/FeedbackSection";
import AboutSection from "../components/AboutSection";
import VideoSection from "../components/VideoSection";

export default function HomePage() {
  const theme = useTheme();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LABONNEPLAQUE.fr",
    url: "https://www.labonneplaque.fr",
    logo: "https://www.labonneplaque.fr/logo.png",
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main
        className="min-h-screen"
        style={{ background: theme.colors.primary.gradient }}
      >
        <Navbar />
        <HeaderSection />
        <PersonalizationSection />
        <FeedbackSection />
        <CategoriesSection />
        <AboutSection />
        <FaqSection />
        <VideoSection />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
}
