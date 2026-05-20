# Pepeland Multi-Edición

Web modular pensada para alojar varias ediciones (temporadas) del servidor de Minecraft de Pepeland. Cada edición tiene su propia estética, colores, contenido e imágenes, pero comparten la misma estructura y componentes.

---

## Arranque

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # genera /dist para producción
```

---

## Cómo funciona

### El concepto

El proyecto es un contenedor que aloja **ediciones**. Cada edición vive en una carpeta autocontenida con:
- Su configuración (nombre, año, color, logo)
- Su paleta de colores (theme.css)
- Sus datos (facciones, códigos de misión, tutoriales)
- Sus páginas

Una sola edición está marcada como **actual** y es a la que el usuario es redirigido cuando entra a `/`. Las demás siguen accesibles desde `/ediciones` y muestran un aviso discreto arriba ("Volver a la edición actual").

### Estructura de carpetas

```
src/
├── shared/                          ← código común a TODAS las ediciones
│   ├── components/
│   │   ├── EditionContext.jsx       ← context + EditionLink/EditionNavLink
│   │   ├── EditionLayout.jsx        ← wrapper que monta cada edición
│   │   ├── Navbar.jsx               ← detecta la edición, muestra el banner si aplica
│   │   ├── ParticleButton.jsx       ← partículas estilo Minecraft
│   │   ├── MisionAccordion.jsx      ← acordeón de misiones
│   │   ├── WikiSidebar.jsx          ← sidebar con scroll-spy
│   │   └── ScrollToTop.jsx          ← scroll al inicio al cambiar de ruta
│   ├── pages/
│   │   └── EditionsList.jsx         ← página /ediciones (cards)
│   └── shared.css                   ← layout, animaciones, responsive
│
├── editions/
│   ├── index.js                     ← REGISTRO: lista de ediciones + CURRENT_EDITION_ID
│   │
│   ├── vaelthor/                    ← edición actual (ejemplo)
│   │   ├── config.js                ← id, nombre, año, color, logo
│   │   ├── theme.css                ← .edition-vaelthor { --pink: ...; ... }
│   │   ├── data.js                  ← facciones + códigos de misión
│   │   ├── assets/
│   │   │   └── titulo.png
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── Historia.jsx
│   │       ├── Facciones.jsx
│   │       ├── FaccionDetalle.jsx
│   │       ├── Misiones.jsx
│   │       ├── Tutorial.jsx
│   │       └── misiones/
│   │           ├── MisionesF1.jsx
│   │           ├── MisionesF2.jsx
│   │           └── MisionesF3.jsx
│   │
│   └── pepeland2/                   ← edición antigua (ejemplo)
│       └── (misma estructura)
│
├── App.jsx                          ← router global
└── main.jsx
```

### Rutas

| URL                              | Página |
|----------------------------------|--------|
| `/`                              | Redirige a `/<edicion-actual>` |
| `/ediciones`                     | Cards con todas las ediciones |
| `/<id>`                          | Home de la edición |
| `/<id>/historia`                 | Historia de la edición |
| `/<id>/facciones`                | Facciones |
| `/<id>/facciones/:nombre`        | Detalle de una facción |
| `/<id>/misiones`                 | Input de código |
| `/<id>/misiones/faccion-1/2/3`   | Misiones por facción |
| `/<id>/tutorial`                 | Tutoriales |

### Cómo se aplica el theme

Cada edición tiene un `theme.css` con sus variables CSS scopedas bajo `.edition-<id>`:

```css
.edition-vaelthor {
  --pink: #e040fb;
  --gold: #f59e0b;
  --bg:   #06050d;
  /* ... */
}
```

Cuando una edición se monta, `EditionLayout` añade la clase `edition-<id>` al `<html>` y todas las variables cascadean. Cuando cambias de edición, se intercambian.

### Cómo navegan las páginas

En vez de usar `<Link>` y `<NavLink>` directamente, las páginas usan `<EditionLink>` y `<EditionNavLink>` (de `@shared/components/EditionContext`). Estos añaden automáticamente el prefijo de la edición a las URLs:

```jsx
<EditionLink to="/historia">  →  /vaelthor/historia
```

Así una misma página funciona idéntica en cualquier edición sin tocar URLs.

---

## Añadir una edición nueva

Imagina que el año que viene haces **Pepeland 3**. Estos son los pasos:

### 1. Duplicar la carpeta

Copia `src/editions/vaelthor` y renómbrala a `src/editions/pepeland3`.

### 2. Editar `config.js`

```js
import tituloImg from './assets/titulo.png'

const config = {
  id:          'pepeland3',                    // ← debe coincidir con el nombre de la carpeta
  nombre:      'Pepeland 3',
  subtitulo:   'El despertar',
  año:         2026,
  color:       '#3b82f6',                      // azul, por ejemplo
  colorBg:     '#0a0e1f',
  logo:        tituloImg,                      // o null si quieres título en texto
  descripcion: 'Resumen breve para la card de /ediciones.',
}

export default config
```

### 3. Editar `theme.css`

Renombra la clase y cambia la paleta:

```css
.edition-pepeland3 {
  --bg:       #060810;
  --bg2:      #0d1220;
  --pink:     #3b82f6;    /* el color principal de la edición */
  --pink-dim: #1e3a8a;
  --gold:     #fbbf24;
  /* ...el resto igual */
}
```

> Los nombres de las variables (`--pink`, `--gold`) son históricos pero ya no significan colores literales. Son los slots semánticos: `--pink` es el acento principal, `--gold` el secundario. Mantén esos nombres aunque tu paleta sea azul/amarillo.

### 4. Reemplazar assets

Sustituye `assets/titulo.png` por la imagen de tu edición. Si no tienes imagen, pon `logo: null` en el config y la portada usará un título en texto pixel art.

### 5. Adaptar contenido en `data.js` y las páginas

Edita los textos de:
- `data.js` — nombres de facciones, códigos de misión, etc.
- `pages/Historia.jsx` — el lore
- `pages/Home.jsx` — textos de portada
- `pages/Tutorial.jsx` — vídeos e instrucciones

### 6. Registrar la edición en `editions/index.js`

Añade los imports y la entrada en el array:

```js
import pepeland3Config from './pepeland3/config'
import pepeland3Home   from './pepeland3/pages/Home'
// ...resto de imports

import './pepeland3/theme.css'                  // ← importante: importa el theme

export const editions = [
  { ...vaelthorConfig,  pages: { /* ... */ } },
  { ...pepeland2Config, pages: { /* ... */ } },
  {
    ...pepeland3Config,
    pages: {
      Home:           pepeland3Home,
      Historia:       pepeland3Historia,
      // ... etc
    },
  },
]
```

### 7. Marcarla como actual

En el mismo archivo, cambia:

```js
export const CURRENT_EDITION_ID = 'pepeland3'
```

A partir de ese cambio:
- `/` redirige automáticamente a `/pepeland3`
- En `/ediciones` aparece la etiqueta "ACTUAL" sobre Pepeland 3
- Si entras a `/vaelthor` o `/pepeland2` aparece el banner "← Volver a la edición actual"

---

## Despliegue en GitHub Pages

El proyecto incluye un workflow en `.github/workflows/deploy.yml`. Para activarlo:

1. En `vite.config.js`, cambia `base: '/'` por `base: '/<nombre-del-repo>/'`
2. En GitHub: Settings → Pages → Source → **GitHub Actions**
3. Haz push a `main` y se despliega solo

---

## Notas técnicas

- El alias `@shared` apunta a `src/shared` y `@editions` a `src/editions` (configurado en `vite.config.js`)
- Cada edición carga su CSS porque el import vive en `editions/index.js`. Vite los empaqueta todos juntos pero como están scopados a `.edition-<id>` no chocan
- El `EditionContext` provee `edition`, `isCurrent`, `currentEditionId` y `prefix` a cualquier componente hijo
- Los redirects desde rutas desconocidas (`*`) van a la edición actual

---

## Componentes reutilizables

Estos viven en `src/shared/components/` y pueden usarse desde cualquier edición:

- **`ParticleButton`** — wrapper para añadir partículas pixel que caen al hover. Props: `color`
- **`MisionAccordion`** — acordeón de misiones por categoría (principales/secundarias/completadas). Props: `misiones`, `accent`
- **`WikiSidebar`** — sidebar sticky con scroll-spy. Props: `items` (`[{id, label}]`), `title`
- **`ScrollToTop`** — fuerza scroll al inicio al cambiar de ruta
- **`EditionLink` / `EditionNavLink`** — Link prefijado automáticamente con la edición
- **`useEdition()`** — hook para obtener info de la edición actual
