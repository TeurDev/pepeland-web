// ── Galería de Vaelthor ──────────────────────────────────────────────────
// CÓMO AÑADIR FOTOS:
//   1) Mete las imágenes en  ./assets/gallery/
//   2) ¡Listo! Aparecen automáticamente.
//
// Las primeras 4 fotos (por orden alfabético) salen en el carrousel.
// El nombre del archivo se usa como título (sin extensión, guiones → espacios).
//
// OPCIONAL — personaliza títulos o marca destacadas manualmente:
//   En el objeto `metadata`, añade una clave con el nombre del archivo:
//   'despertar.jpg': { titulo: 'El Despertar', descripcion: '...', destacada: true }

const metadata = {
  // 'despertar.jpg': { titulo: 'El Despertar de Vaelthor', descripcion: 'La primera incursión.', destacada: true },
  // 'ruinas.jpg':    { titulo: 'Ruinas del Norte',         descripcion: 'Donde se selló el pacto.' },
}

// ── Auto-detección de imágenes ───────────────────────────────────────────
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
