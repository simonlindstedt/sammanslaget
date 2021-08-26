function ratioResize(ratio, element) {
  let h = window.innerHeight - 64;
  let w = Math.floor(h * ratio);

  if (w > window.innerWidth) {
    w = window.innerWidth;
    h = Math.floor(w / ratio);
  }

  element.style.height = `${h}px`;
  element.style.width = `${w}px`;
}

function renderAboutMenu() {
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";

  aboutSection.innerHTML = `
      <nav>
        <h2>Creators</h2>
        <a href="#home">
          <button class="return"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 780"><path d="M390 779c214.839 0 389-174.161 389-389S604.839 1 390 1 1 175.161 1 390s174.161 389 389 389z" fill="#E97936" stroke="#fff" stroke-miterlimit="10"/><path d="M634.87 318.89c-6.51-9.84-13.49-19.45-21.82-27.85-15.11-15.48-32.17-28.88-47.7-43.93-9.7-8.81-18.52-18.51-27.2-28.31-16.84-18.87-18.65-21.63-29-34.26-16.74-21.24-37.6-38.67-55.63-58.73-3.74-3.82-9.69-12.48-20.34-27.69-4.36-5.96-8.76-11.91-13.53-17.54 1.15 1.42 2.31 2.84 3.46 4.26-4.14-4.88-7.87-10.19-12.45-14.66-1.84-1.42-3.73-2.8-5.69-4.05-2.46-1.43-5.07-2.15-7.85-2.16-1.98-.26-3.93-.35-5.89.15-7.36.59-12.59 6.53-16.99 11.9-7.8 8.45-16.1 16.43-24.1 24.69-6.56 6.41-13.46 12.47-19.68 19.22-5.9 6.17-11.08 12.95-16.59 19.46-7.19 8.47-14.76 16.61-22.51 24.57-24.34 26.09-32.46 41.38-52.46 65.25-6.81 8.29-14.14 16.13-21.21 24.19-8.34 9.45-16.53 19.03-25.01 28.36-10.36 11.59-21.32 22.68-30.66 35.13 12.79-10.33 26.86-18.88 40.21-28.44 11-7.72 21.65-15.92 32.41-23.99 11.76-8.75 23.25-17.86 34.02-27.8 11.79-10.79 22.76-22.45 34.54-33.26 10.37-9.75 21.61-18.52 31.79-28.46 9.37-9.05 17.43-19.32 26.47-28.68 5.65-5.92 11.82-11.31 17.71-16.99 1.79-1.74 3.55-3.5 5.3-5.28-.47 3.53-.98 7.06-1.61 10.57-3.29 17.53-4.89 35.28-6.21 53.06-.75 7.68-1.93 15.31-3.11 22.94-8.17 46.36-7.96 93.56-7.67 140.47-.12 16.75.27 33.49.7 50.23.23 30.16 1.63 60.31 4.27 90.36.68 11.41 2.83 22.64 4.23 33.96 1.76 23.13 3.76 46.25 7 69.23 1.78-12.98 3.36-25.98 5.09-38.96 1.51-11.74 3.62-23.43 4.4-35.25.4-15.06 1.73-30.05 2.99-45.06 1.97-26.39 4.24-52.76 5.65-79.19 1.05-32.87.71-65.77.79-98.65-.37-28.33-.87-56.67-.29-85 .34-14.69-1.08-29.29-2.74-43.87-1.26-11.42-1.92-22.89-2.76-34.35-.4-6.24-1.19-12.44-1.88-18.65 3.29 4.71 6.51 9.47 9.6 14.32 17.91 29.39 43.59 52.78 66.96 77.71 11.98 12.88 23.81 25.96 37.34 37.26 24.32 20.77 38.26 29.89 72.29 46.78 10.35 4.96 20.67 10.01 30.65 15.68 8.61 5.15 17.15 11.07 24.66 16.69 2.04 1.55 4.2 2.94 6.52 4.02-2.62-2.79-4.43-6.18-6.47-9.4z" fill="#fff"/></svg></button>
        </a>
      </nav>
      <div id="card-grid">
        <a href="#web-developers" class="card">
          <h2>Web developers</h2>
        </a>
        <a href="#game-developers" class="card">
          <h2>Game developers</h2>
        </a>
        <a href="#game-artists" class="card">
          <h2>Game artists</h2>
        </a>
        <a href="#ux-designers" class="card">
          <h2>UX designers</h2>
        </a>
      </div>
      <div class="pages">
        <nav>
          <ul class="nav-items">
            <li class="nav-item">
              <a href="#web-developers">
                <button>Web developers</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="#game-developers">
                <button>Game developers</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="#game-artists">
                <button>Game artists</button>
              </a>
            </li>
            <li class="nav-item">
              <a href="#ux-designers">
                <button>UX designers</button>
              </a>
            </li>
          </ul>
        </nav>
        <div id="web-developers" class="page">
          <h1>Web developers</h1>
          <div class="presentation">
          <div class="presentation-text">
          <h2>Simon</h2>
          </div>
          <div class="presentation-text">
          <h2>Linn</h2>
          </div>
          </div>
        </div>
        <div id="game-developers" class="page">
          <h1>Game developers</h1>
          <h2>Jonatan</h2>
          <h2>Emmi</h2>
        </div>
        <div id="game-artists" class="page">
          <h1>Game artists</h1>
          <h2>Julia</h2>
        </div>
        <div id="ux-designers" class="page">
          <h1>UX designers</h1>
          <h2>Marcus</h2>
        </div>
      </div>
  `;

  const returnButton = aboutSection.querySelector("button.return");
  returnButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const navLinks = aboutSection.querySelectorAll("ul.nav-items li a");

  window.addEventListener("scroll", () => {
    navLinks.forEach((navLink) => {
      const active = navLink.attributes.href.nodeValue;
      const button = navLink.querySelector("button");

      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "grey";
        button.style.transform = "scale(1.03)";
      });
      button.addEventListener("mouseleave", () => {
        if (active !== window.location.hash) {
          button.style.backgroundColor = "var(--cardColor)";
          button.style.transform = "scale(1)";
        }
      });

      if (active === window.location.hash) {
        button.style.backgroundColor = "grey";
        button.style.transform = "scale(1.05)";
      } else {
        button.style.backgroundColor = "var(--cardColor)";
        button.style.transform = "scale(1)";
      }
    });
  });
  document.body.appendChild(aboutSection);
}
