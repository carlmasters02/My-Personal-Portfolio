# Carl Masters Portfolio — Complete Reference

## Project Overview

A fully static personal portfolio for Carl Masters, a second-year Cybersecurity student at Temple University Japan (Tokyo) and U.S. Marine Corps veteran. The site is built with vanilla HTML, CSS, and JavaScript — no framework. The only backend is a Supabase project used for article comments.

**Live domain:** carlmasters.com
**Repo:** github.com/carlmasters02/My-Personal-Portfolio (branch: `main`)

---

## File Structure

```
Carl_Masters_Portfolio/
├── index.html                  # Main single-page portfolio
├── styles.css                  # All global styles (matrix green theme)
├── script.js                   # All JS for index.html (also loaded by article pages)
├── article-cybersecurity.html  # Blog article page
├── article-local-ai.html       # Blog article page
├── article-privacy.html        # Blog article page
├── article-resume.html         # Blog article page
├── carl_masters_resume.pdf     # Embedded and downloadable resume
├── resume-embed.html           # Standalone resume embed page (plain <embed>)
├── favicon.svg                 # Site favicon
├── certs/                      # Certificate files rendered in the cert grid
│   ├── Combat_Marksmanship_Trainer_Certificate.jpeg
│   ├── HITCON_2026_Certificate_of_Attendance.pdf
│   └── HITCON_2026_Certificate_of_Attendance.webp
├── icons/                      # 24px skill logos (webp) used in modals
│   └── anthropic-api, c, claude-code, cloudflare-workers, codex, css, cursor, elevenlabs-api, gemini-api, git,
│       github, html, java, javascript, linux, llm-apis, openai-api, opencode, python, stripe, supabase,
│       terminal, typescript, vercel, virt-manager, vscode (.webp)
└── PORTFOLIO_REFERENCE.md      # This file
```

---

## Design System

### Color Palette (CSS custom properties in `styles.css` `:root`)
| Variable | Value | Use |
|---|---|---|
| `--green` | `#00ff41` | Primary accent, borders, text, glows |
| `--green-hi` | `#6dff96` | Bright green highlight |
| `--green-dim` | `#0e9a3e` | Muted/hover green |
| `--green-soft` / `--green-line` | `rgba(0,255,65,0.07)` / `0.16` | Fills and hairline borders |
| `--line-strong` | `rgba(0,255,65,0.28)` | Emphasized borders |
| `--bg` / `--bg-elev` | `#06090b` / `#0a0e11` | Page background layers |
| `--surface` / `--surface-2` | `#0c1114` / `#10161a` | Card surfaces |
| `--panel` | `#0d1310` | Panel backgrounds |
| `--line` | `rgba(148,190,168,0.10)` | Default borders |
| `--text` | `#d8e4dc` | Body text |
| `--heading` | `#f2fff6` | Headings |
| `--muted` / `--faint` | `#8fa398` / `#5c6f65` | Secondary/tertiary text |
| `--danger` | `#ff6b6b` | Error states |

### Type / shape tokens
- `--font-sans`: `Inter` · `--font-display`: `Space Grotesk` · `--font-mono`: `JetBrains Mono` (Google Fonts; note: Share Tech Mono / Fira Mono are **no longer loaded**)
- Radii: `--radius` 16px, `--radius-md` 12px, `--radius-sm` 8px
- `--shadow`, `--glow` (green), easings `--ease` / `--ease-out`, `--dur` 0.5s, `--max-w` 1120px
- A legacy variable block at the end of `:root` is kept for the article pages.

### Theme
Matrix hacker aesthetic — near-black background, `#00ff41` green accents, green glows, animated matrix rain canvas behind everything. Motion respects `prefers-reduced-motion`: the `reduceMotion` flag in `script.js` disables the rain, scramble, typing, custom cursor and reveal animations and shows content statically.

---

## index.html — Section by Section

### Background / chrome layer
- **`#matrix-canvas`** — `<canvas>` fixed behind everything, `aria-hidden`. Animated matrix rain (katakana + `0`/`1`) drawn via `script.js` at ~20fps; paused when the tab is hidden.
- **`#scrollProgress`** — thin top progress bar, `scaleX` driven by scroll.
- **`#custom-cursor`** — green dot replacing the system cursor on desktop only: `hover:hover and pointer:fine`, width > 1024px. Click spawns a `.cursor-ping` radar ring. Body gets `.cursor-none`.

### Navigation (`#navbar`)
- Fixed top, transparent → `.scrolled` (blur + background) after 40px scroll. `.menu-open` while the mobile menu is active.
- Logo `CM` with blinking `.logo-cursor`, links back to `#home`.
- Nav links: **About, Skills, Projects, Background, Resume, Blog, Contact** (Contact has `.nav-cta` pill styling).
- A **`.nav-indicator`** sliding underline is created by JS and tracks hover / active section (desktop > 980px only, skips the CTA).
- Hamburger (`#hamburger`) opens the full-screen overlay menu (`nav-links.mobile-open`). Closes on link click or outside click.

### Hero (`#home`)
- `.hero-greeting` "Hello world. I'm"
- `.hero-name` "CARL MASTERS" with a **text-scramble decode animation** (`data-scramble`); each letter rendered in a fixed-width cell so scrambling never reflows.
- `.hero-typing` typing animation cycling six phrases: CYBERSECURITY STUDENT, ASPIRING CYBERSECURITY ENGINEER, INTERNATIONAL STUDENT, DATA PRIVACY ENTHUSIAST, WEB DEVELOPER, PROBLEM SOLVER.
- `.hero-sub`: "Cybersecurity student based in Tokyo · U.S. Marine Corps veteran · 2× 1st-place hackathon winner"
- Buttons: **View My Work** (filled), **Contact Me** (outline), **Open Terminal** (outline) — the last opens the terminal easter egg, also triggered by typing `hello` anywhere.

### About (`#about`) — `01 / about`, "Who Am I"
Two-column `.about-grid`. Left: bio paragraphs + three stat counters. Right: `.code-window` fake Python class card (`about_me.py`, macOS traffic-light dots).

Stats (each opens the drill-down modal). The final number is written as the `.stat-number` text in the HTML so it reads correctly without JS; `script.js` stores it as `data-target`, resets to 0, and counts up on scroll:
| Stat | Number in HTML | Source array in script.js |
|---|---|---|
| Real Projects | `9` | `projects` |
| Languages | `3` | `languages` |
| Hackathons | `7` | `hackathons` |

### Skills (`#skills`) — `02 / skills`, "What I Know"
Four `.skill-category` buttons in a 2×2 grid (one column under 900px), each opening the category → skill modal:

| Category | Contents |
|---|---|
| Languages | Python, C, Java |
| Platforms & APIs | Supabase, Vercel, Cloudflare Workers, Git, GitHub, OpenAI API, Anthropic API, Gemini API, ElevenLabs API |
| Systems | Linux (Fedora, Kali, Whonix, Tails), Command line, virt-manager |
| Security | COMSEC / KMI, Operational Security (OPSEC) |

Descriptions live in the `skillData` object in `script.js` (`Languages` is derived from the `languages` array so the two never drift). Logos from `skillLogos` (icons/*.webp) only render when every skill in the category has one.

### Projects (`#projects`) — `03 / projects`, "What I've Built"
Vertical `.timeline` of **products only**, nine items, newest first:

| Date | Project | Anchor | Notes |
|---|---|---|---|
| October 2026 | **PickYourLinux** (`is-live`) | `#pickyourlinux` | pickyourlinux.com · GitHub: PickYourLinux |
| October 2026 | **AI Wargame** | `#ai-wargame` | Solo, Tokyo Agent Hackathon · github.com/carlmasters02/ai-wargame |
| September 2026 | **AEGIS Threat Dashboard** (`is-live`) | `#aegis` | aegisthreatdashboard.com · GitHub: AEGIS-threat-dashboard |
| August 2026 | **G2 Smart Glasses Translator** | `#g2-translator` | GitHub: g2-vi-en-realtime · g2-relay |
| June 2026 – Present | **FocusHear** (`is-live`, win-badge "1st Place") | `#focushear` | focus-hear-app.vercel.app · 3 hackathon-boxes (Core Features / The Rebuild / Team) + tag pills |
| June 2026 – Present | **NóiFlow AI** (`is-live`) | `#noiflow` | noiflow-ai.vercel.app |
| March 2026 | **TabeTalk** (`.status-badge` "Working prototype · public launch planned") | `#tabetalk` | Builders Weekend 2026 · 2 hackathon-boxes (Tech & Sponsors / Team) + tag pills |
| Jan 2026 – Present | **Freelance English Teacher Site** (`is-live`) | — | kadysenglish.com |
| Nov 2025 – Present | **This Portfolio** (`is-live`) | — | carlmasters.com · GitHub: My-Personal-Portfolio |

`is-live` marks ongoing/live projects; `.win-badge` marks 1st-place wins; `.hackathon-boxes` are the grid of info articles under a card; tag pills (`.timeline-tags span`) open a definition modal from `skillDefinitions`.

### Background (`#education`) — `04 / background`, "Where I've Been"
Two subsections on one page.

**Education & Career** timeline (3 items): B.S. Cybersecurity at Temple University Japan (2025–Present, `is-live`) · U.S. Marine Corps 0842 Field Artillery Radar Operator + KMI Custodian (2021–2025) · High School Diploma, Lake Minneola HS (2017–2021). Military entries link out to official references (AN/TPS-80, AN/TPQ-48, AN/TPQ-46, KMI, CMC, CMT).

**Events & Competitions** timeline (12 items, newest first; same-month order is confirmed, keep it):

| Date | Event | Notes |
|---|---|---|
| Oct 2026 | Tokyo Agent Hackathon | +81 Builders / Neo4j / ai& sponsors; solo; built **AI Wargame** (red-vs-blue LLM wargame on Neo4j); 2 hackathon-boxes (+81 Builders links to plus81builders.com/en; Neo4j and ai& link to neo4j.com / aiand.com); external `event-link` + in-text "AI Wargame" link to github.com/carlmasters02/ai-wargame |
| Aug 2026 | HITCON 2026 | Taipei; 2 hackathon-boxes (Day One / Day Two) |
| Jul 2026 | Cursor Tokyo AI Meetup | Chiyoda City |
| Jul 2026 | Engineering Real World AI with Google and Google DeepMind | Google Japan, Shibuya |
| Jul 2026 | Agent Forge AI Hackathon | Solo; 2 hackathon-boxes (Tech Stack / Hosts & Partners) |
| Jul 2026 | ai& × Moonshot Tokyo Hackathon Night | 2 hackathon-boxes (Team / Sponsors & Hosts) |
| Jul 2026 | Vibe Coders Tokyo — Local Models with Gemma 4 | Google Shibuya |
| Jun 2026 | OpenAI x Tokyo AI — Build with OpenAI | `event-link` → `#focushear` |
| Jun 2026 | SDGs to Startups Hackathon 2026 (1st Place) | win-badge; `event-link` → `#focushear` |
| Mar 2026 | Builders Weekend 2026 | `event-link` → `#tabetalk` |
| Mar 2026 | UI/UX Hackathon (1st Place) | TUJ; win-badge |

`.event-link` = small green "See X" anchor linking either to an internal project anchor (`#focushear`, `#tabetalk`) or an external repo (opens in a new tab with `rel="noopener noreferrer"`).

### Credentials (`#resume`) — `05 / credentials`
Two parts on one page.

**Resume viewer:** pdf.js (cdnjs v3.11.174, pinned with `integrity` hash) renders `carl_masters_resume.pdf` onto `#resumeCanvas` inside a `.resume-window` styled like an editor chrome bar. Prev/Next buttons (`#resumePrevBtn` / `#resumeNextBtn`), page indicator (`#resumePageIndicator`), download button (`#downloadResumeBtn`). Renders at device pixel ratio (capped at 2×); a 20s watchdog and error paths replace the canvas with a "use the download button" message instead of spinning forever. **The old `resume_preview.jpg` fallback no longer exists.**

**Certifications:** category tabs (`All, Google, CS50, CompTIA, Other`) + a hamburger dropdown variant on small screens. Both filter rows currently carry the `hidden` attribute in `index.html`; remove it to show them again. The grid (`#certGrid`) is rendered from the `certs` array in `script.js`. Tabs with no certs behind them are removed automatically; the tab bar hides entirely if fewer than two categories have certs. With 2 active certs (both `Other`), the grid shows real cards; an empty category would show a single "IN PROGRESS / 🔒" card. Card thumbnails and the cert modal handle both images and PDFs (PDFs reused via the pdf.js instance already on the page, with a `pdfCache`; PDF thumbs lazy-render via IntersectionObserver). The HITCON PDF uses `preview:` — its `.webp` render — because pdf.js cannot draw the embedded CFF CID font (would drop the recipient name); `file` still links/downloads the original PDF.

### Blog (`#blog`) — `06 / blog`, "My Articles"
4 cards (`.blog-card`) in a 2-column grid, each with a tag pill, a read-time label, and an "Updated" `<time>` (Oct 31, 2026 for the privacy and cybersecurity articles, Oct 24, 2026 for the rest) (`.blog-card-meta`; article pages carry the same line in `.article-meta`). Order is deliberate (top-left, top-right, bottom-left, bottom-right):

| Article | Tag | File |
|---|---|---|
| The Privacy Stack: Open Source and Encrypted Alternatives for Every App You Use | Privacy | `article-privacy.html` |
| Everyday Cybersecurity Habits That Actually Matter | Cybersecurity | `article-cybersecurity.html` |
| Local AI: How to Run Your Own Models Privately and Securely | AI | `article-local-ai.html` |
| Resumes and CVs: How to Write One That Works Anywhere in the World | Career Advice | `article-resume.html` |

### Contact (`#contact`) — `07 / contact`, "Let's Talk"
- Lead paragraph states internship/entry-level goals (SOC analyst, pentesting, security research, cybersecurity engineering).
- Formspree form `https://formspree.io/f/mreonwao`: Name / Email / Subject / Message (+ hidden `_subject`). Validated in JS; errors from Formspree's JSON response are surfaced verbatim in `#formStatus`.
- Icon links: Email (`carl.masters.professional@protonmail.com`), GitHub (`carlmasters02`), LinkedIn (`carl-masters-724951297`).
- Tokyo clock (`#tokyo-time`): `TOKYO HH:MM:SS JST`, updated every second.

### Footer + back-to-top
"Designed & Built by Carl Masters" / "© 2026 — All rights reserved". `#backToTopBtn` appears after 400px scroll.

### Unified modal (`#modal`)
A **single overlay** (`#modal` → `#modalCard` / `#modalTitle` / `#modalBody` / `#modalClose`) serves every modal on the site instead of the old per-feature modals. The `Modal` module in `script.js` provides `open({ title, size, render })` / `close()` with focus trap, Escape, overlay-click close, and focus restoration. Sizes used: default, `modal-sm` (tag definitions), `modal-lg` (certs). Renderers build DOM with `listButton` / `detailView` / `para` helpers. Article pages load `script.js` but contain no modal markup — the module degrades to a no-op.

---

## script.js — Feature Reference

Data at top of file: `projects` (9), `languages` (3, with `logo` paths), `hackathons` (7), `skillData` (4 categories), `skillDefinitions` (timeline tag pills), `skillLogos`, `certs` (2).

| Feature | Trigger / Location | Notes |
|---|---|---|
| Unified modal | All modal features | Focus trap, Escape, restore focus; no-op on article pages |
| About stats → drill-down modal | `.stat[data-stat]` click | `statViews` maps projects/languages/hackathons → list → detail |
| Skill category modal | `.skill-category` click | Category → skill description two-level view |
| Timeline tag pill modal | `.timeline-tags span` click | Definition from `skillDefinitions`; pills are keyboard-accessible (tabindex/role/Enter/Space) |
| Logo preload | `requestIdleCallback` | Warms all icons/*.webp so modals never pop in empty |
| Certifications grid | Page load | `renderCertGrid()`; image + PDF thumbnails; dead tabs removed; tab bar hidden when < 2 categories |
| Cert modal | Cert card click | `preview`/`file` handling; multi-page PDF viewer with prev/next; "Open full certificate" + optional "Verify" (`cert.url`) buttons |
| Navbar scroll state | `scroll` | `.scrolled` after 40px (suppressed while mobile menu open) |
| Active nav link + sliding indicator | `scroll` / hover / resize / fonts ready | `.active` on current section; `.nav-indicator` underlines it (desktop only) |
| Mobile hamburger | `#hamburger` click | Full-screen overlay menu; outside-click and link-click close |
| Scroll progress bar | `scroll` / `resize` | `scaleX` on `#scrollProgress` |
| Back to top | Scroll > 400px | Smooth scroll (instant under reduced motion) |
| Scroll reveal | IntersectionObserver on `.reveal` | Adds `.in`, `--rd` stagger per timeline item; `.drawn` on the timeline draws the spine; `--dot-delay` pops each dot as the spine passes |
| Stat counters | IntersectionObserver (0.5) | rAF ease-out cubic count to `data-target` over 1400ms |
| Hero name scramble | Page load (fonts ready) | Fixed-width glyph cells; runs once |
| Hero typing | Page load (900ms delay) | Six phrases, 70/40ms type/delete cadence |
| Matrix rain | Constant | rAF throttled to ~20fps; stops on `visibilitychange` |
| Custom cursor | Desktop fine pointer, >1024px | `translate3d` dot + `.cursor-ping` on click |
| Terminal easter egg | Type `hello` OR `#openTerminalBtn` | Boots a fake OS; commands: `help`, `about`, `skills`, `projects`, `hackathons`, `location`, `clear`, `exit`, plus hidden `whoami` alias of `about` |
| Tokyo clock | `setInterval(1000)` | `TOKYO HH:MM:SS JST` chip in contact |
| Resume PDF viewer | Page load | pdf.js, 20s watchdog, DPR-capped render, re-render on resize |
| Contact form | Submit | Validates → Formspree POST → success/error in `#formStatus`; surfaces server error messages |

**Reduced motion:** `prefers-reduced-motion: reduce` short-circuits rain, scramble, typing, cursor, counters, reveals and smooth scroll.

---

## Article Pages

Four self-contained articles sharing one structure: CSP meta (Supabase allow-listed in `connect-src`), `styles.css`, Google Fonts, small inline comment-section styles, pinned Supabase UMD script, then nav + `.article-page` main (back link, `.article-tag` pill, H1, `.article-body`, comments) + `script.js`.

| File | Title | Tag | `POST_SLUG` |
|---|---|---|---|
| `article-cybersecurity.html` | Everyday Cybersecurity Habits That Actually Matter | Cybersecurity | `article-cybersecurity` |
| `article-local-ai.html` | Local AI: How to Run Your Own Models Privately and Securely | AI | `article-local-ai` |
| `article-privacy.html` | The Privacy Stack: Open Source and Encrypted Alternatives | Privacy | `article-privacy` |
| `article-resume.html` | Resumes and CVs: How to Write One That Works Anywhere in the World | Career Advice | `article-resume` |

### Comments system (Supabase)

**Active Supabase project:**
- **Name:** My Personal Portfolio · **Project ID:** `nrwqzxxqivsknkxusdjq`
- **URL:** `https://nrwqzxxqivsknkxusdjq.supabase.co` · **Region:** `ap-northeast-1` (Tokyo) · **Status:** ACTIVE_HEALTHY
- The `anon` key is inlined in each article page (`SUPABASE_ANON_KEY`).

**Table:** `public.comments` — `id uuid`, `post_slug text`, `name text`, `message text`, `created_at timestamptz`.
**RLS:** `comments_select_public` (anon SELECT), `comments_insert_public` (anon INSERT).
**Form:** name + message, honeypot (`#comment-hp`), oldest-first display.

**Pinned Supabase CDN (all 4 articles):**
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.108.2/dist/umd/supabase.min.js"
  integrity="sha384-JWEyvHh+lRf0sN/WWY+QTQwX+CyWqmNg4tkc8GQzAMEtR2wGNrCJlvnu1lHD1kDm"
  crossorigin="anonymous"></script>
```

---

## External Dependencies

| Dependency | Used In | Version / Source |
|---|---|---|
| Google Fonts (Inter, Space Grotesk, JetBrains Mono) | All pages | fonts.googleapis.com |
| Supabase JS | Article pages | `@2.108.2` via jsDelivr CDN |
| pdf.js | `index.html` (resume + cert PDFs) | `3.11.174` via cdnjs (SRI-pinned) |
| Formspree | `index.html` (contact form) | `f/mreonwao` |

---

## Other Supabase Projects (Not Used for Portfolio)

| Name | ID | Status | Notes |
|---|---|---|---|
| carlmasters02's Project | `almaryxwnlesmhqspgde` | INACTIVE | Old/paused project; articles previously pointed here — do not use |
| Builders_Weekend_2026 | `wnzrdxyqdokimetospqc` | INACTIVE | TabeTalk hackathon project |
| FocusHear | `fnhbvwgiribcwkaokmfg` | ACTIVE_HEALTHY | Separate app project |

---

## Content Security Policy

**`index.html`:**
```
default-src 'self';
script-src 'self' https://cdnjs.cloudflare.com;
style-src 'self' fonts.googleapis.com 'unsafe-inline';
font-src fonts.gstatic.com;
connect-src 'self' https://formspree.io;
img-src 'self' data: blob:;
frame-src 'none';
object-src 'none';
worker-src blob: https://cdnjs.cloudflare.com
```
> Note: `'unsafe-inline'` is **not** in `index.html` script-src anymore — all index JS is external (`script.js` + the pinned pdf.js CDN script). If you ever inline a `<script>` block in index.html, you must add `'unsafe-inline'` back.

**Article pages:**
```
default-src 'self';
script-src 'self' cdn.jsdelivr.net 'unsafe-inline';
style-src 'self' fonts.googleapis.com 'unsafe-inline';
font-src fonts.gstatic.com;
connect-src https://nrwqzxxqivsknkxusdjq.supabase.co;
img-src 'self' data:;
frame-src 'none';
object-src 'none'
```

---

## Common Tasks

**Writing style for event/project descriptions:** no em dashes (`&mdash;`) in the body copy; use periods or commas instead. (Em dashes in `timeline-org` metadata are fine; date ranges in `timeline-date` use an en dash, e.g. `June 2026 &ndash; Present`.)

**Add / update a hackathon (three places):**
1. Insert a `.timeline-item` at the top of the **Events & Competitions** timeline in `index.html` (newest first), optionally with `.win-badge`, `.hackathon-boxes`, and an `event-link`.
2. Append an entry to the `hackathons` array at the top of `script.js` (`name`, `desc`, `tags`, `team`) — this feeds the About stat drill-down modal.
3. Bump the Hackathons number in the About stats (`index.html`).

**Add a project:**
Copy an existing `.timeline-item` in `#projects` (use `is-live` if ongoing, give it an `id` if events should deep-link to it) **and** add a matching entry to the `projects` array in `script.js` (feeds the About modal and the terminal's `projects` command; give it a short `term` tagline), then bump the Projects number in the About stats.

**Add a certification:**
Drop the file in `certs/` and push onto `certs` in `script.js`:
```js
{
  name: 'CompTIA Security+', issuer: 'CompTIA', category: 'CompTIA',
  file: 'certs/security-plus.pdf',          // image or pdf
  preview: 'certs/security-plus.webp',       // optional — shown instead of rendering `file`
  url: 'https://verify.example/...'              // optional Verify button
}
```
`category` must match a tab (`Google | CS50 | CompTIA | Other`). Tabs/cards/grid all render automatically; use `preview` when pdf.js can't render the PDF faithfully.

**Add a blog article:**
1. Create `article-newname.html` by copying an existing article file.
2. Change `POST_SLUG` in the inline script to a unique slug (e.g. `'article-newname'`).
3. Add a new `.blog-card` in `#blog` in `index.html`.

**Update the resume:**
Replace `carl_masters_resume.pdf` in the project root (viewer, download button, and `resume-embed.html` all reference that filename).

**Update the Supabase CDN hash (when upgrading versions):**
```bash
curl -s "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@VERSION/dist/umd/supabase.min.js" \
  | openssl dgst -sha384 -binary | openssl base64 -A
```
Then update the `integrity` attribute and URL in all four article files.

---

## Key renamed/removed since older notes

- `resume.pdf` → **`carl_masters_resume.pdf`**
- `infinite-skill-stream.css` and the skill-stream section → **removed**
- Per-feature modals (`#skillCardModal`, `#skillExploreModal`, `#timelineEventModal`, `certModal`) → **unified `#modal`**
- Binary-decode section reveal → replaced by the `.reveal` / `.in` + timeline `.drawn` system
- Placeholder "CLASSIFIED" cert cards → real `certs` array rendering (empty state is a single "IN PROGRESS" card)
- Timeline items no longer open a cloned-content modal — only tag pills are clickable
