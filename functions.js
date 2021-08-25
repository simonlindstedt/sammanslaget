function renderAboutMenu() {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");

  const returnButton = document.createElement("button");
  returnButton.textContent = "Return";
  returnButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  aboutSection.appendChild(returnButton);
  document.body.appendChild(aboutSection);
}
