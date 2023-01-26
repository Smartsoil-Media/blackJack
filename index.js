
let cards = []
let roundStarted = false
let hasBlackJack = false
let isAlive = false
let isBroke = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let yourWinsEl = document.getElementById("your-wins")
let yourLossesEl = document.getElementById("your-losses")
let youCashEl = document.getElementById("your-cash")
let casinoCashEl = document.getElementById("casino-cash")
let casinoHandEl = document.getElementById("casino-sum")
let dealBtn = document.getElementById("start-btn")
let hitBtn = document.getElementById("new-card-btn")
let holdBtn = document.getElementById("hold-btn")
let sum = 0
let wins = 0
let losses = 0
let userWin = 200
let userLoss = -100
let casinoWin = 100
let casinoLoss = -200
let cash = 600
let casinoCash = 5000
let canClickDeal = true
let userHoldingHand = false





function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    }
    else {return randomNumber}

}

function getRandomNumber() {
    let randomNumberC = Math.floor(Math.random() * 6) + 16
    if (randomNumberC ===1) {
        return 21
    } else {
        return randomNumberC
    }
}



function startGame() {
    if (isBroke === true) {
        messageEl.tabIndex = "You've already started the game"

    } else {
        dealBtn.style.visibility = "hidden";
        canClickDeal = false
        hasStarted = true
        hasBlackJack = false
        roundStarted = true
        isBroke = false
        isAlive = true 
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        casinoHandEl.textContent = "Casino's hand: "
        renderGame() 
    }

}

function newRound() {
    cards = []
    sum = "Sum :"
    youCashEl.textContent = cash
    casinoCashEl.textContent = casinoCash
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = sum
    messageEl.textContent = "Click 'deal' to start"
    casinoHandEl.textContent = "Casino's hand: "
    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";

}


function hold() {
    let casinoSum = getRandomNumber ()
    casinoHandEl.textContent = "Casino's hand: " + casinoSum
    userHoldingHand = true

    if (casinoSum > sum) {
        messageEl.textContent = "Casino wins, you lose $100"
        cash += userLoss
        casinoCash += casinoWin
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash

        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";

    } else if (casinoSum < sum && sum <= 21) {
          messageEl.textContent = "Winner winner! Here's $200"
          cash += userWin
          youCashEl.textContent = cash
          youCashEl.textContent = cash
          casinoCashEl.textContent = casinoCash

          dealBtn.style.visibility = "hidden";
          hitBtn.style.visibility = "hidden";
          holdBtn.style.visibility = "hidden";
    } else if (cash <= 0) {
        messageEl.textContent = "YOU'RE BROKE GAME OVER"
    }
    
    else if (casinoSum === sum) {
        messageEl.textContent = "Wow, it's a tie..!"
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
    }
    
    else {
        messageEl.textContent = "You're out of the game! 😭"
        cash += userLoss
        casinoCash += casinoWin
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash

    }
}



function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    

    for (let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + ", "
    }

if (cash === 0) {
    message = "YOU'RE BROKE GAME OVER"
    isBroke = true
} else {
    if (sum <= 20 && sum >= 18) {
        message = "OOOooohhhh...... Hit or hold?"
    } else if (sum <= 15) {
        message = "I wouldn't hold that.."
    } else if (sum >= 16 && sum <= 18) {
        message = "That's a tough one.."
    } else if (sum === 21) {
        message = "Blackjack! You win $200 🥳"
        hasBlackJack = true
        cash += userWin
        casinoCash += casinoLoss
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash
        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
    } else  {
        message = "You lose! 😭 That's -$100"
        cash += userLoss
        casinoCash += casinoWin
        isAlive = false
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash
        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";

    }

}
    messageEl.textContent = message
}




function newCard() {

    if (isAlive === true && hasBlackJack === false && isBroke === false)  {
    
    let card = getRandomCard()
    canClickDeal = false
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

function newGame() {
    isBroke = false
    cash = 1000
    casinoCash = 5000
    cards = []
    sum = "Sum :"
    youCashEl.textContent = cash
    casinoCashEl.textContent = casinoCash
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = sum
    messageEl.textContent = "just one more try.."
    casinoHandEl.textContent = "Casino's hand: "
}


