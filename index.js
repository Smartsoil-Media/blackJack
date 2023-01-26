
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
let sum = 0
let wins = 0
let losses = 0
let userWin = 200
let userLoss = -100
let casinoWin = 100
let casinoLoss = -200
let cash = 200
let casinoCash = 5000





function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    }
    else {return randomNumber}

}



function startGame() {
    if (isBroke === true) {

    } else {
        hasBlackJack = false
        roundStarted = true
        isBroke = false
        isAlive = true 
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame() 
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
    } else if (sum <= 10) {
        message = "Dam that's unlucky"
    } else if (sum >= 10 && sum <= 18) {
        message = "That's a tough one.."
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
        cash += userWin
        casinoCash += casinoLoss
        wins += 1 
        yourWinsEl.textContent = wins
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash
        

    } else {
        message = "You're out of the game! 😭"
        cash += userLoss
        casinoCash += casinoWin
        losses += 1 
        yourLossesEl.textContent = losses
        isAlive = false
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash

    }

}
    messageEl.textContent = message
}




function newCard() {

    if (isAlive === true && hasBlackJack === false && isBroke === false)  {
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

function newGame() {
    cash = 1000
    cards = []
    sum = "Sum :"
    casinoCash = 5000
    wins = 0
    losses = 0
    youCashEl.textContent = cash
    casinoCashEl.textContent = casinoCash
    yourWinsEl.textContent = wins
    yourLossesEl.textContent = losses
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = sum
    messageEl.textContent = "just one more try.."
}


