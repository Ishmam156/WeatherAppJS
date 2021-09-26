import { getWeatherDataOfLocation } from "./getWeatherData";
import { capitalize, showErrorMessage } from "./helper";
import { displayWeatherToDOM } from "./addWeatherToDOM";

const locationInput = (element) => {
  // Check if target element is the inital HTML span element
  if (element.nodeName === "SPAN") {
    const initialLocation = element.textContent;
    element.textContent = "";

    // Create search form for new location
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
    // Add focus to help user start search
    newInput.focus();

    // Check for newly added search form submission
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Check if empty string or not
      const searchValue = newInput.value.trim();
      if (!searchValue) {
        // Show appropiate error for certain time
        showErrorMessage("You need to enter a location!", newInput, 2000);

        return;
      }

      const weatherData = await getWeatherDataOfLocation(searchValue);

      if (weatherData) {
        displayWeatherToDOM(weatherData);
      } else {
        showErrorMessage(
          "Couldn't find weather data for your location",
          newInput,
          3000
        );
        return;
      }

      // Remove search form and set location as searched word
      const nameElement = document.getElementById("weatherLocation");
      nameElement.innerHTML = "";
      nameElement.textContent = capitalize(searchValue);
    });
  }
};

const degreeChange = async (element) => {
  const currentDegree = element.textContent[1];
  const locationToSearch =
    document.getElementById("weatherLocation").textContent;
  console.log(locationToSearch);
  const weatherData = await getWeatherDataOfLocation(
    locationToSearch,
    currentDegree === "C" ? "imperial" : "metric"
  );
  displayWeatherToDOM(weatherData, currentDegree);
};

// Listener added to location and degree text
const addLocationSearchListener = () => {
  document
    .getElementById("tempSign")
    .addEventListener("click", (event) => degreeChange(event.target));

  document
    .getElementById("weatherLocation")
    .addEventListener("click", (event) => locationInput(event.target));
};

export { addLocationSearchListener };
