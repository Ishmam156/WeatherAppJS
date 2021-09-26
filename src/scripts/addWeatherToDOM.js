import { capitalize } from "./helper";

const displayWeatherToDOM = (data, tempDegree) => {
  // Set Temperature, photo and weather description from API response
  document.getElementById("tempValue").textContent = Math.round(data.main.temp);
  document.getElementById(
    "tempPicture"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.getElementById("tempDescription").textContent = capitalize(
    data.weather[0].description
  );

  // Format date to ensure correct browser date is shown
  const date = new Date();
  document.getElementById(
    "tempTime"
  ).textContent = `${date.toDateString()} ${date.toLocaleTimeString("en-US")}`;

  // Show correct temperature degree sign
  document.getElementById("tempSign").textContent = `°${
    tempDegree === "C" ? "F" : "C"
  }`;

  // Add additional temperature values
  document.getElementById("windValue").textContent = `${data.wind.speed} ${
    tempDegree === "C" ? "mph" : "m/s"
  }`;
  document.getElementById(
    "humidityValue"
  ).textContent = `${data.main.humidity}%`;
  document.getElementById(
    "pressureValue"
  ).textContent = `${data.main.pressure} hPa`;
};

export { displayWeatherToDOM };
