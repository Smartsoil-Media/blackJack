
let cards = []
let gameOn = true
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
let newRoundBtn = document.getElementById("new-round-btn")
let betAmountEl = document.getElementById("bet-amount")
let sum = 0
let casinoHand = 0
let wins = 0
let losses = 0
let cash = 600
let betSize = [100]
let casinoCash = 10000
let canClickDeal = true
let userHoldingHand = false
let casinoCards = []



let betTen = false
let betOneHundred = false
let betFiveHundred = false

hitBtn.style.visibility = "hidden";
holdBtn.style.visibility = "hidden";
newRoundBtn.style.visibility = "hidden";




function updateBetTen() {
    betSize = []
    let betAmount = 10
    betSize.push(betAmount)
    console.log(betAmount)
    betTen = true
    betAmountEl.textContent = "Bet Amount: $" + betSize

    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    newRoundBtn.style.visibility = "visible";

    newRound()
}

function updateBetOneHundred() {
    betSize = []
    let betAmount = 100
    betSize.push(betAmount)
    console.log(betAmount)
    betOneHundred = true
    betAmountEl.textContent = "Bet Amount: $" + betSize

    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    newRoundBtn.style.visibility = "visible";

    newRound()
}

function updateBetFiveHundred() {
    betSize = []
    let betAmount = 500
    betSize.push(betAmount)
    console.log(betAmount)
    betFiveHundred = true
    betAmountEl.textContent = "Bet Amount: $" + betSize

    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    newRoundBtn.style.visibility = "visible";
    newRound() 
}



function payOutUser() {
    if (betTen === true) {
        let payOut = betSize[0] * 2
        cash += payOut
        casinoCash -= payOut

        casinoCashEl.textContent = casinoCash
        youCashEl.textContent = cash
    } else if (betOneHundred === true) {
        let payOut = betSize * 2
        cash += payOut
        casinoCash -= payOut

        casinoCashEl.textContent = casinoCash

        youCashEl.textContent = cash
    } else {
        let payOut = betSize * 2
        cash += payOut
        casinoCash -= payOut

        casinoCashEl.textContent = casinoCash

        youCashEl.textContent = cash
    }

}


function takeFromUser() {
    if (betTen === true) {
        let payOut = betSize[0]
        cash -= payOut
        casinoCash += payOut

        casinoCashEl.textContent = casinoCash

        youCashEl.textContent = cash
    } else if (betOneHundred === true) {
        let payOut = betSize[0]
        cash -= payOut
        casinoCash +- payOut

        casinoCashEl.textContent = casinoCash

        youCashEl.textContent = cash
    } else {
        let payOut = betSize[0]
        cash -= payOut
        casinoCash += payOut

        casinoCashEl.textContent = casinoCash

        youCashEl.textContent = cash
    }

}



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
    let randomNumberC = Math.floor(Math.random() * 13) + 1
    if (randomNumberC ===1) {
        return 21
    } else {
        return randomNumberC
    }
}



function startGame() {
        newRoundBtn.style.visibility = "hidden";
        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "visible";
        holdBtn.style.visibility = "visible";
        canClickDeal = false
        hasStarted = true
        hasBlackJack = false
        roundStarted = true
        isBroke = false
        isAlive = true 


        let casinoFirstCard = getRandomCard ()
        let casinoSecondCard = getRandomCard()
        casinoCards = [casinoFirstCard, casinoSecondCard]
        casinoHand = casinoFirstCard + casinoSecondCard
        casinoHandEl.textContent = "Casino Hand: " + casinoHand
    



        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame() 

        if (casinoHand === 21) {
            messageEl.textContent = "Ouch.. You lost straight away"
            takeFromUser()
            youCashEl.textContent = cash
            casinoCashEl.textContent = casinoCash
            newRoundBtn.style.visibility = "visible";
            let payOut = betSize
            betAmountEl.textContent = "You just lost: $" + payOut
    
        } else if (casinoHand > 21) {
            messageEl.textContent = "Casino Busts! Luck you"
            let payOut = betSize * 2
          betAmountEl.textContent = "You just won: $" + payOut
          dealBtn.style.visibility = "hidden";
          hitBtn.style.visibility = "hidden";
          holdBtn.style.visibility = "hidden";
          newRoundBtn.style.visibility = "visible";

         payOutUser()
          youCashEl.textContent = cash
          youCashEl.textContent = cash
          casinoCashEl.textContent = casinoCash
          casinoCash += casinoLoss
          casinoCashEl.textContent = casinoCash
        }

}



function newCasinoCard() {
    let newCards = getRandomCard ()

    casinoHand += newCards 
    casinoCards.push(newCards)
    console.log(newCards)


    } 

function newRound() {
    if (cash <= 0) {
        messageEl.textContent = "YOU'RE BROKE GAME OVER"
    } else if (casinoCash <=0) {
        messageEl.textContent = "YOU JUST BEAT THE CASINO"
        cardsEl.textContent = "Wooooooooooo 🥳🥳"
        sumEl.textContent = "🥳$$$$🥳$$$$$🥳"
        casinoHandEl.textContent = "🥳$$$$🥳$$$$$🥳"
        betAmountEl.textContent = "Wow, you have sent the Casino Broke! Congratulations, you will now be under investigation.."
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "hidden";
        dealBtn.style.visibility = "hidden";
    }
    else if (cash < betSize) {
        messageEl.textContent = "please changed bet amount."
    } else {
        cards = []
    sum = "Sum :"
    betAmountEl.textContent = "Bet Amount: $" + betSize 
    youCashEl.textContent = cash
    casinoCashEl.textContent = casinoCash
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = sum
    messageEl.textContent = "Game on!"
    casinoHandEl.textContent = "Casino's hand: "
    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    newRoundBtn.style.visibility = "hidden";

    }
}


function hold() {
    casinoHandEl.textContent = "Casino's hand: " + casinoHand
    userHoldingHand = true


while (casinoHand < sum && casinoHand < 21) {
    newCasinoCard()
    casinoHandEl.textContent = "Casino's hand: " + casinoHand

}

if (casinoHand >= 22) {
    messageEl.textContent = "Casino Busts!"
          let payOut = betSize * 2
          betAmountEl.textContent = "You just won: $" + payOut
          dealBtn.style.visibility = "hidden";
          hitBtn.style.visibility = "hidden";
          holdBtn.style.visibility = "hidden";
          newRoundBtn.style.visibility = "visible";

         payOutUser()
          youCashEl.textContent = cash
          youCashEl.textContent = cash
          casinoCashEl.textContent = casinoCash
          casinoCashEl.textContent = casinoCash

} else {
    if (casinoHand === 21) {
        messageEl.textContent = "Wow, casino got Blackjack!"
        takeFromUser()
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash

        let payOut = betSize 
        betAmountEl.textContent = "You just lost: $" + payOut

        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "visible";

    } else if (sum > casinoHand) {

          messageEl.textContent = "Winner winner!"
          let payOut = betSize * 2
          betAmountEl.textContent = "You just won: $" + payOut
          dealBtn.style.visibility = "hidden";
          hitBtn.style.visibility = "hidden";
          holdBtn.style.visibility = "hidden";
          newRoundBtn.style.visibility = "visible";

         payOutUser()
          youCashEl.textContent = cash
          youCashEl.textContent = cash
          casinoCashEl.textContent = casinoCash
          casinoCashEl.textContent = casinoCash
    } else if (cash <= 0) {
        messageEl.textContent = "YOU'RE BROKE GAME OVER"
    } else if (casinoHand === sum) {
        messageEl.textContent = "Wow, it's a tie..!"
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "visible";
        betAmountEl.textContent = "You're safe for now..."
    } else if (betSize > cash) {
        messageEl.textContent = "Please change bet amount"
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "visible";
    }
    
    else {
        messageEl.textContent = "You just lost 😭"
        takeFromUser()
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash
        newRoundBtn.style.visibility = "visible";
        let payOut = betSize
        betAmountEl.textContent = "You just lost: $" + payOut
    }  
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
    dealBtn.style.visibility = "hidden";
    hitBtn.style.visibility = "hidden";
    holdBtn.style.visibility = "hidden";
    newRoundBtn.style.visibility = "hidden";
    isBroke = true
} else {
    if (sum <= 20 && sum >= 18) {
        message = "OOOooohhhh...... Hit or hold?"
    } else if (sum <= 15) {
        message = "I wouldn't hold that.."
    } else if (sum >= 16 && sum <= 18) {
        message = "That's a tough one.."
    } else if (sum === 21) {
        message = "Blackjack! You win 🥳"
        hasBlackJack = true
        let payOut = betSize * 2
        betAmountEl.textContent = "You just won: $" + payOut
        

        payOutUser()
        casinoCashEl.textContent = casinoCash
        youCashEl.textContent = cash
        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "visible";
    } else  {
        message = "You lose! 😭 That sucks..."
        isAlive = false
        youCashEl.textContent = cash
        casinoCashEl.textContent = casinoCash
        takeFromUser()
        let payOut = betSize
        betAmountEl.textContent = "You just lost: $" + payOut


        dealBtn.style.visibility = "hidden";
        hitBtn.style.visibility = "hidden";
        holdBtn.style.visibility = "hidden";
        newRoundBtn.style.visibility = "visible";

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
    cash = 600
    casinoCash = 10000
    cards = []
    sum = "Sum :"
    youCashEl.textContent = cash
    casinoCashEl.textContent = casinoCash
    betAmountEl.textContent = "Bet Amount: $" + betSize
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = sum
    messageEl.textContent = "just one more try.."
    casinoHandEl.textContent = "Casino's hand: "
    dealBtn.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    newRoundBtn.style.visibility = "visible";
}


