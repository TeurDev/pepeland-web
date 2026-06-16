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
   '1atardecer.png':    { titulo: 'Atardecer',            descripcion: 'Atardecer en el horizonte' , destacada: true},
   '1yo.png':           { titulo: 'Admin del server',            descripcion: 'El administrador del server saltando en su primera foto' , destacada: true},
   'adfredianx1.png':   { titulo: 'Adfredianx',   descripcion: 'Adfredianx siendo Adfredianx' },
   'adfredianx2.png':   { titulo: 'Adfredianx y los Golems',   descripcion: 'Adfredianx salio papeado de esta dungeon' },
   'gatosypaloma.png':  { titulo: 'Caceria',  descripcion: 'Manada de gatos intentan cazar a la paloma', destacada: true  },
   'gatosypaloma2.png': { titulo: 'Paloma y gato escondido', descripcion: 'Suerte si encuentras al gato' },
   'golem.png':         { titulo: 'Golems Perdidos',         descripcion: 'Un golem perdido en el subsuelo' },
   'minion.png':        { titulo: 'Minion',        descripcion: 'Minion fiel amigo de RusikoElGuapiko', destacada: true },
   'sedeastra.png':     { titulo: 'Sede Astra',     descripcion: 'Aldeanos de la Sede Astra'},
  // 'Tuto.png':          { titulo: 'Tuto',          descripcion: '' },
  // 'zombie.png':        { titulo: 'Zombie',        descripcion: '' },
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