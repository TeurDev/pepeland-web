import { useLocation, Link, Navigate } from 'react-router-dom'
import { useEdition } from '@shared/components/EditionContext'
import MisionAccordion from '@shared/components/MisionAccordion'
import FactionIcon from '@shared/components/FactionIcon'

const ACCENT = '#c4a37a'  // gris-dorado tenue, sombrío

export default function MisionesF3() {
  const { prefix } = useEdition()
  const { state } = useLocation()
  if (!state?.misiones) return <Navigate to={`${prefix}/misiones`} replace />

  return (
    <main className="mision-page fade-in" style={{
      '--m-accent': ACCENT,
      '--m-bg':  '#0a0805',
      '--m-bg2': '#13100a',
    }}>
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        background: 'radial-gradient(ellipse 70% 55% at 25% 50%, rgba(196,163,122,.06) 0%, transparent 60%)' }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <div className="mision-header">
          <div style={{ marginBottom: '.6rem', display: 'flex', justifyContent: 'center' }}><FactionIcon type="general" color={ACCENT} size={72} /></div>
          <div className="mision-badge">LOS OCULTOS · ENCARGOS DE LA SOMBRA</div>
          <div className="mision-player-name">{state.jugador}</div>
          <p style={{ fontFamily:'var(--font-vt)', color:'var(--text-dim)', marginTop:'.4rem' }}>
            Sombras que el mundo olvida
          </p>
        </div>

        <div className="mision-body">
          <p className="mision-list-title">ENCARGOS — CÓDIGO: {state.codigo}</p>
          <MisionAccordion misiones={state.misiones} accent={ACCENT} />

          <div style={{ display:'flex', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            <Link to={`${prefix}/facciones/faccion-3`} className="btn">VER MI FACCIÓN →</Link>
            <Link to={`${prefix}/misiones`} className="btn" style={{ color:'var(--text-dim)', borderColor:'var(--bg4)' }}>
              ← CAMBIAR CÓDIGO
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
