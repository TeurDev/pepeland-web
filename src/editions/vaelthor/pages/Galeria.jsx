import { useState, useEffect, useCallback } from 'react'
import OrnamentalCorner from '@shared/components/OrnamentalCorner'
import { galeria } from '../gallery'

const ACCENT = 'var(--pink)'

export default function Galeria() {
  // ── Pantalla vacía si no hay fotos ──
  if (!galeria || galeria.length === 0) {
    return (
      <main className="page">
        <div style={{
          minHeight: 'calc(100vh - 68px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 2rem',
        }}>
          <div style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            marginBottom: '2rem',
            opacity: .3,
            animation: 'float 4s ease-in-out infinite',
          }}>📸</div>
          <h1 style={{
            fontFamily: 'var(--font-px)',
            fontSize: 'clamp(.8rem, 2.5vw, 1.2rem)',
            color: 'var(--pink)',
            letterSpacing: '4px',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
            textShadow: '3px 3px 0 var(--pink-dim)',
          }}>
            GALERÍA EN<br/>CONSTRUCCIÓN
          </h1>
          <p style={{
            fontFamily: 'var(--font-vt)',
            fontSize: 'var(--vt-lg)',
            color: 'var(--text-dim)',
            maxWidth: 420,
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}>
            Pronto subiremos capturas, momentos épicos y recuerdos de la temporada.
            ¡Vuelve a mirar más adelante!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} style={{
                width: 80, height: 60,
                background: 'var(--bg2)',
                border: '2px solid var(--bg4)',
                opacity: .4 + i * .1,
                animation: `fadeIn .5s ease ${i * .1}s both`,
              }} />
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--font-px)',
            fontSize: '9px',
            color: 'var(--text-dim)',
            letterSpacing: '3px',
            marginTop: '3rem',
            opacity: .5,
          }}>
            ▶ PRÓXIMAMENTE
          </p>
        </div>
      </main>
    )
  }

  const destacadas = galeria.filter(f => f.destacada)
  const [slide, setSlide]         = useState(0)
  const [lightbox, setLightbox]   = useState(null)   // índice en `galeria` o null
  const [autoPlay, setAutoPlay]   = useState(true)

  // ── Auto-rotación del carrousel ──
  useEffect(() => {
    if (!autoPlay || lightbox !== null) return
    const t = setInterval(() => {
      setSlide(s => (s + 1) % destacadas.length)
    }, 5000)
    return () => clearInterval(t)
  }, [autoPlay, destacadas.length, lightbox])

  // ── Keyboard navigation en lightbox ──
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % galeria.length)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + galeria.length) % galeria.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  // Bloquea scroll cuando lightbox abierto
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const prevSlide = useCallback(() => {
    setAutoPlay(false)
    setSlide(s => (s - 1 + destacadas.length) % destacadas.length)
  }, [destacadas.length])
  const nextSlide = useCallback(() => {
    setAutoPlay(false)
    setSlide(s => (s + 1) % destacadas.length)
  }, [destacadas.length])

  return (
    <main className="page">
      <div className="container" style={{ padding: '4rem 2rem' }}>

        <h1 className="px-title fade-in">Galería</h1>
        <p style={{
          fontFamily: 'var(--font-vt)',
          fontSize: 'var(--vt-md)',
          color: 'var(--text-dim)',
          marginBottom: '3rem',
        }}>
          Momentos capturados de la temporada en Vaelthor.
        </p>

        {/* ══════════════════════════════════════════════
            CARROUSEL DE DESTACADAS
        ══════════════════════════════════════════════ */}
        <div style={{
          position: 'relative',
          marginBottom: '5rem',
        }}>
          {/* Marco con esquinas */}
          <Corners accent={ACCENT}>
            <div style={{
              position: 'relative',
              aspectRatio: '16/9',
              background: 'var(--bg2)',
              border: `2px solid ${ACCENT}55`,
              overflow: 'hidden',
            }}>
              {/* Slides */}
              {destacadas.map((f, i) => (
                <div
                  key={f.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: i === slide ? 1 : 0,
                    transform: i === slide ? 'scale(1)' : 'scale(1.05)',
                    transition: 'opacity .7s ease, transform 1.2s ease',
                    pointerEvents: i === slide ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={f.src}
                    alt={f.titulo}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Gradiente + descripción */}
                  <div style={{
                    position: 'absolute',
                    left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.85))',
                    padding: '4rem 2rem 1.6rem',
                  }}>
                    <p className="carousel-counter" style={{
                      fontFamily: 'var(--font-px)',
                      fontSize: '9px',
                      color: ACCENT,
                      letterSpacing: '3px',
                      marginBottom: '.6rem',
                      opacity: .8,
                    }}>
                      {String(i + 1).padStart(2, '0')} / {String(destacadas.length).padStart(2, '0')}
                    </p>
                    <h2 style={{
                      fontFamily: 'var(--font-px)',
                      fontSize: 'clamp(.7rem, 2vw, 1rem)',
                      color: '#fff',
                      letterSpacing: '2px',
                      marginBottom: '.6rem',
                      textShadow: '2px 2px 0 rgba(0,0,0,.7)',
                      lineHeight: 1.7,
                    }}>
                      {f.titulo}
                    </h2>
                    <p className="carousel-desc" style={{
                      fontFamily: 'var(--font-vt)',
                      fontSize: 'var(--vt-md)',
                      color: 'rgba(255,255,255,.85)',
                      maxWidth: 720,
                      lineHeight: 1.5,
                    }}>
                      {f.descripcion}
                    </p>
                  </div>
                </div>
              ))}

              {/* Flechas */}
              <button
                onClick={prevSlide}
                aria-label="Anterior"
                style={arrowStyle('left')}
              >◀</button>
              <button
                onClick={nextSlide}
                aria-label="Siguiente"
                style={arrowStyle('right')}
              >▶</button>
            </div>
          </Corners>

          {/* Indicadores (dots) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '.6rem',
            marginTop: '1.5rem',
          }}>
            {destacadas.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoPlay(false); setSlide(i) }}
                aria-label={`Ir a foto ${i + 1}`}
                style={{
                  width: i === slide ? 32 : 12,
                  height: 4,
                  background: i === slide ? ACCENT : 'var(--bg4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width .35s ease, background .35s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            CUADRÍCULA — todas las fotos
        ══════════════════════════════════════════════ */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.6rem',
            fontFamily: 'var(--font-px)',
            fontSize: 'var(--px-xs)',
            color: 'var(--gold)',
            letterSpacing: '.15em',
          }}>
            <span style={{ display: 'inline-block', width: 24, height: 2, background: 'var(--gold)' }}/>
            TODAS LAS FOTOS · {galeria.length}
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
        }}>
          {galeria.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setLightbox(idx)}
              className="gallery-thumb"
              style={{
                position: 'relative',
                aspectRatio: '3/2',
                overflow: 'hidden',
                background: 'var(--bg2)',
                border: `2px solid var(--bg4)`,
                cursor: 'pointer',
                padding: 0,
                transition: 'border-color .25s, transform .25s, box-shadow .25s',
              }}
            >
              <img
                src={f.thumb}
                alt={f.titulo}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform .4s ease',
                }}
              />
              {/* Overlay con el título al hover */}
              <div className="thumb-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(6,5,13,.95))',
                opacity: 0,
                transition: 'opacity .25s',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '.8rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-px)',
                  fontSize: '8px',
                  color: '#fff',
                  letterSpacing: '1px',
                  lineHeight: 1.8,
                }}>
                  {f.titulo}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════════════ */}
      {lightbox !== null && (
        <Lightbox
          foto={galeria[lightbox]}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox(i => (i - 1 + galeria.length) % galeria.length)}
          onNext={() => setLightbox(i => (i + 1) % galeria.length)}
          index={lightbox}
          total={galeria.length}
        />
      )}
    </main>
  )
}

// ── Marco con 4 esquinas ornamentales ────────────────────────────────────
function Corners({ accent, children }) {
  return (
    <div style={{ position: 'relative', padding: '18px' }}>
      <div style={{ position: 'absolute', top: -4, left: -4 }}>
        <OrnamentalCorner accent={accent} />
      </div>
      <div style={{ position: 'absolute', top: -4, right: -4 }}>
        <OrnamentalCorner accent={accent} flip="h" />
      </div>
      <div style={{ position: 'absolute', bottom: -4, left: -4 }}>
        <OrnamentalCorner accent={accent} flip="v" />
      </div>
      <div style={{ position: 'absolute', bottom: -4, right: -4 }}>
        <OrnamentalCorner accent={accent} flip="hv" />
      </div>
      {children}
    </div>
  )
}

// ── Estilo de las flechas del carrousel ──────────────────────────────────
function arrowStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '1rem',
    transform: 'translateY(-50%)',
    background: 'rgba(6,5,13,.75)',
    border: `2px solid var(--pink-dim)`,
    color: 'var(--pink)',
    fontFamily: 'var(--font-px)',
    fontSize: '11px',
    width: 40, height: 40,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background .2s, border-color .2s, transform .2s',
    zIndex: 3,
  }
}

// ── Lightbox modal ───────────────────────────────────────────────────────
function Lightbox({ foto, onClose, onPrev, onNext, index, total }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0,0,0,.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem 2rem',
        animation: 'fadeIn .3s ease',
      }}
    >
      {/* Cerrar */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: '2px solid var(--pink-dim)',
          color: 'var(--pink)',
          fontFamily: 'var(--font-px)',
          fontSize: '12px',
          width: 38, height: 38,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 201,
        }}
      >✕</button>

      {/* Counter */}
      <p style={{
        position: 'fixed',
        top: '1.7rem',
        left: '1.5rem',
        fontFamily: 'var(--font-px)',
        fontSize: '9px',
        color: 'var(--text-dim)',
        letterSpacing: '3px',
      }}>
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </p>

      {/* Flechas izquierda/derecha */}
      <button onClick={(e) => { e.stopPropagation(); onPrev() }}
              aria-label="Anterior"
              style={{ ...arrowStyle('left'), top: '50%', position: 'fixed' }}>◀</button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }}
              aria-label="Siguiente"
              style={{ ...arrowStyle('right'), top: '50%', position: 'fixed' }}>▶</button>

      {/* Foto con marco ornamental */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: 'min(1100px, 92vw)',
          maxHeight: '70vh',
          animation: 'lightboxIn .35s cubic-bezier(.34,1.56,.64,1)',
        }}
      >
        <Corners accent="var(--pink)">
          <div style={{ border: '2px solid var(--pink-dim)' }}>
            <img
              src={foto.src}
              alt={foto.titulo}
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </Corners>
      </div>

      {/* Título + descripción */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: '2rem',
          maxWidth: 720,
          textAlign: 'center',
          animation: 'fadeIn .5s ease .15s both',
        }}
      >
        <h3 style={{
          fontFamily: 'var(--font-px)',
          fontSize: 'clamp(.7rem, 2vw, .95rem)',
          color: '#fff',
          letterSpacing: '2px',
          lineHeight: 1.8,
          marginBottom: '.8rem',
        }}>
          {foto.titulo}
        </h3>
        <p style={{
          fontFamily: 'var(--font-vt)',
          fontSize: 'var(--vt-md)',
          color: 'var(--text-dim)',
          lineHeight: 1.6,
        }}>
          {foto.descripcion}
        </p>
      </div>
    </div>
  )
}
