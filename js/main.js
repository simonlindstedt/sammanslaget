function onStartup() {
  document.querySelector(".preloader").classList.add("done");
  setTimeout(() => {
    document.querySelector(".preloader").remove();
  }, 2100);
}

window.addEventListener("load", () => {
  if (window.location.hash !== "") {
    window.location.href = window.location.href.split("#")[0];
  }
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

(async function () {
  const unityInstance = await createUnityInstance(
    document.querySelector("#unity-canvas"),
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
    }
  );
  // unityInstance.SendMessage("JS", "SetText", "Hej hackathon");
})();
