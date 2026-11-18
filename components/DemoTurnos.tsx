"use client";

import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { IconoWhatsapp } from "./Iconos";

/** Una prueba chiquita de cómo reserva una clienta. No reserva nada de verdad. */
export function DemoTurnos() {
  const d = sitio.demoTurnos;
  const [dia, setDia] = useState<string | null>(null);
  const [hora, setHora] = useState<string | null>(null);
  const [listo, setListo] = useState(false);

  const chip = (activo: boolean) =>
    `min-h-12 rounded-2xl px-2 text-base font-semibold md:min-h-14 md:text-[1.0625rem] transition-[background-color,color,transform] active:scale-[0.96] ${
      activo ? "bg-tinta text-crema" : "bg-crema-2 text-tinta hover:bg-[#e9e0d3]"
    }`;

  return (
    <div className="rounded-[1.75rem] bg-crema p-5 text-tinta md:p-7">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-[1.375rem] leading-tight font-medium text-balance md:text-[1.625rem]">{d.titulo}</p>
      </div>
      <p className="mt-1 text-base text-gris md:text-[1.0625rem]">{d.aclaracion}</p>

      <div aria-live="polite" className="mt-5">
        {listo ? (
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-crema-2 p-5">
            <CalendarCheck className="size-8 text-terracota-osc" aria-hidden="true" />
            <div>
              <p className="text-[1.125rem] font-semibold">{d.listo}</p>
              <p className="mt-1 text-base">
                {d.turno}: {dia} · {hora} hs
              </p>
              <p className="mt-2 text-base text-gris">{d.listoDetalle}</p>
            </div>
            <a
              href={linkWhatsapp(d.mensajeQuiero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-wa px-5 text-[1.0625rem] font-semibold text-tinta transition-[background-color,transform] hover:bg-wa-hover active:scale-[0.98]"
            >
              <IconoWhatsapp className="size-5" />
              {d.quiero}
            </a>
            <button
              type="button"
              onClick={() => {
                setListo(false);
                setDia(null);
                setHora(null);
              }}
              className="-mt-2 min-h-12 self-center text-base font-semibold text-terracota-osc underline underline-offset-4"
            >
              {d.otraVez}
            </button>
          </div>
        ) : (
          <>
            <p className="text-[1.0625rem] font-semibold md:text-[1.125rem]">{d.servicio}</p>
            <p className="text-base text-gris md:text-[1.0625rem]">{!dia ? d.pasoDia : !hora ? d.pasoHora : d.pasoListo}</p>
            <fieldset className="mt-3">
              <legend className="sr-only">Día</legend>
              <div className="grid grid-cols-3 gap-2">
                {d.dias.map((x) => (
                  <button key={x} type="button" aria-pressed={dia === x} onClick={() => setDia(x)} className={chip(dia === x)}>
                    {x}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-2">
              <legend className="sr-only">Horario</legend>
              <div className="grid grid-cols-4 gap-2">
                {d.horarios.map((x) => (
                  <button
                    key={x}
                    type="button"
                    aria-pressed={hora === x}
                    disabled={!dia}
                    onClick={() => setHora(x)}
                    className={`${chip(hora === x)} disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100`}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              disabled={!dia || !hora}
              onClick={() => setListo(true)}
              className="mt-4 flex min-h-14 w-full items-center justify-center rounded-full bg-terracota px-5 text-[1.0625rem] font-semibold text-tinta transition-[background-color,color,transform] hover:bg-[#b5653f] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-crema-2 disabled:text-gris disabled:active:scale-100"
            >
              {d.boton} · {d.sena}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
