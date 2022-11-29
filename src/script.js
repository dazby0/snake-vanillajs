const nicknameScreen = document.querySelector(".nickname-screen");
const btnNickname = document.getElementById("button-nickname");
const mainContainer = document.querySelector(".main");

const changeNickLabel = document.querySelector(".active-nick");

const buttonBack = document.querySelector(".button-back");

buttonBack.addEventListener("click", () => {
  $url = window.location.href;
  $defaultUrl = $url.slice(0, 23);

  window.location.assign($defaultUrl + "index.html");
});

changeNickLabel.addEventListener("click", () => {
  nicknameScreen.display = "flex";
  mainContainer.opacity = "0.1";
});
