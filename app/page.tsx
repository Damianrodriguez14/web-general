import { cacheLife } from "next/cache";
import { ArrowRight, ArrowUpRight, Camera, Check, CheckCheck, Plus, Quote } from "lucide-react";
import Image from "next/image";
import { sitio, linkWhatsapp } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";
import { botonBlanco, botonBorde, botonWa, contenedor, seccion } from "@/lib/estilos";
import { Aparecer } from "@/components/Aparecer";
import { BotonFlotante } from "@/components/BotonFlotante";
import { Celular } from "@/components/Celular";
import { Ejemplos } from "@/components/Ejemplos";
import { Encabezado } from "@/components/Encabezado";
import { Icono, IconoInstagram, IconoWhatsapp } from "@/components/Iconos";
import { Incluye } from "@/components/Incluye";
import { Pasos } from "@/components/Pasos";
import { TituloSeccion } from "@/components/TituloSeccion";
import { VerIncluye } from "@/components/VerIncluye";

/** Los tres colores suaves de apoyo, en orden */
const suaves = ["bg-durazno", "bg-salvia", "bg-arena"];

async function Anio() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Inicio() {
  const { inicio, ejemplos, pasos, incluye, precios, quienSoy, preguntas, contacto } = sitio;
  const hayCaptura = existeEnPublic(inicio.captura);
  const hayFoto = existeEnPublic(quienSoy.foto);
  const capturas = ejemplos.capturas.map((c) => ({ ...c, existe: existeEnPublic(c.src) }));

  const tieneResaltado = inicio.titulo.includes(inicio.resaltado);
  const [antesResaltado, despuesResaltado = ""] = tieneResaltado ? inicio.titulo.split(inicio.resaltado) : [inicio.titulo];

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-oscuro px-5 py-3 text-crema focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Ir al contenido
      </a>
      <Encabezado />
      <Aparecer />

      <main id="contenido">
        {/* ── Inicio ── */}
        <section id="inicio" className="overflow-hidden pt-24 pb-16 md:pt-32 lg:flex lg:min-h-svh lg:items-center lg:pt-24 lg:pb-10">
          <div className={`${contenedor} grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6`}>
            <div>
              <p className="inline-flex min-h-10 items-center gap-2 rounded-full border border-tinta/10 bg-blanco px-3 text-[0.875rem] font-medium whitespace-nowrap text-tinta/80 shadow-suave min-[360px]:px-4 min-[360px]:text-base">
                <span className="size-2 rounded-full bg-terracota" aria-hidden="true" />
                {inicio.etiqueta}
              </p>
              <h1 className="mt-5 text-[2.625rem] leading-[1.02] min-[360px]:text-[3rem] sm:text-[4rem] md:mt-7 lg:text-[4.5rem] lg:leading-[1] xl:text-[5rem]">
                {antesResaltado.startsWith(inicio.corte) ? (
                  <>
                    {inicio.corte}
                    <br />
                    {antesResaltado.slice(inicio.corte.length).trimStart()}
                  </>
                ) : (
                  antesResaltado
                )}
                {tieneResaltado && (
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative">
                      {inicio.resaltado}
                      <svg
                        className="trazo absolute -bottom-[0.1em] left-[-2%] h-[0.32em] w-[104%] overflow-visible"
                        viewBox="0 0 300 24"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          pathLength={1}
                          d="M3 15 C 52 7, 118 5, 182 8 S 270 13, 297 7"
                          fill="none"
                          stroke="var(--color-terracota)"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    {despuesResaltado}
                  </span>
                )}
              </h1>
              <p className="mt-6 max-w-[34ch] text-[1.0625rem] leading-relaxed text-tinta/80 md:mt-8 md:text-[1.25rem]">{inicio.subtitulo}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={botonWa}>
                  <IconoWhatsapp className="size-5" />
                  {inicio.botonWhatsapp}
                </a>
                <a href={sitio.linkEjemplo} target="_blank" rel="noopener noreferrer" className={botonBorde}>
                  {inicio.botonEjemplo}
                  <ArrowUpRight className="size-5" />
                </a>
              </div>
              {/* Fila de confianza: en celu entra en una sola línea, con separadores */}
              <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.875rem] min-[360px]:flex-nowrap min-[360px]:gap-2.5 min-[360px]:text-[0.9375rem] font-medium whitespace-nowrap text-tinta/75 sm:gap-4 md:mt-9 md:text-[1.0625rem]">
                {inicio.confianza.map((c, i) => (
                  <li key={c.texto} className="flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-4">
                    {i > 0 && <span className="size-1 rounded-full bg-terracota/60" aria-hidden="true" />}
                    <span className="flex items-center gap-1.5">
                      <Icono nombre={c.icono} className="hidden size-5 text-terracota-osc sm:block" />
                      {c.texto}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative -mx-5 pt-4 pb-6 sm:mx-auto sm:w-full sm:max-w-[28rem] lg:max-w-[30rem] lg:py-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-[16%] top-0 bottom-0 rounded-t-[8rem] rounded-b-[2.5rem] bg-durazno/80 sm:rounded-t-[12rem] lg:rounded-t-[13rem] sm:inset-x-[6%] lg:top-[2%]"
              />
              <div className="relative mx-auto w-[52%] max-w-[15rem] lg:w-[min(18.5rem,62%)] lg:max-w-none">
                <Celular src={hayCaptura ? inicio.captura : null} alt={inicio.capturaAlt} priority sizes="(min-width: 1024px) 296px, 52vw" />
              </div>
              <Cartelito c={inicio.cartelitos[0]} className="flota top-[22%] left-1.5 sm:left-0 lg:top-[22%] lg:-left-4 xl:-left-14" />
              <Cartelito c={inicio.cartelitos[1]} className="flota flota-2 right-1.5 bottom-[20%] sm:right-0 lg:right-0 lg:bottom-[1%] xl:-right-20" />
              <Cartelito c={inicio.cartelitos[2]} className="flota flota-3 hidden lg:top-[3%] lg:right-0 lg:flex xl:-right-8" />
            </figure>
          </div>
        </section>

        {/* ── Ejemplos ── */}
        <section id="ejemplos" aria-labelledby="t-ejemplos" className={`overflow-hidden bg-crema-2 ${seccion}`}>
          <div className={contenedor}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-aparece>
              <TituloSeccion id="t-ejemplos" etiqueta={ejemplos.etiqueta} titulo={ejemplos.titulo} bajada={ejemplos.bajada} />
              <a
                href={linkWhatsapp(ejemplos.otroRubroMensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-1.5 self-start text-base font-semibold underline decoration-terracota decoration-2 underline-offset-[0.3em] hover:decoration-tinta md:self-auto md:text-[1.0625rem]"
              >
                {ejemplos.otroRubro}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 md:mt-12" data-aparece>
              <Ejemplos capturas={capturas} />
            </div>
          </div>
        </section>

        {/* ── Cómo funciona ── */}
        <section aria-labelledby="t-pasos" className={seccion}>
          <div className={contenedor}>
            <div data-aparece>
              <TituloSeccion id="t-pasos" etiqueta={pasos.etiqueta} titulo={pasos.titulo} />
            </div>
            <div className="mt-10 md:mt-14">
              <Pasos />
            </div>
            <div className="mt-10 flex justify-center md:mt-14" data-aparece>
              <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={`${botonWa} w-full sm:w-auto`}>
                <IconoWhatsapp className="size-5" />
                {pasos.boton}
              </a>
            </div>
          </div>
        </section>

        {/* ── Qué vas a tener ── */}
        <section aria-labelledby="t-incluye" className={`bg-crema-2 ${seccion}`}>
          <div className={contenedor}>
            <div data-aparece>
              <TituloSeccion id="t-incluye" etiqueta={incluye.etiqueta} titulo={incluye.titulo} bajada={incluye.bajada} />
            </div>
            <div className="mt-10 md:mt-14" data-aparece>
              <Incluye />
            </div>
          </div>
        </section>

        {/* ── Precios ── */}
        <section id="precios" aria-labelledby="t-precios" className={seccion}>
          <div className={contenedor}>
            <div data-aparece>
              <TituloSeccion id="t-precios" etiqueta={precios.etiqueta} titulo={precios.titulo} />
            </div>
            <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6" data-aparece>
              {precios.planes.map((plan) => {
                const oscuro = plan.destacado;
                return (
                  <li
                    key={plan.nombre}
                    className={`relative flex flex-col rounded-tarjeta p-6 md:p-10 ${oscuro ? "bg-oscuro text-crema shadow-alta" : "bg-crema-2 shadow-suave ring-1 ring-tinta/5"}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-[1.875rem] leading-tight md:text-[2.25rem]">{plan.nombre}</h3>
                      {plan.etiqueta && <span className="rounded-full bg-durazno px-3.5 py-1.5 text-base font-semibold text-tinta">{plan.etiqueta}</span>}
                    </div>
                    <p className="mt-6 flex items-baseline gap-2">
                      <span className="font-display text-[3rem] leading-none font-medium tracking-[-0.02em] md:text-[3.75rem]">{plan.unaVez}</span>
                      <span className={oscuro ? "text-crema/75" : "text-gris"}>{precios.unaVezTexto}</span>
                    </p>
                    <p className={`mt-2 text-[1.0625rem] ${oscuro ? "text-crema/80" : "text-tinta/80"}`}>
                      + <span className="font-semibold">{plan.porMes}</span> {precios.porMesTexto}
                    </p>
                    <ul className={`mt-7 grid gap-3 border-t pt-7 ${oscuro ? "border-crema/15" : "border-tinta/10"}`}>
                      {plan.incluye.map((x) => (
                        <li key={x} className="flex gap-3 leading-snug">
                          <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${oscuro ? "bg-terracota" : "bg-blanco"}`}>
                            <Check className={`size-3.5 ${oscuro ? "text-oscuro" : "text-terracota-osc"}`} aria-hidden="true" />
                          </span>
                          {x}
                        </li>
                      ))}
                    </ul>
                    {plan.nota && <p className="mt-6 rounded-chico bg-oscuro-2 px-4 py-3.5 text-base leading-snug text-crema/85">{plan.nota}</p>}
                    <div className="mt-auto flex flex-col items-center gap-1 pt-8">
                      <a href={linkWhatsapp(sitio.mensajePlan(plan.nombre))} target="_blank" rel="noopener noreferrer" className={`${botonWa} w-full`}>
                        <IconoWhatsapp className="size-5" />
                        {precios.boton}
                      </a>
                      <VerIncluye plan={plan} oscuro={oscuro} />
                    </div>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-5 grid gap-1 rounded-tarjeta bg-blanco p-3 shadow-suave ring-1 ring-tinta/5 md:mt-6 md:grid-cols-3 md:gap-3 md:p-4" data-aparece>
              {precios.condiciones.map((c, i) => (
                <li key={c} className="flex items-center gap-3.5 rounded-chico p-2 md:p-3">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-chico ${suaves[i]}`}>
                    <Icono nombre={["sena", "listo", "factura"][i]} className="size-5" />
                  </span>
                  <span className="leading-snug font-medium md:text-[1.0625rem]">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Quién soy ── */}
        <section id="quien-soy" aria-labelledby="t-quien" className={`bg-crema-2 ${seccion}`}>
          <div className={`${contenedor} grid items-center gap-12 md:grid-cols-[5fr_6fr] md:gap-14 lg:gap-20`}>
            <div data-aparece>
              <div className="relative mr-3 mb-3 md:mr-4 md:mb-4">
                <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-tarjeta bg-terracota/35 md:translate-x-4 md:translate-y-4" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-tarjeta bg-arena shadow-tarjeta">
                  {hayFoto ? (
                    <Image src={quienSoy.foto} alt={quienSoy.fotoAlt} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-gris">
                      <Camera className="size-10" aria-hidden="true" />
                      <span className="text-[1.0625rem] font-medium">{quienSoy.fotoFalta}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div data-aparece>
              <TituloSeccion id="t-quien" etiqueta={quienSoy.etiqueta} titulo={quienSoy.titulo} />
              {quienSoy.parrafos.map((p) => (
                <p key={p} className="mt-5 max-w-[38ch] text-[1.0625rem] leading-relaxed md:text-[1.25rem]">
                  {p}
                </p>
              ))}
              <ul className="mt-8 grid gap-3">
                {quienSoy.datos.map((x, i) => (
                  <li key={x.texto} className="flex items-center gap-3.5 font-medium md:text-[1.125rem]">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-chico ${suaves[i]}`}>
                      <Icono nombre={x.icono} className="size-5" />
                    </span>
                    {x.texto}
                  </li>
                ))}
              </ul>
              <p className="mt-8 -rotate-2 font-mano text-[2.25rem] leading-none text-terracota-osc md:text-[2.75rem]">{quienSoy.firma}</p>
            </div>
          </div>
        </section>

        {/* ── Opiniones (oculta hasta tener opiniones reales: mostrarOpiniones en content/sitio.ts) ── */}
        {sitio.mostrarOpiniones && sitio.opiniones.items.length > 0 && (
          <section aria-labelledby="t-opiniones" className={seccion}>
            <div className={contenedor}>
              <div data-aparece>
                <TituloSeccion id="t-opiniones" etiqueta={sitio.opiniones.etiqueta} titulo={sitio.opiniones.titulo} />
              </div>
              <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3" data-aparece>
                {sitio.opiniones.items.map((o, i) => (
                  <li key={o.nombre} className="flex flex-col rounded-tarjeta bg-blanco p-6 shadow-tarjeta md:p-8">
                    <Quote className="size-8 text-terracota" aria-hidden="true" />
                    <blockquote className="mt-4 text-[1.125rem] leading-relaxed md:text-[1.25rem]">{o.texto}</blockquote>
                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <span className={`grid size-11 place-items-center rounded-full font-display text-lg font-semibold ${suaves[i % 3]}`}>{o.nombre.charAt(0)}</span>
                      <span>
                        <span className="block font-semibold">{o.nombre}</span>
                        <span className="block text-base text-gris">{o.detalle}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── Preguntas frecuentes ── */}
        <section id="preguntas" aria-labelledby="t-preguntas" className={seccion}>
          <div className={contenedor}>
            <div className="grid gap-10 rounded-bloque bg-arena p-5 shadow-tarjeta min-[360px]:p-6 md:p-12 lg:grid-cols-[5fr_7fr] lg:gap-14 lg:p-16">
              <div className="lg:sticky lg:top-32 lg:self-start" data-aparece>
                <TituloSeccion id="t-preguntas" etiqueta={preguntas.etiqueta} titulo={preguntas.titulo} bajada={preguntas.costado} />
                <div className="mt-7 max-w-[24rem] rounded-tarjeta bg-blanco p-4 shadow-suave">
                  <div className="flex items-center gap-3">
                    <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-oscuro font-display text-xl font-semibold text-crema" aria-hidden="true">
                      {sitio.nombre.charAt(0)}
                      <span className="absolute right-0 bottom-0 size-3.5 rounded-full bg-wa ring-2 ring-blanco" />
                    </span>
                    <p className="leading-snug">
                      <span className="block font-semibold">{preguntas.tarjeta.nombre}</span>
                      <span className="block text-base text-gris">{preguntas.tarjeta.texto}</span>
                    </p>
                  </div>
                  <a href={linkWhatsapp(preguntas.mensaje)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-wa px-4 py-2 text-center text-base leading-tight font-semibold min-[360px]:whitespace-nowrap text-tinta shadow-boton transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-wa-hover active:translate-y-0 md:text-[1.0625rem]">
                    <IconoWhatsapp className="size-5" />
                    {preguntas.boton}
                  </a>
                </div>
              </div>
              <ul className="grid content-start gap-3" data-aparece>
                {preguntas.items.map((p, i) => (
                  <li key={p.pregunta}>
                    <details name="preguntas" className="pregunta rounded-medio bg-blanco shadow-suave ring-1 ring-tinta/5 transition-shadow open:ring-2 open:ring-terracota">
                      <summary className="flex min-h-16 cursor-pointer items-center gap-3.5 rounded-medio px-4 py-3.5 md:px-5">
                        <span className={`grid size-10 shrink-0 place-items-center rounded-full ${suaves[i % 3]}`} aria-hidden="true">
                          <Icono nombre={p.icono} className="size-[1.125rem]" />
                        </span>
                        <span className="flex-1 text-[1.0625rem] leading-snug font-semibold text-balance md:text-[1.125rem]">{p.pregunta}</span>
                        <span className="signo grid size-9 shrink-0 place-items-center rounded-full bg-durazno text-terracota-osc" aria-hidden="true">
                          <Plus className="size-5" />
                        </span>
                      </summary>
                      <p className="pr-5 pb-5 pl-[4.375rem] text-[1.0625rem] text-tinta/80 md:pl-[4.75rem]">{p.respuesta}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section aria-labelledby="t-contacto" className={`bg-durazno ${seccion}`}>
          <div className={`${contenedor} grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16`}>
            <div data-aparece>
              <TituloSeccion
                id="t-contacto"
                etiqueta={contacto.etiqueta}
                titulo={contacto.titulo}
                claseTitulo="text-[3rem] leading-none md:text-[4.5rem] lg:text-[5.5rem]"
              />
              <p className="mt-5 max-w-[30ch] text-[1.0625rem] leading-relaxed text-tinta/80 md:text-[1.25rem]">{contacto.texto}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={botonWa}>
                  <IconoWhatsapp className="size-5" />
                  {contacto.botonWhatsapp}
                </a>
                <a href={sitio.instagram} target="_blank" rel="noopener noreferrer" className={botonBlanco}>
                  <IconoInstagram className="size-5" />
                  {contacto.botonInstagram}
                </a>
              </div>
            </div>
            <div data-aparece>
              <MiniChat />
            </div>
          </div>
        </section>
      </main>

      {/* ── Pie ── */}
      <footer className="bg-oscuro text-crema">
        <div className={`${contenedor} flex flex-col gap-8 pt-14 pb-28 md:flex-row md:items-center md:justify-between md:py-14`}>
          <div>
            <p className="inline-flex items-baseline gap-1 font-display text-[1.75rem] leading-none font-medium tracking-tight">
              {sitio.nombre}
              <span className="size-2 rounded-full bg-terracota" aria-hidden="true" />
            </p>
            <p className="mt-3 text-crema/70">{sitio.pie}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-12 place-items-center rounded-full border border-crema/20 transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-crema/10"
            >
              <IconoWhatsapp className="size-5" />
            </a>
            <a
              href={sitio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-12 place-items-center rounded-full border border-crema/20 transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-crema/10"
            >
              <IconoInstagram className="size-5" />
            </a>
            <p className="ml-3 text-crema/70 tabular-nums">
              © <Anio />
            </p>
          </div>
        </div>
      </footer>

      <BotonFlotante />
    </>
  );
}

/** Cartelito tipo notificación que flota al lado del celular del inicio.
    En celu es angosto (ícono arriba, texto abajo) para quedar pegado al costado sin tapar el celu. */
function Cartelito({ c, className = "" }: { c: { icono: string; titulo: string; texto: string; corto: string }; className?: string }) {
  const fondo = { whatsapp: "bg-salvia", turno: "bg-durazno", google: "bg-arena" }[c.icono] ?? "bg-crema-2";
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 flex w-[6rem] flex-col items-start gap-1.5 rounded-chico bg-blanco p-2.5 shadow-tarjeta ring-1 ring-tinta/5 sm:w-auto sm:flex-row sm:items-center sm:gap-3 sm:py-2.5 sm:pr-4 sm:pl-2.5 ${className}`}
    >
      <span className={`grid size-8 shrink-0 place-items-center rounded-xl sm:size-10 ${fondo}`}>
        <Icono nombre={c.icono} className="size-4 sm:size-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.75rem] text-gris sm:hidden">{c.titulo}</span>
        <span className="hidden text-[0.8125rem] text-gris sm:block">{c.titulo} · ahora</span>
        <span className="block text-[0.8125rem] font-semibold sm:hidden">{c.corto}</span>
        <span className="hidden text-[0.9375rem] font-semibold whitespace-nowrap sm:block">{c.texto}</span>
      </span>
    </div>
  );
}

/** Mini chat de muestra al costado del contacto. Todo el chat abre WhatsApp. */
function MiniChat() {
  const c = sitio.contacto;
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.botonWhatsapp}
      className="mx-auto block w-full max-w-[24rem] -rotate-1 overflow-hidden rounded-tarjeta bg-blanco shadow-alta transition-transform duration-300 hover:rotate-0"
    >
      <span aria-hidden="true" className="block">
        <span className="flex items-center gap-3 border-b border-tinta/8 px-5 py-4">
          <span className="relative grid size-11 place-items-center rounded-full bg-oscuro font-display text-xl font-semibold text-crema">
            {sitio.nombre.charAt(0)}
            <span className="absolute right-0 bottom-0 size-3 rounded-full bg-wa ring-2 ring-blanco" />
          </span>
          <span className="leading-tight">
            <span className="block font-semibold">{sitio.nombre}</span>
            <span className="block text-[0.9375rem] text-gris">{c.enLinea}</span>
          </span>
        </span>
        <span className="flex flex-col gap-2.5 bg-crema-2 px-4 py-6">
          {c.chat.map((m) => (
            <span
              key={m.texto}
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 leading-snug shadow-[0_1px_1px_rgb(110_64_36/0.08)] ${
                m.de === "cliente" ? "self-end rounded-tr-md bg-salvia" : "self-start rounded-tl-md bg-blanco"
              }`}
            >
              {m.texto}
              <span className="ml-2.5 inline-flex translate-y-0.5 items-center gap-0.5 align-bottom text-[0.75rem] text-gris tabular-nums">
                {m.hora}
                {m.de === "cliente" && <CheckCheck className="size-3.5" />}
              </span>
            </span>
          ))}
        </span>
        <span className="flex items-center gap-2 px-4 py-3">
          <span className="flex-1 rounded-full bg-crema px-4 py-2.5 text-[0.9375rem] text-gris">Escribí un mensaje</span>
          <span className="grid size-10 place-items-center rounded-full bg-wa text-tinta">
            <IconoWhatsapp className="size-5" />
          </span>
        </span>
      </span>
    </a>
  );
}
