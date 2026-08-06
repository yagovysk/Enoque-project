import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingContent } from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Plano de Saúde Individual em Brasília e DF",
  description:
    "Compare plano de saúde individual em Brasília e no DF. Entenda rede, carência e coparticipação e peça sua cotação personalizada.",
  alternates: { canonical: "/plano-de-saude-individual-brasilia" },
  openGraph: {
    title: "Plano de Saúde Individual em Brasília e DF | Multicorretora",
    description: "Encontre uma opção de saúde alinhada à sua rotina, prioridades e investimento.",
    url: "/plano-de-saude-individual-brasilia",
    images: [{ url: "/familia-geracoes.png", width: 1536, height: 1024, alt: "Pessoas de diferentes idades cuidando da saúde" }],
  },
};

const content: SeoLandingContent = {
  slug: "plano-de-saude-individual-brasilia",
  kicker: "Uma escolha para o seu perfil",
  title: "Plano de saúde individual em Brasília e no Distrito Federal",
  lead:
    "Encontre alternativas para cuidar da sua saúde com mais previsibilidade. Compare rede credenciada, acomodação, carências, coparticipação e abrangência com orientação antes de contratar.",
  image: "/familia-geracoes.png",
  imageAlt: "Pessoas de diferentes gerações caminhando em um parque",
  benefits: [
    {
      title: "Plano alinhado à sua rotina",
      text: "Priorize médicos, laboratórios, hospitais e regiões que realmente fazem parte do seu dia a dia em Brasília e no DF.",
    },
    {
      title: "Comparação transparente",
      text: "Entenda as diferenças entre mensalidade, coparticipação, acomodação, carências e abrangência antes de decidir.",
    },
    {
      title: "Orientação personalizada",
      text: "Receba opções filtradas conforme idade, localização, rede desejada e faixa de investimento, sem compromisso.",
    },
  ],
  guideTitle: "O que observar em um plano de saúde para uma pessoa",
  guideParagraphs: [
    "A escolha começa pela rede de atendimento. Um plano pode ter boa mensalidade, mas não incluir os hospitais ou laboratórios que você prefere. Liste os prestadores essenciais e as regiões onde costuma buscar atendimento.",
    "Depois, avalie se a coparticipação combina com sua frequência de uso. Planos com cobrança por utilização podem ter uma dinâmica diferente dos produtos sem coparticipação. Também confira carências, abrangência geográfica e acomodação hospitalar.",
    "A Multicorretora compara as opções disponíveis para o seu perfil e explica os pontos que podem impactar sua experiência e seu orçamento durante o contrato.",
  ],
  checklist: [
    "Sua idade e município de residência",
    "Hospitais e laboratórios de preferência",
    "Regiões onde precisa de atendimento",
    "Uso frequente ou eventual do plano",
    "Faixa de investimento mensal",
  ],
  faqs: [
    {
      question: "Ainda existe plano de saúde individual em Brasília?",
      answer: "A disponibilidade depende das operadoras, produtos, região e perfil. Também podem existir alternativas por adesão ou outras modalidades. A cotação confirma quais opções estão disponíveis no momento.",
    },
    {
      question: "Qual é o valor de um plano individual?",
      answer: "O preço varia conforme idade, município, rede, acomodação, coparticipação e produto. Por isso, uma estimativa confiável depende de uma cotação com os dados do beneficiário.",
    },
    {
      question: "Posso escolher os hospitais que quero usar?",
      answer: "Você pode informar hospitais e laboratórios prioritários para filtrar os produtos. A utilização depende de esses prestadores constarem na rede vigente do plano escolhido.",
    },
    {
      question: "Como comparar planos individuais?",
      answer: "Compare rede credenciada, abrangência, acomodação, carências, coparticipação e reajustes previstos no tipo de contrato. A mensalidade deve ser analisada junto com esses fatores.",
    },
  ],
};

export default function IndividualHealthPlanPage() {
  return <SeoLandingPage content={content} />;
}
