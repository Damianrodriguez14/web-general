import { cacheLife } from "next/cache";
import { ArrowUpRight, BriefcaseBusiness, Check, Images, MapPin, Pencil, Plus, Search, Smartphone, Tags } from "lucide-react";
import Image from "next/image";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";
import { Aparecer } from "@/components/Aparecer";
import { BotonFlotante } from "@/components/BotonFlotante";
import { Celular } from "@/components/Celular";
import { DemoTurnos } from "@/components/DemoTurnos";
import { Ejemplos } from "@/components/Ejemplos";
import { Encabezado } from "@/components/Encabezado";
import { IconoInstagram, IconoWhatsapp } from "@/components/Iconos";

const iconos = {
  negocio: BriefcaseBusiness,
  galeria: Images,
  precios: Tags,
  mapa: MapPin,
  whatsapp: IconoWhatsapp,
  celu: Smartphone,
  google: Search,
  editar: Pencil,
} as const;

/* Medidas compartidas: ancho de página, títulos, textos y botones */
const contenedor = "mx-auto w-full max-w-[80rem] px-5 md:px-10";
const tituloSeccion = "text-[2.5rem] leading-[1.02] tracking-[-0.025em] md:text-[3.5rem] lg:text-[4rem]";
const texto = "text-[1.0625rem] leading-relaxed md:text-[1.125rem]";
const textoGrande = "text-[1.0625rem] leading-relaxed md:text-[1.25rem]";
const boton = "min-h-14 px-7 text-[1.0625rem]";
const botonWa =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-wa font-semibold text-tinta transition-[background-color,transform] duration-200 hover:bg-wa-hover active:scale-[0.98]";

async function Anio() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Inicio() {
  const { inicio, problemas, ejemplos, pasos, incluye, precios, quienSoy, preguntas, contacto } = sitio;
  const hayCaptura = existeEnPublic(inicio.captura);
  const hayFoto = existeEnPublic(quienSoy.foto);
  const capturas = ejemplos.pestanas[0].capturas.map((c) => ({ ...c, existe: existeEnPublic(c.src) }));

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-tinta px-5 py-3 text-crema focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Ir al contenido
      </a>
      <Encabezado />
      <Aparecer />

      <main id="contenido">
        {/* 2. Inicio */}
        <section id="inicio" className="flex items-center pt-24 pb-20 md:pt-32 md:pb-28 lg:min-h-svh lg:pt-28 lg:pb-16">
          <div className={`${contenedor} grid items-center gap-14 lg:grid-cols-12 lg:gap-10`}>
            <div className="lg:col-span-7">
              <h1 className="text-[2.875rem] leading-[0.98] tracking-[-0.035em] sm:text-[4rem] lg:text-[5.5rem] xl:text-[6rem]">
                {inicio.titulo}
              </h1>
              <p className={`mt-6 max-w-[36ch] md:mt-8 ${textoGrande}`}>{inicio.subtitulo}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={`${botonWa} ${boton}`}>
                  <IconoWhatsapp className="size-5" />
                  {inicio.botonWhatsapp}
                </a>
                <a
                  href={sitio.linkEjemplo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-crema-2 font-semibold transition-[background-color,transform] duration-200 hover:bg-[#e9e0d3] active:scale-[0.98] ${boton}`}
                >
                  {inicio.botonEjemplo}
                  <ArrowUpRight className="size-5" />
                </a>
              </div>
            </div>

            <figure className="relative lg:col-span-5" data-aparece>
              <div className="relative mx-auto w-[min(18.5rem,76%)] pt-10 md:w-[20rem] lg:w-[min(20.5rem,88%)] lg:pt-8">
                <div aria-hidden="true" className="absolute inset-x-[-14%] top-0 bottom-[12%] rounded-t-full bg-terracota" />
                <Celular
                  src={hayCaptura ? inicio.captura : null}
                  alt={inicio.capturaAlt}
                  priority
                  obturador
                  sizes="(min-width: 1024px) 352px, (min-width: 768px) 320px, 76vw"
                />
              </div>
              <figcaption className="mt-4 text-center text-base text-gris md:text-[1.0625rem]">
                <a href={sitio.linkEjemplo} target="_blank" rel="noopener noreferrer" className="inline-block py-3 underline hover:text-tinta">
                  {inicio.pieCaptura}
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 3. ¿Te pasa esto? */}
        <section aria-labelledby="t-problemas" className="bg-terracota py-20 text-tinta md:py-32">
          <div className={contenedor}>
            <div data-aparece>
              <h2 id="t-problemas" className={tituloSeccion}>
                {problemas.titulo}
              </h2>
            </div>
            <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3" data-aparece>
              {problemas.items.map((p) => (
                <li key={p.texto} className="flex flex-col justify-between gap-8 rounded-[1.75rem] bg-crema p-6 md:p-8 lg:min-h-[18rem]">
                  <Burbujas mensajes={p.burbujas} />
                  <p className="font-display text-[1.5rem] leading-[1.15] font-medium text-balance md:text-[1.75rem]">{p.texto}</p>
                </li>
              ))}
            </ul>
            <div className="mt-16 grid items-center gap-10 md:mt-24 lg:grid-cols-12" data-aparece>
              <p className="font-display text-[2.25rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance md:text-[3.5rem] lg:col-span-6 lg:text-[4rem]">
                {problemas.cierre}
              </p>
              <div className="lg:col-span-5 lg:col-start-8">
                <DemoTurnos />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ejemplos */}
        <section id="ejemplos" aria-labelledby="t-ejemplos" className="py-20 md:py-32">
          <div className={contenedor}>
            <div data-aparece className="max-w-3xl">
              <h2 id="t-ejemplos" className={tituloSeccion}>
                {ejemplos.titulo}
              </h2>
              <p className={`mt-4 md:mt-5 ${textoGrande}`}>{ejemplos.bajada}</p>
            </div>
            <div className="mt-10 md:mt-12" data-aparece>
              <div>
                <Ejemplos capturas={capturas} />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cómo funciona */}
        <section aria-labelledby="t-pasos" className="bg-crema-2 py-20 md:py-32">
          <div className={contenedor}>
            <div data-aparece>
              <h2 id="t-pasos" className={tituloSeccion}>
                {pasos.titulo}
              </h2>
            </div>
            <ol className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-14" data-aparece>
              {pasos.items.map((p, i) => (
                <li key={p.titulo} className={`flex gap-5 md:gap-8 ${["", "lg:ml-[16.66%]", "lg:ml-[33.33%]"][i]}`}>
                  <span
                    aria-hidden="true"
                    className="w-9 shrink-0 font-display text-[3.5rem] leading-[0.85] font-medium text-terracota-osc tabular-nums md:w-16 md:text-[5.5rem]"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="max-w-[18ch] text-[1.75rem] leading-[1.1] md:text-[2.5rem] lg:text-[2.75rem]">
                      <span className="sr-only">{`${i + 1}. `}</span>
                      {p.titulo}
                    </h3>
                    <p className={`mt-2 text-gris ${texto}`}>{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div data-aparece className="mt-14 md:mt-16 lg:ml-[33.33%]">
              <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={`${botonWa} ${boton} w-full sm:w-auto`}>
                <IconoWhatsapp className="size-5" />
                {pasos.boton}
              </a>
            </div>
          </div>
        </section>

        {/* 6. Qué vas a tener */}
        <section aria-labelledby="t-incluye" className="bg-tinta py-20 text-crema md:py-32">
          <div className={`${contenedor} grid gap-12 lg:grid-cols-12 lg:gap-10`}>
            <div data-aparece className="lg:col-span-4">
              <h2 id="t-incluye" className={`${tituloSeccion} lg:sticky lg:top-32`}>
                {incluye.titulo}
              </h2>
            </div>
            <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2 md:gap-y-9 lg:col-span-8" data-aparece>
              {incluye.items.map((it) => {
                const Icono = iconos[it.icono as keyof typeof iconos];
                return (
                  <li key={it.texto} className="flex items-start gap-4">
                    <Icono className="mt-0.5 size-7 shrink-0 text-terracota md:size-8" aria-hidden="true" />
                    <span className="text-[1.125rem] leading-snug md:text-[1.375rem]">{it.texto}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 7. Precios */}
        <section id="precios" aria-labelledby="t-precios" className="py-20 md:py-32">
          <div className={contenedor}>
            <div data-aparece>
              <h2 id="t-precios" className={tituloSeccion}>
                {precios.titulo}
              </h2>
            </div>
            <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6" data-aparece>
              {precios.planes.map((plan) => (
                <li
                  key={plan.nombre}
                  className={`flex flex-col rounded-[1.75rem] p-6 md:p-10 ${plan.destacado ? "bg-tinta text-crema" : "bg-crema-2"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-[1.75rem] leading-tight md:text-[2.25rem]">{plan.nombre}</h3>
                    {plan.etiqueta && (
                      <span className="rounded-full bg-terracota px-3.5 py-1.5 text-base font-semibold text-tinta">{plan.etiqueta}</span>
                    )}
                  </div>
                  <p className="mt-6">
                    <span className="font-display text-[3rem] leading-none font-medium tracking-[-0.03em] tabular-nums md:text-[4rem]">
                      {plan.unaVez}
                    </span>
                    <span className="ml-2 text-[1.0625rem] md:text-[1.125rem]">{precios.unaVezTexto}</span>
                  </p>
                  <p className={`mt-2 text-[1.125rem] md:text-[1.25rem] ${plan.destacado ? "text-crema/80" : "text-gris"}`}>
                    + <span className="font-semibold tabular-nums">{plan.porMes}</span> {precios.porMesTexto}
                  </p>
                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {plan.incluye.map((x) => (
                      <li key={x} className={`flex items-start gap-3 leading-snug ${texto}`}>
                        <Check className={`mt-1 size-5 shrink-0 ${plan.destacado ? "text-terracota" : "text-terracota-osc"}`} aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  {plan.nota && (
                    <p className={`mt-6 rounded-2xl px-4 py-3 ${texto} ${plan.destacado ? "bg-[#2f2925] text-crema" : "bg-crema text-tinta"}`}>
                      {plan.nota}
                    </p>
                  )}
                  <a
                    href={linkWhatsapp(sitio.mensajePlan(plan.nombre))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${botonWa} ${boton} mt-8 w-full`}
                  >
                    <IconoWhatsapp className="size-5" />
                    {precios.boton}
                    <span className="sr-only">: {plan.nombre}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p data-aparece className="mt-8 max-w-[52ch] text-[1.125rem] leading-relaxed md:mt-10 md:text-[1.25rem]">
              <span>{precios.condiciones}</span>
            </p>
          </div>
        </section>

        {/* 8. Quién soy */}
        <section id="quien-soy" aria-labelledby="t-quien" className="bg-crema-2 py-20 md:py-32">
          <div
            className={`${contenedor} flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 lg:justify-center lg:gap-20`}
            data-aparece
          >
            <div className="shrink-0">
              {hayFoto ? (
                <div className="relative aspect-[4/5] w-[15rem] overflow-hidden rounded-t-full md:w-[18rem] lg:w-[22rem]">
                  <Image src={quienSoy.foto} alt={quienSoy.fotoAlt} fill sizes="(min-width: 1024px) 352px, (min-width: 768px) 288px, 240px" className="object-cover" />
                </div>
              ) : (
                <div
                  role="img"
                  aria-label={quienSoy.fotoAlt}
                  className="grid size-[11rem] place-items-center rounded-full bg-terracota md:size-[16rem] lg:size-[19rem]"
                >
                  <span aria-hidden="true" className="font-display text-[6rem] leading-none font-medium text-tinta md:text-[9rem] lg:text-[11rem]">
                    {sitio.nombre.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="max-w-[40rem]">
              <h2 id="t-quien" className={tituloSeccion}>
                {quienSoy.titulo}
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed md:text-[1.25rem] lg:text-[1.375rem]">{quienSoy.texto}</p>
            </div>
          </div>
        </section>

        {/* 9. Opiniones (oculta hasta que haya opiniones reales) */}
        {sitio.mostrarOpiniones && sitio.opiniones.items.length > 0 && (
          <section aria-labelledby="t-opiniones" className="py-20 md:py-32">
            <div className={contenedor}>
              <h2 id="t-opiniones" className={tituloSeccion}>
                {sitio.opiniones.titulo}
              </h2>
              <ul className="mt-10 grid gap-5 md:grid-cols-2">
                {sitio.opiniones.items.map((o) => (
                  <li key={o.nombre} className="rounded-[1.75rem] bg-crema-2 p-7">
                    <blockquote className="font-display text-[1.5rem] leading-snug">“{o.texto}”</blockquote>
                    <p className={`mt-4 text-gris ${texto}`}>
                      {o.nombre} · {o.detalle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 10. Preguntas */}
        <section id="preguntas" aria-labelledby="t-preguntas" className="py-20 md:py-32">
          <div className={`${contenedor} grid gap-10 lg:grid-cols-12`}>
            <div data-aparece className="lg:col-span-4">
              <h2 id="t-preguntas" className={tituloSeccion}>
                {preguntas.titulo}
              </h2>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-8" data-aparece>
              {preguntas.items.map((p) => (
                <details key={p.pregunta} className="pregunta group rounded-[1.25rem] bg-crema-2 transition-colors open:bg-[#efe6da]">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:min-h-20 md:px-8">
                    <span className="font-display text-[1.25rem] leading-snug font-medium text-balance md:text-[1.625rem]">{p.pregunta}</span>
                    <Plus className="signo size-6 shrink-0 text-terracota-osc md:size-7" aria-hidden="true" />
                  </summary>
                  <p className={`px-5 pb-6 md:px-8 md:pb-7 ${textoGrande}`}>{p.respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Contacto */}
        <section id="contacto" aria-labelledby="t-contacto" className="bg-terracota py-20 text-tinta md:py-32">
          <div className={`${contenedor} grid items-end gap-10 lg:grid-cols-12`} data-aparece>
            <div className="lg:col-span-7">
              <h2 id="t-contacto" className="text-[3.5rem] leading-[0.95] tracking-[-0.03em] md:text-[6rem] lg:text-[7rem]">
                {contacto.titulo}
              </h2>
              <p className="mt-5 max-w-[30ch] text-[1.125rem] leading-relaxed md:text-[1.375rem]">{contacto.texto}</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5">
              <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={`${botonWa} min-h-16 px-8 text-[1.125rem] md:text-[1.1875rem]`}>
                <IconoWhatsapp className="size-6" />
                {contacto.botonWhatsapp}
              </a>
              <a
                href={sitio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-16 items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(45deg,#f09433,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888)] px-8 text-[1.125rem] font-semibold text-white transition-[transform,filter] duration-200 hover:brightness-105 active:scale-[0.98] md:text-[1.1875rem]"
              >
                <IconoInstagram className="size-6" />
                {contacto.botonInstagram}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Pie */}
      <footer className="bg-tinta pt-16 pb-28 text-crema md:pt-24 md:pb-16">
        <div className={contenedor}>
          <p className="font-display text-[4.5rem] leading-none font-medium tracking-[-0.04em] md:text-[9rem] lg:text-[11rem]">{sitio.nombre}</p>
          <div className="mt-8 flex flex-col gap-2 text-base text-crema/75 md:flex-row md:justify-between md:text-[1.125rem]">
            <p>{sitio.pie}</p>
            <p>
              © <Anio />
            </p>
          </div>
        </div>
      </footer>

      <BotonFlotante />
    </>
  );
}

/** Mensajes de WhatsApp como los que llegan todos los días */
function Burbujas({ mensajes }: { mensajes: string[] }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-start gap-1.5">
      {mensajes.map((m, i) => (
        <span
          key={m}
          className="max-w-[90%] rounded-2xl rounded-tl-md bg-crema-2 px-3.5 py-2 text-base leading-snug text-tinta md:text-[1.0625rem]"
          style={{ marginLeft: `${i * 6}%` }}
        >
          {m}
        </span>
      ))}
    </div>
  );
}
