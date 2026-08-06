import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { AccessibilityControls } from "./AccessibilityControls";
import { LocalSalesAgent } from "./LocalSalesAgent";
import {
  BUSINESS_CNPJ,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  SITE_URL,
  WHATSAPP_URL,
} from "../site-config";

export type SeoLandingContent = {
  slug: string;
  kicker: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  benefits: Array<{ title: string; text: string }>;
  guideTitle: string;
  guideParagraphs: string[];
  checklist: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const relatedPages = [
  {
    slug: "plano-de-saude-familiar-brasilia",
    label: "Plano de saúde familiar em Brasília",
  },
  {
    slug: "plano-de-saude-individual-brasilia",
    label: "Plano de saúde individual em Brasília",
  },
  {
    slug: "plano-de-saude-empresarial-brasilia",
    label: "Plano de saúde empresarial em Brasília",
  },
];

export function SeoLandingPage({ content }: { content: SeoLandingContent }) {
  const pageUrl = `${SITE_URL}/${content.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: content.title,
        description: content.lead,
        url: pageUrl,
        areaServed: ["Brasília", "Distrito Federal"],
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: BUSINESS_NAME,
          url: SITE_URL,
          telephone: BUSINESS_PHONE,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: WHATSAPP_URL,
          description: "Cotação personalizada e sem compromisso.",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <ShieldCheck size={15} aria-hidden="true" />
            Consultoria em saúde e proteção
          </span>
          <AccessibilityControls />
          <span className="company-document">CNPJ {BUSINESS_CNPJ}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="Multicorretora - página inicial">
            <Image
              src="/logo-multicorretora-menu.jpeg"
              alt="Multicorretora Planos de Saúde e Seguros"
              width={420}
              height={224}
              priority
            />
          </Link>
          <nav className="seo-nav" aria-label="Navegação principal">
            <Link href="/">Início</Link>
            <Link href="/#operadoras">Operadoras</Link>
            <Link href="/#duvidas">Dúvidas</Link>
          </nav>
          <a
            className="button button-small button-outline"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Pedir cotação
          </a>
        </div>
      </header>

      <main id="conteudo-principal" tabIndex={-1}>
        <div className="seo-breadcrumb container" aria-label="Navegação estrutural">
          <Link href="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{content.title}</span>
        </div>

        <section className="seo-landing-hero" aria-labelledby="seo-page-title">
          <div className="container seo-landing-grid">
            <div>
              <span className="section-kicker light">{content.kicker}</span>
              <h1 id="seo-page-title">{content.title}</h1>
              <p>{content.lead}</p>
              <div className="seo-landing-actions">
                <a
                  className="button button-primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Receber uma cotação
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="seo-phone-link" href="tel:+556184843238">
                  <PhoneCall aria-hidden="true" />
                  {BUSINESS_PHONE}
                </a>
              </div>
              <div className="seo-trust-list" aria-label="Vantagens do atendimento">
                <span><CircleCheckBig aria-hidden="true" /> Sem compromisso</span>
                <span><CircleCheckBig aria-hidden="true" /> Atendimento em Brasília e no DF</span>
              </div>
            </div>
            <div className="seo-landing-image">
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={1693}
                height={929}
                priority
              />
            </div>
          </div>
        </section>

        <section className="section seo-benefits" aria-labelledby="seo-benefits-title">
          <div className="container">
            <div className="center-heading">
              <span className="section-kicker">Compare antes de contratar</span>
              <h2 id="seo-benefits-title">O que vale a pena analisar</h2>
              <p>Uma boa escolha considera sua rotina, sua rede preferida e o investimento possível.</p>
            </div>
            <div className="seo-benefit-grid">
              {content.benefits.map((benefit) => (
                <article key={benefit.title}>
                  <Check aria-hidden="true" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section seo-guide" aria-labelledby="seo-guide-title">
          <div className="container seo-guide-grid">
            <div>
              <span className="section-kicker">Guia de contratação</span>
              <h2 id="seo-guide-title">{content.guideTitle}</h2>
              {content.guideParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside aria-label="Lista para comparar planos">
              <h3>Tenha estas informações em mãos</h3>
              <ul>
                {content.checklist.map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Comparar opções com um especialista
                <ArrowRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        <section className="section seo-related" aria-labelledby="seo-related-title">
          <div className="container">
            <h2 id="seo-related-title">Outras formas de contratar</h2>
            <div className="seo-related-links">
              {relatedPages
                .filter((page) => page.slug !== content.slug)
                .map((page) => (
                  <Link href={`/${page.slug}`} key={page.slug}>
                    {page.label}<ArrowRight aria-hidden="true" />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="section faq seo-faq" aria-labelledby="seo-faq-title">
          <div className="container faq-layout">
            <div className="faq-intro">
              <span className="section-kicker">Perguntas frequentes</span>
              <h2 id="seo-faq-title">Dúvidas antes da cotação</h2>
              <p>Entenda os pontos principais e fale com a equipe para confirmar as condições disponíveis.</p>
            </div>
            <div className="faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-card">
            <div>
              <span className="section-kicker light">Cotação personalizada</span>
              <h2>Compare opções disponíveis para o seu perfil.</h2>
              <p>Converse com a Multicorretora e avance com clareza, sem compromisso.</p>
            </div>
            <a className="button button-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Solicitar cotação agora
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-bottom seo-footer-bottom">
          <span>© {new Date().getFullYear()} Multicorretora.</span>
          <Link href="/">Planos de Saúde e Seguros em Brasília</Link>
          <span>CNPJ {BUSINESS_CNPJ}</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Solicitar cotação pelo WhatsApp">
        <MessageCircle aria-hidden="true" /><span>Cotar agora</span>
      </a>
      <LocalSalesAgent />
    </>
  );
}
