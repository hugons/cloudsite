# Instruções para Deploy no Cloudflare Pages

## Problema Resolvido

O erro anterior era causado por:
1. **Tailwind CSS v4**: Incompatibilidade com o ambiente de build do Cloudflare
2. **Comando de deploy incorreto**: O Cloudflare estava usando `npx wrangler deploy` em vez do processo OpenNext

## Configurações Necessárias no Cloudflare Pages

### 1. Build Command
```
npm run build:cloudflare
```

### 2. Build Output Directory
```
.open-next/assets
```

### 3. Root Directory
```
/
```

### 4. Environment Variables (se necessário)
- Adicione qualquer variável de ambiente necessária no painel do Cloudflare

## Como Atualizar no Cloudflare Pages

1. Vá para o seu projeto no [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Clique em **Settings** > **Builds & deployments**
3. Na seção **Build configurations**, clique em **Edit configuration**
4. Atualize:
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.open-next/assets`
5. Salve as alterações
6. Faça um novo deploy (pode ser através de um push para o repositório)

## Verificação

Após essas alterações, o deploy deve funcionar corretamente porque:
- ✅ Tailwind CSS v3 é compatível com Cloudflare
- ✅ O comando `build:cloudflare` gera os arquivos necessários
- ✅ O arquivo `worker.js` é criado corretamente
- ✅ Os assets são colocados no diretório correto

## Scripts Disponíveis

- `npm run build` - Build padrão do Next.js
- `npm run build:cloudflare` - Build para Cloudflare (Next.js + OpenNext)
- `npm run preview` - Preview local do Cloudflare
- `npm run deploy` - Deploy direto via CLI (alternativa)
