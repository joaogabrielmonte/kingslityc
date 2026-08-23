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
              Engenharia de software sob medida, desenvolvimento de rotinas em
              TOTVS Protheus, sistemas embarcados e manutenção de hardware.
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
              Módulos Protheus
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
              <li>Faturamento (MATA410)</li>
              <li>Estoque & WMS (MATA241)</li>
              <li>Financeiro & CNAB (FINA050)</li>
              <li>WebServices & APIs REST</li>
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
              <a
                href="mailto:contato@kingslityc.com.br"
                style={{ color: "var(--accent-sapphire)", textDecoration: "none" }}
              >
                contato@kingslityc.com.br
              </a>
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
            Recife - PE • Engenharia de Software, Protheus ERP & Hardware
          </span>
        </div>
      </div>
    </footer>
  );
};

