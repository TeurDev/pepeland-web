import { Link } from 'react-router-dom'
import { useEdition } from '../components/EditionContext'

// Mensajes 404 con personalidad por edición
const MESSAGES = {
  vaelthor:  'Esta página se perdió en las Tierras Olvidadas.',
  pepeland2: 'Los Ocultos borraron este registro de los archivos.',
}

export default function NotFound() {
  let edition = null
  // useEdition puede no estar disponible si estamos fuera de un EditionProvider
  // (404 a nivel global). Lo capturamos con try/catch.
  try { edition = useEdition().edition } catch { /* sin contexto */ }

  const mensaje = edition && MESSAGES[edition.id]
    ? MESSAGES[edition.id]
    : 'Esta página no existe.'

  const accent = edition?.color || '#e040fb'
  const homeUrl = edition ? `/${edition.id}` : '/'

  return (
    <main className="page" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'var(--bg, #06050d)',
    }}>
      {/* Número 404 grande */}
      <h1 style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 'clamp(4rem, 18vw, 9rem)',
        color: accent,
        letterSpacing: '8px',
        textShadow: `6px 6px 0 ${accent}33`,
        marginBottom: '1rem',
        lineHeight: 1,
      }}>
        404
      </h1>

      {/* Sub-texto */}
      <p style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 'clamp(.7rem, 2.5vw, 1rem)',
        color: 'var(--text, #fff)',
        letterSpacing: '3px',
        marginBottom: '1.5rem',
        lineHeight: 1.8,
      }}>
        PÁGINA NO ENCONTRADA
      </p>

      <p style={{
        fontFamily: "'VT323', monospace",
        fontSize: '1.4rem',
        color: 'var(--text-dim, #94a3b8)',
        maxWidth: 480,
        marginBottom: '3rem',
        lineHeight: 1.5,
      }}>
        {mensaje}
      </p>

      {/* Botones */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to={homeUrl} className="btn btn-gold">▶ VOLVER AL INICIO</Link>
        <Link to="/ediciones" className="btn">VER EDICIONES</Link>
      </div>
    </main>
  )
}
