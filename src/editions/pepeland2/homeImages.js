// Misma lógica que en Vaelthor.
// Mete archivos en ./assets/home/ con nombres: historia, facciones, tutorial.

const modules = import.meta.glob(
  './assets/home/*.{jpg,jpeg,png,webp,gif}',
  { eager: true, query: '?url', import: 'default' }
)

const homeImages = {}
for (const path in modules) {
  const filename = path.split('/').pop().split('.')[0]
  homeImages[filename] = modules[path]
}

export default homeImages
