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
        {/* Favicon & icônes - Kit complet La Bonne Plaque */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        
        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-150x150.png" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" title="Manifest PWA de La Bonne Plaque" />
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
