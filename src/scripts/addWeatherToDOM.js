import { capitalize } from "./helper";

const displayWeatherToDOM = (data) => {
  console.log(data);

  document.getElementById("tempValue").textContent = Math.round(data.main.temp);
  document.getElementById(
    "tempPicture"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.getElementById("tempDescription").textContent = capitalize(
    data.weather[0].description
  );
  const date = new Date();
  document.getElementById("tempTime").textContent = date.toUTCString();
  document.getElementById("windValue").textContent = `${data.wind.speed} m/s`;
  document.getElementById(
    "humidityValue"
  ).textContent = `${data.main.humidity}%`;
  document.getElementById(
    "pressureValue"
  ).textContent = `${data.main.pressure} hPa`;
};

export { displayWeatherToDOM };
