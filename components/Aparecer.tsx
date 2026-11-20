"use client";

import { useEffect } from "react";

/**
 * Hace aparecer suave cada bloque marcado con data-aparece cuando entra en pantalla.
 * Además, en cada scroll muestra cualquier bloque que ya quedó arriba del borde de abajo,
 * así nunca queda nada invisible aunque se scrollee muy rápido.
 */
export function Aparecer() {
  useEffect(() => {
    (window as unknown as { __aparece?: boolean }).__aparece = true;
    let pendientes = Array.from(document.querySelectorAll<HTMLElement>("[data-aparece]"));
    const mostrar = (b: Element) => b.classList.add("visible");

    if (!("IntersectionObserver" in window)) {
      pendientes.forEach(mostrar);
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            mostrar(e.target);
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    pendientes.forEach((b) => obs.observe(b));

    const alScroll = () => {
      const limite = window.innerHeight;
      pendientes = pendientes.filter((b) => {
        if (b.getBoundingClientRect().top < limite) {
          mostrar(b);
          obs.unobserve(b);
          return false;
        }
        return true;
      });
      if (!pendientes.length) window.removeEventListener("scroll", alScroll);
    };
    window.addEventListener("scroll", alScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", alScroll);
    };
  }, []);
  return null;
}
