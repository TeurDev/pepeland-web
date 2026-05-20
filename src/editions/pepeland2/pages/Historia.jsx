import ChapterLayout from '@shared/components/ChapterLayout'

// ── Capítulos de la historia de Pepeland 2 ────────────────────────────────
// Para añadir un capítulo nuevo: copia un objeto, dale id único, rellena body.
// El sidebar se actualiza automáticamente.

const chapters = [
  {
    id: 'era-dormida',
    title: 'I · La Era Dormida',
    body: (
      <>
        <p style={{ fontStyle: 'italic', color: 'var(--text-dim)', marginBottom: '2rem' }}>
          "Durante siglos el mundo vivió sin magia. Hasta que una pala, en una mina cualquiera, abrió una grieta que cambiaría todo para siempre."
        </p>
        <p>
          Antes de los Cristales y los Pozos, antes de los magos y las máquinas, el mundo vivía
          en silencio. Una civilización que dependía de sus manos, sus herramientas básicas y la
          obstinación de quienes la habitaban. Sin esencia, sin portales, sin sueños imposibles.
        </p>
        <p>
          El nombre de "Era Dormida" no se le puso en su momento. Solo después de que el mundo
          despertara comprendieron que aquel tiempo era el sueño previo: la tierra estaba viva,
          pero callada. Esperaba.
        </p>
      </>
    ),
  },
  {
    id: 'despertar-arcano',
    title: 'II · El Despertar Arcano',
    body: (
      <>
        <p>
          Una expedición minera, en busca de hierro común, golpeó por accidente una veta sellada
          durante eones. De la grieta brotó la <strong>Esencia arcana</strong>: una energía
          desconocida que se filtró por el subsuelo, los ríos y, finalmente, por las personas
          mismas.
        </p>
        <p>
          Los primeros Pozos de esencia aparecieron junto a las antiguas minas. De ellos se
          extrajeron los <strong>Cristales arcanos</strong>, instrumentos capaces de moldear la
          realidad. La magia no era un don: era una técnica. Y se enseñaba, se compraba, se
          heredaba.
        </p>
        <p>
          Surgieron escuelas, órdenes, torres y bibliotecas. Reinos enteros se levantaron en
          décadas. Quien controlaba un Pozo, controlaba una región. La Era Arcana había
          comenzado.
        </p>
      </>
    ),
  },
  {
    id: 'primera-ruptura',
    title: 'III · La Primera Ruptura',
    body: (
      <>
        <p>
          El poder atrae a quienes no saben contenerlo. Algunos Cristales fueron forzados más allá
          de su capacidad, y se fragmentaron. La esencia liberada — pura, sin sello, sin
          propósito — desbordó el mundo.
        </p>
        <p>
          Aparecieron plagas que ningún sanador podía nombrar. Criaturas aberrantes brotaron de
          bosques antes pacíficos. Algunos magos intentaron sellar lo liberado; otros, dominarlo.
          Las primeras guerras internas de la magia comenzaron entre quienes querían contenerla
          y quienes querían explotarla.
        </p>
      </>
    ),
  },
  {
    id: 'segunda-ruptura',
    title: 'IV · La Segunda Ruptura',
    body: (
      <>
        <p>
          Los Cristales, deformados tras siglos de mal uso, finalmente colapsaron. La Segunda
          Ruptura no fue una grieta: fue un derrumbe. Reinos enteros desaparecieron en horas.
          Ciudades enteras se hundieron. El cielo se rasgó sobre las antiguas capitales y la
          magia se volvió ingobernable.
        </p>
        <p>
          En medio del caos surgió un movimiento que hasta entonces era una voz minoritaria: el
          rechazo total a lo arcano. Ingenieros, artesanos y pensadores que llevaban décadas
          estudiando las máquinas en secreto, propusieron una alternativa. La tecnología sería el
          nuevo orden.
        </p>
      </>
    ),
  },
  {
    id: 'guerra-fragmentos',
    title: 'V · La Guerra de los Fragmentos',
    body: (
      <>
        <p>
          Mientras los magos se enfrentaban entre sí — corruptos contra puristas, neutrales contra
          protectores — las potencias tecnológicas se unieron por primera vez en la historia. No
          por afinidad: por necesidad.
        </p>
        <p>
          Lanzaron una campaña global para eliminar toda forma de magia. No hicieron distinción
          entre magos benévolos o tiranos: toda ciudad que practicara la Esencia arcana fue
          arrasada. Los Sellos Supresores y los Disruptores mágicos demostraron ser más eficaces
          que cualquier hechizo. Los últimos Pozos fueron destruidos. Los magos supervivientes se
          ocultaron o desaparecieron.
        </p>
      </>
    ),
  },
  {
    id: 'era-industrial',
    title: 'VI · La Era Industrial',
    body: (
      <>
        <p>
          Sin magia, sin Pozos, sin grimorios. La Era Industrial impuso un orden basado en la
          lógica, el progreso medible y la producción masiva. La magia fue prohibida, perseguida
          y borrada de los registros oficiales. Quien hablara de ella era un demente; quien la
          practicara, un criminal.
        </p>
        <p>
          Aun así, fragmentos dormidos de Esencia siguieron existiendo. Dispersos. Olvidados.
          Esperando a que alguien volviera a despertarlos. Esa espera duró siglos.
        </p>
      </>
    ),
  },
  {
    id: 'testamento-rohlan',
    title: 'VII · El Testamento de Rohlan',
    body: (
      <>
        <p>
          En lo más profundo de la Era Industrial, un nombre regresó: <strong>Rohlan</strong>,
          el último gran arcanista, había dejado un testamento sellado generaciones atrás. Cuando
          fue descubierto y abierto, su contenido bastó para reabrir las bibliotecas que la
          Coalición creía borradas.
        </p>
        <p>
          Los magos volvieron, primero como susurros, después como órdenes organizadas. La
          Coalición Tecnológica respondió endureciendo su control. El equilibrio del mundo, que
          llevaba siglos quieto, comenzó a temblar de nuevo.
        </p>
      </>
    ),
  },
  {
    id: 'heraldo-celeste',
    title: 'VIII · La Llegada del Heraldo Celeste',
    body: (
      <>
        <p>
          Aquí comienza la temporada actual. Durante semanas, los <strong>investigadores
          de Novaenor</strong> — el pueblo conjunto que sirve de territorio neutral entre Magos
          y Coalición — observaron el firmamento sin descanso. Las primeras señales surgieron
          por casualidad: un joven aprendiz, mirando el cielo nocturno con lentes de cristal
          arcano, detectó una anomalía.
        </p>
        <p>
          Lo que parecía una curiosidad menor reveló algo de gran importancia: un cuerpo celeste
          desconocido se dirigía hacia el planeta. Su trayectoria apuntaba a un impacto cercano
          a Novaenor. Y, lo que era aún más alarmante, en su núcleo parecía contener un tipo de
          <strong> energía cristalina</strong> — similar, aunque no idéntica, a los antiguos
          Cristales arcanos.
        </p>
        <p>
          La noticia sacudió a ambos bandos. Para los Magos, era la esperanza de recuperar un
          fragmento real de la magia perdida. Para la Coalición, era un peligro que debía ser
          controlado antes de que el otro bando lo reclamara primero. Los ojos del continente
          entero se centraron en Novaenor.
        </p>
        <p>
          En cuestión de días la Coalición movilizó tropas de élite y maquinaria de contención
          hacia la frontera del territorio neutral. Las ciudades mágicas independientes
          respondieron desplegando magos expertos y guardianes de esencia en puntos
          estratégicos. La amenaza de un conflicto inminente volvió a pesar sobre el mundo.
        </p>
        <p>
          Pero gracias a la diplomacia y a los insistentes esfuerzos de los investigadores de
          Novaenor — que actuaron como intermediarios neutrales — se firmó un <strong>acuerdo
          frágil</strong>: ambas fuerzas mantendrían sus posiciones, pero se abstendrían de
          cualquier acción ofensiva o intento de apropiarse del meteorito por la fuerza.
        </p>
        <p>
          Y mientras tanto, en las sombras, <strong>Los Ocultos</strong> — esa facción que nadie
          ha visto pero que todos sospechan que existe — también se mueven. Su interés en el
          Heraldo es el menos comprendido, y por eso el más inquietante.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text)', marginTop: '1.5rem' }}>
          Faltan días para que el Heraldo Celeste impacte. Nadie sabe qué traerá tras su
          llegada. Lo único seguro es que cambiará otra vez el curso de la historia.
        </p>
      </>
    ),
  },
]

export default function Historia() {
  return (
    <ChapterLayout
      chapters={chapters}
      title="HISTORIA"
      subtitle="El Heraldo Celeste"
    />
  )
}
