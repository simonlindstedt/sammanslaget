function resizeCanvas(ratio) {
  const canvas = document.querySelector("canvas");
  let h = window.innerHeight - 64;
  let w = Math.floor(h * ratio);

  if (w > window.innerWidth) {
    w = window.innerWidth;
    h = Math.floor(w / ratio);
  }

  canvas.style.height = `${h}px`;
  canvas.style.width = `${w}px`;
}

function renderAboutMenu() {
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";

  aboutSection.innerHTML = `
      <nav>
        <h2>Creators</h2>
        <a href="#home">
          <button class="return">↑</button>
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
          <h2>Simon</h2>
          <h2>Linn</h2>
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
          button.style.backgroundColor = "black";
          button.style.transform = "scale(1)";
        }
      });

      if (active === window.location.hash) {
        button.style.backgroundColor = "grey";
        button.style.transform = "scale(1.05)";
      } else {
        button.style.backgroundColor = "black";
        button.style.transform = "scale(1)";
      }
    });
  });
  document.body.appendChild(aboutSection);
}
