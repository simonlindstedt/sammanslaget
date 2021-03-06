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
  <div style="display: flex; align-items: center">
    <h2>Skapare från</h2>
    <a class="yrgo" href="https://www.yrgo.se/" target="_blank"
      ><img src="./assets/icons/yrgo.png"
    /></a>
  </div>
  <button class="return">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1144 1144">
      <path
        d="M572 1143.42c315.587 0 571.42-255.833 571.42-571.42S887.587.58 572 .58.58 256.413.58 572 256.413 1143.42 572 1143.42z"
        fill="#E97936"
        stroke="#fff"
        stroke-miterlimit="10"
      />
      <path
        d="M805.19 360.89c-6.51-9.84-13.49-19.45-21.82-27.85-15.11-15.48-32.17-28.88-47.7-43.93-9.7-8.81-18.52-18.51-27.2-28.31-16.84-18.87-18.65-21.63-29-34.26-16.74-21.24-37.6-38.67-55.63-58.73-3.74-3.82-9.69-12.48-20.34-27.69-4.36-5.96-8.76-11.91-13.53-17.54 1.15 1.42 2.31 2.84 3.46 4.26-4.14-4.88-7.87-10.19-12.45-14.66-1.84-1.42-3.73-2.8-5.69-4.05-2.46-1.43-5.07-2.15-7.85-2.16-1.98-.26-3.93-.35-5.89.15-7.36.59-12.59 6.53-16.99 11.9-7.8 8.45-16.1 16.43-24.1 24.69-6.56 6.41-13.46 12.47-19.68 19.22-5.9 6.17-11.08 12.95-16.59 19.46-7.19 8.47-14.76 16.61-22.51 24.57-24.34 26.09-32.46 41.38-52.46 65.25-6.81 8.29-14.14 16.13-21.21 24.19-8.34 9.45-16.53 19.03-25.01 28.36-10.36 11.59-21.32 22.68-30.66 35.13 12.79-10.33 26.86-18.88 40.21-28.44 11-7.72 21.65-15.92 32.41-23.99 11.76-8.75 23.25-17.86 34.02-27.8 11.79-10.79 22.76-22.45 34.54-33.26 10.37-9.75 21.61-18.52 31.79-28.46 9.37-9.05 17.43-19.32 26.47-28.68 5.65-5.92 11.82-11.31 17.71-16.99 1.79-1.74 3.55-3.5 5.3-5.28-.47 3.53-.98 7.06-1.61 10.57-3.29 17.53-4.89 35.28-6.21 53.06-.75 7.68-1.93 15.31-3.11 22.94-8.17 46.36-7.96 93.56-7.67 140.47-.12 16.75.27 33.49.7 50.23.23 30.16 1.63 60.31 4.27 90.36.68 11.41 2.83 22.64 4.23 33.96 1.76 23.13 3.76 46.25 7 69.23 1.78-12.98 3.36-25.98 5.09-38.96 1.51-11.74 3.62-23.43 4.4-35.25.4-15.06 1.73-30.05 2.99-45.06 1.97-26.39 4.24-52.76 5.65-79.19 1.05-32.87.71-65.77.79-98.65-.37-28.33-.87-56.67-.29-85 .34-14.69-1.08-29.29-2.74-43.87-1.26-11.42-1.92-22.89-2.76-34.35-.4-6.24-1.19-12.44-1.88-18.65 3.29 4.71 6.51 9.47 9.6 14.32 17.91 29.39 43.59 52.78 66.96 77.71 11.98 12.88 23.81 25.96 37.34 37.26 24.32 20.77 38.26 29.89 72.29 46.78 10.35 4.96 20.67 10.01 30.65 15.68 8.61 5.15 17.15 11.07 24.66 16.69 2.04 1.55 4.2 2.94 6.52 4.02-2.62-2.79-4.43-6.18-6.47-9.4z"
        fill="#292121"
      />
      <path
        d="M410.12 751.17c-31.07 3.87-53.02 7.21-80.7 12.85-9.49 1.94-18.94 4.15-28.3 6.65-.2-1.13-.39-2.27-.59-3.4-.22 1.24-.43 2.49-.65 3.73-20.7 5.59-41.01 12.59-60.65 21.27-17.41 7.75-34.21 16.79-50.79 26.17 18.93-3.26 37.72-7.27 56.54-11.13 16.96-3.45 34-6.65 50.81-10.79-3.94 27.11-6.54 54.42-6.94 81.8-.09 19.26 1.39 38.48 3.37 57.62 1.42 13.83 2.74 27.68 4.86 41.42.49 3.27 1.02 6.54 1.72 9.77.6-3.29 1.38-6.54 2.11-9.81 8.52-35.04 11.83-71.23 11.16-107.25-.78-25.42-3.42-50.75-7.16-75.91 1.79-.48 3.57-.96 5.35-1.47 25.08-7.15 49.63-16.25 73.27-27.25 7.96-3.73 15.82-7.69 23.46-12.06 1.41-.79 2.83-1.55 4.27-2.28-.37.02-.76.05-1.14.07zM545.93 911.98c-.4-2.79-.79-5.61-1.47-8.36-1.76-5.08-4.2-9.96-7.15-14.45-2.31-3.51-5.01-6.78-7.85-9.87-3.02-3.02-6.57-5.44-10.03-7.93-8.16-5.83-17.06-10.61-26.74-13.36-8.61-2.59-17.36-4.81-26.35-5.47-9.51-.94-19.09.09-28.49 1.63 3.17.48 8.1 1.03 11.78 2.05 4.2 1.13 7.04 1.93 9.88 2.94-1.76-.2-3.53-.36-5.31-.45-9.65-.05-19.47 1.08-28.71 3.95-13.85 5.25-26.79 14.73-32.52 28.8-3.58 8.11-5.12 16.85-5.69 25.65-.67 6.66-.59 13.36.87 19.91.7 4.11 2.25 8.01 3.96 11.79 2.21 4.97 4.49 9.99 7.84 14.31 4.9 6.83 11.69 11.83 18.75 16.22 8.03 4.9 17.04 7.92 25.92 10.9 6.92 2.04 14.15 2.46 21.3 3.04 5.39.58 10.74-.38 16.02-1.35 8.76-1.7 17.43-4.66 24.82-9.74 8.26-5.83 16.12-12.4 22.01-20.7 4.04-5.34 8.04-10.81 10.63-17.03 2.04-4.89 4.1-9.81 5.46-14.94 1.3-5.71 1.74-11.71 1.07-17.54zm-50.68 33.58c-.56.42-1.11.84-1.68 1.25-3.12 2.27-6.33 4.47-9.75 6.29-3.76 1.4-7.68 2.35-11.58 3.25-.52.07-1.03.13-1.55.18-4.1.26-8.21.1-12.31-.15-3.5-.47-6.95-1.28-10.33-2.28-2.49-.77-5.01-1.49-7.48-2.33-2.17-.87-4.3-1.84-6.38-2.89-2.09-1.08-4.17-2.2-6.15-3.47-1.34-1.06-2.6-2.22-3.77-3.47-.45-.59-.91-1.16-1.34-1.76-2.18-3.1-4.17-6.35-5.88-9.74-.84-2.14-1.5-4.35-1.99-6.6-.43-3.15-.72-6.32-.91-9.49-.15-3.3-.22-6.62-.04-9.92.33-2.63.82-5.23 1.57-7.77.81-1.93.03-1.78 3.53-7.34 10.08-12.59 19.53-16.64 38.35-21.13 4.51-.67 11.53-.99 18.76-1.1 7.57 4.28 15.32 9.3 16.35 10.34 5.03 4.07 9.45 8.83 13.77 13.63.31.36.6.72.91 1.08 1.04 1.33 2.02 2.7 2.9 4.13 3.11 5.82 1.75 2.11 4.98 11.68.13.46.25.92.37 1.38.11 1.46.06 2.92.02 4.38 0 .09-.01.19-.02.28-.26 1.95-.66 3.89-1.24 5.77-.18.41-.35.83-.54 1.24-1.96 4.06-4.16 8.01-6.65 11.77-2.2 2.79-4.63 5.38-7.02 8-1.56 1.66-3.18 3.27-4.9 4.79zM698.15 857.38c-2.39-9.95-6.63-19.56-13.21-27.46-7.05-9.7-17.06-16.68-27.82-21.73-8.64-4.08-17.82-7.17-27.44-7.56-8.66-.79-17.32.43-25.9 1.54-8.13 1.25-16.49 2.3-24.07 5.66-6.07 2.67-11.96 5.81-17.29 9.77-4.99 3.28-9.2 7.8-10.74 13.7-1.2 4.3-1.51 9.09-.06 13.36 1.33 2.76 3.21 5.24 4.76 7.88-.68-3.01-1.91-5.94-2.24-9 .14-3.49 1.1-6.26 2.67-9.1 2.18-3.86 5.19-6 8.54-7.15 3.92-1.53 7.92-2.85 12.03-3.8 7.94-2.02 13.01-2.42 28.25-1.32 12.03 1.12 10.18.28 22.94 3.3 1 .28 1.99.6 2.98.93 5.7 2.3 10.95 5.57 16 9.07.7.51 1.4 1.02 2.08 1.56 2.58 2.04 5.02 4.28 7.18 6.77 1.29 1.71 2.51 3.47 3.66 5.28 1.29 1.99 2.5 4.04 3.55 6.16.2.49.4.99.59 1.49 1.45 4.12 2.69 8.33 3.67 12.59.21 2.08.24 4.18.14 6.27-.16 1.21-.37 2.41-.68 3.58-1.3 2.91-2.98 5.63-4.8 8.25-.31.45-.62.89-.93 1.34-1.57 2.12-3.2 4.21-4.93 6.2-1.99 2.3-4.27 4.33-6.57 6.32-4.37 3.54-3.5 2.79-6.69 5.27-5.3 3.96-10.77 7.78-16.69 10.76-3.05 1.2-6.27 1.91-9.48 2.56-8.28 1.69-6.29 1.19-14.04 2.36-1.69.24-3.37.48-5.07.71-2.71-14.04-7.6-27.55-13.24-40.67-3.59-8.04-7.45-15.95-11.94-23.53-2.73-4.83-5.86-9.43-9.64-13.49 2.01 5.2 3.29 10.61 4.28 16.09 1.67 8.19 3.24 18.02 4.26 23.97 1.52 9.66 3.82 26.14 5.32 40.48-4.94.71-9.86 1.46-14.72 2.33-2.08.37-4.17.75-6.24 1.14 4.62.55 9.24 1.22 13.83 1.98 2.59.44 5.19.86 7.79 1.28.12 1.28.22 2.54.32 3.75 2.01 20.66 5.81 41.11 7.57 61.8 1.17 13.54 2.13 27.09 3.68 40.59.08.77.17 1.54.25 2.31.1-.35.2-.69.29-1.04 2.22-7.78 4.4-15.57 6.3-23.43 6.62-26.31 7.85-53.9 4.04-80.74 2.98.36 5.96.7 8.94 1 8.48.68 17.14 1.43 25.49-.56 7.4-1.89 14.42-5.15 21.26-8.49 7.92-4.03 15.7-8.48 22.24-14.57 8.12-7.69 15.98-16.46 19.37-27.32 2.61-9.24 2.63-19.16.16-28.44zM871.13 829.03c-2.21-5.14-4.4-10.3-7.03-15.25-4.78-8.48-11.04-16.14-17.84-23.09-9.44-8.84-20.89-15.85-33.59-18.71-6.86-1.25-13.9-1.41-20.8-.35-2.39.33-4.76.7-7.13 1.13 1.04-.18 2.07-.35 3.11-.53-1.14.19-2.29.39-3.43.59-10.37 1.71-20.72 4.11-30.22 8.74-7.67 3.63-15.32 7.59-21.89 13.01-5.38 4.59-10.17 9.91-14.24 15.69-3.18 4.9-5.51 10.31-8.18 15.49 4.22-4.24 8.55-9.3 12.9-12.78.68-.5 1.35-.99 2.01-1.45 1.02 18.05 2.63 36.07 3.7 54.12 1.1 19.7 1.59 39.46 3.38 59.11-6.38 1.77-12.83 3.32-19.3 4.71-4.48.94-9 1.8-13.32 2.46 3.2.56 6.41 1.08 9.62 1.51 7.96 1.01 16 1.67 24.04 1.84 3.47 30.82 9.99 61.21 13.08 92.08.4 3.8.79 7.6 1.11 11.4.06.84.13 1.68.18 2.51.06-.18.11-.36.17-.54 4-12.14 7.99-24.34 9.95-37.01 3.4-23.12 3.97-46.63 2.45-69.95 3.44-.49 6.87-1.09 10.28-1.84 27.31-5.71 55.48-13.89 76.95-32.5 5.8-4.58 10.37-10.4 14.49-16.48 7.9-11.34 12.69-24.96 12.68-38.83-.45-5.08-1.2-10.3-3.13-15.08zm-43.92 40.54c-4.11 5.23-9.03 9.78-13.98 14.22-.07.06-.14.11-.21.17-11.77 9.34-24.97 16.65-38.29 23.51-6.86 3.48-12.46 6.24-16.75 8.2-2.22-16.34-5.59-32.54-9.98-48.43-5.39-19.58-13.38-38.3-21.64-56.81 8.53-5.83 15.77-8.9 26.46-11.21 9.9-2.43 16.47-3.07 30.48-2.57 3.44.16 6.89.27 10.32.53 3.41.37 6.81.9 10.07 1.99.01 0 .02.01.03.01 2.6 1.11 5.07 2.52 7.43 4.07 3.01 2.31 5.83 4.87 8.41 7.66 1.63 1.98 1.62 1.17 7.44 10.25 6.44 10.86 5.17 9.76 5.89 11.12 1.29 3.61 2.84 7.17 3.76 10.89.11 1.11.15 2.23.13 3.35-.43 3.04-1.09 6.05-2.02 8.98-.3.72-.61 1.44-.93 2.15-1.9 4.13-4.09 8.14-6.62 11.92z"
        fill="#131211"
      />
    </svg>
  </button>
</nav>
<div id="card-grid">
  <div class="text">
    Vill vi förmedla känslan av hoppfullhet och vikten utav att hjälpa varandra.
    En liten gåva kan göra stor skillnad för någon i en utsatt situation. Efter
    regn kommer alltid solsken och det gäller att fortsätta kämpa.
  </div>
  <a href="#web-developers" class="card">
    <h2>Webutvecklare</h2>
  </a>
  <a href="#game-developers" class="card">
    <h2>Spelutvecklare</h2>
  </a>
  <a href="#game-artists" class="card">
    <h2>Spelgrafiker</h2>
  </a>
  <a href="#ux-designers" class="card">
    <h2>UX designer</h2>
  </a>
</div>
<div class="pages">
  <nav>
    <ul class="nav-items">
      <li class="nav-item">
        <a href="#web-developers">
          <button>Webutvecklare</button>
        </a>
      </li>
      <li class="nav-item">
        <a href="#game-developers">
          <button>Spelutvecklare</button>
        </a>
      </li>
      <li class="nav-item">
        <a href="#game-artists">
          <button>Spelgrafiker</button>
        </a>
      </li>
      <li class="nav-item">
        <a href="#ux-designers">
          <button>UX designer</button>
        </a>
      </li>
    </ul>
  </nav>
  <div id="web-developers" class="page">
    <h1>Webutvecklare</h1>
    <div class="image">
      <img src="https://avatars.githubusercontent.com/simonlindstedt" />
      <img src="https://avatars.githubusercontent.com/LinnJosefsson" />
    </div>
    <div class="text">
      <h2>Simon Lindstedt och Linn Josefsson</h2>
      <p>
        Vi har samarbetat med alla delar av arbetslaget för att se till att
        siten du läser detta på just nu uppfyller de krav på form, funktion och
        interaktivitet som ställs. Arbetet har skett iterativt, då vi ständigt
        har uppdaterat och modifierat sidan utefter nya behov och idéer som
        uppstått under processens gång.
      </p>
      <a href="https://www.lindstedt.li/"
        ><img src="./assets/icons/lindstedt.li.png"
      /></a>
      <a href="https://github.com/LinnJosefsson"
        ><img src="./assets/icons/GitHub-Mark-Light-120px-plus.png"
      /></a>
    </div>
  </div>
  <div id="game-developers" class="page">
    <h1>Spelutvecklare</h1>
    <div class="image">
      <img src="./assets/images/emilie.png" />
      <img src="./assets/images/jonatan.png" />
    </div>
    <div class="text">
      <h2>Emilie Vogel och Jonatan Johansson</h2>
      <p>
        Emilie: Denna veckan har jag hjälpt till med animation och timelinen för
        att alla frames ska flyta på ett naturligt sätt. Jag har haft ansvar
        över tap och swipe funktionerna. Och arbetat primärt med audio och font
        implementering. Mycket dialog med grafikern Julia angående färgval och
        overall feeling för projektet.
        <br />
        <a href="https://www.linkedin.com/in/emilie-vogel/"
          ><img src="./assets/icons/Linkedin.png"
        /></a>
        <br />
        <br />
        Jonatan: Jag tagit många av besluten angående kod och struktur. Har även
        skrivit mycket av koden som har med interaktion och sammankoppling av
        system att göra, samt kopplingen mellan berättelsen och webbsidan. Jag
        har även lagt ner mycket tid i timelinen och med animationerna och att
        regissera berättelsen med hjälp av de andra i gruppen.
        <br />
        <a href="https://www.linkedin.com/in/jonatan-johansson-01/"
          ><img src="./assets/icons/Linkedin.png"
        /></a>
      </p>
    </div>
  </div>
  <div id="game-artists" class="page">
    <h1>Spelgrafiker</h1>
    <div class="image">
      <img src="./assets/images/julia.png" style="grid-column: 1 / 3; height: 500px; object-position: center -30px" />
    </div>
    <div class="text">
      <h2>Julia Ahlberg</h2>
      <p>
        Min roll under detta projektet har varit att producera grafiken i denna
        lilla interaktiva berättelsen. Som grafiker har jag arbetat med att föra
        fram den grafiska stämningen och visuella ton utifrån vår vision. Jag
        har illustrerat karaktärerna, animationerna samt bakgrunderna i vår
        interaktiva berättelse.
      </p>
      <a href="https://www.artstation.com/julia_artberg"
        ><img src="./assets/icons/artstation_logo_128.png"
      /></a>
    </div>
  </div>
  <div id="ux-designers" class="page">
    <h1>UX designer</h1>
    <div class="image">
      <img
        src="./assets/images/marcus.JPG"
        style="object-position: top; grid-column: 1 / 3; height: 500px;"
      />
    </div>
    <div class="text">
      <h2>Marcus Svanström</h2>
      <p>
        Under detta projekt har jag haft rollen som projektledare och UX
        designer. Jag hållit i avstämningsmöten och sett till att alla fått
        lyfta fram de utmaningar som man stött på för att kunna ta hjälp utav
        gruppens kompetenser. Ansvarat för Idégenereringsfasen och gjort
        användartester. Har även ansvarat för sidans grafiska
        användargränssnitt.
      </p>
      <a href="https://www.linkedin.com/in/marcus-svanstr%C3%B6m-970737149"
        ><img src="./assets/icons/Linkedin.png"
      /></a>
    </div>
  </div>
</div>
`;

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
