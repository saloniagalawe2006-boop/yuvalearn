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