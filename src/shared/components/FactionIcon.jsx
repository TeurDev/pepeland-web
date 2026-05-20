// Logos vectoriales para las facciones — estilo emblema institucional.
// Curvas suaves, aspecto de coat-of-arms / crest universitario.

export default function FactionIcon({ type, color = '#fff', size = 80 }) {
  const s = size

  switch (type) {

    // ── 1. AERONÁUTICA — Hélice de 3 palas con estrella ──
    case 'aviation':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
          {/* Halo circular de fondo */}
          <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="1.5" opacity=".25"/>
          <circle cx="32" cy="32" r="26" stroke={color} strokeWidth=".8"  opacity=".4"  strokeDasharray="2 3"/>

          {/* Hélice de 3 palas — palas curvadas tipo gota */}
          {[0, 120, 240].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 32 32)`}>
              <path d="M 32 32 Q 27 24, 30 12 Q 32 6, 34 12 Q 37 24, 32 32 Z" fill={color}/>
              <path d="M 32 32 Q 30 24, 32 14 Q 33 22, 32 32 Z" fill="#fff" opacity=".35"/>
              <path d="M 32 32 Q 35 24, 34 14 Q 36 22, 33 30 Z" fill="#000" opacity=".15"/>
            </g>
          ))}

          {/* Hub central */}
          <circle cx="32" cy="32" r="6" fill={color}/>
          <circle cx="32" cy="32" r="6" stroke="#000" strokeWidth="1" opacity=".5"/>
          <circle cx="32" cy="32" r="3" fill="#000" opacity=".55"/>
          <circle cx="30.5" cy="30.5" r="1" fill="#fff" opacity=".7"/>

          {/* Estrella inferior decorativa */}
          <polygon points="32,46 33,49 36,49 33.5,51 34.5,54 32,52 29.5,54 30.5,51 28,49 31,49"
                   fill={color} opacity=".85"/>

          {/* Cinta inferior */}
          <path d="M 18 56 L 46 56 L 42 60 L 22 60 Z" fill={color} opacity=".85"/>
          <path d="M 18 56 L 22 60 L 18 60 Z" fill={color} opacity=".5"/>
          <path d="M 46 56 L 42 60 L 46 60 Z" fill={color} opacity=".5"/>
        </svg>
      )

    // ── 2. ARTILLERÍA — Dos cañones cruzados con ruedas ──
    case 'artillery':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="1.5" opacity=".25"/>

          {/* Estrella de fondo */}
          <polygon points="32,8 35,16 43,16 36,21 39,29 32,24 25,29 28,21 21,16 29,16"
                   fill={color} opacity=".15"/>

          {/* Cañón 1 — barril largo apuntando arriba-izquierda */}
          <g transform="rotate(-30 32 38)">
            <rect x="18" y="34" width="32" height="8" rx="1" fill={color}/>
            <rect x="18" y="34" width="32" height="2" fill="#fff" opacity=".3"/>
            <rect x="18" y="40" width="32" height="2" fill="#000" opacity=".25"/>
            <rect x="46" y="32" width="6" height="12" rx="1" fill={color}/>
            <ellipse cx="50" cy="38" rx="2" ry="3.5" fill="#000" opacity=".65"/>
            <rect x="14" y="32" width="6" height="12" rx="1" fill={color}/>
            <circle cx="14" cy="38" r="3" fill={color}/>
          </g>

          {/* Cañón 2 — barril largo apuntando arriba-derecha */}
          <g transform="rotate(30 32 38)">
            <rect x="14" y="34" width="32" height="8" rx="1" fill={color}/>
            <rect x="14" y="34" width="32" height="2" fill="#fff" opacity=".3"/>
            <rect x="14" y="40" width="32" height="2" fill="#000" opacity=".25"/>
            <rect x="12" y="32" width="6" height="12" rx="1" fill={color}/>
            <ellipse cx="14" cy="38" rx="2" ry="3.5" fill="#000" opacity=".65"/>
            <rect x="44" y="32" width="6" height="12" rx="1" fill={color}/>
            <circle cx="50" cy="38" r="3" fill={color}/>
          </g>

          {/* Punto central */}
          <circle cx="32" cy="38" r="5" fill={color}/>
          <circle cx="32" cy="38" r="2.5" fill="#000" opacity=".4"/>

          {/* Ruedas con radios */}
          <circle cx="10" cy="50" r="5.5" fill={color}/>
          <circle cx="10" cy="50" r="3.5" stroke="#000" strokeWidth="1" opacity=".5"/>
          <circle cx="10" cy="50" r="1.5" fill="#000" opacity=".55"/>
          <rect x="9.5" y="45" width="1" height="10" fill="#000" opacity=".3"/>
          <rect x="5" y="49.5" width="10" height="1" fill="#000" opacity=".3"/>

          <circle cx="54" cy="50" r="5.5" fill={color}/>
          <circle cx="54" cy="50" r="3.5" stroke="#000" strokeWidth="1" opacity=".5"/>
          <circle cx="54" cy="50" r="1.5" fill="#000" opacity=".55"/>
          <rect x="53.5" y="45" width="1" height="10" fill="#000" opacity=".3"/>
          <rect x="49" y="49.5" width="10" height="1" fill="#000" opacity=".3"/>

          {/* Bala superior */}
          <circle cx="32" cy="12" r="3.5" fill={color}/>
          <circle cx="30.8" cy="10.8" r="1.2" fill="#fff" opacity=".55"/>
        </svg>
      )

    // ── 3. INGENIERÍA / INVESTIGACIÓN — Compás + engranaje + estrella ──
    case 'general':
      return (
        <svg width={s} height={s} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
          <polygon points="32,3 56,16 56,48 32,61 8,48 8,16"
                   fill="none" stroke={color} strokeWidth="2"/>
          <polygon points="32,7 53,18 53,46 32,57 11,46 11,18"
                   fill="none" stroke={color} strokeWidth=".8" opacity=".4"/>

          <g opacity=".25">
            {[0,60,120,180,240,300].map(deg => (
              <rect key={deg} x="30.5" y="10" width="3" height="5" fill={color}
                    transform={`rotate(${deg} 32 32)`}/>
            ))}
            <circle cx="32" cy="32" r="14" fill="none" stroke={color} strokeWidth="2"/>
          </g>

          <path d="M 32 18 L 22 44 L 26 46 L 32 24 L 38 46 L 42 44 Z" fill={color}/>
          <circle cx="32" cy="18" r="3.5" fill={color}/>
          <circle cx="32" cy="18" r="1.5" fill="#000" opacity=".55"/>
          <circle cx="22" cy="44" r="1.5" fill={color}/>
          <circle cx="42" cy="44" r="1.5" fill={color}/>
          <path d="M 22 44 Q 32 36, 42 44" stroke={color} strokeWidth="1.5" fill="none" opacity=".7"/>
          <polygon points="32,28 33,32 37,32 33.8,34.5 35,38.5 32,36 29,38.5 30.2,34.5 27,32 31,32"
                   fill="#fff" opacity=".7"/>

          <g opacity=".7">
            <path d="M 12 30 Q 14 36, 18 40" stroke={color} strokeWidth="1.5" fill="none"/>
            <ellipse cx="13" cy="33" rx="1.5" ry="3" fill={color} transform="rotate(-30 13 33)"/>
            <ellipse cx="15" cy="36" rx="1.5" ry="3" fill={color} transform="rotate(-20 15 36)"/>
            <ellipse cx="17" cy="39" rx="1.5" ry="3" fill={color} transform="rotate(-10 17 39)"/>
            <path d="M 52 30 Q 50 36, 46 40" stroke={color} strokeWidth="1.5" fill="none"/>
            <ellipse cx="51" cy="33" rx="1.5" ry="3" fill={color} transform="rotate(30 51 33)"/>
            <ellipse cx="49" cy="36" rx="1.5" ry="3" fill={color} transform="rotate(20 49 36)"/>
            <ellipse cx="47" cy="39" rx="1.5" ry="3" fill={color} transform="rotate(10 47 39)"/>
          </g>
        </svg>
      )

    default:
      return <span style={{ fontSize: size * 0.85 }}>{type}</span>
  }
}
