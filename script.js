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

const rankNicknamesArr = [];
const rankNicknames = document.querySelectorAll('li')

// console.log(rankNicknames)

rankNicknames.forEach(rankNickname => {
    rankNicknamesArr.push(rankNickname.innerHTML)
});

function matchItem(nickname) {
    const isMatched = rankNicknamesArr.findIndex(el => el === nickname)
    // console.log(isMatched)

    if(isMatched !== -1) {
        const matchedItem = rankNicknames[isMatched]
        // console.log(matchedItem)
        matchedItem.className = 'active-nick'
    }
}

btnNickname.addEventListener('click', () => {
    const nickname = nicknameInput.value;
    
    if (nickname !== '') {
        nicknameScreen.style.display = 'none';
        snakeColorScreen.style.display = 'flex';
        nicknameField.innerHTML = nickname;

        matchItem(nickname)
    }
})

btnPicker.addEventListener('click', () => {
    const colorPicked = pickerValue.value;
    // console.log(colorPicked)
    snakeColorScreen.style.display = 'none'
    screenLevel.style.display = 'block'
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
    nicknameScreen.style.display = 'flex';
    menuBtn.style.display = 'none';
    mainContainer.style.opacity = 0.1;
})

function disappear() {
    screenLevel.style.display = 'none';
    menuBtn.style.display = 'flex';
    mainContainer.style.opacity = 1;
}

btnTryAgain.addEventListener('click', () => {
    endGameScreen.style.display = 'none'
    nicknameScreen.style.display = 'flex'
})

// setTimeout(() => {
//     endGameScreen.style.display = 'flex'

//     const activeNick = document.querySelector('.active-nick')
//     console.log(activeNick)

//     activeNick.addEventListener('click', () => {
//         endGameScreen.style.display = 'none'
//         mainContainer.style.opacity = 0.1;
//         nicknameScreen.style.display = 'flex'
//     })
// }, 5000)