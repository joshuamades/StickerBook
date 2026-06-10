# StickerBook Playable Ad

A custom Phaser 3 playable ad built for the StickerBook concept, utilizing the Unified Playable Ads Network Plugin to export to multiple ad networks (AppLovin, IronSource, Mintegral, Unity, Google, Facebook, etc.).

## Overview

This project features a drag-and-drop sticker placement mechanic where users pull stickers from a bottom tray ("blue container") and place them onto numbered target outlines on a living room background. The ad is heavily optimized for a single-file, base64-encoded output under 5MB to comply with major ad network requirements.

## Build Instructions

### 1. Prerequisites
- Node.js and Yarn/NPM installed.
- Ensure all dependencies are installed via `yarn install` or `npm install`.

### 2. Optimizing Assets (WebP Conversion)
To ensure the final build stays under the 5MB limit, all PNG assets should be compressed to WebP:
```bash
node scripts/convert-webp.mjs
```
*Note: This script will recursively convert all `.png` files in `public/assets/images` to `.webp` at 75% quality and delete the original PNGs.*

### 3. Base64 Encoding
Playable ads often require a single `index.html` file with no external HTTP requests. We convert our WebP and MP3 assets into base64 JS modules:
```bash
yarn base64
```
This generates `.webp.js` and `.mp3.js` files in the `media/` directory and updates `media/imports.txt`.

### 4. Local Development
To test the ad locally with hot-reloading:
```bash
yarn dev
```

### 5. Production Build
To create the final inlined ad build (e.g., for AppLovin or Unity):
```bash
yarn build:inline
```
The output will be placed in `dist-inline-[network]` folders (e.g., `dist-inline-applovin/index.html`), ready to be uploaded to the respective ad network dashboards.

---

## Notes, Assumptions & Deviations

### Layout & Responsiveness
- **Portrait (Phones):** The background utilizes a "cover" scaling strategy (`Math.max`) to ensure no empty blue bars appear at the top or bottom of modern, tall phone screens.
- **Landscape & Tablets (Wide Portrait):** We explicitly deviated from the "cover" strategy for wide-aspect-ratio screens. Instead, it uses a "fit" strategy (`Math.min`), which scales the portrait layout down to fit the height of the screen and creates blue letterboxing on the sides. This was necessary to prevent the top/bottom targets from being pushed entirely off-screen.

### Depth Sorting (Z-Index)
- **Target Outlines:** The empty numbered outlines are given an artificially high depth boost (`90 + default depth`) so they are always visible *above* any colored stickers that the user has already placed on the board.
- **Placed Stickers:** Once dropped, the colored stickers revert to the exact `depth` specified in `TARGET_LAYOUT`, ensuring they sink behind/in-front of each other accurately.
- **Tray UI:** The blue container, hand guide, and tray stickers have been bumped to the `200-250` depth range to guarantee they sit above the boosted target outlines.

### Debugging Features
- We added a constant at the top of `src/scenes/Game.js`:
  ```javascript
  const DEBUG_SHOW_ALL_TARGETS = true;
  ```
  By default, the game is meant to only show 3 target outlines at a time (corresponding to the 3 active stickers in the tray). You can toggle this flag to instantly show all 50 target outlines for visual debugging and coordinate adjustment.

### Draggable Sizes
- The `maxWidth` and `maxHeight` constraints in `layoutDraggableNode` were significantly increased from the original template to make the tray stickers appear larger, matching the client's reference imagery. The numbering badge was also offset specifically to the top-right edge of the scaled stickers.
