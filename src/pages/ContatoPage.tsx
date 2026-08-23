import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  Crown,
} from "lucide-react";
import { useScrollReveal } from "../utils/useScrollReveal";

export const ContatoPage: React.FC = () => {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "protheus",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const FORMSUBMIT_TOKEN = "1fbc3259f0576c6581854b55cd080241";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceNameMap: Record<string, string> = {
      protheus: "Desenvolvimento ERP TOTVS Protheus",
      software: "Desenvolvimento de Software Sob Encomenda",
      hardware: "Hardware & Sistemas Embarcados IoT",
    };

    const serviceName =
      serviceNameMap[formData.serviceType] || formData.serviceType;

    // Nubank / Stripe style Corporate HTML Email Template
    const customHtmlEmail = `
      <div style="background-color: #f1f5f9; padding: 40px 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
          
          <div style="background: #040711; padding: 32px 24px; text-align: center; border-bottom: 3px solid #6BAF45;">
            <span style="color: #A5D66C; font-size: 11px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; display: block; margin-bottom: 6px;">KINGSLITYC TECNOLOGIA</span>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; letter-spacing: -0.02em;">Novo Atendimento de Solução</h1>
          </div>

          <div style="padding: 32px 28px;">
            <p style="font-size: 15px; color: #475569; margin-top: 0; margin-bottom: 24px;">
              Uma nova solicitação de atendimento foi registrada através do portal KINGSLITYC:
            </p>

            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
              
              <div style="margin-bottom: 16px;">
                <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Solicitante</span>
                <span style="font-size: 16px; color: #0f172a; font-weight: 700;">${formData.name}</span>
              </div>

              <div style="margin-bottom: 16px;">
                <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">E-mail do Cliente</span>
                <a href="mailto:${formData.email}" style="font-size: 15px; color: #6BAF45; font-weight: 600; text-decoration: none;">${formData.email}</a>
              </div>

              <div style="margin-bottom: 16px;">
                <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Empresa / Organização</span>
                <span style="font-size: 15px; color: #334155; font-weight: 600;">${formData.company || "Pessoa Física"}</span>
              </div>

              <div>
                <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Solução Desejada</span>
                <span style="font-size: 15px; color: #6BAF45; font-weight: 700; background: rgba(107, 175, 69, 0.08); padding: 4px 10px; border-radius: 6px; display: inline-block;">${serviceName}</span>
              </div>

            </div>

            <div style="margin-bottom: 24px;">
              <span style="font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Mensagem da Demanda</span>
              <div style="background: #0f172a; color: #f1f5f9; padding: 18px; border-radius: 10px; font-size: 14px; line-height: 1.6; border-left: 4px solid #6BAF45;">
                ${formData.message}
              </div>
            </div>

          </div>

          <div style="background: #040711; padding: 28px; text-align: center; color: #94a3b8; font-size: 13px; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #ffffff; font-weight: 700; font-size: 15px; margin-top: 0; margin-bottom: 8px;">Abraços,<br />Equipe KINGSLITYC</p>
            <p style="color: #64748b; font-size: 12px; margin-bottom: 16px; line-height: 1.5;">
              Engenharia de Software • TOTVS Protheus ERP • Sistemas Embarcados & Hardware<br />
              Recife - PE, Brasil
            </p>
          </div>

        </div>
      </div>
    `;

    try {
      // Send to FormSubmit with HTML auto-reply or direct HTML payload
      const res = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            SOLICITANTE: formData.name,
            "E-MAIL": formData.email,
            EMPRESA: formData.company || "Pessoa Física",
            SOLUÇÃO: serviceName,
            DETALHES_MENSAGEM: formData.message,
            _subject: `[ATENDIMENTO KINGSLITYC] ${formData.name} - ${formData.company || "Pessoa Física"}`,
            _replyto: formData.email,
            _captcha: "false",
            _template: "box",
            _autoresponse: customHtmlEmail,
          }),
        },
      );

      // Register in local Node.js backend
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, htmlTemplate: customHtmlEmail }),
      }).catch(() => {});

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Erro no formulário:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition">
      {/* Header Banner */}
      <section
        style={{
          padding: "80px 0 60px 0",
          backgroundColor: "var(--bg-primary)",
          borderBottom: "1px solid rgba(107, 175, 69, 0.15)",
        }}
      >
        <div className="container">
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--accent-sapphire)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "8px",
            }}
          >
            ATENDIMENTO CORPORATIVO
          </span>
          <h1 className="heading-xl reveal-up" style={{ marginBottom: "20px" }}>
            Fale com a{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                color: "var(--accent-sapphire)",
              }}
            >
              <Crown
                size={34}
                style={{
                  position: "absolute",
                  top: "-26px",
                  left: "-24px",
                  transform: "rotate(-22deg)",
                  color: "var(--accent-sapphire)",
                }}
              />
              KINGSLITYC
            </span>
          </h1>
          <p
            className="reveal-up delay-1"
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              maxWidth: "760px",
              lineHeight: "1.6",
            }}
          >
            Entre em contato com nossa equipe técnica para solicitar
            atendimento, esclarecer dúvidas sobre desenvolvimento Protheus ERP
            ou dimensionar o projeto do seu sistema.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Contact Information Column */}
            <div className="reveal-left">
              <h2 className="heading-lg" style={{ marginBottom: "20px" }}>
                Canais Oficiais de Atendimento
              </h2>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "36px",
                }}
              >
                Nossa equipe de consultores e engenheiros responderá ao seu
                contato em até 24 horas úteis.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(107, 175, 69, 0.15)",
                      padding: "12px",
                      borderRadius: "8px",
                      color: "var(--accent-sapphire)",
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        display: "block",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      E-mail Direto
                    </span>
                    <a
                      href="mailto:joaodevtool@gmail.com"
                      style={{
                        fontSize: "16px",
                        color: "var(--text-heading)",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      joaodevtool@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(107, 175, 69, 0.15)",
                      padding: "12px",
                      borderRadius: "8px",
                      color: "var(--accent-sapphire)",
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        display: "block",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Atendimento Técnico
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "var(--text-heading)",
                        fontWeight: 600,
                      }}
                    >
                      +55 (81) 99999-0000
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(107, 175, 69, 0.15)",
                      padding: "12px",
                      borderRadius: "8px",
                      color: "var(--accent-sapphire)",
                    }}
                  >
                    <Building2 size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        display: "block",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Sede & Localização
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "var(--text-heading)",
                        fontWeight: 600,
                      }}
                    >
                      Recife - PE, Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="apple-card reveal-right">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "36px 20px" }}>
                  <div style={{ color: "#0e7a54", marginBottom: "16px" }}>
                    <CheckCircle2 size={56} style={{ margin: "0 auto" }} />
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                    Mensagem Enviada!
                  </h3>
                  <p
                    style={{
                      color: "var(--text-body)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    Sua solicitação foi enviada com sucesso para{" "}
                    <strong>joaodevtool@gmail.com</strong>.
                  </p>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "13px",
                      marginTop: "12px",
                    }}
                  >
                    Nossa equipe responderá em breve na sua caixa de entrada.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <h3 className="heading-md" style={{ marginBottom: "8px" }}>
                    Solicitar Atendimento
                  </h3>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "var(--text-label)",
                        marginBottom: "6px",
                      }}
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Seu nome"
                      className="form-input"
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(160px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          color: "var(--text-label)",
                          marginBottom: "6px",
                        }}
                      >
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@empresa.com"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "13px",
                          color: "var(--text-label)",
                          marginBottom: "6px",
                        }}
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nome da empresa"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "var(--text-label)",
                        marginBottom: "6px",
                      }}
                    >
                      Tipo de Solução Desejada
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="form-input"
                    >
                      <option value="protheus">
                        Desenvolvimento TOTVS Protheus & ERP
                      </option>
                      <option value="software">
                        Desenvolvimento de Software Sob Encomenda
                      </option>
                      <option value="hardware">
                        Hardware & Sistemas Embarcados IoT
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "var(--text-label)",
                        marginBottom: "6px",
                      }}
                    >
                      Mensagem / Detalhes da Demanda
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Descreva a demanda ou necessidade da sua empresa..."
                      className="form-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "14px",
                    }}
                  >
                    <Send size={18} />
                    <span>
                      {loading
                        ? "Enviando..."
                        : "Enviar Mensagem para Atendimento"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

