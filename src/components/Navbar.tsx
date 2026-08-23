import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Início", end: true },
  { to: "/sistemas", label: "Sistemas Sob Encomenda" },
  { to: "/protheus", label: "TOTVS Protheus ERP" },
  { to: "/hardware", label: "Hardware & Embarcados" },
  { to: "/contato", label: "Contato" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontSize: "14px",
    fontWeight: isActive ? 600 : 500,
    color: isActive ? "var(--text-heading)" : "var(--text-body)",
    textDecoration: "none",
    borderBottom: isActive
      ? "2px solid var(--accent-primary)"
      : "2px solid transparent",
    paddingBottom: "4px",
    transition: "color 0.2s ease, border-color 0.25s ease",
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "88px",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setMobileOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} style={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contato" className="btn btn-primary navbar-cta">
          <span>Falar Conosco</span>
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar-mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            style={({ isActive }) => ({
              fontSize: "16px",
              fontWeight: isActive ? 600 : 500,
              color: isActive ? "var(--text-heading)" : "var(--text-body)",
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid var(--border-subtle)",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
