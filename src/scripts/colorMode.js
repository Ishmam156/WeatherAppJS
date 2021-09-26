import sunImage from "../images/sun.svg";
import moonImage from "../images/moon.svg";
import windImage from "../images/wind.svg";
import pressureImage from "../images/pressure.svg";
import humidityImage from "../images/humidity.svg";

const addColorMode = () => {
  const bodyElement = document.querySelector("body");

  // To toggle dark and light icon depending on color mode status
  const showIcon = () => {
    const colorIcons = document.querySelectorAll(".darkModeIcon");
    colorIcons.forEach((icon) => icon.classList.toggle("active"));
  };

  // Adding svg icons to DOM with initial light mode on
  const images = [
    {
      image: sunImage,
      active: true,
    },
    {
      image: moonImage,
      active: false,
    },
  ];

  images.forEach((image) => {
    const imageToAdd = document.createElement("img");
    imageToAdd.alt = "dark mode toggle";
    imageToAdd.src = image.image;
    imageToAdd.classList.add("darkModeIcon");

    if (image.active) {
      imageToAdd.classList.add("active");
    }

    bodyElement.prepend(imageToAdd);
  });

  // Adding additional weather element images
  const weatherImages = [
    {
      id: "windValue",
      image: windImage,
    },
    {
      id: "pressureValue",
      image: pressureImage,
    },
    {
      id: "humidityValue",
      image: humidityImage,
    },
  ];

  weatherImages.forEach((image) => {
    const imageToAdd = document.createElement("img");
    imageToAdd.alt = image.id;
    imageToAdd.src = image.image;
    document.getElementById(image.id).parentElement.prepend(imageToAdd);
  });

  // Check during initial page load whether user had previously set dark mode
  if (localStorage.lightMode == "dark") {
    bodyElement.setAttribute("light-mode", "dark");
    showIcon();
  }

  // Check local storage for color mode status and switch status
  const toggle_light_mode = () => {
    var bodyElement = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode === "dark") {
      localStorage.lightMode = "light";
      bodyElement.setAttribute("light-mode", "light");
    } else {
      localStorage.lightMode = "dark";
      bodyElement.setAttribute("light-mode", "dark");
    }

    showIcon();
  };

  document
    .getElementById("toggleColorMode")
    .addEventListener("click", () => toggle_light_mode());
};

export { addColorMode };
