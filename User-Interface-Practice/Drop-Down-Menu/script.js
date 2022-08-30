const createNavBar = () => {
  let navSection = document.querySelector("nav");
  let navBar = document.createElement("div");
  navBar.setAttribute("class", "nav-bar");
  navSection.appendChild(navBar);
  createHomeButton(navBar);
  createAboutSection(navBar);
};
const createHomeButton = (div) => {
  let homeButton = document.createElement("button");
  homeButton.innerText = "Home";
  div.appendChild(homeButton);
};
const createAboutSection = (div) => {
  let aboutMeContainer = document.createElement("div");
  aboutMeContainer.setAttribute("class", "dropdown");
  let aboutMeButton = document.createElement("button");
  aboutMeButton.setAttribute("class", "drop-button");
  aboutMeButton.innerText = "About Me";
  aboutMeContainer.appendChild(aboutMeButton);
  let dropDown = document.createElement("div");
  dropDown.setAttribute("class", "dropdown-content hide");
  dropDown.innerHTML =
    "<p class='dropdown-item'>My Story</p> <p class='dropdown-item'>My Story</p> <p class='dropdown-item'>My Future</p>";
  aboutMeContainer.appendChild(dropDown);
  div.appendChild(aboutMeContainer);
  let dropdownButton = document.querySelector(".drop-button");
  dropdownButton.addEventListener("click", function () {
    let dropList = document.querySelector(".dropdown-content");
    if (dropList.classList.contains("hide")) {
      dropList.classList.remove("hide");
    } else {
      dropList.classList.add("hide");
    }
  });
};

createNavBar();
