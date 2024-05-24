const firstName = document.getElementById("firstname");
const firstNameErr = document.querySelector(".firstname__error");
const lastName = document.getElementById("lastname");
const lastNameErr = document.querySelector(".lastname__error");
const email = document.getElementById("email");
const mailErr = document.querySelector(".email__error");
const inputs = document.querySelectorAll("input");
const submit = document.querySelector(".submitBtn");

const hasNumber = function (input) {
  // Use a regular expression to search for at least one digit (\d)
  return /\d/.test(input.value);
};

const emptyFirstName = function () {
  if (firstName.value.length === 0) {
    firstNameErr.style.display = "block";
    firstName.style.marginBottom = 0;
  } else if (hasNumber(firstName)) {
    firstNameErr.style.display = "block";
    firstName.style.marginBottom = 0;
    firstNameErr.textContent = "Must not contain any number";
  } else {
    firstNameErr.style.display = "none";
    firstName.style.marginBottom = "1.5rem";
  }
};

const emptyLastName = function () {
  if (lastName.value.length === 0) {
    lastNameErr.style.display = "block";
    lastName.style.marginBottom = 0;
  } else if (hasNumber(lastName)) {
    lastNameErr.style.display = "block";
    lastName.style.marginBottom = 0;
    lastNameErr.textContent = "Must not contain any number";
  } else {
    lastNameErr.style.display = "none";
    lastName.style.marginBottom = "1.5rem";
  }
};

const ValidateEmail = function () {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    mailErr.style.display = "block";
    email.style.marginBottom = 0;
  } else {
    mailErr.style.display = "none";
    email.style.marginBottom = "1.5rem";
  }
};

const validateFields = function () {
  emptyFirstName();
  emptyLastName();
  ValidateEmail();
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  validateFields();
});
