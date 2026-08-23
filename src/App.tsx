import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { setLenisInstance } from "./utils/lenisInstance";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { HomePage } from "./pages/HomePage";
import { SistemasPage } from "./pages/SistemasPage";
import { ProtheusPage } from "./pages/ProtheusPage";
import { HardwarePage } from "./pages/HardwarePage";
import { ContatoPage } from "./pages/ContatoPage";
import "./styles/theme.css";

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t: number) => 1 - Math.pow(1 - t, 2.2),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });
    setLenisInstance(lenis);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <Loader />

        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sistemas" element={<SistemasPage />} />
            <Route path="/protheus" element={<ProtheusPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

