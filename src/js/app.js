// form validation
const form = document.getElementById("signup-form"),
  userName = document.getElementById("user-name"),
  userEmail = document.getElementById("user-email"),
  userAge = document.getElementById("user-age");

const dialog = document.querySelector("dialog"),
  closeDialog = dialog.querySelector(".close");

closeDialog.addEventListener("click", () => {
  dialog.close();

  dialog.querySelector("h2").innerText = "";
  dialog.querySelector("p").innerText = "";

  window.location.href = "profile.html";
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
    // userName.value === ''
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

userName.addEventListener("input", checkUserNameValidity);
userAge.addEventListener("input", checkUserAgeValidity);

// form events -> submit, input, change
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isUserNameValid = checkUserNameValidity();
  const isUserAgeValid = checkUserAgeValidity();

  if (isUserAgeValid && isUserNameValid) {
    // console.log("after check");
    // form.submit()
    // form.reset()

    const userInfo = {
      name: userName.value,
      age: userAge.value,
      email: userEmail.value,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));

    form.reset();
    showDialog("sign up", "user registered successfuly");
  }
});

// dialogs

// localStorage
