const btnNickname = document.getElementById('button-nickname');
const nicknameInput = document.getElementById('nickname');
// console.log(nickname)

const btnPicker = document.getElementById('button-picker');
const pickerValue = document.getElementById('inputPicker');

const btnEasy = document.querySelector('.level-easy');
const btnMedium = document.querySelector('.level-medium');
const btnHard = document.querySelector('.level-hard');
let choosenLevel = '';

const nicknameField = document.querySelector('.choosen-nickname');

const btnTryAgain = document.querySelector('.button-try-again');

const nicknameScreen = document.querySelector('.nickname-screen');
const snakeColorScreen = document.querySelector('.snake-color');
const screenLevel = document.querySelector('.level-screen');
const mainContainer = document.querySelector('.main-container');
const message = document.getElementById('choosen-level');
const menuBtn = document.querySelector('.menu-container');
const endGameScreen = document.querySelector('.endgame-screen')

btnNickname.addEventListener('click', () => {
    const nickname = nicknameInput.value;
    if (nickname !== '') {
        nicknameScreen.style.visibility = 'hidden';
        snakeColorScreen.style.visibility = 'visible';
        nicknameField.innerHTML = nickname;
    }
})

btnPicker.addEventListener('click', () => {
    const colorPicked = pickerValue.value;
    // console.log(colorPicked)
    snakeColorScreen.style.visibility = 'hidden'
    screenLevel.style.visibility = 'visible'
})

btnEasy.addEventListener('click', () => {
    disappear();
    choosenLevel = 'easy';
    message.innerHTML = "Level: easy";
})

btnMedium.addEventListener('click', () => {
    disappear();
    choosenLevel = 'medium';
    message.innerHTML = "Level: medium";
})

btnHard.addEventListener('click', () => {
    disappear();
    choosenLevel = 'hard';
    message.innerHTML = "Level: hard";
})

menuBtn.addEventListener('click', () => {
    nicknameScreen.style.visibility = 'visible';
    menuBtn.style.visibility = 'hidden';
    mainContainer.style.opacity = 0.1;
})

function disappear() {
    screenLevel.style.visibility = 'hidden';
    menuBtn.style.visibility = 'visible';
    mainContainer.style.opacity = 1;
}

btnTryAgain.addEventListener('click', () => {
    endGameScreen.style.visibility = 'hidden'
    nicknameScreen.style.visibility = 'visible'
})