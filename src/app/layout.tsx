import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import GTM from "@/components/GTM";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import PerformanceMonitor from "@/components/PerformanceMonitor";

export const metadata: Metadata = {
  title: "LABONNEPLAQUE.fr",
  description:
    "Créez vos plaques d'immatriculation personnalisées et homologuées en quelques clics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* DNS Prefetch and Preconnect for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_SUPABASE_URL!} />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_SUPABASE_URL!} crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch and Preconnect */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://supabase.co" />
        <link rel="preconnect" href="https://supabase.co" />
        
        {/* ✅ Ajout du meta viewport pour le responsive */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="google-site-verification"
          content="V6KAzX4v_RTEpEchSzE0YyWi0pbjg5gfygwwZLhaqrU"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LABONNEPLAQUE.fr" />
        <meta name="publisher" content="LABONNEPLAQUE.fr" />
        <meta
          name="keywords"
          content="plaque d'immatriculation, plaque personnalisée, plaque auto, plaque moto, plaque plexiglass, plaque homologuée"
        />
        {/* Favicon & icônes */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" title="Manifest PWA de La Bonne Plaque" />
      </head>
      <body>
        <GTM />
        <ServiceWorkerRegistration />
        <PerformanceMonitor />
        <ClientWrapper>
          <div className="wrapper">{children}</div>
        </ClientWrapper>
      </body>
    </html>
  );
}
