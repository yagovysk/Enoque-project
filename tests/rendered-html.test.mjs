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
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("mantém os elementos essenciais de conversão e SEO no código", async () => {
  const [page, agent, layout, styles, robots, sitemap] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/LocalSalesAgent.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /wa\.me\/556184843238/);
  assert.match(page, /data-reveal/);
  assert.match(page, /LocalSalesAgent/);
  assert.match(agent, /KNOWLEDGE_BASE/);
  assert.match(agent, /Conversa local, sem envio de dados/);
  assert.match(agent, /wa\.me\/556184843238/);
  assert.doesNotMatch(agent, /api\.openai\.com|OPENAI_API_KEY/);
  assert.match(page, /IntersectionObserver/);
  assert.match(page, /Plano de Sa\u00fade em Bras\u00edlia e DF/);
  assert.match(page, /"@type": "WebSite"/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /summary_large_image/);
  assert.match(robots, /sitemap/);
  assert.match(sitemap, /SITE_URL/);
});
