// const nameInput = document.querySelector("input");

// nameInput.addEventListener("input", () => {
//   nameInput.setCustomValidity("");
//   nameInput.checkValidity();
// });

// nameInput.addEventListener("invalid", () => {
//   if (nameInput.value === "") {
//     nameInput.setCustomValidity("Enter your username!");
//   } else {
//     nameInput.setCustomValidity(
//       "Usernames can only contain upper and lowercase letters. Try again!"
//     );
//   }
// });

// const emailInput = document.querySelector('input[name="email"]');
// emailInput.addEventListener("input", function () {
//   emailInput.checkValidity();
// });

// emailInput.addEventListener('invalid', function(){
//     emailInput.setCustomValidity('You need an @ sumbol!')
// })
const countryError = document.querySelector("#country + span.error");

const countryInput = document.querySelector('input[name="country"]');
countryInput.addEventListener("input", function () {
  countryInput.setCustomValidity("");
  countryInput.checkValidity();
});

countryInput.addEventListener("invalid", function () {
  if (countryInput.value === "") {
    countryInput.setCustomValidity("Enter something!");
  } else {
    countryInput.setCustomValidity("Enter a valid country!");
  }
});

const emailInput = document.querySelector('input[name="email"]');
emailInput.addEventListener("input", function () {
  emailInput.setCustomValidity("");
  emailInput.checkValidity();
});

emailInput.addEventListener("invalid", function () {
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Enter something!");
  } else {
    emailInput.setCustomValidity("Enter a valid email!");
  }
});
