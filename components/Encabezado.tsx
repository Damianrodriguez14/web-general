"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { IconoWhatsapp } from "./Iconos";

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [bajo, setBajo] = useState(false);

  useEffect(() => {
    const alScroll = () => setBajo(window.scrollY > 8);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alTecla = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alTecla);
    return () => window.removeEventListener("keydown", alTecla);
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        bajo || abierto ? "bg-crema-2" : "bg-crema"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <a href="#inicio" className="inline-flex min-h-12 items-center font-display text-[1.6rem] leading-none font-medium tracking-tight" onClick={() => setAbierto(false)}>
          {sitio.nombre}
        </a>

        <nav aria-label="Secciones" className="hidden items-center gap-8 md:flex">
          {sitio.menu.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-medium text-tinta/80 transition-colors hover:text-terracota-osc">
              {l.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-wa px-4 text-base font-semibold text-tinta transition-[background-color,transform] hover:bg-wa-hover active:scale-[0.97] md:min-h-14 md:gap-2.5 md:px-6 md:text-[1.0625rem]"
          >
            <IconoWhatsapp className="size-5 md:size-6" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            className="inline-grid size-12 place-items-center rounded-full transition-colors hover:bg-tinta/5 active:bg-tinta/10 md:hidden"
            aria-expanded={abierto}
            aria-controls="menu-celu"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-celu"
        aria-label="Secciones"
        className={`grid overflow-hidden bg-crema-2 transition-[grid-template-rows,visibility] duration-400 ease-(--ease-salida) md:hidden ${
          abierto ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
        inert={!abierto}
      >
        <ul className="min-h-0 px-5">
          {sitio.menu.map((l, i) => (
            <li key={l.href} className={i === sitio.menu.length - 1 ? "pb-6" : ""}>
              <a
                href={l.href}
                onClick={() => setAbierto(false)}
                className="flex min-h-14 items-center font-display text-[1.75rem] leading-none font-medium"
              >
                {l.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
