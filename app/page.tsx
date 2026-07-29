"use client";

import Image from "next/image";
import { useEffect } from "react";
import { LocalSalesAgent } from "./components/LocalSalesAgent";
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

const WHATSAPP_URL =
  "https://wa.me/556184843238?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Multicorretora%20e%20quero%20comparar%20planos%20para%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o%20para%20mim.";

const services = [
  {
    icon: Users,
    title: "Plano individual e familiar",
    text: "Compare redes, coberturas e valores para proteger quem você ama sem escolher no escuro.",
    tag: "Para quem você ama",
  },
  {
    icon: BriefcaseBusiness,
    title: "Plano empresarial",
    text: "Encontre um benefício competitivo para cuidar da equipe e valorizar sua empresa.",
    tag: "Soluções empresariais",
  },
  {
    icon: Stethoscope,
    title: "Plano por adesão",
    text: "Descubra alternativas disponíveis para sua categoria profissional e amplie suas possibilidades.",
    tag: "Compare possibilidades",
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
    question: "Como recebo uma cotação de plano de saúde?",
    answer:
      "Basta chamar a Multicorretora pelo WhatsApp e informar se o plano é individual, familiar ou empresarial. Nossa equipe entende o seu perfil e apresenta opções adequadas.",
  },
  {
    question: "A Multicorretora atende empresas?",
    answer:
      "Sim. Analisamos as necessidades da empresa e ajudamos a comparar planos e benefícios para equipes de diferentes portes.",
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
    "@type": "InsuranceAgency",
    name: "Multicorretora Planos de Saúde e Seguros",
    description:
      "Consultoria em planos de saúde e seguros para pessoas, famílias e empresas.",
    telephone: "+55 61 8484-3238",
    taxID: "19.607.678/0001-65",
    areaServed: "Distrito Federal",
    image: "/logo-multicorretora-menu.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 61 8484-3238",
      contactType: "sales",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <main>
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
          <span>CNPJ 19.607.678/0001-65</span>
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

      <section className="hero" id="inicio">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Sua cotação começa aqui
            </div>
            <h1>
              Encontre o plano certo <span>sem escolher no escuro.</span>
            </h1>
            <p className="hero-lead">
              Compare opções para você, sua família ou sua empresa com uma
              consultoria que explica cada detalhe e ajuda a evitar uma escolha
              que não combina com o que você precisa.
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

          <div className="hero-visual" aria-label="Proteção para você, sua família e sua empresa">
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

      <section className="section services" id="solucoes">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Nossas soluções</span>
              <h2>Compare hoje. Escolha com mais confiança.</h2>
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
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Ver opções para mim
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

      <section className="section about-section" id="sobre">
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
            <span className="section-kicker">Por que a Multicorretora?</span>
            <h2>Uma boa escolha começa com a orientação certa.</h2>
            <p>
              Redes, coberturas, carências e condições podem transformar uma
              escolha simples em uma decisão difícil. Nós traduzimos os
              detalhes, comparamos as alternativas e ajudamos você a avançar
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

      <section className="section process" id="como-funciona">
        <div className="container">
          <div className="center-heading" data-reveal>
            <span className="section-kicker">Simples do começo ao fim</span>
            <h2>Da dúvida à cotação em três passos.</h2>
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
                <span className="step-number">{step.number}</span>
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

      <section className="section faq" id="duvidas">
        <div className="container faq-layout">
          <div className="faq-intro" data-reveal>
            <span className="section-kicker">Perguntas frequentes</span>
            <h2>Tire a dúvida que está adiando sua escolha.</h2>
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
                  <span>+</span>
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
    </main>
  );
}
