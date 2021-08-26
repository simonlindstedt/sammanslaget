const canvas = document.querySelector("canvas");
const fullScreenButton = document.querySelector("button.full-screen");
const closeFullScreenButton = document.querySelector(
  ".full-screen-wrapper button"
);

/* function onStartup() {
  document.querySelector(".preloader").classList.add("done");
  setTimeout(() => {
    document.querySelector(".preloader").remove();
  }, 2100);
} */

window.addEventListener("load", () => {
  ratioResize(16 / 9, canvas);
  if (window.location.hash !== "") {
    window.location.href = window.location.href.split("#")[0];
  }
});

window.addEventListener("resize", () => {
  ratioResize(16 / 9, canvas);
});

// About button
const aboutButton = document.querySelector(".about-button");

if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    if (document.querySelector("section#about") === null) {
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
  // ratioResize(16 / 9, canvas);
  canvas.width = "100%";
  canvas.height = "auto";
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
  const unityInstance = await createUnityInstance(canvas, {
    dataUrl: "Build/Build.data.unityweb",
    frameworkUrl: "Build/Build.framework.js.unityweb",
    codeUrl: "Build/Build.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Sammanslaget",
    productVersion: "1.0",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
  });
  // unityInstance.SendMessage("JS", "SetText", "Hej hackathon");
})();
