# KINGSLITYC - Projeto Fullstack Node.js & React

Plataforma Web e Servidor API Node.js para a **KINGSLITYC** (Desenvolvimento de Sistemas Robustos Sob Encomenda, Customizações de Rotinas TOTVS Protheus e Produção/Manutenção de Hardware).

---

## 🛠️ Arquitetura do Projeto Node.js

- **Backend Node.js / Express**: `server.js` (API REST e Servidor de arquivos estáticos)
- **Frontend React / TypeScript**: `src/` (Vite, Lucide Icons, Design System Dark Blue & Black)
- **Design System Skills**: Integrado com as skills `emil-kowalski-design`, `impeccable-design` e `taste` em `.agents/skills/`.

---

## 🚀 Como Executar o Projeto

### 1. Instalar as Dependências do Node.js
```bash
npm install
```

### 2. Modo Desenvolvimento (Vite Frontend + Hot Reload)
```bash
npm run dev
```

### 3. Modo Servidor Node.js API (Backend Express)
```bash
npm start
```
O servidor backend responderá em `http://localhost:3000/api/health`.

### 4. Build de Produção
```bash
npm run build
```
Gera os arquivos otimizados na pasta `dist/` para servir pelo Node.js.

---

## 🌐 Endpoints da API Node.js

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/health` | Status e saúde do servidor Node.js |
| `GET` | `/api/protheus/routines` | Lista de rotinas Protheus e trechos AdvPL |
| `POST` | `/api/quote` | Recebe simulações de orçamento de projetos |
| `POST` | `/api/contact` | Recebe mensagens de contato técnico |

---

## 🎨 Cores e Identidade Visual
- **Azul Escuro / Navy**: `#0B1326`
- **Preto Profundo**: `#05070D`
- **Azul Safira / Cyan**: `#0066FF` / `#38BDF8`
- **Logo**: Monograma **"K"** estilizado em SVG vetorial.
