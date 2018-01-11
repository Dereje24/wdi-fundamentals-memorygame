
var cards =["queen", "queen", "king", "king"]
var cardsInPlay = []
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};
var flipCard = function (cardID){
	checkForMatch();
if (cardsInPlay.length){
	cardsInPlay === 2;
	 if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match');
	}
	else alert('Sorry, try again');
	};
	console.log("user flliped " + " " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
};
flipCard(0);
flipCard(2);