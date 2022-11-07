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

const saveBtn = document.querySelector('.save-yes')
const dontSaveBtn = document.querySelector('.save-no')

// console.log(rankNicknames)

function switchToColor() {
    screenLevel.style.display = 'none';
    snakeColorScreen.style.display = 'flex';
}

btnEasy.addEventListener('click', () => {
    choosenLevel = 'easy';
    // console.log(choosenLevel)
    message.innerHTML = "Level: easy";
    switchToColor()
})

btnMedium.addEventListener('click', () => {
    choosenLevel = 'medium';
    message.innerHTML = "Level: medium";
    switchToColor()
})

btnHard.addEventListener('click', () => {
    choosenLevel = 'hard';
    message.innerHTML = "Level: hard";
    switchToColor()
})

saveBtn.addEventListener('click', () => {
    endGameScreen.style.display = 'none'
    nicknameScreen.style.display = 'flex'
})

dontSaveBtn.addEventListener('click', () => {
    window.location.reload()
})

btnNickname.addEventListener('click', () => {
    const nickname = nicknameInput.value;
    
    if (nickname !== '') {
        nicknameScreen.style.display = 'none';
        // nicknameField.innerHTML = nickname;
    }
})

btnPicker.addEventListener('click', () => {
    const colorPicked = pickerValue.value;
    // console.log(colorPicked)
    snakeColorScreen.style.display = 'none'
    disappear();
})


menuBtn.addEventListener('click', () => {
    // nicknameScreen.style.display = 'flex';
    screenLevel.style.display = 'block';
    menuBtn.style.display = 'none';
    mainContainer.style.opacity = 0.1;
})

function disappear() {
    screenLevel.style.display = 'none';
    menuBtn.style.display = 'flex';
    mainContainer.style.opacity = 1;
}

// btnTryAgain.addEventListener('click', () => {
//     endGameScreen.style.display = 'none'
//     nicknameScreen.style.display = 'flex'
// })