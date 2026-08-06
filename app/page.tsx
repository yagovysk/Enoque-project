"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AccessibilityControls } from "./components/AccessibilityControls";
import { LocalSalesAgent } from "./components/LocalSalesAgent";
import { SITE_URL, WHATSAPP_URL } from "./site-config";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleCheckBig,
  Clock3,
  HeartPulse,
  Hospital,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  WalletCards,
} from "lucide-react";

const operators = [
  {
    name: "Amil",
    logo: "/operadoras/amil.png",
    width: 300,
    height: 107,
  },
  {
    name: "Unimed",
    logo: "/operadoras/unimed.png",
    width: 164,
    height: 59,
  },
  {
    name: "Bradesco Saúde",
    sprite: "operator-sprite-bradesco",
  },
  {
    name: "SulAmérica",
    sprite: "operator-sprite-sulamerica",
  },
  {
    name: "Quality Pró Saúde",
    logo: "/operadoras/quallity.png",
    width: 166,
    height: 68,
    dark: true,
  },
  {
    name: "Unity Saúde",
    logo: "/operadoras/unity.svg",
    width: 1355,
    height: 432,
  },
  {
    name: "Esyplan Saúde",
    sprite: "operator-sprite-esyplan",
  },
  {
    name: "Proasa Saúde",
    logo: "/operadoras/proasa.webp",
    width: 575,
    height: 96,
    wide: true,
  },
  {
    name: "MedSênior",
    logo: "/operadoras/medsenior.png",
    width: 2560,
    height: 885,
  },
  {
    name: "Best Senior",
    sprite: "operator-sprite-best",
  },
];

const services = [
  {
    icon: Users,
    title: "Plano de saúde individual e familiar",
    text: "Compare redes, coberturas e valores de planos de saúde em Brasília para proteger quem você ama.",
    tag: "Para quem você ama",
    href: "/plano-de-saude-familiar-brasilia",
  },
  {
    icon: BriefcaseBusiness,
    title: "Plano de saúde empresarial",
    text: "Encontre um benefício competitivo no Distrito Federal para cuidar da equipe e valorizar sua empresa.",
    tag: "Soluções empresariais",
    href: "/plano-de-saude-empresarial-brasilia",
  },
  {
    icon: Stethoscope,
    title: "Plano de saúde por adesão",
    text: "Descubra alternativas disponíveis para sua categoria profissional e amplie suas possibilidades.",
    tag: "Compare possibilidades",
    href: "/plano-de-saude-individual-brasilia",
  },
  {
    icon: ShieldCheck,
    title: "Seguro de vida",
    text: "Crie uma proteção financeira para quem depende de você e viva cada fase com mais tranquilidade.",
    tag: "Cuide do futuro",
  },
  {
    icon: Hospital,
    title: "Seguro saúde",
    text: "Tenha mais liberdade para cuidar da saúde com uma solução alinhada às suas prioridades.",
    tag: "Mais liberdade",
  },
  {
    icon: Building2,
    title: "Benefícios corporativos",
    text: "Receba uma análise consultiva para contratar benefícios que façam sentido para o negócio.",
    tag: "Decida com clareza",
  },
];

const steps = [
  {
    number: "01",
    title: "Diga o que você procura",
    text: "Uma conversa rápida nos ajuda a entender seu perfil, prioridades e investimento.",
  },
  {
    number: "02",
    title: "Receba opções para comparar",
    text: "Apresentamos alternativas de forma clara para facilitar a sua decisão.",
  },
  {
    number: "03",
    title: "Escolha e contrate com suporte",
    text: "Você decide com segurança e conta com acompanhamento durante a contratação.",
  },
];

const faqs = [
  {
    question: "Como escolher um plano de saúde em Brasília?",
    answer:
      "Considere a rede de hospitais e laboratórios que você usa no Distrito Federal, o tipo de acomodação, a coparticipação, as carências e a faixa de investimento. A Multicorretora ajuda a comparar esses pontos antes da contratação.",
  },
  {
    question: "Como recebo uma cotação de plano de saúde?",
    answer:
      "Basta chamar a Multicorretora pelo WhatsApp e informar se o plano é individual, familiar ou empresarial. Nossa equipe entende o seu perfil e apresenta opções adequadas.",
  },
  {
    question: "A Multicorretora atende empresas no Distrito Federal?",
    answer:
      "Sim. Atendemos empresas em Brasília e no Distrito Federal, analisando as necessidades do negócio e comparando planos de saúde e benefícios para equipes de diferentes portes.",
  },
  {
    question: "Posso contratar proteção para toda a família?",
    answer:
      "Sim. Existem alternativas familiares com diferentes redes, coberturas e faixas de investimento. A disponibilidade depende do perfil e da região.",
  },
  {
    question: "Vocês também trabalham com seguros?",
    answer:
      "Sim. Além de planos de saúde, a Multicorretora oferece consultoria em seguros para ampliar a proteção pessoal, familiar e empresarial.",
  },
  {
    question: "Com quais operadoras de planos de saúde vocês trabalham?",
    answer:
      "A Multicorretora oferece opções de Amil, Unimed, Bradesco Saúde, SulAmérica, Quality Pró Saúde, Unity Saúde, Esyplan Saúde, Proasa Saúde, MedSênior e Best Senior. A disponibilidade varia conforme região, perfil e modalidade de contratação.",
  },
];

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -48px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "InsuranceAgency"],
        "@id": `${SITE_URL}/#organization`,
        name: "Multicorretora Planos de Saúde e Seguros",
        alternateName: "Multicorretora",
        legalName: "Multicorretora Planos de Saúde e Seguros",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-multicorretora-menu.jpeg`,
        image: `${SITE_URL}/og.png`,
        description:
          "Corretora de planos de saúde e seguros para pessoas, famílias e empresas em Brasília e no Distrito Federal.",
        telephone: "+55 61 8484-3238",
        taxID: "19.607.678/0001-65",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "CNPJ",
          value: "19.607.678/0001-65",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Brasília",
          },
          {
            "@type": "AdministrativeArea",
            name: "Distrito Federal",
          },
        ],
        knowsAbout: [
          "Plano de saúde individual",
          "Plano de saúde familiar",
          "Plano de saúde empresarial",
          "Plano de saúde por adesão",
          "Seguro saúde",
          "Seguro de vida",
          "Benefícios corporativos",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55 61 8484-3238",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planos de saúde e seguros",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plano de saúde familiar em Brasília",
                url: `${SITE_URL}/plano-de-saude-familiar-brasilia`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plano de saúde individual em Brasília",
                url: `${SITE_URL}/plano-de-saude-individual-brasilia`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plano de saúde empresarial em Brasília",
                url: `${SITE_URL}/plano-de-saude-empresarial-brasilia`,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Multicorretora",
        alternateName: "Multicorretora Planos de Saúde e Seguros",
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Plano de Saúde em Brasília e DF | Multicorretora",
        description:
          "Compare planos de saúde individuais, familiares e empresariais em Brasília e no Distrito Federal.",
        inLanguage: "pt-BR",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((faq) => ({
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
      <a className="skip-link skip-link-chat" href="#assistente-multi">
        Pular para a assistente virtual
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
          <span className="company-document">CNPJ 19.607.678/0001-65</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Multicorretora - início">
            <Image
              src="/logo-multicorretora-menu.jpeg"
              alt="Multicorretora Planos de Saúde e Seguros"
              width={420}
              height={224}
              priority
            />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#operadoras">Operadoras</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a
            className="button button-small button-outline"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Comparar planos agora
          </a>
        </div>
      </header>

      <main id="conteudo-principal" tabIndex={-1}>
      <section className="hero" id="inicio" aria-labelledby="titulo-principal">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Sua cotação começa aqui
            </div>
            <h1 id="titulo-principal">
              Encontre o plano de saúde certo em Brasília{" "}
              <span>sem escolher no escuro.</span>
            </h1>
            <p className="hero-lead">
              Compare planos de saúde para você, sua família ou sua empresa em
              Brasília e no Distrito Federal, com uma consultoria que explica
              cada detalhe e ajuda a evitar uma escolha que não combina com o
              que você precisa.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Receber opções no WhatsApp
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a className="text-link" href="#solucoes">
                Ver opções de proteção
                <ChevronRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-row" aria-label="Diferenciais">
              <span>
                <CircleCheckBig size={17} aria-hidden="true" />
                Cotação sem compromisso
              </span>
              <span>
                <CircleCheckBig size={17} aria-hidden="true" />
                Orientação de verdade
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" aria-hidden="true" />
            <div className="family-hero-card">
              <Image
                src="/familia-hero.png"
                alt="Família sorrindo reunida em casa"
                width={1693}
                height={929}
                className="family-hero-image"
                priority
              />
              <div className="family-photo-shade" aria-hidden="true" />
              <div className="family-photo-badge">
                <ShieldCheck size={18} aria-hidden="true" />
                Proteção para toda a família
              </div>
            </div>
            <div className="floating-card floating-top">
              <span className="icon-box">
                <HeartPulse size={23} aria-hidden="true" />
              </span>
              <span>
                <small>Para você</small>
                Opções para o seu perfil
              </span>
            </div>
            <div className="floating-card floating-bottom">
              <span className="icon-box shield">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>
              <span>
                <small>Proteção</small>
                Decida com confiança
              </span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#solucoes" aria-label="Ir para as soluções">
          <span />
        Compare
        </a>
      </section>

      <section className="benefit-strip" aria-label="Benefícios">
        <div className="container benefit-grid">
          <div>
            <BadgeCheck aria-hidden="true" />
            <span>
              <strong>Escolha sem dúvida</strong>
              Entenda antes de contratar
            </span>
          </div>
          <div>
            <Clock3 aria-hidden="true" />
            <span>
              <strong>Comece agora</strong>
              Cotação pelo WhatsApp
            </span>
          </div>
          <div>
            <WalletCards aria-hidden="true" />
            <span>
              <strong>Evite pagar pelo que não usa</strong>
              Compare o que realmente importa
            </span>
          </div>
        </div>
      </section>

      <section className="section operators-section" id="operadoras" aria-labelledby="titulo-operadoras">
        <div className="operators-glow operators-glow-one" aria-hidden="true" />
        <div className="operators-glow operators-glow-two" aria-hidden="true" />
        <div className="container">
          <div className="operators-heading" data-reveal>
            <div>
              <span className="section-kicker light">Operadoras disponíveis</span>
              <h2 id="titulo-operadoras">Grandes marcas. Uma comparação feita para você.</h2>
            </div>
            <p>
              Compare rede, cobertura, carência e investimento entre diferentes
              operadoras com a orientação da Multicorretora.
            </p>
          </div>

          <div className="operators-grid">
            {operators.map((operator, index) => (
              <a
                className="operator-card"
                data-reveal
                href={WHATSAPP_URL}
                key={operator.name}
                rel="noreferrer"
                style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}
                target="_blank"
                aria-label={`Consultar planos da ${operator.name} pelo WhatsApp`}
              >
                <span
                  className={`operator-logo-frame${operator.dark ? " is-dark" : ""}`}
                >
                  {operator.logo ? (
                    <Image
                      src={operator.logo}
                      alt={`Logo ${operator.name}`}
                      width={operator.width}
                      height={operator.height}
                      className={operator.wide ? "operator-logo-wide" : undefined}
                    />
                  ) : (
                    <span
                      className={`operator-sprite ${operator.sprite}`}
                      role="img"
                      aria-label={`Logo ${operator.name}`}
                    />
                  )}
                </span>
                <span className="operator-card-footer">
                  <span>
                    <small>Consulte disponibilidade</small>
                    <strong>{operator.name}</strong>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <div className="operators-note" data-reveal>
            <ShieldCheck aria-hidden="true" />
            <p>
              As marcas pertencem aos respectivos titulares. Operadoras e
              condições estão sujeitas à disponibilidade por região, faixa
              etária, produto e modalidade de contratação.
            </p>
          </div>
        </div>
      </section>

      <section className="section services" id="solucoes" aria-labelledby="titulo-solucoes">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Nossas soluções</span>
              <h2 id="titulo-solucoes">Compare hoje. Escolha com mais confiança.</h2>
            </div>
            <p>
              Você conta o que precisa. Nós ajudamos a filtrar as opções e
              mostramos o que vale a pena considerar antes de contratar.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  className="service-card"
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
                  key={service.title}
                >
                  <div className="service-icon">
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href={service.href ?? WHATSAPP_URL}
                    target={service.href ? undefined : "_blank"}
                    rel={service.href ? undefined : "noreferrer"}
                  >
                    {service.href ? "Ver guia e opções" : "Ver opções para mim"}
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="disclaimer">
            *Condições e disponibilidade variam conforme operadora, região e
            perfil de contratação.
          </p>
        </div>
      </section>

      <section className="section about-section" id="sobre" aria-labelledby="titulo-sobre">
        <div className="container about-layout">
          <div className="about-visual" data-reveal>
            <div className="about-card">
              <Image
                src="/familia-geracoes.png"
                alt="Família de diferentes gerações caminhando junta em um parque"
                fill
                sizes="(max-width: 980px) 100vw, 46vw"
                className="about-family-image"
              />
              <div className="about-image-overlay" aria-hidden="true" />
              <span className="section-kicker light">Nossa essência</span>
              <h2>Proteger hoje.<br />Cuidar do amanhã.</h2>
              <p>
                A Multicorretora simplifica a comparação para você contratar
                sabendo o que está levando.
              </p>
              <div className="about-signature">
                <div>
                  <HeartPulse aria-hidden="true" />
                </div>
                Saúde com qualidade
              </div>
            </div>
          </div>
          <div className="about-copy" data-reveal>
            <span className="section-kicker">Corretora em Brasília e no DF</span>
            <h2 id="titulo-sobre">
              Planos de saúde e seguros com orientação para escolher melhor.
            </h2>
            <p>
              A Multicorretora atende pessoas, famílias e empresas em Brasília
              e no Distrito Federal. Traduzimos redes, coberturas, carências e
              condições, comparamos as alternativas e ajudamos você a avançar
              com segurança.
            </p>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Entenda as diferenças antes de contratar
              </li>
              <li>
                <Check aria-hidden="true" />
                Soluções para pessoas, famílias e empresas
              </li>
              <li>
                <Check aria-hidden="true" />
                Receba opções alinhadas às suas prioridades
              </li>
              <li>
                <Check aria-hidden="true" />
                Tenha suporte para concluir sua contratação
              </li>
            </ul>
            <a
              className="button button-dark"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Quero ajuda para escolher
              <MessageCircle size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section process" id="como-funciona" aria-labelledby="titulo-processo">
        <div className="container">
          <div className="center-heading" data-reveal>
            <span className="section-kicker">Simples do começo ao fim</span>
            <h2 id="titulo-processo">Da dúvida à cotação em três passos.</h2>
            <p>Sem formulários longos. Comece agora com uma conversa.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article
                className="step-card"
                data-reveal
                style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
                key={step.number}
              >
                <span className="step-number" aria-hidden="true">{step.number}</span>
                <div className="step-icon">
                  {index === 0 && <MessageCircle aria-hidden="true" />}
                  {index === 1 && <Star aria-hidden="true" />}
                  {index === 2 && <ShieldCheck aria-hidden="true" />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="duvidas" aria-labelledby="titulo-duvidas">
        <div className="container faq-layout">
          <div className="faq-intro" data-reveal>
            <span className="section-kicker">Perguntas frequentes</span>
            <h2 id="titulo-duvidas">Tire a dúvida que está adiando sua escolha.</h2>
            <p>
              Se uma rede, cobertura ou condição ainda não ficou clara, fale
              com a nossa equipe antes de decidir.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com um especialista agora
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card" data-reveal>
          <div className="cta-orb" aria-hidden="true" />
          <div>
            <span className="section-kicker light">Comece sem compromisso</span>
            <h2>Sua melhor opção pode estar a uma conversa de distância.</h2>
            <p>
              Conte o que você precisa e receba opções para comparar com calma,
              clareza e suporte.
            </p>
          </div>
          <a
            className="button button-white"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={21} aria-hidden="true" />
            Quero comparar planos agora
          </a>
        </div>
      </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Image
              src="/logo-multicorretora-menu.jpeg"
              alt="Multicorretora"
              width={420}
              height={224}
            />
            <p>Compare planos e seguros com clareza antes de contratar.</p>
          </div>
          <div className="footer-nav">
            <strong>Navegação</strong>
            <a href="#solucoes">Soluções</a>
            <a href="#operadoras">Operadoras</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <div className="footer-contact">
            <strong>Fale conosco</strong>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <PhoneCall size={17} aria-hidden="true" />
              +55 61 8484-3238
            </a>
            <span>CNPJ 19.607.678/0001-65</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Multicorretora. Todos os direitos
            reservados.
          </span>
          <span>Planos de Saúde e Seguros</span>
          <span className="footer-credit">
            Desenvolvido por{" "}
            <a
              href="https://www.togyrogroupvictory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TogyroGroup
            </a>
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Multicorretora pelo WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>Cotar agora</span>
      </a>
      <LocalSalesAgent />
    </>
  );
}
