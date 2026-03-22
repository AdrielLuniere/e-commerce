# Plataforma de E-commerce Profissional

Uma plataforma de e-commerce premium e moderna desenvolvida com Next.js 14, TypeScript, Prisma e Tailwind CSS.

## 🚀 Visão & Funcionalidades

Este projeto tem como objetivo fornecer uma experiência de compra completa, com foco em excelência visual, performance e funcionalidades avançadas.

### Principais Funcionalidades

- **🎨 Identidade Visual**: Design moderno e limpo, paleta de cores customizada e layout totalmente responsivo.
- **🛍️ Descoberta de Produtos**: Pesquisa avançada, filtros (preço, marca, categoria) e animações suaves.
- **🛒 Carrinho de Compras**: Carrinho persistente com atualizações em tempo real e suporte a cupons de desconto.
- **💳 Checkout Seguro**: Fluxo multi-etapas com integração ViaCEP e visualizador de cartão 3D ao vivo.
- **👤 Contas de Usuário**: Painel completo, histórico de pedidos, gerenciamento de endereços e login por e-mail.
- **📦 Rastreamento de Pedidos**: Timeline de rastreamento com notificações de pedidos.
- **🔧 Painel Administrativo**: Controle total sobre produtos, clientes, pedidos e relatórios de vendas.
- **🔍 SEO & Performance**: Otimizado para as métricas do Core Web Vitals e indexação pelo Google.

## 🛠️ Tecnologias Utilizadas

| Camada                 | Tecnologia                                        |
| ---------------------- | ------------------------------------------------- |
| **Frontend**           | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Componentes UI**     | shadcn/ui, Lucide Icons                           |
| **Gerenciamento de Estado** | Zustand                                      |
| **Backend/API**        | Next.js API Routes                                |
| **Banco de Dados**     | PostgreSQL + Prisma ORM                           |
| **Autenticação**       | NextAuth.js                                       |
| **Pagamentos**         | Stripe / Mercado Pago                             |
| **E-mail**             | Resend                                            |
| **Armazenamento de Mídia**| Cloudinary                                     |

## 📅 Roadmap (Fases de Desenvolvimento)

### Fase 1: Fundação & Setup do Projeto

- Configuração do ambiente e inicialização do projeto.
- Design do banco de dados e configuração do Prisma.

### Fase 2: Design System & Layout Principal

- Tokens customizados do Tailwind e estilos globais.
- Componentes profissionais de Header e Footer.

### Fase 3: Página Inicial (Home) & Descoberta

- Banners dinâmicos e grids rotativos de produtos em destaque.

### Fase 4: Listagem & Detalhes de Produtos

- Sistema de filtro avançado e páginas de detalhes super responsivas.

### Fase 5: Integração de Carrinho Efetiva

- Lógica completa e imersiva do Carrinho de Compras integrado ao menu lateral.

### Fase 6: Autenticação & Módulo de Usuário

- Fluxo seguro de log-in, cadastro e criação da área "Minha Conta".

### Fase 7: Checkout & Pagamentos

- Integração total de endereço por CEP, interface de pagamento pix ou crédito via visualização 3D.

### Fase 8 e 9: Rastreamento & Painel Admin

- (Em Progresso) Status visual da entrega e Back-office corporativo.

---

## 🛠️ Como Executar 

1. Faça o clone do repositório.
2. Instale as dependências com o comando: `npm install`.
3. Configure suas variáveis de ambiente copiando o arquivo `.env.example` para `.env`.
4. Rode as migrations do banco de dados: `npx prisma db push`.
5. Inicie o servidor em ambiente de desenvolvimento: `npm run dev`.
