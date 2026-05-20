// Esquina ornamental pixel-art. Útil para enmarcar tarjetas, fotos, etc.
// Props:
//   accent — color de la esquina
//   flip   — 'h' | 'v' | 'hv' para reflejar horizontal, vertical o ambos
//   size   — tamaño en px (default 36)

export default function OrnamentalCorner({ accent = '#fff', flip = '', size = 36 }) {
  let transform = ''
  if (flip.includes('h')) transform += ' scaleX(-1)'
  if (flip.includes('v')) transform += ' scaleY(-1)'

  return (
    <svg
      width={size} height={size} viewBox="0 0 36 36"
      style={{ transform: transform.trim() || 'none', flexShrink: 0 }}
      fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0"  y="0"  width="4"  height="28" fill={accent}/>
      <rect x="0"  y="0"  width="28" height="4"  fill={accent}/>
      <rect x="6"  y="6"  width="6"  height="6"  fill={accent} opacity=".85"/>
      <rect x="8"  y="4"  width="2"  height="2"  fill={accent} opacity=".6"/>
      <rect x="4"  y="8"  width="2"  height="2"  fill={accent} opacity=".6"/>
      <rect x="14" y="7"  width="4"  height="4"  fill={accent} opacity=".55"/>
      <rect x="20" y="8"  width="2"  height="2"  fill={accent} opacity=".3"/>
      <rect x="7"  y="14" width="4"  height="4"  fill={accent} opacity=".55"/>
      <rect x="8"  y="20" width="2"  height="2"  fill={accent} opacity=".3"/>
      <rect x="9"  y="9"  width="2"  height="2"  fill="#fff"   opacity=".25"/>
    </svg>
  )
}
