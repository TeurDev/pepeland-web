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
// EJEMPLO DE ESTRUCTURA — descomenta y modifica cuando tengas códigos reales.
// Cada código se enlaza a una facción ('faccion-1', 'faccion-2', o 'faccion-3').

export const codigosMisiones = {

  // ── INSTITUTO ASTRA ──────────────────────────────────────────────────────
  // 'ASTRA-0001': {
  //   jugador: 'Nombre del jugador',
  //   faccion: 'faccion-1',
  //   misiones: {
  //     principales: [
  //       {
  //         titulo: 'Cartografía de la costa norte',
  //         desc: 'Recorre la costa norte de Vaelthor y registra los puntos de desembarco viables.',
  //         detalles: {
  //           recompensa: '500 monedas + Mapa parcial',
  //           coordenadas: 'X: 1240 · Y: 64 · Z: -800',
  //           dificultad: 'Media',
  //           tiempo: '~30 minutos',
  //           requisitos: ['Nivel 10', 'Estar en Astra'],
  //           notas: 'Lleva una brújula auxiliar — los vientos costeros falsean las lecturas.',
  //         },
  //       },
  //     ],
  //     secundarias: [],
  //     completadas: [],
  //   },
  // },

  // ── ESCUELA DE ARTILLERÍA DREDGE ─────────────────────────────────────────
  // 'DREDGE-0001': {
  //   jugador: 'Nombre del jugador',
  //   faccion: 'faccion-2',
  //   misiones: {
  //     principales: [
  //       {
  //         titulo: 'Establecer puesto fortificado',
  //         desc: 'Asegura un punto estratégico en la frontera y construye la primera línea defensiva.',
  //         detalles: {
  //           recompensa: '800 monedas + Insignia de campaña',
  //           coordenadas: 'X: 2000 · Y: 32 · Z: -1500',
  //           dificultad: 'Difícil',
  //           tiempo: '~1 hora',
  //           requisitos: ['Nivel 15', 'Estar en Dredge'],
  //         },
  //       },
  //     ],
  //     secundarias: [],
  //     completadas: [],
  //   },
  // },

  // ── INSTITUTO POLARIS ────────────────────────────────────────────────────
  // 'POLARIS-0001': {
  //   jugador: 'Nombre del jugador',
  //   faccion: 'faccion-3',
  //   misiones: {
  //     principales: [
  //       {
  //         titulo: 'Análisis de ruina industrial',
  //         desc: 'Localiza la antigua planta industrial y recupera todo archivo o maquinaria intacta.',
  //         detalles: {
  //           recompensa: '600 monedas + Componente arcaico',
  //           coordenadas: 'X: -350 · Y: 120 · Z: 540',
  //           dificultad: 'Media',
  //           tiempo: '~45 minutos',
  //           requisitos: ['Estar en Polaris'],
  //           notas: 'No fuerces ningún mecanismo — algunos llevan siglos selados por una razón.',
  //         },
  //       },
  //     ],
  //     secundarias: [],
  //     completadas: [],
  //   },
  // },

}
