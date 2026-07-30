# Portfolio Updates — Complete

## Performance Fixes Applied
- `defer` added to all Firebase SDK scripts across all 14 HTML pages (was blocking render)
- `loading="lazy"` added to all 18+ card images on the portfolio page
- `backdrop-filter: blur()` removed from animated card overlays (was causing GPU repaints)
- `will-change: transform` added to bg-orbs (promotes to own compositor layer)

## Portfolio Cards Added/Updated
- DVG cards grouped at top (8 total)
- Recipe & Flavor Lab — 🔒 Private (no URL)
- Inventory & Supply Management — dolcevitagelato-inventory.web.app
- Digital Signage renamed to "Digital Signage & Gelato Management"
- ACS Call Transcription Automation — 🔒 Private
- On-Call IT Engineer Management System — 🔒 Private
- Network Manager Portal (UniFi + SonicWall) — 🔒 Private

## To Deploy
```
cd C:\Users\dcors\Documents\GitHub\Portfolio
firebase deploy --only hosting
```
