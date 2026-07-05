# Week 3 – JavaScript Interactivity

Took the static page from before and added some interactive features using plain JavaScript — a mobile nav toggle, a tab switcher, a simple form validation, and a "read more" expandable card.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Page - Week 3</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <div class="logo">MyBrand</div>
    <button class="menu-toggle" id="menuToggle">☰</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="#">Home</a></li>
      <li><a href="#tabs">Tabs</a></li>
      <li><a href="#form">Contact</a></li>
    </ul>
  </header>

  <section class="hero">
    <h1>Interactive Web Page</h1>
    <p>Click around — tabs, a form, and an expandable card all work below.</p>
  </section>

  <section class="tabs-section" id="tabs">
    <div class="tab-buttons">
      <button class="tab-btn active" data-tab="tab1">Overview</button>
      <button class="tab-btn" data-tab="tab2">Features</button>
      <button class="tab-btn" data-tab="tab3">Pricing</button>
    </div>
    <div class="tab-content active" id="tab1">
      <p>This is the overview tab. Click the other buttons to switch content.</p>
    </div>
    <div class="tab-content" id="tab2">
      <p>Here's where the features would be listed out.</p>
    </div>
    <div class="tab-content" id="tab3">
      <p>Pricing details would go here.</p>
    </div>
  </section>

  <section class="card-section">
    <div class="expand-card">
      <h3>About This Project</h3>
      <p class="card-text short">This is a short preview of the text...</p>
      <p class="card-text full hidden">This is the full version of the text that shows up once you click Read More. It goes into more detail about the project and explains things a bit further than the short preview does.</p>
      <button class="read-more-btn">Read More</button>
    </div>
  </section>

  <section class="form-section" id="form">
    <h2>Contact Form</h2>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Your Name">
      <span class="error" id="nameError"></span>

      <input type="email" id="email" placeholder="Your Email">
      <span class="error" id="emailError"></span>

      <textarea id="message" placeholder="Your Message"></textarea>
      <span class="error" id="messageError"></span>

      <button type="submit">Send</button>
      <p class="success hidden" id="successMsg">Message sent!</p>
    </form>
  </section>

  <footer>
    <p>&copy; 2026 MyBrand. All rights reserved.</p>
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
  background: linear-gradient(135deg, #16213e, #0f3460);
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tabs-section {
  padding: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 6px;
}

.tab-btn.active {
  background: #e94560;
  color: #fff;
}

.tab-content {
  display: none;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.tab-content.active {
  display: block;
}

.card-section {
  padding: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.expand-card {
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 10px;
}

.hidden {
  display: none;
}

.read-more-btn {
  margin-top: 0.8rem;
  padding: 0.5rem 1.2rem;
  border: none;
  background: #1a1a2e;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.form-section {
  padding: 3rem 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.form-section h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}

#contactForm {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

#contactForm input,
#contactForm textarea {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
}

#contactForm button {
  padding: 0.7rem;
  background: #e94560;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
}

.error {
  color: #e94560;
  font-size: 0.85rem;
  min-height: 1rem;
}

.success {
  color: green;
  text-align: center;
  margin-top: 0.5rem;
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
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

const readMoreBtn = document.querySelector('.read-more-btn');
const shortText = document.querySelector('.card-text.short');
const fullText = document.querySelector('.card-text.full');

readMoreBtn.addEventListener('click', () => {
  const isHidden = fullText.classList.contains('hidden');
  fullText.classList.toggle('hidden');
  shortText.classList.toggle('hidden');
  readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
});

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (messageInput.value.trim() === '') {
    document.getElementById('messageError').textContent = 'Message can\'t be empty';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  if (valid) {
    successMsg.classList.remove('hidden');
    form.reset();
    setTimeout(() => successMsg.classList.add('hidden'), 3000);
  }
});
```

## What's Interactive Here

- **Mobile nav toggle** – hamburger button shows/hides the nav links on small screens.
- **Tabs** – clicking a tab button swaps which content block is visible using an active class, no page reload.
- **Read more card** – toggles between a short and full version of the text on click, button text also changes.
- **Form validation** – checks name, email format, and message aren't empty before "sending", shows inline error messages, and a success message that disappears after 3 seconds.

## Why I Built It This Way

Used `classList.toggle`/`add`/`remove` everywhere instead of manually setting styles in JS — keeps the JS logic separate from how things look, which stays in CSS. For the tabs, used a `data-tab` attribute on each button so one click handler works for all of them instead of writing separate functions per tab.

For form validation, kept it simple with a regex check for email and just checked empty strings for the other fields rather than pulling in a validation library, since the task didn't need anything that heavy.

## Challenges

The tab switching didn't work properly at first because I was only removing the active class from buttons but not from the content divs, so multiple tabs stayed visible at once — fixed by looping through both button and content lists together.

Also had an issue where the success message stayed on screen permanently, added a `setTimeout` to hide it after a few seconds.

## Description

For this task I added JavaScript interactivity to a static page — a mobile nav toggle, a tab switcher, a read more/less expandable card, and a contact form with validation.

The tabs work by adding/removing an active class on click using a data attribute to match buttons to their content, so one event listener handles all three tabs instead of separate code for each. The read more card toggles between a short and full paragraph and updates the button text based on state.

For the form, I check that the name and message fields aren't empty and that the email matches a basic regex pattern, show error messages under each field if something's wrong, and show a success message for a few seconds if everything passes.

Main issue I ran into was the tabs not switching properly at first since I forgot to remove the active class from the content divs, not just the buttons — fixed once I looped through both together. Also added a timeout to auto-hide the success message instead of it sitting there forever.