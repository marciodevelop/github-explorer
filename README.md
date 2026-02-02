🚀 GitHub Explorer

Uma aplicação web moderna desenvolvida com Next.js que permite explorar informações públicas de usuários do GitHub. O projeto oferece uma experiência fluida para visualizar perfis, repositórios, estrelas e issues, contando com filtros avançados no lado do cliente.

O foco principal deste projeto é demonstrar qualidade de código, organização arquitetural baseada em features e aplicação de padrões de design escaláveis.

📋 Requisitos de Ambiente

Para garantir a compatibilidade e o comportamento esperado, utilize as versões abaixo:

Node.js: v24.13.0 (Recomendado)

Se você utiliza o nvm, pode configurar o ambiente rapidamente:

nvm install 24.13.0
nvm use 24.13.0


🛠️ Tecnologias Utilizadas

Core

Next.js 16.1.6 (App Router)

React 19

TypeScript

Gerenciamento de Estado e Dados

TanStack React Query: Cache e estados assíncronos.

Zustand: Estado global simples e performático.

UI & UX

Tailwind CSS: Estilização utilitária.

Radix UI: Componentes de interface acessíveis.

Lucide React: Iconografia.

class-variance-authority / clsx: Gestão de variantes de CSS.

Formulários e Validação

React Hook Form: Controle de formulários.

Zod: Validação de schemas e tipagem.

Ferramentas de Desenvolvimento

Biome: Linting e formatação ultrarrápida.

🏗️ Arquitetura do Projeto

O projeto segue uma estrutura baseada em features, facilitando a manutenção e o isolamento de responsabilidades.

src/
 ├─ app/                 # Roteamento e páginas (App Router)
 ├─ components/          # Componentes globais (layout, ui, shared)
 ├─ features/            # Módulos de negócio isolados (ex: repos)
 │   ├─ components/
 │   ├─ hooks/
 │   └─ utils/
 ├─ hooks/               # Hooks globais (use-github-profile, etc)
 ├─ services/            # Integração com APIs externas (github.ts)
 ├─ store/               # Stores do Zustand
 └─ utils/               # Funções utilitárias globais


Padrões e Decisões Técnicas

🧩 Composition Pattern

Os componentes principais, como o CardProfile, utilizam o padrão de composição para garantir flexibilidade e evitar prop drilling.

// Exemplo conceitual
<CardProfile.Root>
  <CardProfile.Avatar />
  <CardProfile.Bio />
  <CardProfile.Infos />
</CardProfile.Root>


💾 Gerenciamento de Estado

Zustand: Utilizado para estados de UI e preferências (usuário ativo, abas, repositório selecionado).

React Query: Utilizado para sincronização com a API do GitHub, garantindo cache inteligente e evitando requisições duplicadas.

✨ Funcionalidades

[x] Busca dinâmica de usuários via API do GitHub.

[x] Visualização detalhada de perfil.

[x] Listagem de repositórios públicos e favoritados (Starred).

[x] Filtros client-side por Linguagem e Tipo (fork, source, arquivado).

[x] Busca de repositórios por texto em tempo real.

[x] Página de detalhes do repositório com listagem de Issues.

[x] Validação de campos com feedbacks visuais.

[x] Estados de Loading e Empty States tratados.

🚀 Como Iniciar

Clone o repositório:

git clone [https://github.com/seu-usuario/github-explorer.git](https://github.com/seu-usuario/github-explorer.git)


Acesse a pasta:

cd github-explorer


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Acesse http://localhost:3000 no seu navegador.

🧠 Desafios e Soluções

Limitações da API REST: Como a API do GitHub não permite filtrar múltiplos parâmetros (nome/tipo/linguagem) em um único endpoint de busca de usuário, implementamos a lógica de filtragem no lado do cliente após a carga inicial.

Hydration Mismatch: Tratado através da sanitização de atributos injetados por extensões e garantia de consistência entre servidor e cliente.

Dados Derivados: Cuidado rigoroso para manter o Zustand focado em UI e o React Query focado em dados do servidor, evitando redundância de estado.

🔮 Melhorias Futuras

[ ] Implementação de Paginação Infinita (Infinite Scroll).

[ ] Adição de Suspense e Error Boundaries para melhor UX.

[ ] Cobertura de testes unitários e de integração (Cypress/Vitest).

[ ] Persistência de temas (Dark/Light Mode).

[ ] Tratamento refinado de Rate Limit da API do GitHub.

📄 Considerações Finais

Este projeto foi desenvolvido aplicando os princípios KISS (Keep It Simple, Stupid), YAGNI (You Ain't Gonna Need It) e DRY (Don't Repeat Yourself), buscando um equilíbrio entre funcionalidade e simplicidade técnica.