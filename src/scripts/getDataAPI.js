import axios from "axios";

// https://api.unsplash.com/search/photos?query=brightsun&client_id=KEY&orientation=portrait
// https://api.giphy.com/v1/gifs/translate?api_key=KEY&s=cats
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=KEY

const getPhotoIndex = (length) => Math.floor(Math.random() * length);

const getWeatherDataOfLocation = async (location, unit = "metric") => {
  let weatherData;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.WEATHER_API}&units=${unit}`
    );
    weatherData = response.data;
  } catch (err) {
    console.log("Please provide a correct location!");
  }

  return weatherData;
};

const getImageForWeather = async (status) => {
  let weatherImage;
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${status}&client_id=${APIs.UNSPLASH_API}`
    );
    const allImages = response.data.results;
    const imageIndex = getPhotoIndex(allImages.length);
    weatherImage = allImages[imageIndex];
  } catch (error) {
    console.log(error);
  }

  return weatherImage;
};

export { getWeatherDataOfLocation, getImageForWeather };
