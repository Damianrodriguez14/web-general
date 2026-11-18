import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  priority?: boolean;
  obturador?: boolean;
  sizes?: string;
  className?: string;
};

/** Un celular dibujado con la captura adentro. Sin captura muestra "captura acá". */
export function Celular({ src, alt, priority, obturador, sizes = "(min-width: 1024px) 340px, 72vw", className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto aspect-[390/844] w-full rounded-[2.6rem] bg-tinta p-[0.55rem] shadow-[0_30px_60px_-24px_rgb(31_27_24/0.45),0_8px_20px_-10px_rgb(31_27_24/0.3)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-crema-2">
        {src ? (
          <div className={`absolute inset-0 ${obturador ? "obturador" : ""}`}>
            <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
          </div>
        ) : (
          <div className="grid h-full place-items-center p-6 text-center font-medium text-gris">captura acá</div>
        )}
      </div>
    </div>
  );
}
