import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { EditionProvider } from '@shared/components/EditionContext'
import Navbar from '@shared/components/Navbar'
import Footer from '@shared/components/Footer'
import NotFound from '@shared/pages/NotFound'
import { CURRENT_EDITION_ID } from '@editions'

// Aplica el theme CSS de la edición al <html> mientras esté montada
function useEditionTheme(edition) {
  useEffect(() => {
    const cls = `edition-${edition.id}`
    document.documentElement.classList.add(cls)
    document.title = `${edition.nombre} — ${edition.subtitulo}`
    return () => { document.documentElement.classList.remove(cls) }
  }, [edition.id])
}

export default function EditionLayout({ edition }) {
  useEditionTheme(edition)
  const P = edition.pages   // shortcut

  return (
    <EditionProvider edition={edition} currentEditionId={CURRENT_EDITION_ID}>
      <Navbar />
      <Routes>
        <Route index                       element={<P.Home />} />
        <Route path="historia"             element={<P.Historia />} />
        <Route path="facciones"            element={<P.Facciones />} />
        <Route path="facciones/:id"        element={<P.FaccionDetalle />} />
        <Route path="misiones"             element={<P.Misiones />} />
        <Route path="misiones/faccion-1"   element={<P.MisionesF1 />} />
        <Route path="misiones/faccion-2"   element={<P.MisionesF2 />} />
        <Route path="misiones/faccion-3"   element={<P.MisionesF3 />} />
        <Route path="tutorial"             element={<P.Tutorial />} />
        {P.Galeria && <Route path="galeria" element={<P.Galeria />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </EditionProvider>
  )
}
