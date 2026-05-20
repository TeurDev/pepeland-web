import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useEdition, EditionNavLink } from './EditionContext'

const linkList = [
  { to: '/historia',  label: 'Historia'  },
  { to: '/facciones', label: 'Facciones' },
  { to: '/misiones',  label: 'Misiones'  },
  { to: '/galeria',   label: 'Galería'   },
  { to: '/tutorial',  label: 'Tutorial'  },
  { to: '/ediciones', label: 'Ediciones', global: true },
]

const linkStyle = (isActive) => ({
  fontFamily: 'var(--font-px)',
  fontSize: '9px',
  letterSpacing: '0.5px',
  color: isActive ? 'var(--pink)' : 'var(--text-dim)',
  textShadow: isActive ? '0 0 12px var(--pink)' : 'none',
  transition: 'color .15s, text-shadow .15s',
})

export default function Navbar() {
  const { edition, isCurrent, currentEditionId, prefix } = useEdition()
  const [open, setOpen] = useState(false)
  const [bookFlipping, setBookFlipping] = useState(false)
  const location = useLocation()
  const isHistoriaPage = location.pathname.endsWith('/historia')

  const handleBookClick = () => {
    window.dispatchEvent(new CustomEvent('chapter-sidebar-toggle-request'))
    setBookFlipping(true)
    setTimeout(() => setBookFlipping(false), 700)
  }

  // Cierra el navbar mobile si se abre otro panel (chapter sidebar)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('chapter-sidebar-opened', close)
    return () => window.removeEventListener('chapter-sidebar-opened', close)
  }, [])

  // Avisa cuando se abre para que otros paneles se cierren
  const toggleMenu = () => {
    setOpen(o => {
      if (!o) window.dispatchEvent(new CustomEvent('navbar-mobile-opened'))
      return !o
    })
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Renderiza un link de la lista según si es global o de edición
  const renderLink = (l, extraProps = {}) => {
    const cls = extraProps.className || 'nav-glow'
    if (l.global) {
      return (
        <NavLink to={l.to} key={l.to} className={cls} style={({ isActive }) => linkStyle(isActive)} {...extraProps}>
          {l.label}
        </NavLink>
      )
    }
    return (
      <EditionNavLink to={l.to} key={l.to} className={cls} style={({ isActive }) => linkStyle(isActive)} {...extraProps}>
        {l.label}
      </EditionNavLink>
    )
  }

  return (
    <>
      {/* ── Banner discreto para ediciones antiguas ── */}
      {!isCurrent && (
        <Link
          to={`/${currentEditionId}`}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 101,
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--gold-dim)',
            textAlign: 'center',
            padding: '.4rem 1rem',
            fontFamily: 'var(--font-px)',
            fontSize: '8px',
            color: 'var(--gold)',
            letterSpacing: '2px',
            textDecoration: 'none',
          }}
        >
          ← VOLVER A LA EDICIÓN ACTUAL
        </Link>
      )}

      <nav className="navbar" style={!isCurrent ? { top: 24 } : undefined}>

        {/* Icono libro mobile — solo en página Historia */}
        {isHistoriaPage && (
          <button
            type="button"
            className="navbar-book-mobile"
            onClick={handleBookClick}
            aria-label="Capítulos"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <g className={bookFlipping ? 'book-flipping' : ''}>
                {/* BookOpen outline (siempre visible) */}
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                {/* Líneas de texto BookOpenText — solo visibles durante la animación */}
                <path className="book-text-line" d="M6 8h2"/>
                <path className="book-text-line" d="M6 12h2"/>
                <path className="book-text-line" d="M16 8h2"/>
                <path className="book-text-line" d="M16 12h2"/>
              </g>
            </svg>
          </button>
        )}

        {/* Izquierda */}
        <div className="navbar-desktop" style={{ display:'flex', gap:'1.4rem', alignItems:'center', justifyContent:'flex-end', paddingRight:'1.5rem' }}>
          {linkList.slice(0,3).map(l => renderLink(l))}
        </div>

        {/* Centro — el brand lleva al home de la edición ACTUAL en la que estamos (no fuerza redirección) */}
        <Link to={prefix} className="navbar-brand" style={{ textAlign:'center' }}>
          ⬡ {edition.nombre.toUpperCase()}
        </Link>

        {/* Derecha */}
        <div className="navbar-right-group" style={{ display:'flex', gap:'1.4rem', alignItems:'center', justifyContent:'flex-start', paddingLeft:'1.5rem' }}>
          {linkList.slice(3).map(l => (
            <span key={l.to} className="navbar-desktop">{renderLink(l, { className: 'nav-glow' })}</span>
          ))}

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Menú"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              width: 34, height: 34,
              position: 'relative',
              transform: open ? 'rotate(90deg) scale(1.1)' : 'rotate(0deg) scale(1)',
              transition: 'transform .4s cubic-bezier(.34,1.56,.64,1)',
            }}
          >
            <span style={{ position:'absolute', left:6, top: open?15:8,  width:22, height:2, background:'var(--pink)', borderRadius:1, transform: open?'rotate(45deg)':'rotate(0deg)', transition:'top .3s ease, transform .3s ease .05s' }}/>
            <span style={{ position:'absolute', left:6, top:15, width: open?0:22, height:2, background:'var(--pink)', borderRadius:1, transition:'width .2s ease' }}/>
            <span style={{ position:'absolute', left:6, top: open?15:22, width:22, height:2, background:'var(--pink)', borderRadius:1, transform: open?'rotate(-45deg)':'rotate(0deg)', transition:'top .3s ease, transform .3s ease .05s' }}/>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 98,
          background: 'rgba(0,0,0,.6)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity .35s ease',
        }}
      />

      {/* Panel lateral derecho */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: 'min(300px, 80vw)',
        zIndex: 99,
        background: 'var(--bg2)',
        borderLeft: '2px solid var(--pink-dim)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 2.5rem',
        gap: '2rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .45s cubic-bezier(.4,0,.2,1)',
        boxShadow: open ? '-20px 0 60px rgba(224,64,251,.15)' : 'none',
      }}>
        <div style={{ position:'absolute', top:'15%', left:'2.5rem', right:'2.5rem', height:1, background:'linear-gradient(90deg, var(--pink-dim), transparent)', opacity:.5 }}/>

        {linkList.map((l, i) => {
          const itemStyle = ({ isActive }) => ({
            fontFamily: 'var(--font-px)',
            fontSize: '13px',
            letterSpacing: '3px',
            color: isActive ? 'var(--pink)' : 'var(--text-dim)',
            display: 'block',
            textDecoration: 'none',
          })
          const itemContent = (
            <>
              <span style={{ color:'var(--pink)', marginRight:'.6rem', fontSize:'10px', opacity:.6 }}>
                {String(i+1).padStart(2,'0')}.
              </span>
              {l.label}
            </>
          )
          return (
            <div
              key={l.to}
              style={{
                transform: open ? 'translateX(0)' : 'translateX(30px)',
                opacity: open ? 1 : 0,
                transition: `transform .4s cubic-bezier(.4,0,.2,1) ${i*.07+.15}s, opacity .4s ease ${i*.07+.15}s`,
                paddingBottom: '.8rem',
                borderBottom: '1px solid var(--bg4)',
              }}
            >
              {l.global ? (
                <NavLink to={l.to} onClick={() => setOpen(false)} style={itemStyle}>{itemContent}</NavLink>
              ) : (
                <EditionNavLink to={l.to} onClick={() => setOpen(false)} style={itemStyle}>{itemContent}</EditionNavLink>
              )}
            </div>
          )
        })}

        <div style={{ position:'absolute', bottom:'15%', left:'2.5rem', right:'2.5rem', height:1, background:'linear-gradient(90deg, var(--pink-dim), transparent)', opacity:.5 }}/>
      </div>
    </>
  )
}
