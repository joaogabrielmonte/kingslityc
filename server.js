const express = require('express');
const path = require('path');
const cors = require('cors');

let nodemailer = null;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  console.log('ℹ️ Nodemailer não instalado. Instale com: npm install nodemailer');
}

const app = express();
const PORT = process.env.PORT || 3000;
const RECIPIENT_EMAIL = 'joaodevtool@gmail.com';

app.use(cors());
app.use(express.json());

// Serve static assets
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'online', brand: 'KINGSLITYC', recipient: RECIPIENT_EMAIL, timestamp: new Date() });
});

// API: Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, serviceType, message } = req.body;
  
  console.log(`\n==================================================`);
  console.log(`📩 NOVO ATENDIMENTO SOLICITADO NO SITE KINGSLITYC`);
  console.log(`🎯 DESTINATÁRIO: ${RECIPIENT_EMAIL}`);
  console.log(`👤 NOME DO CLIENTE: ${name}`);
  console.log(`📧 E-MAIL DO CLIENTE: ${email}`);
  console.log(`🏢 EMPRESA: ${company || 'Não informada'}`);
  console.log(`🛠️ SOLUÇÃO: ${serviceType}`);
  console.log(`💬 MENSAGEM: ${message}`);
  console.log(`==================================================\n`);

  let emailSent = false;
  let emailError = null;

  // Se Nodemailer e credenciais SMTP estiverem configuradas
  if (nodemailer && process.env.GMAIL_USER && process.env.GMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS, // Senha de App do Gmail
        },
      });

      await transporter.sendMail({
        from: `KINGSLITYC Site <${process.env.GMAIL_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `[Atendimento KINGSLITYC] Novo Contato de ${name} (${company || 'Pessoa Física'})`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #050814; color: #ffffff; border-radius: 8px;">
            <h2 style="color: #0066ff; border-bottom: 2px solid #38bdf8; padding-bottom: 10px;">Novo Atendimento Solicitado no Site KINGSLITYC</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
            <p><strong>Solução Desejada:</strong> ${serviceType}</p>
            <p><strong>Mensagem:</strong></p>
            <blockquote style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #0066ff; color: #94a3b8;">
              ${message}
            </blockquote>
            <hr style="border-color: rgba(255,255,255,0.1);" />
            <p style="font-size: 12px; color: #64748b;">Enviado via Servidor Node.js KINGSLITYC</p>
          </div>
        `,
      });
      emailSent = true;
      console.log(`✅ E-MAIL DISPARADO COM SUCESSO PARA ${RECIPIENT_EMAIL}!`);
    } catch (err) {
      emailError = err.message;
      console.error(`❌ Erro ao enviar e-mail via SMTP:`, err.message);
    }
  }

  res.json({
    success: true,
    recipient: RECIPIENT_EMAIL,
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
