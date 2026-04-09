// === HOME MENU BUTTON SCROLL ===
document.addEventListener('DOMContentLoaded', function () {
  const homeBtn = document.getElementById('homeMenuBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
// === ABOUT MODAL LOGIC (Who I Am stats) ===
document.addEventListener('DOMContentLoaded', function () {
  // Project data (from project cards)
  const projects = [
    {
      title: 'Freelance English Teacher Site',
      desc: 'A business website built for a freelance English teacher to advertise their services. Features a clean landing page, a services section, and a contact form — my first project built for a real client.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://kadys-english.pages.dev/',
      icon: '\uD83D\uDCDD'
    },
    {
      title: 'This Portfolio',
      desc: 'Designed and coded from scratch to practice modern HTML, CSS, and vanilla JavaScript — animations, responsive layout, and all. A project that\'s also the thing showing you the project.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/carlmasters02',
      icon: '\uD83E\uDDD1\u200D\uD83D\uDCBB'
    },
    {
      title: 'TabeTalk Beta (Builders Weekend 2026)',
      desc: 'Built with a 5-person team at Builders Weekend 2026, this AI-powered dining app uses voice samples and real-time voice recognition to track who ordered what, then auto-assigns check items after the bill is scanned so each guest can pay their share seamlessly.',
      tech: ['Voice AI', 'APIs', 'Real-time Processing'],
      link: null,
      icon: '\uD83C\uDF7D\uFE0F'
    }
  ];
  // Languages (from about)
  const languages = [
    { name: 'Python', desc: 'A versatile, beginner-friendly language used for web, data science, AI, and more.' },
    { name: 'C', desc: 'A foundational systems language, great for performance and understanding how computers work.' },
    { name: 'Java', desc: 'A widely-used language for enterprise, Android, and more.' },
    { name: 'HTML', desc: 'The markup language for structuring web pages.' },
    { name: 'CSS', desc: 'Styles web pages, making them beautiful and responsive.' },
    { name: 'JavaScript', desc: 'The language of the web, enabling interactivity and dynamic content.' }
  ];
  // Hackathons (from timeline)
  const hackathons = [
    {
      name: 'Builders Weekend 2026 Hackathon',
      desc: 'Built an AI-powered dining app that removes the chaos of splitting restaurant bills. Guests sign in, provide a voice sample, and the app listens in real time during ordering to identify who ordered each item. When the check arrives, the host scans the bill, costs are assigned automatically, and everyone pays their share hands-free.',
      tags: ['Voice AI', 'Real-time Recognition', 'Bill Splitting Automation', 'Team Collaboration'],
      team: 'Carl Masters, Bhushith Gujjala Hari, Kseniya Chadovich, Kevin Beutler, and Fangyan Fu.'
    },
    {
      name: 'UI/UX Hackathon — 1st Place',
      desc: 'Competed with a team in a UI/UX-focused hackathon hosted by Temple University Japan. Our team took first place by designing and prototyping a clean, user-centered interface concept under a tight time constraint.',
      tags: ['UI/UX Design', 'Prototyping', 'Teamwork'],
      team: 'Temple University Japan team.'
    }
  ];

  const aboutModal = document.getElementById('aboutModal');
  const aboutModalClose = document.getElementById('aboutModalClose');
  const aboutModalTitle = document.getElementById('aboutModalTitle');
  const aboutModalBody = document.getElementById('aboutModalBody');
  const aboutModalDetail = document.getElementById('aboutModalDetail');
  const aboutModalBack = document.getElementById('aboutModalBack');
  const aboutModalDetailTitle = document.getElementById('aboutModalDetailTitle');
  const aboutModalDetailDesc = document.getElementById('aboutModalDetailDesc');

  // Stat click handlers
  document.querySelectorAll('.about-stats .stat').forEach(stat => {
    stat.addEventListener('click', function () {
      const type = stat.getAttribute('data-stat');
      showAboutModal(type);
    });
    stat.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const type = stat.getAttribute('data-stat');
        showAboutModal(type);
      }
    });
  });

  function showAboutModal(type) {
    aboutModalDetail.style.display = 'none';
    aboutModalBody.style.display = 'block';
    aboutModalBody.innerHTML = '';
    if (type === 'projects') {
      aboutModalTitle.textContent = 'Real Projects';
      projects.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = 'about-modal-project-card';
        card.innerHTML = `<div class="about-modal-project-icon">${proj.icon}</div><div class="about-modal-project-title">${proj.title}</div><div class="about-modal-project-tech">${proj.tech.map(t=>`<span>${t}</span>`).join('')}</div>`;
        card.tabIndex = 0;
        card.onclick = () => showProjectDetail(i);
        card.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') showProjectDetail(i); };
        aboutModalBody.appendChild(card);
      });
    } else if (type === 'languages') {
      aboutModalTitle.textContent = 'Languages';
      languages.forEach((lang, i) => {
        const btn = document.createElement('button');
        btn.className = 'about-modal-lang-btn';
        btn.textContent = lang.name;
        btn.tabIndex = 0;
        btn.onclick = () => showLanguageDetail(i);
        btn.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') showLanguageDetail(i); };
        aboutModalBody.appendChild(btn);
      });
    } else if (type === 'hackathons') {
      aboutModalTitle.textContent = 'Hackathons';
      hackathons.forEach((hack, i) => {
        const btn = document.createElement('button');
        btn.className = 'about-modal-hack-btn';
        btn.textContent = hack.name;
        btn.tabIndex = 0;
        btn.onclick = () => showHackathonDetail(i);
        btn.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') showHackathonDetail(i); };
        aboutModalBody.appendChild(btn);
      });
    }
    aboutModal.style.display = 'flex';
    document.body.classList.add('modal-open');
  }

  function showProjectDetail(i) {
    const proj = projects[i];
    aboutModalBody.style.display = 'none';
    aboutModalDetail.style.display = 'block';
    aboutModalDetailTitle.textContent = proj.title;
    aboutModalDetailDesc.innerHTML = `<div style="margin-bottom:0.7em;">${proj.desc}</div><div><strong>Tech:</strong> ${proj.tech.join(', ')}</div>` + (proj.link ? `<div style="margin-top:0.7em;"><a href="${proj.link}" target="_blank" rel="noopener" style="color:#00ff41;">Project Link</a></div>` : '');
  }
  function showLanguageDetail(i) {
    const lang = languages[i];
    aboutModalBody.style.display = 'none';
    aboutModalDetail.style.display = 'block';
    aboutModalDetailTitle.textContent = lang.name;
    aboutModalDetailDesc.textContent = lang.desc;
  }
  function showHackathonDetail(i) {
    const hack = hackathons[i];
    aboutModalBody.style.display = 'none';
    aboutModalDetail.style.display = 'block';
    aboutModalDetailTitle.textContent = hack.name;
    aboutModalDetailDesc.innerHTML = `<div style="margin-bottom:0.7em;">${hack.desc}</div><div><strong>Tags:</strong> ${hack.tags.join(', ')}</div><div style="margin-top:0.7em;"><strong>Team:</strong> ${hack.team}</div>`;
  }

  aboutModalClose.onclick = closeAboutModal;
  aboutModalBack.onclick = function () {
    aboutModalDetail.style.display = 'none';
    aboutModalBody.style.display = 'block';
  };
  function closeAboutModal() {
    aboutModal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
  // Close on overlay click
  aboutModal.addEventListener('click', function (e) {
    if (e.target === aboutModal) closeAboutModal();
  });
  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (aboutModal.style.display === 'flex' && e.key === 'Escape') closeAboutModal();
  });
});
// === SKILL EXPLORE MODAL LOGIC ===
document.addEventListener('DOMContentLoaded', function () {
  // Skill data: category -> skill -> description
  const skillData = {
    'Languages': {
      'Python': 'A versatile, beginner-friendly language used for web, data science, AI, and more.',
      'C': 'A foundational systems language, great for performance and understanding how computers work.',
      'HTML': 'The markup language for structuring web pages.',
      'CSS': 'Styles web pages, making them beautiful and responsive.',
      'JavaScript': 'The language of the web, enabling interactivity and dynamic content.'
    },
    'Web': {
      'Responsive Design': 'Building sites that look great on any device or screen size.',
      'DOM Manipulation': 'Using JavaScript to change page content and structure on the fly.',
      'Flexbox / Grid': 'Modern CSS layout systems for flexible, powerful page layouts.',
      'Web Forms': 'Creating interactive forms for user input and data collection.'
    },
    'Tools': {
      'Git': 'Version control for tracking code changes and collaborating with others.',
      'GitHub': 'A platform for hosting code, managing projects, and collaborating.',
      'VS Code': 'A popular, extensible code editor for many languages.',
      'Terminal / CLI': 'Command-line tools for efficient development and system control.'
    },
    'Currently Learning': {
      'Basic Cybersecurity': 'Fundamentals of keeping systems and data safe from threats.',
      'Digital Privacy': 'Protecting personal information and understanding privacy tools.',
      'Operating Systems': 'How computers manage hardware, software, and resources.',
      'AI / Machine Learning': 'Building systems that learn from data and make predictions.',
      'Discrete Mathematics': 'Math for computer science: logic, sets, combinatorics, and more.',
      'Precalculus': 'Math foundations for calculus and advanced topics.',
      'Java': 'A widely-used language for enterprise, Android, and more.'
    }
  };

  const modal = document.getElementById('skillExploreModal');
  const modalClose = document.getElementById('skillExploreModalClose');
  const modalTitle = document.getElementById('skillExploreModalTitle');
  const modalBody = document.getElementById('skillExploreModalBody');
  const modalSkillDetail = document.getElementById('skillExploreModalSkillDetail');
  const modalBack = document.getElementById('skillExploreModalBack');
  const modalSkillTitle = document.getElementById('skillExploreModalSkillTitle');
  const modalSkillDesc = document.getElementById('skillExploreModalSkillDesc');

  // Open modal for category
  document.querySelectorAll('.skill-category').forEach(cat => {
    cat.addEventListener('click', function () {
      const category = cat.getAttribute('data-category');
      showSkillModal(category);
    });
    cat.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const category = cat.getAttribute('data-category');
        showSkillModal(category);
      }
    });
  });

  function showSkillModal(category) {
    modalTitle.textContent = category;
    modalBody.innerHTML = '';
    modalSkillDetail.style.display = 'none';
    modalBody.style.display = 'block';
    // Add skill items
    Object.keys(skillData[category]).forEach(skill => {
      const skillBtn = document.createElement('button');
      skillBtn.className = 'skill-explore-skill-btn';
      skillBtn.textContent = skill;
      skillBtn.setAttribute('data-skill', skill);
      skillBtn.onclick = function () {
        showSkillDetail(category, skill);
      };
      modalBody.appendChild(skillBtn);
    });
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function showSkillDetail(category, skill) {
    modalBody.style.display = 'none';
    modalSkillDetail.style.display = 'block';
    modalSkillTitle.textContent = skill;
    modalSkillDesc.textContent = skillData[category][skill];
  }

  modalClose.onclick = closeModal;
  modalBack.onclick = function () {
    modalSkillDetail.style.display = 'none';
    modalBody.style.display = 'block';
  };
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  // Close on overlay click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
});
// === TERMINAL EASTER EGG ===

(function() {
  const TRIGGER = 'hello';
  let buffer = '';
  let terminalOpen = false;
  let ignoreInput = false;

  // Listen for keypresses to trigger terminal
  document.addEventListener('keydown', function(e) {
    if (terminalOpen) return;
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.isContentEditable)) {
      buffer = '';
      return;
    }
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      buffer += e.key.toLowerCase();
      if (!TRIGGER.startsWith(buffer)) buffer = e.key.toLowerCase() === 'h' ? 'h' : '';
      if (buffer === TRIGGER) {
        buffer = '';
        showTerminal();
      }
    } else {
      buffer = '';
    }
  });

  // Add visible button to hero section
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('openTerminalBtn');
    if (btn) btn.addEventListener('click', function(e) {
      e.preventDefault();
      showTerminal();
    });
  });

  function showTerminal() {
    if (terminalOpen) return;
    terminalOpen = true;
    ignoreInput = false;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'terminal-overlay-bg';
    overlay.tabIndex = -1;

    // Terminal window
    const term = document.createElement('div');
    term.className = 'terminal-easter-egg';

    // Header
    const header = document.createElement('div');
    header.className = 'terminal-header';
    const title = document.createElement('span');
    title.className = 'terminal-title';
    title.textContent = 'CARL MASTERS OS v1.0';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'terminal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.title = 'Close terminal';
    header.appendChild(title);
    header.appendChild(closeBtn);
    term.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'terminal-body';
    body.tabIndex = 0;
    term.appendChild(body);

    overlay.appendChild(term);
    document.body.appendChild(overlay);

    // Focus for keyboard
    setTimeout(() => { body.focus(); }, 80);

    // Close logic
    function closeTerminal() {
      terminalOpen = false;
      overlay.remove();
    }
    closeBtn.onclick = closeTerminal;
    overlay.onclick = function(e) { if (e.target === overlay) closeTerminal(); };
    document.addEventListener('keydown', escListener);
    function escListener(e) { if (e.key === 'Escape' && terminalOpen) { closeTerminal(); document.removeEventListener('keydown', escListener); } }

    // Typewriter lines
    const lines = [
      '> Initializing Carl Masters OS v1.0...',
      '> Scanning visitor...',
      '> Identity: UNKNOWN',
      '> Clearance level: PENDING',
      '> Welcome, operator.',
      '> Type "help" for available commands.'
    ];
    let lineIdx = 0;
    let typing = true;
    let inputActive = false;

    function typeLine(line, cb) {
      const div = document.createElement('div');
      div.className = 'terminal-line';
      body.appendChild(div);
      let i = 0;
      function typeChar() {
        if (!typing) return;
        div.textContent = line.slice(0, i);
        if (i < line.length) {
          i++;
          setTimeout(typeChar, 18 + Math.random() * 22);
        } else {
          div.textContent = line;
          setTimeout(cb, 320);
        }
      }
      typeChar();
    }

    function typeAllLines() {
      if (lineIdx < lines.length) {
        typeLine(lines[lineIdx], () => { lineIdx++; typeAllLines(); });
      } else {
        typing = false;
        showInput();
      }
    }

    // Terminal input
    let inputPrompt, inputField, cursorSpan;
    function showInput() {
      inputActive = true;
      const inputLine = document.createElement('div');
      inputLine.className = 'terminal-input-line';
      inputPrompt = document.createElement('span');
      inputPrompt.className = 'terminal-input-prompt';
      inputPrompt.textContent = '>'; // prompt
      // Fake input for cursor positioning
      inputField = document.createElement('input');
      inputField.className = 'terminal-input';
      inputField.type = 'text';
      inputField.autocomplete = 'off';
      inputField.spellcheck = false;
      inputField.maxLength = 64;
      // Cursor
      cursorSpan = document.createElement('span');
      cursorSpan.className = 'terminal-cursor';
      cursorSpan.textContent = '_';
      // Container for input and cursor
      const inputWrap = document.createElement('span');
      inputWrap.style.display = 'inline-block';
      inputWrap.style.position = 'relative';
      inputWrap.appendChild(inputField);
      inputWrap.appendChild(cursorSpan);
      inputLine.appendChild(inputPrompt);
      inputLine.appendChild(inputWrap);
      body.appendChild(inputLine);

      // Focus input reliably on mobile and desktop
      function focusInputField() {
        // On mobile, a user gesture is required for keyboard
        setTimeout(() => {
          inputField.focus();
        }, 120);
      }
      focusInputField();
      scrollToBottom();

      // On mobile, tap anywhere on overlay or input should focus input
      overlay.addEventListener('touchend', function(e) {
        if (!inputField.disabled) {
          inputField.focus();
        }
      });
      inputField.addEventListener('touchend', function(e) {
        if (!inputField.disabled) {
          inputField.focus();
        }
      });

      // Style input to hide caret, cursor will follow

      inputField.style.caretColor = 'transparent';
      inputField.style.background = 'none';
      inputField.style.border = 'none';
      inputField.style.outline = 'none';
      inputField.style.color = '#00ff41';
      inputField.style.fontFamily = 'inherit';
      inputField.style.fontSize = '1.04rem';
      inputField.style.letterSpacing = '0.01em';
      inputField.style.width = '100%';
      // On mobile, make sure input is visible and not offscreen
      inputField.style.minHeight = '2.2em';
      inputField.style.touchAction = 'manipulation';

      // Cursor follows input position
      function updateCursor() {
        const val = inputField.value;
        // Create a dummy span to measure text width
        let dummy = inputWrap.querySelector('.terminal-cursor-dummy');
        if (!dummy) {
          dummy = document.createElement('span');
          dummy.className = 'terminal-cursor-dummy';
          dummy.style.visibility = 'hidden';
          dummy.style.position = 'absolute';
          dummy.style.left = '0';
          dummy.style.top = '0';
          dummy.style.whiteSpace = 'pre';
          dummy.style.fontFamily = 'inherit';
          dummy.style.fontSize = '1.04rem';
          dummy.style.letterSpacing = '0.01em';
          inputWrap.appendChild(dummy);
        }
        dummy.textContent = val;
        // Position cursorSpan after dummy
        cursorSpan.style.position = 'absolute';
        cursorSpan.style.left = dummy.offsetWidth + 'px';
        cursorSpan.style.top = '0';
        cursorSpan.style.display = 'inline-block';
      }
      updateCursor();
      inputField.addEventListener('input', updateCursor);
      inputField.addEventListener('keydown', updateCursor);

      inputField.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const val = inputField.value.trim();
          inputField.disabled = true;
          cursorSpan.style.display = 'none';
          handleCommand(val);
        }
      });
    }

    function scrollToBottom() {
      setTimeout(() => { body.scrollTop = body.scrollHeight; }, 10);
    }

    function printLine(text) {
      const div = document.createElement('div');
      div.className = 'terminal-line';
      div.textContent = text;
      body.appendChild(div);
      scrollToBottom();
    }

    function clearTerminal() {
      body.innerHTML = '';
    }

    function handleCommand(cmd) {
      inputActive = false;
      const lc = cmd.toLowerCase();
      if (lc === 'help') {
        printLine('about     - learn about Carl Masters');
        printLine('clear     - clear the terminal');
        printLine('exit      - close this terminal');
        printLine('skills    - list technical skills');
        printLine('location  - show current location');
        setTimeout(showInput, 320);
      } else if (lc === 'about') {
        printLine('Carl Masters: Computer Science student, web developer, and cybersecurity enthusiast.');
        setTimeout(showInput, 320);
      } else if (lc === 'clear') {
        clearTerminal();
        setTimeout(showInput, 120);
      } else if (lc === 'exit') {
        closeTerminal();
      } else if (lc === 'skills') {
        printLine('Python, C, Java, HTML, CSS, JavaScript, Git, Cybersecurity, AI/ML, Teamwork and collaboration, Leadership');
        setTimeout(showInput, 320);
      } else if (lc === 'location') {
        printLine('Tokyo, Japan - Temple University Japan');
        setTimeout(showInput, 320);
      } else if (lc.length > 0) {
        printLine('Unknown command: ' + cmd);
        setTimeout(showInput, 320);
      } else {
        setTimeout(showInput, 120);
      }
    }

    typeAllLines();
  }
})();
// === BINARY DECODE REVEAL ANIMATION ===
document.addEventListener('DOMContentLoaded', function () {
  const SECTIONS = Array.from(document.querySelectorAll('section'));
  const revealedSections = new Set();
  const binaryFont = "'JetBrains Mono', 'Fira Mono', 'Share Tech Mono', monospace";
  const binaryColor = '#00ff41';
  const binaryDuration = 900; // ms (for internal flashes)
  const binaryMin = 800, binaryMax = 1100;
  const threshold = 0.15;

  function createBinaryOverlay(section) {
    const overlay = document.createElement('div');
    overlay.className = 'binary-burst-overlay';
    // Always use section-relative overlay, never fixed
    if (section.id === 'contact') {
      const container = section.querySelector('.container');
      if (container) {
        overlay.style.position = 'absolute';
        overlay.style.top = container.offsetTop + 'px';
        overlay.style.left = container.offsetLeft + 'px';
        overlay.style.width = container.offsetWidth + 'px';
        overlay.style.height = container.offsetHeight + 'px';
      } else {
        overlay.style.position = 'absolute';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
      }
    } else {
      overlay.style.position = 'absolute';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
    }
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = 10000;
    overlay.style.background = 'rgba(0,0,0,0.92)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.overflow = 'hidden';
    overlay.style.fontFamily = binaryFont;
    overlay.style.fontWeight = 'bold';
    overlay.style.fontSize = 'clamp(1.1rem, 2.5vw, 2.2rem)';
    overlay.style.color = binaryColor;
    overlay.style.textShadow = '0 0 8px #00ff41, 0 0 2px #00ff41';
    overlay.style.userSelect = 'none';
    overlay.style.lineHeight = '1.25';
    overlay.style.letterSpacing = '0.08em';
    overlay.style.transition = 'opacity 0.12s';
    return overlay;
  }

  function randomBinaryString(len) {
    let s = '';
    for (let i = 0; i < len; ++i) s += Math.random() > 0.5 ? '1' : '0';
    return s;
  }

  function fillOverlayWithBinary(overlay, rows, cols) {
    overlay.innerHTML = '';
    for (let r = 0; r < rows; ++r) {
      const row = document.createElement('div');
      row.textContent = randomBinaryString(cols);
      overlay.appendChild(row);
    }
  }

  function getSectionRowsCols(section) {
    // Always use section's own size for overlay
    const style = getComputedStyle(section);
    const fontSize = parseFloat(style.fontSize) || 18;
    const h = section.offsetHeight;
    const w = section.offsetWidth;
    const rows = Math.max(3, Math.floor(h / (fontSize * 1.2)));
    const cols = Math.max(12, Math.floor(w / (fontSize * 0.65)));
    return [rows, cols];
  }

  function revealSectionWithBinary(section) {
    if (revealedSections.has(section)) return;
    revealedSections.add(section);
    // Safety: always show content after timeout
    let failSafeTimeout;
    try {
      // Hide content
      const children = Array.from(section.children);
      children.forEach(child => {
        child.style.transition = 'opacity 0.08s';
        child.style.opacity = '0';
      });
      // Overlay
      section.style.position = 'relative';
      const overlay = createBinaryOverlay(section);
      section.appendChild(overlay);
      // Fill overlay with binary
      const [rows, cols] = getSectionRowsCols(section);
      let running = true;
      let flashes = 0;
      function flash() {
        if (!running) return;
        fillOverlayWithBinary(overlay, rows, cols);
        flashes++;
        if (flashes < Math.floor(binaryDuration / 40)) {
          setTimeout(flash, 30 + Math.random() * 25);
        }
      }
      flash();
      // End burst after random duration
      const duration = Math.floor(binaryMin + Math.random() * (binaryMax - binaryMin));
      failSafeTimeout = setTimeout(() => {
        running = false;
        overlay.style.opacity = '0';
        setTimeout(() => {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 120);
        children.forEach(child => {
          child.style.opacity = '1';
        });
      }, duration);
    } catch (e) {
      // On error, show content immediately
      if (failSafeTimeout) clearTimeout(failSafeTimeout);
      Array.from(section.children).forEach(child => {
        child.style.opacity = '1';
      });
    }
  }

  // IntersectionObserver for all sections
  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealSectionWithBinary(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold });

  SECTIONS.forEach(section => {
    // Only animate if not already visible (for reload at top)
    if (section.getBoundingClientRect().top > window.innerHeight * 0.15) {
      sectionObserver.observe(section);
    } else {
      // If already visible, show content
      Array.from(section.children).forEach(child => {
        child.style.opacity = '1';
      });
    }
  });
});
// === Back to Top Button Logic ===
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;
  function handleScroll() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// === CUSTOM CURSOR DOT, TRAIL, AND RADAR PING ===
document.addEventListener('DOMContentLoaded', function () {

  // Only enable custom cursor on desktop (width > 768px)
  if (window.innerWidth <= 768) {
    // Remove custom cursor if present and restore default
    const cursor = document.getElementById('custom-cursor');
    if (cursor) cursor.style.display = 'none';
    document.body.classList.remove('cursor-none');
    return;
  }
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;
  document.body.classList.add('cursor-none');

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let cursorX = mouseX, cursorY = mouseY;
  let trailDots = [];
  const maxTrail = 15;

  // Animate cursor dot with lag
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Mouse move: update target, create trail dot
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Trail dot
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    document.body.appendChild(dot);
    // Animate fade and shrink
    setTimeout(() => {
      dot.style.opacity = '0';
      dot.style.transform = 'translate(-50%, -50%) scale(0.2)';
    }, 10);
    setTimeout(() => {
      if (dot.parentNode) dot.parentNode.removeChild(dot);
    }, 510);
    trailDots.push(dot);
    if (trailDots.length > maxTrail) {
      const old = trailDots.shift();
      if (old && old.parentNode) old.parentNode.removeChild(old);
    }
  });

  // Radar ping on click
  document.addEventListener('click', function (e) {
    const ping = document.createElement('div');
    ping.className = 'cursor-ping';
    ping.style.left = e.clientX + 'px';
    ping.style.top = e.clientY + 'px';
    document.body.appendChild(ping);
    ping.addEventListener('animationend', function () {
      if (ping.parentNode) ping.parentNode.removeChild(ping);
    });
  });

  // Safety: restore cursor if custom-cursor removed
  const observer = new MutationObserver(() => {
    if (!document.getElementById('custom-cursor')) {
      document.body.classList.remove('cursor-none');
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
// === CERTIFICATIONS SECTION ===
const certs = [];
const certGrid = document.getElementById('certGrid');
const certTabs = document.querySelectorAll('.cert-tab');
const certTabsHamburgerBtn = document.getElementById('certTabsHamburgerBtn');
const certTabsDropdown = document.getElementById('certTabsDropdown');
const certTabDropdownBtns = certTabsDropdown ? certTabsDropdown.querySelectorAll('.cert-tab-dropdown') : [];

// Hamburger menu logic for cert categories (mobile only)
if (certTabsHamburgerBtn && certTabsDropdown) {
  certTabsHamburgerBtn.addEventListener('click', () => {
    certTabsDropdown.classList.toggle('open');
  });
  certTabDropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certTabDropdownBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      certTabsDropdown.classList.remove('open');
      renderCertGrid(btn.dataset.category);
      // Sync desktop tabs
      certTabs.forEach(tab => {
        if (tab.dataset.category === btn.dataset.category) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    });
  });
}

// Show/hide hamburger or tabs based on screen size
function handleCertTabsDisplay() {
  const tabs = document.querySelector('.cert-tabs');
  const hamburger = document.querySelector('.cert-tabs-hamburger');
  if (window.innerWidth <= 600) {
    if (tabs) tabs.style.display = 'none';
    if (hamburger) hamburger.style.display = 'flex';
  } else {
    if (tabs) tabs.style.display = 'flex';
    if (hamburger) hamburger.style.display = 'none';
    if (certTabsDropdown) certTabsDropdown.classList.remove('open');
  }
}
window.addEventListener('resize', handleCertTabsDisplay);
document.addEventListener('DOMContentLoaded', handleCertTabsDisplay);

function renderCertGrid(category = 'All') {
  certGrid.innerHTML = '';
  let filtered = certs.filter(c => category === 'All' || c.category === category);
  if (filtered.length === 0) {
    // Show 6 placeholder cards
    for (let i = 0; i < 6; i++) {
      const card = document.createElement('div');
      card.className = 'cert-card placeholder';
      card.innerHTML = `
        <div class="lock-icon">&#128274;</div>
        <div class="classified">CLASSIFIED</div>
        <div class="pending">Certification pending upload</div>
      `;
      certGrid.appendChild(card);
    }
    return;
  }
  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.name}" />
      <div class="cert-name">${cert.name}</div>
      <div class="cert-issuer">${cert.issuer}</div>
    `;
    card.addEventListener('click', () => openCertModal(cert));
    certGrid.appendChild(card);
  });
}

certTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    certTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCertGrid(tab.dataset.category);
  });
});

// Modal logic
let certModal;
function openCertModal(cert) {
  if (!certModal) {
    certModal = document.createElement('div');
    certModal.className = 'cert-modal';
    certModal.innerHTML = `
      <div class="cert-modal-content">
        <button class="cert-modal-close" aria-label="Close">&times;</button>
        <img src="" alt="Certificate Preview" />
        <div class="cert-name"></div>
        <div class="cert-issuer"></div>
      </div>
    `;
    document.body.appendChild(certModal);
    certModal.querySelector('.cert-modal-close').onclick = closeCertModal;
    certModal.addEventListener('click', e => {
      if (e.target === certModal) closeCertModal();
    });
  }
  certModal.querySelector('img').src = cert.image;
  certModal.querySelector('img').alt = cert.name;
  certModal.querySelector('.cert-name').textContent = cert.name;
  certModal.querySelector('.cert-issuer').textContent = cert.issuer;
  certModal.classList.add('active');
}
function closeCertModal() {
  if (certModal) certModal.classList.remove('active');
}

// Initial render
if (certGrid) renderCertGrid();
// ===== Resume PDF Upload, Display, and Download =====
document.addEventListener('DOMContentLoaded', function () {
  const resumeInput = document.getElementById('resumeInput');
  const resumeViewer = document.getElementById('resumeViewer');
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');

  // Default: show the existing resume.pdf
  if (resumeViewer && downloadResumeBtn) {
    resumeViewer.src = 'resume.pdf';
    downloadResumeBtn.href = 'resume.pdf';
  }

  // If a new file is uploaded, show it instead (client-side only)
  if (resumeInput && resumeViewer && downloadResumeBtn) {
    resumeInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        resumeViewer.src = fileURL;
        downloadResumeBtn.href = fileURL;
      } else {
        alert('Please upload a valid PDF file.');
      }
    });
  }
});
// === HERO SECTION TYPING ANIMATION ===
document.addEventListener('DOMContentLoaded', function() {
  const typingElement = document.querySelector('.hero-typing');
  const cursorElement = document.createElement('span');
  cursorElement.className = 'typing-cursor';
  cursorElement.textContent = '|';
  if (typingElement) typingElement.appendChild(cursorElement);

  const phrases = [
    'COMPUTER SCIENCE STUDENT',
    'INTERNATIONAL STUDENT',
    'CYBERSECURITY RESEARCHER',
    'DATA PRIVACY ENTHUSIAST',
    'WEB DEVELOPER',
    'PROBLEM SOLVER',
    'ASPIRING CYBERSECURITY ANALYST',
    'ASPIRING SOFTWARE ENGINEER'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 70;
  let erasingDelay = 40;
  let newPhraseDelay = 1200;

  function type() {
    if (!typingElement) return;
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingElement.childNodes[0].textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(type, erasingDelay);
      }
    } else {
      typingElement.childNodes[0].textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, newPhraseDelay);
      } else {
        setTimeout(type, typingDelay);
      }
    }
  }

  // Initialize the span for text
  if (typingElement && typingElement.childNodes.length === 1) {
    const textSpan = document.createElement('span');
    typingElement.insertBefore(textSpan, cursorElement);
  }
  setTimeout(type, 800);
});

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const fontSize = 14;
let matrixColumns, matrixDrops;

function initMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  matrixColumns = Math.floor(canvas.width / fontSize);
  matrixDrops = Array(matrixColumns).fill(1);
}

initMatrix();

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < matrixDrops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff41';
    ctx.font = fontSize + 'px Share Tech Mono';
    ctx.fillText(char, i * fontSize, matrixDrops[i] * fontSize);

    if (matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrixDrops[i] = 0;
    }
    matrixDrops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  initMatrix();
});

/* =============================================
   CARL MASTERS PORTFOLIO — script.js
   ============================================= */

'use strict';

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
const syncNavbarScrollState = () => {
  if (navbar.classList.contains('menu-open')) return;
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', syncNavbarScrollState, { passive: true });
syncNavbarScrollState();

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const setActiveLink = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActiveLink, { passive: true });

/* ---- Mobile hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

const closeMobileMenu = () => {
  hamburger.classList.remove('open');
  navLinksEl.classList.remove('mobile-open');
  navbar.classList.remove('menu-open');
  document.body.style.overflow = '';
  syncNavbarScrollState();
};

hamburger.addEventListener('click', () => {
  const isOpening = !navLinksEl.classList.contains('mobile-open');
  if (isOpening) {
    hamburger.classList.add('open');
    navLinksEl.classList.add('mobile-open');
    navbar.classList.remove('scrolled');
    navbar.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    return;
  }
  closeMobileMenu();
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ---- Smooth-close mobile menu on outside click ---- */
document.addEventListener('click', e => {
  if (navLinksEl.classList.contains('mobile-open') &&
      !navLinksEl.contains(e.target) &&
      !hamburger.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ---- Rotating role text ---- */
const roles = [
  'Problem Solver',
  'Web Developer',
  'CS Student @ TUJ',
  'Aspiring Engineer',
  'Always Learning',
];
let roleIndex = 0;
const roleEl = document.getElementById('rotating-role');

const rotateRole = () => {
  roleEl.style.opacity = '0';
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.style.opacity = '1';
  }, 300);
};
setInterval(rotateRole, 2800);



/* ---- Animated counters (About stats) ---- */
const animateCounter = (el) => {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const step     = 16;
  const steps    = duration / step;
  let count      = 0;

  const timer = setInterval(() => {
    count++;
    el.textContent = Math.round((count / steps) * target);
    if (count >= steps) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, step);
};

/* ---- Scroll-reveal via IntersectionObserver ---- */
const observerOpts = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

/* Project cards stagger */
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
  revealObserver.observe(card);
});

/* Timeline items */
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.15}s`;
  revealObserver.observe(item);
});

/* Stat counters */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

/* ---- Contact form ---- */
const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  /* Basic validation */
  if (!name || !email || !message) {
    setStatus('Please fill in your name, email, and message.', 'error');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setStatus('Please enter a valid email address.', 'error');
    return;
  }

  const endpoint = form.getAttribute('action') || '';
  if (!endpoint || endpoint.includes('/yourFormId')) {
    setStatus('Form not configured yet. Add your Formspree form ID in index.html.', 'error');
    return;
  }

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled    = true;

  try {
    const formData = new FormData(form);
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Message sent! I\'ll get back to you soon.', 'success');
      form.reset();
    } else {
      setStatus('Could not send message. Please try again in a moment.', 'error');
    }
  } catch (error) {
    setStatus('Network error. Please check your connection and try again.', 'error');
  } finally {
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled    = false;
  }
});

function setStatus(msg, type) {
  formStatus.textContent  = msg;
  formStatus.className    = `form-status ${type}`;
}