// ── Facciones ──────────────────────────────────────────────────────────────
export const facciones = [
  {
    id: 'faccion-1',
    nombre: 'Instituto Astra',
    tagline: 'Explorar primero, comprender después',
    descripcion:
      'El Instituto Astra representa la rama más exploradora de Helion. Está especializado en aeronáutica, reconocimiento, movilidad, exploración y cartografía. Sus miembros suelen ser pilotos, navegantes, exploradores, cartógrafos y rastreadores. Astra prioriza descubrir rápidamente, expandir mapas, localizar asentamientos y comprender el terreno antes que nadie. Muchos en el archipiélago consideran que es la institución más idealista de las tres: confían en que cualquier cosa que pueda comprenderse de Vaelthor primero hay que verla con los propios ojos. Su filosofía oficial reza que la comprensión vendrá después, cuando el continente esté abierto.',
    icono: 'aviation',
    color: '#a78bfa',
  },
  {
    id: 'faccion-2',
    nombre: 'Escuela de Artillería Dredge',
    tagline: 'Sin dominio no hay futuro',
    descripcion:
      'Dredge representa el ala militar e industrial de Helion. Su especialidad es la artillería pesada, la defensa estratégica, las fortificaciones, el control territorial y la protección de expediciones. Dredge cree que Vaelthor es demasiado peligroso para ser explorado sin control: para ellos, asegurar territorios y establecer posiciones defensivas es la única forma viable de expandirse sobre el continente. Muchos de sus miembros son estrategas, ingenieros militares, operadores de maquinaria pesada y soldados. Donde Astra ve aventura, Dredge ve un perímetro que hay que asegurar antes de avanzar.',
    icono: 'artillery',
    color: '#f87171',
  },
  {
    id: 'faccion-3',
    nombre: 'Instituto Polaris',
    tagline: 'El conocimiento precede a la conquista',
    descripcion:
      'Polaris representa el núcleo científico y técnico de Helion. Está especializado en ingeniería avanzada, investigación científica, recuperación tecnológica, análisis de estructuras antiguas y restauración de archivos históricos. Polaris considera que Vaelthor debe estudiarse antes de intentar conquistarlo. Es la institución más interesada en comprender las antiguas civilizaciones, la corrupción arcana, los autómatas desaparecidos y la tecnología perdida que el continente sigue guardando. Para Polaris, cada ruina abandonada y cada archivo recuperado tienen más valor que cualquier territorio.',
    icono: 'general',
    color: '#4ade80',
  },
]

// ── Códigos de misiones ─────────────────────────────────────────────────────
// Misiones idénticas para las tres facciones. El liderazgo de la expedición
// se decide por la suma de TODAS las misiones, no por una sola.

export const codigosMisiones = {

  // ── INSTITUTO ASTRA ──────────────────────────────────────────────────────
  'STR1209': {
    jugador: 'ASTRA',
    faccion: 'faccion-1',
    misiones: {
      principales: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de la expedición. Puedes construirla desde cero o adoptar un pueblo existente. Se realizará una inspección antes de la llegada de los investigadores.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sujeto a inspección',
            requisitos: [
              'A más de 1000 bloques de la Torre y el Bastión',
              'Sede principal para reuniones e investigación',
              'Si es desde cero: casas para los investigadores',
              'Si es un pueblo existente: basta con la sede',
              'Guardia activa e iluminación las 24h',
            ],
            notas: 'Solo los asentamientos aprobados recibirán la expedición. La recompensa suma puntos al liderazgo, pero no lo decide por sí sola.',
          },
        },
        {
          titulo: 'Construir la primera aeronave',
          desc: 'Diseña y construye desde cero una aeronave funcional con Create: Aeronautics. Astra debe demostrar que domina los cielos de Vaelthor y poner esa movilidad al servicio de toda la expedición.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            dificultad: 'Alta',
            requisitos: [
              'Mods: Create, Sable y Create: Aeronautics',
              'Aeronave funcional: despegue, vuelo y control reales',
              'Construida desde cero, no copiada de un esquema',
              'Construir y entregar una aeronave a cada una de las demás sedes',
            ],
            notas: 'Cada sede debe quedar con su propia aeronave accesible para cualquier jugador. El objetivo no es solo volar, sino dotar de movilidad aérea a toda la expedición.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Restos de antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor. Cuantos más restos documentes, más reconocimiento para la institución.',
        //   detalles: {
        //     recompensa: 'Reputación (acumulable por repetición)',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Misiones del arqueólogo (FTB Quests)',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones.',
        //   detalles: {
        //     recompensa: 'Dinero',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más detallado, mayor la recompensa.',
        //   detalles: {
        //     recompensa: 'Dinero y reputación según la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: ['Mod: Exposure'],
        //   },
        // },
      ],
      secundarias: [],
      completadas: [],
    },
  },

  // ── ESCUELA DE ARTILLERÍA DREDGE ─────────────────────────────────────────
  'DRDG7364': {
    jugador: 'DREDGE',
    faccion: 'faccion-2',
    misiones: {
      principales: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de la expedición. Puedes construirla desde cero o adoptar un pueblo existente. Se realizará una inspección antes de la llegada de los investigadores.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sujeto a inspección',
            requisitos: [
              'Sede principal para reuniones e investigación',
              'Si es desde cero: casas para los investigadores',
              'Si es un pueblo existente: basta con la sede',
              'Guardia activa e iluminación las 24h',
              'Construir una fábrica de Create en superficie con cadena de montaje funcional (mezcladora, trituradoras, desplegadores, prensa mecánica y cintas), de uso público para cualquier jugador',
            ],
            notas: 'La fábrica debe estar en superficie, a las afueras de la sede y separada de ella. Solo los asentamientos aprobados recibirán la expedición. La recompensa suma puntos al liderazgo, pero no lo decide por sí sola.',
          },
        },
        {
          titulo: 'Maquinaria pesada al servicio de la expedición (1/2) · Vía férrea',
          desc: 'Esta misión y la "(2/2) · Batería de cañones" son excluyentes: Dredge elige UNA de las dos, no ambas. Si eliges esta, deberás tender una red ferroviaria que conecte toda la expedición.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            dificultad: 'Alta',
            requisitos: [
              'Mod: Create',
              'Estación principal en la Torre Alba como origen de la línea',
              'Línea que se propague desde la Torre Alba y pase por todas las sedes, Dredge incluida',
              'Estación funcional en cada sede conectada',
              'Tren ensamblado y funcional recorriendo la línea',
            ],
            notas: 'El trazado no debe alterar ni destrozar el terreno: rodea los obstáculos y respeta el entorno. Elige esta opción O la (2/2), nunca las dos.',
          },
        },
        {
          titulo: 'Maquinaria pesada al servicio de la expedición (2/2) · Batería de cañones',
          desc: 'Esta misión y la "(1/2) · Vía férrea" son excluyentes: Dredge elige UNA de las dos, no ambas. Si eliges esta, deberás dotar de defensa artillera a toda la expedición.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            dificultad: 'Alta',
            requisitos: [
              'Mod: Create: Big Cannons',
              'Batería de cañones funcional en la sede de Dredge, capaz de apuntar y disparar',
              'Montar también una batería de defensa funcional en cada una de las demás sedes',
            ],
            notas: 'Cada sede debe quedar con su propia batería operativa. Elige esta opción O la (1/2), nunca las dos.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Restos de antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor. Cuantos más restos documentes, más reconocimiento para la institución.',
        //   detalles: {
        //     recompensa: 'Reputación (acumulable por repetición)',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Misiones del arqueólogo (FTB Quests)',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones.',
        //   detalles: {
        //     recompensa: 'Dinero',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más detallado, mayor la recompensa.',
        //   detalles: {
        //     recompensa: 'Dinero y reputación según la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: ['Mod: Exposure'],
        //   },
        // },
      ],
      secundarias: [],
      completadas: [],
    },
  },

  // ── INSTITUTO POLARIS ────────────────────────────────────────────────────
  'PLRS1298': {
    jugador: 'POLARIS',
    faccion: 'faccion-3',
    misiones: {
      principales: [
        {
          titulo: 'Conectar las sedes con la Torre Alba',
          desc: 'Usando Tempad, Polaris debe tejer una red de teletransporte que enlace la Torre Alba con todas las sedes, de forma que cualquier jugador pueda viajar entre ellas sin dificultad.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            dificultad: 'Media',
            requisitos: [
              'Mod: Tempad',
              'Punto de teletransporte estable y de acceso público entre la Torre Alba y la sede de Polaris',
              'Montar teletransporte desde la Torre Alba hacia cada una de las demás sedes',
              'Suministro de Chronons suficiente para mantener la red operativa',
            ],
            notas: 'Todos los puntos deben ser de acceso público para cualquier jugador. El objetivo es que la Torre Alba quede conectada con cada sede de la expedición, no solo con la de Polaris.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Restos de antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor. Cuantos más restos documentes, más reconocimiento para la institución.',
        //   detalles: {
        //     recompensa: 'Reputación (acumulable por repetición)',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Misiones del arqueólogo (FTB Quests)',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones.',
        //   detalles: {
        //     recompensa: 'Dinero',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más detallado, mayor la recompensa.',
        //   detalles: {
        //     recompensa: 'Dinero y reputación según la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: ['Mod: Exposure'],
        //   },
        // },
      ],
      secundarias: [],
      completadas: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de la expedición. Puedes construirla desde cero o adoptar un pueblo existente. Se realizará una inspección antes de la llegada de los investigadores.',
          detalles: {
            recompensa: 'Dinero y reputación con Helion',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sujeto a inspección',
            requisitos: [
              'A más de 1000 bloques de la Torre y el Bastión',
              'Sede principal para reuniones e investigación',
              'Si es desde cero: casas para los investigadores',
              'Si es un pueblo existente: basta con la sede',
              'Guardia activa e iluminación las 24h',
            ],
            notas: 'Solo los asentamientos aprobados recibirán la expedición. La recompensa suma puntos al liderazgo, pero no lo decide por sí sola.',
          },
        },
      ],
    },
  },

}