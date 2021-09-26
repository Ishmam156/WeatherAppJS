// import "./styles/reset.css";
// import "./styles/style.css";

// import { addColorMode } from "./scripts/colorMode";

// addColorMode();

const bodyElement = document.querySelector("body");

if (localStorage.lightMode == "dark") {
  bodyElement.setAttribute("light-mode", "dark");
  showIcon();
}

function showIcon() {
  const colorIcons = document.querySelectorAll(".darkModeIcon");
  colorIcons.forEach((icon) => icon.classList.toggle("active"));
}

function toggle_light_mode() {
  var bodyElement = document.querySelector("body");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    bodyElement.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    bodyElement.setAttribute("light-mode", "dark");
  }

  showIcon();
}

document
  .getElementById("toggleColorMode")
  .addEventListener("click", () => toggle_light_mode());
