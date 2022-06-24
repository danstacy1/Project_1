
// This will keep track of whose turn it is.
let playerTurn = true
// This was used for a turn counter. This will help to display whose turn it is.
let turn = 0
// Keep track of how many cards have been flipped in a turn.
let firstCardPicked = null
let secondCardPicked = null
// This lets the game know whether to keep going or not.
let gameWinner = false
let pairsRemaining = 8
// insert pictures to divs
// pictures[0].imgFace
const pictures = [
    {
        name: 'ball',
        imgFace: 'Image/ballpic.png',
        imgBack: 'Image/cardpic.jpeg',
    }, 
    {
        name: 'chair',
        imgFace: 'Image/chairpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'flag',
        imgFace: 'Image/flagpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'hat',
        imgFace: 'Image/hatpic.png', 
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'hotdog',
        imgFace: 'Image/hotdogpic.png',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'pizza',
        imgFace: 'Image/pizzapic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'umbrella',
        imgFace: 'Image/umbrellapic.png',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'wood',
        imgFace: 'Image/woodpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'ball',
        imgFace: 'Image/ballpic.png',
        imgBack: 'Image/cardpic.jpeg',
    }, 
    {
        name: 'chair',
        imgFace: 'Image/chairpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'flag',
        imgFace: 'Image/flagpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'hat',
        imgFace: 'Image/hatpic.png',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'hotdog',
        imgFace: 'Image/hotdogpic.png',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'pizza',
        imgFace: 'Image/pizzapic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'umbrella',
        imgFace: 'Image/umbrellapic.png',
        imgBack: 'Image/cardpic.jpeg',
    },
    {
        name: 'wood',
        imgFace: 'Image/woodpic.jpeg',
        imgBack: 'Image/cardpic.jpeg',
    }
]
    
    // call all the divs from HTML
    const gameboard = document.querySelector('#gameboard')
    
    // Make 16 divs to represent the cards.
    const makeCards = () => {
        // create 16 cards
        for (let i = 0; i < 16; i++) {
            const card = document.createElement('div')
            card.classList = 'card'
            const back = document.createElement('img')
            back.classList = 'back'
            const face = document.createElement('img')
            face.classList = 'face'
            // face.setAttribute('data-name', pictures[i].name)
            // face.setAttribute('src', pictures[i].imgFace)
            // face.style.display = 'none'
            // face.setAttribute('src', pictures[i].imgFace)
            if (i > 7) {
                // array index should be i - 8.
                back.setAttribute('data-name', pictures[i-8].name)
                back.setAttribute('src', pictures[i-8].imgBack)
            } else {
                back.setAttribute('data-name', pictures[i].name)
                back.setAttribute('src', pictures[i].imgBack)
            }
            back.setAttribute('data-id', i)
            back.addEventListener('click', flipCard)
            console.log('the card created', back)
            gameboard.appendChild(card)
            card.appendChild(face)
            card.appendChild(back)
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
document.querySelectorAll('face')


function flipCard (e) {
    // console.log('this is the event', e)
    const theCard = e.target
    // console.log('this is the card', theCard)
    const cardName = theCard.dataset.name
    // console.log('this is cardname', cardName)
    const cardIndex = theCard.dataset.id
    if (gameWinner == false && !firstCardPicked) {
        firstCardPicked = theCard
        console.log('one card selected', firstCardPicked)
        const cardOneIndex = firstCardPicked.dataset.id
        firstCardPicked.setAttribute('src', pictures[cardOneIndex].imgFace)
        // console.log(e.target.imgFace)
    }   else if (firstCardPicked !== null && !secondCardPicked) {
        secondCardPicked = theCard
        // console.log('second card selected', secondCardPicked)
        const cardTwoIndex = secondCardPicked.dataset.id
        secondCardPicked.setAttribute('src', pictures[cardTwoIndex].imgFace)
    }    
        if (cardIndex === cardTwoIndex) {
            alert('You cannot choose the same card twice, TRY AGAIN!')
            resetCards()
        }
        if (secondCardPicked !== null) {
            // console.log ('two cards flipped')
            checkForMatch()
        }
    }

// card.forEach(theCard => theCard.addEventListener('click', flipCard))


// Create a function that checks of a matching pair

//checkForMatch
// checkForMatch needs to do 4 things
// 1. look at the first card selected by the player.
// 2. compare the name of fc to the name of the sc.
// 3. if there is a match, leave both cards showing, and send a message saying it is a match.
// 4. if not a match, send a message that says try again, and flip the card back over, and then change fc and sc back to null.
 
function checkForMatch() {
    const fcName = firstCardPicked.dataset.name
    // console.log('fc', firstCardPicked.dataset)
    const scName = secondCardPicked.dataset.name
    // console.log('sc', secondCardPicked)
    if (fcName === scName) {
        // e.target.removeEventListener('click', flipCard)
        // console.log('its a match')
        const match = firstCardPicked.dataset.name && secondCardPicked.dataset.name
        // e.fcName.removeEventListener('click', flipCard)
        console.log(match)
        pairsRemaining -= 1
        firstCardPicked = null
        secondCardPicked = null
        setTimeout(checkForWin, 200)
    } else {
        setTimeout(resetCards, 1200)
        // console.log('not a match')
    } 
}

function resetCards() {
    const cardOneIndex = firstCardPicked.dataset.id
    firstCardPicked.setAttribute('src', pictures[cardOneIndex].imgBack)
    const cardTwoIndex = secondCardPicked.dataset.id
    secondCardPicked.setAttribute('src', pictures[cardTwoIndex].imgBack)
    firstCardPicked = null
    secondCardPicked = null
}

// check for a win
function checkForWin() {
    if (pairsRemaining === 0) {
        gameWinner == true
        // back.removeEventListener('click', flipCard)
        alert('You Won! Restart game to play again.')
    }
}

// Create a restart button to replay the game with the same options.
restart.addEventListener('click', function (event) {
    location.reload()
})