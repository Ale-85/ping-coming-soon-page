const input = document.getElementById("email");
const button = document.querySelector("button");
const invalidEmail = document.querySelector(".invalid-email");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let email = input.value;
  let validEmail = email.includes("@");
  if (validEmail === false) {
    invalidEmail.style.visibility = "visible";
    input.style.border = "1px solid hsl(354, 100%, 66%)";
  }
});
