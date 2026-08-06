import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Multicorretora Planos de Saúde e Seguros",
    short_name: "Multicorretora",
    description:
      "Cotação e comparação de planos de saúde e seguros em Brasília e no Distrito Federal.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfa",
    theme_color: "#061a37",
    lang: "pt-BR",
    icons: [
      {
        src: "/logo-multicorretora-menu.jpeg",
        sizes: "420x224",
        type: "image/jpeg",
      },
    ],
  };
}
