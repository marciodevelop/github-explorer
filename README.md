GitHub Explorer

Aplicação web desenvolvida em Next.js que permite explorar informações públicas de usuários do GitHub, incluindo perfil, repositórios, repositórios favoritados (starred) e issues abertas, com suporte a busca e filtros no lado do cliente.

O foco do projeto é demonstrar qualidade de código, organização, boas práticas e clareza arquitetural.

Requisitos de Ambiente

Para melhor experiência e compatibilidade com o projeto, utilize:

Node.js: v24.13.0
Recomenda-se fortemente usar exatamente essa versão.

Se você utiliza nvm:

nvm install 24.13.0
nvm use 24.13.0

Tecnologias Utilizadas

As principais tecnologias e bibliotecas utilizadas no projeto são:

Next.js 16.1.6

React 19

TypeScript

TanStack React Query – gerenciamento de cache e estados assíncronos

Zustand – gerenciamento de estado global simples e previsível

React Hook Form – controle e validação de formulários

Zod – validação e tipagem de schemas

Radix UI – componentes acessíveis (Tabs, Dialog, Collapsible, Checkbox)

Tailwind CSS – estilização utilitária

class-variance-authority / clsx / tailwind-merge – composição e organização de classes

Lucide React – ícones

Biome – lint e formatação de código

Arquitetura do Projeto

O projeto foi estruturado com foco em separação de responsabilidades e escalabilidade, utilizando uma arquitetura baseada em features.

Estrutura principal
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ repository/
 │       └─ [owner]/
 │           └─ [repo]/
 │               └─ page.tsx
 │
 ├─ components/
 │   ├─ layout/
 │   ├─ ui/
 │   └─ shared components
 │
 ├─ features/
 │   └─ repos/
 │       ├─ components/
 │       ├─ hooks/
 │       └─ utils/
 │
 ├─ hooks/
 │   ├─ use-github-profile.ts
 │   ├─ use-github-repos.ts
 │   └─ use-github-repo-issues.ts
 │
 ├─ services/
 │   └─ github.ts
 │
 ├─ store/
 │   ├─ user-name-store.ts
 │   ├─ repo-selected-store.ts
 │   └─ tabs-control-store.ts
 │
 └─ utils/

Padrões e Decisões Técnicas
Composition Pattern

Os componentes principais (ex: CardProfile) foram construídos utilizando Composition Pattern, permitindo:

Melhor reutilização

APIs mais expressivas

Menor acoplamento entre responsabilidades

Exemplo conceitual:

<CardProfile.Root>
  <CardProfile.Avatar />
  <CardProfile.Bio />
  <CardProfile.Infos />
</CardProfile.Root>

Gerenciamento de Estado

Zustand foi utilizado para:

Usuário ativo (username)

Repositório selecionado

Controle da aba ativa (Repositories / Starred)

React Query foi utilizado para:

Buscar dados da API do GitHub

Cache e invalidação automática

Evitar refetch desnecessário

Funcionalidades Implementadas

Carregamento dinâmico de dados da API do GitHub

Exibição do perfil do usuário

Listagem de repositórios públicos

Listagem de repositórios favoritados (Starred)

Contador de repositórios por aba

Busca por nome de repositório (submit via Enter)

Filtros client-side:

Linguagem

Tipo (fork, source, archived, mirror)

Página de detalhes do repositório

Listagem de issues abertas

Validação de usuário GitHub via formulário

Estados de loading e empty state

Processo de Setup

Clone o repositório:

git clone <url-do-repositorio>


Acesse a pasta do projeto:

cd github-explorer


Instale as dependências:

npm install


Inicie o projeto em modo desenvolvimento:

npm run dev


A aplicação estará disponível em:

http://localhost:3000

Desafios Encontrados

Durante o desenvolvimento, alguns pontos exigiram maior atenção:

Limitações da API do GitHub
Não existe endpoint específico para buscar repositórios de um usuário por nome, tipo e linguagem simultaneamente.
A solução adotada foi buscar todos os repositórios e aplicar filtros no client.

Hydration mismatch no Next.js
O erro foi causado por extensões do navegador injetando atributos no DOM.
Foi identificado, documentado e tratado adequadamente.

Separação entre dados derivados e estado global
Houve cuidado para não duplicar estado entre React Query e Zustand.

Possíveis Melhorias Futuras

Algumas evoluções possíveis para o projeto:

Implementação de paginação infinita

Uso de Suspense e Error Boundaries

Testes automatizados (unitários e de integração)

Persistência de preferências do usuário

Melhor tratamento de rate limit da API do GitHub

Memoização mais agressiva em listas grandes

Melhor refinamento visual para estados vazios

Considerações Finais

Este projeto foi desenvolvido priorizando:

Clareza de código

Boas práticas

Simplicidade (KISS)

Evitar abstrações desnecessárias (YAGNI)

Reutilização e consistência (DRY)

Todas as decisões técnicas foram tomadas de forma consciente e podem ser explicadas em detalhe, conforme solicitado no desafio.