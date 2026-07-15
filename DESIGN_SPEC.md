# Field Notes design specification

## Visual thesis

A tactile digital field notebook that presents systems engineering, quantitative work, and machine learning through disciplined editorial typography, archival paper, cobalt binding, and animated registration marks.

## Design DNA

- **Spatial model:** asymmetrical magazine spread with a bound left rail, open ruled sections, and a portrait/name lockup.
- **Material model:** uncoated ivory paper, navy book cloth, torn portrait paper, charcoal ink, and vermilion registration marks.
- **Typography:** high-contrast serif for names and statements; restrained sans serif for UI, data, and long-form reading.
- **Color:** ivory `#f2eee5`, ink `#181b24`, navy `#102e63`, deep navy `#0b244f`, red `#f14c45`.
- **Container model:** open bands and ruled lists first; paper sheets only for dense case-study or form content; no default rounded-card grid.
- **Signature behavior:** notebook index tabs slide from the bound rail while the portrait cutout gently responds to the pointer.

## Motion grammar

- Names reveal through clipping and vertical movement.
- Rules draw from left to right.
- Content enters through transform and opacity only.
- Cards lift no more than five pixels; arrows travel horizontally to show direction.
- Route changes use a short page-mask entrance.
- Pointer tilt is subtle and disabled for touch input.
- `prefers-reduced-motion` removes decorative motion and preserves content immediately.

## Controlled rule break

The portrait is cut into an irregular paper silhouette and placed over a rigid cobalt rectangle. This is the one deliberately irregular shape in an otherwise ruled editorial system.

## Responsive behavior

- Desktop uses the bound rail, full navigation, wide name/portrait spread, and a four-column gateway index.
- Tablet removes the bound rail, retains the full composition, and moves gateways to two columns.
- Mobile becomes a vertical editorial sequence: name, portrait, gateway rows, then the contact action.
- Expensive pointer and tilt effects are disabled on touch devices.
