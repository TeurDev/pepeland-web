// ── Config de la edición Vaelthor ─────────────────────────────────────────
// Cambia aquí los metadatos de esta edición. NO importa las páginas aquí
// (eso se hace en editions/index.js para evitar imports circulares).

import tituloImg from './assets/titulo.png'

const config = {
  id:        'vaelthor',           // ← debe coincidir con el nombre de la carpeta y la URL
  nombre:    'Vaelthor',
  subtitulo: 'Las Tierras Olvidadas',
  año:       2025,
  // Color principal usado en la card de /ediciones
  color:     '#e040fb',
  colorBg:   '#1a0a26',
  // Logo/título mostrado en la card de ediciones y en el hero
  logo:      tituloImg,
  // Resumen breve para la card
  youtube:     'https://youtube.com/@pepeland',  // cambiar por el real
  discord:     'https://discord.gg/pepeland',  // cambiar por el real
  descripcion: 'Spin-off de Pepeland. Tres facciones luchan por las tierras olvidadas.',
}

export default config
