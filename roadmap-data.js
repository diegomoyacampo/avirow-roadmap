/*
  DATOS DEL ROADMAP
  =================
  La web (index.html) lee este archivo al abrirse. Para actualizar el progreso
  solo se edita ESTE archivo; index.html no se toca.

  Está vacío a propósito: las versiones y tareas se cargan a partir de
  ROADMAP.md y de los capítulos de docs/gdd/. No hay nada inventado.

  ── proyecto ────────────────────────────────────────────────────────────────
    nombre               Nombre del juego.
    descripcion          Una frase (opcional).
    ultimaActualizacion  "AAAA-MM-DDTHH:MM". Cambiarla en cada actualización.
    repositorio          URL del repositorio (opcional). Si existe, los commits
                         de cada ficha se convierten en enlaces.
    siguiente            Id de la próxima tarea a empezar (opcional). Si no se
                         pone, la web elige la primera pendiente no bloqueada.
    disciplinas          { clave: "Nombre visible" } para las líneas cambiadas.

  ── versiones (en orden) ────────────────────────────────────────────────────
    id         "v0.1"
    nombre     "Primer paso jugable"
    objetivo   Qué podrá hacer el jugador cuando salga.
    estado     "publicada" | "siguiente" | "planificada"
               (solo una debería estar como "siguiente")

  ── tareas ──────────────────────────────────────────────────────────────────
    id            "T001"
    titulo        "Mapa de prueba"
    version       "v0.1"                 (id de una versión de arriba)
    estado        "pendiente" | "en_curso" | "hecha"
                  "Bloqueada" NO se escribe: la web la calcula sola cuando una
                  tarea pendiente depende de otra que no está hecha.
    capitulo      "docs/gdd/03"
    incluye       ["...", "..."]         (texto o lista)
    hechoCuando   "Criterio concreto y comprobable"
    verificacion  ["248 pruebas pasan", "Prueba manual: ..."]  (solo resultados reales)
    dependeDe     ["T001"]
    commits       [{ hash: "a41c9e2", fecha: "2026-10-12T10:12", mensaje: "T001 ..." }]
    inicio        "2026-10-12T09:40"
    fin           "2026-10-12T10:15"
    minutos       35                     (si falta, se calcula con inicio y fin)
    lineas        { pruebas: 120, interfaz: 80, servidor: 60 }
    capturas      ["evidence/T001-1.png", { src: "evidence/T001-2.png", texto: "En móvil" }]

  Ejemplo de tarea terminada:
    { id: "T001", titulo: "Mapa de prueba", version: "v0.1", estado: "hecha",
      capitulo: "docs/gdd/03",
      incluye: ["Terreno con límites", "Punto de aparición"],
      hechoCuando: "Un jugador aparece y no puede salirse del mapa.",
      verificacion: ["12 pruebas automáticas pasan"],
      dependeDe: [],
      commits: [{ hash: "a41c9e2", fecha: "2026-10-12T10:12", mensaje: "T001 mapa de prueba" }],
      inicio: "2026-10-12T09:40", fin: "2026-10-12T10:15", minutos: 35,
      lineas: { pruebas: 120, contenido: 340 },
      capturas: ["evidence/T001-1.png"] }

  Cuidado al editar: cada objeto va separado por comas y las comillas deben
  cerrarse. Si la web muestra "No se pueden leer los datos", hay un error de
  escritura en este archivo.
*/
window.ROADMAP = {
  proyecto: {
    nombre: "Mi juego",
    descripcion: "",
    ultimaActualizacion: "2026-10-12T21:45",
    repositorio: "",
    siguiente: "",
    disciplinas: {
      pruebas: "Pruebas",
      interfaz: "Interfaz",
      contenido: "Contenido",
      servidor: "Servidor"
    }
  },
  versiones: [],
  tareas: []
};
