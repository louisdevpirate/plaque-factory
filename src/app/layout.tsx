import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}