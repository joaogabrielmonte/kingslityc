import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="inicio"
      style={{
        padding: "90px 0 70px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Top Status Pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div className="badge">
            <span className="glow-dot"></span>
            <span>KINGSLITYC • ENGENHARIA DE SOFTWARE & HARDWARE</span>
          </div>
        </div>

        {/* Hero Title & Headline */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "880px",
            margin: "0 auto 32px auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(38px, 5vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Sistemas Robustos sob Encomenda & <br />
            <span className="gradient-text">Rotinas Protheus & Hardware</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-body)",
              lineHeight: "1.6",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Desenvolvimento de software sob medida, customizações avançadas em
            TOTVS Protheus (AdvPL/TL++) e produção com manutenção
            preventiva/corretiva de hardware para ambientes críticos.
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ padding: "14px 28px", fontSize: "15px" }}
            onClick={onOpenQuote}
          >
            <span>Simular Orçamento de Projeto</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#protheus"
            className="btn btn-secondary"
            style={{ padding: "14px 28px", fontSize: "15px" }}
          >
            <Terminal size={18} color="var(--accent-sapphire)" />
            <span>Ver Customizações Protheus</span>
          </a>
        </div>

        {/* Key Pillars Counter Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          <div className="glass-card" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  background: "rgba(107, 175, 69, 0.15)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "var(--accent-sapphire)",
                }}
              >
                <Sparkles size={22} />
              </div>
              <span
                className="mono"
                style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-heading)" }}
              >
                100%
              </span>
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text-heading)",
                marginBottom: "4px",
              }}
            >
              Sistemas sob Medida
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-body)" }}>
              Arquiteturas escaláveis sem dependências de soluções prontas
              genéricas.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  background: "rgba(165, 214, 108, 0.15)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "var(--accent-sapphire)",
                }}
              >
                <Terminal size={22} />
              </div>
              <span
                className="mono"
                style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-heading)" }}
              >
                AdvPL / TL++
              </span>
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text-heading)",
                marginBottom: "4px",
              }}
            >
              Expertise Protheus TOTVS
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-body)" }}>
              Desenvolvimento de rotinas, pontos de entrada, REST APIs e
              workflows.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#10b981",
                }}
              >
                <Cpu size={22} />
              </div>
              <span
                className="mono"
                style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-heading)" }}
              >
                Hardware 24/7
              </span>
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text-heading)",
                marginBottom: "4px",
              }}
            >
              Manutenção & Montagem
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-body)" }}>
              Manutenção preventiva, diagnóstico físico e infraestrutura
              dedicada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

