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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Falha no envio: ${res.status}`);
      }

      setSubmitted(true);
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
                      href="mailto:contato@kingslityc.com.br"
                      style={{
                        fontSize: "16px",
                        color: "var(--text-heading)",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      contato@kingslityc.com.br
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
                    Sua solicitação foi enviada com sucesso para a nossa
                    equipe de atendimento.
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

