/** Clases que se repiten en toda la página (botones, contenedor, títulos). */

export const contenedor = "mx-auto w-full max-w-[75rem] px-5 md:px-10";

/** Espacio de cada sección: 80px en celu, 112px en tablet, 128px en compu. Siempre el mismo. */
export const seccion = "py-20 md:py-28 lg:py-32";

export const tituloSeccion = "text-[2.25rem] leading-[1.06] md:text-[3.5rem] md:leading-[1.02] lg:text-[4rem]";

export const bajada = "text-[1.0625rem] leading-relaxed text-gris md:text-[1.1875rem]";

/** Pastilla chiquita arriba de cada título (todas las secciones la llevan) */
export const pastilla =
  "inline-flex min-h-9 items-center gap-2 rounded-full border border-tinta/10 bg-blanco px-3.5 text-base font-medium text-tinta/80 shadow-suave";

/** Tarjeta: el mismo radio y la misma sombra en toda la página */
export const tarjeta = "rounded-tarjeta shadow-tarjeta";

const base =
  "inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full px-5 text-[1.0625rem] font-semibold whitespace-nowrap min-[360px]:px-7 transition-[background-color,border-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

export const botonWa = `${base} bg-wa text-tinta shadow-boton hover:bg-wa-hover`;
export const botonBorde = `${base} border-2 border-tinta/80 bg-transparent text-tinta hover:border-tinta hover:bg-tinta/[0.06]`;
export const botonOscuro = `${base} bg-oscuro text-crema shadow-boton hover:bg-black`;
export const botonBlanco = `${base} border border-tinta/15 bg-blanco text-tinta shadow-suave hover:border-tinta/30 hover:bg-crema-2`;
