import { useEffect, useState } from 'react'

export default function WikiSidebar({ items, title = 'CONTENIDO' }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 88
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <aside className="wiki-sidebar-hide" style={{
      position: 'fixed',
      left: '1.5rem',
      top: 88,
      width: 260,
      maxHeight: 'calc(100vh - 110px)',
      overflowY: 'auto',
      zIndex: 50,
    }}>
      <p style={{
        fontFamily: 'var(--font-px)',
        fontSize: '10px',
        color: 'var(--text-dim)',
        letterSpacing: '3px',
        marginBottom: '1rem',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--bg4)',
      }}>
        {title}
      </p>

      <nav>
        {items.map(item => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                borderLeft: `3px solid ${isActive ? 'var(--pink)' : 'var(--bg4)'}`,
                padding: '8px 12px',
                marginBottom: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-px)',
                fontSize: '11px',
                color: isActive ? 'var(--pink)' : 'var(--text-dim)',
                letterSpacing: '0.5px',
                lineHeight: 1.7,
                transition: 'color .2s, border-color .2s',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-dim)' }}
            >
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
