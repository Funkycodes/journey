let cards = [];
let player = {
  name : "theMaskedOtaku",
  chips :459
};
let message;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el"); 
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`
let sum;
function getCard(){
  let cardvalue = Math.ceil(Math.random()*13);
  if(cardvalue===1) return 11;
  else if(cardvalue>10) return 10;
  else return cardvalue;
}
function cardsSum(){
  sum = 0;
  for(let i = 0;i<(cards.length);i++){
  sum += Number(cards[i]);
}
}
function check(){
if(sum<=20) message=("Do you want to draw a new card?");
else if(sum===21){message=("You've got blackjack!🚀.Proceed to Cashout");hasBlackJack=true;}
else{
  message=(`You are out of the game.`);
  isAlive=false;
 }  
messageEl.textContent = message;
}

function renderCards(){ 
cardsEl.textContent = "Cards:" + cards.join(" ");
}

function startGame(){
if (hasBlackJack || !isAlive){  
  isAlive = true;
  hasBlackJack = false;
  let card1 = getCard();
  let card2 = getCard();
  cards = [card1,card2];
  renderGame();
}
}

function renderGame(){
cardsSum()
check();
renderCards();
sumEl.textContent = "Sum: " + sum;
}

function newCard(){
  if(!hasBlackJack && isAlive) {
  cards.push(getCard());
  renderGame();  
  }
}
