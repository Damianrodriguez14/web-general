import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { sitio } from "@/content/sitio";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
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
    <html lang="es-AR" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
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
