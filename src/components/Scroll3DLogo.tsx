import React, { useEffect, useMemo, useRef, useState } from "react";

const FRAMES = [
  "/3D/optimized/frame-1.webp",
  "/3D/optimized/frame-2.webp",
  "/3D/optimized/frame-3.webp",
  "/3D/optimized/frame-4.webp",
  "/3D/optimized/frame-5.webp",
];

interface DustSpec {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  maxOpacity: number;
}

function buildDust(count: number): DustSpec[] {
  const specs: DustSpec[] = [];
  for (let i = 0; i < count; i++) {
    const seed = i * 137.51;
    const rand = (offset: number) =>
      ((Math.sin(seed + offset) + 1) / 2) as number;

    specs.push({
      left: rand(1) * 100,
      top: rand(2) * 100,
      size: 2 + rand(3) * 4,
      duration: 5 + rand(4) * 7,
      delay: rand(5) * -10,
      driftX: (rand(6) - 0.5) * 80,
      maxOpacity: 0.35 + rand(7) * 0.45,
    });
  }
  return specs;
}

export const Scroll3DLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameFloat, setFrameFloat] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const dust = useMemo(() => buildDust(30), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    if (media.matches) return;

    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let ticking = false;

    const updateProgress = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      setFrameFloat(progress * (FRAMES.length - 1));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentIndex = Math.min(FRAMES.length - 1, Math.floor(frameFloat));
  const nextIndex = Math.min(FRAMES.length - 1, currentIndex + 1);
  const blend = frameFloat - currentIndex;
  const globalProgress = frameFloat / (FRAMES.length - 1);
  const scale = 0.9 + globalProgress * 0.18;
  const captionOpacity = Math.max(0, (globalProgress - 0.6) / 0.4);
  const badgeOpacity = Math.min(1, globalProgress / 0.15 + 0.3);

  if (reducedMotion) {
    return (
      <section
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "96px 0",
          textAlign: "center",
        }}
      >
        <img
          src={FRAMES[FRAMES.length - 1]}
          alt="KINGSLITYC — emblema 3D"
          style={{ maxWidth: "420px", width: "80%", height: "auto" }}
        />
        <p
          style={{
            color: "var(--text-body)",
            marginTop: "24px",
            fontSize: "16px",
          }}
        >
          Engenharia de precisão, do software ao hardware.
        </p>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: "240vh",
        position: "relative",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Vertical energy conduit — ties this section to the sections above/below */}
        <div className="scroll3d-beam" />

        {/* Ambient drifting dust — same green particles as the render, filling the negative space */}
        {dust.map((d, i) => (
          <div
            key={i}
            className="dust-particle"
            style={
              {
                left: `${d.left}%`,
                top: `${d.top}%`,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animationDuration: `${d.duration}s`,
                animationDelay: `${d.delay}s`,
                "--dust-drift-x": `${d.driftX}px`,
                "--dust-max-opacity": d.maxOpacity,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Brand connector — visible from the start of the section, not just at the end */}
        <div
          className="badge"
          style={{
            position: "absolute",
            top: "56px",
            opacity: badgeOpacity,
            transition: "opacity 0.3s ease",
          }}
        >
          <span className="glow-dot"></span>
          <span>A ENERGIA POR TRÁS DA KINGSLITYC</span>
        </div>

        <div
          style={{
            position: "relative",
            width: "min(64vh, 520px)",
            height: "min(64vh, 520px)",
          }}
        >
          <div
            className="scroll3d-aura"
            style={{ width: "140%", height: "140%" }}
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transform: `scale(${scale})`,
            }}
          >
            <img
              src={FRAMES[currentIndex]}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 60px rgba(107, 175, 69, 0.35))",
              }}
            />
            <img
              src={FRAMES[nextIndex]}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: blend,
                filter: "drop-shadow(0 30px 60px rgba(107, 175, 69, 0.35))",
              }}
            />
          </div>
        </div>

        <p
          style={{
            marginTop: "28px",
            fontSize: "15px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--accent-sapphire)",
            fontWeight: 700,
            opacity: captionOpacity,
            transform: `translate3d(0, ${(1 - captionOpacity) * 12}px, 0)`,
          }}
        >
          Precisão de Engenharia, Renderizada em Cada Detalhe
        </p>
      </div>
    </div>
  );
};
