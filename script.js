/* =============================================================
   CARL MASTERS PORTFOLIO — script.js
   ============================================================= */
'use strict';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =============================================================
   DATA
   ============================================================= */

const projects = [
  {
    title: 'This Portfolio',
    desc: 'Designed and coded from scratch to practice modern HTML, CSS, and vanilla JavaScript, with animations, responsive layout, and all. A project that\'s also the thing showing you the project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://carlmasters.com'
  },
  {
    title: 'Freelance English Teacher Site',
    desc: 'A business website built for a freelance English teacher to advertise their services. Features a clean landing page, a services section, and a contact form. My first project built for a real client.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kadysenglish.com'
  },
  {
    title: 'TabeTalk (Builders Weekend 2026)',
    desc: 'Built with a 5-person team at Builders Weekend 2026, this AI-powered dining app uses voice samples and real-time voice recognition to track who ordered what, then auto-assigns check items after the bill is scanned so each guest can pay their share seamlessly.',
    tech: ['Voice AI', 'APIs', 'Real-time Processing'],
    link: null
  },
  {
    title: 'FocusHear (SDGs to Startups 2026 — 1st Place)',
    desc: 'Built in 48 hours at the SDGs to Startups Hackathon, FocusHear is a real-time assistive communication platform for people with hearing loss. Lets users tap a face to hear only that person, bridges sign language via hand tracking, and provides color-coded live speaker transcription.',
    tech: ['Voice AI', 'ElevenLabs', 'Assistive Technology', 'Real-time Transcription'],
    link: null
  }
];

const languages = [
  { name: 'Python',     logo: 'icons/python.webp',     desc: 'A versatile, beginner-friendly language used for web, data science, AI, and more.' },
  { name: 'C',          logo: 'icons/c.webp',          desc: 'A foundational systems language, great for performance and understanding how computers work.' },
  { name: 'Java',       logo: 'icons/java.webp',       desc: 'A widely-used language for enterprise, Android, and more.' },
  { name: 'HTML',       logo: 'icons/html.webp',       desc: 'The markup language for structuring web pages.' },
  { name: 'CSS',        logo: 'icons/css.webp',        desc: 'Styles web pages, making them beautiful and responsive.' },
  { name: 'JavaScript', logo: 'icons/javascript.webp', desc: 'The language of the web, enabling interactivity and dynamic content.' }
];

const hackathons = [
  {
    name: 'UI/UX Hackathon — 1st Place',
    desc: 'Competed with a team in a UI/UX-focused hackathon hosted by Temple University Japan. Our team took first place by designing and prototyping a clean, user-centered interface concept under a tight time constraint.',
    tags: ['UI/UX Design', 'Prototyping', 'Teamwork'],
    team: 'Temple University Japan team.'
  },
  {
    name: 'Builders Weekend 2026 Hackathon',
    desc: 'Built an AI-powered dining app that removes the chaos of splitting restaurant bills. Guests sign in, provide a voice sample, and the app listens in real time during ordering to identify who ordered each item. When the check arrives, the host scans the bill, costs are assigned automatically, and everyone pays their share hands-free.',
    tags: ['Voice AI', 'Real-time Recognition', 'Bill Splitting Automation', 'Team Collaboration'],
    team: 'Carl Masters, Bhushith Gujjala Hari, Kseniya Chadovich, Kevin Beutler, and Fangyan Fu.'
  },
  {
    name: 'SDGs to Startups Hackathon 2026 — 1st Place',
    desc: 'Built FocusHear in 48 hours, a real-time assistive communication platform giving deaf and hard-of-hearing users the ability to choose whose voice they hear in any environment. Tackled SDG 10: Reduced Inequalities. Features: Selective Listening (tap a face, hear only that person), Sign Language Bridge (ASL fingerspelling via hand tracking), and Chat Mode (voice-enrolled speaker diarization with color-coded log).',
    tags: ['Voice AI', 'Assistive Technology', 'Accessibility', 'ElevenLabs', 'Speaker Diarization', 'Sign Language Bridge'],
    team: 'Carl Masters, Cassady Mead, Juthathip (Jenny) Loedsinaudom, and Thiago Komeno.'
  },
  {
    name: 'OpenAI x Tokyo AI Hackathon — Build with OpenAI',
    desc: 'Brought a massively rebuilt FocusHear to an invite-only Build with OpenAI event hosted by OpenAI and Tokyo AI. Since the SDGs to Startups prototype, the app went through a full architecture rebuild: a GPT-4o + ElevenLabs Scribe AI pipeline, Supabase Auth with Stripe billing, saved voice and face profiles with automatic in-session recognition, a sound-alert and live-translation system, and a real ONNX-based LSTM sign-language model. Advanced to the first round against a strong field of international teams.',
    tags: ['Voice AI', 'GPT-4o', 'ElevenLabs Scribe', 'Sign Language Recognition', 'Supabase Auth', 'Stripe Billing'],
    team: 'Carl Masters, Cassady Mead, Juthathip (Jenny) Loedsinaudom, and Thiago Komeno.'
  }
];

const skillData = {
  'Languages': {
    'Python':     'A versatile, beginner-friendly language used for web, data science, AI, and more.',
    'C':          'A foundational systems language, great for performance and understanding how computers work.',
    'HTML':       'The markup language for structuring web pages.',
    'CSS':        'Styles web pages, making them beautiful and responsive.',
    'JavaScript': 'The language of the web, enabling interactivity and dynamic content.'
  },
  'Web': {
    'Responsive Design': 'Building sites that look great on any device or screen size.',
    'DOM Manipulation':  'Using JavaScript to change page content and structure on the fly.',
    'Flexbox / Grid':    'Modern CSS layout systems for flexible, powerful page layouts.',
    'Web Forms':         'Creating interactive forms for user input and data collection.'
  },
  'Tools': {
    'Git':            'Version control for tracking code changes and collaborating with others.',
    'GitHub':         'A platform for hosting code, managing projects, and collaborating.',
    'VS Code':        'A popular, extensible code editor for many languages.',
    'Terminal / CLI': 'Command-line tools for efficient development and system control.'
  },
  'Currently Learning': {
    'Basic Cybersecurity':   'Fundamentals of keeping systems and data safe from threats.',
    'Digital Privacy':       'Protecting personal information and understanding privacy tools.',
    'Operating Systems':     'How computers manage hardware, software, and resources.',
    'AI / Machine Learning': 'Building systems that learn from data and make predictions.',
    'Discrete Mathematics':  'Math for computer science: logic, sets, combinatorics, and more.',
    'Precalculus':           'Math foundations for calculus and advanced topics.',
    'Java':                  'A widely-used language for enterprise, Android, and more.'
  }
};

/* Descriptions for the clickable tag bubbles on timeline cards. */
const skillDefinitions = {
  'Python': 'Developed automation scripts, data tools, and web applications using Python. Experienced with core libraries and applying Python to solve practical programming problems.',
  'C': 'Built efficient, low-level programs with a focus on memory management, pointers, and systems-level thinking. Used extensively in coursework and personal projects.',
  'Java': 'Applied object-oriented principles through Java coursework, building familiarity with class hierarchies, interfaces, and foundational design patterns.',
  'JavaScript': 'Created dynamic, interactive web experiences with modern JavaScript. Skilled in DOM manipulation, asynchronous programming, and integrating APIs for responsive UIs.',
  'HTML': 'Structured accessible, semantic web pages and applications. Strong understanding of HTML5 standards and best practices for SEO and usability.',
  'CSS': 'Designed visually appealing, responsive layouts using advanced CSS techniques including Flexbox, Grid, and custom animations.',
  'Git': 'Managed source code and collaborated on projects using Git. Experienced with branching, merging, and resolving conflicts in team environments.',
  'Supabase': 'Used Supabase as a hosted Postgres backend, covering database tables, authentication, and client-side data access.',
  'Responsive Design': 'Engineered mobile-first, adaptive interfaces that deliver seamless experiences across devices. Applies best practices for accessibility and performance.',
  'DOM Manipulation': 'Expert in modifying and interacting with web page elements programmatically to create engaging, real-time user interfaces.',
  'Flexbox / Grid': 'Utilized CSS Flexbox and Grid to create complex, responsive layouts that adapt to any screen size.',
  'Web Forms': 'Developed accessible, user-friendly web forms with validation and dynamic feedback for optimal user experience.',
  'Network Security': 'Studying how to protect networks from intrusion, unauthorized access, and attacks. Covers firewalls, VPNs, IDS/IPS, and secure network architecture.',
  'Ethical Hacking': 'Learning offensive security techniques used by penetration testers to find and report vulnerabilities before malicious actors can exploit them.',
  'Algorithms & Data Structures': 'Studied the core building blocks of efficient software: sorting, searching, recursion, trees, graphs, and complexity analysis, forming the theoretical backbone of computer science.',
  'Discrete Mathematics': 'Completed coursework in logic, sets, proofs, combinatorics, and graph theory, the mathematical language that underlies algorithms, cryptography, and computer architecture.',
  'Object-Oriented Programming': 'Applied OOP principles including encapsulation, inheritance, and polymorphism to design modular, maintainable software across multiple languages.',
  'Version Control (Git)': 'Used Git for source control across academic and personal projects. Comfortable with branching, merging, commits, and collaborative workflows on GitHub.',
  'Problem Solving': 'Approaches technical challenges methodically, breaking down problems, testing assumptions, and iterating toward clean, effective solutions.',
  'Tokyo Campus': 'Pursuing a Cybersecurity degree at Temple University Japan in Tokyo, gaining both technical education and the perspective that comes with studying internationally.',

  'Mathematics': 'Built a strong foundation in mathematics through algebra, geometry, and pre-calculus, providing the quantitative reasoning skills essential for cybersecurity and engineering.',
  'English': 'Developed strong written and verbal communication skills through essay writing, literature analysis, and public speaking, abilities that translate directly into technical documentation and team collaboration.',
  'Science': 'Studied biology, chemistry, and physics, building the analytical mindset and hypothesis-driven thinking that underpins problem solving in technical fields.',
  'Critical Thinking': 'Developed the ability to analyze complex situations, identify root causes, and reason through to effective solutions, a skill applied equally in academic study, military operations, and software development.',
  'Time Management': 'Consistently balanced competing priorities across coursework, extracurriculars, and personal responsibilities, developing the organizational discipline carried into every role since.',

  'Leadership': 'Led and mentored fellow Marines in high-stakes operational environments. Responsible for guiding team performance, maintaining standards, and ensuring mission success under pressure.',
  'Teamwork': 'Operated as a core member of a cohesive military unit, where coordinated execution and mutual accountability were not optional; they were mission-critical.',
  'Discipline': 'Instilled with the rigorous personal and professional discipline of the United States Marine Corps, establishing standards of reliability, precision, and commitment that define every undertaking.',
  'Radar Employment & Maintenance': 'Trained and experienced in the full operational lifecycle of military counterfire and ground surveillance radar systems, from site selection and emplacement to calibration, operation, and displacement under field conditions.',
  'Instructional Skills': 'Formally trained and certified to teach, coach, and evaluate other Marines. Delivered structured instruction in both classroom and live-fire environments, adapting to individual learning needs.',
  'Cryptographic Key Management': 'Held a secondary billet as a Key Management Infrastructure (KMI) Custodian, responsible for the secure handling, accountability, loading, and destruction of highly sensitive military cryptographic keying material in accordance with strict NSA-mandated procedures.',
  'Operational Security': 'Practiced and enforced OPSEC across all radar and intelligence operations, ensuring sensitive battlefield data, equipment, and personnel were protected from adversarial exploitation.',
  'High-Pressure Decision Making': 'Routinely made time-critical decisions in fast-moving, high-consequence operational environments, tracking live fire missions, managing radar assets, and coordinating counterfire data with minimal margin for error.',
  'Curriculum Development': 'Designed and structured marksmanship training curricula as a certified Combat Marksmanship Trainer, tailoring programs of instruction to unit needs and Marine Corps standards.',

  'Voice AI': 'Integrated voice recognition and speaker identification technologies to build real-time audio processing pipelines capable of identifying individual speakers in live environments.',
  'Real-time Recognition': 'Built systems that process audio input in real time, matching spoken orders to individual users on the fly without human intervention.',
  'Bill Splitting Automation': 'Designed the core logic of an automated dining payment system that tracks what each person ordered and calculates individual totals without manual input at checkout.',
  'API Integration': 'Integrated multiple third-party APIs, including voice, payment, and AI services, into a unified application workflow under hackathon time pressure.',
  'Payment Workflows': 'Implemented end-to-end payment processing flows, enabling seamless per-person billing tied directly to voice-recognized order data.',
  'Rapid Prototyping': 'Delivered a fully functional product concept within the tight constraints of a competitive hackathon, prioritizing core functionality and demo readiness.',
  'Cross-functional Teamwork': 'Collaborated with teammates across different skill sets and backgrounds, dividing responsibilities efficiently to ship a cohesive product under deadline.',
  'Product Design': 'Contributed to the overall product vision, user flow, and feature set of a novel AI application, balancing technical feasibility with a compelling user experience.',
  'Deadline Management': 'Executed under strict hackathon time limits, making fast prioritization calls to ensure a working, presentable product by the submission deadline.',
  'Team Collaboration': 'Worked closely with a multi-person team to build, test, and present a fully functioning AI application, coordinating across design, development, and integration tasks.',

  'UI/UX Design': 'Applied user interface and user experience design principles to create intuitive, visually clean interfaces. Focused on reducing friction and improving the overall user journey.',
  'Prototyping': 'Built interactive prototypes to rapidly validate design concepts and gather feedback before committing to final implementation.',
  'User-Centered Design': 'Placed the end user at the center of every design decision, researching user needs, mapping flows, and iterating on feedback to produce interfaces people actually want to use.',
  'Wireframing': 'Created low and mid-fidelity wireframes to establish layout, structure, and user flow before applying visual design, saving time and aligning the team early.',
  'Visual Hierarchy': 'Applied principles of visual weight, contrast, spacing, and typography to guide the user\'s eye and communicate information clearly without clutter.',
  'Iterative Design': 'Refined designs through continuous feedback cycles, improving usability and aesthetics with each iteration rather than locking in a single approach.',
  'Presentation Skills': 'Presented the team\'s design concept and rationale clearly and confidently to judges, articulating design decisions and demonstrating the prototype under competitive conditions.',
  'Competitive Problem Solving': 'Thrived in a competitive, time-boxed environment by staying focused, adapting quickly to constraints, and delivering a polished solution that earned first place.',

  'Assistive Technology': 'Designed and built tools that extend the capabilities of people living with disabilities. FocusHear was built specifically for the 430 million people worldwide with disabling hearing loss who have never had the ability to selectively listen to one speaker in a noisy environment.',
  'Accessibility': 'Committed to building software that works for everyone, including people with disabilities. Applied accessibility-first thinking to every design and engineering decision in FocusHear.',
  'ElevenLabs': 'Integrated ElevenLabs\' Scribe API for high-accuracy real-time speech transcription and their speaker diarization API to identify and label individual speakers in multi-person conversations.',
  'ElevenLabs Scribe': 'Used the ElevenLabs Scribe API as the transcription backbone of FocusHear, delivering high-accuracy real-time speech-to-text with latency low enough for live conversation.',
  'Speaker Diarization': 'Used ElevenLabs\' diarization system to automatically detect who is speaking on every conversational turn, enabling color-coded live transcripts where each speaker is always clearly identified.',
  'Sign Language Bridge': 'Built a real-time hand position tracking system that maps hand shapes to ASL fingerspelling letters, displayed alongside live captions so users who communicate through sign are never excluded from the conversation.',
  'Sign Language Recognition': 'Trained and deployed an ONNX-based LSTM model for sign language recognition, replacing an earlier demo classifier with a genuinely trained model.',
  'Real-time Transcription': 'Implemented live speech-to-text transcription using ElevenLabs Scribe, delivering high-accuracy captions in real time with low enough latency to be usable in actual conversations.',
  'SDG 10': 'Built FocusHear in direct response to UN Sustainable Development Goal 10: Reduced Inequalities, specifically the inequality faced by 430 million people with disabling hearing loss who lack access to selective listening technology that hearing people take for granted.',
  'GPT-4o': 'Used GPT-4o as the reasoning layer of the rebuilt FocusHear pipeline, handling intent detection, tone classification, and live caption translation.',
  'Supabase Auth': 'Implemented full authentication with Supabase Auth, supporting email/password sign-in alongside Google OAuth.',
  'Stripe Billing': 'Integrated Stripe to handle Pro subscription billing, including checkout flow and subscription state.',
  'Production Security': 'Applied production security practices across the rebuild: server-side secret handling, authenticated API routes, and least-privilege data access.'
};

/* Warm the language logos while the page is idle so the modal never
   opens to empty slots on first click. ~28KB total. */
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => languages.forEach(l => { new Image().src = l.logo; }));
} else {
  window.addEventListener('load', () => languages.forEach(l => { new Image().src = l.logo; }));
}

/* Certifications. Empty until real credentials are uploaded. */
const certs = [];

/* =============================================================
   UNIFIED MODAL
   One overlay serves every modal on the site.
   ============================================================= */
const Modal = (() => {
  const overlay   = $('#modal');
  const card      = $('#modalCard');
  const titleEl   = $('#modalTitle');
  const bodyEl    = $('#modalBody');
  const closeBtn  = $('#modalClose');
  // Article pages share this script but have no modal markup.
  if (!overlay) return { open() {}, close() {}, isOpen: () => false };

  let lastFocused = null;
  const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function open({ title = '', size = '', render }) {
    lastFocused = document.activeElement;
    titleEl.textContent = title;
    titleEl.hidden = !title;
    card.className = 'modal-card' + (size ? ' ' + size : '');
    bodyEl.replaceChildren();
    if (typeof render === 'function') render(bodyEl);
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    // Focus the close button so Escape/Tab behave predictably.
    requestAnimationFrame(() => closeBtn.focus());
  }

  function close() {
    if (!overlay.classList.contains('active')) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    lastFocused = null;
  }

  const isOpen = () => overlay.classList.contains('active');

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', e => {
    if (!isOpen()) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    // Focus trap
    const items = $$(FOCUSABLE, card).filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last  = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  return { open, close, isOpen, bodyEl, titleEl };
})();

/* --- Small builders shared by the modal views --- */

function listButton({ logo, label, tags, onClick }) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'list-btn';

  if (logo) {
    const img = document.createElement('img');
    img.className = 'li-logo';
    img.src = logo;
    img.alt = '';          // decorative: the label already names it
    img.decoding = 'async';
    // Not lazy: these only exist once the modal is already open, so
    // deferring the fetch would just make them pop in as you look at them.
    img.width = 24;
    img.height = 24;
    btn.appendChild(img);
  }

  const wrap = document.createElement('span');
  const text = document.createElement('span');
  text.textContent = label;
  wrap.appendChild(text);

  if (tags && tags.length) {
    const tagWrap = document.createElement('span');
    tagWrap.className = 'list-btn-tags';
    tags.forEach(t => {
      const s = document.createElement('span');
      s.textContent = t;
      tagWrap.appendChild(s);
    });
    wrap.appendChild(tagWrap);
  }

  btn.appendChild(wrap);
  btn.addEventListener('click', onClick);
  return btn;
}

function detailView(root, { title, onBack, build }) {
  root.replaceChildren();

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'modal-back';
  back.textContent = '← Back';
  back.addEventListener('click', onBack);
  root.appendChild(back);

  const h = document.createElement('div');
  h.className = 'modal-detail-title';
  h.textContent = title;
  root.appendChild(h);

  const desc = document.createElement('div');
  desc.className = 'modal-detail-desc';
  build(desc);
  root.appendChild(desc);
}

function para(text, strongLabel) {
  const p = document.createElement('p');
  if (strongLabel) {
    const s = document.createElement('strong');
    s.textContent = strongLabel + ' ';
    p.appendChild(s);
  }
  p.appendChild(document.createTextNode(text));
  return p;
}

/* =============================================================
   ABOUT STATS → MODAL
   ============================================================= */
const statViews = {
  projects: {
    title: 'Real Projects',
    items: projects,
    label: p => p.title,
    tags:  p => p.tech,
    detail: (p, desc) => {
      desc.appendChild(para(p.desc));
      desc.appendChild(para(p.tech.join(', '), 'Tech:'));
      if (p.link) {
        const wrap = document.createElement('p');
        const a = document.createElement('a');
        a.href = p.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = 'Visit project →';
        wrap.appendChild(a);
        desc.appendChild(wrap);
      }
    }
  },
  languages: {
    title: 'Languages',
    items: languages,
    label: l => l.name,
    logo:  l => l.logo,
    tags:  () => null,
    detail: (l, desc) => desc.appendChild(para(l.desc))
  },
  hackathons: {
    title: 'Hackathons',
    items: hackathons,
    label: h => h.name,
    tags:  h => h.tags.slice(0, 4),
    detail: (h, desc) => {
      desc.appendChild(para(h.desc));
      desc.appendChild(para(h.tags.join(', '), 'Tags:'));
      desc.appendChild(para(h.team, 'Team:'));
    }
  }
};

function openStatModal(type) {
  const view = statViews[type];
  if (!view) return;

  const renderList = (root) => {
    root.replaceChildren();
    view.items.forEach(item => {
      root.appendChild(listButton({
        logo:  view.logo ? view.logo(item) : null,
        label: view.label(item),
        tags:  view.tags(item),
        onClick: () => detailView(root, {
          title: view.label(item),
          onBack: () => renderList(root),
          build: desc => view.detail(item, desc)
        })
      }));
    });
  };

  Modal.open({ title: view.title, render: renderList });
}

$$('.about-stats .stat').forEach(stat => {
  stat.addEventListener('click', () => openStatModal(stat.dataset.stat));
});

/* =============================================================
   SKILL CATEGORY → MODAL
   ============================================================= */
$$('.skill-category').forEach(cat => {
  cat.addEventListener('click', () => {
    const category = cat.dataset.category;
    const skills = skillData[category];
    if (!skills) return;

    const renderList = (root) => {
      root.replaceChildren();
      Object.keys(skills).forEach(skill => {
        root.appendChild(listButton({
          label: skill,
          onClick: () => detailView(root, {
            title: skill,
            onBack: () => renderList(root),
            build: desc => desc.appendChild(para(skills[skill]))
          })
        }));
      });
    };

    Modal.open({ title: category, render: renderList });
  });
});

/* =============================================================
   TIMELINE TAG BUBBLES → DEFINITION MODAL
   ============================================================= */
document.addEventListener('click', e => {
  const tag = e.target.closest('.timeline-tags span');
  if (!tag) return;
  const skill = tag.textContent.trim();
  Modal.open({
    title: skill,
    size: 'modal-sm',
    render: root => {
      root.appendChild(para(skillDefinitions[skill] || 'No description available yet.'));
    }
  });
});

/* Timeline tag bubbles are interactive — make that reachable by keyboard. */
$$('.timeline-tags span').forEach(span => {
  span.tabIndex = 0;
  span.setAttribute('role', 'button');
  span.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); span.click(); }
  });
});

/* =============================================================
   CERTIFICATIONS
   ============================================================= */
const certGrid          = $('#certGrid');
const certTabsEl        = $('#certTabs');
const certHamburgerWrap = $('#certTabsHamburger');
const certTabs          = $$('.cert-tab');
const certHamburgerBtn  = $('#certTabsHamburgerBtn');
const certDropdown      = $('#certTabsDropdown');
const certDropdownBtns  = certDropdown ? $$('.cert-tab-dropdown', certDropdown) : [];

function renderCertGrid(category = 'All') {
  if (!certGrid) return;
  certGrid.replaceChildren();

  const filtered = certs.filter(c => category === 'All' || c.category === category);

  if (!filtered.length) {
    // Nothing uploaded yet: say so once, honestly, instead of padding
    // the grid with placeholder cards.
    const card = document.createElement('div');
    card.className = 'cert-card placeholder cert-empty';
    const lock = document.createElement('div');
    lock.className = 'lock-icon';
    lock.textContent = '🔒';
    const label = document.createElement('div');
    label.className = 'classified';
    label.textContent = 'IN PROGRESS';
    const note = document.createElement('div');
    note.className = 'pending';
    note.textContent = 'Certifications are in progress and will be published here once earned.';
    card.append(lock, label, note);
    certGrid.appendChild(card);
    return;
  }

  filtered.forEach(cert => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'cert-card';

    const img = document.createElement('img');
    img.src = cert.image;
    img.alt = cert.name;
    img.loading = 'lazy';

    const name = document.createElement('div');
    name.className = 'cert-name';
    name.textContent = cert.name;

    const issuer = document.createElement('div');
    issuer.className = 'cert-issuer';
    issuer.textContent = cert.issuer;

    card.append(img, name, issuer);
    card.addEventListener('click', () => openCertModal(cert));
    certGrid.appendChild(card);
  });
}

function openCertModal(cert) {
  Modal.open({
    title: cert.name,
    size: 'modal-lg',
    render: root => {
      const img = document.createElement('img');
      img.className = 'cert-modal-img';
      img.src = cert.image;
      img.alt = cert.name;
      root.appendChild(img);
      root.appendChild(para(cert.issuer));
    }
  });
}

function selectCertCategory(category) {
  certTabs.forEach(t => t.classList.toggle('active', t.dataset.category === category));
  certDropdownBtns.forEach(b => b.classList.toggle('active', b.dataset.category === category));
  renderCertGrid(category);
}

certTabs.forEach(tab => {
  tab.addEventListener('click', () => selectCertCategory(tab.dataset.category));
});

certDropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    selectCertCategory(btn.dataset.category);
    certDropdown.classList.remove('open');
    certHamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});

if (certHamburgerBtn && certDropdown) {
  certHamburgerBtn.addEventListener('click', () => {
    const open = certDropdown.classList.toggle('open');
    certHamburgerBtn.setAttribute('aria-expanded', String(open));
  });
}

/* With no certifications loaded, the category filter is noise — hide it. */
if (!certs.length) {
  if (certTabsEl) certTabsEl.style.display = 'none';
  if (certHamburgerWrap) certHamburgerWrap.style.display = 'none';
}

renderCertGrid();

/* =============================================================
   NAVIGATION
   ============================================================= */
const navbar     = $('#navbar');
const hamburger  = $('#hamburger');
const navLinksEl = $('.nav-links');
const navLinks   = $$('.nav-links a[href^="#"]');

const syncNavbarScrollState = () => {
  if (!navbar || navbar.classList.contains('menu-open')) return;
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', syncNavbarScrollState, { passive: true });
syncNavbarScrollState();

if (hamburger && navLinksEl && navbar) {

const closeMobileMenu = () => {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  navLinksEl.classList.remove('mobile-open');
  navbar.classList.remove('menu-open');
  document.body.classList.remove('modal-open');
  syncNavbarScrollState();
};

hamburger.addEventListener('click', () => {
  if (navLinksEl.classList.contains('mobile-open')) { closeMobileMenu(); return; }
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  navLinksEl.classList.add('mobile-open');
  navbar.classList.remove('scrolled');
  navbar.classList.add('menu-open');
  document.body.classList.add('modal-open');
});

navLinksEl.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

document.addEventListener('click', e => {
  if (navLinksEl.classList.contains('mobile-open') &&
      !navLinksEl.contains(e.target) &&
      !hamburger.contains(e.target)) {
    closeMobileMenu();
  }
});

}

/* Active section indicator */
const navSections = $$('main section[id]');
const setActiveLink = () => {
  const y = window.scrollY;
  let current = '';
  navSections.forEach(sec => {
    if (y >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

/* =============================================================
   SCROLL PROGRESS
   ============================================================= */
const progressBar = $('#scrollProgress');
if (progressBar) {
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? window.scrollY / max : 0;
    progressBar.style.transform = `scaleX(${pct})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

/* =============================================================
   BACK TO TOP
   ============================================================= */
const backToTopBtn = $('#backToTopBtn');
if (backToTopBtn) {
  const syncBackToTop = () => backToTopBtn.classList.toggle('visible', window.scrollY > 400);
  window.addEventListener('scroll', syncBackToTop, { passive: true });
  syncBackToTop();
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

/* =============================================================
   SCROLL REVEAL
   ============================================================= */
const revealEls = $$('.reveal');
if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
}

/* Timeline: stagger the cards, draw the spine, pop the dots behind it. */
$$('.timeline').forEach(tl => {
  const items = $$('.timeline-item', tl);
  items.forEach((item, i) => {
    const stagger = Math.min(i * 0.08, 0.4);
    if (!item.style.getPropertyValue('--rd')) {
      item.style.setProperty('--rd', `${stagger}s`);
    }
    // Dot lands just after the descending spine reaches it.
    const dot = $('.timeline-dot', item);
    if (dot) {
      const ratio = items.length > 1 ? i / (items.length - 1) : 0;
      dot.style.setProperty('--dot-delay', `${(0.15 + ratio * 0.8).toFixed(2)}s`);
    }
  });

  if (reduceMotion) {
    tl.classList.add('drawn');
    return;
  }
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('drawn');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.05 }).observe(tl);
});

/* =============================================================
   NAV — sliding active indicator
   ============================================================= */
if (navLinksEl && navLinks.length && !reduceMotion) {
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  navLinksEl.appendChild(indicator);

  const moveIndicator = (target) => {
    if (!target || window.innerWidth <= 980) {
      indicator.classList.remove('on');
      return;
    }
    // Measure against the list so the offset survives nav padding changes.
    const listBox = navLinksEl.getBoundingClientRect();
    const linkBox = target.getBoundingClientRect();
    indicator.style.width = `${linkBox.width}px`;
    indicator.style.transform = `translateX(${linkBox.left - listBox.left}px)`;
    indicator.classList.add('on');
  };

  // The Contact CTA is styled as a button and carries its own glow on
  // hover, so the sliding underline skips it entirely.
  const indicatorLinks = navLinks.filter(l => !l.classList.contains('nav-cta'));

  const activeLink = () => indicatorLinks.find(l => l.classList.contains('active'));
  const syncIndicator = () => moveIndicator(activeLink());

  indicatorLinks.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link));
  });
  // Hovering the CTA sends the indicator back to the active section.
  navLinks.filter(l => l.classList.contains('nav-cta'))
    .forEach(cta => cta.addEventListener('mouseenter', syncIndicator));

  navLinksEl.addEventListener('mouseleave', syncIndicator);

  window.addEventListener('scroll', syncIndicator, { passive: true });
  window.addEventListener('resize', syncIndicator);
  // Web fonts change link widths after load — re-measure once settled.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncIndicator);
  syncIndicator();
}

/* =============================================================
   STAT COUNTERS
   ============================================================= */
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  if (Number.isNaN(target)) return;
  if (reduceMotion) { el.textContent = String(target); return; }

  const duration = 1400;
  const start = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(easeOut(t) * target));
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  };
  requestAnimationFrame(tick);
};

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    statObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

$$('.stat-number').forEach(el => statObserver.observe(el));

/* =============================================================
   HERO — NAME DECODE + ROLE TYPING
   ============================================================= */
const heroName = $('.hero-name');
if (heroName && !reduceMotion) {
  const finalText = heroName.dataset.scramble || heroName.textContent;
  // Latin only: CJK glyphs are double-width and would reflow the line.
  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&$@';

  // Render each letter in its own fixed-width cell, measured from the real
  // glyph, so scrambling can never shift the layout.
  const cells = finalText.split('').map(ch => {
    const span = document.createElement('span');
    span.textContent = ch;
    if (ch === ' ') span.style.whiteSpace = 'pre';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    return span;
  });
  heroName.replaceChildren(...cells);

  const lockWidths = () => cells.forEach(span => {
    span.style.width = `${span.getBoundingClientRect().width}px`;
  });

  const run = () => {
    lockWidths();
    const settle = cells.map((_, i) => 120 + i * 55);
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      let done = true;
      cells.forEach((span, i) => {
        const ch = finalText[i];
        if (ch === ' ' || elapsed >= settle[i]) {
          if (span.textContent !== ch) span.textContent = ch;
          return;
        }
        done = false;
        span.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });
      if (!done) requestAnimationFrame(step);
      else cells.forEach((span, i) => { span.textContent = finalText[i]; });
    };
    requestAnimationFrame(step);
  };

  // Measure against the real display font, not the fallback.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
  else run();
}

const typingEl = $('.hero-typing .typing-text');
if (typingEl) {
  const phrases = [
    'CYBERSECURITY STUDENT',
    'INTERNATIONAL STUDENT',
    'DATA PRIVACY ENTHUSIAST',
    'WEB DEVELOPER',
    'PROBLEM SOLVER',
    'ASPIRING SOC ANALYST',
    'ASPIRING PENETRATION TESTER'
  ];

  if (reduceMotion) {
    typingEl.textContent = phrases[0];
  } else {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const phrase = phrases[phraseIndex];
      charIndex += deleting ? -1 : 1;
      typingEl.textContent = phrase.slice(0, charIndex);

      let delay = deleting ? 40 : 70;
      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 260;
      }
      setTimeout(type, delay);
    };
    setTimeout(type, 900);
  }
}

/* =============================================================
   MATRIX RAIN — full page, fixed behind all content
   ============================================================= */
const matrixCanvas = $('#matrix-canvas');
if (matrixCanvas && !reduceMotion) {
  const mctx = matrixCanvas.getContext('2d');
  const FONT = 14;
  const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  let drops = [];
  let rafId = null;
  let lastFrame = 0;

  const resize = () => {
    // Canvas is position:fixed, so it only ever covers the viewport
    // no matter how long the page is.
    matrixCanvas.width  = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    drops = new Array(Math.floor(matrixCanvas.width / FONT)).fill(1);
  };

  const draw = (now) => {
    rafId = requestAnimationFrame(draw);
    if (now - lastFrame < 50) return;   // ~20fps is plenty for rain
    lastFrame = now;

    mctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    mctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    mctx.font = FONT + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      mctx.fillStyle = Math.random() > 0.97 ? '#ffffff' : '#00ff41';
      mctx.fillText(char, i * FONT, drops[i] * FONT);
      if (drops[i] * FONT > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  };

  const startRain = () => { if (rafId === null) rafId = requestAnimationFrame(draw); };
  const stopRain  = () => { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } };

  resize();
  startRain();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  // Don't burn frames on a tab nobody is looking at.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopRain(); else startRain();
  });
}

/* =============================================================
   CUSTOM CURSOR — dot + click ping, desktop pointers only
   ============================================================= */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cursorDot = $('#custom-cursor');

if (cursorDot && finePointer && !reduceMotion && window.innerWidth > 1024) {
  document.body.classList.add('cursor-none');

  document.addEventListener('mousemove', e => {
    cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  }, { passive: true });

  document.addEventListener('click', e => {
    const ping = document.createElement('div');
    ping.className = 'cursor-ping';
    ping.style.left = e.clientX + 'px';
    ping.style.top  = e.clientY + 'px';
    document.body.appendChild(ping);
    ping.addEventListener('animationend', () => ping.remove());
  });
}

/* =============================================================
   TERMINAL EASTER EGG
   Trigger: click the hero button, or type "hello" anywhere.
   ============================================================= */
(() => {
  const TRIGGER = 'hello';
  let buffer = '';
  let isOpen = false;

  const openBtn = $('#openTerminalBtn');
  if (openBtn) openBtn.addEventListener('click', showTerminal);

  document.addEventListener('keydown', e => {
    if (isOpen || Modal.isOpen()) return;
    const el = document.activeElement;
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) {
      buffer = '';
      return;
    }
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      buffer += e.key.toLowerCase();
      if (!TRIGGER.startsWith(buffer)) buffer = e.key.toLowerCase() === 'h' ? 'h' : '';
      if (buffer === TRIGGER) { buffer = ''; showTerminal(); }
    } else {
      buffer = '';
    }
  });

  const COMMANDS = {
    help: [
      'about     - learn about Carl Masters',
      'skills    - list technical skills',
      'projects  - list recent projects',
      'location  - show current location',
      'clear     - clear the terminal',
      'exit      - close this terminal'
    ],
    about: ['Carl Masters: Cybersecurity student, aspiring SOC analyst, and digital privacy advocate.'],
    skills: ['Python, C, Java, HTML, CSS, JavaScript, Git, Cybersecurity, AI/ML, Leadership'],
    projects: [
      'carlmasters.com     - this portfolio',
      'kadysenglish.com    - client site',
      'TabeTalk            - AI bill splitting (Builders Weekend 2026)',
      'FocusHear           - assistive comms (1st place, SDGs to Startups)'
    ],
    location: ['Tokyo, Japan - Temple University Japan']
  };

  function showTerminal() {
    if (isOpen) return;
    isOpen = true;
    const lastFocused = document.activeElement;

    const overlay = document.createElement('div');
    overlay.className = 'term-overlay';

    const win = document.createElement('div');
    win.className = 'term-window';

    const chrome = document.createElement('div');
    chrome.className = 'term-chrome';
    const dots = document.createElement('span');
    dots.className = 'term-dots';
    dots.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));
    const title = document.createElement('span');
    title.className = 'term-title';
    title.textContent = 'CARL MASTERS OS v1.0';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'term-close';
    closeBtn.type = 'button';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close terminal');
    chrome.append(dots, title, closeBtn);

    const body = document.createElement('div');
    body.className = 'term-body';

    win.append(chrome, body);
    overlay.appendChild(win);
    document.body.appendChild(overlay);
    document.body.classList.add('modal-open');

    function closeTerminal() {
      if (!isOpen) return;
      isOpen = false;
      overlay.remove();
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', escListener);
      if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    }
    function escListener(e) { if (e.key === 'Escape') closeTerminal(); }

    closeBtn.addEventListener('click', closeTerminal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeTerminal(); });
    document.addEventListener('keydown', escListener);

    const scrollDown = () => { body.scrollTop = body.scrollHeight; };

    function printLine(text) {
      const line = document.createElement('span');
      line.className = 'term-line';
      line.textContent = text;
      body.appendChild(line);
      scrollDown();
      return line;
    }

    function typeLine(text, done) {
      const line = printLine('');
      let i = 0;
      const tick = () => {
        line.textContent = text.slice(0, i);
        if (i++ < text.length) setTimeout(tick, 16 + Math.random() * 20);
        else { line.textContent = text; setTimeout(done, 240); }
      };
      tick();
    }

    function showPrompt() {
      const lineEl = document.createElement('div');
      lineEl.className = 'term-input-line';

      const prompt = document.createElement('span');
      prompt.className = 'term-prompt';
      prompt.textContent = '>';

      const wrap = document.createElement('span');
      wrap.className = 'term-input-wrap';

      const input = document.createElement('input');
      input.className = 'term-input';
      input.type = 'text';
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.maxLength = 64;
      input.setAttribute('aria-label', 'Terminal command');

      const caret = document.createElement('span');
      caret.className = 'term-cursor';

      const measure = document.createElement('span');
      measure.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font:inherit;letter-spacing:inherit;';

      wrap.append(input, caret, measure);
      lineEl.append(prompt, wrap);
      body.appendChild(lineEl);

      const syncCaret = () => {
        measure.textContent = input.value;
        caret.style.left = measure.offsetWidth + 'px';
      };
      syncCaret();
      input.addEventListener('input', syncCaret);

      input.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        const value = input.value.trim();
        input.disabled = true;
        caret.remove();
        handleCommand(value);
      });

      setTimeout(() => input.focus(), 60);
      scrollDown();
    }

    function handleCommand(cmd) {
      const lc = cmd.toLowerCase();
      if (lc === 'exit') { closeTerminal(); return; }
      if (lc === 'clear') { body.replaceChildren(); setTimeout(showPrompt, 100); return; }
      if (COMMANDS[lc]) COMMANDS[lc].forEach(printLine);
      else if (lc.length) printLine('Unknown command: ' + cmd + '  (try "help")');
      setTimeout(showPrompt, 240);
    }

    const boot = [
      '> Initializing Carl Masters OS v1.0...',
      '> Scanning visitor...',
      '> Identity: UNKNOWN',
      '> Clearance level: PENDING',
      '> Welcome, operator.',
      '> Type "help" for available commands.'
    ];
    let idx = 0;
    const bootNext = () => {
      if (idx < boot.length) typeLine(boot[idx++], bootNext);
      else showPrompt();
    };
    bootNext();
  }
})();

/* =============================================================
   TOKYO CLOCK
   ============================================================= */
const tokyoEl = $('#tokyo-time');
if (tokyoEl) {
  const updateTokyoTime = () => {
    const time = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    tokyoEl.textContent = `TOKYO ${time} JST`;
  };
  updateTokyoTime();
  setInterval(updateTokyoTime, 1000);
}

/* =============================================================
   RESUME VIEWER (pdf.js)
   ============================================================= */
(() => {
  const canvas   = $('#resumeCanvas');
  const prevBtn  = $('#resumePrevBtn');
  const nextBtn  = $('#resumeNextBtn');
  const indicator = $('#resumePageIndicator');
  const loading  = $('#resumeLoading');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let pdfDoc = null;
  let currentPage = 1;
  let totalPages = 0;
  let rendering = false;

  const hideLoading = () => { if (loading) loading.style.display = 'none'; };

  let settled = false;
  function fail(message) {
    if (settled) return;
    settled = true;
    clearTimeout(watchdog);
    hideLoading();
    canvas.style.display = 'none';
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (indicator) {
      indicator.textContent = message;
      indicator.classList.add('error');
    }
  }

  // If the CDN worker is blocked, getDocument() can hang without ever
  // rejecting. Never leave the viewer spinning indefinitely.
  const watchdog = setTimeout(() => {
    fail('Resume preview timed out. Use the download button below.');
  }, 20000);

  if (typeof pdfjsLib === 'undefined') {
    fail('Resume preview unavailable. Use the download button below.');
    return;
  }

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  function updateUI() {
    if (!indicator) return;
    if (totalPages <= 1) {
      indicator.textContent = '';
      if (prevBtn) prevBtn.style.visibility = 'hidden';
      if (nextBtn) nextBtn.style.visibility = 'hidden';
      return;
    }
    indicator.textContent = `${currentPage} / ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
  }

  function renderPage(num) {
    if (rendering || !pdfDoc) return;
    rendering = true;

    pdfDoc.getPage(num).then(page => {
      const frame = canvas.parentElement;
      const width = frame.clientWidth || 820;
      const base = page.getViewport({ scale: 1 });
      // Render at device resolution so text stays crisp on retina displays.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale: (width / base.width) * dpr });

      canvas.width  = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';

      return page.render({ canvasContext: ctx, viewport }).promise.then(() => {
        rendering = false;
        settled = true;
        clearTimeout(watchdog);
        hideLoading();
        updateUI();
      });
    }).catch(() => {
      rendering = false;
      fail('Could not render the resume. Use the download button below.');
    });
  }

  pdfjsLib.getDocument('resume.pdf').promise.then(pdf => {
    pdfDoc = pdf;
    totalPages = pdf.numPages;
    renderPage(currentPage);
  }).catch(() => {
    fail('Could not load the resume. Use the download button below.');
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (currentPage > 1 && !rendering) renderPage(--currentPage);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages && !rendering) renderPage(++currentPage);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (pdfDoc) renderPage(currentPage); }, 200);
  });
})();

/* =============================================================
   CONTACT FORM
   ============================================================= */
const form = $('#contactForm');
const formStatus = $('#formStatus');

function setStatus(msg, type) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.className = `form-status ${type}`;
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus('Please fill in your name, email, and message.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email address.', 'error');
      return;
    }

    const endpoint = form.getAttribute('action') || '';
    if (!endpoint || endpoint.includes('/yourFormId')) {
      setStatus('Form not configured yet.', 'error');
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setStatus('', '');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setStatus('Message sent. I\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        // Surface why it failed rather than showing a generic message.
        let detail = '';
        try {
          const data = await response.json();
          if (data && Array.isArray(data.errors)) detail = data.errors.map(x => x.message).join(' ');
        } catch { /* response body was not JSON */ }
        setStatus(detail || `Could not send message (error ${response.status}). Please try again.`, 'error');
        console.error('Contact form failed:', response.status, detail);
      }
    } catch (error) {
      setStatus('Network error. Please check your connection and try again.', 'error');
      console.error('Contact form network error:', error);
    } finally {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}
