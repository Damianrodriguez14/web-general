import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Un celular dibujado con la captura adentro. Sin captura muestra "captura acá". */
export function Celular({ src, alt, priority, sizes = "(min-width: 1024px) 340px, 72vw", className = "" }: Props) {
  return (
    <div className={`relative mx-auto aspect-[390/844] w-full rounded-[2.5rem] bg-oscuro p-[0.5rem] shadow-alta ring-1 ring-black/5 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-crema-2">
        {src ? (
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center font-medium text-gris">captura acá</div>
        )}
      </div>
    </div>
  );
}

/** Una compu dibujada (pantalla + base) con la captura adentro. */
export function Compu({ src, alt, sizes = "(min-width: 1024px) 680px, 88vw", className = "" }: Omit<Props, "priority">) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="rounded-[1.1rem] bg-oscuro p-[0.45rem] pb-[0.6rem] shadow-alta ring-1 ring-black/5">
        <div className="relative aspect-[1440/900] overflow-hidden rounded-[0.7rem] bg-crema-2">
          {src ? (
            <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
          ) : (
            <div className="grid h-full place-items-center text-gris">captura acá</div>
          )}
        </div>
      </div>
      <div className="mx-auto h-3 w-[22%] bg-[#d9cdbf]" />
      <div className="mx-auto h-2 w-[38%] rounded-b-xl bg-[#cbbcab]" />
    </div>
  );
}
