# Week 4 – Performance & Accessibility

Took the earlier page and cleaned it up for performance and accessibility — added ARIA attributes, alt text, better contrast, and reduced some redundant CSS.

## Files to Create

- `index.html`
- `style.css`
- `report.md` (this file, or whatever you name your documentation)

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible Web Page - Week 4</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header class="navbar">
    <div class="logo">MyBrand</div>
    <nav aria-label="Main navigation">
      <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks">
        <span class="sr-only">Menu</span>
        ☰
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#main-content">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <section class="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">Fast and Accessible by Design</h1>
      <p>A page built with performance and screen reader users in mind.</p>
      <button class="cta-btn">Get Started</button>
    </section>

    <section class="services" id="services" aria-labelledby="services-heading">
      <h2 id="services-heading">Our Services</h2>
      <div class="grid-container">
        <article class="card">
          <h3>Web Design</h3>
          <p>Clean, modern interfaces built with accessibility in mind.</p>
        </article>
        <article class="card">
          <h3>Development</h3>
          <p>Fast, semantic, and well-structured websites.</p>
        </article>
        <article class="card">
          <h3>Optimization</h3>
          <p>Better load times through smaller assets and cleaner code.</p>
        </article>
      </div>
    </section>

    <section class="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">Gallery</h2>
      <div class="gallery-grid">
        <img src="images/photo1.jpg" alt="Team working together at a desk" loading="lazy" width="400" height="300">
        <img src="images/photo2.jpg" alt="Laptop showing a code editor" loading="lazy" width="400" height="300">
        <img src="images/photo3.jpg" alt="Whiteboard with a wireframe sketch" loading="lazy" width="400" height="300">
      </div>
    </section>

    <section class="form-section" id="contact" aria-labelledby="form-heading">
      <h2 id="form-heading">Contact Us</h2>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 MyBrand. All rights reserved.</p>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
```

## CSS

```css
:root {
  --dark: #1a1a2e;
  --accent: #e94560;
  --light-bg: #f4f4f4;
  --text: #2b2b2b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--dark);
  color: #fff;
  padding: 0.8rem 1.2rem;
  z-index: 200;
}

.skip-link:focus {
  left: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--dark);
  padding: 1rem 2rem;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--dark), #0f3460);
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-btn {
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.services,
.gallery,
.form-section {
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  text-align: left;
}

.card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.form-section form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.form-section label {
  font-weight: 600;
  margin-top: 0.5rem;
}

.form-section input,
.form-section textarea {
  padding: 0.7rem;
  border: 1px solid #999;
  border-radius: 6px;
  font-family: inherit;
}

.form-section button {
  margin-top: 1rem;
  padding: 0.7rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

footer {
  background: var(--dark);
  color: #fff;
  text-align: center;
  padding: 1.5rem;
}

@media (max-width: 480px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background: var(--dark);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}
```
javascript 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

## Performance Changes

- Added `loading="lazy"` on all gallery images so they only load when they're about to come into view.
- Set explicit `width`/`height` on images to stop layout shift while they load.
- Used CSS variables (`--dark`, `--accent`, etc.) instead of repeating the same hex codes everywhere, cuts down on redundant CSS.
- Combined shared styles for `.services`, `.gallery`, `.form-section` into one rule instead of writing padding/margin three separate times.
- Used `defer` on the script tag so it doesn't block HTML parsing.

## Accessibility Changes

- Added a **skip link** at the top so keyboard users can jump straight to main content instead of tabbing through the whole nav every time.
- Used proper **semantic tags** — `main`, `nav`, `article`, `footer` instead of generic divs.
- Added **ARIA attributes** — `aria-label` on nav, `aria-expanded`/`aria-controls` on the mobile menu button, `aria-labelledby` linking each section to its heading.
- All images have **descriptive alt text**, not just filenames or "image1".
- Every form input has a proper `<label for="">` instead of just a placeholder, since placeholders disappear once you start typing and screen readers don't always announce them well.
- Added a visible **focus outline** on all interactive elements so keyboard users can see what's selected.
- Checked color contrast — the accent/dark colors against white text pass basic contrast requirements.

## How I Tested This

Ran the page through **Lighthouse** in Chrome DevTools (Performance + Accessibility tabs) and used the **WAVE** browser extension to check for missing alt text, label issues, and contrast problems. Fixed things WAVE flagged one at a time and re-ran it to confirm the warnings were gone.

## Challenges

The mobile menu button wasn't announcing its state properly to screen readers at first — fixed by adding `aria-expanded` and toggling it true/false in JS whenever the menu opens or closes.

Also initially had placeholder text instead of real labels on the form, WAVE flagged this immediately as a "missing form label" issue, switched to proper `<label>` elements to fix it.

Images without explicit width/height were causing a layout shift while loading, which Lighthouse pointed out under Cumulative Layout Shift — fixed by adding the dimensions directly in the img tags.

## Description

For this task I optimized an existing static page for performance and accessibility. Added lazy loading and explicit width/height on images, used CSS variables to cut down repeated color values, combined some duplicate CSS rules, and deferred the JS file so it doesn't block rendering.

For accessibility, added a skip link at the top of the page, switched several divs to semantic tags like main, nav, article and footer, added ARIA attributes including aria-expanded on the mobile menu and aria-labelledby linking sections to their headings, wrote proper alt text for all images, and replaced placeholder-only form fields with real labels.

Tested everything using Lighthouse for performance/accessibility scoring and the WAVE extension to catch specific issues like missing labels and contrast problems. Main issues I ran into were the mobile menu not announcing its open/closed state to screen readers, form fields relying only on placeholders instead of labels, and images causing layout shift before they loaded — all three were flagged either by Lighthouse or WAVE and fixed based on what they pointed out.