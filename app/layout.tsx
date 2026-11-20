import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Newsreader } from "next/font/google";
import { sitio } from "@/content/sitio";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
});

// Solo para la firma a mano
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(sitio.urlSitio ? { metadataBase: new URL(sitio.urlSitio) } : {}),
  title: sitio.seo.titulo,
  description: sitio.seo.descripcion,
  openGraph: {
    title: sitio.seo.titulo,
    description: sitio.seo.descripcion,
    locale: "es_AR",
    type: "website",
    siteName: sitio.nombre,
  },
  twitter: {
    card: "summary_large_image",
    title: sitio.seo.titulo,
    description: sitio.seo.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${newsreader.variable} ${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que hay JavaScript: recién ahí las secciones se esconden para aparecer suave */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(window.__aparece)return;document.querySelectorAll('[data-aparece]').forEach(function(e){e.classList.add('visible')})},4000)",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
