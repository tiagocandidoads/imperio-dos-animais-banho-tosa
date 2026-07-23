# 🚀 Guia de Instalação

## Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL instalado ou Docker
- Git

## Instalação Rápida com Docker

### 1. Inicie o Banco de Dados

```bash
docker-compose up -d
```

### 2. Configure o Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

O servidor rodará em `http://localhost:3001`

### 3. Configure o Frontend

```bash
cd frontend
npm install
npm start
```

A aplicação abrirá em `http://localhost:3000`

## Verificar se tudo está funcionando

1. Acesse http://localhost:3000
2. Verifique se a página carrega
3. Verifique o backend: http://localhost:3001/api/health

---

## Próximos Passos

- [ ] Criar schema do banco de dados
- [ ] Implementar autenticação
- [ ] Criar página de login
- [ ] Implementar formulário de registro
- [ ] Criar dashboard
- [ ] Implementar gráficos
- [ ] Criar relatórios