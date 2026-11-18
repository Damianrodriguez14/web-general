"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { Celular } from "./Celular";
import { IconoWhatsapp } from "./Iconos";

type Captura = { src: string; alt: string; pie: string; existe: boolean };

export function Ejemplos({ capturas }: { capturas: Captura[] }) {
  const { pestanas, muyPronto, muyProntoTexto } = sitio.ejemplos;
  const [activa, setActiva] = useState(0);
  const pestana = pestanas[activa];

  const [emblaRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [actual, setActual] = useState(0);
  const [puntos, setPuntos] = useState<number[]>([]);

  const alSeleccionar = useCallback(() => {
    if (!embla) return;
    setActual(embla.selectedScrollSnap());
    setPuntos(embla.scrollSnapList());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    const primero = requestAnimationFrame(alSeleccionar);
    embla.on("select", alSeleccionar).on("reInit", alSeleccionar);
    return () => {
      cancelAnimationFrame(primero);
      embla.off("select", alSeleccionar).off("reInit", alSeleccionar);
    };
  }, [embla, alSeleccionar]);

  const alTeclaPestana = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const sig = (i + (e.key === "ArrowRight" ? 1 : -1) + pestanas.length) % pestanas.length;
    setActiva(sig);
    document.getElementById(`pestana-${sig}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Rubros" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none]">
        {pestanas.map((p, i) => (
          <button
            key={p.nombre}
            id={`pestana-${i}`}
            role="tab"
            type="button"
            aria-selected={activa === i}
            aria-controls="panel-ejemplos"
            tabIndex={activa === i ? 0 : -1}
            onClick={() => setActiva(i)}
            onKeyDown={(e) => alTeclaPestana(e, i)}
            className={`inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full px-5 text-base font-semibold transition-colors md:min-h-14 md:px-6 md:text-[1.0625rem] ${
              activa === i ? "bg-tinta text-crema" : "bg-crema-2 text-tinta hover:bg-[#e9e0d3]"
            }`}
          >
            {p.nombre}
            {!p.disponible && (
              <span className={`rounded-full px-2.5 py-0.5 text-base leading-snug font-medium ${activa === i ? "bg-terracota text-tinta" : "bg-crema text-terracota-osc"}`}>
                {muyPronto}
              </span>
            )}
          </button>
        ))}
      </div>

      <div id="panel-ejemplos" role="tabpanel" aria-labelledby={`pestana-${activa}`} className="mt-8">
        {pestana.disponible ? (
          <>
            <p className="-mt-2 mb-4 text-base text-gris md:hidden">{sitio.ejemplos.deslizar}</p>
            <div className="-mx-5 -mb-8 overflow-hidden px-5 pb-8 md:mx-0 md:px-0" ref={emblaRef}>
              <ul className="flex touch-pan-y gap-4 md:gap-8">
                {capturas.map((c, i) => (
                  <li key={c.src} className="min-w-0 shrink-0 basis-[76%] sm:basis-[42%] md:basis-[calc((100%-4rem)/3)]">
                    <figure>
                      <Celular
                        src={c.existe ? c.src : null}
                        alt={c.alt}
                        sizes="(min-width: 1024px) 352px, (min-width: 640px) 42vw, 76vw"
                        className="max-w-[22rem]"
                      />
                      <figcaption className="mt-4 text-center text-base font-medium text-tinta md:mt-5 md:text-[1.125rem]">
                        <span className="sr-only">{`${i + 1} de ${capturas.length}: `}</span>
                        {c.pie}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 md:hidden">
              <div className="flex gap-2" aria-hidden="true">
                {puntos.map((_, i) => (
                  <span key={i} className={`h-2 rounded-full transition-[width,background-color] duration-300 ${i === actual ? "w-6 bg-tinta" : "w-2 bg-tinta/25"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={() => embla?.scrollPrev()}
                  disabled={actual === 0}
                  className="grid size-12 place-items-center rounded-full bg-crema-2 transition-opacity disabled:opacity-35"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={() => embla?.scrollNext()}
                  disabled={actual === puntos.length - 1}
                  className="grid size-12 place-items-center rounded-full bg-crema-2 transition-opacity disabled:opacity-35"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            <a
              href={pestana.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-tinta px-7 text-[1.0625rem] font-semibold text-crema transition-[background-color,transform] hover:bg-[#3a332e] active:scale-[0.98] sm:w-auto md:mx-auto md:flex md:w-fit"
            >
              {pestana.linkTexto}
              <ArrowUpRight className="size-5" />
            </a>
          </>
        ) : (
          <div className="rounded-[1.75rem] bg-crema-2 px-6 py-10 md:px-12 md:py-14">
            <p className="font-display text-[2rem] leading-tight font-medium text-balance md:text-[2.75rem]">
              {sitio.ejemplos.muyProntoTitulo}
            </p>
            <p className="mt-3 max-w-[44ch] text-[1.0625rem] leading-relaxed text-gris md:text-[1.25rem]">{muyProntoTexto}</p>
            <a
              href={linkWhatsapp(sitio.ejemplos.muyProntoMensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-14 items-center gap-2 rounded-full bg-wa px-6 text-[1.0625rem] font-semibold text-tinta transition-[background-color,transform] hover:bg-wa-hover active:scale-[0.98]"
            >
              <IconoWhatsapp className="size-5" />
              {sitio.ejemplos.muyProntoBoton}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
