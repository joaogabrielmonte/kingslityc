import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Server,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "750px",
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
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="heading-lg" style={{ marginBottom: "14px" }}>
            Três Pilares de{" "}
            <span style={{ color: "var(--accent-sapphire)" }}>Engenharia & Tecnologia</span>
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "16px" }}>
            Engenharia de precisão para conectar o ecossistema da sua empresa:
            do ERP Protheus ao hardware embarcado.
          </p>
        </div>

        {/* 3 Main Service Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Card 1 */}
          <div
            className="apple-card reveal-up delay-1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
                  marginBottom: "24px",
                }}
              >
                <Layers size={26} />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                }}
              >
                Desenvolvimento de Sistemas Sob Demanda
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.65",
                }}
              >
                Criamos aplicações web, APIs REST de alta performance e
                plataformas corporativas robustas sob medida para processos
                complexos.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Arquiteturas
                  distribuídas em microsserviços
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Dashboards
                  analíticos e painéis gerenciais
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Bancos de dados de
                  alta velocidade
                </li>
              </ul>
            </div>

            <Link
              to="/sistemas"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Conhecer Soluções em Sistemas</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div
            className="apple-card reveal-up delay-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
                  marginBottom: "24px",
                }}
              >
                <Server size={26} />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                }}
              >
                Desenvolvimento ERP TOTVS Protheus
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.65",
                }}
              >
                Consultoria e desenvolvimento de rotinas para otimização de
                Faturamento, Estoque, Financeiro e integrações de sistema no
                Protheus.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Customizações em
                  Faturamento e Estoque
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Automação de
                  Workflows e Gatilhos
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Integração entre o
                  ERP e E-commerce / WMS
                </li>
              </ul>
            </div>

            <Link
              to="/protheus"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Ver Soluções TOTVS Protheus</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div
            className="apple-card reveal-up delay-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
                  marginBottom: "24px",
                }}
              >
                <Cpu size={26} />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  color: "var(--text-heading)",
                  marginBottom: "12px",
                }}
              >
                Sistemas Embarcados & Hardware
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.65",
                }}
              >
                Projetos físicos sob demanda, montagem de servidores dedicados,
                placas embarcadas IoT e manutenção física preventiva.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Placas físicas
                  embarcadas IoT para sensores
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Montagem de
                  servidores dedicados corporativos
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-label)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-sapphire)" /> Manutenção física
                  preventiva & diagnóstico
                </li>
              </ul>
            </div>

            <Link
              to="/hardware"
              className="btn btn-outline"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Ver Serviços de Hardware</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

