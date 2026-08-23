import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "64px 0 32px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          <div>
            <Logo />
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "14px",
                marginTop: "16px",
                lineHeight: "1.6",
              }}
            >
              Software house de sistemas sob encomenda: plataformas
              multi-tenant, ERPs sob medida, integrações e APIs, sistemas
              embarcados e manutenção de hardware.
            </p>
          </div>

          <div>
            <h4
              style={{
                color: "var(--text-heading)",
                fontSize: "14px",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Navegação
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "14px",
                color: "var(--text-body)",
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sistemas"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sistemas Sob Encomenda
                </Link>
              </li>
              <li>
                <Link
                  to="/protheus"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  TOTVS Protheus ERP
                </Link>
              </li>
              <li>
                <Link
                  to="/hardware"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Hardware & Embarcados
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "var(--text-heading)",
                fontSize: "14px",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              O Que Construímos
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "14px",
                color: "var(--text-body)",
              }}
            >
              <li>Ponto Eletrônico Multi-tenant</li>
              <li>Convites & Check-in de Eventos</li>
              <li>Mini ERP Sob Medida</li>
              <li>APIs & Integrações (Protheus)</li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "var(--text-heading)",
                fontSize: "14px",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Contato Institucional
            </h4>
            <p
              style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.6" }}
            >
              KINGSLITYC Tecnologia
              <br />
              Recife - PE, Brasil
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          <span>
            © {new Date().getFullYear()} KINGSLITYC. Todos os direitos
            reservados.
          </span>
          <span>
            Recife - PE • Engenharia de Software Sob Encomenda & Hardware
          </span>
        </div>
      </div>
    </footer>
  );
};

