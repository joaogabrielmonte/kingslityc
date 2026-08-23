import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 54, showText = true }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Official Brand Green Emblem Logo */}
      <img
        src="/logo.png"
        alt="KINGSLITYC Logo"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "contain",
          filter: "drop-shadow(0 4px 16px rgba(107, 175, 69, 0.3))",
        }}
      />

      {showText && (
        <span
          style={{
            fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            letterSpacing: "-0.01em",
            color: "var(--text-heading)",
          }}
        >
          KINGSLITYC
        </span>
      )}
    </div>
  );
};
