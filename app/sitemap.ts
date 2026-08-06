import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-06T00:00:00-03:00");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/familia-hero.png`,
        `${SITE_URL}/familia-geracoes.png`,
        `${SITE_URL}/og.png`,
      ],
    },
    {
      url: `${SITE_URL}/plano-de-saude-familiar-brasilia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/familia-hero.png`],
    },
    {
      url: `${SITE_URL}/plano-de-saude-individual-brasilia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/familia-geracoes.png`],
    },
    {
      url: `${SITE_URL}/plano-de-saude-empresarial-brasilia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/og.png`],
    },
  ];
}
