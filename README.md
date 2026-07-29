# Multicorretora — Planos de Saúde e Seguros

Site institucional e comercial da **Multicorretora Planos de Saúde e
Seguros**, desenvolvido em Next.js com foco em:

- geração de contatos pelo WhatsApp;
- apresentação de planos de saúde e seguros;
- SEO para Brasília e Distrito Federal;
- carregamento rápido e experiência responsiva;
- comunicação clara para pessoas, famílias e empresas.

## Visão geral

O projeto é uma landing page de rota única. Todo o conteúdo comercial está em
`app/page.tsx`, os estilos ficam em `app/globals.css` e os metadados de SEO
estão em `app/layout.tsx`.

O site utiliza o starter `vinext`, que adapta a aplicação Next.js para execução
em infraestrutura compatível com Cloudflare Workers.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- vinext e Vite
- Lucide React para ícones
- Cloudflare Workers por meio do Sites

## Pré-requisitos

- Node.js `>=22.13.0`
- npm

Confira a versão instalada:

```bash
node --version
npm --version
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/yagovysk/Enoque-project.git
cd Enoque-project
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

O terminal mostrará o endereço local disponível. Para validar uma alteração
antes de publicar:

```bash
npm run build
```

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o site em desenvolvimento |
| `npm run build` | Gera e valida a versão de produção |
| `npm run start` | Executa localmente a versão gerada |
| `npm run lint` | Verifica padrões do código |
| `npm test` | Executa a rotina de testes configurada |
| `npm run db:generate` | Gera migrações caso o D1 seja utilizado no futuro |

## Estrutura principal

```text
app/
├── components/
│   └── LocalSalesAgent.tsx # Assistente comercial executado no navegador
├── globals.css      # Identidade visual, responsividade e animações
├── layout.tsx       # SEO, Open Graph, idioma e metadados globais
├── page.tsx         # Conteúdo, seções, CTAs e comportamento no scroll
├── robots.ts        # Regras para mecanismos de busca
└── sitemap.ts       # Mapa do site

public/
├── familia-hero.png                 # Fotografia da seção principal
├── familia-geracoes.png             # Fotografia da seção institucional
├── logo-multicorretora-menu.jpeg    # Logo usada no menu e rodapé
├── logo-multicorretora.jpeg         # Logo original completa
└── og.png                            # Imagem para compartilhamento do link

.openai/
└── hosting.json     # Identificação do projeto no Sites
```

## Como alterar textos e CTAs

Os textos da página ficam em `app/page.tsx`.

- O array `services` controla os seis cartões de produtos.
- O array `steps` controla o processo de contratação.
- O array `faqs` controla as perguntas frequentes.
- O restante da página está organizado em seções semânticas.

O link utilizado por todos os botões de contato é definido uma única vez:

```ts
const WHATSAPP_URL = "https://wa.me/...";
```

Para trocar o número ou a mensagem inicial, altere essa constante. O número no
link deve conter apenas código do país, DDD e telefone, sem espaços ou símbolos.
Revise também o telefone exibido no rodapé.

## Assistente comercial local

O componente `app/components/LocalSalesAgent.tsx` implementa a assistente
**Multi**. Ela funciona inteiramente no navegador e não utiliza API, modelo de
linguagem, banco de dados ou serviço externo.

O funcionamento é baseado em:

- normalização do texto digitado;
- identificação de palavras e expressões relacionadas a cada intenção;
- respostas comerciais previamente revisadas;
- perguntas rápidas para os temas mais procurados;
- encaminhamento contextualizado ao WhatsApp;
- avisos para não fornecer orientação médica ou condições não confirmadas.

A constante `KNOWLEDGE_BASE` reúne as intenções reconhecidas e suas respostas.
Para adicionar um novo assunto, inclua um objeto com `keywords`, `response` e,
quando necessário, `showContact: true`.

Exemplo:

```ts
{
  keywords: ["odontologico", "dental"],
  response: "Texto informativo revisado pela equipe.",
  showContact: true,
}
```

Como não existe inteligência generativa, a assistente não cria informações
novas nem consulta preços, redes ou condições em tempo real. Essa decisão reduz
custos e evita que informações comerciais não confirmadas sejam apresentadas
ao visitante. A equipe deve revisar a base sempre que produtos ou regras forem
alterados.

As mensagens ficam somente no estado temporário do navegador e são descartadas
quando a página é recarregada. O conteúdo só é enviado para fora do site quando
o visitante decide clicar no botão de WhatsApp.

## Identidade visual

As cores principais são definidas como variáveis no início de
`app/globals.css`:

```css
:root {
  --navy-950: #020d1d;
  --navy-900: #061a37;
  --green-500: #0ca872;
  --green-400: #20d38e;
}
```

Use essas variáveis ao criar novos componentes para manter consistência com a
logo. As animações de entrada utilizam o atributo `data-reveal` e um
`IntersectionObserver` configurado em `app/page.tsx`.

O projeto respeita `prefers-reduced-motion`, reduzindo animações quando essa
preferência de acessibilidade estiver ativa no dispositivo.

## Imagens

As imagens visíveis no site ficam em `public/` e são carregadas pelo componente
`Image` do Next.js. Ao substituir uma imagem:

1. mantenha uma proporção semelhante à original;
2. use nomes descritivos;
3. escreva um texto alternativo fiel ao conteúdo;
4. comprima o arquivo antes de publicar;
5. execute `npm run build`.

A imagem `public/og.png` é exibida quando o endereço do site é compartilhado em
aplicativos e redes que suportam Open Graph.

## SEO

O projeto já possui:

- título e descrição específicos;
- palavras-chave relacionadas a planos e seguros;
- metadados Open Graph e Twitter;
- URL canônica;
- `robots.txt` gerado por `app/robots.ts`;
- `sitemap.xml` gerado por `app/sitemap.ts`;
- dados estruturados `InsuranceAgency` em JSON-LD;
- hierarquia semântica de títulos e seções.

Quando um domínio próprio for conectado, atualize `metadataBase` em
`app/layout.tsx` e a URL retornada por `app/sitemap.ts`.

## Informações comerciais

- Empresa: Multicorretora Planos de Saúde e Seguros
- WhatsApp: `+55 61 8484-3238`
- CNPJ: `19.607.678/0001-65`

Esses dados aparecem em mais de um ponto da página. Ao alterá-los, pesquise pelo
valor antigo no projeto para garantir que todas as ocorrências sejam atualizadas.

## Hospedagem

O projeto está preparado para publicação pelo Sites. O arquivo
`.openai/hosting.json` contém somente a identificação do site e os bindings
lógicos opcionais.

Não salve tokens, credenciais ou arquivos `.env` no repositório. O `.gitignore`
já ignora arquivos de ambiente.

Antes de qualquer publicação:

```bash
npm install
npm run build
```

## Banco de dados

O site atual não precisa de banco de dados. As pastas `db/`, `drizzle/` e
`examples/d1/` vêm da estrutura base e permitem adicionar Cloudflare D1 no
futuro.

Não ative D1 apenas para editar conteúdo estático ou trocar informações do
site.

## Checklist para futuras alterações

1. Atualize o conteúdo ou os estilos.
2. Confira links de WhatsApp e textos exibidos.
3. Preserve títulos semânticos e textos alternativos.
4. Teste a experiência em telas pequenas.
5. Execute `npm run build`.
6. Faça um commit com uma mensagem descritiva.
7. Publique a versão validada.

## Licença e uso

Código e identidade visual destinados ao projeto da Multicorretora. Imagens,
logo, textos e informações comerciais não devem ser reutilizados em outros
projetos sem autorização da empresa.
