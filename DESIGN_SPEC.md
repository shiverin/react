# Field Notes design specification

## Visual thesis

A tactile digital field notebook that presents systems engineering, quantitative work, and machine learning through disciplined editorial typography, archival paper, and a cobalt binding.

## Design DNA

- **Spatial model:** asymmetrical magazine spread with a bound left rail, open ruled sections, and a portrait/name lockup.
- **Material model:** uncoated ivory paper, navy book cloth, torn portrait paper, charcoal ink, and vermilion registration marks.
- **Typography:** high-contrast serif for names and statements; restrained sans serif for UI, data, and long-form reading.
- **Color:** ivory `#f2eee5`, ink `#181b24`, navy `#102e63`, deep navy `#0b244f`, red `#f14c45`.
- **Container model:** open bands and ruled lists first; paper sheets only for dense case-study or form content; no default rounded-card grid.
- **Signature behavior:** six notebook index tabs remain fixed within the viewport while the portrait cutout gently responds to the pointer.

## Motion grammar

- Names reveal through clipping and vertical movement.
- Content enters through transform and opacity only.
- Cards lift no more than five pixels; arrows travel horizontally to show direction.
- Section tabs use native smooth scrolling and update the active hash state.
- Pointer tilt is subtle and disabled for touch input.
- `prefers-reduced-motion` removes decorative motion and preserves content immediately.

## Controlled rule break

The portrait is cut into an irregular paper silhouette and placed over a rigid cobalt rectangle. This is the one deliberately irregular shape in an otherwise ruled editorial system.

## Responsive behavior

- Desktop uses the fixed six-tab bound rail and a wide name/portrait spread.
- Tablet removes the bound rail and retains the full composition.
- Mobile becomes one continuous vertical editorial sequence.
- Expensive pointer and tilt effects are disabled on touch devices.
