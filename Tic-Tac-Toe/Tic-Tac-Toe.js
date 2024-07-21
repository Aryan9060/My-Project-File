let boxes = document.querySelectorAll('.box');
let turns = document.querySelectorAll(".turn");
let result = document.querySelector('#result');
let button = document.querySelector('#btn')

let turn = 'X';
let isGameOver = false

boxes.forEach(e => {
    e.innerHTML = ''
    e.addEventListener('click', () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn
            cheakWinner()
            cheakDrow()
            changeTurn()
        }
    })
});

let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

cheakWinner = () => {
    for (let i = 0; i < win.length; i++) {
        let v0 = boxes[win[i][0]].innerHTML;
        let v1 = boxes[win[i][1]].innerHTML;
        let v2 = boxes[win[i][2]].innerHTML;

        if (v0 != "" && v0 == v1 && v0 == v2) {
            result.classList.remove('hide')
            result.textContent = `Team ${turn} is Winner`;

            for (j = 0; j < 3; j++) {
                boxes[win[i][j]].style.background = '#7cff1f';
                isGameOver = true
            }
        }
    }
}


cheakDrow = () => {
    if (!isGameOver) {
        let isDrow = true;
        boxes.forEach(e => {
            if (e.textContent === "") isDrow = false;
        })
        if (isDrow) {
            isGameOver = true;
            result.classList.remove('hide')
            result.textContent = `Match Drow`;

        }
    }
}


changeTurn = () => {
    if (turn === 'X') {
        turn = 'O';
        turns[0].style.background = '#000';
        turns[1].style.background = '#7cff1f';
    } else {
        turn = 'X';
        turns[0].style.background = '#7cff1f';
        turns[1].style.background = '#000';
    }
}

button.addEventListener('click', () => {
    isGameOver = false;
    turn = 'X';
    result.className = ("hide")
    turns[0].style.background = '#7cff1f';
    turns[1].style.background = '#000';
    boxes.forEach((e) => {
        e.innerHTML = "";
        e.style.background = '#000'
    })
})