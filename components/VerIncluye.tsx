"use client";

import { useRef } from "react";
import { Check, Clock, X } from "lucide-react";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { botonWa } from "@/lib/estilos";
import { Icono, IconoWhatsapp } from "./Iconos";

type Plan = (typeof sitio.precios.planes)[number];

/** Link "Ver qué incluye" que abre un panel: hoja desde abajo en celu, ventana al medio en compu. */
export function VerIncluye({ plan, oscuro }: { plan: Plan; oscuro?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const p = sitio.precios;
  const t = p.detalleTitulos;
  const id = `plan-${plan.nombre.replace(/\W+/g, "-").toLowerCase()}`;
  const cerrar = () => ref.current?.close();

  const subtitulo = "text-[0.9375rem] font-semibold tracking-wide text-terracota-osc uppercase";

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className={`inline-flex min-h-12 items-center gap-1.5 text-base font-semibold underline decoration-2 underline-offset-[0.3em] transition-colors md:text-[1.0625rem] ${
          oscuro ? "text-crema decoration-terracota hover:decoration-crema" : "text-tinta decoration-terracota hover:decoration-tinta"
        }`}
      >
        {p.verIncluye}
      </button>

      <dialog
        ref={ref}
        aria-labelledby={id}
        onClick={(e) => e.target === e.currentTarget && cerrar()}
        className="panel mx-0 mt-auto mb-0 max-h-[90svh] w-full max-w-none overflow-y-auto overscroll-contain rounded-t-[1.75rem] bg-blanco p-0 text-tinta shadow-alta md:m-auto md:max-h-[88svh] md:max-w-[38rem] md:rounded-[1.75rem]"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-blanco/95 px-6 pt-3 pb-4 backdrop-blur md:px-8 md:pt-7">
          <div className="w-full">
            <span className="mx-auto mb-4 block h-1.5 w-12 rounded-full bg-tinta/15 md:hidden" aria-hidden="true" />
            <p className="text-base text-gris">
              {plan.unaVez} {p.unaVezTexto} + {plan.porMes} {p.porMesTexto}
            </p>
            <h3 id={id} className="font-display text-[2rem] leading-tight md:text-[2.5rem]">
              {plan.nombre}
            </h3>
          </div>
          <button type="button" onClick={cerrar} aria-label="Cerrar" className="mt-6 grid size-12 shrink-0 place-items-center rounded-full bg-crema-2 transition-colors hover:bg-durazno md:mt-0">
            <X className="size-6" />
          </button>
        </div>

        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <p className={subtitulo}>{t.incluye}</p>
          <ul className="mt-3 grid gap-2.5">
            {plan.detalle.puntos.map((x, i) => (
              <li key={x.texto} className="flex items-center gap-3.5">
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${["bg-durazno", "bg-salvia", "bg-arena"][i % 3]}`}>
                  <Icono nombre={x.icono} className="size-5" />
                </span>
                <span className="text-[1.0625rem] leading-snug">{x.texto}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-3.5 rounded-2xl bg-crema p-4">
            <Clock className="size-6 shrink-0 text-terracota-osc" aria-hidden="true" />
            <p>
              <span className="block text-[0.9375rem] font-semibold">{t.tarda}</span>
              <span className="text-[1.0625rem]">{plan.detalle.tarda}</span>
            </p>
          </div>

          <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-6">
            {[
              { titulo: t.necesito, items: plan.detalle.necesito },
              { titulo: t.porMes, items: plan.detalle.porMes },
            ].map((g) => (
              <div key={g.titulo}>
                <p className={subtitulo}>{g.titulo}</p>
                <ul className="mt-3 grid gap-2">
                  {g.items.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[1.0625rem] leading-snug">
                      <Check className="mt-0.5 size-5 shrink-0 text-terracota" strokeWidth={2.5} aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href={linkWhatsapp(sitio.mensajePlan(plan.nombre))} target="_blank" rel="noopener noreferrer" className={`${botonWa} mt-8 w-full`}>
            <IconoWhatsapp className="size-5" />
            {p.boton}
          </a>
        </div>
      </dialog>
    </>
  );
}
