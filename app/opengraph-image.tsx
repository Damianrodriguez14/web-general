import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { sitio } from "@/content/sitio";

export const alt = sitio.seo.titulo;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que aparece cuando se comparte el link (WhatsApp, Instagram, Google)
export default async function Image() {
  let captura: string | null = null;
  try {
    const datos = await readFile(join(process.cwd(), "public", sitio.inicio.captura));
    captura = `data:image/jpeg;base64,${datos.toString("base64")}`;
  } catch {
    captura = null;
  }

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#faf7f2", color: "#1f1b18", padding: "64px 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ fontSize: 40, fontWeight: 600 }}>{sitio.nombre}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>{sitio.inicio.titulo}</div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: "#6b625b", marginTop: 24 }}>{sitio.seo.frase}</div>
          </div>
          <div style={{ fontSize: 26, color: "#6b625b" }}>{`${sitio.rubro} · ${sitio.lugar}`}</div>
        </div>
        <div style={{ display: "flex", position: "relative", width: 330, marginLeft: 26, justifyContent: "center" }}>
          <div style={{ position: "absolute", left: -10, right: -10, top: 20, bottom: -64, background: "#c2704f", borderTopLeftRadius: 200, borderTopRightRadius: 200 }} />
          <div style={{ display: "flex", marginTop: 50, width: 250, height: 541, background: "#1f1b18", borderRadius: 38, padding: 8 }}>
            {captura ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={captura} width={234} height={506} style={{ borderRadius: 31, objectFit: "cover", objectPosition: "top" }} alt="" />
            ) : (
              <div style={{ display: "flex", width: 234, height: 506, borderRadius: 31, background: "#f2ebe1" }} />
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
