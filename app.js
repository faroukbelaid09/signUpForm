const submitBTN = document.querySelector("button");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form");
let formSuccess = true;

const checkTextAndPasswordInput = function (input) {
  if (input.value.trim() === "") {
    formSuccess = false;
    return addErrorMessage(input);
  } else {
    formSuccess = true;
    return removeErrorMessage(input);
  }
};

const validateEmailInput = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value.trim() === "") {
      formSuccess = false;
      return addErrorMessage(input);
    } else if (!re.test(String(input.value).toLowerCase())) {
    formSuccess = false;
    return addErrorMessage(input);
  } else {
    formSuccess = true;
    return removeErrorMessage(input);
  }
};

const addErrorMessage = (target) => {
  target.parentElement.classList.add("error");
};

const removeErrorMessage = (target) => {
  target.parentElement.classList.remove("error");
};

submitBTN.addEventListener("click", function () {
  checkTextAndPasswordInput(firstName);
  checkTextAndPasswordInput(lastName);
  validateEmailInput(email);
  checkTextAndPasswordInput(password);
});
