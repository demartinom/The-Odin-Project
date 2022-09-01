export default function searchFeature() {
  let searchButton = document.querySelector(".search-button");
  let citySearch = document.querySelector(".city-search");
  searchButton.addEventListener("click", function () {
    getWeather(citySearch.value);
  });
}
