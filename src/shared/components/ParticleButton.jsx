import { useRef, useEffect, useCallback } from 'react'

// ── ParticleButton ────────────────────────────────────────────────────────
// Wrapper que añade partículas pixel estilo Minecraft al hacer hover.
// Props:
//   color     — color hex de las partículas
//   children  — contenido del botón (texto, Link, etc.)
//   className — clases CSS del botón
//   style     — estilos extra
//   onClick   — handler de click
//   as        — elemento raíz ('button' por defecto, puede ser 'a', etc.)

export default function ParticleButton({ color = '#e040fb', children, wrapStyle }) {
  const wrapRef    = useRef(null)
  const canvasRef  = useRef(null)
  const particles  = useRef([])
  const rafRef     = useRef(null)
  const hovering   = useRef(false)

  // Ajusta el canvas al tamaño del wrapper + espacio para caída
  const resizeCanvas = useCallback(() => {
    const el = wrapRef.current
    const cv = canvasRef.current
    if (!el || !cv) return
    cv.width  = el.offsetWidth
    cv.height = 400
  }, [])

  useEffect(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [resizeCanvas])

  function spawnParticle() {
    const cv = canvasRef.current
    if (!cv) return
    // Spawn desde la parte inferior del botón con velocidad aleatoria
    particles.current.push({
      x:       Math.random() * cv.width,
      y:       (wrapRef.current?.offsetHeight ?? 40) * Math.random(),
      vx:      (Math.random() - 0.5) * 0.25,
      vy:      0.08 + Math.random() * 0.12,
      gravity: 0.004,
      size:    3 + Math.floor(Math.random() * 4),
      opacity: 0.85 + Math.random() * 0.1,
      fade:    0.0018 + Math.random() * 0.001,
    })
  }

  function draw() {
    const cv  = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    ctx.clearRect(0, 0, cv.width, cv.height)

    // Spawnar nuevas partículas mientras se hace hover
    if (hovering.current) {
      if (Math.random() < 0.12) spawnParticle()  // spawn lento
    }

    // Actualizar y dibujar cada partícula
    particles.current = particles.current.filter(p => p.opacity > 0.04)

    for (const p of particles.current) {
      p.vy      += p.gravity
      p.x       += p.vx
      p.y       += p.vy
      p.opacity -= p.fade

      ctx.globalAlpha          = Math.max(0, p.opacity)
      ctx.fillStyle            = color
      ctx.imageSmoothingEnabled = false

      // Píxel cuadrado — sin border-radius, estilo Minecraft
      const s = p.size
      ctx.fillRect(Math.round(p.x), Math.round(p.y), s, s)

      // Sombra del píxel (cara oscura, como en Minecraft)
      ctx.fillStyle   = 'rgba(0,0,0,0.35)'
      ctx.fillRect(Math.round(p.x) + s, Math.round(p.y) + 1, 1, s)
      ctx.fillRect(Math.round(p.x) + 1,  Math.round(p.y) + s, s, 1)
    }

    ctx.globalAlpha = 1

    if (particles.current.length > 0 || hovering.current) {
      rafRef.current = requestAnimationFrame(draw)
    } else {
      rafRef.current = null
    }
  }

  function onEnter() {
    hovering.current = true
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(draw)
    }
  }

  function onLeave() {
    hovering.current = false
    // El loop sigue hasta que se vacíen las partículas existentes
  }

  return (
    <div
      ref={wrapRef}
      style={{ position: 'relative', display: 'inline-block', ...wrapStyle }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Canvas — encima del botón visualmente, pero sin capturar clicks */}
      <canvas
        ref={canvasRef}
        style={{
          position:      'absolute',
          top:           0,
          left:          0,
          pointerEvents: 'none',
          zIndex:        10,
          imageRendering: 'pixelated',
        }}
      />
      {children}
    </div>
  )
}
