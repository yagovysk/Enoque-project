const FALLBACK_SITE_URL =
  "https://multicorretora-saude-seguros.togyro-yago-1881.chatgpt.site";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/$/, "");
