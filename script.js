const btnEasy = document.querySelector('.level-easy');
const btnMedium = document.querySelector('.level-medium');
const btnHard = document.querySelector('.level-hard');
let choosenLevel = '';

const screenLevel = document.querySelector('.level-screen');
const mainContainer = document.querySelector('.main-container');
const message = document.getElementById('choosen-level');

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

function disappear() {
    screenLevel.style.visibility = 'hidden';
    mainContainer.style.opacity = 1;
}