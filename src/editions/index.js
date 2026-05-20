// ══════════════════════════════════════════════════════════════════════════
//   REGISTRO DE EDICIONES
// ══════════════════════════════════════════════════════════════════════════
//
//   Para añadir una edición nueva (ver README.md para detalle):
//   1) Crea la carpeta editions/<nuevo-id>/ con su config, theme, data y pages
//   2) Impórtala aquí abajo
//   3) Añádela al array `editions`
//   4) Si es la nueva temporada actual, cambia CURRENT_EDITION_ID
//
//   Las URLs se generan automáticamente a partir del id:
//      editions/vaelthor  → /vaelthor
//      editions/pepeland2 → /pepeland2

// ── 1. Imports de configs ──────────────────────────────────────────────────
import vaelthorConfig  from './vaelthor/config'
import pepeland2Config from './pepeland2/config'

// ── 2. Imports de páginas por edición ──────────────────────────────────────
// (los importamos por separado para evitar imports circulares con el config)

import vaelthorHome           from './vaelthor/pages/Home'
import vaelthorHistoria       from './vaelthor/pages/Historia'
import vaelthorFacciones      from './vaelthor/pages/Facciones'
import vaelthorFaccionDet     from './vaelthor/pages/FaccionDetalle'
import vaelthorMisiones       from './vaelthor/pages/Misiones'
import vaelthorTutorial       from './vaelthor/pages/Tutorial'
import vaelthorMisionesF1     from './vaelthor/pages/misiones/MisionesF1'
import vaelthorMisionesF2     from './vaelthor/pages/misiones/MisionesF2'
import vaelthorMisionesF3     from './vaelthor/pages/misiones/MisionesF3'
import vaelthorGaleria        from './vaelthor/pages/Galeria'

import pepeland2Home          from './pepeland2/pages/Home'
import pepeland2Historia      from './pepeland2/pages/Historia'
import pepeland2Facciones     from './pepeland2/pages/Facciones'
import pepeland2FaccionDet    from './pepeland2/pages/FaccionDetalle'
import pepeland2Misiones      from './pepeland2/pages/Misiones'
import pepeland2Tutorial      from './pepeland2/pages/Tutorial'
import pepeland2MisionesF1    from './pepeland2/pages/misiones/MisionesF1'
import pepeland2MisionesF2    from './pepeland2/pages/misiones/MisionesF2'
import pepeland2MisionesF3    from './pepeland2/pages/misiones/MisionesF3'
import pepeland2Galeria       from './pepeland2/pages/Galeria'

// ── 3. Imports de estilos de cada edición ──────────────────────────────────
// Vite los empaqueta automáticamente; las reglas están scopeadas a .edition-<id>
import './vaelthor/theme.css'
import './pepeland2/theme.css'

// ── 4. Array de ediciones ──────────────────────────────────────────────────
// Cada entrada combina el config + sus páginas
export const editions = [
  {
    ...vaelthorConfig,
    pages: {
      Home:           vaelthorHome,
      Historia:       vaelthorHistoria,
      Facciones:      vaelthorFacciones,
      FaccionDetalle: vaelthorFaccionDet,
      Misiones:       vaelthorMisiones,
      Tutorial:       vaelthorTutorial,
      MisionesF1:     vaelthorMisionesF1,
      MisionesF2:     vaelthorMisionesF2,
      MisionesF3:     vaelthorMisionesF3,
      Galeria:        vaelthorGaleria,
    },
  },
  {
    ...pepeland2Config,
    pages: {
      Home:           pepeland2Home,
      Historia:       pepeland2Historia,
      Facciones:      pepeland2Facciones,
      FaccionDetalle: pepeland2FaccionDet,
      Misiones:       pepeland2Misiones,
      Tutorial:       pepeland2Tutorial,
      MisionesF1:     pepeland2MisionesF1,
      MisionesF2:     pepeland2MisionesF2,
      MisionesF3:     pepeland2MisionesF3,
      Galeria:        pepeland2Galeria,
    },
  },
]

// ── 5. Edición ACTUAL ──────────────────────────────────────────────────────
// Esta es la edición a la que se redirige al entrar a "/"
// Cuando lances una nueva temporada, cambia esta línea por el id correspondiente.
export const CURRENT_EDITION_ID = 'vaelthor'

// ── Helpers ────────────────────────────────────────────────────────────────
export const getEditionById  = (id) => editions.find(e => e.id === id)
export const getCurrentEdition = () => getEditionById(CURRENT_EDITION_ID)
