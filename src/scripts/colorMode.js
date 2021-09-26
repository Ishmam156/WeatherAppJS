import sunImage from "../images/sun.svg";
import moonImage from "../images/moon.svg";

const addColorMode = () => {
  const bodyElement = document.querySelector("body");

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
};

export { addColorMode };
