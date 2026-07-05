# Week 5 – Single Page Application Simulation

Built a small SPA that switches between Home, About, Projects and Contact sections without reloading the page. Uses the History API so the URL updates and back/forward buttons work properly too.

## Files to Create

- `index.html`
- `style.css`
- `script.js`

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SPA Simulation - Week 5</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <div class="logo">MyApp</div>
    <nav>
      <button class="menu-toggle" id="menuToggle" aria-expanded="false">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="/" data-route="/">Home</a></li>
        <li><a href="/about" data-route="/about">About</a></li>
        <li><a href="/projects" data-route="/projects">Projects</a></li>
        <li><a href="/contact" data-route="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="app">
    <!-- content gets injected here by script.js -->
  </main>

  <footer>
    <p>&copy; 2026 MyApp. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## CSS

```css
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
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.nav-links a.active {
  background: #e94560;
}

#app {
  min-height: 70vh;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.page-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.project-card {
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 400px;
  margin-top: 1.5rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.7rem;
  border: 1px solid #999;
  border-radius: 6px;
  font-family: inherit;
}

.contact-form button {
  padding: 0.7rem;
  background: #e94560;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.not-found {
  text-align: center;
  padding: 3rem 0;
}

footer {
  background: #1a1a2e;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
}

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
}
```

## JavaScript

```javascript
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navLinks');

const routes = {
  '/': () => `
    <h1 class="page-title">Home</h1>
    <p>Welcome to this SPA simulation. Use the nav bar above to move between pages — notice the URL changes but the page never fully reloads.</p>
  `,
  '/about': () => `
    <h1 class="page-title">About</h1>
    <p>This is a small single page application built with plain HTML, CSS and JavaScript. It uses the History API to manage routing on the client side.</p>
  `,
  '/projects': () => `
    <h1 class="page-title">Projects</h1>
    <div class="project-grid">
      <div class="project-card"><h3>Project One</h3><p>A short description of the first project.</p></div>
      <div class="project-card"><h3>Project Two</h3><p>A short description of the second project.</p></div>
      <div class="project-card"><h3>Project Three</h3><p>A short description of the third project.</p></div>
    </div>
  `,
  '/contact': () => `
    <h1 class="page-title">Contact</h1>
    <form class="contact-form" id="contactForm">
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  `
};

function renderRoute(path) {
  const page = routes[path];
  app.style.animation = 'none';
  void app.offsetWidth;
  app.style.animation = null;

  if (page) {
    app.innerHTML = page();
  } else {
    app.innerHTML = `
      <div class="not-found">
        <h1 class="page-title">404</h1>
        <p>Page not found. Try one of the links above.</p>
      </div>
    `;
  }

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.route === path);
  });

  if (path === '/contact') {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      app.innerHTML = `<h1 class="page-title">Thanks!</h1><p>Your message has been sent.</p>`;
    });
  }
}

function navigateTo(path) {
  history.pushState({}, '', path);
  renderRoute(path);
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.route);
    navList.classList.remove('active');
  });
});

window.addEventListener('popstate', () => {
  renderRoute(window.location.pathname);
});

menuToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

renderRoute(window.location.pathname);
```

## How the Routing Works

Each route is just a key in a `routes` object mapped to a function that returns some HTML as a string. When a nav link is clicked, instead of letting the browser follow the link normally, `e.preventDefault()` stops the reload and `navigateTo()` runs instead — this calls `history.pushState()` to update the URL, then calls `renderRoute()` to swap out what's inside `#app`.

For back/forward button support, there's a `popstate` listener — this fires whenever the user navigates using the browser's back/forward buttons, and it just re-renders whatever route matches the current URL.

If someone lands on a path that isn't in the `routes` object, it falls back to a simple 404 message instead of breaking.

## Transitions

Added a small fade-in animation on `#app` using `@keyframes`. Since just adding the class back wouldn't restart the animation, the JS resets it manually (`animation = 'none'` then forcing a reflow with `offsetWidth` before setting it back) so it replays every time the route changes instead of only running once on page load.

## Testing

Tested by clicking through all four nav links and checking the URL bar updates each time without a reload (no favicon spinner). Also tested browser back/forward buttons to make sure they load the right content, and typed an unknown path directly to confirm the 404 page shows up instead of a blank screen.

## Challenges

The animation only played once on the first load and not on later route changes — turns out browsers won't replay a CSS animation if the class/style hasn't actually changed, so had to force it to restart manually in JS.

Also had an issue where clicking a nav link would trigger a full page reload since it's a real anchor tag with an `href` — fixed with `e.preventDefault()` so JS handles the navigation instead of the browser.

Getting the active nav link to highlight correctly needed the current path compared against each link's `data-route` attribute every time a route renders, not just on click, so it also updates correctly on back/forward navigation.

## Description

For the final task I built a small single page application that switches between Home, About, Projects and Contact sections without reloading the page. Each route is a function that returns HTML for that section, and a router function swaps the content inside a main `#app` container based on which link was clicked.

Used the History API's `pushState` to update the URL without a full reload, and a `popstate` listener so the browser's back and forward buttons also work correctly and load the right content. Unknown paths fall back to a simple 404 message instead of showing a blank page.

Added a fade-in transition each time the content changes, which needed a small JS workaround since CSS won't replay an animation unless something actually changes, so the animation gets reset manually before each route renders.

Tested this by clicking through all the nav links, using the back/forward browser buttons, and manually typing in an unknown URL to check the 404 page works. Main issues along the way were the animation not replaying on later route changes, nav links causing a full page reload before I added `preventDefault`, and making sure the active link highlight stayed in sync with back/forward navigation and not just clicks.