import React from "react";
import {
  Cpu,
  Wrench,
  Server,
  ShieldCheck,
  Activity,
  HardDrive,
} from "lucide-react";

export const HardwareShowcase: React.FC = () => {
  return (
    <section id="hardware" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 60px auto",
          }}
        >
          <div className="badge">Infraestrutura & Físico</div>
          <h2
            style={{
              fontSize: "34px",
              color: "var(--text-heading)",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            Produção e Manutenção de{" "}
            <span className="gradient-text">Hardware Dedicado</span>
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "16px" }}>
            Proteja e potencialize a operação física da sua empresa com montagem
            sob encomenda e manutenção especializada de servidores e
            equipamentos.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div className="glass-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "#10b981",
                }}
              >
                <Wrench size={24} />
              </div>
              <h3 style={{ fontSize: "18px", color: "var(--text-heading)" }}>
                Manutenção Preventiva & Corretiva
              </h3>
            </div>
            <p
              style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: "1.6" }}
            >
              Inspeção física detalhada, limpeza ultrassônica de componentes,
              troca de pasta térmica de alta condutividade e testes de estresse
              em hardware crítico.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(107, 175, 69, 0.15)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "var(--accent-sapphire)",
                }}
              >
                <Server size={24} />
              </div>
              <h3 style={{ fontSize: "18px", color: "var(--text-heading)" }}>
                Montagem de Servidores sob Encomenda
              </h3>
            </div>
            <p
              style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: "1.6" }}
            >
              Servidores dedicados configurados com storages RAID sob medida
              para rodar banco de dados Protheus, SQL Server e clusters
              corporativos.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(245, 158, 11, 0.15)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "#f59e0b",
                }}
              >
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: "18px", color: "var(--text-heading)" }}>
                Diagnósticos em Tempo Real
              </h3>
            </div>
            <p
              style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: "1.6" }}
            >
              Identificação rápida de gargalos de hardware, falhas de disco,
              aquecimento e instabilidade elétrica antes que causem paradas não
              planejadas.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: "36px",
            background:
              "linear-gradient(135deg, rgba(11, 19, 38, 0.9) 0%, rgba(5, 7, 13, 0.9) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                background: "rgba(16, 185, 129, 0.2)",
                padding: "14px",
                borderRadius: "50%",
                color: "#10b981",
              }}
            >
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  color: "var(--text-heading)",
                  marginBottom: "4px",
                }}
              >
                Sua empresa não pode parar por falha técnica de máquina
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-body)" }}>
                Oferecemos planos de suporte contínuo e manutenção programada
                com SLA garantido.
              </p>
            </div>
          </div>

          <a href="#calculadora" className="btn btn-primary">
            Agendar Diagnóstico de Hardware
          </a>
        </div>
      </div>
    </section>
  );
};

