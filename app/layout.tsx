import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://multicorretora-saude-seguros.togyro-yago-1881.chatgpt.site",
  ),
  title: {
    default: "Multicorretora | Planos de Saúde e Seguros em Brasília",
    template: "%s | Multicorretora",
  },
  description:
    "Compare planos de saúde e seguros para você, sua família ou sua empresa. Receba opções e orientação personalizada da Multicorretora pelo WhatsApp.",
  keywords: [
    "plano de saúde Brasília",
    "corretora de planos de saúde DF",
    "seguro saúde Brasília",
    "plano de saúde familiar",
    "plano de saúde empresarial",
    "seguro de vida DF",
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
  },
  openGraph: {
    title: "Multicorretora | Planos de Saúde e Seguros",
    description:
      "Compare planos de saúde e seguros com orientação clara. Receba opções personalizadas pelo WhatsApp.",
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
    title: "Multicorretora | Planos de Saúde e Seguros",
    description:
      "Compare opções e encontre um plano alinhado ao que você realmente precisa.",
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
