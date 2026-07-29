"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: number;
  role: "agent" | "visitor";
  text: string;
  showContact?: boolean;
};

type KnowledgeItem = {
  keywords: string[];
  response: string;
  showContact?: boolean;
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 1,
  role: "agent",
  text: "Olá! Eu sou a Multi, assistente virtual da Multicorretora. Posso explicar como os planos funcionam, ajudar você a comparar prioridades e preparar o contato com um especialista. O que você quer proteger hoje?",
};

const QUICK_QUESTIONS = [
  "Qual plano combina comigo?",
  "Por que ter um plano?",
  "Quero proteger minha família",
  "Busco um plano empresarial",
];

const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["preco", "valor", "quanto custa", "barato", "economizar", "custo"],
    response:
      "O melhor custo-benefício não é necessariamente a menor mensalidade. Vale comparar rede de atendimento, acomodação, coparticipação, abrangência e carências. O preço depende do perfil, da idade, da região e do tipo de contratação. Posso encaminhar você para uma cotação personalizada sem compromisso.",
    showContact: true,
  },
  {
    keywords: ["familia", "filho", "filha", "marido", "esposa", "casal", "dependente"],
    response:
      "Um plano familiar ajuda a organizar o cuidado de todos em uma única escolha e traz mais previsibilidade quando alguém precisa de atendimento. Para filtrar boas opções, pense em quantas pessoas serão incluídas, idades e quais hospitais ou laboratórios são prioridade. Com essas informações, o especialista consegue comparar alternativas para sua família.",
    showContact: true,
  },
  {
    keywords: ["empresa", "empresarial", "funcionario", "equipe", "cnpj", "colaborador"],
    response:
      "O plano empresarial pode fortalecer a atração e a permanência de talentos, além de demonstrar cuidado com a equipe. As condições variam conforme quantidade de vidas, idades, região e modelo de contratação. Informe ao especialista o número aproximado de pessoas para receber opções mais direcionadas.",
    showContact: true,
  },
  {
    keywords: ["porque", "por que", "vantagem", "beneficio", "vale a pena", "preciso"],
    response:
      "Um bom plano oferece acesso organizado à rede de saúde, mais previsibilidade financeira e apoio para cuidar da saúde antes que uma necessidade se torne urgente. Para famílias, protege diferentes fases da vida; para empresas, também funciona como benefício de valorização. A escolha certa é a que equilibra cobertura, rede e investimento.",
  },
  {
    keywords: ["carencia", "espera", "usar", "quando posso"],
    response:
      "Carência é o período previsto em contrato antes da utilização de determinados serviços. Os prazos e possibilidades de redução variam conforme operadora, tipo de plano e histórico do beneficiário. Para não criar uma expectativa incorreta, o especialista deve confirmar as condições da opção escolhida antes da contratação.",
    showContact: true,
  },
  {
    keywords: ["hospital", "rede", "laboratorio", "clinica", "medico"],
    response:
      "A rede credenciada é um dos pontos mais importantes da comparação. Faça uma lista dos hospitais, laboratórios e regiões que você realmente utiliza. Assim, evita contratar apenas pelo preço e descobrir depois que a rede não atende à sua rotina. O especialista pode verificar as opções disponíveis para suas prioridades.",
    showContact: true,
  },
  {
    keywords: ["individual", "para mim", "sozinho", "pessoa fisica"],
    response:
      "Para uma contratação individual, comece definindo três prioridades: rede que deseja utilizar, faixa de investimento e preferência entre mensalidade fixa ou coparticipação. Isso torna a comparação mais objetiva e ajuda a eliminar opções que não fazem sentido para você.",
    showContact: true,
  },
  {
    keywords: ["adesao", "categoria", "entidade", "profissao"],
    response:
      "Planos por adesão são voltados a pessoas vinculadas a determinadas categorias ou entidades. A elegibilidade e as condições dependem da profissão e do vínculo aceito. Um especialista pode verificar se existe uma alternativa disponível para o seu perfil.",
    showContact: true,
  },
  {
    keywords: ["seguro", "vida", "protecao financeira"],
    response:
      "O seguro ajuda a criar proteção financeira diante de situações previstas na apólice. Ele pode complementar o planejamento de famílias e empresas, especialmente quando outras pessoas dependem da sua renda. Coberturas e exclusões precisam ser avaliadas antes da contratação.",
    showContact: true,
  },
  {
    keywords: ["coparticipacao", "coparticipação"],
    response:
      "Na coparticipação, além da mensalidade, pode haver cobrança quando determinados serviços são utilizados. Esse formato pode fazer sentido para quem usa o plano com menor frequência, mas é importante comparar regras e limites. O especialista pode mostrar as diferenças para você decidir com clareza.",
  },
  {
    keywords: ["contato", "especialista", "consultor", "whatsapp", "cotacao", "contratar", "fechar"],
    response:
      "Ótimo! O especialista da Multicorretora pode entender seu perfil, comparar opções disponíveis e orientar os próximos passos. Clique abaixo para iniciar a conversa no WhatsApp com o contexto de que você veio pela assistente Multi.",
    showContact: true,
  },
  {
    keywords: ["urgencia", "emergencia", "dor", "doente", "sintoma"],
    response:
      "Eu não realizo orientação médica. Se você estiver com sintomas ou em uma situação de urgência, procure imediatamente um serviço de saúde adequado. Posso ajudar apenas com informações gerais sobre contratação e escolha de planos.",
  },
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite"],
    response:
      "Olá! Posso ajudar você a entender planos individuais, familiares e empresariais, explicar pontos como rede e carência ou preparar uma cotação com o especialista. Qual dessas opções é mais importante para você agora?",
  },
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findResponse(message: string): KnowledgeItem {
  const normalizedMessage = normalize(message);
  const messageWords = normalizedMessage.split(" ");
  const match = KNOWLEDGE_BASE.find((item) =>
    item.keywords.some((keyword) => {
      const normalizedKeyword = normalize(keyword);
      return normalizedKeyword.length <= 3
        ? messageWords.includes(normalizedKeyword)
        : normalizedMessage.includes(normalizedKeyword);
    }),
  );

  return (
    match ?? {
      keywords: [],
      response:
        "Posso ajudar a organizar essa decisão. Para começar, diga se você procura uma opção individual, familiar ou empresarial e o que mais pesa na escolha: preço, rede de atendimento ou cobertura. Se preferir, também posso encaminhar você diretamente a um especialista.",
      showContact: true,
    }
  );
}

function buildContactUrl(lastQuestion?: string) {
  const context = lastQuestion
    ? ` Minha principal dúvida é: ${lastQuestion.slice(0, 180)}`
    : "";
  const text = `Olá, conversei com a assistente Multi no site e quero receber uma cotação personalizada.${context}`;

  return `https://wa.me/556184843238?text=${encodeURIComponent(text)}`;
}

export function LocalSalesAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [lastQuestion, setLastQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  function sendMessage(rawMessage: string) {
    const message = rawMessage.trim();
    if (!message) return;

    const knowledge = findResponse(message);
    setLastQuestion(message);
    setMessages((current) => [
      ...current,
      { id: nextId.current++, role: "visitor", text: message },
      {
        id: nextId.current++,
        role: "agent",
        text: knowledge.response,
        showContact: knowledge.showContact,
      },
    ]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function resetConversation() {
    setMessages([INITIAL_MESSAGE]);
    setLastQuestion("");
    setInput("");
  }

  return (
    <aside className="sales-agent" aria-label="Assistente virtual da Multicorretora">
      {isOpen && (
        <section className="agent-panel" aria-label="Conversa com a assistente Multi">
          <header className="agent-header">
            <div className="agent-identity">
              <span className="agent-avatar">
                <Bot aria-hidden="true" />
              </span>
              <span>
                <strong>Multi</strong>
                <small>
                  <i aria-hidden="true" />
                  Assistente comercial online
                </small>
              </span>
            </div>
            <button
              type="button"
              className="agent-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar assistente"
            >
              <X aria-hidden="true" />
            </button>
          </header>

          <div className="agent-value-strip">
            <Sparkles aria-hidden="true" />
            Tire dúvidas, compare prioridades e avance para sua cotação.
          </div>

          <div className="agent-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                className={`agent-message agent-message-${message.role}`}
                key={message.id}
              >
                {message.role === "agent" && (
                  <span className="message-avatar" aria-hidden="true">
                    M
                  </span>
                )}
                <div>
                  <p>{message.text}</p>
                  {message.showContact && (
                    <a
                      className="agent-contact-card"
                      href={buildContactUrl(lastQuestion)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <MessageCircle aria-hidden="true" />
                        <span>
                          <strong>Falar com um especialista</strong>
                          <small>Cotação personalizada no WhatsApp</small>
                        </span>
                      </span>
                      <ArrowRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="agent-suggestions" aria-label="Perguntas sugeridas">
              {QUICK_QUESTIONS.map((question) => (
                <button
                  type="button"
                  onClick={() => sendMessage(question)}
                  key={question}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form className="agent-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="agent-question">
              Digite sua dúvida sobre planos e seguros
            </label>
            <input
              id="agent-question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Digite sua dúvida..."
              maxLength={280}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Enviar pergunta"
            >
              <Send aria-hidden="true" />
            </button>
          </form>

          <footer className="agent-footer">
            <span>
              <ShieldCheck aria-hidden="true" />
              Conversa local, sem envio de dados
            </span>
            {messages.length > 1 && (
              <button type="button" onClick={resetConversation}>
                Nova conversa
              </button>
            )}
          </footer>
        </section>
      )}

      <button
        type="button"
        className={`agent-launcher ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fechar assistente Multi" : "Abrir assistente Multi"}
      >
        <span className="launcher-icon">
          {isOpen ? <X aria-hidden="true" /> : <Bot aria-hidden="true" />}
        </span>
        {!isOpen && (
          <span className="launcher-copy">
            <small>Ficou com dúvida?</small>
            Fale com a Multi
          </span>
        )}
        {!isOpen && <i className="launcher-status" aria-hidden="true" />}
      </button>

      {!isOpen && (
        <div className="agent-proof">
          <CheckCircle2 aria-hidden="true" />
          Ajuda para escolher melhor
        </div>
      )}
    </aside>
  );
}
