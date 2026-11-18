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
    titulo: "Damián · Páginas web para tu negocio o tu trabajo",
    descripcion:
      "Para tu negocio o tu trabajo: lo que hacés, tus precios y un botón para que te escriban. Y si trabajás con turnos, que te reserven solos. Lista en una semana.",
    // Frase corta para la imagen que se ve al compartir el link
    frase: "Lo que hacés, tus precios y un botón de WhatsApp. Lista en una semana.",
  },

  menu: [
    { texto: "Ejemplos", href: "#ejemplos" },
    { texto: "Precios", href: "#precios" },
    { texto: "Quién soy", href: "#quien-soy" },
    { texto: "Preguntas", href: "#preguntas" },
  ],

  inicio: {
    titulo: "Tu página, lista en una semana.",
    subtitulo:
      "Para tu negocio o tu trabajo: lo que hacés, tus precios y un botón para que te escriban. Y si trabajás con turnos, que te reserven solos.",
    botonEjemplo: "Mirá un ejemplo",
    botonWhatsapp: "Hablame por WhatsApp",
    // Captura que se ve adentro del celular. Si el archivo no existe, aparece un recuadro "captura acá".
    captura: "/ejemplo-uñas.jpg",
    capturaAlt: "La página de ejemplo de Studio Mía vista en un celular",
    pieCaptura: "Studio Mía, una página de ejemplo con datos de muestra",
  },

  linkEjemplo: "https://landing-nails-mu.vercel.app",

  problemas: {
    titulo: "¿Te pasa esto?",
    // Los globitos son mensajes de ejemplo, como los que llegan por WhatsApp
    items: [
      {
        texto: "Te preguntan lo mismo 20 veces por día",
        burbujas: ["hola! cuánto sale?", "precio x favor", "me pasás info?"],
      },
      {
        texto: "Te buscan en Google y no aparecés",
        burbujas: ["dónde están ubicados?"],
      },
      {
        texto: "Tu trabajo queda perdido entre posteos",
        burbujas: ["tenés algo para mostrarme?"],
      },
    ],
    cierre: "Con tu página, eso se ordena.",
  },

  // Prueba de cómo reserva un cliente. Son datos de muestra: no se reserva nada.
  demoTurnos: {
    titulo: "Si trabajás con turnos, probá cómo te reservan",
    aclaracion: "Es una prueba: no se reserva nada.",
    servicio: "Elegí tu servicio",
    pasoDia: "elegí un día",
    pasoHora: "ahora un horario",
    pasoListo: "listo para reservar",
    sena: "$5.000",
    dias: ["Jue 20", "Vie 21", "Sáb 22"],
    horarios: ["10:00", "12:30", "15:00", "17:30"],
    boton: "Pagar la seña",
    listo: "Listo, turno reservado",
    turno: "Turno",
    listoDetalle: "La seña se pagó por Mercado Pago y vos ya lo ves en tu panel.",
    quiero: "Quiero esto",
    mensajeQuiero: "Hola Damián! Probé la reserva de turnos en tu página y quiero esto",
    otraVez: "Probar de nuevo",
  },

  ejemplos: {
    titulo: "Ejemplos",
    bajada: "El primer ejemplo es de uñas: así queda la página de un estudio. El estudio y sus datos son de muestra.",
    deslizar: "Deslizá para ver más",
    pestanas: [
      {
        nombre: "Uñas",
        disponible: true,
        link: "https://landing-nails-mu.vercel.app",
        linkTexto: "Abrir la página de ejemplo",
        capturas: [
          { src: "/ejemplo-uñas.jpg", alt: "Inicio de la página de ejemplo: foto grande y botón para reservar por WhatsApp", pie: "Lo primero que ven tus clientes" },
          { src: "/ejemplos/unas-precios.jpg", alt: "Lista de servicios con precios y duración", pie: "Tus precios, claros" },
          { src: "/ejemplos/unas-disenos.jpg", alt: "Galería de diseños de uñas del estudio de ejemplo", pie: "Tus trabajos, en grande" },
        ],
      },
      { nombre: "Más rubros", disponible: false, link: "", linkTexto: "", capturas: [] },
    ],
    muyPronto: "Muy pronto",
    muyProntoTitulo: "Más rubros, muy pronto",
    muyProntoTexto: "Estoy armando más ejemplos. Si tenés otro rubro, escribime igual y te cuento cómo quedaría la tuya.",
    muyProntoMensaje: "Hola Damián! Tengo otro rubro y quiero saber cómo quedaría mi página",
    muyProntoBoton: "Escribime",
  },

  pasos: {
    titulo: "Cómo funciona",
    items: [
      { titulo: "Me escribís y charlamos 10 minutos", texto: "Me contás qué hacés y cómo trabajás hoy." },
      { titulo: "Me pasás tus fotos y precios", texto: "Por WhatsApp, como te quede cómodo." },
      { titulo: "En una semana tenés tu página con tu link", texto: "Lo compartís en tus redes, por WhatsApp o donde quieras." },
    ],
    boton: "Arrancamos con el paso 1",
  },

  incluye: {
    titulo: "Qué vas a tener",
    items: [
      { icono: "negocio", texto: "Lo que hacés, contado claro" },
      { icono: "galeria", texto: "Tus trabajos o servicios, con fotos" },
      { icono: "precios", texto: "Precios claros" },
      { icono: "mapa", texto: "Tu ubicación con mapa" },
      { icono: "whatsapp", texto: "Botón de WhatsApp" },
      { icono: "google", texto: "Aparecés en Google" },
      { icono: "celu", texto: "Se ve bien en el celu" },
      { icono: "editar", texto: "La podés cambiar vos" },
    ],
  },

  precios: {
    titulo: "Precios",
    planes: [
      {
        nombre: "Tu página",
        destacado: false,
        etiqueta: "",
        unaVez: "$150.000",
        porMes: "$15.000",
        incluye: ["Lo que hacés y tus trabajos o servicios", "Precios", "Ubicación", "WhatsApp", "Instagram", "Dominio propio"],
        nota: "",
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
      },
    ],
    unaVezTexto: "una vez",
    porMesTexto: "por mes",
    boton: "Quiero este",
    condiciones: "Pagás la mitad para arrancar y la otra mitad cuando la ves terminada. Te hago factura.",
  },

  quienSoy: {
    titulo: "Quién soy",
    // Si el archivo no existe, aparece un círculo con la inicial.
    foto: "/damian.jpg",
    fotoAlt: "Damián",
    texto:
      "Soy Damián, de Avellaneda. Estudio Análisis de Sistemas y armo páginas para negocios y profesionales. Me encargo de todo: vos me pasás tus fotos y tu info, y yo te la dejo andando. Si algo no te gusta, lo cambiamos.",
  },

  // Cambiá a true cuando tengas opiniones reales. No inventes ninguna.
  mostrarOpiniones: false,
  opiniones: {
    titulo: "Lo que dicen",
    items: [] as { texto: string; nombre: string; detalle: string }[],
  },

  preguntas: {
    titulo: "Preguntas frecuentes",
    items: [
      { pregunta: "¿Tengo que saber de computación?", respuesta: "No, yo me encargo de todo." },
      { pregunta: "¿Cuánto tarda?", respuesta: "Una semana desde que me pasás las fotos y tu info." },
      { pregunta: "¿Qué es lo que pago por mes?", respuesta: "El dominio, que la página esté online y que te la mantenga." },
      { pregunta: "¿La puedo cambiar después?", respuesta: "Sí, precios y fotos los cambiás vos o me avisás." },
      { pregunta: "¿Y si después no la quiero más?", respuesta: "La das de baja cuando quieras y tu dominio te lo paso a tu nombre." },
      { pregunta: "¿Cómo se cobra la seña de los turnos?", respuesta: "Por Mercado Pago, la plata va directo a tu cuenta." },
    ],
  },

  contacto: {
    titulo: "¿Charlamos?",
    texto: "Escribime y en 10 minutos te cuento cómo quedaría la tuya.",
    botonWhatsapp: "Escribime por WhatsApp",
    botonInstagram: "Instagram",
  },

  pie: "Damián · Páginas web · Avellaneda, Buenos Aires",
};

export function linkWhatsapp(mensaje: string = sitio.mensajeWhatsapp) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
