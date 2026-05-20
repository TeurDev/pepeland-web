// ── Galería de Pepeland 2 ────────────────────────────────────────────────
// Misma lógica que Vaelthor:
//   1) Mete fotos en  ./assets/gallery/
//   2) Aparecen automáticamente (primeras 4 en carrousel)
//   3) Opcionalmente personaliza títulos en `metadata`

const metadata = {
  // 'novaenor.jpg':  { titulo: 'Novaenor',          descripcion: 'El pueblo neutral.', destacada: true },
  // 'heraldo.jpg':   { titulo: 'El Heraldo Celeste', descripcion: 'El meteorito.' },
}

const modules = import.meta.glob(
  './assets/gallery/*.{jpg,jpeg,png,webp,gif}',
  { eager: true, query: '?url', import: 'default' }
)

export const galeria = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url], i) => {
    const filename = path.split('/').pop()
    const meta = metadata[filename] || {}
    const name = filename.split('.')[0].replace(/[-_]/g, ' ')

    return {
      id: `foto-${String(i + 1).padStart(2, '0')}`,
      src: url,
      thumb: url,
      titulo: meta.titulo || name.charAt(0).toUpperCase() + name.slice(1),
      descripcion: meta.descripcion || '',
      destacada: meta.destacada ?? i < 4,
    }
  })
