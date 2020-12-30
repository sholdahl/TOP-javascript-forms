const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordConf = document.querySelector("#password-confirmation");
const passwordConfError = document.querySelector("#passwordConfError");
const btn = document.querySelector("button");

// email

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    showEmailError(e);
  }
});

let showEmailError = (e) => {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  }
  // Set the styling appropriately
  emailError.className = "error active";
};

//zip code

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipError.textContent = ""; // Reset the content of the message
    zipError.className = "error"; // Reset the visual state of the message
  } else {
    showZipError(e);
  }
});

let showZipError = (e) => {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a zip code.";
  } else if (zip.validity.tooShort) {
    zipError.textContent = "Entered value needs to be a 5 digit zip code";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "zip code can only contain numbers";
  }
  zipError.className = "error active";
};

// password

password.addEventListener("input", (e) => {
  if (password.validity.valid) {
    passwordError.textContent = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    showPasswordError(e);
  }
});

let showPasswordError = (e) => {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = "Password must be at least 8 characters long.";
  } else if (password.validity.patternMismatch) {
    passwordError.textContent = "password must contain at least 1 number and 1 letter";
  }
  passwordError.className = "error active";
};

//password confirmation

passwordConf.addEventListener("input", (e) => {
  if (passwordConf.value == password.value) {
    passwordConf.setCustomValidity("");
  } else {
    passwordConf.setCustomValidity("Passwords do not match.");
  };

  if (passwordConf.validity.valid) {
    passwordConfError.textContent = ""; // Reset the content of the message
    passwordConfError.className = "error"; // Reset the visual state of the message
  } else {
    showPasswordConfError(e);
  }
});

let showPasswordConfError = (e) => {
  if (!(passwordConf.value == password.value)) {
    passwordConfError.textContent = "Passwords do not match.";
  } else if (passwordConf.validity.valueMissing) {
    passwordConfError.textContent = "You need to enter a passwordConf.";
  } else if (passwordConf.validity.tooShort) {
    passwordConfError.textContent = "PasswordConf must be at least 8 characters long.";
  } else if (passwordConf.validity.patternMismatch) {
    passwordConfError.textContent = "passwordConf must contain at least 1 number and 1 letter";
  }
  passwordConfError.className = "error active";
};

// form submission

form.addEventListener("submit", function (e) {

  if (!email.validity.valid) {
    showEmailError(e);
    e.preventDefault();
  } else if(!zip.validity.valid) {
    showZipError(e);
    e.preventDefault();
  } else if(!password.validity.valid) {
    showPasswordError(e);
    e.preventDefault();
  } else if (!passwordConf.validity.valid) {
    showPasswordConfError(e);
    e.preventDefault();
  } else {
      alert("Form accepted")
  }
});


