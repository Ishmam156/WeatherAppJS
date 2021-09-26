// Helper function to capitalize user input
const capitalize = ([firstLetter, ...restOfWord]) => {
  return firstLetter.toUpperCase() + restOfWord.join("").toLowerCase();
};

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
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Check if empty string or not
      const searchValue = newInput.value.trim();
      if (!searchValue) {
        // Show appropiate error for certain time
        const errorElement = document.getElementById("error");
        errorElement.textContent = "You need to enter a location!";
        errorElement.style.display = "block";

        setTimeout(() => {
          errorElement.innerHTML = "";
          newInput.value = "";
          errorElement.style.display = "none";
        }, 2000);

        return;
      }

      // Remove search form and set location as searched word
      const nameElement = document.getElementById("weatherLocation");
      nameElement.innerHTML = "";
      nameElement.textContent = capitalize(newInput.value);
    });
  }
};

// Listener added to location text
const addLocationSearchListener = () => {
  document
    .getElementById("weatherLocation")
    .addEventListener("click", (event) => locationInput(event.target));
};

export { addLocationSearchListener };
