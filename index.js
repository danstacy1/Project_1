
// This will keep track of whose turn it is.
let playerTurn = true
// This was used for a turn counter. This will help to display whose turn it is.
let turn = 0
// Keep track of how many cards have been flipped in a turn.
let firstCardPicked = null
let secondCardPicked = null
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
    
'Image/cardpic.jpeg'
    // call all the divs from HTML
    const gameboard = document.querySelector('#gameboard')
    
    // Make 16 divs to represent the cards.
    const makeCards = () => {
        // create 16 cards
        for (let i = 0; i < 16; i++) {
            const face = document.createElement('img')
            face.classList = 'face'
            const back = document.createElement('img')
            back.classList = 'back'
            if (i > 7) {
                // array index should be i - 8.
                face.setAttribute('data-name', pictures[i-8].name)
                face.setAttribute('src', pictures[i-8].img)
            } else {
                face.setAttribute('data-name', pictures[i].name)
                face.setAttribute('src', pictures[i].img)
            }
            face.setAttribute('data-id', i)
            face.addEventListener('click', flipCard)
            console.log('the card created', face)
            gameboard.appendChild(face)
        }
    }
    // add an event listener that will listen for 
    document.addEventListener("DOMContentLoaded", () => {
        // now we need to call the makeCards function
        makeCards()
    })
    
// Create an addEventListener to flip each card. 
// Create a function the prevents more than two cards being selected at a time.
    
// flipCard
// flipCard needs to do 3 things
// 1. change the class so the card flips
// 2. if there is no first card, assign event target to first card.
// 3. if one card is already selected, assign event target to the second card. 
// const card = document.querySelectorAll('.img')

function flipCard (e) {
    console.log('this is the event', e)
    const theCard = e.target
    console.log('this is the card', theCard)
    const cardName = theCard.dataset.name
    console.log('this is cardname', cardName)
    this.classList.toggle('flip')
    if (gameWinner == false && !firstCardPicked) {
        firstCardPicked = theCard
        console.log('one card selected')
    }   else if (firstCardPicked !== null && !secondCardPicked) {
        secondCardPicked = theCard
        console.log('second card selected', secondCardPicked)
        if (secondCardPicked !== null) {
            console.log ('two cards flipped')
            // checkforWin()
            checkForMatch()
        }
    }
}
// theCard.forEach(theCard => theCard.addEventListener('click', flipCard,{
//     once: true
// }))


// Create a function that checks of a matching pair

//checkForMatch
// checkForMatch needs to do 4 things
// 1. look at the first card selected by the player.
// 2. compare the name of fc to the name of the sc.
// 3. if there is a match, leave both cards showing, and send a message saying it is a match.
// 4. if not a match, send a message that says try again, and flip the card back over, and then change fc and sc back to null.
 
function checkForMatch() {
    console.log('fc', firstCardPicked.dataset)
    const fcName = firstCardPicked.dataset.name
    console.log('sc', secondCardPicked)
    const scName = secondCardPicked.dataset.name
    if (fcName === scName) {
        face.target.removeEventListener('click', flipCard)
        console.log('its a match')
    } else {
        firstCardPicked = null
        secondCardPicked = null
        console.log('not a match')
    } 
}

// Create a restart button to replay the game with the same options.
restart.addEventListener('click', function (event) {
    location.reload()
})