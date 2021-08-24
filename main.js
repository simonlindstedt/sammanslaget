function onStartup() {
  document.querySelector(".preloader").classList.add("done");
  setTimeout(() => {
    document.querySelector(".preloader").remove();
  }, 1100);
}

window.addEventListener("load", () => {
  const body = document.querySelector("body");
  body.scrollTop = 0;
});

(async function () {
  const unityInstance = await createUnityInstance(
    document.querySelector("#unity-canvas"),
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
    }
  );
  // unityInstance.SendMessage("JS", "SetText", "Hej hackathon");
})();
