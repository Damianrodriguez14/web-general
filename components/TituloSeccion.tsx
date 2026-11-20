import { bajada as claseBajada, pastilla, tituloSeccion } from "@/lib/estilos";

type Props = {
  id: string;
  etiqueta: string;
  titulo: string;
  bajada?: string;
  className?: string;
  /** Tamaño del título si la sección pide uno distinto (ej. el contacto) */
  claseTitulo?: string;
};

/** Pastilla + título + una línea. Todas las secciones arrancan igual. */
export function TituloSeccion({ id, etiqueta, titulo, bajada, className = "", claseTitulo = tituloSeccion }: Props) {
  return (
    <div className={className}>
      <p className={pastilla}>
        <span className="size-2 rounded-full bg-terracota" aria-hidden="true" />
        {etiqueta}
      </p>
      <h2 id={id} className={`mt-4 md:mt-5 ${claseTitulo}`}>
        {titulo}
      </h2>
      {bajada && <p className={`mt-4 max-w-[40ch] md:mt-5 ${claseBajada}`}>{bajada}</p>}
    </div>
  );
}
