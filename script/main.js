const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const resultDisplay = document.querySelector(".result-div")

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]; //8 is gonna be the highest
    randomSquare.classList.add("mole")

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        resultDisplay.textContent = "time is up, your score is " + score.textContent;
    }
}

let countDownTimerId = setInterval(countDown, 1000);