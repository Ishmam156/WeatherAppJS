// import "./styles/reset.css";
// import "./styles/style.css";

// import { getWeatherDataOfLocation } from "./scripts/getData";
// import { addFormListener, addWeatherVisualsToDOM } from "./scripts/DOM";

// addFormListener();

// document
//   .querySelector("#darkmode")
//   .addEventListener("change", function (event) {
//     document.querySelector("body").classList.toggle("dark");
//   });

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
  app.setAttribute("light-mode", "dark");
}

function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}

document
  .getElementById("toggleColorMode")
  .addEventListener("click", () => toggle_light_mode());

window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("light-mode", "dark");
    } else {
      app.setAttribute("light-mode", "light");
    }
  },
  false
);
