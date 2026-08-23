import React from "react";
import { Link } from "react-router-dom";
import {
  Server,
  CheckCircle2,
  ArrowRight,
  Code,
  ShieldAlert,
  Cpu,
  Database,
  Workflow,
} from "lucide-react";
import { useScrollReveal } from "../utils/useScrollReveal";

export const ProtheusPage: React.FC = () => {
  useScrollReveal();

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
            CONSULTORIA & DESENVOLVIMENTO ERP
          </span>
          <h1 className="heading-xl reveal-up" style={{ marginBottom: "20px" }}>
            Desenvolvimento{" "}
            <span style={{ color: "var(--accent-sapphire)" }}>TOTVS Protheus</span>
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
            Soluções completas de consultoria, desenvolvimento e otimização para
            o ERP TOTVS Protheus — adaptando os fluxos operacionais às
            necessidades estratégicas do seu negócio.
          </p>
        </div>
      </section>

      {/* Main Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            <div className="apple-card reveal-up delay-1">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Server size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Customizações de Processos & Módulos
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Desenvolvimento de regras de negócio exclusivas para os módulos
                de Faturamento, Estoque, Financeiro, Compras e Contabilidade.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "13px",
                  color: "var(--text-label)",
                }}
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> Regras
                  automatizadas de validação
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> Relatórios
                  operacionais e gerenciais
                </li>
              </ul>
            </div>

            <div className="apple-card reveal-up delay-2">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Workflow size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Integrações REST & Conexão de Sistemas
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Conexão bidirecional entre o ERP Protheus e plataformas externas
                de E-commerce, coletores WMS, CRMs e aplicações sob encomenda.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "13px",
                  color: "var(--text-label)",
                }}
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> WebServices de alta
                  performance
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> Sincronização
                  automática em tempo real
                </li>
              </ul>
            </div>

            <div className="apple-card reveal-up delay-3">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Database size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Otimização de Desempenho & Banco de Dados
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Análise e eliminação de lentidões em rotinas críticas de
                faturamento e fechamento financeiro, garantindo alta velocidade
                operacional.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "13px",
                  color: "var(--text-label)",
                }}
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> Conciliação CNAB e
                  tributária
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2 size={14} color="var(--accent-sapphire)" /> Boas práticas de
                  governança de dados
                </li>
              </ul>
            </div>
          </div>

          {/* Banner */}
          <div className="apple-card reveal-scale" style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div>
                <h3 className="heading-md" style={{ marginBottom: "8px" }}>
                  Procurando Consultoria para seu ERP Protheus?
                </h3>
                <p
                  style={{
                    color: "var(--text-body)",
                    fontSize: "15px",
                    maxWidth: "640px",
                  }}
                >
                  Fale com nossos engenheiros para diagnosticar melhorias e
                  implementar novos módulos ou integrações no seu ambiente.
                </p>
              </div>
              <Link to="/contato" className="btn btn-primary">
                Agendar Reunião Técnica
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

