import axios from "axios";

const getWeatherOfCoordinates = async (lat, long) => {
  let weatherData;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${process.env.WEATHER_API}&units=metric`
    );
    weatherData = response.data;
  } catch (err) {
    console.error("Please provide a correct location!");
  }

  return weatherData;
};

const getWeatherDataOfLocation = async (location, unit = "metric") => {
  let weatherData;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.WEATHER_API}&units=${unit}`
    );
    weatherData = response.data;
  } catch (err) {
    console.error("Please provide a correct location!");
  }

  return weatherData;
};

export { getWeatherDataOfLocation, getWeatherOfCoordinates };
