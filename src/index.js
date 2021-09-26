import "./styles/reset.css";
import "./styles/style.css";

import { addColorMode } from "./scripts/colorMode";
import {
  addLocationSearchListener,
  locationInput,
  geoLocationInput,
} from "./scripts/weatherSearchInput";

// Enable color mode toggle and feature
addColorMode();
// Add DOM Listener for Search Input as well as Degree change
addLocationSearchListener();
// Initialize app with search bar at start
locationInput(document.getElementById("weatherLocation"));

// Check if user is willing to provide location and then set weather if provided
if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition((data) => {
    geoLocationInput(data.coords.latitude, data.coords.longitude);
  }, console.log);
}
