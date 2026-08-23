require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const { Resend } = require('resend');

let renderContactEmailHtml = null;
try {
  ({ renderContactEmailHtml } = require('./emails-dist/contact-email.js'));
} catch (e) {
  console.log('ℹ️ Template de e-mail não compilado. Rode: npm run build:email');
}

const app = express();
const PORT = process.env.PORT || 3000;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'joaogabrielmonteg41@gmail.com';
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'KINGSLITYC <onboarding@resend.dev>';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const SERVICE_NAME_MAP = {
  software: 'Desenvolvimento de Software Sob Encomenda',
  multitenant: 'Plataforma Multi-tenant / SaaS',
  eventos: 'Sistema de Convites & Check-in de Eventos',
  erp: 'Mini ERP Sob Medida',
  hardware: 'Hardware & Sistemas Embarcados IoT',
  protheus: 'Integrações & APIs para TOTVS Protheus',
};

app.use(cors());
app.use(express.json());

// Serve static assets
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/health', (req, res) => {
  const payload = { status: 'online', brand: 'KINGSLITYC', timestamp: new Date().toISOString() };

  const wantsJson = req.query.format === 'json' || req.accepts(['html', 'json']) === 'json';
  if (wantsJson) {
    return res.json(payload);
  }

  res.send(`<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>KINGSLITYC · Status</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f6f7f5;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e7e9e4;
      border-top: 3px solid #6baf45;
      border-radius: 12px;
      padding: 40px 48px;
      text-align: center;
      min-width: 280px;
    }
    .brand { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; color: #6baf45; text-transform: uppercase; margin-bottom: 20px; }
    .badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 9999px; background: rgba(107,175,69,0.1); color: #317032; font-weight: 700; font-size: 15px; margin-bottom: 16px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #6baf45; box-shadow: 0 0 0 rgba(107,175,69,0.5); animation: pulse 2s infinite; }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(107,175,69,0.5); }
      70% { box-shadow: 0 0 0 8px rgba(107,175,69,0); }
      100% { box-shadow: 0 0 0 0 rgba(107,175,69,0); }
    }
    .timestamp { font-size: 13px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">KINGSLITYC</div>
    <div class="badge"><span class="dot"></span> Sistema Online</div>
    <div class="timestamp">${payload.timestamp}</div>
  </div>
</body>
</html>`);
});

// API: Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, serviceType, message } = req.body;
  const serviceName = SERVICE_NAME_MAP[serviceType] || serviceType;

  console.log(`\n==================================================`);
  console.log(`📩 NOVO ATENDIMENTO SOLICITADO NO SITE KINGSLITYC`);
  console.log(`🎯 DESTINATÁRIO: ${RECIPIENT_EMAIL}`);
  console.log(`👤 NOME DO CLIENTE: ${name}`);
  console.log(`📧 E-MAIL DO CLIENTE: ${email}`);
  console.log(`🏢 EMPRESA: ${company || 'Não informada'}`);
  console.log(`🛠️ SOLUÇÃO: ${serviceName}`);
  console.log(`💬 MENSAGEM: ${message}`);
  console.log(`==================================================\n`);

  let emailSent = false;
  let emailError = null;

  // Se Resend e o template estiverem configurados
  if (resend && renderContactEmailHtml) {
    try {
      const html = await renderContactEmailHtml({ name, email, phone, company, serviceName, message });

      const { error } = await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `[Atendimento KINGSLITYC] Novo Contato de ${name} (${company || 'Pessoa Física'})`,
        html,
      });

      if (error) {
        throw new Error(error.message || 'Falha desconhecida ao enviar via Resend');
      }

      emailSent = true;
      console.log(`✅ E-MAIL DISPARADO COM SUCESSO PARA ${RECIPIENT_EMAIL}!`);
    } catch (err) {
      emailError = err.message;
      console.error(`❌ Erro ao enviar e-mail via Resend:`, err.message);
    }
  } else if (!resend) {
    console.log('ℹ️ RESEND_API_KEY não configurada. Mensagem apenas registrada no servidor.');
  }

  res.json({
    success: true,
    emailSent: emailSent,
    emailError: emailError,
    message: `Mensagem registrada no servidor KINGSLITYC!`,
    data: { name, email, company, serviceType, message }
  });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>KINGSLITYC Node.js Server</title>
      </head>
      <body style="background: #05070d; color: #f8fafc; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
        <div style="background: #0b1326; padding: 40px; border-radius: 16px; border: 1px solid rgba(0,102,255,0.3); text-align: center;">
          <h1 style="color: #38bdf8;">KINGSLITYC Node.js Server Active</h1>
          <p>E-mail de destino configurado: <code>${RECIPIENT_EMAIL}</code></p>
        </div>
      </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 KINGSLITYC Node.js Server rodando na porta ${PORT}`);
  console.log(`📩 E-mail Destino Configurado: ${RECIPIENT_EMAIL}`);
  console.log(`==================================================`);
});
