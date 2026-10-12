/*
  DATOS DEL ROADMAP
  =================
  La web (index.html) lee este archivo al abrirse. Para actualizar el progreso
  solo se edita ESTE archivo; index.html no se toca.

  Las versiones y tareas salen de Avirow/docs/ROADMAP.md, y las fechas,
  commits y líneas, del historial de git de Avirow. Se actualiza con
  Avirow/herramientas/roadmap.mjs. No hay nada inventado.

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
  "proyecto": {
    "nombre": "Avirow",
    "descripcion": "Universo virtual online en el navegador, en ordenador y en móvil.",
    "ultimaActualizacion": "2026-10-13T01:39",
    "repositorio": "https://github.com/diegomoyacampo/avirow",
    "siguiente": "",
    "disciplinas": {
      "interfaz": "Juego (navegador)",
      "servidor": "Servidor",
      "reglas": "Reglas compartidas",
      "pruebas": "Pruebas",
      "documentacion": "Documentación",
      "herramientas": "Herramientas"
    }
  },
  "versiones": [
    {
      "id": "v0.1",
      "nombre": "Primeros pasos en Nexo",
      "objetivo": "Abrir el juego en el navegador (ordenador o móvil) y pasear con un avatar provisional por la plaza de Nexo.",
      "estado": "publicada"
    },
    {
      "id": "v0.2",
      "nombre": "Ya no estás solo",
      "objetivo": "Varios jugadores en Nexo a la vez, viéndose moverse en tiempo real, con su nombre encima y sus gestos.",
      "estado": "siguiente"
    },
    {
      "id": "v0.3",
      "nombre": "Habla con todos",
      "objetivo": "Chat con filtro en Nexo, con mensajes a quien está cerca o a toda la copia, y bocadillos encima del avatar.",
      "estado": "planificada"
    },
    {
      "id": "v0.4",
      "nombre": "Tu cuenta, tu avatar",
      "objetivo": "Crear una cuenta con usuario y contraseña, montarse el avatar por piezas y que todo quede guardado.",
      "estado": "planificada"
    },
    {
      "id": "v0.5",
      "nombre": "Primer viaje",
      "objetivo": "Cruzar un portal de Nexo y llegar a Pista Prisma por un túnel de luz, sin pantallas de carga, aunque cada mundo vaya en su propio servidor.",
      "estado": "planificada"
    },
    {
      "id": "v0.6",
      "nombre": "A correr",
      "objetivo": "Carreras de deslizadores en Pista Prisma contra otros jugadores, con tres vueltas, turbos y clasificación.",
      "estado": "planificada"
    },
    {
      "id": "v0.7",
      "nombre": "Sube de nivel",
      "objetivo": "Ganar experiencia y créditos al jugar, subir de nivel, oír el juego y ajustar sonido, gráficos y teclas.",
      "estado": "planificada"
    },
    {
      "id": "v0.8",
      "nombre": "Arena Voltio",
      "objetivo": "Batallas con armas de energía, todos contra todos y por equipos, justas y sin sangre.",
      "estado": "planificada"
    },
    {
      "id": "v0.9",
      "nombre": "Amigos",
      "objetivo": "Hacer amigos, ir en grupo, hablar en privado y apartar a quien moleste.",
      "estado": "planificada"
    },
    {
      "id": "v0.10",
      "nombre": "Tienda y misiones",
      "objetivo": "Gastar créditos en cosméticos en la tienda de Nexo y cumplir misiones diarias.",
      "estado": "planificada"
    },
    {
      "id": "v0.11",
      "nombre": "Club Eco",
      "objetivo": "Un sitio para quedar con amigos sin competir: discoteca de neón con música, baile y un juego de ritmo.",
      "estado": "planificada"
    },
    {
      "id": "v0.12",
      "nombre": "Ruinas de Cristal",
      "objetivo": "Un mundo grande para explorar, con saltos, puzles sencillos y coleccionables.",
      "estado": "planificada"
    },
    {
      "id": "v1.0",
      "nombre": "Avirow 1.0",
      "objetivo": "El juego completo del capítulo 01: todo lo anterior, un segundo circuito, buen rendimiento en móvil y listo para publicarse en internet.",
      "estado": "planificada"
    }
  ],
  "tareas": [
    {
      "id": "T001",
      "titulo": "Base del proyecto",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/12",
      "incluye": [
        "Carpetas apps/cliente, apps/servidor y paquetes/compartido, todo en TypeScript.",
        "Un comando para arrancar el juego (npm run dev) y otro para las pruebas (npm test).",
        "Pruebas automáticas (Vitest) y pruebas en navegador (Playwright).",
        "Lista de archivos que nunca se suben (datos de jugadores, claves, contraseñas)."
      ],
      "hechoCuando": "npm run dev abre una página con una escena 3D (fondo violeta de noche) y npm test y npm run e2e pasan.",
      "verificacion": [
        "Vitest: 5 pruebas automáticas pasan (paleta de colores y servidor).",
        "TypeScript: la comprobación de tipos no da errores en las tres carpetas ni en las pruebas.",
        "Playwright con Chrome: la escena 3D se dibuja con WebGL y fondo #140a2e, sin errores, en ordenador (1280×720) y en móvil (Pixel 7 táctil).",
        "Prueba manual: el servidor arranca con npm run start y responde en /salud.",
        "Placeholder: aro de neón que gira; se sustituye por la plaza de Nexo en T002."
      ],
      "dependeDe": [],
      "commits": [
        {
          "hash": "cd7df55",
          "fecha": "2026-10-13T01:05",
          "mensaje": "T001 en curso"
        },
        {
          "hash": "e04809b",
          "fecha": "2026-10-13T01:09",
          "mensaje": "T001 Base del proyecto"
        }
      ],
      "inicio": "2026-10-13T01:05",
      "fin": "2026-10-13T01:09",
      "lineas": {
        "documentacion": 4,
        "herramientas": 129,
        "interfaz": 149,
        "servidor": 44,
        "pruebas": 100,
        "reglas": 45
      },
      "capturas": [
        {
          "src": "evidence/T001-1.png",
          "texto": "Ordenador: escena 3D con fondo violeta de noche"
        },
        {
          "src": "evidence/T001-2.png",
          "texto": "Móvil"
        }
      ],
      "minutos": 4
    },
    {
      "id": "T002",
      "titulo": "Plaza de Nexo provisional",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/04, docs/gdd/11",
      "incluye": [
        "Suelo con rejilla de neón, cielo de atardecer, edificios de formas sencillas y límites.",
        "Portales decorativos todavía apagados (placeholder) y punto de aparición.",
        "El plano de la plaza (suelo, paredes, límites) definido en un solo sitio y compartido por el juego y el servidor."
      ],
      "hechoCuando": "La plaza se ve con el estilo neón del capítulo 11 y las pruebas comprueban que el plano tiene suelo, límites y punto de aparición.",
      "verificacion": [
        "Vitest: 11 pruebas automáticas pasan; 6 nuevas comprueban el plano de Nexo (límites de más de 50 m, aparición libre y dentro, todo dentro de los límites, un portal a cada uno de los otros 4 mundos, huecos de portal libres, bancos y edificios).",
        "TypeScript: sin errores.",
        "Playwright con Chrome: Nexo se dibuja con 4 portales, 4 edificios, 8 bancos y el pedestal, sin errores en la página, en ordenador y en móvil. Repetida 3 veces seguidas sin fallos.",
        "Revisión visual de las capturas: rejilla de neón, cielo de atardecer con sol a franjas, edificios con bordes de neón.",
        "Placeholder: formas de la plaza, portales apagados y cámara que gira sola (se sustituye en T004)."
      ],
      "dependeDe": [
        "T001"
      ],
      "commits": [
        {
          "hash": "5604e32",
          "fecha": "2026-10-13T01:13",
          "mensaje": "T002 Plaza de Nexo provisional"
        }
      ],
      "inicio": "2026-10-13T01:09",
      "fin": "2026-10-13T01:13",
      "lineas": {
        "interfaz": 480,
        "documentacion": 2,
        "pruebas": 77,
        "reglas": 189
      },
      "capturas": [
        {
          "src": "evidence/T002-1.png",
          "texto": "Ordenador: la plaza de Nexo"
        },
        {
          "src": "evidence/T002-2.png",
          "texto": "Móvil: el sol del atardecer y el portal de Pista Prisma al fondo"
        }
      ],
      "minutos": 4
    },
    {
      "id": "T003",
      "titulo": "Avatar provisional y movimiento a pie",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/02",
      "incluye": [
        "Figura sencilla como avatar (placeholder hasta T016).",
        "Andar con WASD o flechas, correr con Mayús, saltar con Espacio.",
        "Choques con paredes y límites: no se atraviesa nada ni se sale del mapa.",
        "Las reglas de movimiento en código compartido, con valores en un solo sitio."
      ],
      "hechoCuando": "En el navegador el avatar anda, corre y salta, y no atraviesa paredes ni sale de la plaza.",
      "verificacion": [
        "Vitest: 26 pruebas automáticas pasan; 15 nuevas del movimiento (andar hacia donde mira la cámara, correr más rápido, diagonal sin ventaja, parar sin patinar, salto de 1,1-1,8 m, sin doble salto, no atraviesa paredes, resbala por ellas, subirse a un banco, no sale de los límites, choca con el pedestal de Nexo, gira hacia donde anda, mismo resultado con las mismas teclas, ignora entradas imposibles).",
        "TypeScript: sin errores.",
        "Playwright con Chrome (ordenador): con W anda más de 3 m en 1 s; corriendo con Mayús se para contra el pedestal (z entre 2,35 y 2,5, sin atravesarlo); Espacio salta más de 0,5 m y vuelve al suelo; la flecha izquierda lo mueve a la izquierda. Sin errores en la página.",
        "Las pruebas de T001 y T002 siguen pasando.",
        "Placeholder: figura provisional del avatar (hasta T016), balanceo al andar y cámara fija mirando al norte (hasta T004)."
      ],
      "dependeDe": [
        "T002"
      ],
      "commits": [
        {
          "hash": "abde5bd",
          "fecha": "2026-10-13T01:17",
          "mensaje": "T003 Avatar provisional y movimiento a pie"
        }
      ],
      "inicio": "2026-10-13T01:14",
      "fin": "2026-10-13T01:17",
      "lineas": {
        "interfaz": 202,
        "documentacion": 2,
        "pruebas": 198,
        "reglas": 198
      },
      "capturas": [
        {
          "src": "evidence/T003-1.png",
          "texto": "Andando hacia el pedestal"
        },
        {
          "src": "evidence/T003-2.png",
          "texto": "Saltando delante del pedestal"
        }
      ],
      "minutos": 3
    },
    {
      "id": "T004",
      "titulo": "Cámara en tercera persona",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/02",
      "incluye": [
        "Cámara detrás del avatar y un poco por encima; se gira con el ratón.",
        "El avatar avanza hacia donde mira la cámara.",
        "Si una pared se pone en medio, la cámara se acerca y no la atraviesa."
      ],
      "hechoCuando": "Mover el ratón gira la vista; pegado a una pared, la cámara no se mete dentro.",
      "verificacion": [
        "Vitest: 37 pruebas automáticas pasan; 11 nuevas (rayos contra cajas y cámara: distancia normal detrás y por encima, se acerca ante una pared y queda por delante, nunca bajo el suelo, ratón a la derecha gira a la derecha, límites de inclinación, se acerca de golpe y se aleja despacio).",
        "TypeScript: sin errores.",
        "Playwright con Chrome (ordenador): arrastrar 400 px gira la vista 1 radián y con W el avatar avanza hacia donde mira la cámara (desvío menor de 0,15 rad).",
        "Playwright: con el avatar pegado al edificio del noreste y la cámara girada hacia la pared, la cámara queda fuera del edificio (z > -22) a menos de 1 m del avatar, que se oculta para no tapar la vista. Repetida 2 veces sin fallos.",
        "Problema encontrado y resuelto: la tecla Esc simulada por las pruebas no suelta el ratón capturado (la de verdad sí); la prueba lo suelta como el navegador.",
        "Las pruebas de T001 a T003 siguen pasando."
      ],
      "dependeDe": [
        "T003"
      ],
      "commits": [
        {
          "hash": "bfee36d",
          "fecha": "2026-10-13T01:25",
          "mensaje": "T004 Cámara en tercera persona"
        }
      ],
      "inicio": "2026-10-13T01:18",
      "fin": "2026-10-13T01:25",
      "lineas": {
        "pruebas": 172,
        "interfaz": 128,
        "documentacion": 2,
        "reglas": 66
      },
      "capturas": [
        {
          "src": "evidence/T004-1.png",
          "texto": "Vista girada con el ratón: el avatar va hacia donde mira la cámara"
        },
        {
          "src": "evidence/T004-2.png",
          "texto": "Contra la pared del edificio: la cámara se acerca y oculta el avatar en vez de meterse dentro"
        }
      ],
      "minutos": 7
    },
    {
      "id": "T005",
      "titulo": "Controles en móvil",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/02",
      "incluye": [
        "Joystick virtual a la izquierda (al borde, corre).",
        "Arrastrar por la mitad derecha para mirar.",
        "Botón de saltar del tamaño del pulgar, sin tapar el centro."
      ],
      "hechoCuando": "En tamaño de móvil con pantalla táctil, el joystick mueve al avatar, arrastrar gira la cámara y el botón hace saltar.",
      "verificacion": [
        "Playwright con Chrome en tamaño de móvil (Pixel 7, pantalla táctil) con toques reales del navegador:",
        "Joystick y botón de saltar visibles, de 56 px o más y sin tapar el centro de la pantalla.",
        "Joystick a medio recorrido: el avatar anda hacia delante (entre 1,8 y 4 m en 1 s); al borde, corre (más de 3,2 m en 0,5 s).",
        "Con el pulgar en el joystick, un segundo dedo arrastra 100 px por la derecha y la vista gira más de 0,4 rad; al soltar, el avatar se para.",
        "El botón de saltar eleva al avatar más de 0,5 m.",
        "En tamaño de ordenador no aparecen los controles táctiles.",
        "Vitest: 37 pruebas pasan. TypeScript: sin errores. Las pruebas de T001 a T004 siguen pasando.",
        "Mejora añadida: en pantallas verticales la cámara abre el ángulo (75° en vez de 60°) para no ver solo el avatar."
      ],
      "dependeDe": [
        "T004"
      ],
      "commits": [
        {
          "hash": "53c51d5",
          "fecha": "2026-10-13T01:28",
          "mensaje": "T005 Controles en móvil"
        }
      ],
      "inicio": "2026-10-13T01:26",
      "fin": "2026-10-13T01:28",
      "lineas": {
        "interfaz": 255,
        "documentacion": 2,
        "pruebas": 90,
        "reglas": 2
      },
      "capturas": [
        {
          "src": "evidence/T005-1.png",
          "texto": "Móvil: joystick al borde (corriendo) y botón de saltar"
        },
        {
          "src": "evidence/T005-2.png",
          "texto": "Móvil: saltando tras girar la vista con el dedo"
        }
      ],
      "minutos": 2
    },
    {
      "id": "T006",
      "titulo": "Portada e interfaz mínima",
      "version": "v0.1",
      "estado": "hecha",
      "capitulo": "docs/gdd/11",
      "incluye": [
        "Portada con el nombre Avirow y botón Entrar (placeholder hasta las cuentas de T015).",
        "En pantalla: nombre del mundo y botón de menú.",
        "Menú con Esc o botón: Volver al juego y Salir a la portada."
      ],
      "hechoCuando": "Se abre la portada, Entrar lleva a Nexo con su nombre arriba, y Esc abre y cierra el menú.",
      "verificacion": [
        "Playwright con Chrome (ordenador): la portada enseña Avirow y Entrar, sin barra de juego, y las teclas no mueven al avatar; Entrar lleva a Nexo con su nombre arriba, botón de menú y ayuda de controles; Esc abre el menú y con él abierto el avatar no se mueve; Esc lo cierra; Salir a la portada y volver a entrar funciona.",
        "Playwright (móvil): los controles táctiles solo salen mientras se juega; botón de menú de 48 px o más; el menú oculta el joystick y Volver al juego lo devuelve; sin ayuda de teclado en móvil.",
        "Fallo intermitente encontrado y corregido: en máquinas lentas el juego iba a cámara lenta (máximo 0,1 s por imagen). Ahora admite hasta 0,25 s y las pruebas miden con el tiempo de la simulación; todas las pruebas en navegador pasaron 3 veces seguidas (33 de 33).",
        "Vitest: 37 pruebas pasan. TypeScript: sin errores. Las pruebas de T001 a T005 se adaptaron a la portada y siguen pasando.",
        "Placeholder: la portada solo tiene Entrar hasta las cuentas (T015)."
      ],
      "dependeDe": [
        "T005"
      ],
      "commits": [
        {
          "hash": "a392257",
          "fecha": "2026-10-13T01:39",
          "mensaje": "T006 Portada e interfaz mínima"
        }
      ],
      "inicio": "2026-10-13T01:29",
      "fin": "2026-10-13T01:39",
      "lineas": {
        "interfaz": 391,
        "documentacion": 2,
        "pruebas": 251
      },
      "capturas": [
        {
          "src": "evidence/T006-1.png",
          "texto": "Portada"
        },
        {
          "src": "evidence/T006-2.png",
          "texto": "Jugando: nombre del mundo, botón de menú y ayuda de controles"
        },
        {
          "src": "evidence/T006-3.png",
          "texto": "Menú abierto con Esc"
        },
        {
          "src": "evidence/T006-4.png",
          "texto": "Menú en móvil"
        }
      ],
      "minutos": 10
    },
    {
      "id": "T007",
      "titulo": "Servidor de Nexo",
      "version": "v0.2",
      "estado": "en_curso",
      "capitulo": "docs/gdd/04, docs/gdd/12",
      "incluye": [
        "Servidor en tiempo real (Colyseus) con la sala de Nexo.",
        "Al entrar, cada jugador recibe un nombre de invitado (placeholder hasta T015).",
        "Copias de hasta 50 jugadores: si una se llena, se abre otra."
      ],
      "hechoCuando": "Dos navegadores entran en la misma copia; con el límite bajado a 2 para la prueba, un tercero entra en una copia nueva.",
      "verificacion": [],
      "dependeDe": [
        "T006"
      ],
      "commits": [],
      "inicio": "2026-10-13T01:39",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T008",
      "titulo": "El servidor decide el movimiento",
      "version": "v0.2",
      "estado": "pendiente",
      "capitulo": "docs/gdd/12, docs/gdd/02",
      "incluye": [
        "El navegador envía las teclas; el servidor mueve al avatar con las mismas reglas compartidas.",
        "El navegador se adelanta para que el avatar responda al instante y se corrige si el servidor dice otra cosa."
      ],
      "hechoCuando": "Con las mismas teclas, navegador y servidor llegan a la misma posición; un jugador que envía datos falsos no puede teletransportarse.",
      "verificacion": [],
      "dependeDe": [
        "T007"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T009",
      "titulo": "Ver a los demás jugadores",
      "version": "v0.2",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Los demás avatares se mueven suaves, sin saltos.",
        "Nombre encima de cada avatar.",
        "Aparecen y desaparecen al entrar y salir."
      ],
      "hechoCuando": "Con dos navegadores, cada uno ve al otro moverse con su nombre.",
      "verificacion": [],
      "dependeDe": [
        "T008"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T010",
      "titulo": "Gestos",
      "version": "v0.2",
      "estado": "pendiente",
      "capitulo": "docs/gdd/03, docs/gdd/02",
      "incluye": [
        "Saludar, bailar, aplaudir, sentarse y señalar (tecla G o botón de gestos).",
        "Animaciones sencillas (placeholder) que ven todos los de la copia."
      ],
      "hechoCuando": "Un jugador hace un gesto y el otro navegador lo ve.",
      "verificacion": [],
      "dependeDe": [
        "T009"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T011",
      "titulo": "Chat de cerca y de mundo",
      "version": "v0.3",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Ventana de chat (Intro o botón de chat).",
        "Canal **cerca** (quien está a tu alrededor) y canal **mundo** (toda la copia).",
        "Bocadillo encima del avatar durante unos segundos."
      ],
      "hechoCuando": "Dos navegadores se escriben por los dos canales; un tercero lejos no recibe los mensajes de \"cerca\".",
      "verificacion": [],
      "dependeDe": [
        "T010"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T012",
      "titulo": "Filtro y límite de mensajes",
      "version": "v0.3",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Tapa palabrotas e insultos (lista de palabras placeholder, ampliable).",
        "Tapa teléfonos, correos y direcciones.",
        "Límite de mensajes seguidos, con aviso.",
        "El mismo filtro sirve para los nombres."
      ],
      "hechoCuando": "Las palabrotas, teléfonos, correos y direcciones salen tapados y enviar muchos mensajes seguidos se frena con un aviso.",
      "verificacion": [],
      "dependeDe": [
        "T011"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T013",
      "titulo": "Perfil y silenciar",
      "version": "v0.3",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Al pulsar sobre un avatar se abre su perfil (nombre y nivel).",
        "Botón Silenciar: dejas de ver sus mensajes durante esta sesión."
      ],
      "hechoCuando": "Después de silenciar a alguien, sus mensajes ya no aparecen.",
      "verificacion": [],
      "dependeDe": [
        "T012"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T014",
      "titulo": "Cuentas y base de datos en el servidor",
      "version": "v0.4",
      "estado": "pendiente",
      "capitulo": "docs/gdd/10",
      "incluye": [
        "Base de datos SQLite (fuera de GitHub: tiene datos de jugadores).",
        "Crear cuenta: usuario único y filtrado, contraseña de 8 o más caracteres guardada cifrada, edad de 13 o más.",
        "Entrar, espera tras varios intentos fallidos, sesión que caduca y \"Recordarme\"."
      ],
      "hechoCuando": "Se puede crear una cuenta y entrar; una contraseña equivocada falla; tras varios intentos hay que esperar; la contraseña no se puede leer en la base de datos.",
      "verificacion": [],
      "dependeDe": [
        "T013"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T015",
      "titulo": "Pantallas de cuenta",
      "version": "v0.4",
      "estado": "pendiente",
      "capitulo": "docs/gdd/10, docs/gdd/11",
      "incluye": [
        "Portada con Crear cuenta y Entrar, con errores claros.",
        "El nombre del avatar es el usuario; desaparecen los invitados.",
        "El servidor no deja entrar a un mundo sin sesión."
      ],
      "hechoCuando": "En el navegador se crea una cuenta, se entra, se recarga y se sigue dentro con \"Recordarme\"; sin sesión no se entra al mundo.",
      "verificacion": [],
      "dependeDe": [
        "T014"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T016",
      "titulo": "Avatar por piezas",
      "version": "v0.4",
      "estado": "pendiente",
      "capitulo": "docs/gdd/03",
      "incluye": [
        "Cuerpo (3 complexiones y tono de piel), cabeza y cara, pelo (6-8), parte de arriba, parte de abajo, calzado y accesorios.",
        "Colores por pieza y detalles de neón; proporciones humanas simplificadas.",
        "Todas las piezas son placeholder hechas con formas sencillas."
      ],
      "hechoCuando": "Cualquier combinación válida se monta sin errores y en Nexo se ven avatares distintos.",
      "verificacion": [],
      "dependeDe": [
        "T015"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T017",
      "titulo": "Editor de avatar",
      "version": "v0.4",
      "estado": "pendiente",
      "capitulo": "docs/gdd/03",
      "incluye": [
        "Obligatorio la primera vez y accesible desde el menú.",
        "Avatar girando, botones para cada pieza y su color, botón Aleatorio.",
        "Se guarda en la cuenta y los demás lo ven."
      ],
      "hechoCuando": "Crear cuenta → editor → guardar → aparecer en Nexo con ese aspecto; otro navegador lo ve igual; al recargar se conserva.",
      "verificacion": [],
      "dependeDe": [
        "T016"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T018",
      "titulo": "Permiso de los padres y recuperar la contraseña",
      "version": "v0.4",
      "estado": "pendiente",
      "capitulo": "docs/gdd/10",
      "incluye": [
        "Con 13 años se pide el correo del padre, madre o tutor; sin su permiso no hay chat.",
        "Correo opcional para recuperar la contraseña.",
        "Envío de correos placeholder: se guardan en una carpeta del ordenador (fuera de GitHub) en vez de enviarse, hasta elegir un servicio de correo."
      ],
      "hechoCuando": "Una cuenta de 13 años no puede chatear hasta que se abre el enlace de permiso del correo guardado; recuperar la contraseña con el enlace funciona.",
      "verificacion": [],
      "dependeDe": [
        "T017"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T019",
      "titulo": "Cada mundo en su propio servidor",
      "version": "v0.5",
      "estado": "pendiente",
      "capitulo": "docs/gdd/05, docs/gdd/12",
      "incluye": [
        "Nexo y Pista Prisma funcionan en servidores distintos.",
        "Servidor central para cuentas y lista de mundos con su dirección.",
        "Saber cuánta gente hay en cada mundo."
      ],
      "hechoCuando": "Nexo y Pista Prisma arrancan por separado y se puede preguntar cuánta gente hay en cada uno.",
      "verificacion": [],
      "dependeDe": [
        "T018"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T020",
      "titulo": "Pista Prisma, zona de paseo",
      "version": "v0.5",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04, docs/gdd/07",
      "incluye": [
        "Mundo con colores arcoíris, punto de llegada y portal de vuelta a Nexo.",
        "El circuito se ve de fondo (placeholder; las carreras llegan en v0.6)."
      ],
      "hechoCuando": "Se puede estar y pasear en Pista Prisma con otros jugadores.",
      "verificacion": [],
      "dependeDe": [
        "T019"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T021",
      "titulo": "Portales y túnel de viaje",
      "version": "v0.5",
      "estado": "pendiente",
      "capitulo": "docs/gdd/05",
      "incluye": [
        "El portal enseña el nombre del mundo y cuánta gente hay.",
        "Al acercarse, el destino se prepara sin que se note.",
        "Al cruzarlo, túnel de luz de 2-3 segundos con sonido (placeholder), cambio de servidor y llegada al punto de llegada."
      ],
      "hechoCuando": "Cruzar el portal de Nexo lleva a Pista Prisma y volver, sin ninguna pantalla de \"Cargando\".",
      "verificacion": [],
      "dependeDe": [
        "T020"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T022",
      "titulo": "Si el viaje falla",
      "version": "v0.5",
      "estado": "pendiente",
      "capitulo": "docs/gdd/05",
      "incluye": [
        "Si el destino no responde, vuelta al mundo de salida con un aviso claro.",
        "Si se corta la conexión, al volver se aparece en Nexo con el progreso intacto."
      ],
      "hechoCuando": "Con el servidor de destino apagado se ve el aviso y se vuelve; al cortar la conexión, el juego vuelve a Nexo.",
      "verificacion": [],
      "dependeDe": [
        "T021"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T023",
      "titulo": "Deslizador y conducción",
      "version": "v0.6",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07",
      "incluye": [
        "Vehículo flotante de formas sencillas con luces del color del jugador (placeholder).",
        "Acelerar, frenar, girar y derrapar; reglas compartidas y el servidor manda."
      ],
      "hechoCuando": "Se puede conducir con suavidad y las pruebas de conducción pasan.",
      "verificacion": [],
      "dependeDe": [
        "T022"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T024",
      "titulo": "Circuito 1",
      "version": "v0.6",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07",
      "incluye": [
        "Circuito de neón con curvas inclinadas, placas de turbo y un atajo arriesgado.",
        "Puntos de control y vueltas.",
        "Si te sales, reapareces en el último punto de control en 2 segundos.",
        "Los golpes empujan pero no destruyen."
      ],
      "hechoCuando": "Una vuelta solo cuenta pasando por todos los puntos de control, caerse hace reaparecer en 2 segundos y el turbo acelera.",
      "verificacion": [],
      "dependeDe": [
        "T023"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T025",
      "titulo": "Partida de carrera",
      "version": "v0.6",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07",
      "incluye": [
        "Zona de salida en Pista Prisma para apuntarse.",
        "Sale con 8 corredores o a los 30 segundos; solo, contra el reloj.",
        "Cuenta atrás 3-2-1, tres vueltas, el servidor decide posiciones y tiempos.",
        "Clasificación final y vuelta a Pista Prisma."
      ],
      "hechoCuando": "Dos navegadores se apuntan, corren y ven la misma clasificación; uno solo corre contra el reloj tras la espera.",
      "verificacion": [],
      "dependeDe": [
        "T024"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T026",
      "titulo": "Controles e interfaz de carrera",
      "version": "v0.6",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07, docs/gdd/11",
      "incluye": [
        "En móvil: acelera solo, joystick para girar, botones de frenar y derrapar.",
        "En pantalla: posición, vuelta y velocidad."
      ],
      "hechoCuando": "Se puede correr entera una carrera en móvil y en ordenador viendo posición, vuelta y velocidad.",
      "verificacion": [],
      "dependeDe": [
        "T025"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T027",
      "titulo": "Nivel, experiencia y créditos",
      "version": "v0.7",
      "estado": "pendiente",
      "capitulo": "docs/gdd/09",
      "incluye": [
        "Hoja de balance con los números (placeholder hasta ajustarlos con pruebas).",
        "Nivel, experiencia y créditos guardados en el servidor.",
        "Nivel y créditos en pantalla."
      ],
      "hechoCuando": "La experiencia sube el nivel según la hoja y no se pueden conseguir créditos haciendo trampas desde el navegador.",
      "verificacion": [],
      "dependeDe": [
        "T026"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T028",
      "titulo": "Recompensas de carreras y guardado automático",
      "version": "v0.7",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07, docs/gdd/09, docs/gdd/10",
      "incluye": [
        "Créditos y experiencia según el puesto, y algo por terminar.",
        "Pantalla de recompensas al acabar.",
        "Guardado al terminar, cada poco tiempo y al salir."
      ],
      "hechoCuando": "Terminar una carrera suma lo que dice la hoja y se conserva al recargar.",
      "verificacion": [],
      "dependeDe": [
        "T027"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T029",
      "titulo": "Gestos por nivel, inventario y estadísticas",
      "version": "v0.7",
      "estado": "pendiente",
      "capitulo": "docs/gdd/03, docs/gdd/09",
      "incluye": [
        "Gestos nuevos que se desbloquean al subir de nivel.",
        "Inventario guardado (gestos y piezas) y estadísticas (carreras y victorias)."
      ],
      "hechoCuando": "Al subir de nivel aparece un gesto nuevo en el menú de gestos.",
      "verificacion": [],
      "dependeDe": [
        "T028"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T030",
      "titulo": "Sonido y música",
      "version": "v0.7",
      "estado": "pendiente",
      "capitulo": "docs/gdd/11",
      "incluye": [
        "Un sonido para cada acción: saltar, turbo, recompensa, viaje.",
        "Música electrónica retro distinta en cada mundo.",
        "Todo placeholder hecho por el propio juego, con una lista para sustituirlo por música libre de derechos."
      ],
      "hechoCuando": "Cada acción suena y cada mundo tiene su música.",
      "verificacion": [],
      "dependeDe": [
        "T029"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T031",
      "titulo": "Ajustes",
      "version": "v0.7",
      "estado": "pendiente",
      "capitulo": "docs/gdd/11, docs/gdd/02",
      "incluye": [
        "Volumen, calidad gráfica (baja, media, alta) y sensibilidad de la cámara.",
        "Cambiar las teclas desde el menú.",
        "Los ajustes se recuerdan."
      ],
      "hechoCuando": "Cambiar cada ajuste tiene efecto y se mantiene al recargar.",
      "verificacion": [],
      "dependeDe": [
        "T030"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T032",
      "titulo": "Arena Voltio",
      "version": "v0.8",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04, docs/gdd/08",
      "incluye": [
        "Mundo en rojo y ámbar con su propio servidor y portal desde Nexo.",
        "Zona para apuntarse y una arena cerrada con coberturas (placeholder)."
      ],
      "hechoCuando": "Se viaja de Nexo a Arena Voltio y se puede pasear.",
      "verificacion": [],
      "dependeDe": [
        "T031"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T033",
      "titulo": "Armas y disparos",
      "version": "v0.8",
      "estado": "pendiente",
      "capitulo": "docs/gdd/08",
      "incluye": [
        "Pistola de pulsos, rifle de energía, dispersor y granada de luz.",
        "Cámara sobre el hombro, mirilla, recargar y cambiar de arma.",
        "El servidor decide quién acierta a quién."
      ],
      "hechoCuando": "Cada arma hace el daño y tiene el alcance de la hoja de balance y los disparos se ven en los dos navegadores.",
      "verificacion": [],
      "dependeDe": [
        "T032"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T034",
      "titulo": "Vida, derrotas y reaparición",
      "version": "v0.8",
      "estado": "pendiente",
      "capitulo": "docs/gdd/08",
      "incluye": [
        "Vida, chispas al recibir impactos y derrotados que se deshacen en píxeles de luz.",
        "Reaparecer a los 3 segundos en un punto seguro; la granada aturde.",
        "Ayuda suave al apuntar en móvil."
      ],
      "hechoCuando": "Un jugador derrotado reaparece a los 3 segundos y no pierde nada.",
      "verificacion": [],
      "dependeDe": [
        "T033"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T035",
      "titulo": "Partidas: todos contra todos y por equipos",
      "version": "v0.8",
      "estado": "pendiente",
      "capitulo": "docs/gdd/08, docs/gdd/09",
      "incluye": [
        "Apuntarse, hasta 12 jugadores, 8 minutos, armas elegidas al empezar.",
        "Marcador, tiempo, ganador y recompensas (extra para el equipo ganador).",
        "En pantalla: vida, munición, marcador y tiempo."
      ],
      "hechoCuando": "Una partida de prueba con dos navegadores acaba con el marcador correcto y las recompensas guardadas.",
      "verificacion": [],
      "dependeDe": [
        "T034"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T036",
      "titulo": "Amigos",
      "version": "v0.9",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06, docs/gdd/04",
      "incluye": [
        "Agregar y quitar amigos, ver si están conectados y en qué mundo.",
        "Botón Unirse: te lleva al mundo y la copia de tu amigo si hay sitio.",
        "Al viajar, entras en la copia de tus amigos si hay sitio; el portal enseña si hay amigos dentro."
      ],
      "hechoCuando": "Dos cuentas se hacen amigas, cada una ve dónde está la otra y Unirse lleva a su misma copia.",
      "verificacion": [],
      "dependeDe": [
        "T035"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T037",
      "titulo": "Chat privado, bloquear y reportar",
      "version": "v0.9",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Canal privado con amigos.",
        "Bloquear: no ves sus mensajes y no puede invitarte.",
        "Reportar: se guarda el motivo y los últimos mensajes."
      ],
      "hechoCuando": "Los privados solo los ve el amigo; un bloqueado deja de verse en el chat; un reporte queda guardado.",
      "verificacion": [],
      "dependeDe": [
        "T036"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T038",
      "titulo": "Grupos",
      "version": "v0.9",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Grupos de hasta 4 jugadores con invitación.",
        "Viajar juntos por los portales y entrar juntos en carreras y batallas."
      ],
      "hechoCuando": "Un grupo de dos cruza un portal y llega a la misma copia, y se apunta junto a una carrera.",
      "verificacion": [],
      "dependeDe": [
        "T037"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T039",
      "titulo": "Página de administración",
      "version": "v0.9",
      "estado": "pendiente",
      "capitulo": "docs/gdd/06",
      "incluye": [
        "Página para ver reportes y suspender cuentas.",
        "Solo entra la cuenta administradora, que se configura fuera de GitHub."
      ],
      "hechoCuando": "La cuenta administradora ve un reporte y suspende una cuenta, que ya no puede entrar; una cuenta normal no puede abrir la página.",
      "verificacion": [],
      "dependeDe": [
        "T038"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T040",
      "titulo": "Tienda de Nexo",
      "version": "v0.10",
      "estado": "pendiente",
      "capitulo": "docs/gdd/09",
      "incluye": [
        "Tienda en Nexo con catálogo fijo y escaparate que cambia cada cierto tiempo.",
        "Probarse la pieza antes de comprar; el servidor cobra y guarda.",
        "Objetos placeholder."
      ],
      "hechoCuando": "Se compra una pieza con créditos, aparece en el inventario y no se puede comprar sin créditos suficientes.",
      "verificacion": [],
      "dependeDe": [
        "T039"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T041",
      "titulo": "Pinturas de vehículo y aspectos de armas",
      "version": "v0.10",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07, docs/gdd/08, docs/gdd/09",
      "incluye": [
        "Pinturas y luces para el deslizador, aspectos para las armas.",
        "Solo cambian el aspecto: las pruebas comprueban que no dan ventaja."
      ],
      "hechoCuando": "Una pintura comprada se ve en carrera y no cambia la velocidad.",
      "verificacion": [],
      "dependeDe": [
        "T040"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T042",
      "titulo": "Misiones diarias",
      "version": "v0.10",
      "estado": "pendiente",
      "capitulo": "docs/gdd/09",
      "incluye": [
        "Tres misiones al día (por ejemplo, \"termina 2 carreras\") con créditos y experiencia.",
        "Se renuevan cada día."
      ],
      "hechoCuando": "Completar una misión da su recompensa una sola vez y al día siguiente hay misiones nuevas.",
      "verificacion": [],
      "dependeDe": [
        "T041"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T043",
      "titulo": "Club Eco",
      "version": "v0.11",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04",
      "incluye": [
        "Mundo violeta con su servidor, portal desde Nexo, pista de baile y zonas para sentarse. Zona segura."
      ],
      "hechoCuando": "Se viaja a Club Eco y se puede estar con otros.",
      "verificacion": [],
      "dependeDe": [
        "T042"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T044",
      "titulo": "Bailes en grupo",
      "version": "v0.11",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04, docs/gdd/03",
      "incluye": [
        "Los que bailan juntos en la pista se sincronizan al ritmo de la música."
      ],
      "hechoCuando": "Dos jugadores que bailan en la pista van a la vez.",
      "verificacion": [],
      "dependeDe": [
        "T043"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T045",
      "titulo": "Juego de ritmo",
      "version": "v0.11",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04",
      "incluye": [
        "Minijuego tranquilo de pulsar al ritmo, con puntuación y una pequeña recompensa."
      ],
      "hechoCuando": "Se puede jugar una ronda en ordenador y en móvil y da su recompensa.",
      "verificacion": [],
      "dependeDe": [
        "T044"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T046",
      "titulo": "Ruinas de Cristal",
      "version": "v0.12",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04",
      "incluye": [
        "Mundo azul hielo con su servidor, portal desde Nexo, recorrido con saltos entre plataformas. Zona segura."
      ],
      "hechoCuando": "Se viaja a las Ruinas y se puede recorrer saltando de plataforma en plataforma.",
      "verificacion": [],
      "dependeDe": [
        "T045"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T047",
      "titulo": "Puzles sencillos",
      "version": "v0.12",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04",
      "incluye": [
        "Puzles de placas y puertas que el servidor comprueba."
      ],
      "hechoCuando": "Resolver un puzle abre un camino nuevo.",
      "verificacion": [],
      "dependeDe": [
        "T046"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T048",
      "titulo": "Coleccionables y recompensas",
      "version": "v0.12",
      "estado": "pendiente",
      "capitulo": "docs/gdd/04, docs/gdd/09",
      "incluye": [
        "Coleccionables escondidos que se guardan en la cuenta.",
        "Piezas de avatar exclusivas como recompensa."
      ],
      "hechoCuando": "Encontrar un coleccionable lo guarda una sola vez y completar una colección da una pieza exclusiva.",
      "verificacion": [],
      "dependeDe": [
        "T047"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T049",
      "titulo": "Circuito 2",
      "version": "v1.0",
      "estado": "pendiente",
      "capitulo": "docs/gdd/07",
      "incluye": [
        "Segundo circuito con su propio trazado; se elige al apuntarse."
      ],
      "hechoCuando": "Se puede correr una carrera completa en el circuito 2.",
      "verificacion": [],
      "dependeDe": [
        "T048"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T050",
      "titulo": "Rendimiento y calidad gráfica",
      "version": "v1.0",
      "estado": "pendiente",
      "capitulo": "docs/gdd/11",
      "incluye": [
        "Medir las imágenes por segundo de cada mundo.",
        "La calidad baja quita brillos y sombras, nunca información."
      ],
      "hechoCuando": "Cada mundo va a 60 imágenes por segundo en ordenador y a 30 o más en una simulación de móvil de gama media.",
      "verificacion": [],
      "dependeDe": [
        "T049"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T051",
      "titulo": "Preparar la publicación",
      "version": "v1.0",
      "estado": "pendiente",
      "capitulo": "docs/gdd/12",
      "incluye": [
        "Versión del juego lista para un servidor de internet, arrancable con un comando.",
        "Guía de publicación con la recomendación de dónde publicarlo y lo que cuesta.",
        "No se contrata nada: eso lo decides tú."
      ],
      "hechoCuando": "La versión de publicación arranca en tu ordenador y todas las pruebas pasan contra ella.",
      "verificacion": [],
      "dependeDe": [
        "T050"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    },
    {
      "id": "T052",
      "titulo": "Revisión final de la 1.0",
      "version": "v1.0",
      "estado": "pendiente",
      "capitulo": "docs/gdd/01",
      "incluye": [
        "Repaso de todos los capítulos frente al juego, lista de lo que es placeholder y de lo que queda para después de la 1.0."
      ],
      "hechoCuando": "Todo lo que el capítulo 01 pide para la 1.0 funciona y todas las pruebas pasan.",
      "verificacion": [],
      "dependeDe": [
        "T051"
      ],
      "commits": [],
      "inicio": "",
      "fin": "",
      "lineas": {},
      "capturas": []
    }
  ]
};
