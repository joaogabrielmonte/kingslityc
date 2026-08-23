import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Font,
} from "@react-email/components";
import * as React from "react";

export interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceName: string;
  message: string;
}

const brand = {
  bgPage: "#f6f7f5",
  bgCard: "#ffffff",
  border: "#e7e9e4",
  green: "#6baf45",
  textHeading: "#111827",
  textBody: "#4b5563",
  textMuted: "#9ca3af",
};

const fontStack =
  "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const LOGO_URL = "https://kingslityc.com.br/logo.png";

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  company,
  serviceName,
  message,
}) => {
  return (
    <Html lang="pt-BR">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Novo contato de {name} — {serviceName}</Preview>
      <Body style={{ backgroundColor: brand.bgPage, fontFamily: fontStack, margin: 0, padding: "48px 12px" }}>
        <Container
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            backgroundColor: brand.bgCard,
            borderRadius: "8px",
            border: `1px solid ${brand.border}`,
            borderTop: `2px solid ${brand.green}`,
          }}
        >
          {/* Header */}
          <Section style={{ padding: "32px 32px 0 32px", textAlign: "center" }}>
            <Img src={LOGO_URL} width="36" height="36" alt="KINGSLITYC" style={{ margin: "0 auto" }} />
          </Section>

          {/* Body */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text
              style={{
                fontSize: "13px",
                color: brand.textMuted,
                textAlign: "center",
                margin: "0 0 4px 0",
              }}
            >
              Novo contato pelo site
            </Text>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: brand.textHeading,
                textAlign: "center",
                margin: "0 0 28px 0",
              }}
            >
              {serviceName}
            </Text>

            <Field label="Nome" value={name} />
            <Field
              label="E-mail"
              value={
                <Link href={`mailto:${email}`} style={{ fontSize: "14px", color: brand.textHeading, textDecoration: "underline" }}>
                  {email}
                </Link>
              }
            />
            {phone ? <Field label="Telefone" value={phone} /> : null}
            <Field label="Empresa" value={company || "Pessoa física"} last />

            <Hr style={{ borderColor: brand.border, margin: "24px 0" }} />

            <Text style={{ fontSize: "13px", color: brand.textMuted, margin: "0 0 8px 0" }}>
              Mensagem
            </Text>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: brand.textBody,
                margin: 0,
                paddingLeft: "12px",
                borderLeft: `2px solid ${brand.border}`,
              }}
            >
              {message}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "24px 32px 32px 32px", textAlign: "center" }}>
            <Text style={{ fontSize: "12px", color: brand.textMuted, margin: 0 }}>
              KINGSLITYC · Recife, PE
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const Field: React.FC<{ label: string; value: React.ReactNode; last?: boolean }> = ({ label, value, last }) => (
  <Section style={{ marginBottom: last ? "0" : "14px" }}>
    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
      <tr>
        <td style={{ fontSize: "13px", color: brand.textMuted, width: "88px", verticalAlign: "top" }}>{label}</td>
        <td style={{ fontSize: "14px", color: brand.textHeading, fontWeight: 500 }}>
          {typeof value === "string" ? value : value}
        </td>
      </tr>
    </table>
  </Section>
);

export default ContactEmail;
