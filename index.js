// This will keep track of whose turn it is.
let playerTurn = true
// This was used for a turn counter. This will help to display whose turn it is.
let turn = 0
// This controled which boxes had been click already in tic-tac-toe
let card = [true, true, true, true, true, true, true, true, true]
// This made the player turns alternate
const gameFlow = ["playerx", "playero", "playerx", "playerx", "playero", "playerx", "playero", "playerx", "playero"]
// This lets the game know whether to keep going or not.
let gameWinner = false

// call all the divs
let gameboard = document.getElementsByClassName('gameboard')
let gamecard = document.getElementsByClassName('gamecard')

// Create an addEventListener to flip each card. 
const cards = document.querySelectorAll('.gamecard')

function flipcard () {
    this.classList.toggle('flip')
}
cards.forEach(card => card.addEventListener('click', flipcard))