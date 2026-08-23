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
  Monitor,
} from "lucide-react";

export const CasesSucesso: React.FC = () => {
  const cases = [
    {
      title: "Ponto Eletrônico Multi-tenant",
      client: "Plataforma SaaS Própria",
      metric: "Múltiplas Empresas, 1 Sistema",
      category: "Sistema Multi-tenant",
      icon: Building2,
      description:
        "Plataforma de controle de ponto que atende várias empresas de forma isolada e segura na mesma infraestrutura, com gestão de jornada, relatórios e conformidade trabalhista.",
      results: [
        "Isolamento completo de dados por empresa",
        "Registro de ponto em tempo real",
        "Relatórios e exportação para folha de pagamento",
      ],
    },
    {
      title: "Sistema de Convites & Check-in de Eventos",
      client: "Gestão de Eventos",
      metric: "Bipagem em Tempo Real",
      category: "Sistemas sob Demanda",
      icon: Zap,
      description:
        "Plataforma para cadastro de convidados, envio automatizado de convites e controle de entrada com bipagem (check-in) no dia do evento.",
      results: [
        "Envio automático de convites digitais",
        "Check-in por leitura de código na entrada",
        "Painel de acompanhamento em tempo real",
      ],
    },
    {
      title: "Mini ERP Sob Medida",
      client: "Gestão Empresarial",
      metric: "Processos Unificados",
      category: "Sistemas de Gestão",
      icon: Layers,
      description:
        "Sistema de gestão compacto e sob medida — cadastros, estoque, financeiro e relatórios — construído de acordo com a rotina real da empresa, sem módulos que ela não usa.",
      results: [
        "Módulos sob medida para a operação do cliente",
        "Cadastros, estoque e financeiro integrados",
        "Relatórios gerenciais em tempo real",
      ],
    },
    {
      title: "Telas & Painéis sob Medida",
      client: "Interfaces Corporativas",
      metric: "Sob Medida pra Cada Operação",
      category: "UI/UX Corporativo",
      icon: Monitor,
      description:
        "Telas e painéis desenvolvidos conforme a logística e o fluxo de trabalho de cada cliente — de dashboards operacionais a interfaces conectadas a sistemas como o TOTVS Protheus.",
      results: [
        "Interface adaptada à operação e logística do cliente",
        "Integração com sistemas já existentes (ex: Protheus)",
        "Foco em velocidade e clareza para o usuário final",
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

