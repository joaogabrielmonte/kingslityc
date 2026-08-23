import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Terminal,
  Cpu,
  Users,
  Building2,
  BarChart3,
  Radio,
  HardDrive,
  Server,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { CasesSucesso } from "../components/CasesSucesso";
import { useScrollReveal } from "../utils/useScrollReveal";

export const HomePage: React.FC = () => {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona o processo de desenvolvimento e consultoria para o TOTVS Protheus?",
      a: "Nossa equipe realiza o diagnóstico da sua operação, desenha a arquitetura ideal e implementa customizações ou rotinas sem comprometer atualizações de versão padrão TOTVS.",
    },
    {
      q: "Qual é o prazo médio para entrega de um sistema web sob encomenda?",
      a: "Projetos de menor complexidade levam de 15 a 30 dias. Plataformas corporativas completas com integrações ERP são entregues em módulos funcionais contínuos.",
    },
    {
      q: "Vocês realizam a montagem e manutenção presencial de hardware?",
      a: "Sim. Oferecemos dimensionamento, montagem de servidores dedicados e planos de manutenção física preventiva com suporte contínuo.",
    },
  ];

  return (
    <div className="page-transition">
      {/* Hero Corporate Banner */}
      <section
        style={{
          padding: "110px 0 90px 0",
          backgroundColor: "var(--bg-primary)",
          borderBottom: "1px solid rgba(107, 175, 69, 0.2)",
          position: "relative",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{ maxWidth: "880px", margin: "0 auto" }}
            className="reveal-up"
          >
            <h1 className="heading-xl" style={{ marginBottom: "24px" }}>
              Engenharia de Software,{" "}
              <span style={{ color: "var(--accent-sapphire)" }}>
                Desenvolvimento Protheus ERP
              </span>{" "}
              & Sistemas Embarcados.
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "var(--text-body)",
                lineHeight: "1.6",
                marginBottom: "40px",
                maxWidth: "780px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Soluções integradas de tecnologia: desenvolvimento sob encomenda
              de software web, customizações e consultoria em ERP TOTVS
              Protheus, sistemas embarcados IoT e manutenção física de hardware.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link
                to="/contato"
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "15px" }}
              >
                <span>Falar com um Engenheiro</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/protheus"
                className="btn btn-outline"
                style={{ padding: "14px 32px", fontSize: "15px" }}
              >
                <span>Ver Desenvolvimento Protheus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Market Metrics */}
      <section
        style={{
          backgroundColor: "var(--bg-secondary)",
          padding: "48px 0",
          borderBottom: "1px solid rgba(107, 175, 69, 0.2)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px",
            }}
            className="reveal-scale"
          >
            <div>
              <div
                style={{ fontSize: "36px", fontWeight: 800, color: "var(--text-heading)" }}
              >
                TOTVS ERP
              </div>
              <div
                style={{ fontSize: "14px", color: "var(--text-body)", marginTop: "4px" }}
              >
                Consultoria & Desenvolvimento Protheus
              </div>
            </div>

            <div>
              <div
                style={{ fontSize: "36px", fontWeight: 800, color: "var(--accent-sapphire)" }}
              >
                IoT & Embarcados
              </div>
              <div
                style={{ fontSize: "14px", color: "var(--text-body)", marginTop: "4px" }}
              >
                Projetos Físicos & Sensores
              </div>
            </div>

            <div>
              <div
                style={{ fontSize: "36px", fontWeight: 800, color: "var(--accent-sapphire)" }}
              >
                Web & Cloud
              </div>
              <div
                style={{ fontSize: "14px", color: "var(--text-body)", marginTop: "4px" }}
              >
                Sistemas Sob Encomenda
              </div>
            </div>

            <div>
              <div
                style={{ fontSize: "36px", fontWeight: 800, color: "#0e7a54" }}
              >
                24/7
              </div>
              <div
                style={{ fontSize: "14px", color: "var(--text-body)", marginTop: "4px" }}
              >
                Manutenção de Hardware
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "48px" }} className="reveal-up">
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
              ÁREAS DE ATUAÇÃO
            </span>
            <h2 className="heading-lg">
              Soluções Corporativas de Alta Precisão
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Pillar 1 */}
            <div className="card-3d reveal-up delay-1">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(107, 175, 69, 0.15)",
                  border: "1px solid rgba(165, 214, 108, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-sapphire)",
                  marginBottom: "20px",
                }}
              >
                <Server size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Desenvolvimento ERP Protheus
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                Projetos e customizações para otimização de faturamento,
                estoque, financeiro e integrações de sistema no ERP TOTVS
                Protheus.
              </p>
              <Link
                to="/protheus"
                style={{
                  color: "var(--accent-sapphire)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Saiba mais sobre Protheus</span> <ArrowRight size={16} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="card-3d reveal-up delay-2">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(107, 175, 69, 0.15)",
                  border: "1px solid rgba(165, 214, 108, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-sapphire)",
                  marginBottom: "20px",
                }}
              >
                <Layers size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Sistemas Sob Encomenda & Web
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                Desenvolvimento de plataformas web corporativas, portais de
                clientes e dashboards gerenciais sob medida.
              </p>
              <Link
                to="/sistemas"
                style={{
                  color: "var(--accent-sapphire)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Ver Sistemas sob Medida</span> <ArrowRight size={16} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="card-3d reveal-up delay-3">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(165, 214, 108, 0.15)",
                  border: "1px solid rgba(165, 214, 108, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-sapphire)",
                  marginBottom: "20px",
                }}
              >
                <Radio size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "12px" }}>
                Sistemas Embarcados & Hardware
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "14px",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                Desenvolvimento para placas físicas embarcadas, automação de
                equipamentos e manutenção física de servidores.
              </p>
              <Link
                to="/hardware"
                style={{
                  color: "var(--accent-sapphire)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Detalhes de Hardware & Embarcados</span>{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASES DE SUCESSO SECTION */}
      <CasesSucesso />

      {/* PROCESS STEPS SECTION */}
      <section className="section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto 48px auto",
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
              ETAPAS DO PROJETO
            </span>
            <h2 className="heading-lg">Como Trabalhamos</h2>
            <p
              style={{ color: "var(--text-body)", fontSize: "16px", marginTop: "10px" }}
            >
              Metodologia transparente do primeiro diagnóstico ao acompanhamento
              pós-implantação.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="card-3d reveal-up delay-1">
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--accent-sapphire)",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                PASSO 01
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  color: "var(--text-heading)",
                  marginBottom: "8px",
                }}
              >
                Diagnóstico & Escopo
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-body)" }}>
                Mapeamento detalhado dos processos e levantamento dos requisitos
                do sistema.
              </p>
            </div>

            <div className="card-3d reveal-up delay-2">
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--accent-sapphire)",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                PASSO 02
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  color: "var(--text-heading)",
                  marginBottom: "8px",
                }}
              >
                Arquitetura & Código
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-body)" }}>
                Desenvolvimento da solução sob medida utilizando padrões de alta
                performance.
              </p>
            </div>

            <div className="card-3d reveal-up delay-3">
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--accent-sapphire)",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                PASSO 03
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  color: "var(--text-heading)",
                  marginBottom: "8px",
                }}
              >
                Homologação & Testes
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-body)" }}>
                Validação em ambiente isolado antes de qualquer virada de chave
                operacional.
              </p>
            </div>

            <div className="card-3d reveal-up delay-4">
              <div
                style={{
                  fontSize: "12px",
                  color: "#0e7a54",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                PASSO 04
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  color: "var(--text-heading)",
                  marginBottom: "8px",
                }}
              >
                Implantação & Suporte
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-body)" }}>
                Go-live seguro com acompanhamento contínuo e plano de manutenção
                técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto 48px auto",
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
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="heading-lg">Perguntas Frequentes</h2>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card-3d reveal-up"
                style={{ cursor: "pointer", padding: "20px 24px" }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ fontSize: "16px", color: "var(--text-heading)" }}>
                    {faq.q}
                  </h4>
                  <ChevronDown
                    size={20}
                    color="var(--accent-sapphire)"
                    style={{
                      transform:
                        openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {openFaq === idx && (
                  <p
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      color: "var(--text-body)",
                      lineHeight: "1.6",
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div
            className="card-3d reveal-scale"
            style={{ padding: "48px", textAlign: "center" }}
          >
            <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
              Pronto para iniciar seu projeto de tecnologia?
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "16px",
                maxWidth: "600px",
                margin: "0 auto 32px auto",
              }}
            >
              Fale com nossa equipe técnica e receba uma análise de arquitetura
              para a sua empresa.
            </p>
            <Link
              to="/contato"
              className="btn btn-primary"
              style={{ padding: "14px 36px", fontSize: "15px" }}
            >
              Solicitar Atendimento Técnico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

