let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let s3 = document.getElementById('s3')
let s4 = document.getElementById('s4')
let s5 = document.getElementById('s5')
let s6 = document.getElementById('s6')
let s7 = document.getElementById('s7')
let s8 = document.getElementById('s8')
let s9 = document.getElementById('s9')

let displayTurn = document.getElementById('turn')


// This just determines whose turn it is. If turn is divisible by 2, it is p1 and vice versa
var turn = 2
displayTurn.innerHTML = "Player 1 (X)"

// This function decides which symbol to place on button click
function getSymbol(symbol) {

    turn++
    let player

    // Check whose turn it is and change player
    if (turn % 2 === 0) {
        symbol = "O"
        displayTurn.innerHTML = "Player 1 (X)"
    } else {
        symbol = "X"
        displayTurn.innerHTML = "Player 2 (X)"
    }
    return symbol
}

// Function that shows which button has been clicked and also calls the play function
function btnClick(squareNum) {
    console.log(squareNum, " clicked")
    play(squareNum, getSymbol())
}

// This function places symbol in the clicked square
function play(squareNum, symbol) {
    document.getElementById(squareNum).innerText = symbol
    // Change the id so user can't click the button to change symbol again. Pressing it again will have no visible output except this console error: Uncaught TypeError: Cannot set property 'innerText' of null
    document.getElementById(squareNum).id = 'disabled'

    // Winning Combos
    if (s1.innerHTML === "X" && s2.innerHTML === "X" && s3.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s4.innerHTML === "X" && s5.innerHTML === "X" && s6.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s7.innerHTML === "X" && s8.innerHTML === "X" && s9.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s1.innerHTML === "X" && s4.innerHTML === "X" && s7.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s2.innerHTML === "X" && s5.innerHTML === "X" && s8.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s3.innerHTML === "X" && s6.innerHTML === "X" && s7.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s1.innerHTML === "X" && s5.innerHTML === "X" && s9.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    } else if (s3.innerHTML === "X" && s5.innerHTML === "X" && s7.innerHTML === "X") {
        document.getElementById('win').innerHTML = "PLAYER 1 WINS"
    }
    else if (s1.innerHTML === "O" && s2.innerHTML === "O" && s3.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s4.innerHTML === "O" && s5.innerHTML === "O" && s6.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s7.innerHTML === "O" && s8.innerHTML === "O" && s9.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s1.innerHTML === "O" && s4.innerHTML === "O" && s7.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s2.innerHTML === "O" && s5.innerHTML === "O" && s8.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s3.innerHTML === "O" && s6.innerHTML === "O" && s7.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s1.innerHTML === "O" && s5.innerHTML === "O" && s9.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    } else if (s3.innerHTML === "O" && s5.innerHTML === "O" && s7.innerHTML === "O") {
        document.getElementById('win').innerHTML = "PLAYER 2 WINS"
    }
}



