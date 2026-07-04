# Week 2 Task – Implementation of Responsive Web Design

## Task Objective
The objective of this task was to create a fully responsive webpage from scratch that adapts seamlessly across desktop, tablet, and smartphone viewports. This was achieved using semantic HTML, CSS media queries, fluid grids, and fluid images.

---

## 1. Layout Planning

The webpage was structured into five main sections:
- **Navbar** – Logo and navigation links with a mobile hamburger menu
- **Hero Section** – Introductory heading, description, and call-to-action button
- **Services Section** – A fluid CSS grid of service cards
- **Gallery Section** – A fluid image grid demonstrating responsive images
- **Footer** – Contact/copyright information

Each section was designed with scalability in mind so that content reflows naturally instead of breaking at smaller widths.

---

## 2. HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Design - Week 2</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <div class="logo">MyBrand</div>
    <nav>
      <button class="menu-toggle" id="menuToggle">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h1>Building Responsive Experiences</h1>
    <p>A website that looks great on every device — desktop, tablet, and mobile.</p>
    <button class="cta-btn">Get Started</button>
  </section>

  <section class="services" id="services">
    <h2>Our Services</h2>
    <div class="grid-container">
      <div class="card">
        <h3>Web Design</h3>
        <p>Clean, modern, and user-friendly interfaces built with care.</p>
      </div>
      <div class="card">
        <h3>Development</h3>
        <p>Fast, scalable, and responsive websites using best practices.</p>
      </div>
      <div class="card">
        <h3>SEO Optimization</h3>
        <p>Helping your website rank better and reach more people.</p>
      </div>
      <div class="card">
        <h3>Maintenance</h3>
        <p>Ongoing support to keep your website running smoothly.</p>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <h2>Gallery</h2>
    <div class="gallery-grid">
      <img src="https://picsum.photos/400/300?1" alt="Gallery image 1">
      <img src="https://picsum.photos/400/300?2" alt="Gallery image 2">
      <img src="https://picsum.photos/400/300?3" alt="Gallery image 3">
      <img src="https://picsum.photos/400/300?4" alt="Gallery image 4">
    </div>
  </section>

  <footer id="contact">
    <p>&copy; 2026 MyBrand. All rights reserved.</p>
  </footer>

  <script>
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  </script>

</body>
</html>
```

---

## 3. CSS Code (style.css)

```css
/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* ===== NAVBAR ===== */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a2e;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
}

/* ===== HERO ===== */
.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #16213e, #0f3460);
  color: #fff;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.cta-btn {
  background: #e94560;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
}

/* ===== SERVICES (Fluid Grid) ===== */
.services {
  padding: 4rem 2rem;
  text-align: center;
}

.services h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #f4f4f4;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* ===== GALLERY (Fluid Images) ===== */
.gallery {
  padding: 4rem 2rem;
  text-align: center;
  background: #f9f9f9;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  object-fit: cover;
}

/* ===== FOOTER ===== */
footer {
  background: #1a1a2e;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
}

/* ===================================
   MEDIA QUERIES - RESPONSIVE BEHAVIOR
   =================================== */

/* Tablet: 768px and below */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

/* Mobile: 480px and below */
@media (max-width: 480px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background: #1a1a2e;
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

  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .cta-btn {
    width: 100%;
  }

  .services, .gallery {
    padding: 2.5rem 1rem;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }
}
```

---

## 4. Techniques Used

### Fluid Grid System
`grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` was used for both the services and gallery sections. This allows the number of columns to adjust automatically based on available screen width, without needing a separate media query rule for every possible screen size.

### Fluid Images
All gallery images use `width: 100%; height: auto;` combined with `object-fit: cover`, so they scale proportionally within their container instead of overflowing or becoming distorted on smaller screens.

### Media Queries
Two breakpoints were implemented:
- **768px (Tablet):** Font sizes and grid spacing were reduced for better readability on medium screens.
- **480px (Mobile):** The navigation collapses into a hamburger icon, cards stack into a single column, and hero padding is reduced.

### Mobile Navigation
A hamburger menu toggle was implemented using JavaScript to show/hide navigation links on smaller screens, improving usability where horizontal space is limited.

---

## 5. Testing

The website was tested using Chrome DevTools' Device Toolbar across multiple presets (iPhone SE, iPad Air, and custom responsive widths) to confirm the layout adjusted smoothly at each breakpoint without visual glitches, overflow, or broken elements.

**Behavior observed at different breakpoints:**
- **Desktop (>768px):** Full navigation bar visible, 4-column service grid, 2–4 column image gallery.
- **Tablet (481px–768px):** Slightly reduced font sizes, grid adjusts to 2–3 columns automatically.
- **Mobile (≤480px):** Hamburger menu replaces nav links, all grids collapse to a single column, buttons become full-width.

---

## 6. Challenges Faced and Solutions

| Challenge | Solution |
|---|---|
| Gallery images were overflowing their containers on smaller screens | Applied `width: 100%; height: auto;` and `object-fit: cover` to keep images contained and proportionally scaled |
| Fixed-column grids looked broken on tablets | Replaced fixed columns with `repeat(auto-fit, minmax())` so the grid adjusts fluidly without extra media queries |
| Hamburger menu required interactivity beyond CSS | Added a small JavaScript snippet to toggle a `.active` class on click |
| Balancing spacing/font sizes across three breakpoints | Iteratively tested using DevTools and adjusted `rem` values until spacing felt natural at each size |

---

## 7. Conclusion

The final website adapts smoothly across desktop, tablet, and mobile devices through a combination of fluid grids, flexible images, semantic HTML, and targeted CSS media queries. This task strengthened my understanding of responsive design principles and practical debugging using browser developer tools.

---

## 8. Submission Description

This submission demonstrates the implementation of a fully responsive website built from scratch as part of the Week 2 internship task. The primary focus was on ensuring the layout adapts seamlessly across desktop, tablet, and smartphone viewports using modern CSS techniques including media queries, fluid grids, and flexible images.

The website consists of a sticky navigation bar with a collapsible hamburger menu for mobile devices, a hero section introducing the website's purpose, a services section built using a fluid CSS grid that automatically adjusts the number of columns based on available screen width, an image gallery demonstrating fluid image scaling, and a footer with contact information.

Rather than relying solely on fixed breakpoints, the services and gallery sections use the `repeat(auto-fit, minmax())` grid technique, allowing the layout to reflow naturally without requiring separate rules for every possible screen size. All images were made fluid using percentage-based widths so they scale proportionally without distortion or overflow on any device.

Two major media query breakpoints were implemented at 768px and 480px to handle tablet and mobile-specific adjustments, including font size reduction, spacing changes, and activation of the mobile hamburger menu via JavaScript.

The website was tested extensively using Chrome DevTools' responsive design mode across multiple device presets to confirm consistent behavior. This documentation explains the layout planning process, the specific responsive techniques used, and the challenges encountered — such as fixing image overflow issues and implementing smooth mobile navigation toggling — along with the solutions applied to resolve them.