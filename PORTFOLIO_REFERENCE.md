# Carl Masters Portfolio — Complete Reference

## Project Overview

A fully static personal portfolio for Carl Masters, a first-year Cybersecurity student at Temple University Japan (Tokyo). The site is built with vanilla HTML, CSS, and JavaScript — no framework. The only backend is a Supabase project used for article comments.

**Live domain:** carlmasters.com  
**Repo:** github.com/carlmasters02/My-Personal-Portfolio (branch: `main`)

---

## File Structure

```
Carl_Masters_Portfolio/
├── index.html                  # Main single-page portfolio
├── styles.css                  # All global styles (matrix green theme)
├── infinite-skill-stream.css   # Scrolling skill ticker animation
├── script.js                   # All JS for index.html
├── article-cybersecurity.html  # Blog article page
├── article-privacy.html        # Blog article page
├── article-resume.html         # Blog article page
├── resume.pdf                  # Embedded and downloadable resume
├── resume-embed.html           # Standalone resume embed page
├── favicon.svg                 # Site favicon
└── PORTFOLIO_REFERENCE.md      # This file
```

---

## Design System

### Color Palette
| Variable | Value | Use |
|---|---|---|
| `--green` / `--accent` | `#00ff41` | Primary accent, borders, text, glows |
| `--green-dim` | `#00cc33` | Hover states, gradient ends |
| `--bg` | `#000000` / `#0d0f14` | Page background |
| `--bg-card` | `#0a0f0a` | Card backgrounds |
| `--surface` | `#181b22` | Modal/overlay surfaces |
| `--text` | `#e8eaf0` | Body text |
| `--text-muted` | `rgba(255,255,255,0.6)` | Secondary text |
| `--border` | `#252933` | Default borders |

### Fonts
- **Body text:** `Inter` (Google Fonts)
- **Headings:** `Space Grotesk` (Google Fonts)
- **Monospace / code / UI labels:** `JetBrains Mono`, `Share Tech Mono`, `Fira Mono` (Google Fonts)

### Theme
Matrix hacker aesthetic — black background, `#00ff41` green everywhere, green glows (`box-shadow: 0 0 32px #00ff41cc`), green text shadows, animated matrix rain canvas in the background.

---

## index.html — Section by Section

### Background Layer
- **`#matrix-canvas`** — `<canvas>` fixed behind everything at `z-index: -1`, opacity `0.22`. Animated matrix rain (Japanese katakana + `0`/`1` characters) drawn via `script.js`.
- **`#custom-cursor`** — Small `10px` green dot that replaces the system cursor on desktop (`> 768px`). Has a trail of fading dots and a radar-ping expand animation on click. Disabled on mobile.

---

### Navigation (`#navbar`)
**Element:** `<nav id="navbar">`

- Fixed to top, full width, `z-index: 1000`.
- Transparent by default; gets `background: rgba(13,15,20,0.85)` + `backdrop-filter: blur(12px)` + bottom border when `scrolled` class is added (after 40px scroll).
- Drops blur/background when `menu-open` class is active (mobile menu open).

**Logo:** "CM" text with a blinking green underscore cursor (`logo-cursor` element).

**Nav links:** Home, About, Skills, Projects, Education, Certifications, Resume, Blog, Contact. All uppercase, `Share Tech Mono` font. The "Contact" link has `nav-cta` class — rendered as a green-bordered pill button.

**Mobile hamburger:** Three-span button (`#hamburger`). Opens a full-screen overlay menu (`nav-links.mobile-open`) at `z-index: 1002`. Hamburger transforms into an × when open. Auto-closes on outside click or any link click.

---

### Hero Section (`#home`)
**Element:** `<section id="home" class="hero">`

Content is centered vertically and horizontally with `min-height: 100svh`.

| Element | Description |
|---|---|
| `.hero-greeting` | "Hello world. I'm" — small monospace text, fade-up animation on load |
| `.hero-name` | "CARL MASTERS" — large, `clamp(2.8rem, 7vw, 5.5rem)`, green glow text shadow |
| `.hero-typing` | Typing animation cycling through role phrases (see `script.js`) |
| `.hero-sub` | "First-year cybersecurity student based in Tokyo, Japan" |
| `.hero-buttons` | Three buttons: **VIEW MY WORK** (filled green), **CONTACT ME** (outline), **OPEN TERMINAL** (outline) |

**OPEN TERMINAL button (`#openTerminalBtn`):** Triggers the terminal easter egg modal. The terminal can also be triggered by typing the word `hello` anywhere on the page (keyboard buffer listener in `script.js`).

---

### About Section (`#about`)
**Label:** `01 / about`

Two-column grid (`.about-grid`): left = text + stats, right = code card.

**Left side:**
- Two paragraphs of bio text in `#00ff41`.
- Three clickable stat counters (`.about-stats`):
  - `4` Real Projects
  - `5` Languages
  - `3` Hackathons
  - Numbers animate from 0 to target when the section scrolls into view (IntersectionObserver + `animateCounter()`).
  - Clicking any stat opens the **About Modal** showing a drill-down list (projects, languages, or hackathons), then a detail view.

**Right side (`.about-card`):**
- Fake Python code block styled like a code editor (macOS traffic light dots, filename `about_me.py`).
- Shows a `CarlMasters` class with `school`, `year`, `skills`, `focus`, `based`, and a `greet()` method.
- On hover: green glow (`box-shadow: 0 0 36px 8px #00ff41cc`).

---

### Skills Section (`#skills`)
**Label:** `02 / skills`

2×2 grid (`.skills-grid`) of skill category cards (`.skill-category`):

| Category | Skills |
|---|---|
| Languages | Python, C, HTML, CSS, JavaScript |
| Web | Responsive Design, DOM Manipulation, Flexbox/Grid, Web Forms |
| Tools | Git, GitHub, VS Code, Terminal/CLI |
| Currently Learning | Basic Cybersecurity, Digital Privacy, Operating Systems, AI/ML, Discrete Mathematics, Precalculus, Java |

Each card has:
- A `data-category` attribute.
- Clicking opens the **Skill Explore Modal** (`#skillExploreModal`) — shows skill buttons for that category; clicking a skill shows a description.
- On hover: lifts up (`translateY(-7px) scale(1.035)`), green glow border.

---

### Infinite Skill Stream (`#infinite-skill-stream`)
**Element:** `<section id="infinite-skill-stream">`

Three horizontal scrolling rows of skill tags (`.skill-stream-row`). Each row is a `.skill-stream-track` containing the full list of skills duplicated once for a seamless CSS keyframe loop. Row 1 scrolls left, Row 2 scrolls right (`.row2`), Row 3 also scrolls left (`.row3`) — creating a layered parallax effect. Animation is handled entirely in `infinite-skill-stream.css`.

---

### Projects Section (`#projects`)
**Label:** `03 / projects`

Vertical timeline layout (`.timeline`) — same structure as the Education section. Five timeline items in chronological order:

| Date | Project | Tags | Link |
|---|---|---|---|
| Nov. 2025 – Present | This Portfolio | HTML, CSS, JS, Supabase, Responsive Design, DOM Manipulation, Git | carlmasters.com |
| Jan. 2026 – Present | Freelance English Teacher Site | HTML, CSS, JS, Responsive Design, Flexbox / Grid, Web Forms | kadysenglish.com |
| March 2026 | UI/UX Hackathon — 1st Place | UI/UX Design, Prototyping, Wireframing, etc. | — |
| March 2026 | Builders Weekend 2026 Hackathon (TabeTalk) | Voice AI, Real-time Recognition, Bill Splitting, etc. | — |
| June 2026 | SDGs to Startups Hackathon 2026 — 1st Place (FocusHear) | Voice AI, ElevenLabs, Assistive Technology, SDG 10, etc. | — |

Each item (`.timeline-item`):
- Fades in with stagger via IntersectionObserver + `visible` class (observed via `#projects .timeline-item` and `.timeline-item` selectors in `script.js`).
- The Builders Weekend and SDGs to Startups items include `.hackathon-boxes` — a 2×2 grid of info cards (Team, Tech/Features, Sponsor, Organizers).
- Clicking a tag pill opens the **Skill Card Modal** with a description from `skillDefinitions`.

---

### Education / Timeline Section (`#education`)
**Label:** `04 / my background`

Vertical timeline (`.timeline`) with a gradient green left border line. Three timeline items (`.timeline-item`) covering background only — hackathons and projects have been moved to the Projects section:

1. **2017–2021** — High School Diploma, Lake Minneola High School, Minneola, FL
2. **2021–2025** — United States Marine Corps, 0842 Field Artillery Radar Operator, Okinawa, Japan & Camp Lejeune, NC. Secondary billet: KMI Custodian. Schools: Combat Marksmanship Coach + Trainer.
3. **2025–Present** — B.S. Cybersecurity, Temple University Japan, Tokyo

Each item:
- Has a green dot (`.timeline-dot`) on the timeline line.
- Contains date, title, organization, description paragraphs, and tag pills (`.timeline-tags span`).
- Timeline items animate in from the left when scrolled into view.
- **Clicking a timeline item** (but not a link or tag) opens the **Timeline Event Modal** (`#timelineEventModal`) — a full-width modal cloning the item's content for easy reading.
- **Clicking a tag pill** opens the **Skill Card Modal** (`#skillCardModal`) with a description of that skill. All tag descriptions are defined in the large `skillDefinitions` object in `index.html`.

---

### Certifications Section (`#certifications`)
**Label:** `05 / certifications`

Category tab bar (`.cert-tabs`) with: All, Google, CS50, CompTIA, Other.

- On desktop: horizontal pill buttons.
- On mobile (≤600px): tabs hidden, replaced by a hamburger button (`#certTabsHamburgerBtn`) that opens a dropdown (`.cert-tabs-dropdown`).
- The cert grid (`#certGrid`) is rendered by JS (`renderCertGrid()`).
- The `certs` array in `script.js` is currently **empty**, so the grid shows 6 placeholder "CLASSIFIED / 🔒" cards.
- When certs exist: clicking a card opens a **cert preview modal** (`certModal`) showing the image, name, and issuer.

**To add a certification:** Push an object to the `certs` array at the top of `script.js`:
```js
{ name: 'CompTIA Security+', issuer: 'CompTIA', category: 'CompTIA', image: 'path/to/image.png' }
```

---

### Resume Section (`#resume`)
**Label:** `06 / resume`

PDF viewer rendered via `pdf.js` (CDN: `cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174`). The resume is loaded from `resume.pdf`.

- Displayed inside a green-glowing card (`.resume-card-glow`) on an HTML `<canvas id="resumeCanvas">`.
- Prev/Next arrow buttons (`#resumePrevBtn`, `#resumeNextBtn`) for multi-page PDFs. Hidden if only 1 page.
- Page indicator label (`#resumePageIndicator`).
- Download button (`#downloadResumeBtn`) — direct download of `resume.pdf`.
- Fallback: if `pdfjsLib` fails to load, a `resume_preview.jpg` image is shown instead.
- Scales responsively to container width on resize.

---

### Blog Section (`#blog`)
**Label:** `07 / blog`

3-column grid (`.blog-grid`, drops to 2 col at 900px, 1 col at 580px) of blog cards (`.blog-card`):

| Article | Tag | File |
|---|---|---|
| How to Write a Resume That Actually Gets Read | Career Advice | `article-resume.html` |
| Everyday Cybersecurity Habits That Actually Matter | Cybersecurity | `article-cybersecurity.html` |
| The Privacy Stack: Open Source and Encrypted Alternatives | Privacy | `article-privacy.html` |

Each card has: tag pill, title, preview text, and a "READ MORE" button linking to the article file.

---

### Contact Section (`#contact`)
**Label:** "Let's Talk"

- Contact form (`#contactForm`) submits via **Formspree** (`https://formspree.io/f/mreonwao`). Fields: Name, Email, Subject, Message. Hidden `_subject` field. Validated in `script.js` before sending.
- On success/error: status message shown in `#formStatus`.
- Three circular icon-only link buttons (`.contact-icon-btn`): **Email** (`carl.masters.professional@protonmail.com`), **GitHub** (`carlmasters02`), **LinkedIn** (`carl-masters-724951297`).
- **Tokyo time display** (`#tokyo-time`): live `Asia/Tokyo` clock updated every second in the format `TOKYO TIME (JST): HH:MM:SS`.

---

### Footer
Simple centered footer. "Designed & Built by Carl Masters" + "© 2026".

---

### Back to Top Button (`#backToTopBtn`)
Fixed green circle button at bottom-right. Appears after scrolling 300px (`visible` class toggles opacity). Smooth scrolls to top on click.

---

## script.js — Feature Reference

| Feature | Trigger / Location | Notes |
|---|---|---|
| Home menu scroll-to-top | `#homeMenuBtn` click | Smooth scrolls to top |
| About modal | `.stat` click | Shows projects/languages/hackathons list; drill-down to detail view |
| Skill Explore modal | `.skill-category` click | Two-level: category → skill description |
| Terminal easter egg | Type `hello` anywhere OR `#openTerminalBtn` click | Full terminal UI with commands: `help`, `about`, `clear`, `exit`, `skills`, `location` |
| Binary decode reveal | Section scroll into view | IntersectionObserver flashes `0`/`1` overlay over each section for ~1 second on first reveal |
| Back to Top button | Scroll > 300px | Toggles `visible` class |
| Custom cursor | Desktop only (>768px) | Green dot tracks mouse; trail dots fade out; radar ping on click |
| Certifications grid | Page load | Renders from `certs[]` array; shows placeholder cards if empty |
| Resume PDF viewer | Page load | pdf.js CDN; page nav; download button |
| Typing animation | Page load | Cycles phrases in `.hero-typing` |
| Matrix rain | Constant | Canvas animation, `setInterval(drawMatrix, 50)` |
| Navbar scroll state | `scroll` event | Adds `scrolled` class after 40px |
| Active nav link | `scroll` event | Highlights link matching current section |
| Mobile hamburger | `#hamburger` click | Full-screen overlay nav |
| Animated stat counters | IntersectionObserver | Counts from 0 to `data-target` value |
| Project card reveal | IntersectionObserver | Fade-in with stagger delay per card |
| Timeline item reveal | IntersectionObserver | Slide-in from left, stagger delay |
| Skill card modal | Any `.skill-tag` click | Shows skill title + description from `skillDefinitions` |
| Timeline event modal | `.timeline-item` click | Clones and displays timeline item content |
| Contact form | Submit event | Validates → Formspree POST → shows success/error |
| Tokyo time clock | `setInterval(1000)` | Live JST clock in contact section |

---

## Article Pages

All three article pages share the same structure and are self-contained HTML files (no external JS except Supabase and `script.js`).

### Shared Structure
```
Head:
  - CSP meta tag (connect-src allows Supabase)
  - styles.css link
  - Google Fonts
  - Inline article-specific styles (comments section styles)
  - Supabase CDN script (pinned to @2.108.2)

Body:
  - #custom-cursor
  - #matrix-canvas
  - <nav> (links back to index.html sections)
  - <main class="article-page">
      - Back to Blog link
      - Article tag pill
      - Article title (h1)
      - Article body (.article-body)
      - Comments section
  - script.js
```

### Article Files

| File | Title | Tag |
|---|---|---|
| `article-cybersecurity.html` | Everyday Cybersecurity Habits That Actually Matter | Cybersecurity |
| `article-privacy.html` | The Privacy Stack: Open Source and Encrypted Alternatives | Privacy |
| `article-resume.html` | The International Resume Blueprint | Career Advice |

### Comments System

Each article has an inline comment section at the bottom powered by **Supabase**.

**Active Supabase project:**
- **Name:** My Personal Portfolio
- **Project ID:** `nrwqzxxqivsknkxusdjq`
- **URL:** `https://nrwqzxxqivsknkxusdjq.supabase.co`
- **Region:** `ap-northeast-1` (Tokyo)
- **Status:** ACTIVE_HEALTHY

**Database table:** `public.comments`

| Column | Type | Default |
|---|---|---|
| `id` | `uuid` | `gen_random_uuid()` |
| `post_slug` | `text` | — |
| `name` | `text` | — |
| `message` | `text` | — |
| `created_at` | `timestamptz` | `now()` |

**RLS Policies:**
- `comments_select_public` — `anon` role can SELECT all rows
- `comments_insert_public` — `anon` role can INSERT

**Post slugs used:**
- `article-cybersecurity`
- `article-privacy`
- `article-resume`

**Comment form features:**
- Name + message fields (no email, no auth required)
- Honeypot field (`#comment-hp`) for basic spam filtering
- On submit: inserts to Supabase, then reloads comment list
- Comments displayed oldest-first with name, formatted date/time, and message

**Supabase CDN script (all 3 articles):**
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.108.2/dist/umd/supabase.min.js"
  integrity="sha384-JWEyvHh+lRf0sN/WWY+QTQwX+CyWqmNg4tkc8GQzAMEtR2wGNrCJlvnu1lHD1kDm"
  crossorigin="anonymous"></script>
```
> The URL is pinned to `@2.108.2`. If Supabase releases a new version and you want to upgrade, you must recompute the SHA384 hash: `curl -s <new-url> | openssl dgst -sha384 -binary | openssl base64 -A`

---

## External Dependencies

| Dependency | Used In | Version / Source |
|---|---|---|
| Google Fonts (Inter, JetBrains Mono, Space Grotesk, Share Tech Mono) | All pages | fonts.googleapis.com |
| Supabase JS | Article pages | `@2.108.2` via jsDelivr CDN |
| pdf.js | `index.html` (resume viewer) | `3.11.174` via cdnjs |
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

**`index.html` CSP:**
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
style-src 'self' fonts.googleapis.com 'unsafe-inline';
font-src fonts.gstatic.com;
connect-src 'self' https://formspree.io;
img-src 'self' data: blob:;
frame-src 'none';
object-src 'none';
worker-src blob: https://cdnjs.cloudflare.com
```

**Article pages CSP:**
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

**Add a certification:**
In `script.js`, push to the `certs` array at the top:
```js
const certs = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', category: 'CompTIA', image: 'certs/security-plus.png' }
];
```

**Add a blog article:**
1. Create `article-newname.html` by copying an existing article file.
2. Change `POST_SLUG` in the inline script to a unique slug (e.g., `'article-newname'`).
3. Add a new `.blog-card` div in `index.html` `#blog` section.

**Update the resume:**
Replace `resume.pdf` in the project root. The PDF viewer and download button both reference that filename directly.

**Update the Supabase CDN hash (when upgrading versions):**
```bash
curl -s "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@VERSION/dist/umd/supabase.min.js" \
  | openssl dgst -sha384 -binary | openssl base64 -A
```
Then update the `integrity` attribute and the URL version in all three article files.
