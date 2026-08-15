// form validation
const form = document.getElementById("signup-form"),
  userName = document.getElementById("user-name"),
  userEmail = document.getElementById("user-email"),
  userAge = document.getElementById("user-age");
const personalNumber = document.getElementById("personal-number"),
  mobileNumber = document.getElementById("mobile-number"),
  jobDescription = document.getElementById("job-description");

const dialog = document.querySelector("dialog"),
  closeDialog = dialog.querySelector(".close");

closeDialog.addEventListener("click", () => {
  dialog.close();

  dialog.querySelector("h2").innerText = "";
  dialog.querySelector("p").innerText = "";
});

function showDialog(title, description) {
  dialog.querySelector("h2").innerText = title;
  dialog.querySelector("p").innerText = description;

  dialog.showModal();
}
function removeError(inputEl) {
  inputEl.closest(".form-group").classList.remove("error");
  inputEl.closest(".form-group").querySelector(".message").textContent = "";
}

function showError(inputEl, message) {
  inputEl.closest(".form-group").classList.add("error");
  inputEl.closest(".form-group").querySelector(".message").textContent =
    message;
}

function checkUserNameValidity() {
  if (userName.validity.valueMissing) {
    showError(userName, "user name is required");
    return false;
  } else if (userName.validity.tooShort || userName.validity.tooLong) {
    showError(userName, "user name must be 5 character");
    return false;
  } else {
    removeError(userName);
    return true;
  }
}

function checkUserAgeValidity() {
  const userAgeValue = Number(userAge.value);
  if (!userAgeValue) {
    showError(userAge, "user age is required");
    return false;
  } else if (userAgeValue < 10 || userAgeValue > 50) {
    showError(userAge, "user age must be between 10 and 50");
    return false;
  } else {
    removeError(userAge);
    return true;
  }
}

function checkPersonalNumberValidity() {
  const val = personalNumber.value.trim();
  if (personalNumber.validity.valueMissing) {
    showError(personalNumber, "personal number is required");
    return false;
  } else if (!/^\d{11}$/.test(val)) {
    showError(personalNumber, "personal number must be exactly 11 digits");
    return false;
  } else {
    removeError(personalNumber);
    return true;
  }
}

function checkMobileNumberValidity() {
  const val = mobileNumber.value.trim();
  if (mobileNumber.validity.valueMissing) {
    showError(mobileNumber, "mobile number is required");
    return false;
  } else if (!/^\d{9}$/.test(val)) {
    showError(mobileNumber, "mobile number must be exactly 9 digits");
    return false;
  } else {
    removeError(mobileNumber);
    return true;
  }
}

function checkJobDescriptionValidity() {
  const val = jobDescription.value;
  if (!val) {
    removeError(jobDescription);
    return true;
  } else if (val.length > 50) {
    showError(jobDescription, "job description must be 50 characters or less");
    return false;
  } else {
    removeError(jobDescription);
    return true;
  }
}

userName.addEventListener("input", checkUserNameValidity);
userAge.addEventListener("input", checkUserAgeValidity);
personalNumber.addEventListener("input", checkPersonalNumberValidity);
mobileNumber.addEventListener("input", checkMobileNumberValidity);
jobDescription.addEventListener("input", checkJobDescriptionValidity);

// form events -> submit, input, change
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isUserNameValid = checkUserNameValidity();
  const isUserAgeValid = checkUserAgeValidity();
  const isPersonalValid = checkPersonalNumberValidity();
  const isMobileValid = checkMobileNumberValidity();
  const isJobValid = checkJobDescriptionValidity();

  if (
    isUserAgeValid &&
    isUserNameValid &&
    isPersonalValid &&
    isMobileValid &&
    isJobValid
  ) {
    form.reset();
    showDialog("sign up", "user registered successfuly");
  }
});
