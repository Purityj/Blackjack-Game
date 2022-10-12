//random numbers between 2-11
//blackjack logic
//if sum is less than 21,you good to go (you still in the game)
//if sum is 21, you have blackjack
//if sum is more than 21, you're out of the game
//king = 10, queen = 10, jack = 10, ace = 1 or 11
//how to get the cursor to be on multiple lines at the same time ctrl+d however lines you want captured
let player = {
    name: "Purity",
    chips: 145
}

let cards = [];
let sum = 0;
console.log(sum);

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " - " + "$" + player.chips;

//getRandomCard();
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1){
        return 11;
    }else if(randomNumber >10){
        return 10;
    }else{
        return randomNumber;
    }    
}

//startGame();
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let SecondCard = getRandomCard();
    cards = [firstCard, SecondCard];
    sum = firstCard + SecondCard;
    renderGame();
}

//renderGame();
function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent +=  cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
    message = "Do you want to draw a new card? 🙂";

}else if(sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
}else{
    message = "You're out of the game! 😭";
    isAlive = false;
}

//CASH OUT!
messageEl.textContent = message;
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
       let  card = getRandomCard();
       sum += card;
       cards.push(card);
       console.log(cards); 
       renderGame();
    } 
}










