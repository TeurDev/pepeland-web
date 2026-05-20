// ── Facciones ──────────────────────────────────────────────────────────────
export const facciones = [
  {
    id: 'faccion-1',
    nombre: 'Los Magos',
    tagline: 'Herederos del testamento de Rohlan',
    descripcion: 'Guardianes de la esencia arcana, los Magos protegen los conocimientos prohibidos tras la Era Industrial. Su retorno se forjó con el legado de Rohlan, último gran arcanista de la era anterior. Para ellos, el Heraldo Celeste es la esperanza de recuperar un fragmento real de la magia perdida — un vínculo directo con el pasado glorioso de la Era Arcana. Sus filas se dividen en órdenes como la Torre Blanca, los Brujos de Drakenhart y los Tejedores del Vacío.',
    icono: '🔮',
    color: '#f5b842',
  },
  {
    id: 'faccion-2',
    nombre: 'La Coalición',
    tagline: 'Forjadores de máquinas y portales',
    descripcion: 'Ingenieros visionarios que rechazan lo arcano y abrazan la lógica del progreso. Tras la Guerra de los Fragmentos, la Coalición dominó el continente con disruptores mágicos, fortalezas blindadas y armadas mecanizadas. Para ellos, el Heraldo es una fuente desconocida de poder — pero también un peligro que debe ser controlado. Cuentan con divisiones como la Acorazada Goliat, las Alas Ícaro y la Armada Naval Colossus.',
    icono: '⚙️',
    color: '#d4742a',
  },
  {
    id: 'faccion-3',
    nombre: 'Los Ocultos',
    tagline: 'Sombras que el mundo olvida',
    descripcion: 'Nadie los ha visto, pero todos saben de su existencia. Los Ocultos operan al margen de la guerra abierta entre Magos y Coalición. Sus motivos son desconocidos, sus métodos silenciosos. Algunos dicen que custodian las verdades borradas por la Era Industrial. Otros, que se preparan para algo que ni los más sabios pueden prever. Su interés en el Heraldo es el más inquietante de todos.',
    icono: '🌑',
    color: '#8a7860',
  },
]

// ── Códigos de misiones ────────────────────────────────────────────────────
// Cada misión puede tener un objeto `detalles` opcional con:
//   recompensa, coordenadas, dificultad, tiempo, requisitos[], notas
// Si no hay `detalles`, el modal mostrará "Sin información".

export const codigosMisiones = {
  'PEPE-0001': {
    jugador: 'Aprendiz de Novaenor',
    faccion: 'faccion-1',
    misiones: {
      principales: [
        {
          titulo: 'Observatorio de cristal arcano',
          desc: 'Acude al observatorio principal de Novaenor y registra las nuevas lecturas del firmamento durante tres ciclos lunares.',
          detalles: {
            recompensa: '400 monedas + Lente de cristal arcano',
            coordenadas: 'X: 0 · Y: 100 · Z: 0 (centro de Novaenor)',
            dificultad: 'Fácil',
            tiempo: '~3 días (in-game)',
            notas: 'Las lecturas más precisas se obtienen durante la luna llena.',
          },
        },
        {
          titulo: 'El despertar de la esencia',
          desc: 'Localiza un fragmento de esencia arcana residual en las ruinas de la Era Industrial. Tráelo al Círculo Erudito sin que la Coalición lo detecte.',
          detalles: {
            recompensa: '1200 monedas + Grimorio menor',
            coordenadas: 'X: -1500 · Y: 45 · Z: 800',
            dificultad: 'Épica',
            tiempo: '~1.5 horas',
            requisitos: ['Estar en Los Magos', 'Nivel 15'],
            notas: 'Si te detecta una patrulla de la Coalición, la misión falla.',
          },
        },
      ],
      secundarias: [
        {
          titulo: 'Restaurar la biblioteca',
          desc: 'Ayuda a la Orden de la Torre Blanca a recuperar tomos quemados durante la persecución mágica.',
          detalles: { recompensa: '150 monedas por tomo', dificultad: 'Fácil' },
        },
        {
          titulo: 'Comerciante misterioso',
          desc: 'Un comerciante neutral ofrece cristales pequeños. Investiga su origen antes de comprar.',
          // sin detalles
        },
      ],
      completadas: [
        { titulo: 'Juramento ante el grimorio', desc: 'Hiciste tu juramento como aprendiz frente al grimorio de Rohlan.' },
      ],
    },
  },
  'PEPE-0002': {
    jugador: 'Cadete de Vanguardium',
    faccion: 'faccion-2',
    misiones: {
      principales: [
        {
          titulo: 'Movilización a la frontera',
          desc: 'Únete a las tropas de élite de la División Goliat desplazadas al límite del territorio neutral. Mantén tu posición sin retroceder.',
          detalles: {
            recompensa: '600 monedas + Insignia de campaña',
            coordenadas: 'X: 800 · Y: 70 · Z: 0',
            dificultad: 'Media',
            tiempo: '~40 minutos',
            requisitos: ['Estar en La Coalición'],
          },
        },
        {
          titulo: 'Maquinaria de contención',
          desc: 'Transporta un disruptor de campo arcano desde la Escuela Superior Vanguardium hasta la línea de frente.',
          detalles: {
            recompensa: '900 monedas + Disruptor portátil',
            coordenadas: 'X: -600 · Y: 80 · Z: 200 → X: 800 · Y: 70 · Z: 0',
            dificultad: 'Difícil',
            tiempo: '~1 hora',
            notas: 'El disruptor es pesado. No correr.',
          },
        },
      ],
      secundarias: [
        { titulo: 'Patrulla aérea', desc: 'Apoya a las Alas Ícaro en una patrulla de reconocimiento sobre el cielo de Novaenor.' },
        { titulo: 'Suministros para el bloqueo', desc: 'Lleva munición y víveres a la Armada Naval Colossus apostada en la costa este.' },
      ],
      completadas: [
        { titulo: 'Graduación en Vanguardium', desc: 'Completaste tu formación como ingeniero de campo.' },
      ],
    },
  },
  'PEPE-0003': {
    jugador: 'Sombra Sin Nombre',
    faccion: 'faccion-3',
    misiones: {
      principales: [
        {
          titulo: 'Ojos en Novaenor',
          desc: 'Infíltrate entre los investigadores del pueblo conjunto sin levantar sospechas. Observa, no intervengas.',
          detalles: {
            recompensa: '???',
            dificultad: 'Difícil',
            tiempo: 'Indefinido',
            notas: 'Nadie debe saber a quién sirves.',
          },
        },
        {
          titulo: 'El verdadero origen',
          desc: 'Los registros del Heraldo no cuadran con la historia oficial. Encuentra el dato suprimido.',
          // sin detalles a propósito — Los Ocultos no revelan todo
        },
      ],
      secundarias: [
        { titulo: 'Contacto en la frontera', desc: 'Tu contacto en la Coalición tiene información. Acude al punto acordado al alba.' },
      ],
      completadas: [
        { titulo: 'La iniciación', desc: 'Cruzaste el umbral. Ya no perteneces a ningún bando.' },
      ],
    },
  },
}