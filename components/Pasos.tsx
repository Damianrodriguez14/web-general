import Image from "next/image";
import { ArrowLeft, CheckCheck, Copy, Sparkles } from "lucide-react";
import { sitio } from "@/content/sitio";
import { Icono } from "./Iconos";

/** "Cómo funciona": tres tarjetas iguales, cada una con una imagen del paso hecha en HTML. */

const fondos = ["bg-durazno", "bg-salvia", "bg-arena"];
const hora = "ml-2 inline-flex translate-y-0.5 items-center gap-0.5 align-bottom text-[0.6875rem] text-tinta/70 tabular-nums";

function Tildes() {
  return <CheckCheck className="size-3.5 text-[#3b9fd6]" />;
}

function Chat({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-medio bg-[#efe7dc] shadow-suave ring-1 ring-tinta/5">
      <div className="flex items-center gap-2.5 bg-[#0f5d4c] px-3 py-2.5 text-blanco">
        <ArrowLeft className="size-4 opacity-80" />
        <span className="grid size-8 place-items-center rounded-full bg-durazno font-display text-[0.9375rem] font-semibold text-tinta">
          {sitio.nombre.charAt(0)}
        </span>
        <span className="leading-tight">
          <span className="block text-[0.875rem] font-semibold">{sitio.nombre}</span>
          <span className="block text-[0.6875rem] opacity-80">en línea</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 p-3">
        <span className="mb-1 self-center rounded-md bg-blanco/85 px-2 py-0.5 text-[0.6875rem] font-medium text-gris shadow-suave">Hoy</span>
        {children}
      </div>
    </div>
  );
}

function PasoCharla() {
  const c = sitio.pasos.chat;
  return (
    <Chat>
      <span className="entra max-w-[85%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-2.5 py-1.5 text-[0.875rem] leading-snug shadow-suave" style={{ "--i": 0 } as React.CSSProperties}>
        {c.cliente}
        <span className={hora}>
          10:41 <Tildes />
        </span>
      </span>
      <span className="entra max-w-[85%] self-start rounded-xl rounded-tl-sm bg-blanco px-2.5 py-1.5 text-[0.875rem] leading-snug shadow-suave" style={{ "--i": 1 } as React.CSSProperties}>
        {c.yo}
        <span className={hora}>10:42</span>
      </span>
    </Chat>
  );
}

function PasoFotos() {
  const fotos = ["/fotos/unas-6.jpg", "/fotos/unas-3.jpg", "/fotos/unas-5.jpg"];
  return (
    <Chat>
      <div className="w-[80%] self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] p-1 shadow-suave">
        <div className="grid grid-cols-3 gap-1">
          {fotos.map((src, i) => (
            <div key={src} className="entra relative aspect-square overflow-hidden rounded-lg" style={{ "--i": i } as React.CSSProperties}>
              <Image src={src} alt="" fill sizes="90px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <span className="entra self-end rounded-xl rounded-tr-sm bg-[#d9fdd3] px-2.5 py-1.5 text-[0.875rem] leading-snug shadow-suave" style={{ "--i": 3 } as React.CSSProperties}>
        {sitio.pasos.preciosChat.map(([n, p]) => (
          <span key={n} className="block">
            {n} <span className="font-semibold tabular-nums">{p}</span>
          </span>
        ))}
        <span className={`${hora} float-right ml-3`}>
          10:58 <Tildes />
        </span>
      </span>
    </Chat>
  );
}

function PasoLink() {
  return (
    <div className="relative flex h-full items-end justify-center overflow-hidden rounded-medio bg-blanco/55 ring-1 ring-tinta/5">
      <div className="entra relative h-[88%] w-[42%] max-w-[8.5rem] overflow-hidden rounded-t-[1.1rem] border-[5px] border-b-0 border-oscuro bg-crema-2 shadow-tarjeta" style={{ "--i": 0 } as React.CSSProperties}>
        <Image src="/ejemplo-uñas.jpg" alt="" fill sizes="140px" className="object-cover object-top" />
      </div>
      <span
        className="entra entra-pop absolute top-[38%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-blanco py-1.5 pr-2 pl-3.5 text-[0.875rem] font-semibold whitespace-nowrap shadow-tarjeta ring-1 ring-tinta/10"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        {sitio.pasos.link}
        <span className="grid size-6 place-items-center rounded-full bg-crema-2">
          <Copy className="size-3.5" />
        </span>
      </span>
      <span
        className="entra entra-pop absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-oscuro px-3 py-1 text-[0.875rem] font-semibold text-crema shadow-suave"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        {sitio.pasos.lista}
        <Sparkles className="size-3.5 text-durazno" />
      </span>
    </div>
  );
}

const imagenes = [PasoCharla, PasoFotos, PasoLink];

export function Pasos() {
  return (
    <ol className="grid gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr]" data-aparece>
      {sitio.pasos.items.map((p, i) => {
        const Ilustracion = imagenes[i];
        return [
          i > 0 && <Conector key={`c${i}`} />,
          <li key={p.titulo} className={`flex flex-col rounded-tarjeta p-3 shadow-suave ring-1 ring-tinta/5 md:p-4 ${fondos[i]}`}>
            <div className="h-[15rem] md:h-[16rem]" aria-hidden="true">
              <Ilustracion />
            </div>
            <div className="flex flex-1 flex-col px-2.5 pt-6 pb-3 md:px-3">
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-full bg-blanco font-display text-[1.75rem] font-semibold shadow-suave">{i + 1}</span>
                <Icono nombre={p.icono} className="size-6 text-tinta/60" />
              </div>
              <h3 className="mt-4 text-[1.5rem] leading-[1.15] md:text-[1.625rem]">{p.titulo}</h3>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-tinta/75">{p.texto}</p>
            </div>
          </li>,
        ];
      })}
    </ol>
  );
}

/** Flechita marcada entre pasos (baja en celu, va al costado en compu) */
function Conector() {
  return (
    <li className="flex items-center justify-center py-3 lg:px-3 lg:py-0" aria-hidden="true">
      <span className="grid size-11 place-items-center rounded-full bg-blanco text-terracota shadow-suave ring-1 ring-tinta/5">
        <svg viewBox="0 0 24 24" className="size-5 rotate-90 lg:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </li>
  );
}
