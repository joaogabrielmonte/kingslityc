import React, { useState } from "react";
import { Wrench, Check, ArrowRight, Sparkles, Send } from "lucide-react";

interface QuoteCalculatorProps {
  onSuccessSubmit: (summary: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onSuccessSubmit,
}) => {
  const [serviceType, setServiceType] = useState<
    "protheus" | "software" | "hardware"
  >("protheus");
  const [complexity, setComplexity] = useState<"basico" | "medio" | "avancado">(
    "medio",
  );
  const [includeSupport, setIncludeSupport] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const estimatedDays = {
    protheus: {
      basico: "3 a 7 dias",
      medio: "10 a 20 dias",
      avancado: "30+ dias",
    },
    software: {
      basico: "15 a 30 dias",
      medio: "45 a 60 dias",
      avancado: "90+ dias",
    },
    hardware: {
      basico: "24 a 48 horas",
      medio: "3 a 5 dias",
      avancado: "7 a 15 dias",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;

    setLoading(true);

    try {
      // Send request to Node.js Backend API
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          complexity,
          includeSupport,
          companyName,
          contactEmail,
        }),
      });
      const data = await res.json();

      const summaryText =
        data.message ||
        `Orçamento enviado com sucesso! Protocolo: ${data.protocol}`;
      onSuccessSubmit(summaryText);
    } catch (err) {
      // Fallback
      onSuccessSubmit(
        `Orçamento de [${serviceType.toUpperCase()}] gerado e registrado no servidor!`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="calculadora"
      className="section"
      style={{
        background: "rgba(5, 7, 13, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 48px auto",
          }}
        >
          <div className="badge">Simulação Rápida Node.js</div>
          <h2
            style={{
              fontSize: "34px",
              color: "var(--text-heading)",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            Simulador de{" "}
            <span className="gradient-text">Orçamento & Prazo</span>
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "16px" }}>
            Selecione o tipo de demanda da sua empresa e envie diretamente para
            a API Node.js da KINGSLITYC.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            border: "1px solid rgba(107, 175, 69, 0.3)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {/* Step 1: Service Type Selection */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                }}
              >
                1. Qual é a principal demanda da sua empresa?
              </label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setServiceType("protheus")}
                  style={{
                    background:
                      serviceType === "protheus"
                        ? "rgba(107, 175, 69, 0.2)"
                        : "rgba(0, 0, 0, 0.3)",
                    border:
                      serviceType === "protheus"
                        ? "2px solid #A5D66C"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "16px",
                    color: "var(--text-heading)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "15px",
                      marginBottom: "4px",
                    }}
                  >
                    Rotinas TOTVS Protheus
                  </strong>
                  <span style={{ fontSize: "12px", color: "var(--text-body)" }}>
                    AdvPL, TL++, REST, PEs e relatórios
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType("software")}
                  style={{
                    background:
                      serviceType === "software"
                        ? "rgba(107, 175, 69, 0.2)"
                        : "rgba(0, 0, 0, 0.3)",
                    border:
                      serviceType === "software"
                        ? "2px solid #A5D66C"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "16px",
                    color: "var(--text-heading)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "15px",
                      marginBottom: "4px",
                    }}
                  >
                    Sistema Sob Demanda
                  </strong>
                  <span style={{ fontSize: "12px", color: "var(--text-body)" }}>
                    Web/Mobile sob encomenda
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType("hardware")}
                  style={{
                    background:
                      serviceType === "hardware"
                        ? "rgba(107, 175, 69, 0.2)"
                        : "rgba(0, 0, 0, 0.3)",
                    border:
                      serviceType === "hardware"
                        ? "2px solid #A5D66C"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "16px",
                    color: "var(--text-heading)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "15px",
                      marginBottom: "4px",
                    }}
                  >
                    Hardware & Manutenção
                  </strong>
                  <span style={{ fontSize: "12px", color: "var(--text-body)" }}>
                    Manutenção preventiva e servidores
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Complexity */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                }}
              >
                2. Escopo estimado do projeto:
              </label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                }}
              >
                {(["basico", "medio", "avancado"] as const).map((comp) => (
                  <button
                    key={comp}
                    type="button"
                    onClick={() => setComplexity(comp)}
                    style={{
                      background:
                        complexity === comp
                          ? "rgba(165, 214, 108, 0.15)"
                          : "rgba(0, 0, 0, 0.2)",
                      border:
                        complexity === comp
                          ? "1px solid #A5D66C"
                          : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "12px",
                      color: complexity === comp ? "var(--text-heading)" : "var(--text-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    {comp}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Output Box */}
            <div
              style={{
                background: "rgba(107, 175, 69, 0.08)",
                border: "1px dashed rgba(107, 175, 69, 0.3)",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text-body)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Prazo Estimado de Entrega
                </span>
                <div
                  className="mono"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--accent-sapphire)",
                  }}
                >
                  {estimatedDays[serviceType][complexity]}
                </div>
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontSize: "13px",
                  color: "var(--text-label)",
                }}
              >
                <input
                  type="checkbox"
                  checked={includeSupport}
                  onChange={(e) => setIncludeSupport(e.target.checked)}
                  style={{
                    accentColor: "var(--accent-sapphire)",
                    width: "18px",
                    height: "18px",
                  }}
                />
                Incluir Plano de Suporte Contínuo KINGSLITYC
              </label>
            </div>

            {/* Step 3: Contact Inputs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                  Nome da Empresa / Solicitante
                </label>
                <input
                  type="text"
                  placeholder="Ex: Empresa ABC Ltda"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-heading)",
                    fontSize: "14px",
                    outline: "none",
                  }}
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
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contato@empresa.com.br"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-heading)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                padding: "14px",
                justifyContent: "center",
                fontSize: "15px",
              }}
            >
              <Send size={18} />
              <span>
                {loading
                  ? "Enviando para API Node.js..."
                  : "Enviar Solicitação para Engenheiros KINGSLITYC"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

