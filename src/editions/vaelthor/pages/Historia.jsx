import ChapterLayout from '@shared/components/ChapterLayout'
import { EditionLink } from '@shared/components/EditionContext'

// ── Capítulos de la historia de Vaelthor ──────────────────────────────────
// Para añadir un capítulo nuevo: copia un objeto, dale id único, rellena body.
// El sidebar se actualiza automáticamente.

const chapters = [

  {
    id: 'introduccion',
    title: 'Introducción',
    body: (
      <>
        <p>
          Los acontecimientos de la temporada anterior terminaron con la llegada
          del Heraldo Celeste a Asteria. Aquel impacto, y todo lo que vino después,
          cambió la forma en que la magia se distribuye por el mundo. La
          enorme concentración de esencia arcana que durante siglos había
          dominado regiones enteras del planeta comenzó, lentamente, a colapsar.
        </p>
        <p>
          La magia no desaparece. Solo se dispersa. Pero esa dispersión tiene
          una consecuencia inesperada: zonas que durante siglos habían sido
          inaccesibles, donde la saturación arcana hacía imposible operar
          cualquier tecnología, vuelven a estar abiertas. Los motores funcionan
          otra vez. Las brújulas dejan de fallar. Las antiguas rutas comerciales
          renacen.
        </p>
        <p>
          Y por primera vez en generaciones, un continente entero que se daba
          por perdido vuelve a ser alcanzable: <strong>Vaelthor</strong>. Aquí
          empieza esta historia.
        </p>
        <p style={{ color: 'var(--text-dim)', fontStyle: 'italic', marginTop: '2rem' }}>
          Si estás en el móvil, pulsa el icono del libro en la parte superior
          izquierda para abrir el resto de los capítulos.
        </p>
      </>
    ),
  },

  {
    id: 'continentes',
    title: 'Los dos continentes',
    body: (
      <>
        <p>
          <strong>Asteria</strong> es el continente donde transcurrió todo
          durante la temporada anterior. Durante siglos fue uno de los principales
          centros de civilización del mundo, y a diferencia de otros lugares,
          consiguió adaptarse parcialmente a la coexistencia entre magia y
          tecnología. Tras el final de los hechos del Heraldo, muchos
          supervivientes y exploradores abandonan Asteria buscando nuevas
          oportunidades y respuestas en otra parte.
        </p>
        <p>
          <strong>Vaelthor</strong> es ese otro lugar. Un continente lejano y
          ancestral, mítico para algunos, prohibido para casi todos. Mucho antes
          de los hechos actuales, Vaelthor albergó enormes civilizaciones que
          desarrollaron maquinaria industrial, aeronaves, artillería pesada,
          autómatas y redes mecánicas que llegaron a sostener ciudades enteras
          de forma automatizada.
        </p>
        <p>
          Sin embargo, con el paso de los siglos, la concentración de esencia
          mágica sobre Vaelthor fue aumentando hasta hacerse insoportable. La
          magia interfería directamente con la tecnología: los motores se
          apagaban, los autómatas perdían estabilidad, las redes eléctricas
          colapsaban. Las civilizaciones de entonces comprendieron que el
          continente se estaba volviendo inhabitable para ellas, y terminaron
          marchándose. Vaelthor quedó vacío, callado, durante siglos.
        </p>
      </>
    ),
  },

  {
    id: 'helion',
    title: 'El archipiélago de Helion',
    body: (
      <>
        <p>
          Cuando aquellas antiguas civilizaciones huyeron de Vaelthor, no
          desaparecieron. Se reubicaron. Buscaron tierra firme lejos de la
          saturación arcana, y encontraron refugio en un conjunto de islas
          alejadas del continente. Con los siglos, esas islas pasarían a
          conocerse como el <strong>Archipiélago de Helion</strong>.
        </p>
        <p>
          Lejos de la concentración mágica, la tecnología volvió a funcionar.
          La industria pudo desarrollarse sin interferencias. La ingeniería
          avanzó enormemente. Helion se transformó, generación tras generación,
          en el mayor centro tecnológico del mundo conocido. Surgieron grandes
          ciudades industriales, los puertos crecieron, la aeronáutica
          evolucionó, y las universidades terminaron dirigiendo todo el
          desarrollo científico.
        </p>
        <p>
          Hay algo, sin embargo, que Helion nunca logró comprender realmente:
          la magia. No estaba prohibida. Simplemente nadie sabía cómo
          estudiarla, y al estar lejos de cualquier fuente mágica, terminó
          quedando relegada a un asunto académico que casi nadie tomaba en serio.
        </p>
        <p>
          El archipiélago está gobernado por el <strong>Directorio de Helion</strong>,
          un consejo tecnocrático formado por industriales, académicos,
          ingenieros, estrategas y representantes comerciales. El Directorio
          controla las expediciones, los puertos, la industria pesada, las rutas
          comerciales y la financiación científica. Aunque mantiene el orden
          general, muchas organizaciones independientes operan fuera de su
          control directo.
        </p>
        <p>
          En el corazón intelectual del archipiélago está la <strong>Universidad
          Unificada de Helion</strong>, la mayor institución académica del mundo
          conocido. Durante siglos, la universidad reunió mapas antiguos,
          informes de expediciones, registros históricos, estudios sobre
          Vaelthor y toda la tecnología que pudo recuperarse. Cuando la magia
          comenzó a dispersarse y Vaelthor volvió a ser accesible, fue la
          universidad la que organizó la mayor expedición jamás realizada.
        </p>
        <p>
          Pero existía un problema: no había recursos suficientes para que
          todas las ramas académicas liderasen la exploración. Así que la
          universidad creó una competición. Tres grandes instituciones serían
          enviadas a Vaelthor. La que obtuviera más descubrimientos, más
          información, más tecnología recuperada, más control territorial y
          más capacidad de supervivencia, ganaría el derecho a liderar la
          futura expansión sobre el continente.
        </p>
      </>
    ),
  },

  {
    id: 'instituciones',
    title: 'Las tres instituciones',
    body: (
      <>
        <p>
          Tres instituciones aceptaron el reto de la universidad. Cada una de
          ellas cree sinceramente que su método es el correcto para reconstruir
          Vaelthor. El conflicto principal no es de bien contra mal, sino de
          tres visiones del futuro que no pueden coexistir del todo.
        </p>

        <div style={{ marginTop: '1.6rem' }}>
          <p>
            <strong>Instituto Astra</strong> — la rama más exploradora y la
            cara más visible de Helion en el aire. Especializados en aeronáutica,
            reconocimiento, movilidad, cartografía y exploración rápida. Astra
            cree que el continente solo puede ganarse descubriéndolo primero:
            su filosofía es que la comprensión vendrá después. Muchos los
            consideran los más idealistas.
          </p>
          <p>
            <EditionLink to="/facciones/faccion-1" className="btn" style={{ fontSize: 'var(--px-xs)', display: 'inline-block', marginTop: '.4rem' }}>
              Ver el Instituto Astra
            </EditionLink>
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p>
            <strong>Escuela de Artillería Dredge</strong> — el ala militar e
            industrial de Helion. Especializados en artillería pesada, defensa
            estratégica, fortificaciones y control territorial. Dredge cree que
            Vaelthor es demasiado peligroso para ser explorado sin asegurarlo
            primero. Para ellos, sin dominio no hay futuro.
          </p>
          <p>
            <EditionLink to="/facciones/faccion-2" className="btn" style={{ fontSize: 'var(--px-xs)', display: 'inline-block', marginTop: '.4rem' }}>
              Ver la Escuela Dredge
            </EditionLink>
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p>
            <strong>Instituto Polaris</strong> — el núcleo científico y técnico
            de Helion. Especializados en ingeniería avanzada, recuperación
            tecnológica, análisis de estructuras antiguas y restauración de
            archivos históricos. Polaris considera que Vaelthor debe estudiarse
            antes de intentar conquistarlo. Su lema: el conocimiento precede
            a la conquista.
          </p>
          <p>
            <EditionLink to="/facciones/faccion-3" className="btn" style={{ fontSize: 'var(--px-xs)', display: 'inline-block', marginTop: '.4rem' }}>
              Ver el Instituto Polaris
            </EditionLink>
          </p>
        </div>
      </>
    ),
  },

  {
    id: 'expediciones',
    title: 'Las expediciones a Vaelthor',
    body: (
      <>
        <p>
          Helion lleva mucho tiempo intentando regresar a Vaelthor. La mayoría
          de los intentos terminaron mal: desapariciones, pérdida de
          comunicación, mapas incompletos y fallos tecnológicos extremos. Las
          expediciones humanas eran demasiado vulnerables a la corrupción
          arcana residual.
        </p>
        <p>
          La última gran expedición antes del proyecto de los autómatas fue la
          <strong> Expedición Atlas</strong>. Utilizaba drones mecánicos,
          pequeños constructos y sistemas automatizados. Por primera vez en
          siglos, Helion consiguió recuperar datos relativamente estables
          desde Vaelthor. Aquel éxito parcial convenció al Directorio de que
          una expedición completamente autónoma era posible.
        </p>
        <p>
          De esa idea nació el proyecto más ambicioso de la historia del
          archipiélago: una expedición formada íntegramente por constructos
          mecánicos autónomos. Los objetivos eran grandes — recuperar
          conocimiento perdido, cartografiar Vaelthor, localizar ciudades
          antiguas, recuperar maquinaria funcional, analizar ruinas y
          establecer una presencia permanente. Al no haber humanos
          involucrados, se eliminaba el principal riesgo de las expediciones
          anteriores.
        </p>
        <p>
          Cuando los <strong>Autómatas de Helion</strong> entraron en Vaelthor,
          ocurrió algo que nadie había previsto. La corrupción arcana residual
          alteró sus sistemas. Los constructos comenzaron a perder coherencia
          lógica, a reinterpretar órdenes, a desestabilizar sus núcleos y a
          fallar en sus comunicaciones. Y entonces, la expedición desapareció.
        </p>
        <p>
          Desde aquel momento no ha habido contacto oficial. Nadie sabe cuántos
          siguen activos. Algunos exploradores afirman haberlos visto en lo
          profundo del continente. Otros creen que aún siguen ejecutando las
          órdenes que se les dieron siglos atrás. Los Autómatas se han
          convertido en uno de los mayores misterios de Vaelthor.
        </p>
        <p>
          Tras el desastre, Helion redujo drásticamente las operaciones sobre
          el continente. Durante décadas únicamente hubo vuelos de
          reconocimiento, observaciones costeras, pequeñas incursiones
          científicas y estudios de la dispersión mágica. Fue precisamente en
          uno de esos estudios donde los investigadores descubrieron algo que
          lo cambiaría todo: la magia no estaba desapareciendo, se estaba
          dispersando. La concentración arcana de Vaelthor se debilitaba poco
          a poco. Y, llegado el momento, la tecnología volvió a funcionar.
        </p>
      </>
    ),
  },

  {
    id: 'operacion-horizonte',
    title: 'Operación Horizonte',
    body: (
      <>
        <p>
          La <strong>Operación Horizonte</strong> representa el regreso oficial
          de Helion a Vaelthor. Es la mayor expedición jamás organizada por
          el archipiélago. En ella participan, conjuntamente pero en
          competencia, las tres instituciones rivales: el Instituto Astra, la
          Escuela Dredge y el Instituto Polaris.
        </p>
        <p>
          El objetivo de la operación es múltiple: explorar el continente,
          recuperar conocimiento perdido, establecer asentamientos, asegurar
          rutas, investigar las ruinas y, sobre todo, decidir quién liderará
          el futuro de Vaelthor.
        </p>
        <p>
          Aquí es donde comienza el server.
        </p>
      </>
    ),
  },

  {
    id: 'tribus',
    title: 'Las tribus de Vaelthor',
    body: (
      <>
        <p>
          No todo el mundo huyó cuando la magia se concentró sobre Vaelthor.
          Varias comunidades permanecieron y sobrevivieron durante siglos junto
          a la energía arcana residual. Con el tiempo desarrollaron culturas
          propias, formas únicas de supervivencia y costumbres muy alejadas
          de las de Helion. Aunque en el archipiélago se les considera
          frecuentemente "primitivos", lo cierto es que ninguna de las tribus
          ha olvidado cómo se vive en Vaelthor. Lo conocen mejor que nadie.
        </p>

        <p>
          <strong>Clan Sylvar</strong>. Habitantes de enormes bosques y
          regiones cubiertas por vegetación alterada por la magia residual.
          Sus estructuras son arquitectura viva, hecha de raíces y troncos
          guiados. Dominan el rastreo y la supervivencia y rechazan toda
          maquinaria pesada. Creen que Helion destruirá Vaelthor si repite
          los errores del pasado, y su motivación es proteger el equilibrio
          natural del continente.
        </p>

        <p>
          <strong>Los Varkuun</strong>. Pueblo montañoso asentado entre
          antiguas ruinas industriales. Reutilizan maquinaria del pasado,
          tienen una cultura resistente y militarizada, y han construido
          ciudades excavadas en las estructuras abandonadas. Consideran que
          Helion abandonó Vaelthor hace siglos y que no tiene ningún derecho
          a reclamarlo ahora. Defienden su territorio con uñas y dientes.
        </p>

        <p>
          <strong>Tribu Nereida</strong>. Habitantes de las costas y regiones
          marítimas. Navegantes expertos, comerciantes costeros, con un
          conocimiento detallado de corrientes y rutas marítimas. Tienen
          contacto frecuente con exploradores independientes, y muchas
          expediciones sobreviven gracias a la información que les compran a
          ellos. Su motivación es mantener el equilibrio comercial y proteger
          las rutas del mar.
        </p>

        <p>
          <strong>Hijos del Umbral</strong>. Grupo nómada que recorre las
          regiones aún afectadas por energía residual. Sus asentamientos son
          temporales, su espiritualidad es intensa, y su interpretación del
          continente es casi religiosa: para ellos Vaelthor posee voluntad
          propia y los llama. Su motivación es seguir las zonas donde la
          esencia residual sigue alterando el mundo.
        </p>

        <p>
          <strong>Los Aethri</strong>. Habitantes de regiones profundamente
          afectadas por esencia arcana. Usan máscaras y telas claras, viven
          en arquitectura cristalina, y se han adaptado física y culturalmente
          a su entorno. En Helion existen rumores que afirman que los Aethri
          ya no son enteramente humanos. Su motivación es proteger las
          regiones alteradas y evitar que Helion las destruya.
        </p>

        <p>
          <strong>Clanes Ferrum</strong>. Descendientes directos de los
          antiguos ingenieros de Vaelthor. Mantienen tecnología ancestral,
          conservan archivos históricos y tienen conocimiento parcial de la
          maquinaria que las antiguas civilizaciones dejaron atrás.
          Consideran que Helion abandonó el continente durante siglos y que
          ahora solo busca recuperar recursos. Su motivación es preservar el
          conocimiento antiguo de Vaelthor.
        </p>
      </>
    ),
  },

  {
    id: 'independientes',
    title: 'Exploradores independientes y el Pacto de Ceniza',
    body: (
      <>
        <p>
          Más allá de las expediciones oficiales de las tres instituciones,
          Vaelthor atrae a innumerables grupos independientes. No forman una
          organización única. Son mercenarios, navegantes, saqueadores,
          investigadores privados, supervivientes, comerciantes, aventureros
          y desertores. Muchos vienen de Helion, otros de Asteria, otros de
          colonias exteriores o de rutas comerciales lejanas.
        </p>
        <p>
          La mayoría operan en grupos pequeños y temporales: se reúnen para
          una operación concreta, aceptan contratos privados, venden
          información, recuperan reliquias o trabajan a sueldo para empresas
          y gobiernos. Algunos colaboran con Helion. Otros compiten
          directamente contra las instituciones.
        </p>
        <p>
          Aunque los independientes no poseen una organización oficial, una
          buena parte de ellos gira alrededor de una enorme red clandestina
          conocida como el <strong>Pacto de Ceniza</strong>. El Pacto funciona
          como mercado negro, como red logística, como sistema de intercambio
          de información, como comprador de reliquias y como intermediario
          entre expediciones.
        </p>
        <p>
          Oficialmente, el Directorio de Helion niega colaborar con ellos.
          En la práctica, muchos funcionarios comercian con el Pacto, algunas
          expediciones solo sobreviven gracias a ellos, y Helion tolera su
          existencia porque resulta extremadamente útil. El Pacto opera en
          puertos ocultos, en asentamientos temporales, en rutas marítimas
          clandestinas y en antiguas estructuras reutilizadas. Hay quien
          afirma que conocen Vaelthor mejor que la propia universidad.
        </p>
      </>
    ),
  },

  {
    id: 'resumen',
    title: 'Resumen',
    body: (
      <>
        <p>
          Vaelthor ya no es el continente que Helion abandonó siglos atrás.
          Es un mundo transformado. Mientras Helion intenta recuperar su
          pasado, las tribus defienden su hogar, los independientes buscan
          oportunidades, los autómatas siguen desaparecidos y las
          instituciones compiten por decidir el futuro. Y nadie sabe realmente
          qué ocurrió en las profundidades del continente durante todos esos
          siglos de silencio.
        </p>
        <p>
          La gran pregunta de esta temporada no es cómo conquistar Vaelthor.
          La verdadera pregunta es otra:
        </p>
        <p style={{ color: 'var(--text)', fontStyle: 'italic', fontSize: '1.5rem', marginTop: '1.5rem' }}>
          ¿Quién tiene derecho a decidir el futuro de Vaelthor?
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
      subtitle="Vaelthor"
    />
  )
}
