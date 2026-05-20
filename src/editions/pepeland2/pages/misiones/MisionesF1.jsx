import { useLocation, Link, Navigate } from 'react-router-dom'
import { useEdition } from '@shared/components/EditionContext'
import MisionAccordion from '@shared/components/MisionAccordion'
import FactionIcon from '@shared/components/FactionIcon'

const ACCENT = '#f5b842'  // oro mágico

export default function MisionesF1() {
  const { prefix } = useEdition()
  const { state } = useLocation()
  if (!state?.misiones) return <Navigate to={`${prefix}/misiones`} replace />

  return (
    <main className="mision-page fade-in" style={{
      '--m-accent': ACCENT,
      '--m-bg':  '#180f08',
      '--m-bg2': '#241608',
    }}>
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        background: 'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(245,184,66,.09) 0%, transparent 65%)' }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <div className="mision-header">
          <div style={{ marginBottom: '.6rem', display: 'flex', justifyContent: 'center' }}><FactionIcon type="aviation" color={ACCENT} size={72} /></div>
          <div className="mision-badge">LOS MAGOS · LA ESENCIA TE GUÍA</div>
          <div className="mision-player-name">{state.jugador}</div>
          <p style={{ fontFamily:'var(--font-vt)', color:'var(--text-dim)', marginTop:'.4rem' }}>
            Herederos del testamento de Rohlan
          </p>
        </div>

        <div className="mision-body">
          <p className="mision-list-title">▶ MISIONES — CÓDIGO: {state.codigo}</p>
          <MisionAccordion misiones={state.misiones} accent={ACCENT} />

          <div style={{ display:'flex', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            <Link to={`${prefix}/facciones/faccion-1`} className="btn">VER MI FACCIÓN →</Link>
            <Link to={`${prefix}/misiones`} className="btn" style={{ color:'var(--text-dim)', borderColor:'var(--bg4)' }}>
              ← CAMBIAR CÓDIGO
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
