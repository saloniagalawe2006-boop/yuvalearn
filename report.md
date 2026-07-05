# Week 1 – Wireframe to Static Web Page

Converted the given wireframe into a static page using HTML and CSS. Page has a header with nav, a hero section, three cards, and a footer.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <nav>
      <div class="logo">MyLogo</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h1>Welcome to My Website</h1>
    <p>This is a short description matching the wireframe.</p>
  </section>

  <section class="content">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </section>

  <footer>
    <p>&copy; 2026 My Website. All rights reserved.</p>
  </footer>

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
  font-family: Arial, sans-serif;
  color: #333;
}

header {
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: #f4f4f4;
}

.content {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: #eee;
  padding: 2rem;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: #fff;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .content {
    flex-direction: column;
  }
}
```

## Layout & Design Choices

Split the wireframe into 4 parts — header, hero, cards, footer. Used `header`, `nav`, `section`, `footer` tags instead of just divs everywhere. Dark header/footer with a lighter background in between for contrast. Cards use flexbox so they stay evenly spaced and wrap on smaller screens.

## Responsiveness

Added one media query at 768px — nav stacks vertically and cards go into a single column below that width. Tested by resizing the browser and using DevTools' device toolbar.

## Challenges

Getting the cards to space out evenly took a bit of fiddling with flexbox before landing on `flex: 1` with a `min-width`. Also had to double check the nav didn't break awkwardly on tablet-sized screens.

## Description

Built a static page based on the given wireframe using HTML and CSS. It has a header with a logo and nav links, a hero section with a heading and short text, three cards in a row, and a footer.

Used semantic tags like header, nav, section and footer instead of divs. Cards are laid out with flexbox so they space out evenly and wrap on smaller screens. Added one media query at 768px so the nav stacks and cards go single-column on mobile.

Tested it by resizing the browser and checking it in DevTools. Main challenge was getting the card spacing to look right with flexbox, took a couple tries with flex and min-width before it looked good.