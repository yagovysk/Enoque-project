import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Multicorretora | Planos de Saúde e Seguros em Brasília",
    template: "%s | Multicorretora",
  },
  description:
    "Encontre planos de saúde e seguros para você, sua família ou sua empresa. Receba orientação personalizada da Multicorretora pelo WhatsApp.",
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
      "Proteção inteligente para você, sua família e sua empresa. Solicite uma cotação personalizada.",
    type: "website",
    locale: "pt_BR",
    siteName: "Multicorretora",
  },
  twitter: {
    card: "summary",
    title: "Multicorretora | Planos de Saúde e Seguros",
    description:
      "Planos de saúde e seguros com atendimento próximo e personalizado.",
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
    icon: "/logo-multicorretora.jpeg",
    shortcut: "/logo-multicorretora.jpeg",
    apple: "/logo-multicorretora.jpeg",
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
