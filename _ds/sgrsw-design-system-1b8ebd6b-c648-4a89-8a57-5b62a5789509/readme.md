# SGRSW Design System

**SGRSW** — *Standards and Guidelines for Roads and Stormwater*, City of Cape Town.

**Standards and Guidelines for Roads & Stormwater**, Version 5.0 | January 2027 (working draft
5.0.2). Published by the **City of Cape Town: Urban Mobility Directorate**, compiled by Roads
Infrastructure Management and Transport Infrastructure Implementation.

SGRSW is the City's technical standards publication for urban development infrastructure. Its
audience is external: **developers and consultants (designers)** who plan, design and construct
the roads and stormwater infrastructure that services residential, commercial and industrial
developments inside the metropolitan area — plus the City's own District Engineers and the
Director: Roads Infrastructure Management (RIM), who act as the **Approval Authority**.

**Document structure** — four parts:

| Part | Contents |
| --- | --- |
| **A** | Standards and Guidelines Content — 20 chapters |
| **B** | Book of Drawings — standard details (e.g. RD1.1 BK Kerbs & C1 Channels, Rev C) |
| **C** | Maps — the "RIM Districts" Map; WCG proclaimed road network maps |
| **D** | Annexures |

**Part A chapters:** 1 Introduction · 2 Road Planning · 3 Road Design · 4 Road Verges ·
5 Active Mobility · 6 Carriageway Crossings · 7 Parking · 8 Pavements & Materials ·
9 Road Signs, Markings and Control Devices · 10 Stormwater Design · 11 Sanitation (Sewer) ·
12 Water Reticulation · 13 Ducts · 14 Public Street Lighting · 15 Geotechnical ·
16 Trenchless Technologies · 17 Miscellaneous · 18 Approval of Engineering Drawings ·
19 Drawing and As-Built Requirements · 20 Document References

**Enquiries:** Grant Coetzee or Daneel du Toit — StandardsGuidelines.RSW@capetown.gov.za.
Published at www.capetown.gov.za/urbanmobility.

The document is normative, versioned and legally anchored. Everything in this design system
serves three jobs the content itself demands:

1. **Locate a clause.** Numbered, deep-linkable, navigable by part → chapter → clause.
2. **Prove currency.** "It is the responsibility of the designers to confirm that they are
   utilising the latest available version of this document." Revision and issue date must be
   visible on every view.
3. **Separate guidance from requirement.** The text mixes advisory prose with *shall*
   statements. The `Callout` component and the status colour set exist for that distinction.

## Surfaces represented

| Surface | Where | What it is |
| --- | --- | --- |
| Standards document (web edition) | `ui_kits/standards_document/` | The reading surface — contents rail, chapter view, clause anchors, spec tables, search |
| Designer portal | `ui_kits/designer_portal/` | The wrapper around it — document library, district lookup, revision log, deviation submission |

The current document focuses primarily on **roads and stormwater**; the stated intention is to
expand it to include all services. Chapters 11–14 and 16 already cover sewer, water, ducts,
street lighting and trenchless technologies, so treat discipline as a filter dimension, not a
hardcoded pair.

## Sources supplied

| Source | Path | Notes |
| --- | --- | --- |
| Brand colour & font note | `uploads/Colour. Font.docx` | Font: **Century Gothic**. Colours: `#1F4E5F` dark teal, `#FBEEDC` warm cream, `#FDF6ED` lighter cream. Confirmed by the user as the scheme to keep. |
| Full document | `uploads/SGRSW_Ver5.0 (draft 5.0.2).docx` | Version 5.0 draft, 20 chapters, 443 headings, 105 tables, 113 numbered figures. Century Gothic throughout; `1F4E5F` used as both heading colour and table-header fill, `3B3838` body, `F7F9FA` light surface. Source of all copy, table values and figures in this system. |
| Example content | `uploads/Example Content.docx` | Chapter 1 extract — identical to the same chapter in Version 5.0. |
| Standard detail | `uploads/RD1.1 - BK Kerbs & C1 Channels_RevC-A4.pdf` → `assets/drawings/` | Part B drawing, Rev C, A4. |
| Districts map | `uploads/RIM Districts Map_A4_rev0.pdf` → `assets/maps/` | Part C map, Rev 0, A4. Carries the district areas and contact persons. |
| Logo | `uploads/SGRSW_Logo1.png` → `assets/sgrsw-logo.png` | 1536×1024 PNG, full-colour illustrated arch mark. No vector supplied. |

Nine numbered figures were extracted from the Word document into `assets/figures/`
(typical cross sections for road Classes 2–6, roundabout elements, sight triangle, carriageway
crossing spacing).

No codebase, Figma file or slide template was supplied. There is therefore **no source-defined
component inventory**; the component set here is a standard primitive set sized to a technical
publication (see *Components* below), plus document-specific additions listed under
*Intentional additions*.

---

## CONTENT FUNDAMENTALS

The voice is **technical, concise and impersonal** — municipal engineering register, not product
marketing. It is written to be cited.

**Person and address.** The document does not say *you*. It refers to actors by role in the
third person: *"the designer"*, *"designers"*, *"the Approval Authority"*, *"the City"*. Never
*we*, never *our*. UI chrome may use the imperative for actions ("Download chapter",
"Search the standards") but never addresses the reader as *you* in substantive copy.

**Modal verbs carry legal weight.** Use them exactly as the source does:

- **shall** — mandatory. *"The engineering design drawings shall be approved by the Approval Authority."*
- **may** — permitted or possible. *"The Approval Authority may require a higher standard."*
- **must** — obligation on the reader. *"…such deviations must be approved by the Approval Authority."*
- **will / will aim to** — statements of intent by the City. *"This document will aim to: …"*

Never soften *shall* to *should*, and never introduce *shall* into copy that is advisory.

**Casing.** Chapter and clause titles are **Title Case**, exactly as the document sets them:
*"Purpose of this Document"*, *"Design Approval"*, *"Referenced Documents & Hyperlinks"*,
*"Site Specific Conditions and Future Developments"*, *"Submission of As-Built information"*.
Do not convert them to sentence case. Chapter names use the form *"Chapter 18: Approval of
Engineering Drawings"* (colon, not a dash). UI chrome and button labels are sentence case
("Download chapter", "Browse Part A"). Role and body names are capitalised because they are
defined terms: *Approval Authority*, *District Engineer*, *Director: Roads Infrastructure
Management*, *the City*, *the Developer*. Uppercase with wide tracking is used only for
eyebrows, table headers and field labels — never for sentences.

**The ampersand is part of the title.** *Standards and Guidelines for Roads & Stormwater* —
"and" between Standards and Guidelines, "&" between Roads and Stormwater.

**Numbering is content, not decoration.** Every clause carries its reference (`3.2.2.1`).
Tables and figures are numbered **chapter-dash-number**: `Table 3-1`, `Figure 3-5` — captioned
`Table 3-1: Typical Road Reserve Widths and Design Speeds for Urban Road Classes`. Table
captions sit **above** the table; figure captions sit **below** the figure. Footnote markers
`[1]`, `[2]` appear inside cells and are spelled out beneath the table. Cross-references name the
target explicitly: *"refer to Chapter 18"*, *"refer to Part C"*, *"as detailed in Section 2.4.1"*.
Never *"see above"* or *"click here"*.

**Every chapter opens with its own contents.** A chapter-cover page carries `CHAPTER 18`, the
chapter name, then *Chapter Content*, *List of Figures* and *List of Tables*. Every chapter ends
with the back-links *"To: Chapter Overview"* and *"To: Part A Overview"*. Reproduce both.

**Lists.** The source uses semicolon-terminated clauses under a colon-introduced stem, with a
full stop on the last item:

> This document will aim to:
> Give guidance to where relevant specifications and guidelines can be found;
> Highlight and, in some instances, repeat important aspects of such relevant documentation;
> …
> Ensure that all materials used in any public roadway or road reserve comply with the highest
> standard as approved by South African National Standards (SANS).

Keep that construction. Don't convert it to sentence-per-bullet.

**Abbreviations** are expanded on first use, then used bare: SANS, CCT, RIM. In UI, wrap them in
`Tooltip` rather than expanding inline a second time.

**Length.** Clauses are one to four short paragraphs. A clause that needs more is split and
numbered. UI copy is shorter still: hints are one sentence, empty states two.

**Emoji: never.** Not in the document, not in UI, not in status indicators. Status is carried by
`Badge` and `Callout`, which use Lucide line icons and colour.

**Tone in UI copy — examples**

| Good | Not |
| --- | --- |
| "Version 5.0 | January 2027" | "You're all up to date! 🎉" |
| "No clauses match these filters." | "Oops — nothing here!" |
| "Confirm you are using the latest version of this document." | "Make sure you've got the latest and greatest" |
| "Submit for approval" | "Let's get this approved" |
| "No construction work may commence before an approval of the detailed design (in writing) is obtained from the Approval Authority." | "Get approval before you build" |

---

## VISUAL FOUNDATIONS

The brief is *simplistic and clean*. The system delivers that by being a **document system
first**: lines and type do the structural work, and almost nothing floats.

### Colour

Three-value core, taken from the supplied note and confirmed in the Word document, where
`1F4E5F` appears as both heading colour and table-header fill: **teal `#1F4E5F`** for authority
(header, nav, primary buttons, headings, table header bands, footer), **warm cream `#FBEEDC`**
for card fills and alternating stripes, **lighter cream `#FDF6ED`** as the page ground so cream
cards read as objects on top of it. White (`--surface-raised`) is the third surface, used for controls, tables
and figure frames — it reads as "content" against the two creams.

Two accents are sampled from the logo and used sparingly: **navy `#032B4A`** (the mark's outline
and sea) and **gold `#AA9667`** (the road edge-line). Gold appears only as the 3px rule above a
chapter opening or a dialog — one gold element per view, maximum. Never as a fill, never as text.

Ink is warm-neutral, not black: `#3B3838` body (carried over from the source document's own body
colour) and `#12262E` for the deepest heading ink. Links are `#005C9E`, a darkened form of the
source document's `#0070C0`, so they clear 4.5:1 on cream.

Status colours are muted and earthy, never saturated UI-kit primaries: `#2E6B80` note,
`#7E6C42` caution, `#B4541E` warning, `#9E2B25` danger, `#2E6B46` success.

**Maximum two background colours per view** — one cream ground plus teal for the header/footer
band. No third.

### Type

**Century Gothic** is the specified face, and it is the face the Word document is actually set in
(Times New Roman appears only in equation and legacy runs). It is not licensed for web
distribution, so **Jost** (Google Fonts) stands in on the web: the same geometric,
single-storey-*a* Futura lineage, with a full weight range. The user has confirmed Jost as the
web face; Century Gothic remains the print/Word face and stays second in `--font-core`.
**IBM Plex Mono** is a considered addition, not part of the supplied brand: geometric sans is
poor at aligning numbers in a spec table, so clause references, dimensions, SANS codes and all
tabular figures are set in mono.

Geometric sans runs wide and its lowercase is low-contrast, so: headings get slightly positive
tracking (`0.04em`), uppercase eyebrows get `0.14em`, the logo lockup `0.28em`, and body copy is
set at 16/1.65 capped at **68ch** (`--measure-body`). Never justify. Never set body copy in
weight 300 below 18px.

Scale: 44 chapter title · 36 h1 · 25 h2 · 18 h3 · 14 h4 · 16 body · 14 body-sm · 13 caption ·
12 eyebrow. Headings are weight 500, not 700 — authority comes from the teal and the rules, not
from weight.

### Spacing & layout

4px base scale. Document rhythm is explicit and separate: 14px between paragraphs
(`--stack-paragraph`), 28px between clauses (`--stack-clause`), 48px between sections
(`--stack-section`).

Layout is a fixed three-column reading frame: 288px contents rail, fluid centre column capped at
the 68ch measure, 236px on-this-page rail. The header band is 60px and **sticky**; the contents
rail is sticky below it and scrolls independently. Nothing else is fixed or floating — no
floating action buttons, no sticky footers, no scroll-triggered chrome.

### Backgrounds

Flat colour only. No gradients anywhere — not in buttons, not in headers, not as a hero wash.
No repeating patterns, no textures, no grain, no noise overlays.

The only decorative image in the system is the logo. All other imagery is engineering content and
follows the document's own convention: **black line drawings on white**, with grey fill for
ground and road surface, dimension lines and leader text set small in the drawing's own type —
see `assets/figures/`. Cross sections are wide and short (roughly 3:1), sit inside a `Figure`
frame on white, and are never recoloured, tinted, cropped or placed behind text. Part B detail
drawings and the Part C map are A4 PDFs, embedded at full page rather than rasterised.
Photographs, where the document uses them, are documentary site records: cool, neutral,
unfiltered, no duotone, no text over them.

### Borders, radii, shadow

Lines are the primary separation device. Three weights: **1px** hairline (cream-200 inside cream
regions, ink-200 on controls and tables), **2px** for the active marker on nav items and tab
underlines, **3px** for the gold chapter rule.

Radii are deliberately tight — 2px badges, 3px controls, 5px cards, 8px panels, pill only for
`Tag`. Nothing is round; nothing is a capsule except a user-removable filter chip.

Shadow is rationed to four values and the default is **none**. `--shadow-card` (a 3px 7%-alpha
lift) is opt-in via `elevated`. `--shadow-raised` is for popovers, `--shadow-overlay` for
dialogs. A card's normal state is flat with a hairline border — if a surface isn't floating it
gets no shadow. There are no inner shadows and no protection gradients; where content needs to
sit on a dark ground it gets a solid teal band, not a gradient scrim.

### Interaction states

- **Hover, filled:** one step darker (`teal-700` → `teal-800`). Never lighter, never an opacity change.
- **Hover, outlined/ghost:** background fills to `--teal-50`; border and text unchanged.
- **Hover, card:** border darkens to teal. No lift, no scale, no shadow change.
- **Hover, row (nav / reference list):** background tints `--surface-accent-soft`.
- **Hover, link:** colour lightens to `#0070C0` and the underline thickens 1px → 2px.
- **Press:** one further step darker (`teal-900`). **No shrink, no scale transform** — this is a reference document, not a toy.
- **Focus:** 2px cream offset ring plus a 2px teal ring (`--ring-focus`). Always visible, never removed.
- **Selected:** 2px teal left border plus `--surface-accent-soft` tint (nav), or full teal fill (`Tag`).
- **Disabled:** `--surface-disabled` fill, `--text-disabled` ink, neutral border, `not-allowed` cursor. Never opacity-faded.

### Animation

Minimal and functional. 120ms for control colour changes, 180ms base, 280ms for anything larger,
all on `cubic-bezier(.2,0,.25,1)`. Animate **colour, opacity and transform only**. No bounce, no
spring, no stagger, no entrance animation on document content — clauses appear instantly.
Accordion and dialog open without a slide. Honour `prefers-reduced-motion` by disabling all of it.

### Transparency & blur

Almost never. Two sanctioned uses: the dialog scrim (`rgba(14,38,46,.45)` with a 2px backdrop
blur) and the inverse icon-button hover (`rgba(253,246,237,.14)` on the teal header band).
No frosted panels, no translucent cards, no glass.

### Cards

Flat cream or white surface, 1px hairline border, 5px radius, 20px padding, no shadow. Optional
3px gold top rule marks the one featured card in a view. **No coloured left border** — that
pattern belongs exclusively to `Callout`, where it encodes note / caution / warning / requirement.

---

## ICONOGRAPHY

**No icon set was supplied with the brand.** Icons are **Lucide** (`lucide-static` via CDN),
chosen as the closest match to the required register: single-weight 1.5px line geometry, square
terminals, no fill, no duotone. **This is a flagged substitution** — see *Caveats*.

- There is **no icon font** and no sprite sheet. The `Icon` component loads the individual Lucide
  SVG from CDN and applies it as a CSS mask tinted with `currentColor`, so glyphs inherit their
  parent's colour with no per-icon variants to maintain.
- Sizes: **16px** inline with text, **18px** default and in buttons, **20px** in large buttons,
  **24px** in navigation and empty states. Never below 14px.
- Icons are **decorative by default** (`aria-hidden`) and never the sole carrier of meaning —
  every status icon sits beside its word. `IconButton` requires a `label`.
- **Emoji are never used.** No unicode dingbats as icons either; the only non-alphanumeric
  characters in running text are the en dash, the middot separator in metadata lines
  (`Revision 4.2 · March 2026`) and the section sign where a clause is cited.
- Working vocabulary: `file-text` (chapter/PDF), `book-open` (standard), `scale` (Act),
  `gavel` (requirement), `ruler` (drawing/detail), `map` (district), `layers` (discipline),
  `download`, `printer`, `search`, `filter`, `external-link`, `chevron-right` / `chevron-down`,
  `info`, `triangle-alert`, `octagon-alert`, `circle-check`, `x`, `plus` / `minus`.
- **Engineering figures:** `assets/figures/` — nine numbered figures lifted from the Word
  document (Classes 2, 4, 5 and 6 typical cross sections, roundabout elements, sight triangle,
  carriageway crossing spacing). `assets/drawings/RD1.1-BK-kerbs-C1-channels-revC.pdf` and
  `assets/maps/RIM-districts-map-rev0.pdf` are the supplied Part B and Part C sheets. Use these
  rather than drawing anything.
- **Logo:** `assets/sgrsw-logo.png` — the only brand illustration supplied, and the only one in
  this system. No vector version exists; nothing else has been drawn or reconstructed.
  Minimum height 40px; clear space equal to the wordmark's cap height. On teal, place it on a
  cream plate rather than knocking it out. Where the raster is too small to read, fall back to
  the wordmark set in Jost Medium at `0.28em` tracking over a `City of Cape Town` eyebrow
  (see `guidelines/brand-logo-inverse.card.html`).

---

## Index

### Root

| File | What |
| --- | --- |
| `readme.md` | This guide |
| `SKILL.md` | Agent Skills front-matter so this folder works as a Claude Code skill |
| `styles.css` | Global CSS entry point — `@import` list only |
| `thumbnail.html` | Homepage tile |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `border` · `elevation` · `motion` · `base` |
| `guidelines/` | 22 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `assets/` | `sgrsw-logo.png`, `figures/` (9 numbered figures), `drawings/RD1.1…pdf`, `maps/RIM-districts-map-rev0.pdf` |
| `components/` | Reusable primitives, grouped below |
| `ui_kits/` | Product recreations |

### Components

**core** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`, `Divider`
**forms** — `FormField`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**navigation** — `Breadcrumb`, `SideNav`, `Tabs`, `Pagination`, `Accordion`
**document** — `ChapterHeader`, `DocumentMeta`, `Clause`, `DataTable`, `Figure`, `ReferenceList`
**feedback** — `Callout`, `Dialog`, `Toast`, `Tooltip`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

#### Intentional additions

No source defined a component inventory, so the set above is a standard primitive set. Six
components are specific to this brand rather than generic, and exist because the content demands
them:

- **`Clause`** — numbered, anchorable section. The document's atomic unit.
- **`ChapterHeader`** — chapter opening with part/number eyebrow and gold rule.
- **`DocumentMeta`** — revision / issue date / approval authority block, required on every chapter view (clause 1.1).
- **`DataTable`** — numbered specification table with mono numeric columns.
- **`Figure`** — numbered frame for typical details, sections and the districts map.
- **`ReferenceList`** — the referenced-literature and legal-schedule list (clauses 1.7, 1.8).
- **`Icon`** — thin wrapper over the substituted Lucide glyph set.

### UI kits

- `ui_kits/standards_document/` — the document's web edition: `Shell`, `ContentsRail`, `ChapterView`, `SearchOverlay`, `OnThisPage`. Chapters 1, 3 and 18 carry real source text, Table 3-1 and Figures 3-1/3-3/3-5/3-6.
- `ui_kits/designer_portal/` — `PortalShell`, `PortalHome`, `DocumentLibrary` (all 20 chapters), `DrawingsAndMaps` (the supplied PDFs, embedded), `RevisionLog` (the real record of revisions).

---

## Caveats

1. **Colour scheme confirmed by the user** and kept as supplied. Navy and gold accents were
   sampled from the logo PNG and are additions, used only as accents.
2. **Century Gothic → Jost on the web**, confirmed by the user. `--font-core` lists
   `"Jost", "Century Gothic"` so licensed desktop installs still fall through to the real face.
3. **IBM Plex Mono is an addition**, not a supplied brand face.
4. **Lucide icons are substituted** for an unsupplied icon set, and are loaded from CDN — they
   will not render offline.
5. **Logo is raster only.** No SVG or vector mark was supplied; nothing has been redrawn.
6. **Three of twenty chapters are recreated in full** (1, 3, 18). The other seventeen appear in
   navigation with their real titles and page numbers; opening one says so rather than showing
   invented content.
7. **District names are not in this system.** They are on the Part C "RIM Districts" Map, whose
   PDF text could not be extracted — the map is embedded and linked instead of being transcribed.
8. **Chapter 3 is partial:** clauses 3.1–3.2.2 with Table 3-1 and four cross-section figures.
   Tables 3-2 to 3-12 and Figures 3-2, 3-4, 3-7 onwards are named in the chapter's lists of
   tables and figures but not rendered.
