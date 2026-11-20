"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { botonWa } from "@/lib/estilos";
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
    document.documentElement.classList.toggle("menu-abierto", abierto);
    if (!abierto) return;
    const alTecla = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    const alAgrandar = () => window.innerWidth >= 768 && setAbierto(false);
    window.addEventListener("keydown", alTecla);
    window.addEventListener("resize", alAgrandar);
    return () => {
      window.removeEventListener("keydown", alTecla);
      window.removeEventListener("resize", alAgrandar);
      document.documentElement.classList.remove("menu-abierto");
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        abierto
          ? "border-tinta/10 bg-crema"
          : bajo
            ? "border-tinta/10 bg-crema/80 backdrop-blur-md backdrop-saturate-150"
            : "border-transparent bg-crema/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[75rem] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <a href="#inicio" onClick={cerrar} className="inline-flex min-h-12 items-baseline gap-1 font-display text-[1.625rem] leading-none font-medium tracking-tight md:text-[1.75rem]">
          {sitio.nombre}
          <span className="size-2 translate-y-[-0.05em] rounded-full bg-terracota" aria-hidden="true" />
        </a>

        <nav aria-label="Secciones" className="hidden items-center gap-8 md:flex">
          {sitio.menu.map((l) => (
            <a key={l.href} href={l.href} className="link-menu inline-flex min-h-12 items-center text-base font-medium text-tinta/85 transition-colors hover:text-tinta">
              {l.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full bg-wa px-3 text-base sm:px-4 font-semibold text-tinta shadow-boton transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-wa-hover active:translate-y-0 md:min-h-[3.25rem] md:px-6 md:text-[1.0625rem]"
          >
            <IconoWhatsapp className="size-5" />
            <span className="sr-only sm:not-sr-only">WhatsApp</span>
          </a>
          <button
            type="button"
            className="-mr-1.5 inline-grid size-12 place-items-center rounded-full transition-colors hover:bg-tinta/5 active:bg-tinta/10 md:hidden"
            aria-expanded={abierto}
            aria-controls="menu-celu"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="menu-celu"
        inert={!abierto}
        className={`fixed inset-x-0 top-16 bottom-0 flex flex-col bg-crema px-5 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-[opacity,transform,visibility] duration-300 ease-(--ease-salida) md:hidden ${
          abierto ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Secciones">
          <ul>
            {sitio.menu.map((l) => (
              <li key={l.href} className="border-b border-tinta/10">
                <a
                  href={l.href}
                  onClick={cerrar}
                  className="flex min-h-[4.25rem] items-center justify-between font-display text-[2.25rem] leading-none font-medium tracking-tight"
                >
                  {l.texto}
                  <ArrowRight className="size-6 text-terracota" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <p className="mb-3 text-gris">{sitio.lugar}</p>
          <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" onClick={cerrar} className={`${botonWa} w-full`}>
            <IconoWhatsapp className="size-5" />
            {sitio.inicio.botonWhatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
