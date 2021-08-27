const canvas = document.querySelector("canvas#unity-canvas");
const fullScreenButton = document.querySelector("button.full-screen");
const preloader = document.querySelector(".preloader");
const closeFullScreenButton = document.querySelector(
  ".full-screen-wrapper button"
);

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

function onStartup() {
  if (preloader) {
    setTimeout(() => {
      preloader.remove();
    }, 1100);
  }
}

function onBackgroundChange() {
  document.body.style.backgroundColor = "rgb(255,	209, 153)";
  console.log("background change");
}

function onRestart() {
  document.body.style.backgroundColor = "var(--bgColor)";
}

(async function () {
  const unityInstance = await createUnityInstance(
    canvas,
    {
      dataUrl: "Build/Build.data.unityweb",
      frameworkUrl: "Build/Build.framework.js.unityweb",
      codeUrl: "Build/Build.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Sammanslaget",
      productVersion: "1.0",
      // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
      // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    },
    function (percent) {
      preloader.querySelector("h2").innerText = `Laddar...(${(
        percent * 100
      ).toFixed(0)}%)`;
      if (percent === 1) {
        preloader.classList.add("done");
      }
    }
  );

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

  // About button
  const aboutButton = document.querySelector(".about-button");

  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      unityInstance.SendMessage("JS", "SetMuteOverride", 1);
      if (document.querySelector("section#about") === null) {
        renderAboutMenu();

        // Top button
        const topButton = document.querySelector("button.return");
        topButton.addEventListener("click", () => {
          unityInstance.SendMessage("JS", "SetMuteOverride", 0);
          document.body.style.overflowY = "hidden";
          document.querySelector("main").style.display = "initial";
          document.querySelector("html").style.scrollBehavior = "auto";
          document.querySelector("section#about").scrollIntoView();
          document.querySelector("html").style.scrollBehavior = "smooth";
          document.querySelector("main").scrollIntoView({ behavior: "smooth" });
        });
      }
      document.querySelector("section#about").scrollIntoView({
        behavior: "smooth",
      });
      document.body.style.backgroundColor = "var(--bgColor)";
      setTimeout(() => {
        document.querySelector("main").style.display = "none";
        document.body.style.overflowY = "scroll";
      }, 1000);
    });
  }
})();
