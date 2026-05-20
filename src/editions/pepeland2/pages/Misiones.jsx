import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEdition } from '@shared/components/EditionContext'
import { codigosMisiones } from '../data'

export default function Misiones() {
  const [codigo, setCodigo] = useState('')
  const [error, setError]   = useState('')
  const navigate = useNavigate()
  const { prefix } = useEdition()

  function handleBuscar() {
    const key  = codigo.trim().toUpperCase()
    const data = codigosMisiones[key]
    if (data) {
      navigate(`${prefix}/misiones/${data.faccion}`, {
        state: { jugador: data.jugador, misiones: data.misiones, codigo: key }
      })
    } else {
      setError('> CÓDIGO NO ENCONTRADO. COMPRUEBA E INTÉNTALO DE NUEVO.')
    }
  }

  return (
    <main className="page">
      <div className="container" style={{ padding: '5rem 2rem', maxWidth: 640 }}>

        <h1 className="px-title">Acceso a Misiones</h1>
        <p className="section-desc">
          Introduce el código que te proporcionó el staff para acceder
          a tus misiones activas.
        </p>

        <div className="code-wrap fade-in">
          <label className="code-label">▶ INTRODUCE TU CÓDIGO</label>
          <input
            className="code-input"
            type="text"
            placeholder="VAEL-0000"
            value={codigo}
            onChange={e => { setCodigo(e.target.value); setError('') }}
            onKeyDown={e => e.key === 'Enter' && handleBuscar()}
            maxLength={20}
          />
          <button className="btn btn-gold" style={{ width: '100%' }} onClick={handleBuscar}>
            ▶ BUSCAR MISIONES
          </button>
          {error && <p className="error-msg">{error}</p>}
        </div>

        <p style={{ fontFamily: 'var(--font-px)', fontSize: 'var(--px-xs)', color: 'var(--text-dim)', textAlign: 'center', marginTop: '2rem', lineHeight: 2.2 }}>
          ¿No tienes código? Contacta con el staff del servidor.
        </p>

      </div>
    </main>
  )
}
