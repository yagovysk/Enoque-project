import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingContent } from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Plano de Saúde Familiar em Brasília e DF",
  description:
    "Compare planos de saúde familiares em Brasília e no DF. Analise rede, carência, coparticipação e solicite uma cotação personalizada.",
  alternates: { canonical: "/plano-de-saude-familiar-brasilia" },
  openGraph: {
    title: "Plano de Saúde Familiar em Brasília e DF | Multicorretora",
    description: "Proteja sua família com um plano alinhado à rotina, à rede desejada e ao orçamento.",
    url: "/plano-de-saude-familiar-brasilia",
    images: [{ url: "/familia-hero.png", width: 1693, height: 929, alt: "Família reunida e sorrindo" }],
  },
};

const content: SeoLandingContent = {
  slug: "plano-de-saude-familiar-brasilia",
  kicker: "Proteção para quem você ama",
  title: "Plano de saúde familiar em Brasília e no Distrito Federal",
  lead:
    "Compare opções para cuidar de adultos, crianças e idosos com uma rede adequada à rotina da família. A Multicorretora ajuda a entender coberturas, carências, coparticipação e investimento antes da contratação.",
  image: "/familia-hero.png",
  imageAlt: "Família sorrindo reunida em casa",
  benefits: [
    {
      title: "Rede próxima da família",
      text: "Verifique hospitais, laboratórios e clínicas nas regiões de Brasília e do DF que fazem parte da rotina de cada beneficiário.",
    },
    {
      title: "Mensalidade e coparticipação",
      text: "Compare o valor mensal com as cobranças por utilização para entender o custo real do plano ao longo do tempo.",
    },
    {
      title: "Cobertura para diferentes idades",
      text: "Considere as necessidades de crianças, adultos e idosos, além de acomodação, abrangência e serviços previstos no contrato.",
    },
  ],
  guideTitle: "Como escolher um plano familiar sem olhar apenas o preço",
  guideParagraphs: [
    "O plano mais barato nem sempre atende aos hospitais e laboratórios que sua família utiliza. Antes de comparar mensalidades, liste as regiões onde vocês moram, trabalham e estudam, além dos prestadores considerados importantes.",
    "Também é essencial conferir carências, regras de inclusão de dependentes, acomodação em enfermaria ou apartamento e a existência de coparticipação. A disponibilidade e os valores variam conforme idades, município, operadora e modalidade de contratação.",
    "Com essas informações, a Multicorretora consegue filtrar opções e apresentar diferenças de forma clara para que a decisão seja adequada ao momento da família.",
  ],
  checklist: [
    "Quantidade de pessoas e idade de cada beneficiário",
    "Hospitais, laboratórios e regiões prioritárias",
    "Preferência por enfermaria ou apartamento",
    "Faixa de investimento mensal planejada",
    "Interesse em plano com ou sem coparticipação",
  ],
  faqs: [
    {
      question: "Quem pode entrar em um plano de saúde familiar?",
      answer: "As regras de dependência variam conforme o produto e a operadora. Em geral, podem existir opções para cônjuge, companheiro, filhos e outros dependentes elegíveis. A condição precisa ser confirmada na cotação.",
    },
    {
      question: "Plano familiar tem carência?",
      answer: "Pode ter. Os prazos dependem do produto, da operadora e do histórico de contratação. Qualquer possibilidade de redução ou aproveitamento de carências deve ser confirmada antes da assinatura.",
    },
    {
      question: "É possível incluir uma pessoa idosa?",
      answer: "Existem opções voltadas a diferentes faixas etárias, inclusive idosos. Disponibilidade, rede e preço variam conforme idade, região e modalidade, por isso a análise deve ser personalizada.",
    },
    {
      question: "Como pedir uma cotação familiar em Brasília?",
      answer: "Informe pelo WhatsApp a quantidade de pessoas, idades, região, hospitais de preferência e faixa de investimento. Com esses dados, a Multicorretora pode comparar alternativas disponíveis.",
    },
  ],
};

export default function FamilyHealthPlanPage() {
  return <SeoLandingPage content={content} />;
}
