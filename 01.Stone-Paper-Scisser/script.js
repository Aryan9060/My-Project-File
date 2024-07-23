let boxes = document.querySelectorAll(".box");
let scores = document.querySelectorAll('.score')
let display = document.querySelectorAll('h1')
let result = document.querySelector('.result')
let reset = document.querySelector(".btn")

let clickSound = new Audio('Click.wav');
let Music = new Audio('music')
let winSound = new Audio('Result.mp3')
let loseSound = new Audio('lose.mp3')
let drowSound = new Audio('Drow.wav')



playerScore = 0;
computerScore = 0;

computer = () => {
    let x = Math.floor(Math.random() * 3)
    return boxes[x].getAttribute('id')

}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        result.classList.remove('win', 'lose', 'drow');
        loseSound.paused
        Music.paused
        clickSound.play();
        Music.play();
        playGame(box.getAttribute('id'))
        display[0].className = 'anime'
        display[1].className = 'anime'
    })
})

playGame = (playerChoice) => {
    const computerChoice = computer();
    console.log('plyer choice is ' + playerChoice);
    console.log('Computer choise is ' + computerChoice);
    setTimeout(() => {
        Music.paused;
        display[0].innerText = document.getElementById(`${playerChoice}`).innerText
        display[1].innerText = document.getElementById(`${computerChoice}`).innerText
        let playerWin = true;
        if (playerChoice === computerChoice) {
            console.log('drow');
            gamedrow();
        } else {
            if (playerChoice === 'item1') {
                playerWin = computerChoice === 'item2' ? false : true;
            } else if (playerChoice === 'item2') {
                playerWin = computerChoice === 'item3' ? false : true;
            } else if (playerChoice === 'item3') {
                playerWin = computerChoice === 'item1' ? false : true;
            }
            showWinner(playerWin)
        }
    }, 2000)
}

gamedrow = () => {
    result.classList.add('drow');
    result.textContent = `Drow`;
    display[0].classList.remove('anime')
    display[1].classList.remove('anime')
    drowSound.play();
}

showWinner = (win) => {
    display[0].classList.remove('anime')
    display[1].classList.remove('anime')
    if (win) {
        result.classList.add('win');
        playerScore++;
        scores[0].textContent = playerScore
        result.innerHTML = `Player win`;
        winSound.play();
    }
    else {
        result.classList.add('lose');
        computerScore++;
        scores[1].textContent = computerScore
        result.textContent = `Computer win`
        display[1].classList.remove('anime')
        loseSound.play();
    }
}

reset.addEventListener('click', () => {
    location.reload();
    // loseSound.paused
    // clickSound.play();
    // result.classList.remove('win', 'lose', 'drow');
    // playerScore = 0
    // computerScore = 0
    // scores[0].textContent = playerScore
    // scores[1].textContent = computerScore
})