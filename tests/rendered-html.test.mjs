import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza a página comercial da Multicorretora", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Multicorretora/);
  assert.match(html, /Encontre o plano de sa\u00fade certo em Bras\u00edlia/);
  assert.match(html, /Receber opções no WhatsApp/);
  assert.match(html, /19\.607\.678\/0001-65/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /InsuranceAgency/);
  assert.match(html, /google-site-verification/);
  assert.match(html, /1ztyvGNqZukwjXiim3kmT7uPf0Bx0r6W28ENLOl8foU/);
  assert.match(html, /https:\/\/multicorretora\.com\.br/);
  assert.match(html, /Operadoras disponíveis/);
  assert.match(html, /Bradesco Saúde/);
  assert.match(html, /MedSênior/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("mantém os elementos essenciais de conversão e SEO no código", async () => {
  const [
    page,
    agent,
    accessibility,
    landing,
    layout,
    styles,
    robots,
    sitemap,
    siteConfig,
  ] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/LocalSalesAgent.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/components/AccessibilityControls.tsx", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL("../app/components/SeoLandingPage.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/site-config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(siteConfig, /wa\.me\/556184843238/);
  assert.match(siteConfig, /https:\/\/multicorretora\.com\.br/);
  assert.match(page, /data-reveal/);
  assert.match(page, /LocalSalesAgent/);
  assert.match(page, /Pular para o conteúdo principal/);
  assert.match(accessibility, /Controles de acessibilidade/);
  assert.match(page, /aria-labelledby="titulo-principal"/);
  assert.match(page, /operadoras\/amil\.png/);
  assert.match(page, /operadoras\/unity\.svg/);
  assert.match(agent, /KNOWLEDGE_BASE/);
  assert.match(agent, /Conversa local, sem envio de dados/);
  assert.match(agent, /role="dialog"/);
  assert.match(agent, /role="log"/);
  assert.match(agent, /event\.key === "Escape"/);
  assert.match(agent, /wa\.me\/556184843238/);
  assert.doesNotMatch(agent, /api\.openai\.com|OPENAI_API_KEY/);
  assert.match(page, /IntersectionObserver/);
  assert.match(page, /Plano de Sa\u00fade em Bras\u00edlia e DF/);
  assert.match(page, /"@type": "WebSite"/);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(landing, /"@type": "Service"/);
  assert.match(landing, /"@type": "BreadcrumbList"/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /data-high-contrast/);
  assert.match(styles, /\.skip-link/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /1ztyvGNqZukwjXiim3kmT7uPf0Bx0r6W28ENLOl8foU/);
  assert.match(robots, /sitemap/);
  assert.match(sitemap, /SITE_URL/);
  assert.match(sitemap, /plano-de-saude-familiar-brasilia/);
  assert.match(sitemap, /plano-de-saude-individual-brasilia/);
  assert.match(sitemap, /plano-de-saude-empresarial-brasilia/);
});

test("renderiza as páginas de intenção de busca", async () => {
  const routes = [
    ["/plano-de-saude-familiar-brasilia", /Plano de saúde familiar em Brasília/],
    ["/plano-de-saude-individual-brasilia", /Plano de saúde individual em Brasília/],
    ["/plano-de-saude-empresarial-brasilia", /Plano de saúde empresarial em Brasília/],
  ];

  for (const [path, title] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, title);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /rel="canonical"/);
    assert.match(html, /multicorretora\.com\.br/);
    assert.match(html, /Solicitar cotação agora/);
  }
});
