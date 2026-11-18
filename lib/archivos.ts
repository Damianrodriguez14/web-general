import { existsSync } from "node:fs";
import { join } from "node:path";

/** ¿Existe este archivo dentro de /public? (se revisa al armar la página) */
export function existeEnPublic(ruta: string) {
  if (!ruta) return false;
  return existsSync(join(process.cwd(), "public", decodeURIComponent(ruta)));
}
