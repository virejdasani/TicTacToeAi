// Define board
let board = {
    '1': ' -',
    '2': ' -',
    '3': ' -',
    '4': ' -',
    '5': ' -',
    '6': ' -',
    '7': ' -',
    '8': ' -',
    '9': ' -'
}

// This chunk of code is responsible to display the X and O and whose turn it is on the board
//  --------------------------------------------------------------------------------
let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let s3 = document.getElementById('s3')
let s4 = document.getElementById('s4')
let s5 = document.getElementById('s5')
let s6 = document.getElementById('s6')
let s7 = document.getElementById('s7')
let s8 = document.getElementById('s8')
let s9 = document.getElementById('s9')

s1.innerHTML = board[1]
s2.innerHTML = board[2]
s3.innerHTML = board[3]
s4.innerHTML = board[4]
s5.innerHTML = board[5]
s6.innerHTML = board[6]
s7.innerHTML = board[7]
s8.innerHTML = board[8]
s9.innerHTML = board[9]

let displayTurn = document.getElementById('turn')
//  --------------------------------------------------------------------------------

// This just determines whose turn it is. If turn is divisible by 2, it is p1 and vice versa
var turn = 2
displayTurn.innerHTML = "Player 1"

// This function decides which symbol to place on button click
function getSymbol(symbol) {

    turn++
    let player

    // Check whose turn it is and change player
    if (turn % 2 === 0) {
        symbol = "O"
        displayTurn.innerHTML = "Player 1' turn"
    } else {
        symbol = "X"
        displayTurn.innerHTML = "Player 2's turn"
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
    document.getElementById(squareNum).id = 'newID'
}