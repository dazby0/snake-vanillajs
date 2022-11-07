const url = document.URL
const nickname = url.slice(url.indexOf("=")+1) 
// console.log(nickname)

const rankNicknamesArr = [];
const rankNicknames = document.querySelectorAll('li')
// console.log(rankNicknames)

const nicknameScreen = document.querySelector('.nickname-screen');
const nicknameInput = document.getElementById('nickname');
const btnNickname = document.getElementById('button-nickname');
const mainContainer = document.querySelector('.main')

rankNicknames.forEach(rankNickname => {
    rankNicknamesArr.push(rankNickname.innerHTML)
});
// console.log(rankNicknamesArr)


function matchItem(nickname) {
    const isMatched = rankNicknamesArr.findIndex(el => el === nickname)
    // console.log(isMatched)

    if(isMatched !== -1) {
        const matchedItem = rankNicknames[isMatched]
        // console.log(matchedItem)
        matchedItem.className = 'active-nick'
    }
}
matchItem(nickname)


const matchedItem = document.querySelector('.active-nick')
matchedItem.addEventListener('click', () => {
    nicknameScreen.style.display = 'flex'
    mainContainer.style.opacity = 0.1
})

btnNickname.addEventListener('click', () => {
    const updatedNickname = nicknameInput.value;
    
    if (updatedNickname !== '') {
        nicknameScreen.style.display = 'none';
        // nicknameField.innerHTML = nickname;

        //DODAC UPDATE NICKU
    }
})