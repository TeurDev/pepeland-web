import { useState } from 'react'
import MisionDetalleModal from './MisionDetalleModal'

// ── Esquina ornamental SVG pixel-art ──────────────────────────────────────
function OrnamentalCorner({ accent, flip = false }) {
  const style = {
    display: 'inline-block',
    width: 36, height: 36,
    flexShrink: 0,
    transform: flip ? 'scaleX(-1)' : 'none',
  }
  return (
    <svg style={style} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Borde L principal */}
      <rect x="0"  y="0"  width="4" height="28" fill={accent}/>
      <rect x="0"  y="0"  width="28" height="4" fill={accent}/>
      {/* Flor / nudo central */}
      <rect x="6"  y="6"  width="6" height="6" fill={accent} opacity=".85"/>
      <rect x="8"  y="4"  width="2" height="2" fill={accent} opacity=".6"/>
      <rect x="4"  y="8"  width="2" height="2" fill={accent} opacity=".6"/>
      {/* Pétalo derecho */}
      <rect x="14" y="7"  width="4" height="4" fill={accent} opacity=".55"/>
      <rect x="20" y="8"  width="2" height="2" fill={accent} opacity=".3"/>
      {/* Pétalo abajo */}
      <rect x="7"  y="14" width="4" height="4" fill={accent} opacity=".55"/>
      <rect x="8"  y="20" width="2" height="2" fill={accent} opacity=".3"/>
      {/* Punto interior */}
      <rect x="9"  y="9"  width="2" height="2" fill="#fff"   opacity=".25"/>
    </svg>
  )
}

// ── Borde tipo cadena horizontal ─────────────────────────────────────────
function ChainBorder({ accent }) {
  return (
    <div style={{
      width: '100%',
      height: 8,
      backgroundImage: `repeating-linear-gradient(
        90deg,
        ${accent}88 0px, ${accent}88 4px,
        transparent 4px, transparent 6px,
        ${accent}55 6px, ${accent}55 8px,
        transparent 8px, transparent 10px,
        ${accent}88 10px, ${accent}88 14px,
        transparent 14px, transparent 16px
      )`,
      backgroundSize: '16px 100%',
      flexShrink: 0,
    }} />
  )
}

// ── Icono medallón SVG ─────────────────────────────────────────────────────
function Medallon({ accent, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="13" stroke={accent} strokeWidth="2" fill={accent + '22'}/>
      <circle cx="16" cy="16" r="8"  stroke={accent} strokeWidth="1.5" fill="none" opacity=".6"/>
      <rect x="14" y="8"  width="4" height="4" fill={accent} opacity=".8"/>
      <rect x="14" y="20" width="4" height="4" fill={accent} opacity=".8"/>
      <rect x="8"  y="14" width="4" height="4" fill={accent} opacity=".8"/>
      <rect x="20" y="14" width="4" height="4" fill={accent} opacity=".8"/>
      <rect x="15" y="15" width="2" height="2" fill={accent}/>
    </svg>
  )
}

// ── Icono de categoría ────────────────────────────────────────────────────
function CategoryIcon({ type, accent, size = 28 }) {
  if (type === 'principales') {
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0 }}>
        <rect x="10" y="2"  width="8"  height="10" fill={accent}/>
        <rect x="8"  y="4"  width="12" height="8"  fill={accent} opacity=".7"/>
        <rect x="12" y="0"  width="4"  height="4"  fill={accent} opacity=".9"/>
        {/* destellos */}
        <rect x="6"  y="2"  width="2" height="2" fill={accent} opacity=".5"/>
        <rect x="20" y="2"  width="2" height="2" fill={accent} opacity=".5"/>
        <rect x="12" y="14" width="4" height="12" fill={accent} opacity=".6"/>
        <rect x="10" y="18" width="8" height="4"  fill={accent} opacity=".5"/>
      </svg>
    )
  }
  if (type === 'secundarias') {
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0 }}>
        <rect x="12" y="2"  width="4" height="14" fill={accent} opacity=".8"/>
        <rect x="8"  y="4"  width="12" height="4" fill={accent} opacity=".6"/>
        <rect x="10" y="18" width="8" height="8"  fill={accent} opacity=".7"/>
        <rect x="12" y="20" width="4" height="4"  fill={accent}/>
      </svg>
    )
  }
  // completadas
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0 }}>
      <rect x="4"  y="12" width="8"  height="4" fill={accent} opacity=".7"
        transform="rotate(-45 8 14)" />
      <rect x="10" y="6"  width="14" height="4" fill={accent} opacity=".9"
        transform="rotate(45 17 8)" />
      <circle cx="14" cy="14" r="10" stroke={accent} strokeWidth="2" fill="none" opacity=".3"/>
    </svg>
  )
}

// ── Metadatos por categoría ───────────────────────────────────────────────
const CATEGORY_META = {
  principales: { label: 'Principales' },
  secundarias:  { label: 'Secundarias' },
  completadas:  { label: 'Completadas' },
}

// ── Tarjeta de misión individual ──────────────────────────────────────────
function MisionCard({ mision, accent, index }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div
      className="fade-in"
      style={{
        marginBottom: '1.2rem',
        border: `2px solid ${accent}55`,
        background: 'var(--bg)',
        position: 'relative',
        animationDelay: `${index * .08}s`,
      }}
    >
      {/* Esquinas ornamentales */}
      <div style={{ position:'absolute', top:-2, left:-2 }}>
        <OrnamentalCorner accent={accent} />
      </div>
      <div style={{ position:'absolute', top:-2, right:-2 }}>
        <OrnamentalCorner accent={accent} flip />
      </div>
      <div style={{ position:'absolute', bottom:-2, left:-2, transform:'scaleY(-1)' }}>
        <OrnamentalCorner accent={accent} />
      </div>
      <div style={{ position:'absolute', bottom:-2, right:-2, transform:'scale(-1,-1)' }}>
        <OrnamentalCorner accent={accent} />
      </div>

      {/* Borde cadena superior */}
      <ChainBorder accent={accent} />

      {/* Header de la misión */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '.8rem 2.5rem',
        background: accent + '0d',
      }}>
        <Medallon accent={accent} size={28} />
        <span style={{
          fontFamily: 'var(--font-px)',
          fontSize: 'clamp(.58rem, 1.5vw, .8rem)',
          color: 'var(--text)',
          letterSpacing: '.06em',
          lineHeight: 1.8,
          textAlign: 'center',
        }}>
          {mision.titulo}
        </span>
      </div>

      {/* Borde cadena inferior del header */}
      <ChainBorder accent={accent} />

      {/* Descripción */}
      {mision.desc && (
        <div style={{ padding: '1rem 1.8rem 1.2rem' }}>
          <p style={{
            fontFamily: 'var(--font-vt)',
            fontSize: 'var(--vt-md)',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}>
            {mision.desc}
          </p>
          <button
            className="btn"
            style={{ fontSize: 'var(--px-xs)' }}
            onClick={() => setShowModal(true)}
          >
            Mas detalles
          </button>
        </div>
      )}

      {showModal && (
        <MisionDetalleModal
          mision={mision}
          accent={accent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

// ── Acordeón de una categoría ─────────────────────────────────────────────
function MisionCategory({ type, misiones, accent }) {
  const [open, setOpen] = useState(type === 'principales')
  const meta = CATEGORY_META[type]

  if (!misiones || misiones.length === 0) return null

  return (
    <div style={{ marginBottom: '1.2rem' }}>

      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '.7rem',
          background: 'var(--bg2)',
          border: `2px solid ${accent}44`,
          borderBottom: open ? `2px solid ${accent}22` : `2px solid ${accent}44`,
          padding: '.7rem 1rem .7rem .8rem',
          cursor: 'pointer',
          color: 'var(--text)',
          textAlign: 'left',
          transition: 'border-color .2s, background .2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = accent + '99'
          e.currentTarget.style.background = accent + '12'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = accent + '44'
          e.currentTarget.style.background = 'var(--bg2)'
        }}
      >
        {/* 4 esquinas pequeñas a la izquierda */}
        {[0,1,2,3].map(i => (
          <span key={i} style={{
            display: 'inline-block',
            width: 10, height: 10,
            borderTop: `2px solid ${accent}`,
            borderLeft: `2px solid ${accent}`,
            flexShrink: 0,
            opacity: .7 - i * .12,
          }}/>
        ))}

        {/* Icono categoría */}
        <CategoryIcon type={type} accent={accent} size={22} />

        {/* Label */}
        <span style={{
          fontFamily: 'var(--font-px)',
          fontSize: '.5rem',
          color: 'var(--text)',
          letterSpacing: '.08em',
          lineHeight: 1.9,
          flex: 1,
        }}>
          {meta.label}
        </span>

        {/* Contador */}
        <span style={{
          fontFamily: 'var(--font-px)',
          fontSize: '.38rem',
          color: accent,
          marginRight: '.6rem',
          opacity: .7,
        }}>
          [{misiones.length}]
        </span>

        {/* Flecha: apunta ↓ y rota a ↑ cuando está abierto */}
        <span style={{
          fontSize: '1.1rem',
          display: 'inline-block',
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
          color: accent,
          lineHeight: 1,
        }}>▶</span>
      </button>

      {/* Contenido expandible — grid-template-rows anima a altura real automáticamente */}
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows .45s cubic-bezier(.4,0,.2,1)',
      }}>
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
        {/* Contenedor que engloba todas las misiones de la categoría */}
        <div style={{
          margin: '.6rem 0 1.2rem',
          border: `2px solid ${accent}33`,
          borderTop: `3px solid ${accent}66`,
          background: `linear-gradient(180deg, ${accent}08 0%, transparent 60%)`,
          position: 'relative',
          padding: '1.2rem 1rem 1rem',
        }}>
          {/* Línea vertical izquierda decorativa */}
          <div style={{
            position: 'absolute',
            top: 0, left: 10,
            bottom: 0,
            width: 2,
            background: `linear-gradient(180deg, ${accent}55, ${accent}11)`,
            pointerEvents: 'none',
          }}/>
          {misiones.map((m, i) => (
            <MisionCard key={i} mision={m} accent={accent} index={i} />
          ))}
        </div>
        </div>
      </div>

    </div>
  )
}

// ── Export principal ──────────────────────────────────────────────────────
export default function MisionAccordion({ misiones, accent }) {
  return (
    <div>
      <MisionCategory type="principales" misiones={misiones.principales} accent={accent} />
      <MisionCategory type="secundarias" misiones={misiones.secundarias} accent={accent} />
      <MisionCategory type="completadas"  misiones={misiones.completadas}  accent={accent} />
    </div>
  )
}
