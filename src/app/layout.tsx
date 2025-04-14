import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import ClientWrapper from '@/components/ClientWrapper';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap', // Améliore le chargement de la police
});

export const metadata: Metadata = {
  title: "Plaque Factory",
  description: "Plaques d'immatriculation personnalisées et homologuées qui reflètent votre personnalité",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="V6KAzX4v_RTEpEchSzE0YyWi0pbjg5gfygwwZLhaqrU" />
      </head>
      <body>
        <ClientWrapper>
          <div className="wrapper">
            {children}
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
