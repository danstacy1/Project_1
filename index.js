// add an event listener that will listen for 
document.addEventListener("DOMContentLoaded", () => {
    // now we need to call the makeCards function
    makeCards()
    shuffleCards()
    timer()
})

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
        imgBack: 'Image/cardpic.jpeg'
        
    }, 
    {
        name: 'chair',
        imgFace: 'Image/chairpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
        
    },
    {
        name: 'flag',
        imgFace: 'Image/flagpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
        
    },
    {
        name: 'hat',
        imgFace: 'Image/hatpic.png', 
        imgBack: 'Image/cardpic.jpeg'
        
    },
    {
        name: 'hotdog',
        imgFace: 'Image/hotdogpic.png',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'pizza',
        imgFace: 'Image/pizzapic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'umbrella',
        imgFace: 'Image/umbrellapic.png',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'wood',
        imgFace: 'Image/woodpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'ball',
        imgFace: 'Image/ballpic.png',
        imgBack: 'Image/cardpic.jpeg'
    }, 
    {
        name: 'chair',
        imgFace: 'Image/chairpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'flag',
        imgFace: 'Image/flagpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'hat',
        imgFace: 'Image/hatpic.png',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'hotdog',
        imgFace: 'Image/hotdogpic.png',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'pizza',
        imgFace: 'Image/pizzapic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'umbrella',
        imgFace: 'Image/umbrellapic.png',
        imgBack: 'Image/cardpic.jpeg'
    },
    {
        name: 'wood',
        imgFace: 'Image/woodpic.jpeg',
        imgBack: 'Image/cardpic.jpeg'
    }
]
    
    // call all the divs from HTML
    const gameboard = document.querySelector('#gameboard')
    
    // Make 16 divs to represent the cards.
    const makeCards = () => {
        // create 16 cards
        for (let i = 0; i < 16; i++) {
            const back = document.createElement('img')
            back.classList = 'back'
            back.setAttribute('data-name', pictures[i].name)
            back.setAttribute('src', pictures[i].imgBack)
            back.setAttribute('data-id', i)
            const card = document.createElement('div')
            card.classList = 'card'
            const face = document.createElement('img')
            face.classList = 'face'
    
            card.setAttribute('data-matched', false)
            card.setAttribute('clickable', true)
            face.setAttribute('data-name', pictures[i].name)
            
            back.addEventListener('click', flipCard)
            console.log('the card created', card)
            gameboard.appendChild(card)
            card.appendChild(face)
            card.appendChild(back)
        }
    }
    
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
    console.log('this is the card', theCard)
    const cardName = theCard.dataset.name
    const matched = theCard.dataset.matched == 'true' ? true : false
    console.log('this is matched', matched)
    const clickable = theCard.dataset.clickable == 'false' ? false : true
    console.log('am I clickable', clickable)
    if (!matched && clickable === true) {

        if (gameWinner == false && !firstCardPicked) {
            firstCardPicked = theCard
            console.log('one card selected', firstCardPicked)
            const cardOneIndex = firstCardPicked.dataset.id
            firstCardPicked.setAttribute('src', pictures[cardOneIndex].imgFace)
            firstCardPicked.setAttribute('data-name', pictures[cardOneIndex].name)
            firstCardPicked.dataset.clickable = false
            span.innerText = ''
            
            // console.log(e.target.imgFace)
        }   else if (firstCardPicked !== null && !secondCardPicked) {
            secondCardPicked = theCard
            // console.log('second card selected', secondCardPicked)
            const cardTwoIndex = secondCardPicked.dataset.id
            secondCardPicked.setAttribute('src', pictures[cardTwoIndex].imgFace)
            secondCardPicked.setAttribute('data-name', pictures[cardTwoIndex].name)
            secondCardPicked.dataset.clickable = false
            span.innerText = ''
        }    
        
            if (secondCardPicked !== null) {
                 // console.log ('two cards flipped')
                checkForMatch()
            }
    } else {
        span.innerText = 'I\'ve Already Been Picked Try Another Card'
        console.log('try another card')
    }
}

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
    console.log(fcName)
    console.log(firstCardPicked.dataset.name)
    const scName = secondCardPicked.dataset.name
    console.log(scName)
    console.log(secondCardPicked.dataset.name)
    // console.log('sc', secondCardPicked)
    if (fcName === scName) {
        firstCardPicked.dataset.matched = true
        secondCardPicked.dataset.matched = true
        span.innerText = 'Match!'
        // console.log('its a match')
        pairsRemaining -= 1
        firstCardPicked = null
        secondCardPicked = null
        setTimeout(checkForWin, 200)
    } else {
        setTimeout(resetCards, 1000)
        firstCardPicked.dataset.clickable = true
        secondCardPicked.dataset.clickable = true
        span.innerText = 'Try Again!'
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
        winner.innerText = 'You Won the Game'

    }
}

const shuffleCards = () => {
    for (let i = pictures.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pictures[i];
    pictures[i] = pictures[j];
    pictures[j] = temp;
    }
    pictures.forEach((element, index) => {
		// remove classes except card
		element.classList = 'card';
	})
}

	// empty arrays to store classes and textContent
	// let classTest = [];
	// let textTest = [];

	// classTest = pictures.map(item => item.cardClass)
	// textTest = pictures.map(item => item.cardText)
	// loop through cards to add classes and value of shuffled cards
	// add classes: animal and purple
	// classTest.map((item, i) => {
	// 	cards[i].classList.add(item)
	// 	cards[i].classList.add('purple')
	// 	return cards;
	// })
	// textTest.map((item, i) => cards[i].childNodes[1].childNodes[3].textContent = item)


function timer() {
    let i = 00;
    let timer = setInterval(function() {
        document.getElementById('timer').innerText = 'Timer ' + i;
        i++;
        if (pairsRemaining === 0) {
            clearInterval(timer);
        }
    }, 1000); //roughly 1 minute
  }

// Create a restart button to replay the game with the same options.
restart.addEventListener('click', function (event) {
    location.reload()
})