import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);

  // Runs ONLY once on initial app load / refresh (NOT on route change)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 6;
        return next > 100 ? 100 : next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setFadingOut(true);
      }, 200);

      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 550);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--bg-primary)",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadingOut ? 0 : 1,
        visibility: fadingOut ? "hidden" : "visible",
        transition:
          "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s ease",
        willChange: "opacity, visibility",
        pointerEvents: fadingOut ? "none" : "auto",
      }}
    >
      {/* Top Slim Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: "3px",
          background: "linear-gradient(90deg, #6BAF45 0%, #A5D66C 100%)",
          transition: "width 0.08s ease-out",
        }}
      />

      {/* Clean Monogram Symbol */}
      <div style={{ marginBottom: "24px", opacity: 0.95 }}>
        <Logo size={48} showText={false} />
      </div>

      {/* Minimal Digital Counter */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "32px",
          fontWeight: 500,
          color: "var(--text-heading)",
          letterSpacing: "-0.02em",
          display: "flex",
          alignItems: "baseline",
          gap: "2px",
        }}
      >
        <span>{progress}</span>
        <span style={{ fontSize: "18px", color: "var(--text-muted)" }}>%</span>
      </div>

      {/* Minimal Status Text */}
      <div
        style={{
          marginTop: "12px",
          fontSize: "10px",
          color: "#475569",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        Iniciando ambiente
      </div>
    </div>
  );
};

