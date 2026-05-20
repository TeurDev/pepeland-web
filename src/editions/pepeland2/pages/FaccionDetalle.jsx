import FactionIcon from '@shared/components/FactionIcon'
import { EditionLink, EditionNavLink, useEdition } from '@shared/components/EditionContext'
import { useParams, Navigate } from 'react-router-dom'
import { facciones } from '../data'

export default function FaccionDetalle() {
  const { prefix } = useEdition()
  const { id } = useParams()
  const faccion = facciones.find(f => f.id === id)

  if (!faccion) return <Navigate to={`${prefix}/facciones`} replace />

  return (
    <main className="page">

      {/* ── Hero de la facción ───────────────────── */}
      <div
        className="faccion-hero fade-in"
        style={{ borderBottom: `2px solid ${faccion.color}40` }}
      >
        {/* Aquí puedes poner el logo real de la facción en vez del emoji */}
        <div className="faccion-hero-icon"><FactionIcon type={faccion.icono} color={faccion.color} size={120} /></div>
        <h1 className="faccion-hero-name" style={{ color: faccion.color }}>{faccion.nombre}</h1>
        <p className="faccion-hero-tagline">"{faccion.tagline}"</p>
      </div>

      {/* ── Cuerpo ──────────────────────────────── */}
      <div className="faccion-body fade-in">
        <h2 className="section-title">Sobre la facción</h2>
        <p>{faccion.descripcion}</p>
        <p style={{ color: 'var(--text-dim)' }}>
          Añade aquí más información: historia de la facción, sus líderes,
          sus territorios en Vaelthor, su filosofía de combate, etc.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <EditionLink to="/misiones" className="btn btn-solid">◆ Acceder a misiones</EditionLink>
          <EditionLink to="/facciones" className="btn">← Volver a facciones</EditionLink>
        </div>
      </div>

    </main>
  )
}
