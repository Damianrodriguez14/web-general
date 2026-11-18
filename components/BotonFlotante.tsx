"use client";

import { useEffect, useRef, useState } from "react";
import { linkWhatsapp } from "@/content/sitio";
import { IconoWhatsapp } from "./Iconos";

/**
 * Botón flotante de WhatsApp. Se corre de lugar (se esconde) solo mientras
 * pasa por encima de otro botón o link, para no taparlo.
 */
export function BotonFlotante() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tapa, setTapa] = useState(false);

  useEffect(() => {
    let cuadro = 0;
    let zona: DOMRect | null = null; // lugar del botón cuando está visible (escondido se achica y se corre)
    let escondido = false;
    const revisar = () => {
      cuadro = 0;
      const yo = ref.current;
      if (!yo) return;
      if (!escondido || !zona) zona = yo.getBoundingClientRect();
      const r = zona;
      const m = 8;
      const toca = Array.from(document.querySelectorAll<HTMLElement>("main a, main button, main summary, footer a")).some((el) => {
        const e = el.getBoundingClientRect();
        if (!e.width || !e.height) return false;
        return e.left < r.right + m && e.right > r.left - m && e.top < r.bottom + m && e.bottom > r.top - m;
      });
      escondido = toca;
      setTapa(toca);
    };
    const pedir = () => {
      if (!cuadro) cuadro = requestAnimationFrame(revisar);
    };
    const alCambiarTamano = () => {
      zona = null;
      escondido = false;
      pedir();
    };
    pedir();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", alCambiarTamano);
    document.addEventListener("toggle", pedir, true);
    return () => {
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", alCambiarTamano);
      document.removeEventListener("toggle", pedir, true);
      if (cuadro) cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp"
      tabIndex={tapa ? -1 : 0}
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-16 place-items-center rounded-full bg-wa text-tinta shadow-[0_10px_24px_-8px_rgb(31_27_24/0.5)] transition-[transform,opacity,background-color] duration-300 ease-(--ease-salida) hover:bg-wa-hover active:scale-95 md:right-6 md:bottom-6 ${
        tapa ? "pointer-events-none translate-y-6 scale-75 opacity-0" : "opacity-100"
      }`}
    >
      <IconoWhatsapp className="size-8" />
    </a>
  );
}
