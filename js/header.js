const USER_INFO = "userInfo";
const loginMenu = document.querySelector("#login-menu");
const logoutMenu = document.querySelector("#logout-menu");

const HIDDEN_CLASS = "hidden"

if (localStorage.getItem(USER_INFO)) {
  loginMenu.classList.remove(HIDDEN_CLASS);
  logoutMenu.classList.add(HIDDEN_CLASS);
} else {
  logoutMenu.classList.remove(HIDDEN_CLASS);
  loginMenu.classList.add(HIDDEN_CLASS);
}
