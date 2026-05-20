import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import OrnamentalCorner from './OrnamentalCorner'

// ── Iconos SVG pixel-art para cada tipo de info ──────────────────────────
function IconChest({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4"  y="8"  width="20" height="14" fill={accent} opacity=".18"/>
      <rect x="4"  y="8"  width="20" height="3"  fill={accent}/>
      <rect x="4"  y="8"  width="2"  height="14" fill={accent}/>
      <rect x="22" y="8"  width="2"  height="14" fill={accent}/>
      <rect x="4"  y="20" width="20" height="2"  fill={accent}/>
      <rect x="12" y="11" width="4"  height="6"  fill={accent} opacity=".8"/>
      <rect x="13" y="13" width="2"  height="2"  fill="#fff" opacity=".5"/>
      <rect x="6"  y="4"  width="16" height="4"  fill={accent} opacity=".7"/>
    </svg>
  )
}
function IconCompass({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke={accent} strokeWidth="2" fill={accent + '15'}/>
      <rect x="13" y="4"  width="2" height="3" fill={accent}/>
      <rect x="13" y="21" width="2" height="3" fill={accent}/>
      <rect x="4"  y="13" width="3" height="2" fill={accent}/>
      <rect x="21" y="13" width="3" height="2" fill={accent}/>
      <polygon points="14,8 16,14 14,12 12,14" fill={accent}/>
      <polygon points="14,20 12,14 14,16 16,14" fill={accent} opacity=".5"/>
    </svg>
  )
}
function IconSkull({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6"  y="6"  width="16" height="14" fill={accent} opacity=".25"/>
      <rect x="6"  y="6"  width="16" height="2"  fill={accent}/>
      <rect x="6"  y="6"  width="2"  height="14" fill={accent}/>
      <rect x="20" y="6"  width="2"  height="14" fill={accent}/>
      <rect x="9"  y="12" width="3"  height="3"  fill={accent}/>
      <rect x="16" y="12" width="3"  height="3"  fill={accent}/>
      <rect x="12" y="17" width="4"  height="2"  fill={accent}/>
      <rect x="8"  y="20" width="3"  height="3"  fill={accent} opacity=".6"/>
      <rect x="17" y="20" width="3"  height="3"  fill={accent} opacity=".6"/>
    </svg>
  )
}
function IconHourglass({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6"  y="4"  width="16" height="2" fill={accent}/>
      <rect x="6"  y="22" width="16" height="2" fill={accent}/>
      <polygon points="8,6 20,6 14,14" fill={accent} opacity=".5"/>
      <polygon points="8,22 20,22 14,14" fill={accent} opacity=".5"/>
      <rect x="11" y="7"  width="6" height="2" fill={accent}/>
      <rect x="13" y="13" width="2" height="2" fill={accent}/>
      <rect x="11" y="20" width="6" height="2" fill={accent} opacity=".8"/>
    </svg>
  )
}
function IconScroll({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6"  y="6"  width="16" height="16" fill={accent} opacity=".18"/>
      <rect x="6"  y="6"  width="16" height="2"  fill={accent}/>
      <rect x="6"  y="20" width="16" height="2"  fill={accent}/>
      <rect x="9"  y="11" width="10" height="1"  fill={accent} opacity=".8"/>
      <rect x="9"  y="14" width="10" height="1"  fill={accent} opacity=".8"/>
      <rect x="9"  y="17" width="7"  height="1"  fill={accent} opacity=".8"/>
    </svg>
  )
}
function IconFeather({ accent }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5"  y="20" width="18" height="2"  fill={accent}/>
      <rect x="6"  y="8"  width="2"  height="12" fill={accent} opacity=".7"/>
      <rect x="8"  y="6"  width="2"  height="14" fill={accent} opacity=".85"/>
      <rect x="10" y="4"  width="2"  height="16" fill={accent}/>
      <rect x="12" y="6"  width="2"  height="14" fill={accent} opacity=".85"/>
      <rect x="14" y="8"  width="2"  height="12" fill={accent} opacity=".7"/>
      <rect x="16" y="10" width="2"  height="10" fill={accent} opacity=".55"/>
    </svg>
  )
}

// ── Esquinas decorativas ──────────────────────────────────────────────────
function Corners({ accent }) {
  return (
    <>
      <div style={{ position: 'absolute', top: -2, left: -2 }}>
        <OrnamentalCorner accent={accent} />
      </div>
      <div style={{ position: 'absolute', top: -2, right: -2 }}>
        <OrnamentalCorner accent={accent} flip="h" />
      </div>
      <div style={{ position: 'absolute', bottom: -2, left: -2 }}>
        <OrnamentalCorner accent={accent} flip="v" />
      </div>
      <div style={{ position: 'absolute', bottom: -2, right: -2 }}>
        <OrnamentalCorner accent={accent} flip="hv" />
      </div>
    </>
  )
}

// ── Componente Stat individual ────────────────────────────────────────────
function Stat({ icon: Icon, label, value, accent, delay = 0 }) {
  const empty = !value
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.9rem',
        padding: '.8rem',
        background: empty ? 'transparent' : `${accent}0d`,
        border: `1px solid ${empty ? accent + '22' : accent + '40'}`,
        animation: `slideInLeft .4s cubic-bezier(.4,0,.2,1) ${delay}s both`,
      }}
    >
      <div style={{ flexShrink: 0, opacity: empty ? .35 : 1 }}>
        <Icon accent={accent} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-px)',
          fontSize: '.45rem',
          color: accent,
          letterSpacing: '.15em',
          marginBottom: '.35rem',
          opacity: empty ? .5 : 1,
        }}>
          {label}
        </p>
        <p style={{
          fontFamily: 'var(--font-vt)',
          fontSize: 'var(--vt-md)',
          color: empty ? 'var(--text-dim)' : 'var(--text)',
          fontStyle: empty ? 'italic' : 'normal',
          lineHeight: 1.4,
          wordBreak: 'break-word',
        }}>
          {value || 'Sin información'}
        </p>
      </div>
    </div>
  )
}

// ── Modal principal ───────────────────────────────────────────────────────
export default function MisionDetalleModal({ mision, accent, onClose }) {
  const [closing, setClosing] = useState(false)

  const handleClose = useCallback(() => {
    setClosing(true)
    setTimeout(onClose, 280)
  }, [onClose])

  // ESC para cerrar + bloquear scroll
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [handleClose])

  const d = mision.detalles || {}
  const requisitosText = d.requisitos?.length ? d.requisitos.join(' · ') : null

  return createPortal(
    <div className={`mision-modal-backdrop ${closing ? "modal-closing" : ""}`} onClick={handleClose}>
      <div className={`mision-modal-wrapper ${closing ? "modal-closing" : ""}`} onClick={(e) => e.stopPropagation()}>
        <Corners accent={accent} />

        {/* Cuerpo del modal */}
        <div className="mision-modal-card" style={{ border: `2px solid ${accent}88` }}>
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            aria-label="Cerrar"
            className="mision-modal-close"
            style={{ border: `2px solid ${accent}`, color: accent }}
          >
            ✕
          </button>

          {/* Header: título */}
          <div style={{
            textAlign: 'center',
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
            borderBottom: `1px solid ${accent}33`,
          }}>
            <p style={{
              fontFamily: 'var(--font-px)',
              fontSize: '.45rem',
              color: accent,
              letterSpacing: '.2em',
              marginBottom: '.6rem',
              opacity: .8,
            }}>
              ▶ DETALLES DE LA MISIÓN
            </p>
            <h2 style={{
              fontFamily: 'var(--font-px)',
              fontSize: 'clamp(.7rem, 2vw, .95rem)',
              color: 'var(--text)',
              letterSpacing: '2px',
              lineHeight: 1.8,
            }}>
              {mision.titulo}
            </h2>
          </div>

          {/* Descripción — oculta en móvil para ahorrar espacio */}
          {mision.desc && (
            <p className="mision-modal-desc" style={{
              fontFamily: 'var(--font-vt)',
              fontSize: 'var(--vt-md)',
              color: 'var(--text-dim)',
              lineHeight: 1.6,
              marginBottom: '1.8rem',
              animation: 'slideInLeft .4s cubic-bezier(.4,0,.2,1) .05s both',
            }}>
              {mision.desc}
            </p>
          )}

          {/* Grid de stats */}
          <div className="mision-modal-stats">
            <Stat icon={IconChest}     label="RECOMPENSA"  value={d.recompensa}   accent={accent} delay={0.15} />
            <Stat icon={IconCompass}   label="COORDENADAS" value={d.coordenadas}  accent={accent} delay={0.22} />
            <Stat icon={IconSkull}     label="DIFICULTAD"  value={d.dificultad}   accent={accent} delay={0.29} />
            <Stat icon={IconHourglass} label="DURACIÓN"    value={d.tiempo}       accent={accent} delay={0.36} />
            <Stat icon={IconScroll}    label="REQUISITOS"  value={requisitosText} accent={accent} delay={0.43} />
            <Stat icon={IconFeather}   label="NOTAS"       value={d.notas}        accent={accent} delay={0.50} />
          </div>

          {/* Footer */}
          <p style={{
            marginTop: '1.8rem',
            paddingTop: '1.2rem',
            borderTop: `1px solid ${accent}22`,
            textAlign: 'center',
            fontFamily: 'var(--font-px)',
            fontSize: '.4rem',
            color: 'var(--text-dim)',
            letterSpacing: '.15em',
            opacity: .6,
          }}>
            ESC O CLICK FUERA PARA CERRAR
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}
