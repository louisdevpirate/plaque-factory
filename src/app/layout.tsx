import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

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
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-NK44PNK5'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NK44PNK5');`,
          }}
        />
      </head>
      <body className={montserrat.variable}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK44PNK5"
            height="0"
            width="0"
            title="Configurateur plaque d'immatriculation"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ClientWrapper>
          <div className="wrapper">{children}</div>
        </ClientWrapper>
      </body>
    </html>
  );
}
