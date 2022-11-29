const nicknameScreen = document.querySelector(".nickname-screen");
const btnNickname = document.getElementById("button-nickname");
const mainContainer = document.querySelector(".main");

const changeNickLabel = document.getElementById("active");

const buttonBack = document.querySelector(".button-back");

buttonBack.addEventListener("click", () => {
  const url = window.location.href;
  const index = "index.html";
  const defaultUrl = url.split("/");

  defaultUrl.pop();
  defaultUrl.push(index);

  const newUrl = defaultUrl.join("/");
  window.location.assign(newUrl);
});

function changeNickname() {
  nicknameScreen.style.display = "flex";
  mainContainer.style.opacity = 0.1;
}
