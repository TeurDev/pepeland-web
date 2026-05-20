// ── Imágenes del Home ─────────────────────────────────────────────────────
// Sistema auto-mágico:
//   1) Mete un archivo en  ./assets/home/  con uno de estos nombres:
//        historia.jpg   → bloque "Sobre el lore"
//        facciones.jpg  → bloque "Sobre las facciones"
//        tutorial.jpg   → bloque "Sobre el tutorial"
//   2) ¡Listo! Aparece automáticamente sustituyendo al placeholder.
//   3) Si no existe el archivo, sigue mostrándose el placeholder de texto.
//
// Acepta cualquier extensión común: .jpg, .jpeg, .png, .webp, .gif
// (Vite recoge todo lo que haya en la carpeta).

const modules = import.meta.glob(
  './assets/home/*.{jpg,jpeg,png,webp,gif}',
  { eager: true, query: '?url', import: 'default' }
)

const homeImages = {}
for (const path in modules) {
  // Extrae el nombre sin extensión:  './assets/home/historia.jpg' → 'historia'
  const filename = path.split('/').pop().split('.')[0]
  homeImages[filename] = modules[path]
}

export default homeImages
