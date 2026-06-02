import WikiSidebar from '@shared/components/WikiSidebar'

const tutoriales = [
  {
    id: 'tutorial-1',
    titulo: 'Presentación del servidor',
    videoId: 'PzfDBxwNasA',
    steps: [
      'Abre Minecraft Java Edition (versión X.X).',
      'Ve a Multijugador → Añadir servidor.',
      'Introduce la IP: vaelthor.tuservidor.net',
      'Conéctate y espera a que cargue el spawn.',
      'Lee el cartel de bienvenida y elige tu camino.',
    ],
  },
  {
    id: 'tutorial-2',
    titulo: 'Cómo instalar los mods',
    videoId: 'MdSTirhomNM',
    steps: [
      'Habla con el NPC de facciones en el spawn.',
      'Lee la descripción de cada facción.',
      'Escribe /faccion unirse <nombre>.',
      'Recibirás tu código personal por mensaje privado.',
      'Úsalo en la web para ver tus misiones activas.',
    ],
  },
  {
    id: 'tutorial-3',
    titulo: 'Mecánicas especiales',
    videoId: 'oGY32HRZTa4',
    steps: [
      'Aquí explicas la mecánica especial 1.',
      'Paso 2 de la mecánica.',
      'Paso 3.',
    ],
  },
]

const sidebarItems = tutoriales.map((t, i) => ({
  id: t.id,
  label: `${String(i + 1).padStart(2, '0')}. ${t.titulo}`,
}))

export default function Tutorial() {
  return (
    <main className="page">
      <div className="container" style={{ padding: '4rem 2rem' }}>

        <h1 className="px-title fade-in">Tutoriales</h1>
        <p style={{
          fontFamily: 'var(--font-vt)',
          fontSize: 'var(--vt-md)',
          color: 'var(--text-dim)',
          marginBottom: '3.5rem',
        }}>
          Guías en vídeo para empezar en Vaelthor sin perderte nada.
        </p>

        {/* Sidebar izquierda + contenido */}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>

          <WikiSidebar items={sidebarItems} title="TUTORIALES" />

          {/* Contenido — mismo ancho que antes */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {tutoriales.map((t, i) => (
              <div key={t.id} id={t.id} className="fade-in" style={{ marginBottom: '8rem' }}>

                {/* Título */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.6rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-px)',
                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                    color: 'var(--pink)',
                    opacity: .45,
                    lineHeight: 1,
                    flexShrink: 0,
                    userSelect: 'none',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-px)',
                      fontSize: 'var(--px-xs)',
                      color: 'var(--gold)',
                      letterSpacing: '.2em',
                      display: 'block',
                      marginBottom: '.4rem',
                    }}>
                      TUTORIAL {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-px)',
                      fontSize: 'clamp(.55rem, 2vw, .78rem)',
                      color: 'var(--text)',
                      lineHeight: 1.7,
                    }}>
                      {t.titulo}
                    </span>
                  </div>
                </div>

                {/* Vídeo */}
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  background: 'var(--bg2)',
                  border: '2px solid var(--bg4)',
                  boxShadow: '0 0 40px rgba(224,64,251,.06)',
                  marginBottom: '1.4rem',
                }}>
                  <iframe
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    title={t.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Pasos */}
                <div style={{ paddingLeft: '.5rem' }}>
                  {t.steps.map((step, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'baseline',
                      padding: '.55rem 0',
                      borderBottom: j < t.steps.length - 1 ? '1px solid var(--bg3)' : 'none',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-px)',
                        fontSize: 'var(--px-xs)',
                        color: 'var(--gold)',
                        flexShrink: 0,
                        minWidth: 32,
                        opacity: .75,
                      }}>
                        {String(j + 1).padStart(2, '0')}.
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-vt)',
                        fontSize: 'var(--vt-md)',
                        color: 'var(--text-dim)',
                        lineHeight: 1.55,
                      }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                {i < tutoriales.length - 1 && (
                  <div style={{
                    marginTop: '5rem',
                    height: 2,
                    background: 'linear-gradient(90deg, var(--pink), var(--pink-dim), transparent)',
                  }} />
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
