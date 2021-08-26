const canvas = document.querySelector("canvas");
const fullScreenButton = document.querySelector("button.full-screen");
const preloader = document.querySelector(".preloader");
const closeFullScreenButton = document.querySelector(
  ".full-screen-wrapper button"
);

function onStartup() {
  preloader.classList.add("done");
  setTimeout(() => {
    preloader.remove();
  }, 2100);
}

window.addEventListener("load", () => {
  ratioResize(16 / 9, canvas);
  if (window.location.hash !== "") {
    window.location.href = window.location.href.split("#")[0];
  }
});

window.addEventListener("resize", () => {
  if (window.innerHeight !== screen.height) {
    ratioResize(16 / 9, canvas);
  }
});

// About button
const aboutButton = document.querySelector(".about-button");

if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    if (document.querySelector("section#about") === null) {
      document.body.style.overflowY = "scroll";
      renderAboutMenu();
      document.querySelector("section#about").scrollIntoView({
        behavior: "smooth",
      });
    } else {
      document.querySelector("section#about").scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}

// Fullscreen button listeners

document.addEventListener("fullscreenchange", () => {
  ratioResize(16 / 9, canvas);

  if ((screen.width / screen.height).toFixed(4) === (16 / 9).toFixed(4)) {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }

  if (document.fullscreenEnabled !== null) {
    closeFullScreenButton.classList.toggle("active");
  }
});

fullScreenButton.addEventListener("click", () => {
  canvas.parentElement.requestFullscreen({ navigationUI: "show" });
});

closeFullScreenButton.addEventListener("click", () => {
  document.exitFullscreen();
});

(async function () {
  const unityInstance = await createUnityInstance(
    canvas,
    {
      dataUrl: "Build/Build.data",
      frameworkUrl: "Build/Build.framework.js",
      codeUrl: "Build/Build.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Sammanslaget",
      productVersion: "1.0",
      // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
      // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    },
    function (percent) {
      preloader.querySelector("h2").innerText = `Laddar...(${percent * 100}%)`;
    }
  );
  // unityInstance.SendMessage("JS", "SetText", "Hej hackathon");
})();
