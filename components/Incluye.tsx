import Image from "next/image";
import { MapPin, Mic, Search, Star, X } from "lucide-react";
import { sitio } from "@/content/sitio";
import { Icono, IconoWhatsapp } from "./Iconos";

/**
 * "Qué vas a tener" en grilla bento: dos tarjetas grandes y seis chicas,
 * cada una con una ilustración chiquita pero real (nombres, precios, fotos).
 */

type Item = (typeof sitio.incluye.items)[number];

const pantalla = "rounded-medio bg-blanco shadow-suave ring-1 ring-tinta/5";

function Galeria() {
  const chicas = ["/fotos/unas-2.jpg", "/fotos/unas-3.jpg", "/fotos/unas-4.jpg", "/fotos/unas-5.jpg"];
  return (
    <div className="grid h-full min-h-[14rem] grid-cols-[1.35fr_1fr_1fr] grid-rows-2 gap-2 md:min-h-[17rem]">
      <div className="crece relative row-span-2 overflow-hidden rounded-medio shadow-alta ring-4 ring-blanco">
        <Image src="/fotos/unas-1.jpg" alt="" fill sizes="(min-width: 1024px) 260px, 40vw" className="object-cover" />
        <span className="absolute top-2 right-2 grid size-7 place-items-center rounded-full bg-blanco/90 text-tinta shadow-suave">
          <X className="size-3.5" />
        </span>
        <span className="absolute bottom-2 left-2 rounded-full bg-oscuro/75 px-2 py-0.5 text-[0.75rem] font-medium text-crema">1 / 5</span>
      </div>
      {chicas.map((src) => (
        <div key={src} className="relative overflow-hidden rounded-chico ring-1 ring-tinta/5">
          <Image src={src} alt="" fill sizes="(min-width: 1024px) 140px, 25vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

function Negocio() {
  return (
    <div className={`${pantalla} p-3`}>
      <p className="font-display text-[1.0625rem] leading-tight font-semibold">Studio Mía</p>
      <p className="text-[0.75rem] text-gris">Uñas y diseño · Avellaneda</p>
      <div className="mt-2.5 flex flex-wrap gap-1">
        {["Semi", "Kapping", "Nail art"].map((s) => (
          <span key={s} className="rounded-full bg-durazno px-2 py-0.5 text-[0.75rem] font-medium">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Precios() {
  const filas = [
    ["Semi", "$12.000"],
    ["Kapping", "$18.500"],
    ["Esculpidas", "$22.000"],
  ];
  return (
    <div className={`${pantalla} -mx-1.5 grid gap-1.5 px-2.5 py-2.5 md:mx-0 md:px-3`}>
      {filas.map(([n, p]) => (
        <div key={n} className="flex items-baseline justify-between gap-1 text-[0.75rem] md:gap-1.5 md:text-[0.8125rem]">
          <span className="font-medium">{n}</span>
          <span className="hidden min-w-1 flex-1 border-b border-dotted border-tinta/30 sm:block" />
          <span className="font-semibold tabular-nums">{p}</span>
        </div>
      ))}
    </div>
  );
}

function Mapa() {
  return (
    <div className="relative h-[6.5rem] overflow-hidden rounded-medio bg-[#f4efe6] ring-1 ring-tinta/5 md:h-[7.5rem]">
      <svg viewBox="0 0 200 110" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
        <rect x="14" y="8" width="44" height="26" rx="4" fill="#dde5d6" />
        <rect x="140" y="64" width="50" height="36" rx="4" fill="#dde5d6" />
        <path d="M-5 78 L210 60" stroke="#fffdf9" strokeWidth="11" />
        <path d="M78 -5 L92 120" stroke="#fffdf9" strokeWidth="9" />
        <path d="M150 -5 L140 120" stroke="#fffdf9" strokeWidth="7" />
        <path d="M-5 40 L210 46" stroke="#fffdf9" strokeWidth="6" />
        <text x="40" y="88" fontSize="8.5" fill="#6b625b" fontFamily="var(--font-inter)" transform="rotate(-4.8 40 88)">Av. Mitre</text>
        <text x="96" y="14" fontSize="7.5" fill="#6b625b" fontFamily="var(--font-inter)" transform="rotate(83 96 14)">Belgrano</text>
        <text x="112" y="40" fontSize="7.5" fill="#6b625b" fontFamily="var(--font-inter)">Alsina</text>
      </svg>
      <div className="rebota absolute top-[6%] left-[30%] flex -translate-x-1/2 flex-col items-center">
        <span className="rounded-full bg-oscuro px-2 py-0.5 text-[0.75rem] font-semibold whitespace-nowrap text-crema shadow-suave">Tu local</span>
        <MapPin className="-mt-0.5 size-7 fill-terracota text-blanco drop-shadow-[0_3px_4px_rgb(110_64_36/0.35)]" />
      </div>
    </div>
  );
}

function Whatsapp() {
  return (
    <div className="flex flex-col gap-2">
      <span className="max-w-[95%] self-start rounded-2xl rounded-tl-md bg-blanco px-2.5 py-1.5 text-[0.8125rem] leading-snug shadow-suave">
        hola! hay turno el sábado?
      </span>
      <span className="rebota inline-flex items-center gap-1.5 self-end rounded-full bg-wa px-3 py-1.5 text-[0.8125rem] font-semibold text-tinta shadow-boton">
        <IconoWhatsapp className="size-3.5" />
        Escribime
      </span>
    </div>
  );
}

function Google() {
  return (
    <div className={`${pantalla} p-3 md:p-4`}>
      <div className="flex items-center gap-2 rounded-full border border-tinta/10 bg-blanco px-3 py-1.5 shadow-suave">
        <Search className="size-4 text-gris" />
        <span className="escribe flex-1 text-[0.875rem]">uñas avellaneda</span>
        <Mic className="size-4 text-gris" />
      </div>
      <div className="mt-3 px-1">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-durazno font-display text-[0.75rem] font-semibold">S</span>
          <span className="leading-tight">
            <span className="block text-[0.8125rem] font-medium">Studio Mía</span>
            <span className="block text-[0.75rem] text-[#1e7a3c]">studiomia.com.ar › turnos</span>
          </span>
        </div>
        <p className="mt-1.5 text-[1rem] leading-snug font-medium text-[#1a3fb0] underline-offset-2 group-hover:underline">
          Studio Mía · Uñas y diseño en Avellaneda
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[0.75rem] text-gris">
          <span className="font-semibold text-tinta">4,9</span>
          <span className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-3 fill-[#e7a640] text-[#e7a640]" />
            ))}
          </span>
          · Manicura
        </p>
        <p className="mt-1 text-[0.8125rem] leading-snug text-tinta/75">
          Semi, kapping y esculpidas. Mirá los precios y reservá tu turno por WhatsApp.
        </p>
      </div>
    </div>
  );
}

function Celu() {
  return (
    <div className="flex justify-center">
      <div className="crece relative h-[10rem] w-[5.5rem] overflow-hidden rounded-t-[1rem] border-[4px] border-b-0 border-oscuro bg-blanco md:h-[11rem] md:w-[6rem]">
        <Image src="/ejemplo-uñas.jpg" alt="" fill sizes="80px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Editar() {
  return (
    <div className={`${pantalla} px-3 py-2.5`}>
      <p className="text-[0.75rem] text-gris">Semi</p>
      <p className="text-[0.8125rem] text-gris line-through decoration-terracota decoration-2">$12.000</p>
      <p className="mt-0.5 flex items-center text-[1rem] font-semibold tabular-nums">
        <span className="escribe">$13.500</span>
        <span className="cursor ml-0.5 inline-block h-4 w-[2px] bg-terracota" />
      </p>
    </div>
  );
}

const tarjetas: Record<string, { fondo: string; icono: string; grande?: string; Ilus: () => React.JSX.Element }> = {
  galeria: { fondo: "bg-arena", icono: "bg-blanco", grande: "col-span-2 lg:row-span-2", Ilus: Galeria },
  negocio: { fondo: "bg-blanco", icono: "bg-durazno", Ilus: Negocio },
  precios: { fondo: "bg-durazno", icono: "bg-blanco", Ilus: Precios },
  mapa: { fondo: "bg-salvia", icono: "bg-blanco", Ilus: Mapa },
  whatsapp: { fondo: "bg-crema-2", icono: "bg-blanco", Ilus: Whatsapp },
  google: { fondo: "bg-durazno", icono: "bg-blanco", grande: "col-span-2", Ilus: Google },
  celu: { fondo: "bg-arena", icono: "bg-blanco", Ilus: Celu },
  editar: { fondo: "bg-salvia", icono: "bg-blanco", Ilus: Editar },
};

export function Incluye() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
      {sitio.incluye.items.map((x: Item) => {
        const t = tarjetas[x.icono];
        const grande = Boolean(t.grande);
        return (
          <li
            key={x.texto}
            className={`bento group flex flex-col rounded-tarjeta p-3.5 shadow-suave ring-1 ring-tinta/5 transition-[transform,box-shadow] duration-300 ease-(--ease-salida) hover:-translate-y-1 hover:shadow-tarjeta md:p-6 ${t.fondo} ${t.grande ?? ""}`}
          >
            <div className={grande ? "flex items-center gap-3.5" : ""}>
              <span className={`grid size-10 shrink-0 place-items-center rounded-chico md:size-12 ${t.icono}`}>
                <Icono nombre={x.icono} className="size-5 md:size-6" />
              </span>
              <p className={`text-[1.0625rem] leading-snug font-semibold md:text-[1.1875rem] ${grande ? "" : "mt-3 md:mt-4"}`}>{x.texto}</p>
            </div>
            <div className="mt-4 flex flex-1 flex-col md:mt-5" aria-hidden="true">
              <t.Ilus />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
