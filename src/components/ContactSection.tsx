import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  onSuccessSubmit: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccessSubmit(
      `Mensagem enviada por ${formData.name} (${formData.email})`,
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="section" style={{ position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left info */}
          <div>
            <div className="badge">Fale Conosco</div>
            <h2
              style={{
                fontSize: "36px",
                color: "var(--text-heading)",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            >
              Inicie seu Projeto com a{" "}
              <span className="gradient-text">KINGSLITYC</span>
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "32px",
              }}
            >
              Nossa equipe técnica está pronta para entender as rotinas da sua
              empresa e projetar a melhor solução em software ou hardware.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    background: "rgba(107, 175, 69, 0.15)",
                    padding: "12px",
                    borderRadius: "12px",
                    color: "var(--accent-sapphire)",
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      display: "block",
                    }}
                  >
                    E-MAIL COMERCIAL
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "var(--text-heading)",
                      fontWeight: 600,
                    }}
                  >
                    contato@kingslityc.com.br
                  </span>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    background: "rgba(165, 214, 108, 0.15)",
                    padding: "12px",
                    borderRadius: "12px",
                    color: "var(--accent-sapphire)",
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      display: "block",
                    }}
                  >
                    ATENDIMENTO & SUPORTE
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "var(--text-heading)",
                      fontWeight: 600,
                    }}
                  >
                    +55 (11) 99999-0000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="glass-card">
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-label)",
                    marginBottom: "6px",
                  }}
                >
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Seu nome"
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-heading)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-label)",
                    marginBottom: "6px",
                  }}
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seuemail@empresa.com"
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-heading)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-label)",
                    marginBottom: "6px",
                  }}
                >
                  Descrição da Demanda
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Descreva brevemente a rotina Protheus, o sistema desejado ou a necessidade de hardware..."
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-heading)",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "14px", justifyContent: "center" }}
              >
                <Send size={18} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

