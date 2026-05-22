# Margo — Design System

## Fuente

```
font-family: 'Host Grotesk', sans-serif;
weights: 300, 400, 500 | italic: 300
```

---

## Tokens de color

```css
--color-brand:           #135D52
--color-brand-dark:      #0d3e36
--color-text-primary:    #1a1714
--color-text-secondary:  #6b6560
--color-text-tertiary:   #a8a09a
--color-bg:              #f9f7f4
--color-surface:         #ffffff
--color-surface-alt:     #ece8e2
--color-img-placeholder: #e0dbd5
--color-thumb-placeholder: #d6d0c8
--color-border:          rgba(26,23,20,0.10)
--color-border-strong:   rgba(26,23,20,0.18)
```

### Paleta de acabados de producto

```css
--swatch-blanco:    #F0EDE8
--swatch-negro:     #2A2724
--swatch-laton:     #B89A5A
--swatch-verde:     #135D52
--swatch-terracota: #C1694F
--swatch-cemento:   #8E8880
```

---

## Tokens de tipografía

| Estilo         | Size  | Weight | Letter-spacing | Line-height |
|----------------|-------|--------|----------------|-------------|
| Title XL       | 40px  | 300    | -1px           | 1           |
| Title LG       | 36px  | 300    | -0.8px         | 1.05        |
| Nav / Brand    | 16px  | 500    | -0.2px         | —           |
| Price          | 20px  | 300    | —              | —           |
| Body           | 14px  | 300    | —              | 1.8         |
| Card name      | 14px  | 400    | —              | —           |
| Spec / small   | 13px  | 300–400| —              | —           |
| Eyebrow        | 10px  | 500    | 0.18em UPPER   | —           |
| Label          | 10px  | 500    | 0.16em UPPER   | —           |
| Button primary | 12px  | 500    | 0.12em UPPER   | —           |
| Button ghost   | 11px  | 500    | 0.10em UPPER   | —           |
| Footer / micro | 11px  | 400    | —              | —           |

La cursiva (`<em>`) se reserva exclusivamente para énfasis editorial en Title XL (ej: año).

---

## Tokens de espaciado

```css
--space-1:  4px
--space-2:  8px
--space-3:  10px
--space-4:  12px
--space-5:  14px
--space-6:  16px
--space-7:  18px
--space-8:  20px
--space-9:  24px
--space-10: 32px
--space-11: 36px
--space-12: 40px
--space-13: 48px
--space-14: 52px
--space-15: 56px
--space-16: 64px
--space-17: 80px
```

---

## Bordes y radios

```css
--border-thin:    0.5px solid rgba(26,23,20,0.10)
--border-medium:  0.5px solid rgba(26,23,20,0.18)
--radius-sm:      6px   /* solo logomark */
--radius-full:    50%   /* solo swatches */
```

Regla: **todos los bordes son 0.5px**. Nunca usar 1px ni mayor.

---

## Motion

```css
--transition-fast:   0.15s ease   /* swatches, border-color */
--transition-normal: 0.2s ease    /* botones, links, thumbs */
--transition-slow:   0.3s ease    /* imagen principal, feedback */
--transition-image:  0.6s ease    /* scale en card hover */
```

---

## Layout

```css
--layout-max-width:      1100px
--layout-padding-x:      40px
--layout-padding-x-mobile: 20px
--nav-height:            60px
```

---

## Componentes

### Nav
- Altura: `60px`, sticky top 0, z-index 10
- Fondo: `--color-surface`, borde inferior: `--border-thin`
- Logo centrado: logomark 32×32px con `--radius-sm` + brandname

### Product Card
- Imagen: `aspect-ratio: 3/4`, `object-fit: cover`
- Hover: `transform: scale(1.04)` en imagen, duración `--transition-image`
- Card body: `padding: 14px 18px 18px`, borde superior `--border-thin`
- Gap entre cards: `1px` (background del grid = `--color-border`)

### Botón Primary
- Background: `--color-brand` → hover: `--color-brand-dark`
- Padding: `16px` vertical, full-width con `display: block`
- Sin border-radius

### Botón Ghost
- Color: `--color-text-tertiary` → hover: `--color-text-primary`
- Prefijo `←` via `::before`
- Sin fondo, sin borde

### Eyebrow / Label
- `10px / 500 / UPPERCASE / letter-spacing: 0.16–0.18em`
- Color: `--color-text-tertiary`

### Divisor
- `height: 0.5px`, `background: --color-border`

### Color Swatches
- Tamaño: `36×36px`, `border-radius: 50%`
- Default: `border: 2px solid transparent`
- Active: `box-shadow: 0 0 0 2px surface, 0 0 0 4px text-primary`
- Hover: `transform: scale(1.1)`

### Tabla de specs
- Filas: `padding: 10px 0`, `border-bottom: --border-thin`, `font-size: 13px`
- Clave: `--color-text-tertiary` / Valor: `--color-text-primary`

### Thumb strip
- Altura: `88px`
- Gap: `1px` (background = `--color-border`)
- Opacidad: default `0.5`, hover `0.85`, active `1`

### Footer
- `padding: 20px 40px`, borde superior `--border-thin`
- Fondo: `--color-surface`
- Links en `--color-brand`, sin subrayado

---

## Patrones de layout

### Product Grid

| Breakpoint | Columnas |
|------------|----------|
| > 900px    | 3        |
| < 900px    | 2        |
| < 560px    | 1        |

Implementación: `gap: 1px; background: --color-border` en el contenedor.

### Product Layout (página de producto)
- Grid `1fr 1fr` desktop → `1fr` mobile
- Galería: `position: sticky; top: 60px; height: calc(100vh - 60px)`
- Galería background: `--color-surface-alt`
- Info padding desktop: `56px 56px 64px`
- Info padding mobile: `36px 24px 48px`
- En mobile: galería `height: 60vw`, `position: relative`

---

## Principios de diseño

- **Materialidad sobre ornamento** — sin sombras decorativas, sin gradientes
- **Bordes 0.5px** como firma visual del sistema
- **Weight 300** como tono base; el 500 solo para labels y CTAs
- **Sin border-radius** salvo logomark (6px) y swatches (50%)
- **Escala neutra cálida** — toda la paleta tiene base en `#1a1714` (marrón oscuro, no negro puro)
- **Una sola tipografía** — Host Grotesk en todos los contextos
