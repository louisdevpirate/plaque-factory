import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "LABONNEPLAQUE.fr",
  description:
    "Plaques d'immatriculation personnalisées et homologuées qui reflètent votre personnalité",
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <ClientWrapper>
          <div className="wrapper">{children}</div>
        </ClientWrapper>
      </body>
    </html>
  );
}
