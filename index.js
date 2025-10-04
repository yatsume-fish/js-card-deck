//declare variables
let output

const deckRemaining = document.getElementById('deckRemaining')
const drawButton = document.getElementById('drawButton')

//cards pool array
const cardContainer = document.getElementById('cardContainer')

const ranksPool = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"]
const suitsPool = ["♠️","♥️","♣️","♦️"]

let deckFull = [""];
let deckCurrent
let cardsRemaining
let hand = []


//////////////////////////////////////////////////

getDeck();
updateOutput();

//////////////////////////////////////////////////

//update output methode
function updateOutput(){
  output = " remaining cards in deck: " + cardsRemaining;
  deckRemaining.textContent = output;
}

//generate deck
function getDeck() {
  for (let i = 0; i < suitsPool.length; i++) {
    for (let n = 0; n < ranksPool.length; n++) {
      deckFull.push({suit: suitsPool[i], rank: ranksPool[n]});
    }
  }
  deckFull.shift();
  deckCurrent = deckFull;
  cardsRemaining = deckCurrent.length
  updateOutput();
}


//creat card
function creatCard(rank, suit){

  const cardElem = document.createElement('div');
  cardElem.id = "card"
  cardElem.classList.add('card')
  cardContainer.appendChild(cardElem)

  const cardFront = document.createElement('div');
  cardFront.classList.add('cardFront')
  cardElem.appendChild(cardFront)

  const cardBack = document.createElement('div');
  cardBack.classList.add('cardBack')
  cardElem.appendChild(cardBack)

  const cardRank = document.createElement('p')
  cardRank.id = "cardRank"
  cardRank.innerHTML = rank
  cardFront.appendChild(cardRank)

  const cardSuit = document.createElement('p')
  cardSuit.id = "cardSuit"
  cardSuit.innerHTML = suit
  cardFront.appendChild(cardSuit)
  
}

//creat
drawButton.onclick = function pickCard() {
  let rng = Math.floor(Math.random() * deckFull.length);

  let cardDrawn = deckCurrent[rng].rank + deckCurrent[rng].suit
  
  creatCard(deckCurrent[rng].rank, deckCurrent[rng].suit);
  
  hand.push(cardDrawn);
  deckCurrent.splice(rng, 1);

  cardsRemaining = deckCurrent.length

  updateOutput();
}

//////////////////////////////////////////////////