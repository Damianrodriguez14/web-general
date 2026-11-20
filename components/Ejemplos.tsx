"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { sitio } from "@/content/sitio";
import { botonOscuro } from "@/lib/estilos";
import { Celular, Compu } from "./Celular";

type Captura = { src: string; tipo: "celu" | "compu"; alt: string; pie: string; existe: boolean };

export function Ejemplos({ capturas }: { capturas: Captura[] }) {
  const e = sitio.ejemplos;
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [actual, setActual] = useState(0);
  const [puntos, setPuntos] = useState<number[]>([]);
  const [grande, setGrande] = useState<Captura | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);

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

  const abrir = (c: Captura) => {
    if (grande === c) dialogo.current?.showModal();
    else setGrande(c);
  };
  useEffect(() => {
    if (grande && !dialogo.current?.open) dialogo.current?.showModal();
  }, [grande]);
  const cerrar = () => dialogo.current?.close();

  const flecha =
    "grid size-12 place-items-center rounded-full border border-tinta/15 bg-blanco text-tinta shadow-suave transition-[opacity,transform,background-color] hover:-translate-y-0.5 hover:bg-crema-2 disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      {/* Rubros */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-oscuro px-4 text-base md:px-5 font-semibold text-crema md:px-6 md:text-[1.0625rem]">
          <span className="size-2 rounded-full bg-terracota" aria-hidden="true" />
          {e.pestanas[0].nombre}
        </span>
        {e.pestanas
          .filter((p) => !p.disponible)
          .map((p) => (
            <span key={p.nombre} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-dashed border-tinta/20 pr-2 pl-4 text-base font-medium whitespace-nowrap text-gris md:pr-2.5 md:pl-5 md:text-[1.0625rem]" aria-disabled="true">
              {p.nombre}
              <span className="rounded-full bg-blanco px-2.5 py-1 text-base leading-tight font-medium text-gris">{e.muyPronto}</span>
            </span>
          ))}
      </div>

      <div className="mt-8 md:mt-10">
        <div className="-mx-5 overflow-hidden px-5 py-6 md:mx-0 md:px-1" ref={emblaRef}>
          <ul className="flex touch-pan-y items-end gap-5 md:gap-8">
            {capturas.map((c, i) => (
              <li
                key={c.src}
                className={`min-w-0 shrink-0 ${c.tipo === "compu" ? "basis-[92%] sm:basis-[70%] lg:basis-[56%]" : "basis-[64%] sm:basis-[40%] lg:basis-[19.5%]"}`}
              >
                <figure>
                  <button
                    type="button"
                    onClick={() => abrir(c)}
                    disabled={!c.existe}
                    className="group relative block w-full cursor-zoom-in rounded-[2.5rem] text-left transition-transform duration-300 hover:-translate-y-1"
                    aria-label={`${e.verGrande}: ${c.pie}`}
                  >
                    {c.tipo === "compu" ? (
                      <Compu src={c.existe ? c.src : null} alt={c.alt} />
                    ) : (
                      <Celular src={c.existe ? c.src : null} alt={c.alt} sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 64vw" className="max-w-[16rem]" />
                    )}
                    <span
                      className={`absolute grid size-11 place-items-center rounded-full bg-blanco/95 text-tinta shadow-suave transition-transform group-hover:scale-110 ${
                        c.tipo === "compu" ? "top-3 right-3" : "top-4 right-4"
                      }`}
                      aria-hidden="true"
                    >
                      <Maximize2 className="size-[1.1rem]" />
                    </span>
                  </button>
                  <figcaption className="mt-4 text-center text-base font-medium md:text-[1.0625rem]">
                    <span className="sr-only">{`${i + 1} de ${capturas.length}: `}</span>
                    {c.pie}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-hidden="true">
            {puntos.map((_, i) => (
              <span key={i} className={`h-2 rounded-full transition-[width,background-color] duration-300 ${i === actual ? "w-7 bg-terracota" : "w-2 bg-tinta/20"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Anterior" onClick={() => embla?.scrollPrev()} disabled={actual === 0} className={flecha}>
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" aria-label="Siguiente" onClick={() => embla?.scrollNext()} disabled={puntos.length === 0 || actual === puntos.length - 1} className={flecha}>
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <a href={e.link} target="_blank" rel="noopener noreferrer" className={`${botonOscuro} mt-10 w-full sm:w-auto`}>
          {e.linkTexto}
          <ArrowUpRight className="size-5" />
        </a>
      </div>

      {/* Foto en grande */}
      <dialog
        ref={dialogo}
        aria-label={grande?.pie}
        onClick={(ev) => ev.target === ev.currentTarget && cerrar()}
        className="panel m-auto max-h-[92svh] w-auto max-w-[94vw] overflow-visible bg-transparent p-0"
      >
        {grande && (
          <div className="relative">
            <Image
              src={grande.src}
              alt={grande.alt}
              width={grande.tipo === "compu" ? 1440 : 780}
              height={grande.tipo === "compu" ? 900 : 1688}
              sizes="94vw"
              className={`h-auto max-w-full rounded-[1.25rem] shadow-alta ${grande.tipo === "compu" ? "max-h-[86svh] w-[min(94vw,72rem)] object-contain" : "max-h-[86svh] w-auto"}`}
            />
            <button
              type="button"
              onClick={cerrar}
              aria-label="Cerrar"
              autoFocus
              className="absolute -top-3 -right-3 grid size-12 place-items-center rounded-full bg-blanco text-tinta shadow-tarjeta transition-transform hover:scale-105 md:-top-4 md:-right-4"
            >
              <X className="size-6" />
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
