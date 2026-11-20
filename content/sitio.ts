/**
 * Todo el texto, precios y links del sitio.
 * Cambiá lo que quieras acá: los componentes leen de este archivo.
 *
 * ⚠️ COMPLETAR antes de publicar: buscá "COMPLETAR" en este archivo.
 */

export const sitio = {
  nombre: "Damián",
  rubro: "Páginas web",
  lugar: "Avellaneda, Buenos Aires",

  // COMPLETAR: tu número con código de país, sin "+", espacios ni guiones. Ej: "5491123456789"
  whatsapp: "54911XXXXXXXX",
  // COMPLETAR: el link a tu perfil de Instagram
  instagram: "https://instagram.com/XXXX",
  // COMPLETAR (opcional): la dirección final del sitio, ej "https://damianpaginas.com.ar".
  // Sirve para que la vista previa al compartir el link use tu dominio. Si lo dejás vacío, en Vercel se arma solo.
  urlSitio: "",

  mensajeWhatsapp: "Hola Damián! Vi tu página y quiero saber más",
  mensajePlan: (plan: string) => `Hola Damián! Me interesa el plan ${plan}`,

  // Lo que aparece en Google y cuando se comparte el link por WhatsApp
  seo: {
    titulo: "Páginas web para tu negocio · Damián",
    descripcion:
      "Para tu negocio o tu trabajo: lo que hacés, tus precios y un botón para que te escriban. Y si trabajás con turnos, que te reserven solos. Una primera versión enseguida y terminada en pocos días.",
    // Frase corta para la imagen que se ve al compartir el link
    frase: "Lo que hacés, tus precios y un botón de WhatsApp. Lista en pocos días.",
  },

  menu: [
    { texto: "Ejemplos", href: "#ejemplos" },
    { texto: "Precios", href: "#precios" },
    { texto: "Quién soy", href: "#quien-soy" },
    { texto: "Preguntas", href: "#preguntas" },
  ],

  inicio: {
    etiqueta: "Hechas por Damián · Buenos Aires",
    titulo: "Páginas web para tu negocio.",
    // La parte del título que va subrayada a mano (tiene que estar escrita igual que en el título)
    resaltado: "tu negocio",
    // Dónde se corta el título en dos líneas (tiene que estar escrito igual que al principio del título)
    corte: "Páginas web",
    subtitulo: "Para que te encuentren y te escriban. Con lo que hacés, tus precios y un botón de WhatsApp.",
    botonEjemplo: "Mirá un ejemplo",
    botonWhatsapp: "Hablame por WhatsApp",
    confianza: [
      { icono: "charla", texto: "Te respondo yo" },
      { icono: "factura", texto: "Factura" },
      { icono: "listo", texto: "Sin vueltas" },
    ],
    // Cartelitos que flotan alrededor del celular
    cartelitos: [
      { icono: "whatsapp", titulo: "WhatsApp", texto: "Nuevo mensaje por WhatsApp", corto: "Nuevo mensaje" },
      { icono: "turno", titulo: "Turnos", texto: "Turno reservado · Sáb 10:00", corto: "Turno reservado" },
      { icono: "google", titulo: "Google", texto: "Apareciste en Google", corto: "Apareciste en Google" },
    ],
    // Captura que se ve adentro del celular. Si el archivo no existe, aparece un recuadro "captura acá".
    captura: "/ejemplo-uñas.jpg",
    capturaAlt: "La página de ejemplo de Studio Mía vista en un celular",
  },

  linkEjemplo: "https://landing-nails-mu.vercel.app",

  ejemplos: {
    etiqueta: "Así quedan",
    titulo: "Ejemplos",
    bajada: "El primero es de uñas. El estudio y sus datos son de muestra.",
    pestanas: [
      { nombre: "Uñas", disponible: true },
      { nombre: "Más rubros", disponible: false },
    ],
    muyPronto: "Muy pronto",
    link: "https://landing-nails-mu.vercel.app",
    linkTexto: "Abrir la página de ejemplo",
    verGrande: "Ver en grande",
    capturas: [
      { src: "/ejemplo-uñas.jpg", tipo: "celu", alt: "Inicio de la página de ejemplo en el celu, con botón para reservar por WhatsApp", pie: "Lo primero que ven tus clientes" },
      { src: "/ejemplos/unas-precios.jpg", tipo: "celu", alt: "Lista de servicios con precios y duración", pie: "Tus precios, claros" },
      { src: "/ejemplos/unas-disenos.jpg", tipo: "celu", alt: "Galería de diseños de uñas del estudio de ejemplo", pie: "Tus trabajos, en grande" },
    { src: "/ejemplos/unas-compu.jpg", tipo: "compu", alt: "La página de ejemplo en la compu: foto grande, servicios y botón de WhatsApp", pie: "Así se ve en la compu" },
    ] as { src: string; tipo: "celu" | "compu"; alt: string; pie: string }[],
    otroRubro: "¿Tenés otro rubro? Escribime igual",
    otroRubroMensaje: "Hola Damián! Tengo otro rubro y quiero saber cómo quedaría mi página",
  },

  pasos: {
    etiqueta: "En 3 pasos",
    titulo: "Cómo funciona",
    items: [
      { icono: "charla", titulo: "Me escribís y charlamos 10 minutos", texto: "Me contás qué hacés y cómo trabajás." },
      { icono: "fotos", titulo: "Me pasás tus fotos y precios", texto: "Por WhatsApp, como te quede cómodo." },
      { icono: "link", titulo: "Te la muestro y la ajustamos", texto: "Ves cómo queda, cambiamos lo que quieras y la publicamos." },
    ],
    boton: "Arrancamos con el paso 1",
    // Lo que se ve en la imagen de cada paso
    chat: { cliente: "Hola! Quiero una página para mi negocio", yo: "Dale! Contame qué hacés 😊" },
    preciosChat: [["Servicio 1", "$12.000"], ["Servicio 2", "$18.500"]],
    link: "tunegocio.com.ar",
    lista: "¡Lista!",
  },

  incluye: {
    etiqueta: "Todo incluido",
    titulo: "Qué vas a tener",
    bajada: "Todo lo que necesita tu página para que te encuentren y te escriban.",
    items: [
      { icono: "galeria", texto: "Tus trabajos, con fotos" },
      { icono: "negocio", texto: "Lo que hacés, contado claro" },
      { icono: "precios", texto: "Precios claros" },
      { icono: "mapa", texto: "Tu ubicación con mapa" },
      { icono: "whatsapp", texto: "Botón de WhatsApp" },
      { icono: "google", texto: "Aparecés en Google" },
      { icono: "celu", texto: "Se ve bien en el celu" },
      { icono: "editar", texto: "La podés cambiar vos" },
    ],
  },

  precios: {
    etiqueta: "Sin sorpresas",
    titulo: "Precios",
    planes: [
      {
        nombre: "Tu página",
        destacado: false,
        etiqueta: "",
        unaVez: "$150.000",
        porMes: "$15.000",
        incluye: ["Lo que hacés y tus trabajos", "Precios y ubicación", "WhatsApp e Instagram", "Dominio propio"],
        nota: "",
        // Lo que se ve al tocar "Ver qué incluye"
        detalle: {
          puntos: [
            { icono: "negocio", texto: "Una página con lo que hacés y cómo trabajás" },
            { icono: "galeria", texto: "Tus trabajos o servicios, con fotos grandes" },
            { icono: "precios", texto: "Tus precios, fáciles de leer" },
            { icono: "mapa", texto: "Tu ubicación con mapa" },
            { icono: "whatsapp", texto: "Botón de WhatsApp y link a tu Instagram" },
            { icono: "link", texto: "Tu propio dominio, a tu nombre" },
          ],
          tarda: "Una primera versión enseguida. Terminada, en pocos días.",
          necesito: ["Fotos de tus trabajos o de tu lugar", "Tus precios", "Tu dirección, si atendés en un lugar", "Tu WhatsApp y tu Instagram"],
          porMes: ["El dominio, a tu nombre", "Que la página esté online", "Cambios chicos: precios, fotos, textos"],
        },
      },
      {
        nombre: "Tu página + turnos",
        destacado: true,
        etiqueta: "El más elegido",
        unaVez: "$280.000",
        porMes: "$30.000",
        incluye: [
          "Todo lo de Tu página",
          "Tus clientes eligen día y horario solos",
          "Cobrás la seña por Mercado Pago",
          "Un panel para ver tus turnos",
        ],
        nota: "Para los que trabajan con turnos: peluquerías, estética, consultorios, profes.",
        detalle: {
          puntos: [
            { icono: "negocio", texto: "Todo lo de Tu página" },
            { icono: "turno", texto: "Tus clientes eligen día y horario solos" },
            { icono: "sena", texto: "Pagan la seña por Mercado Pago y va directo a tu cuenta" },
            { icono: "panel", texto: "Un panel para ver tus turnos" },
            { icono: "reloj", texto: "Vos elegís tus días, horarios y servicios" },
          ],
          tarda: "Una primera versión enseguida. Terminada, en pocos días.",
          necesito: ["Fotos y precios", "Tus servicios y cuánto dura cada uno", "Tus días y horarios", "Tu cuenta de Mercado Pago"],
          porMes: ["El dominio, a tu nombre", "Que la página y los turnos estén online", "Cambios chicos: precios, fotos, horarios"],
        },
      },
    ],
    unaVezTexto: "una vez",
    porMesTexto: "por mes",
    boton: "Quiero este",
    verIncluye: "Ver qué incluye",
    detalleTitulos: { incluye: "Qué incluye", tarda: "Cuánto tarda", necesito: "Qué me tenés que pasar", porMes: "Qué cubre lo que pagás por mes" },
    condiciones: ["Pagás la mitad para arrancar", "La otra mitad cuando la ves terminada", "Te hago factura"],
  },

  quienSoy: {
    etiqueta: "El que te la arma",
    titulo: "Quién soy",
    // Si el archivo no existe, aparece un recuadro "tu foto acá".
    foto: "/damian.jpg",
    fotoAlt: "Damián",
    fotoFalta: "tu foto acá",
    parrafos: [
      "Soy Damián, de Avellaneda. Estudio Análisis de Sistemas y armo páginas para negocios y profesionales.",
      "Me encargo de todo: vos me pasás tus fotos y tu info, y yo te la dejo andando. Si algo no te gusta, lo cambiamos.",
    ],
    datos: [
      { icono: "mapa", texto: "Avellaneda, Buenos Aires" },
      { icono: "charla", texto: "Te respondo yo, no un bot" },
      { icono: "factura", texto: "Te hago factura" },
    ],
    firma: "— Damián",
  },

  // Cambiá a true cuando tengas opiniones reales. No inventes ninguna.
  mostrarOpiniones: false,
  opiniones: {
    etiqueta: "Opiniones",
    titulo: "Lo que dicen",
    items: [] as { texto: string; nombre: string; detalle: string }[],
  },

  preguntas: {
    etiqueta: "Dudas",
    titulo: "Preguntas frecuentes",
    tarjeta: { nombre: "Damián", texto: "Te respondo yo, en el día" },
    costado: "¿Te quedó alguna duda? Escribime.",
    boton: "Preguntame por WhatsApp",
    mensaje: "Hola Damián! Tengo una pregunta sobre las páginas",
    items: [
      { icono: "celu", pregunta: "¿Tengo que saber de computación?", respuesta: "No, yo me encargo de todo." },
      { icono: "reloj", pregunta: "¿Cuánto tarda?", respuesta: "Una primera versión, en el día si tengo lugar. Terminada, en pocos días." },
      { icono: "sena", pregunta: "¿Qué es lo que pago por mes?", respuesta: "El dominio, que la página esté online y que te la mantenga." },
      { icono: "editar", pregunta: "¿La puedo cambiar después?", respuesta: "Sí, precios y fotos los cambiás vos o me avisás." },
      { icono: "link", pregunta: "¿Y si después no la quiero más?", respuesta: "La das de baja cuando quieras y tu dominio te lo paso a tu nombre." },
      { icono: "turno", pregunta: "¿Cómo se cobra la seña de los turnos?", respuesta: "Por Mercado Pago, la plata va directo a tu cuenta." },
    ],
  },

  contacto: {
    etiqueta: "Escribime",
    titulo: "¿Charlamos?",
    texto: "Escribime y en 10 minutos te cuento cómo quedaría la tuya.",
    botonWhatsapp: "Escribime por WhatsApp",
    botonInstagram: "Instagram",
    // Mini chat de muestra al costado
    chat: [
      { de: "cliente", texto: "Hola Damián! Quiero mi página", hora: "11:02" },
      { de: "yo", texto: "Dale! Contame qué hacés", hora: "11:03" },
    ],
    enLinea: "en línea",
  },

  pie: "Páginas web · Avellaneda, Buenos Aires",
};

export function linkWhatsapp(mensaje: string = sitio.mensajeWhatsapp) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
