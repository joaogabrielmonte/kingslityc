import React, { useState } from "react";
import {
  Terminal,
  Code,
  CheckCircle,
  ArrowRight,
  Play,
  Database,
  Shield,
} from "lucide-react";

export const ProtheusExplorer: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState("faturamento");

  const modules = [
    {
      id: "faturamento",
      name: "Faturamento & Vendas",
      routines: [
        "MATA410 - Pedido de Venda",
        "MATA461 - Liberação de Estoque",
        "MATA920 - Emissão de NFe",
      ],
      codeSnippet: `// Ponto de Entrada no Faturamento - M410STTS
User Function M410STTS()
  Local aArea := GetArea()
  Local lRet  := .T.
  
  // Customização KINGSLITYC: Validação de Crédito em Tempo Real
  If U_KLValidaCredito(M->C5_CLIENTE, M->C5_LOJA)
    ConOut("[KINGSLITYC] Credito aprovado para o pedido " + M->C5_NUM)
  Else
    Help("", 1, "KLCRED",, "Limite de credito excedido.", 1, 0)
    lRet := .F.
  EndIf
  
  RestArea(aArea)
Return lRet`,
    },
    {
      id: "estoque",
      name: "Estoque & WMS",
      routines: [
        "MATA241 - Movimentação Interna",
        "MATA225 - Inventário",
        "API REST WMS Customizada",
      ],
      codeSnippet: `// API REST TL++ para Integração de Coletor WMS
#include "tlpp-core.th"

Class KLWmsAdapter
  Public Method New()
  Public Method PostBarcodeScan(cCodBar As Character) As Json
EndClass

Method PostBarcodeScan(cCodBar) Class KLWmsAdapter
  Local jResponse := JsonObject():New()
  // Validação de Lote e Endereçamento no Protheus
  jResponse["status"] := "success"
  jResponse["local"]  := "A1-04-02"
Return jResponse`,
    },
    {
      id: "financeiro",
      name: "Financeiro & Contas",
      routines: [
        "FINA050 - Contas a Pagar",
        "FINA040 - Contas a Receber",
        "CNAB Eletrônico Automático",
      ],
      codeSnippet: `// Customização de Conciliação Bancária Automática
User Function KLFinCNAB()
  Local cFile := "C:\\KINGSLITYC\\CNAB_RETORNO.RET"
  
  // Leitura e liquidação automatizada de títulos
  If File(cFile)
    U_KLLiquidaTitulos(cFile)
  EndIf
Return`,
    },
  ];

  const currentModule =
    modules.find((m) => m.id === selectedModule) || modules[0];

  return (
    <section
      id="protheus"
      className="section"
      style={{
        background: "rgba(5, 7, 13, 0.7)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 48px auto",
          }}
        >
          <div className="badge">Especialidade TOTVS Protheus</div>
          <h2
            style={{
              fontSize: "34px",
              color: "var(--text-heading)",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            Customizações de Rotinas em{" "}
            <span className="gradient-text">AdvPL & TL++</span>
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "16px" }}>
            Adaptamos o TOTVS Protheus exatamente à operação da sua empresa. Sem
            travar atualizações do padrão TOTVS.
          </p>
        </div>

        {/* Interactive Explorer Container */}
        <div
          className="glass-card"
          style={{
            padding: "0",
            overflow: "hidden",
            border: "1px solid rgba(107, 175, 69, 0.25)",
          }}
        >
          {/* Module Selector Bar */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(11, 19, 38, 0.9)",
              padding: "8px 12px",
              gap: "8px",
              overflowX: "auto",
            }}
          >
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod.id)}
                style={{
                  background:
                    selectedModule === mod.id
                      ? "rgba(107, 175, 69, 0.25)"
                      : "transparent",
                  border:
                    selectedModule === mod.id
                      ? "1px solid rgba(165, 214, 108, 0.4)"
                      : "1px solid transparent",
                  color: selectedModule === mod.id ? "var(--text-heading)" : "var(--text-body)",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: selectedModule === mod.id ? 600 : 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Terminal
                  size={16}
                  color={selectedModule === mod.id ? "var(--accent-sapphire)" : "var(--text-muted)"}
                />
                {mod.name}
              </button>
            ))}
          </div>

          {/* Code & Features Body Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              padding: "24px",
              gap: "24px",
            }}
          >
            {/* Left: Routines list */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  color: "var(--accent-sapphire)",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Code size={18} /> Rotinas & Pontos de Entrada
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {currentModule.routines.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      color: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle size={16} color="#10b981" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(107, 175, 69, 0.1)",
                  border: "1px solid rgba(107, 175, 69, 0.2)",
                  fontSize: "13px",
                  color: "var(--text-body)",
                }}
              >
                <strong
                  style={{
                    color: "var(--text-heading)",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  Padrão de Qualidade KINGSLITYC:
                </strong>
                Códigos otimizados sem Locks desnecessários em tabelas críticas
                (SA1, SB1, SC5, SE1/SE2).
              </div>
            </div>

            {/* Right: Real Code Snippet Box */}
            <div
              style={{
                background: "#04060a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span>kl_rotina_{selectedModule}.prw</span>
                <span
                  style={{
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Play size={12} /> AdvPL / TL++ Verified
                </span>
              </div>

              <pre
                className="mono"
                style={{
                  padding: "18px",
                  fontSize: "12px",
                  color: "var(--accent-sapphire)",
                  lineHeight: "1.6",
                  overflowX: "auto",
                  margin: 0,
                }}
              >
                <code>{currentModule.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

