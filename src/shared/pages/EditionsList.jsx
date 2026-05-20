import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { editions, CURRENT_EDITION_ID } from '@editions'

export default function EditionsList() {
  useEffect(() => { document.title = 'Ediciones — Pepeland Server' }, [])

  // Edición actual primero, luego el resto por año descendente
  const sorted = [...editions].sort((a, b) => {
    if (a.id === CURRENT_EDITION_ID) return -1
    if (b.id === CURRENT_EDITION_ID) return  1
    return (b.año ?? 0) - (a.año ?? 0)
  })

  return (
    <main style={{
      minHeight: '100vh',
      padding: '5rem 2rem',
      background: '#06050d',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      {/* Título de la página */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '11px',
          color: '#94a3b8',
          letterSpacing: '4px',
          marginBottom: '1rem',
        }}>
          ARCHIVO DE TEMPORADAS
        </p>
        <h1 style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(1.4rem, 5vw, 2.5rem)',
          color: '#fff',
          letterSpacing: '6px',
          textShadow: '4px 4px 0 #7b1fa2',
        }}>
          EDICIONES
        </h1>
      </div>

      {/* Grid de cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 360px))',
        gap: '2rem',
        maxWidth: 1200,
        width: '100%',
        justifyContent: 'center',
      }}>
        {sorted.map((ed, i) => (
          <EditionCard key={ed.id} edition={ed} delay={i * 0.1} />
        ))}
      </div>

      {/* Volver al inicio */}
      <Link to="/" style={{
        marginTop: '4rem',
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '10px',
        color: '#6b5f8a',
        letterSpacing: '2px',
        textDecoration: 'none',
      }}>← VOLVER AL INICIO</Link>
    </main>
  )
}

// ── Card individual ───────────────────────────────────────────────────────
function EditionCard({ edition, delay }) {
  const isCurrent = edition.id === CURRENT_EDITION_ID

  return (
    <Link
      to={`/${edition.id}`}
      className="edition-card"
      style={{
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        background: edition.colorBg || '#0e0c1a',
        border: `2px solid ${edition.color}55`,
        padding: '2.5rem 2rem',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `cardIn .5s cubic-bezier(.4,0,.2,1) ${delay}s forwards`,
        '--card-color': edition.color,
      }}
    >
      {/* Brillo de fondo (aparece en hover via CSS) */}
      <div className="card-glow" style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${edition.color}22 0%, transparent 70%)`,
        opacity: 0,
        transition: 'opacity .35s ease',
        pointerEvents: 'none',
      }}/>

      {/* Etiqueta ACTUAL */}
      {isCurrent && (
        <div style={{
          position: 'absolute',
          top: 12, right: 12,
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '7px',
          color: edition.color,
          background: edition.color + '22',
          border: `1px solid ${edition.color}`,
          padding: '4px 8px',
          letterSpacing: '2px',
        }}>
          ACTUAL
        </div>
      )}

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo / título */}
        {edition.logo ? (
          <img
            src={edition.logo}
            alt={edition.nombre}
            style={{
              width: '100%',
              maxHeight: 110,
              objectFit: 'contain',
              marginBottom: '1.5rem',
              filter: `drop-shadow(0 0 24px ${edition.color}44)`,
            }}
          />
        ) : (
          <div style={{
            height: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '22px',
              color: '#fff',
              letterSpacing: '4px',
              textShadow: `3px 3px 0 ${edition.color}88`,
            }}>
              {edition.nombre.toUpperCase()}
            </span>
          </div>
        )}

        <p style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '9px',
          color: edition.color,
          letterSpacing: '3px',
          marginBottom: '.6rem',
          opacity: .85,
        }}>
          {edition.subtitulo} · {edition.año}
        </p>

        <p style={{
          fontFamily: "'VT323', monospace",
          fontSize: '1.15rem',
          color: '#a8a29e',
          lineHeight: 1.55,
          marginBottom: '1.5rem',
        }}>
          {edition.descripcion}
        </p>

        <span style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '9px',
          color: edition.color,
          letterSpacing: '2px',
          borderBottom: `2px solid ${edition.color}`,
          paddingBottom: '4px',
        }}>
          ▶ ENTRAR
        </span>
      </div>
    </Link>
  )
}
