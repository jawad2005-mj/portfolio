# Muhammad Jawad — ML Engineer & Data Scientist Portfolio

A premium dark-mode portfolio website built with HTML, CSS, and JavaScript.

---

## 🚀 FREE DEPLOYMENT GUIDE

### Option 1: Netlify Drop (Fastest — 30 seconds)

1. Go to **https://app.netlify.com/drop**
2. Drag and drop the entire `portfolio` folder onto the page
3. Netlify instantly gives you a live URL like `https://random-name.netlify.app`
4. **Custom domain:** In Netlify dashboard → Domain Settings → Add your own domain

---

### Option 2: GitHub Pages (Free, Permanent URL)

1. Create a free account at **https://github.com**
2. Create a new repository named: `muhammad-jawad-portfolio`
3. Upload all portfolio files to the repository root
4. Go to **Settings → Pages → Source → Deploy from branch → main**
5. Your site is live at: `https://YOUR_USERNAME.github.io/muhammad-jawad-portfolio`

---

### Option 3: Vercel (Best Performance)

1. Install Node.js from https://nodejs.org
2. Run: `npm install -g vercel`
3. Open terminal in the `portfolio` folder
4. Run: `vercel`
5. Follow prompts — get a live URL instantly
6. Free custom domain available: `jawad.vercel.app`

---

### Option 4: Surge.sh (Command Line, Instant)

```bash
npm install -g surge
cd portfolio
surge
```

Follow prompts → Get a free `.surge.sh` URL immediately.

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML — all sections
├── css/
│   └── style.css       # Complete styles with dark theme
├── js/
│   └── main.js         # Interactivity, terminal, animations
└── assets/
    ├── jawad.jpg        # Original photo
    └── jawad_enhanced.jpg  # Enhanced portrait (used in site)
```

---

## ✏️ Customization Guide

### Update Contact Links
In `index.html`, find the `#contact` section and update:
- Email: `jawad48332@gmail.com`
- Phone: `+92-341-8148332`
- LinkedIn: `linkedin.com/in/muhammad-jawadofficial`
- GitHub: `github.com/jawad2005-mj`

### Add Real Project Links
Find each `.project-card` in `index.html` and update:
```html
<a href="YOUR_GITHUB_REPO_URL" class="pact-btn pact-ghost">SOURCE CODE</a>
<a href="YOUR_LIVE_DEMO_URL" class="pact-btn pact-primary">LIVE DEMO</a>
```

### Change Colors
In `css/style.css`, update the `:root` variables:
```css
--blue: #00a8ff;      /* Primary accent */
--green: #00e5a0;     /* Secondary accent */
```

---

## 📬 Making the Contact Form Work

The form currently simulates submission. To make it functional:

### Option A: Formspree (Free, No Backend Needed)
1. Sign up at https://formspree.io
2. Create a new form
3. In `index.html`, change the form tag to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```
4. Remove the `onsubmit="handleSubmit(event)"` attribute
5. Emails go directly to `jawad48332@gmail.com`

### Option B: EmailJS (Free, 200 emails/month)
1. Sign up at https://emailjs.com
2. Follow their setup guide
3. Replace `handleSubmit` in `main.js` with their SDK

---

## 🌟 Features

- ✅ Premium dark glassmorphism design
- ✅ Animated particle network background
- ✅ Live terminal animation in hero
- ✅ Interactive experience timeline
- ✅ Filterable projects grid
- ✅ Scroll reveal animations
- ✅ Mobile responsive
- ✅ Rotating hero taglines
- ✅ Cursor glow effect
- ✅ Smooth scroll navigation
- ✅ Professional photo integration

---

## 📞 Support

Portfolio built for: **Muhammad Jawad**  
Email: jawad48332@gmail.com  
LinkedIn: linkedin.com/in/muhammad-jawadofficial
