import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Server,
  Database,
  Code2,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "../utils/useScrollReveal";

export const SistemasPage: React.FC = () => {
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
            SOLUÇÕES SOB ENCOMENDA
          </span>
          <h1 className="heading-xl reveal-up" style={{ marginBottom: "20px" }}>
            Desenvolvimento de{" "}
            <span style={{ color: "var(--accent-sapphire)" }}>Sistemas Robustos</span>
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
            Projetamos e construímos softwares de alta performance sob medida
            para demandas corporativas específicas, garantindo integração total
            com o ecossistema da sua empresa.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            <div className="apple-card reveal-up delay-1">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Globe size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Plataformas Web & Portais Corporativos
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Desenvolvimento em React, Node.js e TypeScript para portais de
                clientes, dashboards analíticos e sistemas operacionais de alta
                velocidade.
              </p>
            </div>

            <div className="apple-card reveal-up delay-2">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Server size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                APIs REST & Microsserviços High-Load
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Arquitetura desacoplada e resiliente capaz de processar milhões
                de requisições sem degradação de tempo de resposta.
              </p>
            </div>

            <div className="apple-card reveal-up delay-3">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Database size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Integração de Bancos de Dados Completa
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Modelagem e otimização para PostgreSQL, SQL Server e Oracle,
                garantindo integridade ACID e sincronização em tempo real.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div
            className="apple-card reveal-scale"
            style={{
              background: "var(--bg-secondary)",
              textAlign: "center",
              padding: "48px 24px",
              borderColor: "rgba(107, 175, 69, 0.3)",
            }}
          >
            <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
              Tem uma demanda de software sob medida?
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "16px",
                maxWidth: "600px",
                margin: "0 auto 28px auto",
              }}
            >
              Submeta os requisitos do seu projeto para receber uma análise
              técnica preliminar dos nossos engenheiros.
            </p>
            <Link
              to="/contato"
              className="btn btn-primary"
              style={{ fontSize: "15px", padding: "14px 32px" }}
            >
              <span>Solicitar Proposta de Software</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

