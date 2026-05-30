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
              'A más de 1000 bloques de la Torre y el Bastión',
              'Sede principal para reuniones e investigación',
              'Si es desde cero: casas para los investigadores',
              'Si es un pueblo existente: basta con la sede',
              'Guardia activa e iluminación las 24h',
            ],
            notas: 'Solo los asentamientos aprobados recibirán la expedición. La recompensa suma puntos al liderazgo, pero no lo decide por sí sola.',
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

}
