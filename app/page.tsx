"use client";

import Image from "next/image";
import { useEffect } from "react";
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
  "https://wa.me/556184843238?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Multicorretora%20e%20quero%20receber%20uma%20cota%C3%A7%C3%A3o.";

const services = [
  {
    icon: Users,
    title: "Plano individual e familiar",
    text: "Proteção sob medida para você e para quem faz parte da sua vida.",
    tag: "Cuidado completo",
  },
  {
    icon: BriefcaseBusiness,
    title: "Plano empresarial",
    text: "Benefícios de saúde para valorizar sua equipe e fortalecer o negócio.",
    tag: "A partir de 2 vidas*",
  },
  {
    icon: Stethoscope,
    title: "Plano por adesão",
    text: "Alternativas para profissionais vinculados a categorias e entidades.",
    tag: "Mais possibilidades",
  },
  {
    icon: ShieldCheck,
    title: "Seguro de vida",
    text: "Tranquilidade financeira para você e sua família em cada fase.",
    tag: "Proteção financeira",
  },
  {
    icon: Hospital,
    title: "Seguro saúde",
    text: "Liberdade de escolha e suporte para cuidar da saúde com confiança.",
    tag: "Flexibilidade",
  },
  {
    icon: Building2,
    title: "Benefícios corporativos",
    text: "Consultoria para encontrar soluções alinhadas à realidade da empresa.",
    tag: "Atendimento consultivo",
  },
];

const steps = [
  {
    number: "01",
    title: "Conte o que você precisa",
    text: "Entendemos seu perfil, prioridades e faixa de investimento.",
  },
  {
    number: "02",
    title: "Compare as melhores opções",
    text: "Você recebe alternativas claras para escolher com segurança.",
  },
  {
    number: "03",
    title: "Contrate com suporte",
    text: "Acompanhamos o processo e seguimos ao seu lado após a contratação.",
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
    image: "/logo-multicorretora.jpeg",
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
              src="/logo-multicorretora.jpeg"
              alt="Multicorretora Planos de Saúde e Seguros"
              width={300}
              height={200}
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
            Falar com um consultor
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
              Proteção inteligente para cada fase
            </div>
            <h1>
              Seu futuro merece <span>mais cuidado.</span>
            </h1>
            <p className="hero-lead">
              Encontre planos de saúde e seguros que combinam com você, sua
              família ou sua empresa — com orientação clara do início ao fim.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Quero minha cotação
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <a className="text-link" href="#solucoes">
                Conheça as soluções
                <ChevronRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="trust-row" aria-label="Diferenciais">
              <span>
                <CircleCheckBig size={17} aria-hidden="true" />
                Atendimento humano
              </span>
              <span>
                <CircleCheckBig size={17} aria-hidden="true" />
                Comparação transparente
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Proteção para você, sua família e sua empresa">
            <div className="visual-glow" aria-hidden="true" />
            <div className="logo-card">
              <div className="logo-halo" aria-hidden="true" />
              <Image
                src="/logo-multicorretora.jpeg"
                alt=""
                width={480}
                height={320}
                className="hero-logo"
                priority
              />
              <div className="logo-card-footer">
                <span>Planos de saúde</span>
                <span className="dot" />
                <span>Seguros</span>
              </div>
            </div>
            <div className="floating-card floating-top">
              <span className="icon-box">
                <HeartPulse size={23} aria-hidden="true" />
              </span>
              <span>
                <small>Para você</small>
                Cuidado personalizado
              </span>
            </div>
            <div className="floating-card floating-bottom">
              <span className="icon-box shield">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>
              <span>
                <small>Proteção</small>
                Escolhas mais seguras
              </span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#solucoes" aria-label="Ir para as soluções">
          <span />
          Descubra
        </a>
      </section>

      <section className="benefit-strip" aria-label="Benefícios">
        <div className="container benefit-grid">
          <div>
            <BadgeCheck aria-hidden="true" />
            <span>
              <strong>Consultoria próxima</strong>
              Orientação para decidir bem
            </span>
          </div>
          <div>
            <Clock3 aria-hidden="true" />
            <span>
              <strong>Resposta ágil</strong>
              Cotação direto pelo WhatsApp
            </span>
          </div>
          <div>
            <WalletCards aria-hidden="true" />
            <span>
              <strong>Escolha consciente</strong>
              Opções alinhadas ao seu perfil
            </span>
          </div>
        </div>
      </section>

      <section className="section services" id="solucoes">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Nossas soluções</span>
              <h2>Proteção que acompanha a sua vida.</h2>
            </div>
            <p>
              Cuidamos da pesquisa e da comparação para você escolher com mais
              clareza, tranquilidade e confiança.
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
                    Solicitar cotação
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
              <span className="section-kicker light">Nossa essência</span>
              <h2>Proteger hoje.<br />Cuidar do amanhã.</h2>
              <p>
                A Multicorretora aproxima você das soluções certas com escuta,
                clareza e acompanhamento em cada decisão.
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
            <h2>Você não precisa escolher sozinho.</h2>
            <p>
              Entre tantas redes, coberturas e condições, uma boa orientação
              faz toda a diferença. Traduzimos as opções para uma conversa
              simples e ajudamos você a avaliar o que realmente importa.
            </p>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Atendimento próximo, sem complicação
              </li>
              <li>
                <Check aria-hidden="true" />
                Soluções para pessoas, famílias e empresas
              </li>
              <li>
                <Check aria-hidden="true" />
                Suporte durante todo o processo de contratação
              </li>
              <li>
                <Check aria-hidden="true" />
                Comunicação clara para uma escolha consciente
              </li>
            </ul>
            <a
              className="button button-dark"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Conversar com a equipe
              <MessageCircle size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section process" id="como-funciona">
        <div className="container">
          <div className="center-heading" data-reveal>
            <span className="section-kicker">Simples do começo ao fim</span>
            <h2>Seu plano ideal em três passos.</h2>
            <p>Sem formulários longos. Comece com uma conversa.</p>
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
            <h2>Informação clara também é cuidado.</h2>
            <p>
              Ainda ficou com alguma dúvida? Nossa equipe está pronta para
              conversar com você.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Tirar uma dúvida no WhatsApp
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
            <span className="section-kicker light">Seu próximo passo</span>
            <h2>Vamos encontrar a proteção certa para você?</h2>
            <p>
              Fale agora com a Multicorretora e receba uma orientação
              personalizada.
            </p>
          </div>
          <a
            className="button button-white"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={21} aria-hidden="true" />
            Pedir cotação pelo WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Image
              src="/logo-multicorretora.jpeg"
              alt="Multicorretora"
              width={270}
              height={180}
            />
            <p>Planos de saúde e seguros com orientação e cuidado.</p>
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
        <span>Fale conosco</span>
      </a>
    </main>
  );
}
