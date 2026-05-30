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
// Cada misión puede tener un objeto opcional `detalles` con info adicional:
//   recompensa, coordenadas, dificultad, tiempo, requisitos[], notas
// Si una misión no tiene `detalles`, el modal muestra que no hay info.
//
// Cada código se enlaza a una facción ('faccion-1', 'faccion-2', o 'faccion-3').
// Las misiones son idénticas para las tres facciones — el progreso es independiente.
// El liderazgo de la expedición se decide por la suma de puntos de TODAS las misiones,
// no por una sola.

export const codigosMisiones = {

  // ── INSTITUTO ASTRA ──────────────────────────────────────────────────────
  'ASTRA-0001': {
    jugador: 'Nombre del jugador',
    faccion: 'faccion-1',
    misiones: {
      principales: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de operaciones para la expedición. Podrás construirla desde cero o adoptar un pueblo ya existente. Antes de la llegada de los investigadores se realizará una inspección oficial; solo los asentamientos aprobados recibirán la expedición.',
          detalles: {
            recompensa: 'Recompensa económica + Puntos de reputación con Helion (suman al cómputo total para el liderazgo de la expedición)',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sin límite (sujeto a inspección)',
            requisitos: [
              'Ubicación a un mínimo de 1000 bloques de la Torre y el Bastión',
              'Sede principal: edificio destinado a reuniones e investigación',
              'Desde cero: casas habitables para los investigadores que arribarán',
              'Pueblo existente: solo se exige la sede principal',
              'Asentamiento seguro y cómodo para sus habitantes',
              'Guardia activa e iluminación completa las 24 horas',
            ],
            notas: 'Tras la inspección, las facciones aprobadas recibirán la llegada de investigadores. La recompensa contribuye al liderazgo de la expedición pero no lo decide por sí sola.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Los restos de las antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor antes que nosotros. Cuantos más restos se documenten, mayor será el reconocimiento de la institución.',
        //   detalles: {
        //     recompensa: 'Puntos de reputación acumulables por repetición',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Completar misiones del tablón del arqueólogo (FTB Quests)',
        //     ],
        //     notas: 'Cada repetición de las misiones del arqueólogo suma puntos adicionales.',
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones. Sin comunicación no hay expedición coordinada.',
        //   detalles: {
        //     recompensa: 'Recompensa económica',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más completo y detallado sea el documento entregado, mayor será la recompensa.',
        //   detalles: {
        //     recompensa: 'Recompensa económica y reputación proporcionales a la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: [
        //       'Mod: Exposure',
        //     ],
        //     notas: 'Un documento superficial recibirá una valoración mínima; uno exhaustivo, la máxima.',
        //   },
        // },
      ],
      secundarias: [],
      completadas: [],
    },
  },

  // ── ESCUELA DE ARTILLERÍA DREDGE ─────────────────────────────────────────
  'DREDGE-0001': {
    jugador: 'Nombre del jugador',
    faccion: 'faccion-2',
    misiones: {
      principales: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de operaciones para la expedición. Podrás construirla desde cero o adoptar un pueblo ya existente. Antes de la llegada de los investigadores se realizará una inspección oficial; solo los asentamientos aprobados recibirán la expedición.',
          detalles: {
            recompensa: 'Recompensa económica + Puntos de reputación con Helion (suman al cómputo total para el liderazgo de la expedición)',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sin límite (sujeto a inspección)',
            requisitos: [
              'Ubicación a un mínimo de 1000 bloques de la Torre y el Bastión',
              'Sede principal: edificio destinado a reuniones e investigación',
              'Desde cero: casas habitables para los investigadores que arribarán',
              'Pueblo existente: solo se exige la sede principal',
              'Asentamiento seguro y cómodo para sus habitantes',
              'Guardia activa e iluminación completa las 24 horas',
            ],
            notas: 'Tras la inspección, las facciones aprobadas recibirán la llegada de investigadores. La recompensa contribuye al liderazgo de la expedición pero no lo decide por sí sola.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Los restos de las antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor antes que nosotros. Cuantos más restos se documenten, mayor será el reconocimiento de la institución.',
        //   detalles: {
        //     recompensa: 'Puntos de reputación acumulables por repetición',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Completar misiones del tablón del arqueólogo (FTB Quests)',
        //     ],
        //     notas: 'Cada repetición de las misiones del arqueólogo suma puntos adicionales.',
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones. Sin comunicación no hay expedición coordinada.',
        //   detalles: {
        //     recompensa: 'Recompensa económica',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más completo y detallado sea el documento entregado, mayor será la recompensa.',
        //   detalles: {
        //     recompensa: 'Recompensa económica y reputación proporcionales a la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: [
        //       'Mod: Exposure',
        //     ],
        //     notas: 'Un documento superficial recibirá una valoración mínima; uno exhaustivo, la máxima.',
        //   },
        // },
      ],
      secundarias: [],
      completadas: [],
    },
  },

  // ── INSTITUTO POLARIS ────────────────────────────────────────────────────
  'POLARIS-0001': {
    jugador: 'Nombre del jugador',
    faccion: 'faccion-3',
    misiones: {
      principales: [
        {
          titulo: 'Establecer el asentamiento institucional',
          desc: 'Funda una sede en Vaelthor que sirva como base de operaciones para la expedición. Podrás construirla desde cero o adoptar un pueblo ya existente. Antes de la llegada de los investigadores se realizará una inspección oficial; solo los asentamientos aprobados recibirán la expedición.',
          detalles: {
            recompensa: 'Recompensa económica + Puntos de reputación con Helion (suman al cómputo total para el liderazgo de la expedición)',
            coordenadas: 'Por determinar',
            dificultad: 'Alta',
            tiempo: 'Sin límite (sujeto a inspección)',
            requisitos: [
              'Ubicación a un mínimo de 1000 bloques de la Torre y el Bastión',
              'Sede principal: edificio destinado a reuniones e investigación',
              'Desde cero: casas habitables para los investigadores que arribarán',
              'Pueblo existente: solo se exige la sede principal',
              'Asentamiento seguro y cómodo para sus habitantes',
              'Guardia activa e iluminación completa las 24 horas',
            ],
            notas: 'Tras la inspección, las facciones aprobadas recibirán la llegada de investigadores. La recompensa contribuye al liderazgo de la expedición pero no lo decide por sí sola.',
          },
        },
        // ── Misiones pendientes de activar ────────────────────────────────
        // {
        //   titulo: 'Los restos de las antiguas civilizaciones',
        //   desc: 'Recupera vestigios de las civilizaciones que habitaron Vaelthor antes que nosotros. Cuantos más restos se documenten, mayor será el reconocimiento de la institución.',
        //   detalles: {
        //     recompensa: 'Puntos de reputación acumulables por repetición',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mods: Archaeology, Better Archaeology, Collector\'s Caravan',
        //       'Completar misiones del tablón del arqueólogo (FTB Quests)',
        //     ],
        //     notas: 'Cada repetición de las misiones del arqueólogo suma puntos adicionales.',
        //   },
        // },
        // {
        //   titulo: 'Red de comunicaciones',
        //   desc: 'Establece una red de mensajería que conecte tu asentamiento con los del resto de instituciones. Sin comunicación no hay expedición coordinada.',
        //   detalles: {
        //     recompensa: 'Recompensa económica',
        //     dificultad: 'Media',
        //     requisitos: [
        //       'Mod: Envelope',
        //       'Red funcional entre los tres asentamientos',
        //     ],
        //   },
        // },
        // {
        //   titulo: 'Documentar el mundo',
        //   desc: 'Registra Vaelthor mediante fotografías y reportes visuales. Cuanto más completo y detallado sea el documento entregado, mayor será la recompensa.',
        //   detalles: {
        //     recompensa: 'Recompensa económica y reputación proporcionales a la calidad del documento',
        //     dificultad: 'Variable',
        //     requisitos: [
        //       'Mod: Exposure',
        //     ],
        //     notas: 'Un documento superficial recibirá una valoración mínima; uno exhaustivo, la máxima.',
        //   },
        // },
      ],
      secundarias: [],
      completadas: [],
    },
  },

}
