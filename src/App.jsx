import { Routes, Route, Navigate } from 'react-router-dom'
import { editions, CURRENT_EDITION_ID } from '@editions'
import EditionLayout  from '@shared/components/EditionLayout'
import EditionsList   from '@shared/pages/EditionsList'
import NotFound       from '@shared/pages/NotFound'
import ScrollToTop    from '@shared/components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* "/" redirige a la edición actual */}
        <Route path="/" element={<Navigate to={`/${CURRENT_EDITION_ID}`} replace />} />

        {/* Listado de todas las ediciones */}
        <Route path="/ediciones" element={<EditionsList />} />

        {/* Cada edición monta sus propias rutas bajo su prefijo */}
        {editions.map(ed => (
          <Route
            key={ed.id}
            path={`/${ed.id}/*`}
            element={<EditionLayout edition={ed} />}
          />
        ))}

        {/* Cualquier ruta desconocida → 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
