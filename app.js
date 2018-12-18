let pokemonCards = [
  { name: "Bulbasaur", damage: 60 }, 
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 60 }, 
  { name: "Clefairy", damage: 50 }, 
  { name: "Jigglypuff", damage: 60 }, 
  { name: "Mankey", damage: 30 }, 
  { name: "Meowth", damage: 60 }, 
  { name: "Nidoran - female", damage: 60 }, 
  { name: "Nidoran - male", damage: 50 }, 
  { name: "Oddish", damage: 40 }, 
  { name: "Pidgey", damage: 50 }, 
  { name: "Pikachu", damage: 50 }, 
  { name: "Poliwag", damage: 50 }, 
  { name: "Psyduck", damage: 60 }, 
  { name: "Rattata", damage: 30 }, 
  { name: "Squirtle", damage: 60 }, 
  { name: "Vulpix", damage: 50 }, 
  { name: "Weedle",  damage: 40 }
];


let playerOne = [];
let playerTwo = [];
let cardsInPlay = [];


// Card Dealer
while(playerOne.length<3 || playerTwo.length<3) {
	playerOne.push(pokemonCards[Math.floor(Math.random() * pokemonCards.length)])
	playerTwo.push(pokemonCards[Math.floor(Math.random() * pokemonCards.length)])
};



// Player 1 Card Pick
let playerOneDmg = [];

for(let i=0; i<playerOne.length; i++) {
	playerOneDmg.push(playerOne[i].damage)
};
cardsInPlay.push(Math.max(...playerOneDmg))



//Player 2 Card Pick
if(true) {
	cardsInPlay.push(playerTwo[Math.floor(Math.random() * playerTwo.length)]);
};	


//Console Log Game
console.log("Round 1!")
console.log("Player One's Hand:", playerOne[0].name, playerOne[1].name, playerOne[2].name)
console.log("Player Two's Hand:", playerTwo[0].name, playerTwo[1].name, playerTwo[2].name)
console.log("Player One picked:", cardsInPlay[0])
console.log("Player Two picked:", cardsInPlay[1].name+"!","Damage:"+cardsInPlay[1].damage)


//Round Winner
if(cardsInPlay[0]>cardsInPlay[1].damage) {
	console.log("Player One Won this Turn!") 
}	else console.log("Player Two Won this Turn!")




