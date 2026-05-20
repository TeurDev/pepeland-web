import WikiSidebar from '@shared/components/WikiSidebar'

const tutoriales = [
  {
    id: 'tutorial-1',
    titulo: 'Conectarte al servidor',
    videoId: 'dQw4w9WgXcQ',
    steps: [
      'Abre Minecraft Java Edition (versión 1.20.4).',
      'Ve a Multijugador → Añadir servidor.',
      'Introduce la IP: pepeland2.tuservidor.net',
      'Conéctate y espera a llegar al pueblo neutral de Novaenor.',
      'Habla con el guía del observatorio para iniciar tu camino.',
    ],
  },
  {
    id: 'tutorial-2',
    titulo: 'Unirse a una facción',
    videoId: 'dQw4w9WgXcQ',
    steps: [
      'Acércate al portal de facciones en el centro de Novaenor.',
      'Lee las tablas con las descripciones de Magos, Coalición y Ocultos.',
      'Escribe /faccion unirse <nombre>.',
      'Si eliges Ocultos, recibirás instrucciones especiales por mensaje privado.',
      'Tu código personal se generará automáticamente para acceder a misiones.',
    ],
  },
  {
    id: 'tutorial-3',
    titulo: 'Sistema de esencia y cristales',
    videoId: 'dQw4w9WgXcQ',
    steps: [
      'Los Magos pueden recolectar fragmentos de esencia residual en zonas señaladas.',
      'La Coalición fabrica disruptores y maquinaria con planos arcano-tecnológicos.',
      'Los Ocultos no recolectan: roban, intercambian y observan.',
      'Cualquier mal uso de la esencia puede generar rupturas locales — cuidado.',
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
      <WikiSidebar items={sidebarItems} title="TUTORIALES" />
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 className="px-title fade-in">Tutoriales</h1>
        <p style={{ fontFamily: 'var(--font-vt)', fontSize: 'var(--vt-md)', color: 'var(--text-dim)', marginBottom: '3.5rem' }}>
          Guías para sobrevivir tu primera semana en Novaenor.
        </p>

        <div>
          {tutoriales.map((t, i) => (
            <div key={t.id} id={t.id} className="fade-in" style={{ marginBottom: '8rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'1.2rem', marginBottom:'1.6rem' }}>
                <span style={{ fontFamily:'var(--font-px)', fontSize:'clamp(2rem, 6vw, 3.5rem)', color:'var(--pink)', opacity:.45, lineHeight:1, flexShrink:0, userSelect:'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span style={{ fontFamily:'var(--font-px)', fontSize:'var(--px-xs)', color:'var(--title, var(--gold))', letterSpacing:'.2em', display:'block', marginBottom:'.4rem' }}>
                    TUTORIAL {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily:'var(--font-px)', fontSize:'clamp(.55rem, 2vw, .78rem)', color:'var(--text)', lineHeight:1.7 }}>
                    {t.titulo}
                  </span>
                </div>
              </div>

              <div style={{ position:'relative', paddingBottom:'56.25%', background:'var(--bg2)', border:'2px solid var(--bg4)', boxShadow:'0 0 40px rgba(245,184,66,.06)', marginBottom:'1.4rem' }}>
                <iframe
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none' }}
                  src={`https://www.youtube.com/embed/${t.videoId}`}
                  title={t.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div style={{ paddingLeft:'.5rem' }}>
                {t.steps.map((step, j) => (
                  <div key={j} style={{ display:'flex', gap:'1rem', alignItems:'baseline', padding:'.55rem 0', borderBottom: j < t.steps.length - 1 ? '1px solid var(--bg3)' : 'none' }}>
                    <span style={{ fontFamily:'var(--font-px)', fontSize:'var(--px-xs)', color:'var(--gold)', flexShrink:0, minWidth:32, opacity:.75 }}>
                      {String(j + 1).padStart(2, '0')}.
                    </span>
                    <span style={{ fontFamily:'var(--font-vt)', fontSize:'var(--vt-md)', color:'var(--text-dim)', lineHeight:1.55 }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {i < tutoriales.length - 1 && (
                <div style={{ marginTop:'5rem', height:2, background:'linear-gradient(90deg, var(--pink), var(--pink-dim), transparent)' }}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
