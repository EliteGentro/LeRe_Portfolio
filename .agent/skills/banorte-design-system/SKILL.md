---
name: banorte-design-system
description: Enforces the Banorte brand design system for the cocoly-frontend. Red (#EB0029) and white, minimalist, Gotham/Roboto typography. Use when building, reviewing, or fixing UI components in this project.
---

# Banorte Design System — cocoly-frontend

Canonical reference for every UI decision in the cocoly-frontend. All rules below are derived directly from `src/index.css`, `src/components/ui/`, and `CLAUDE.md`.

---

## 1. Core Principle

> **Zero raw values.** Every color, spacing, font, radius, shadow, and z-index must reference a CSS custom property (`var(--…)`). No hex literals, no Tailwind arbitrary values like `text-[#333]`, no magic numbers in inline styles.

---

## 2. Color Tokens

Defined in `src/index.css` under `@theme {}`. Use these variable names exclusively.

### Brand
| Token | Value | Use |
|---|---|---|
| `--color-banorte-red` | `#EB0029` | Primary CTA, active states, accents, focus rings |
| `--color-banorte-red-hover` | `#E30028` | Hover state of red elements |
| `--color-banorte-gray` | `#5B6670` | Muted labels, note text, secondary information |
| `--color-dark-gray` | `#323E48` | Default body text, headings |
| `--color-white` | `#FFFFFF` | Card surfaces, modal backgrounds, button text |

### Backgrounds (neutral surfaces, lightest → darkest)
| Token | Use |
|---|---|
| `--color-bg-3` | `#FCFCFC` — page background overlay, brief panels |
| `--color-bg-2` | `#F4F7F8` — hover/disabled surface, input fill |
| `--color-bg-1` | `#EBF0F2` — borders, dividers, meter tracks |

### Content (text hierarchy)
| Token | Role |
|---|---|
| `--color-content-5` | `#CFD2D3` — disabled borders |
| `--color-content-4` | `#C1C5C8` — secondary borders, separators |
| `--color-content-3` | `#A2A9AD` — placeholder text, muted label |
| `--color-content-2` | `#7B868C` — meta text, eyebrow labels |
| `--color-content-1` | `#E8EBED` — hairline dividers |

### Semantic
| Token | Value | Use |
|---|---|---|
| `--color-positive` | `#6CC04A` | Success states, accepted actions |
| `--color-warning` | `#FFA400` | Caution states |
| `--color-alert` | `#FF671B` | Error/alert accents |
| `--color-link` | `#EB0029` | Hyperlinks (same as brand red) |
| `--color-surface-error-bg` | `#fdedec` | Error toast / inline alert background |
| `--color-surface-error-border` | `#eb0029` | Error toast border |
| `--color-surface-success-bg` | `#e8f4e4` | Success toast background |

---

## 3. Typography

### Font Stacks
| Token | Stack | Use |
|---|---|---|
| `--font-heading` | `"Gotham", "Montserrat", system-ui, sans-serif` | **All** buttons, labels, headings, nav items, microlabels |
| `--font-body` | `"Roboto", system-ui, sans-serif` | Body copy, description text, paragraph content |
| `--font-mono` | `"JetBrains Mono", "Fira Code", monospace` | Code blocks, technical IDs |

### Scale
| Role | Font | Weight | Size |
|---|---|---|---|
| Page title / hero | `--font-heading` | 700 | 28px |
| Section heading | `--font-heading` | 600 | 17–20px |
| Button label | `--font-heading` | 500 | 14–15px |
| Eyebrow / microlabel | `--font-heading` | 600 | 10–11px, `letter-spacing: 0.16–0.18em`, `text-transform: uppercase` |
| Body text | `--font-body` | 400 | 15px, `line-height: 1.5` |
| Caption / meta | `--font-body` | 400 | 12–13px |
| Code | `--font-mono` | 400 | 13–14px |

---

## 4. Spacing System

Spacing tokens are multiples of 5 px. **Never use arbitrary pixel values.**

```
--spacing-5   → 5px
--spacing-8   → 8px
--spacing-10  → 10px
--spacing-12  → 12px
--spacing-15  → 15px
--spacing-20  → 20px
--spacing-25  → 25px
--spacing-30  → 30px
--spacing-40  → 40px
--spacing-45  → 45px
--spacing-50  → 50px
```

---

## 5. Radius & Shadow

| Token | Value | Use |
|---|---|---|
| `--radius-btn` | `4px` | Small buttons, tags, chips |
| `--radius-input` | `6px` | Inputs, cards, panels |
| `8px` (hardcoded) | — | Primary buttons `.btn-primary`, select dropdowns |
| `10px` (hardcoded) | — | `.tx-header`, `.tx-justification`, modal containers |
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.08)` | Default card resting state |
| `--shadow-card-hover` | `0 4px 12px rgba(0,0,0,0.12)` | Card on hover |

---

## 6. Z-Index Layer Scale

Always use these tokens — never write a number directly.

| Token | Value | Use |
|---|---|---|
| `--z-base` | `0` | Default flow |
| `--z-content` | `1` | Slightly elevated content |
| `--z-elevated` | `10` | Floating panels |
| `--z-sticky` | `40` | Sticky headers/sidebars |
| `--z-dropdown` | `120` | Dropdowns, popovers |
| `--z-modal` | `200` | Modal overlays |
| `--z-toast` | `300` | Notification toasts |

Utility classes: `.layer-base`, `.layer-content`, `.layer-elevated`, `.layer-sticky`, `.layer-dropdown`, `.layer-modal`, `.layer-toast`

---

## 7. Component Classes

All shared components are defined in `src/index.css` under `@layer components`. Do not re-implement inline — use these classes.

### Buttons

| Class | Appearance | Use |
|---|---|---|
| `.btn-primary` | Red fill `#EB0029`, white text, 42px h, `border-radius: 8px` | Primary actions (Submit, Confirm, Create) |
| `.btn-secondary` | White fill, `--color-bg-1` border, 42px h | Secondary / cancel actions |
| `.btn-tertiary` | Transparent, `--color-banorte-red` text, 45px h | Ghost / text actions |
| `.btn-additional` | White fill, `--color-content-4` border, 40px h, 13px font | Table row actions, compact buttons |

```tsx
// ✅ Correct
<button className="btn-primary">Save</button>
<button className="btn-secondary">Cancel</button>

// ❌ Wrong — never hardcode red
<button style={{ backgroundColor: '#EB0029' }}>Save</button>
```

For shadcn `<Button>` component (`src/components/ui/button.tsx`):
- `variant="default"` → red fill (same as `.btn-primary`)
- `variant="secondary"` → white fill
- `variant="ghost"` → transparent
- `variant="outline"` → border only
- `variant="destructive"` → red fill, used for destructive actions only

### Inputs

| Class | Spec |
|---|---|
| `.input-field` | 50px h, `--font-heading` 500 15px, `--radius-input` (6px), focus ring: `rgba(235,0,41,0.1)` + `border-color: --color-banorte-red` |
| `.select-field-dense` | 34px h, compact sidebar controls, `--font-body` 12px |

For shadcn `<Input>` (`src/components/ui/input.tsx`):
- Focus border: `border-banorte-red`
- Focus ring: `ring-[rgba(235,0,41,0.2)]`

### Cards & Containers

| Class | Spec |
|---|---|
| `.card` | White bg, `--radius-input` (6px), `--shadow-card`, `--color-bg-1` border, `--spacing-20` padding |
| `.card-accent` | Same as `.card` but with `border: 1px solid rgba(235,0,41,0.24)` |
| `.panel` | White bg, `--radius-input`, `--shadow-card` — no padding (add yourself) |
| `.header-bar` | 63px h, white bg, `border-bottom: 1px solid --color-bg-1`, **`border-top: 3px solid --color-banorte-red`** |

### Tabs

| Class | Spec |
|---|---|
| `.tab-bar` | Flex row, `border-bottom: 1px solid --color-bg-1` |
| `.tab-item` | `--font-heading` 500 14px, `--color-banorte-gray` default, active: `--color-banorte-red` + red bottom border |

### Navigation

| Class | Spec |
|---|---|
| `.breadcrumb` | `--font-heading` 400 17px, `--color-banorte-gray` |

### Tech Stack Module (`.tx-*` prefix)

These classes implement the editorial "magazine spec" aesthetic for data-rich views. All use brand tokens — never raw values.

| Class | Use |
|---|---|
| `.tx-shell` | Root container — `grid`, `gap: --spacing-30` |
| `.tx-header` | Hero strip — white bg, 3px red gradient top border, `border-radius: 10px` |
| `.tx-header::before` | Gradient line: red → alert → warning (90deg) |
| `.tx-header__eyebrow` | 11px uppercase label, `--color-banorte-red` |
| `.tx-header__title` | 28px heading, `--color-dark-gray`, `font-weight: 700` |
| `.tx-action-btn` | Outlined action button, hover: red border + red text |
| `.tx-brief` | Text banner with `3px --color-banorte-red` left border |
| `.tx-brief__label` | 10px uppercase label, `--color-banorte-red`, `letter-spacing: 0.16em` |
| `.tx-legend` / `.tx-legend__label` | Category strip header |
| `.tx-tag` | Pill chip for category items |
| `.tx-tag--included` | White fill |
| `.tx-tag--excluded` | Gray muted fill |
| `.tx-card` | Category item card — white, `--shadow-card` |
| `.tx-meter` | Confidence/score meter container |
| `.tx-meter__fill` | Progress fill — `linear-gradient(90deg, --color-banorte-red, --color-alert)` |
| `.tx-microlabel` | 10px uppercase label with horizontal rule |
| `.tx-justification` | Quote block — red `"` pseudo-element at 60px |
| `.tx-notes` | Left-bordered footnote list (`border-left: 2px solid --color-bg-1`) |
| `.tx-loader-banner` | Loading banner — `border-left: 3px solid --color-banorte-red` |
| `.tx-empty` | Italic empty state, `--font-body`, `--color-content-3` |

---

## 8. The Red Accent Pattern

Banorte red (`#EB0029`) is used **sparingly** as an accent, not as a background. The rule:

- ✅ Red on **borders** (left accent lines, bottom active tab border, `.header-bar` top border, input focus border)
- ✅ Red on **icons** inside white/neutral containers
- ✅ Red for **primary CTAs** (`.btn-primary` fill)
- ✅ Red for **active/selected states** (tab underline, selected node border)
- ✅ Red for **link text** and ghost button labels (`.btn-tertiary`, `.btn-additional:hover`)
- ✅ Red for **eyebrow / microlabels** in editorial contexts
- ❌ Never use red as a **full section/page background**
- ❌ Never use red for **body text** (use `--color-dark-gray`)
- ❌ Never use red as a **decorative fill** on large surfaces

---

## 9. Visual Minimalism Rules

1. **White surfaces, neutral backgrounds** — cards are white on `--color-bg-1` (#EBF0F2) page background
2. **Thin borders** — `1px solid --color-bg-1` or `--color-content-4`; never thick solid borders except the 3px red accent
3. **Subtle shadows** — `--shadow-card` only; no `box-shadow: 0 10px 40px` style heavy shadows on regular UI
4. **Tight typography** — `line-height: 1.1` for headings, `1.5` for body, never loose
5. **No decorative gradients** — only the header strip gradient (`red → alert → warning`) is permitted; no rainbow backgrounds
6. **Max 2 font weights per component** — typically 600 for labels + 400/500 for values
7. **Icons are monochromatic** — use `--color-content-2` or `--color-banorte-red` for icons; never multi-color icons

---

## 10. Focus & Accessibility

All interactive elements must have visible focus states using the Banorte focus ring:

```css
/* Focus ring spec */
border-color: var(--color-banorte-red);
box-shadow: 0 0 0 2px rgba(235, 0, 41, 0.2);
outline: none;
```

In Tailwind: `focus-visible:border-banorte-red focus-visible:ring-2 focus-visible:ring-[rgba(235,0,41,0.2)]`

- Never use `outline: none` without a replacement focus indicator
- Minimum touch target: `44px × 44px` (`min-h-[44px] min-w-[44px]`)
- Icon-only buttons require `aria-label`
- All form inputs require an associated `<label>`

---

## 11. Animation & Motion

- Micro-interactions: `150–300ms`, use `cubic-bezier(0.2, 0, 0, 1)` or `ease-out`
- Button press: `active:scale-[0.96]` or `transform: scale(0.96)`
- Card hover: transition shadow only, not position
- Page entry: `fadeIn` — `opacity: 0 → 1` + `translateY(5px → 0)`, 200–300ms
- No looping decorative animations; `animate-spin` only on loading indicators
- Always respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 12. Anti-Patterns (Never Do)

| Anti-Pattern | Correct Approach |
|---|---|
| `color: #EB0029` or `background: #EB0029` | `var(--color-banorte-red)` |
| `text-[#333]`, `bg-[#F4F7F8]` (Tailwind arbitrary) | Tailwind theme tokens: `text-dark-gray`, `bg-bg-2` |
| `z-index: 9999` | `var(--z-modal)` or `.layer-modal` |
| `font-family: 'Montserrat'` inline | `var(--font-heading)` |
| `padding: 7px` | `var(--spacing-5)` or `var(--spacing-10)` — never odd values |
| Adding CSS in component `.tsx` files | Add to `@layer components` in `src/index.css` or use Tailwind utilities |
| `className="bg-blue-500"` or blue borders for focus | `focus-visible:ring-[rgba(235,0,41,0.2)]` |
| Importing a global stylesheet other than `index.css` | Use `index.css` exclusively |
| `<div>` for interactive elements | `<button>`, `<a>`, `<select>` with proper semantics |
| Hard-coding `width/height` in `px` for spacing | Use `--spacing-*` tokens |

---

## 13. Page Layout Structure

```
┌─────────────────────────────────────────────┐
│  .header-bar  (63px, white, 3px red top)    │
├─────────────────────────────────────────────┤
│  Page background: var(--color-bg-1)         │
│                                             │
│  ┌─────────────────┐  ┌──────────────────┐  │
│  │   .card / .panel│  │  .card-accent    │  │
│  │   (white)       │  │  (red border)    │  │
│  └─────────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────┘
```

- Page background is always `--color-bg-1` (light blue-gray `#EBF0F2`)
- Content lives inside `.card` or `.panel` (white)
- The only red large-surface use is the `header-bar` top accent line (3px)

---

## 14. Quick Reference Card

```
Brand red .............. #EB0029 → var(--color-banorte-red)
Text ................... #323E48 → var(--color-dark-gray)
Page bg ................ #EBF0F2 → var(--color-bg-1)
Card bg ................ #FFFFFF → var(--color-white)
Heading font ........... Gotham/Montserrat → var(--font-heading)
Body font .............. Roboto → var(--font-body)
Primary button ......... .btn-primary  (red fill, 42px)
Secondary button ....... .btn-secondary (white fill, 42px)
Ghost button ........... .btn-tertiary  (transparent, red text)
Card ................... .card  (white, shadow-card, 6px radius)
Input .................. .input-field (50px, red focus ring)
Header bar ............. .header-bar (63px, 3px red top border)
```
