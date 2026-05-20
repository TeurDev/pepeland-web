import { EditionLink, EditionNavLink, useEdition } from '@shared/components/EditionContext'
import { useLocation, Navigate } from 'react-router-dom'
import MisionAccordion from '@shared/components/MisionAccordion'
import FactionIcon from '@shared/components/FactionIcon'

const ACCENT = '#f87171'  // rojo

export default function MisionesF2() {
  const { prefix } = useEdition()
  const { state } = useLocation()
  if (!state?.misiones) return <Navigate to={`${prefix}/misiones`} replace />

  return (
    <main className="mision-page fade-in" style={{
      '--m-accent': ACCENT,
      '--m-bg':  '#0f0808',
      '--m-bg2': '#1f0f0f',
    }}>
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        background: 'radial-gradient(ellipse 60% 45% at 50% 100%, rgba(248,113,113,.08) 0%, transparent 60%)' }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <div className="mision-header">
          <div style={{ marginBottom: '.6rem', display: 'flex', justifyContent: 'center' }}><FactionIcon type="artillery" color={ACCENT} size={72} /></div>
          <div className="mision-badge">ESCUELA DREDGE · ÓRDENES DE COMBATE</div>
          <div className="mision-player-name">{state.jugador}</div>
          <p style={{ fontFamily:'var(--font-vt)', color:'var(--text-dim)', marginTop:'.4rem' }}>
            Forjados en la ceniza
          </p>
        </div>

        <div className="mision-body">
          <p className="mision-list-title">ÓRDENES — CÓDIGO: {state.codigo}</p>
          <MisionAccordion misiones={state.misiones} accent={ACCENT} />

          <div style={{ display:'flex', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            <EditionLink to="/facciones/faccion-2" className="btn">VER MI FACCIÓN →</EditionLink>
            <EditionLink to="/misiones" className="btn" style={{ color:'var(--text-dim)', borderColor:'var(--bg4)' }}>
              ← CAMBIAR CÓDIGO
            </EditionLink>
          </div>
        </div>
      </div>
    </main>
  )
}
