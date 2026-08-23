# Guia Rápido de Atualização (Cheatsheet Kingslityc)

Este documento reúne os comandos necessários para atualizar o ambiente de **Homologação** (testes) e **Produção**, além de documentar os reforços de segurança aplicados.

---

## 1. Atualizar Ambiente de Homologação (Staging / Testes)

Quando fizer alterações no código local e quiser testar no ambiente de homologação:

```bash
# 1. Trocar para a branch de homologação
git checkout staging

# 2. Mesclar alterações mais recentes (se aplicável) e fazer commit
git add .
git commit -m "feat/fix: descricao da alteracao"

# 3. Enviar para o GitHub (branch staging)
git push origin staging

# 4. Gerar o build da aplicação
npm run build

# 5. Enviar os arquivos compilados para a homologação na VPS
scp -i "C:\Users\gabriel\Documents\oraclekeys\ssh-key-2026-03-27.key" -r dist/* ubuntu@147.15.72.151:/opt/kingslityc-site-staging/public/

# 6. Ajustar permissões na VPS para evitar erro 403 Forbidden
ssh -i "C:\Users\gabriel\Documents\oraclekeys\ssh-key-2026-03-27.key" ubuntu@147.15.72.151 "sudo chmod -R 755 /opt/kingslityc-site-staging/public && sudo find /opt/kingslityc-site-staging/public -type f -exec chmod 644 {} +"
```

> **Acesso**: [`https://kingslityc.com.br/homolog/`](https://kingslityc.com.br/homolog/)

---

## 2. Atualizar Ambiente de Produção (Main)

Após validar a alteração em homologação e querer publicar no site oficial:

```bash
# 1. Trocar para a branch main e unir com staging
git checkout main
git merge staging

# 2. Enviar a versão final para o GitHub (branch main)
git push origin main

# 3. Gerar o build da aplicação
npm run build

# 4. Enviar os arquivos compilados para a produção na VPS
scp -i "C:\Users\gabriel\Documents\oraclekeys\ssh-key-2026-03-27.key" -r dist/* ubuntu@147.15.72.151:/opt/kingslityc-site/public/

# 5. Ajustar permissões na VPS para garantir acesso sem erro 403
ssh -i "C:\Users\gabriel\Documents\oraclekeys\ssh-key-2026-03-27.key" ubuntu@147.15.72.151 "sudo chmod -R 755 /opt/kingslityc-site/public && sudo find /opt/kingslityc-site/public -type f -exec chmod 644 {} +"
```

> **Acesso**: [`https://kingslityc.com.br`](https://kingslityc.com.br)

---

## 3. Segurança Aplicada na Landing Page (Nginx Proxy Manager)

Foram aplicados **Headers HTTP de Segurança** para proteger o site contra ataques comuns:

- **X-Frame-Options (`SAMEORIGIN`)**: Impede que o site seja incorporado em iframes maliciosos (proteção contra *Clickjacking*).
- **X-Content-Type-Options (`nosniff`)**: Bloqueia interpretação incorreta de tipos de arquivos (*MIME-type sniffing*).
- **X-XSS-Protection (`1; mode=block`)**: Ativa o filtro XSS do navegador em caso de tentativas de injeção de código.
- **Referrer-Policy (`strict-origin-when-cross-origin`)**: Protege a privacidade das URLs nas requisições do usuário.
- **Permissions-Policy**: Desativa o acesso desnecessário à câmera, microfone e geolocalização do usuário pelo navegador.
