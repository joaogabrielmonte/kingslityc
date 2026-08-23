import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Wrench,
  Server,
  Radio,
  Activity,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "../utils/useScrollReveal";

export const HardwarePage: React.FC = () => {
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
            INFRAESTRUTURA & ENGENHARIA FÍSICA
          </span>
          <h1 className="heading-xl reveal-up" style={{ marginBottom: "20px" }}>
            Hardware,{" "}
            <span style={{ color: "var(--accent-sapphire)" }}>Sistemas Embarcados & IoT</span>
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
            Dimensionamento, montagem sob encomenda, projetos de sistemas
            embarcados em placas físicas e manutenção preventiva/corretiva de
            servidores corporativos.
          </p>
        </div>
      </section>

      {/* Main Capabilities */}
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
                <Radio size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Projetos de Sistemas Embarcados & IoT
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Desenvolvimento de placas físicas embarcadas para automação
                industrial, coleta de dados por sensores e comunicação em tempo
                real.
              </p>
            </div>

            <div className="apple-card reveal-up delay-2">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Server size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Montagem de Servidores Dedicados
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Construção e dimensionamento de servidores corporativos de alta
                performance para bancos de dados de ERPs e clusters de
                aplicação.
              </p>
            </div>

            <div className="apple-card reveal-up delay-3">
              <div style={{ color: "var(--accent-sapphire)", marginBottom: "16px" }}>
                <Wrench size={32} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Manutenção Física Preventiva & Corretiva
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Diagnóstico térmico, higienização ultrassônica, troca de
                compostos térmicos e recuperação física de equipamentos
                críticos.
              </p>
            </div>
          </div>

          <div
            className="apple-card reveal-scale"
            style={{ textAlign: "center", padding: "48px 24px" }}
          >
            <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
              Precisa de projeto embarcado ou manutenção de servidores?
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "16px",
                maxWidth: "600px",
                margin: "0 auto 28px auto",
              }}
            >
              Agende uma avaliação da infraestrutura física da sua empresa com
              nossos engenheiros.
            </p>
            <Link
              to="/contato"
              className="btn btn-primary"
              style={{ fontSize: "15px", padding: "14px 32px" }}
            >
              <span>Solicitar Avaliação de Hardware</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

