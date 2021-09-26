// Get user input and capitalize for display
const capitalize = ([firstLetter, ...restOfWord]) => {
  return firstLetter.toUpperCase() + restOfWord.join("").toLowerCase();
};

// Display error message on DOM with timeout
const showErrorMessage = (message, element, timeout) => {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";

  setTimeout(() => {
    errorElement.innerHTML = "";
    element.value = "";
    errorElement.style.display = "none";
  }, timeout);
};

export { capitalize, showErrorMessage };
