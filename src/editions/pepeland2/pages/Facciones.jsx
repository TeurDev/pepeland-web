import FactionIcon from '@shared/components/FactionIcon'
import { EditionLink, EditionNavLink } from '@shared/components/EditionContext'

import { facciones } from '../data'

export default function Facciones() {
  return (
    <main className="page">
      <div className="container" style={{ padding: '4rem 2rem' }}>

        {/* ── Acceso misiones ──────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="fade-in">
          <h1 className="section-title" style={{ display: 'inline-block' }}>Facciones</h1>
          <p style={{ color: 'var(--text-dim)', marginTop: '1rem', maxWidth: 520, margin: '1rem auto 2rem' }}>
            Conoce las tres facciones que luchan por el control de Vaelthor.
            Si ya tienes tu código, accede directamente a tus misiones.
          </p>
          <EditionLink to="/misiones" className="btn btn-solid">
            ◆ Acceder a mis misiones
          </EditionLink>
        </div>

        <hr className="divider" style={{ margin: '0 0 3rem' }} />

        {/* ── Cards de facciones ───────────────────── */}
        <h2 className="section-title">Las Tres Facciones</h2>

        <div className="facciones-grid fade-in-children">
          {facciones.map(f => (
            <EditionLink
              key={f.id}
              to={`/facciones/${f.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="faccion-card"
                style={{ '--faccion-color': f.color }}
              >
                <div className="faccion-card-icon"><FactionIcon type={f.icono} color={f.color} size={84} /></div>
                <div className="faccion-card-name">{f.nombre}</div>
                <div className="faccion-card-tagline">{f.tagline}</div>
              </div>
            </EditionLink>
          ))}
        </div>

      </div>
    </main>
  )
}
