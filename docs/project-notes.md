# Projektplan

## Workflow
Entwickle HTML, CSS und JS primär lokal in VSCode und versioniere alles mit Git.

1. Lokal in VSCode einen kleinen, abgeschlossenen Schritt bauen und testen.
2. Commit erstellen.
3. Bei einem sinnvollen Zwischenstand die CSS-/JS-Dateien mit eindeutigem Namen zu Mozello hochladen.
4. HTML in den Mozello-Editor übernehmen.
5. Live prüfen.

**Nicht:** Drei Wochen lokal bauen → einmal in Mozello einfügen → Überraschungen.

## Meilensteinplan
[Google Sheets](https://docs.google.com/spreadsheets/d/1sWXWGvt8SiB8gyRnQEZOHX776fL0yKoMb_30K_nATZc/edit?usp=sharing)

## CSS-Klassennamen
Bis auf Weiteres vereinfachtes BEM als Standardkonvention verwenden. Das ist eine pragmatische Leitlinie, keine Pflicht, jeden Klassennamen in BEM zu pressen.

- Mehrteilige Namen in `kebab-case`: `.image-gallery`
- Namen nach Rolle/Funktion statt nach aktuellem Aussehen oder Position wählen: `.gallery__close-button` statt `.red-button-top-right`
- Block: `.gallery`
- Bestandteil eines Blocks: `.gallery__image`
- Variante oder Zustand eines Blocks: `.gallery--fullscreen`
- Variante oder Zustand eines Bestandteils: `.gallery__button--next`
- Modifier nur verwenden, wenn wirklich eine Variante oder ein Zustand vorliegt; die Basisklasse bleibt zusätzlich erhalten: `class="button button--primary"`
- Nicht die gesamte HTML-Verschachtelung im Klassennamen nachbauen. BEM-Elemente direkt dem Block zuordnen, z. B. `.gallery__button` statt `.gallery__overlay__controls__button`.
- Einfache globale Struktur- oder Hilfsklassen dürfen normale Namen behalten, z. B. `.site-header`, `.main-content` oder `.visually-hidden`.

Beispiel:

```html
<div class="gallery">
  <img class="gallery__image">
  <button class="gallery__button gallery__button--close">Close</button>
</div>
```

## CSS Custom Properties

- Custom Properties in `kebab-case` und nach ihrem Zweck benennen, z. B. `--button-size` oder `--overlay-background`.
- Bei einer echten Farbpalette können nummerierte Abstufungen verwendet werden, z. B. `--color-yellow-300` und `--color-yellow-400`.
- Die Zahl ist nur eine projektinterne Bezeichnung für eine Farbnuance und hat für CSS keine eigene Bedeutung; größere Zahlen stehen üblicherweise für dunklere oder kräftigere Töne.
- Nummerierte Farbskalen nur verwenden, wenn tatsächlich mehrere Abstufungen benötigt werden. Für einzelne Werte sind semantische Namen wie `--color-overlay-background` meist hilfreicher.

## Dateistruktur
website-skibus/
├── accommodation-gallery/
│   ├── index.html
│   ├── gallery.css (skibus-accommodation-gallery-vx.css)
│   ├── gallery.js (skibus-accommodation-gallery-vx.js)
│   └── assets/
├── skipass-comparison/
│   ├── index.html
│   ├── comparison.css (skibus-skipass-comparison-vx.css)
│   └── comparison.js (skibus-skipass-comparison-vx.js)
├── docs/
│   └── project-notes.md
└── README.md

() = Mozello-Upload