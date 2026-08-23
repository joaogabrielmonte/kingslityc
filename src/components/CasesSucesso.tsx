import React from "react";
import {
  Building2,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Server,
  Layers,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export const CasesSucesso: React.FC = () => {
  const cases = [
    {
      title: "Otimização ERP Protheus & WMS Industrial",
      client: "Grupo Industrial Multisetor",
      metric: "+45% Eficiência Operacional",
      category: "Desenvolvimento TOTVS Protheus",
      icon: Server,
      description:
        "Redesenho de rotinas de expedição e integração do ERP TOTVS Protheus com coletor de dados WMS em tempo real, eliminando erros de estorno e faturamento.",
      results: [
        "Zerar divergências no inventário de estoque",
        "Faturamento automatizado de pedidos em lote",
        "Integração contínua sem travamento de tabelas",
      ],
    },
    {
      title: "Sistema Embarcado IoT & Monitoramento Físico",
      client: "Operadora de Logística Crítica",
      metric: "99.9% Uptime de Hardware",
      category: "Sistemas Embarcados & Hardware",
      icon: Cpu,
      description:
        "Dimensionamento e produção de hardware dedicado com sensores térmicos e placas embarcadas para monitoramento contínuo em campo.",
      results: [
        "Diagnóstico preventivo de falhas de hardware",
        "Comunicação contínua via barramento industrial",
        "Placa física resistente a alta temperatura",
      ],
    },
    {
      title: "Portal Web Corporativo sob Encomenda",
      client: "Empresa de Serviços & Distribuição",
      metric: "10x Mais Rapidez de Atendimento",
      category: "Sistemas sob Demanda",
      icon: Layers,
      description:
        "Desenvolvimento de plataforma web sob medida para gestão de solicitações, integração de chamados técnicos e controle financeiro.",
      results: [
        "Interface intuitiva de alta velocidade",
        "Integração direta com o banco de dados corporativo",
        "Arquitetura em nuvem com alta disponibilidade",
      ],
    },
  ];

  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 56px auto",
          }}
          className="reveal-up"
        >
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
            CASES DE SUCESSO & RESULTADOS
          </span>
          <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
            Cases de Sucesso com{" "}
            <span style={{ color: "var(--accent-sapphire)" }}>Resultados Comprovados</span>
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "17px", lineHeight: "1.6" }}>
            Soluções projetadas sob o padrão de excelência corporativo —
            combinando alto impacto visual com engenharia de conversão.
          </p>
        </div>

        {/* High Conversion Bento Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "32px",
          }}
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="apple-card reveal-up"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Capsule Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background:
                          "linear-gradient(135deg, rgba(107, 175, 69, 0.25) 0%, rgba(165, 214, 108, 0.1) 100%)",
                        border: "1px solid rgba(165, 214, 108, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-sapphire)",
                        boxShadow: "0 8px 20px rgba(107, 175, 69, 0.2)",
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--accent-sapphire)",
                        background: "rgba(165, 214, 108, 0.12)",
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(165, 214, 108, 0.3)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {c.category}
                    </span>
                  </div>

                  {/* Client Subtitle */}
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                    }}
                  >
                    {c.client}
                  </span>

                  {/* Title */}
                  <h3
                    className="heading-md"
                    style={{
                      marginTop: "6px",
                      marginBottom: "14px",
                      color: "var(--text-heading)",
                      fontSize: "21px",
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-body)",
                      fontSize: "14px",
                      lineHeight: "1.65",
                      marginBottom: "20px",
                    }}
                  >
                    {c.description}
                  </p>

                  {/* High Impact Metric Badge */}
                  <div className="metric-chip">
                    <TrendingUp size={20} color="var(--accent-sapphire)" />
                    <span className="metric-number">{c.metric}</span>
                  </div>

                  {/* Feature Check List */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    {c.results.map((res, rIdx) => (
                      <li
                        key={rIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "13px",
                          color: "var(--text-body)",
                        }}
                      >
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

