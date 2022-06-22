// call all the divs from HTML
const gameboard = document.querySelector('#gameboard')

// insert pictures to divs
const pictures = [
{
    name: 'ball',
    img: 'Image/ballpic.png',
}, 
{
    name: 'chair',
    img: 'Image/chairpic.jpeg',
},
{
    name: 'flag',
    img: 'Image/flagpic.jpeg',
},
{
    name: 'hat',
    img: 'Image/hatpic.png',
},
{
    name: 'hotdog',
    img: 'Image/hotdogpic.png',
},
{
    name: 'pizza',
    img: 'Image/pizzapic.jpeg',
},
{
    name: 'umbrella',
    img: 'Image/umbrellapic.png',
},
{
    name: 'wood',
    img: 'Image/woodpic.jpeg',
}
]
// let gamecard = document.getElementsByClassName('gamecard')
// This is calling the data ID of the card pairs.
let id = document.querySelectorAll('#id')

// This will keep track of whose turn it is.
let playerTurn = true
// This was used for a turn counter. This will help to display whose turn it is.
let turn = 0
// This keeps track of which cards have been flipped when matching.
let hasCardFLipped = false
// Keep track of how many cards have been flipped.
let firstCardFlipped = false
let secondCardFlipped = false
// This lets the game know whether to keep going or not.
let gameWinner = false

// trying to create cards in JS
const makeGameCards = () => {
    // create 16 cards
    for (let i = 0; i < 16; i++) {
        const card = document.createElement('img')
        if (i > 7) {
            // array index should be i - 8.
            card.setAttribute('data-name', pictures[i-8].name)
            card.setAttribute('src', pictures[i-8].img)
        } else {
            card.setAttribute('data-name', pictures[i].name)
            card.setAttribute('src', pictures[i].img)

        }
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        console.log('the card created', card)
        gameboard.appendChild(card)
        // create a div for every card
        const gamecard = document.createElement('div')
        // add the class of gamecards to our new divs
        gamecard.classList.add('gamecard-back-face')
        // gamecard.classList.add('gamecard')
        // now we want to add this ^^^^ to the gameboard
        gameboard.appendChild(gamecard)
        // make them into a grid
    
        // add pictures to the divs

        // add event listener to the each card
        gamecard.addEventListener('click', flipCard)
    }
}

// add an event listener that will listen for 
document.addEventListener("DOMContentLoaded", () => {
    // now we need to call the makePalette function
    makeGameCards()
})

// Create an addEventListener to flip each card. 
// Create a function the prevents more than two cards being selected at a time.

const cards = document.querySelectorAll('.gamecard')

function flipCard () {
    this.classList.toggle('flip')
    if (gameWinner == false) {
            firstCardFlipped = true
            console.log('one card flipped')
            console.log()
    }   else if (firstCardFlipped === true) {
            console.log('secondcardflipped', secondCardFlipped)
            secondCardFlipped = true
            console.log('secondcardflipped', secondCardFlipped)
            if (secondCardFlipped === true) {
                console.log('secondcardflipped', secondCardFlipped)
                console.log ('two cards flipped')
                // checkforWin()
                checkForMatch()
            }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard,{
    once: true
}))
 


// Create a function that checks of a matching pair
function checkForMatch() {
    if (firstCardFlipped === true && secondCardFlipped === true) {
        if (firstCardFlipped.gamecard.data === secondCardFlipped.gamecard.data) {
            console.log('match')
            winner.innerText = 'You Won the Game!'
            gameWinner = true
        }
    }
}

// check for a win
// checkForWin () => {
//     if (gamecard.data.1 ===)
// }

// Create a restart button to replay the game with the same options.
restart.addEventListener('click', function (event) {
    location.reload()
})