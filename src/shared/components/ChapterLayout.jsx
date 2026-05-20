import { useState, useEffect } from 'react'

export default function ChapterLayout({ chapters, title = 'CAPÍTULOS', subtitle, defaultId }) {
  const initial = defaultId && chapters.find(c => c.id === defaultId)
    ? defaultId
    : chapters[0]?.id
  const [selected, setSelected] = useState(initial)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const current = chapters.find(c => c.id === selected) || chapters[0]

  // Cierra el sidebar si se abre el navbar mobile
  useEffect(() => {
    const close = () => setSidebarOpen(false)
    window.addEventListener('navbar-mobile-opened', close)
    return () => window.removeEventListener('navbar-mobile-opened', close)
  }, [])

  // Escucha la petición del icono del navbar para abrir
  useEffect(() => {
    const openHandler = () => openSidebar()
    window.addEventListener('chapter-sidebar-toggle-request', openHandler)
    return () => window.removeEventListener('chapter-sidebar-toggle-request', openHandler)
  }, [])

  // Abre el sidebar y avisa al navbar para que se cierre
  const openSidebar = () => {
    window.dispatchEvent(new CustomEvent('chapter-sidebar-opened'))
    setSidebarOpen(true)
  }

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
      const onKey = (e) => { if (e.key === 'Escape') setSidebarOpen(false) }
      window.addEventListener('keydown', onKey)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKey)
      }
    }
  }, [sidebarOpen])

  const selectChapter = (id) => {
    setSelected(id)
    setSidebarOpen(false)
  }

  if (!chapters.length) return null

  return (
    <main className="page chapter-page">

      <div className="chapter-layout">

        {/* Sidebar desktop */}
        <aside className="chapter-sidebar-desktop">
          <p className="chapter-sidebar-title">{title}</p>
          {subtitle && <p className="chapter-sidebar-sub">{subtitle}</p>}
          <ul className="chapter-list">
            {chapters.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={`chapter-item ${c.id === selected ? 'active' : ''}`}
                  onClick={() => selectChapter(c.id)}
                >
                  {c.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenido */}
        <article key={current.id} className="chapter-content fade-in in-view">
          <h1 className="chapter-content-title">{current.title}</h1>
          <div className="chapter-content-body">{current.body}</div>
        </article>

      </div>

      {/* Overlay mobile */}
      <div
        className={`chapter-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Panel mobile — replica el navbar mobile */}
      <aside className={`chapter-sidebar-mobile ${sidebarOpen ? 'open' : ''}`}>
        <div className="chapter-mobile-divider" />

        <p className="chapter-mobile-title">{title}</p>
        {subtitle && <p className="chapter-mobile-sub">{subtitle}</p>}

        <ul className="chapter-mobile-list">
          {chapters.map((c, i) => (
            <li key={c.id}>
              <button
                type="button"
                className={`chapter-mobile-item ${c.id === selected ? 'active' : ''}`}
                onClick={() => selectChapter(c.id)}
              >
                <span className="chapter-mobile-num">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="chapter-mobile-text">{c.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

    </main>
  )
}
