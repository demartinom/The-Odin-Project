import getWeather from "./fetch.js";

getWeather();

let searchButton = document.querySelector(".search-button");
let citySearch = document.querySelector(".city-search");
searchButton.addEventListener("click", function () {
  getWeather(citySearch.value);
});

citySearch.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    getWeather(citySearch.value);
  }
});
