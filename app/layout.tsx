import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Plano de Saúde em Brasília e DF | Multicorretora",
    template: "%s | Multicorretora",
  },
  description:
    "Compare planos de saúde individuais, familiares e empresariais em Brasília e no Distrito Federal. Fale com a Multicorretora e receba orientação personalizada.",
  keywords: [
    "plano de saúde Brasília",
    "planos de saúde Brasília DF",
    "corretora de planos de saúde DF",
    "corretora de seguros Brasília",
    "plano de saúde familiar",
    "plano de saúde familiar Brasília",
    "plano de saúde empresarial",
    "plano empresarial Brasília",
    "plano de saúde por adesão",
    "cotação plano de saúde",
    "seguro saúde Brasília",
    "seguro de vida DF",
    "plano Amil Brasília",
    "plano Unimed Brasília",
    "Bradesco Saúde Brasília",
    "SulAmérica Saúde Brasília",
    "MedSênior Brasília",
    "Multicorretora",
  ],
  authors: [{ name: "Multicorretora" }],
  creator: "Multicorretora Planos de Saúde e Seguros",
  publisher: "Multicorretora",
  applicationName: "Multicorretora",
  category: "Saúde e Seguros",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "Plano de Saúde em Brasília e DF | Multicorretora",
    description:
      "Compare planos individuais, familiares e empresariais com orientação clara em Brasília e no Distrito Federal.",
    url: SITE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: "Multicorretora",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Multicorretora — cuidado para cada fase da vida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plano de Saúde em Brasília e DF | Multicorretora",
    description:
      "Compare planos de saúde em Brasília e encontre uma opção alinhada ao seu perfil.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo-multicorretora-menu.jpeg",
    shortcut: "/logo-multicorretora-menu.jpeg",
    apple: "/logo-multicorretora-menu.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
