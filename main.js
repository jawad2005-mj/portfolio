/* ============================================
   MUHAMMAD JAWAD — ML ENGINEER PORTFOLIO
   Main JavaScript
   ============================================ */

// ---- NAVBAR ----
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('mobileToggle');
const navLinksContainer = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

mobileToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

function updateActiveNav() {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll and close mobile menu on nav click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
  });
});

// ---- TERMINAL ANIMATION ----
const terminalLines = [
  { type: 'prompt', text: '$ python train.py --model random_forest' },
  { type: 'out', text: 'Loading dataset... 284,807 transactions' },
  { type: 'out', text: 'Applying SMOTE oversampling...' },
  { type: 'out', text: 'Training model [████████████] 100%' },
  { type: 'out', text: '' },
  { type: 'prompt', text: '$ python evaluate.py' },
  { type: 'blue', text: 'Accuracy:  99.7% | Precision: 98.2%' },
  { type: 'blue', text: 'Recall:    96.8% | F1-Score:  97.5%' },
  { type: 'out', text: '' },
  { type: 'prompt', text: '$ uvicorn api:app --host 0.0.0.0' },
  { type: 'green', text: '✓ FastAPI server running on :8000' },
  { type: 'green', text: '✓ ML model loaded & ready for inference' },
];

let termIdx = 0;
let charIdx = 0;
let currentLineEl = null;
const termBody = document.getElementById('terminalBody');

function typeTerminal() {
  if (termIdx >= terminalLines.length) {
    // Add cursor blink then restart
    const cursorEl = document.createElement('span');
    cursorEl.className = 't-cursor';
    termBody.appendChild(cursorEl);
    setTimeout(() => {
      termBody.innerHTML = '';
      termIdx = 0;
      charIdx = 0;
      currentLineEl = null;
      typeTerminal();
    }, 4000);
    return;
  }

  const line = terminalLines[termIdx];

  if (charIdx === 0) {
    currentLineEl = document.createElement('span');
    currentLineEl.className = 't-line';
    if (line.type === 'prompt') currentLineEl.innerHTML = '<span class="t-prompt">❯ </span>';
    termBody.appendChild(currentLineEl);
    termBody.scrollTop = termBody.scrollHeight;
  }

  if (line.type === 'out' && line.text === '') {
    termIdx++;
    charIdx = 0;
    setTimeout(typeTerminal, 80);
    return;
  }

  const textSpan = currentLineEl.querySelector('.t-text') || (() => {
    const s = document.createElement('span');
    s.className = line.type === 'blue' ? 't-blue t-text' : line.type === 'green' ? 't-prompt t-text' : 't-cmd t-text';
    if (line.type === 'prompt') s.className = 't-cmd t-text';
    currentLineEl.appendChild(s);
    return s;
  })();

  if (charIdx < line.text.length) {
    textSpan.textContent += line.text[charIdx];
    charIdx++;
    setTimeout(typeTerminal, line.type === 'prompt' ? 45 : 20);
  } else {
    termIdx++;
    charIdx = 0;
    currentLineEl = null;
    setTimeout(typeTerminal, line.type === 'prompt' ? 400 : 80);
  }
}

setTimeout(typeTerminal, 1000);

// ---- EXPERIENCE TOGGLE ----
window.toggleExp = function(index) {
  const card = document.querySelector(`[data-index="${index}"]`).querySelector('.timeline-card');
  card.classList.toggle('expanded');
};

// Auto-expand first experience
setTimeout(() => {
  const firstCard = document.querySelector('[data-index="0"] .timeline-card');
  if (firstCard) firstCard.classList.add('expanded');
}, 500);

// ---- PROJECT FILTER ----
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat.includes(filter)) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.about-card, .project-card, .edu-card, .cert-card, .skill-category, .timeline-card, .contact-link').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ---- CONTACT FORM ----
window.handleSubmit = function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMsg');
  btn.innerHTML = '<span>SENDING...</span>';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<span>MESSAGE SENT ✓</span>';
    msg.textContent = 'Thank you! I will respond within 24 hours.';
    msg.className = 'form-msg success';
    setTimeout(() => {
      btn.innerHTML = '<span>SEND MESSAGE</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
      btn.disabled = false;
      msg.className = 'form-msg';
      e.target.reset();
    }, 3000);
  }, 1500);
};

// ---- CURSOR GLOW ----
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,168,255,0.06), transparent 70%);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%,-50%);
  transition: left 0.3s ease, top 0.3s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ---- PARTICLE DOTS ---- (subtle background particles)
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.4;';
document.body.insertBefore(canvas, document.body.firstChild);

const ctx = canvas.getContext('2d');
let particles = [];
let animFrame;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.4 + 0.1;
    this.color = Math.random() > 0.5 ? '0,168,255' : '0,229,160';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  // Draw connecting lines for nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,168,255,${0.08 * (1 - dist / 80)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  animFrame = requestAnimationFrame(animateParticles);
}
animateParticles();

// Reduce particles on mobile for performance
if (window.innerWidth < 768) {
  cancelAnimationFrame(animFrame);
  particles = particles.slice(0, 30);
  animateParticles();
}

// ---- TYPING EFFECT FOR HERO TAGLINE ----
const taglines = [
  'Engineering Intelligence.\nDeploying Impact.',
  'ML Pipelines.\nProduction-Grade.',
  'Data Science.\nReal Results.',
];
let taglineIdx = 0;
const taglineEl = document.querySelector('.hero-tagline');
if (taglineEl) {
  setInterval(() => {
    taglineIdx = (taglineIdx + 1) % taglines.length;
    taglineEl.style.opacity = '0';
    taglineEl.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      taglineEl.innerHTML = taglines[taglineIdx].replace('\n', '<br/>');
      taglineEl.style.opacity = '1';
      taglineEl.style.transform = 'translateY(0)';
    }, 400);
  }, 4000);
}

// Add CSS for tagline transition
const style = document.createElement('style');
style.textContent = '.hero-tagline { transition: opacity 0.4s ease, transform 0.4s ease; }';
document.head.appendChild(style);

console.log('%c Muhammad Jawad — ML Engineer & Data Scientist', 'color:#00a8ff;font-size:16px;font-weight:bold;');
console.log('%c jawad48332@gmail.com | linkedin.com/in/muhammad-jawadofficial', 'color:#00e5a0;font-size:12px;');
