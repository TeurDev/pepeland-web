import { EditionLink, EditionNavLink, useEdition } from '@shared/components/EditionContext'
import { useLocation, Navigate } from 'react-router-dom'
import MisionAccordion from '@shared/components/MisionAccordion'
import FactionIcon from '@shared/components/FactionIcon'

const ACCENT = '#4ade80'  // verde

export default function MisionesF3() {
  const { prefix } = useEdition()
  const { state } = useLocation()
  if (!state?.misiones) return <Navigate to={`${prefix}/misiones`} replace />

  return (
    <main className="mision-page fade-in" style={{
      '--m-accent': ACCENT,
      '--m-bg':  '#060e08',
      '--m-bg2': '#0d1a10',
    }}>
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        background: 'radial-gradient(ellipse 70% 55% at 25% 50%, rgba(74,222,128,.07) 0%, transparent 60%)' }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <div className="mision-header">
          <div style={{ marginBottom: '.6rem', display: 'flex', justifyContent: 'center' }}><FactionIcon type="general" color={ACCENT} size={72} /></div>
          <div className="mision-badge">INSTITUTO POLARIS · INFORMES DE CAMPO</div>
          <div className="mision-player-name">{state.jugador}</div>
          <p style={{ fontFamily:'var(--font-vt)', color:'var(--text-dim)', marginTop:'.4rem' }}>
            Voces del bosque dormido
          </p>
        </div>

        <div className="mision-body">
          <p className="mision-list-title">INFORMES — CÓDIGO: {state.codigo}</p>
          <MisionAccordion misiones={state.misiones} accent={ACCENT} />

          <div style={{ display:'flex', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            <EditionLink to="/facciones/faccion-3" className="btn">VER MI FACCIÓN →</EditionLink>
            <EditionLink to="/misiones" className="btn" style={{ color:'var(--text-dim)', borderColor:'var(--bg4)' }}>
              ← CAMBIAR CÓDIGO
            </EditionLink>
          </div>
        </div>
      </div>
    </main>
  )
}
