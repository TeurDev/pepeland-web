import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resetea el scroll al cambiar de ruta + dispara animaciones .fade-in
// cuando los elementos entran en pantalla (IntersectionObserver).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Pequeño delay para que el DOM termine de renderizar tras el cambio de ruta
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer.unobserve(entry.target)   // animar solo una vez
            }
          })
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',       // dispara un poco antes del bottom
        }
      )

      document.querySelectorAll('.fade-in:not(.in-view)').forEach(el => {
        observer.observe(el)
      })

      return () => observer.disconnect()
    }, 30)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
