import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenisInstance } from "./lenisInstance";

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly, through Lenis so its internal position stays in sync
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }

    const observerCallback: IntersectionObserverCallback = (
      entries,
      observer,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.05,
      rootMargin: "50px 0px 50px 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale",
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
}
