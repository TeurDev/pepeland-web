import { createContext, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ── Context ────────────────────────────────────────────────────────────────
// Cada edición monta su árbol envuelto en este provider con su config.
// El navbar, las páginas y los componentes compartidos lo leen para saber
// en qué edición están y construir URLs correctamente.

const EditionContext = createContext(null)

export function EditionProvider({ edition, currentEditionId, children }) {
  const value = {
    edition,                                       // config de la edición actualmente visitada
    isCurrent: edition.id === currentEditionId,    // ¿estamos en la edición marcada como actual?
    currentEditionId,                              // id de la edición actual (para "volver")
    prefix: `/${edition.id}`,                      // prefijo de URL: '/vaelthor'
  }
  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export function useEdition() {
  const ctx = useContext(EditionContext)
  if (!ctx) throw new Error('useEdition debe usarse dentro de <EditionProvider>')
  return ctx
}

// ── Link helpers ───────────────────────────────────────────────────────────
// Sustituyen a <Link> / <NavLink> en las páginas de las ediciones.
// Aceptan un `to` relativo (p.ej. "/historia") y le añaden el prefix automáticamente.

export function EditionLink({ to, children, ...rest }) {
  const { prefix } = useEdition()
  const full = to.startsWith('/') ? `${prefix}${to}` : `${prefix}/${to}`
  return <Link to={full} {...rest}>{children}</Link>
}

export function EditionNavLink({ to, children, ...rest }) {
  const { prefix } = useEdition()
  const full = to.startsWith('/') ? `${prefix}${to}` : `${prefix}/${to}`
  return <NavLink to={full} {...rest}>{children}</NavLink>
}
