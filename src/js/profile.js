const userInfoWrapper = document.querySelector(".user-details"),
  userNameSpan = document.getElementById("user-name"),
  userAgeSpan = document.getElementById("user-age"),
  userEmailSpan = document.getElementById("user-email"),
  logoutBtn = document.getElementById("logout");

const userInfo = localStorage.getItem("user");

const formatedUserInfo = userInfo ? JSON.parse(userInfo) : null;

function renderUserInfo() {
  userAgeSpan.textContent = formatedUserInfo.age;
  userEmailSpan.textContent = formatedUserInfo.email;
  userNameSpan.textContent = formatedUserInfo.name;

  userInfoWrapper.classList.remove("hidden");
}

if (formatedUserInfo) renderUserInfo();

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});
