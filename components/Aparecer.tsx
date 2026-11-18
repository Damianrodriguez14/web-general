"use client";

import { useEffect } from "react";

/** Hace aparecer suave cada bloque marcado con data-aparece cuando entra en pantalla. */
export function Aparecer() {
  useEffect(() => {
    (window as unknown as { __aparece?: boolean }).__aparece = true;
    const bloques = document.querySelectorAll<HTMLElement>("[data-aparece]");
    if (!("IntersectionObserver" in window)) {
      bloques.forEach((b) => b.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    bloques.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);
  return null;
}
