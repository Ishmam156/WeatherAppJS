import "./styles/reset.css";
import "./styles/style.css";

import { addColorMode } from "./scripts/colorMode";

addColorMode();

function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join("").toLowerCase();
}

const locationInput = (element) => {
  if (element.nodeName === "SPAN") {
    const initialLocation = element.textContent;
    element.textContent = "";

    const searchForm = document.createElement("form");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = initialLocation;
    searchForm.append(newInput);
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Go";
    searchForm.append(submitButton);
    element.append(searchForm);
    newInput.focus();

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(newInput.value);
      const nameElement = document.getElementById("weatherLocation");
      nameElement.innerHTML = "";
      nameElement.textContent = capitalize(newInput.value);
    });
  }
};

document
  .getElementById("weatherLocation")
  .addEventListener("click", (event) => locationInput(event.target));
