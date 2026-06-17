// ── Galería de Pepeland 2 ────────────────────────────────────────────────
// Misma lógica que Vaelthor:
//   1) Mete fotos en  ./assets/gallery/
//   2) Aparecen automáticamente (primeras 4 en carrousel)
//   3) Opcionalmente personaliza títulos en `metadata`

const metadata = {
  '2025-07-18_00.51.08.png': { titulo: 'Foto 01', descripcion: '' },
  '2025-07-19_12.15.40.png': { titulo: 'Foto 02', descripcion: '' },
  '2025-07-19_14.43.51.png': { titulo: 'Adfredianx volando', descripcion: 'Adfredianx volando en el cielo' , destacada: true},
  '2025-07-19_20.27.02.png': { titulo: 'Foto 04', descripcion: '' },
  '2025-07-19_20.27.13.png': { titulo: 'Cultivo de patacas', descripcion: 'Patacas creciendo en el cultivo' , destacada: true },
  '2025-07-20_23.54.56.png': { titulo: 'Foto 06', descripcion: '' },
  '2025-07-23_22.16.00.png': { titulo: 'Briagt11 encima de tia turbina', descripcion: 'La leyenda de Briagt11' , destacada: true },
  '2025-07-25_01.23.25.png': { titulo: 'Foto 08', descripcion: '' },
  '2025-07-25_01.24.18.png': { titulo: 'Foto 09', descripcion: '' },
  '2025-07-25_01.28.29.png': { titulo: 'Cuevas Primordiales', descripcion: 'Cuevas del mod Alex Caves debajo de la casa de Adfredianx' , destacada: true },
  '2025-07-25_02.10.25.png': { titulo: 'Foto 11', descripcion: '' },
  '2025-07-25_02.10.36.png': { titulo: 'Foto 12', descripcion: '' },
  '2025-07-25_02.10.45.png': { titulo: 'Pderodactilo agarra dos pendejos', descripcion: 'Adfredianx y RusikoElGuapiko agarrados (en termino no castellano)', destacada: true },
  '2025-07-28_17.48.00.png': { titulo: 'Morgan', descripcion: 'Morgan es un personaje importante y esta investigando la caida del meteorito', destacada: true },
  '2025-08-02_02.18.24.png': { titulo: 'Foto 15', descripcion: '' },
  '2025-08-02_02.18.36.png': { titulo: 'Foto 16', descripcion: '' },
  '2025-08-04_20.55.20.png': { titulo: 'Timelapse 1', descripcion: 'Iniciando el timelapse' },
  '2025-08-04_20.55.23.png': { titulo: 'Timelapse 2', descripcion: 'En proceso' },
  '2025-08-04_20.55.27.png': { titulo: 'Timelapse 3', descripcion: 'En proceso' },
  '2025-08-04_20.55.29.png': { titulo: 'Timelapse 4', descripcion: 'En proceso' },
  '2025-08-04_20.55.38.png': { titulo: 'Timelapse 5', descripcion: 'En proceso' },
  '2025-08-04_20.55.42.png': { titulo: 'Timelapse 6', descripcion: 'En proceso' },
  '2025-08-04_20.55.50.png': { titulo: 'Timelapse 7', descripcion: 'En proceso' },
  '2025-08-04_20.56.05.png': { titulo: 'Timelapse 8', descripcion: 'Acabando el timelapse' },
  '2025-08-04_23.47.38.png': { titulo: 'Foto 25', descripcion: '' },
  '2025-08-05_01.14.49.png': { titulo: 'Foto 26', descripcion: '' },
  '2025-08-05_01.15.05.png': { titulo: 'Foto 27', descripcion: '' },
  '2025-08-05_01.25.29.png': { titulo: 'Foto 28', descripcion: '' },
  '2025-08-05_01.47.40.png': { titulo: 'Foto 29', descripcion: '' },
  'a.png':                   { titulo: 'Foto 30', descripcion: '' },
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
