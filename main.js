function onStartup() {
  document.querySelector(".preloader").classList.add("done");
  setTimeout(() => {
    document.querySelector(".preloader").remove();
  }, 1100);
}

const aboutButton = document.querySelector(".about-button");

if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    if (document.querySelector("section.about") === null) {
      renderAboutMenu();
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
}

const pageNavButton = document.querySelector("button.nav-button");
const navItems = document.querySelectorAll("ul.nav-items li");

pageNavButton.addEventListener("click", () => {
  let i = 1;
  pageNavButton.classList.toggle("active");

  if (pageNavButton.classList.contains("active")) {
    navItems.forEach((navItem) => {
      const translateString = `translateY(${i * 64 * -1}px)`;
      navItem.style.transform = translateString;
      navItem.querySelector("button").addEventListener("click", () => {
        navItems.forEach((navItem) => {
          pageNavButton.classList.remove("active");
          navItem.style.transform = "translateY(0px)";
        });
      });
      i++;
    });
  } else {
    navItems.forEach((navItem) => {
      navItem.style.transform = "translateY(0px)";
    });
  }
});

// window.location.hash

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
