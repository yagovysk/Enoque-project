import type { Metadata } from "next";
import { SeoLandingPage, type SeoLandingContent } from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Plano de Saúde Empresarial em Brasília e DF",
  description:
    "Compare planos de saúde empresariais em Brasília e no DF para sua equipe. Solicite uma cotação por CNPJ com orientação personalizada.",
  alternates: { canonical: "/plano-de-saude-empresarial-brasilia" },
  openGraph: {
    title: "Plano de Saúde Empresarial em Brasília e DF | Multicorretora",
    description: "Compare benefícios para sua empresa e receba uma cotação conforme o perfil da equipe.",
    url: "/plano-de-saude-empresarial-brasilia",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Multicorretora planos de saúde empresariais" }],
  },
};

const content: SeoLandingContent = {
  slug: "plano-de-saude-empresarial-brasilia",
  kicker: "Benefício para sua equipe",
  title: "Plano de saúde empresarial em Brasília e no Distrito Federal",
  lead:
    "Compare alternativas para oferecer saúde como benefício e fortalecer o cuidado com a equipe. A cotação considera quantidade de vidas, idades, localização, rede desejada e perfil da empresa.",
  image: "/familia-geracoes.png",
  imageAlt: "Grupo de pessoas de diferentes idades caminhando junto",
  benefits: [
    {
      title: "Benefício valorizado pela equipe",
      text: "Um plano adequado pode apoiar a atração e a permanência de profissionais e demonstrar cuidado com os colaboradores.",
    },
    {
      title: "Opções conforme o porte",
      text: "Compare produtos disponíveis de acordo com número de vidas, composição do grupo, município e regras de elegibilidade.",
    },
    {
      title: "Rede adequada ao trabalho",
      text: "Avalie hospitais, laboratórios e clínicas próximos à empresa e às regiões onde os beneficiários moram ou circulam.",
    },
  ],
  guideTitle: "Como comparar um plano empresarial para sua equipe",
  guideParagraphs: [
    "A cotação empresarial começa com o CNPJ, o ramo de atividade, a quantidade de titulares e dependentes e as idades do grupo. Esses dados ajudam a identificar produtos elegíveis e a estimar o investimento.",
    "Além do preço, avalie a rede nas regiões importantes para a equipe, a abrangência, a acomodação e as regras de coparticipação. Também confirme critérios de inclusão, movimentação cadastral, carências e documentação exigida.",
    "A Multicorretora organiza essas informações e compara opções para que a empresa tome uma decisão consciente, alinhada ao orçamento e ao perfil dos colaboradores.",
  ],
  checklist: [
    "CNPJ e ramo de atividade da empresa",
    "Quantidade de titulares e dependentes",
    "Idade de cada pessoa do grupo",
    "Municípios e regiões prioritárias",
    "Faixa de investimento da empresa e da equipe",
  ],
  faqs: [
    {
      question: "Quantas pessoas são necessárias para um plano empresarial?",
      answer: "A quantidade mínima e as regras de elegibilidade variam conforme operadora e produto. A cotação confirma as opções disponíveis para o porte e a composição da empresa.",
    },
    {
      question: "Dependentes podem entrar no plano da empresa?",
      answer: "Muitos produtos permitem dependentes elegíveis, mas parentesco, documentação, prazo de inclusão e condições variam. Esses critérios devem ser confirmados no produto escolhido.",
    },
    {
      question: "MEI pode contratar plano de saúde empresarial?",
      answer: "Podem existir opções para MEI conforme tempo de abertura, atividade, documentação, quantidade de vidas e regras da operadora. A análise do CNPJ confirma a elegibilidade.",
    },
    {
      question: "O que preciso enviar para receber uma cotação?",
      answer: "Inicialmente, informe CNPJ, quantidade de pessoas, idades, município e rede desejada. Documentos adicionais podem ser solicitados conforme a operadora e a etapa da contratação.",
    },
  ],
};

export default function BusinessHealthPlanPage() {
  return <SeoLandingPage content={content} />;
}
