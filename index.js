
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
face.setAttribute('data-name', pictures[i].name)
face.setAttribute('src', pictures[i].imgFace)

function flipCard (e) {
    console.log('this is the event', e)
    const theCard = e.target
    console.log('this is the card', theCard)
    const cardName = theCard.dataset.name
    console.log('this is cardname', cardName)
    // const imgFace = pictures.imgFace
    // const face = getElementByClass('face')
    if (gameWinner == false && !firstCardPicked) {
        firstCardPicked = theCard
        console.log('one card selected')
        // this.classList.toggle('face')
        // face.setAttribute('data-name', pictures[i].name)
        // face.setAttribute('src', pictures[i].imgFace)
        this.setAttribute('src', pictures[theCard], 'face')
        console.log(e.target.imgFace)
    }   else if (firstCardPicked !== null && !secondCardPicked) {
        secondCardPicked = theCard
        console.log('second card selected', secondCardPicked)
        this.setAttribute('src', pictures[theCard], 'face')
        if (secondCardPicked !== null) {
            console.log ('two cards flipped')
            // checkforWin()
            checkForMatch()
        }
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
    console.log('fc', firstCardPicked.dataset)
    const scName = secondCardPicked.dataset.name
    console.log('sc', secondCardPicked)
    if (fcName === scName) {
        // this.target.removeEventListener('click', flipCard)
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