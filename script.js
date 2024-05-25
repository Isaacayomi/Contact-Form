const firstName = document.getElementById("firstname");
const firstNameErr = document.querySelector(".firstname__error");
const lastName = document.getElementById("lastname");
const lastNameErr = document.querySelector(".lastname__error");
const email = document.getElementById("email");
const mailErr = document.querySelector(".email__error");
const enquiryError = document.querySelector(".enquiry__error");
const message = document.querySelector(".message__input");
const messageErr = document.querySelector(".message__error");
const inputs = document.querySelectorAll("input");
const consent = document.querySelector(".consent__check");
const consentErr = document.querySelector(".consent__error");
const submit = document.querySelector(".submitBtn");

const hasNumber = (input) => {
  return /\d/.test(input.value);
};

const emptyFirstName = () => {
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

const emptyLastName = () => {
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

const ValidateEmail = () => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    mailErr.style.display = "block";
    email.style.marginBottom = 0;
  } else {
    mailErr.style.display = "none";
    email.style.marginBottom = "1.5rem";
  }
};

const validateEnquiry = () => {
  let enquiry = document.forms["myForm"]["enquiry"];
  if (enquiry[0].checked === false && enquiry[1].checked === false) {
    enquiryError.style.display = "block";
  } else {
    enquiryError.style.display = "none";
  }
};

const validateMessageField = () => {
  if (message.value.length === 0) {
    messageErr.style.display = "block";
    messageErr.style.marginBottom = "1.5rem";
    messageErr.style.marginTop = "-2.5rem";
  } else {
    messageErr.style.display = "none";
    messageErr.style.marginBottom = 0;
  }
};

const validateCheckBox = () => {
  if (!consent.checked) {
    consentErr.style.display = "block";
    consentErr.style.marginBottom = "1.5rem";
  } else {
    consentErr.style.display = "none";
  }
};

const validateFields = () => {
  emptyFirstName();
  emptyLastName();
  ValidateEmail();
  validateEnquiry();
  validateMessageField();
  validateCheckBox();
};

//Event Listeners
consent.addEventListener("click", () => {
  consent.style.accentColor = "#0c7d69";
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateFields) {
    document.querySelector(".toast").style.display = "block";

    // Remove toast after 5 seconds
    setTimeout(function () {
      document.querySelector(".toast").style.display = "none";

    }, 3000);
  }
});
