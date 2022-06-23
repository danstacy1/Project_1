// call all the divs from HTML
const gameboard = document.querySelector('#gameboard')

// This will keep track of whose turn it is.
let playerTurn = true
// This was used for a turn counter. This will help to display whose turn it is.
let turn = 0
// Keep track of how many cards have been flipped in a turn.
let firstCardFlipped = null
let secondCardFlipped = null
// This lets the game know whether to keep going or not.
let gameWinner = false

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
}]

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
        // const card = document.createElement('div')
        // add the class of gamecards to our new divs
        // card.classList.add('gamecard-back-face')
        // card.classList.add('img')
        // now we want to add this ^^^^ to the gameboard
        // gameboard.appendChild(gamecard)
        // make them into a grid
    
        // add pictures to the divs

        // add event listener to the each card
        // card.addEventListener('click', flipCard)
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

function flipCard (e) {
    console.log('this is the event', e)
    const theCard = e.target
    const cardName = theCard.dataset.name
    console.log('this is the card', theCard)
    console.log('this is cardname', cardName)
    this.classList.toggle('flip')
    if (gameWinner == false && !firstCardFlipped) {
            firstCardFlipped = theCard
            console.log('one card flipped')
            console.log()
    }   else if (firstCardFlipped !== null && !secondCardFlipped) {
            console.log('secondcardflipped', secondCardFlipped)
            secondCardFlipped = theCard
            console.log('secondcardflipped', secondCardFlipped)
            if (secondCardFlipped !== null) {
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
    console.log('fc', firstCardFlipped.dataset)
    const fcName = firstCardFlipped.dataset.name
    console.log('sc', secondCardFlipped)
    const scName = secondCardFlipped.dataset.name
    if (fcName === scName) {
        console.log('its a match')
    } else {
        firstCardFlipped = null
        secondCardFlipped = null
        console.log('not a match')
    }
    // if (firstCardFlipped === true && secondCardFlipped === true) {
    //     if (pictures.img.src === pictures.img.src) {
    //         console.log('match')
    //     }
    // }
}
// flipCard
// flipCard needs to do 3 things
// 1. change the class so the card flips
// 2. if there is no first card, assign event target to first card.
// 3. if one card is already selected, assign event target to the second card. 

//checkForMatch
// checkForMatch needs to do x things
// 1. look at the first card selected by the player.
// 2. compare the name of fc to the name of the sc.
// 3. if there is a match, leave both cards showing, and send a message saying it is a match.
// 4. if not a match, send a message that says try again, and flip the card back over, and then change fc and sc back to null. 

// check for a win
// checkForWin () => {
    //     if (card.data.name ===)
    // winner.innerText = 'You Won the Game!'
    // gameWinner = true
    // }
    
// Create a restart button to replay the game with the same options.
restart.addEventListener('click', function (event) {
    location.reload()
})