const FALLBACK_SITE_URL =
  "https://multicorretora.com.br";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/$/, "");

export const WHATSAPP_URL =
  "https://wa.me/556184843238?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Multicorretora%20e%20quero%20comparar%20planos%20para%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o%20para%20mim.";

export const BUSINESS_NAME = "Multicorretora Planos de Saúde e Seguros";
export const BUSINESS_PHONE = "+55 61 8484-3238";
export const BUSINESS_CNPJ = "19.607.678/0001-65";
