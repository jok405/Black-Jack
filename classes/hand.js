// =================  Command line Black Jack | Composed by John Kim | Univeristy of Richmond  ============================= 

// ===========================================  | A Black Jack game | ======================================================

// ========================================== | The Hand Constructor | ======================================================


var Card = require('./card.js');
var cachingTheCards = require('./card_collection.js');

// =================== | Hand Constructor | =========================

var Hand = function() { };

Hand.prototype = new cachingTheCards(); // The Hand class extends the cachingTheCard class
Hand.prototype.constructor = Hand;

Hand.prototype.limit = 21;  // Bust, game over
 
Hand.prototype.add = function(card) {  // Play additional card to hand
	if (!card instanceof Card) {
		throw new Error("Will not work right now.");
	}

	this.cards.push(card);
};


//====== | This method scores the current hand and returns the score.
 
 // Assume higher value when Aces are present, diminishing value so we don't bust.
 
Hand.prototype.totalValue = function() {
	var totalValue = 0, aces = 0;

	this.cards.forEach(function(card) {
		if (card.face == 'A') {
			aces++;
		}

		if (card.face == 'J' || card.face == 'Q' || card.face == 'K') { 			
			totalValue += 10;       // Face cards

		} else if (card.face == 'A') {			
			totalValue += 11;      // Optimistically assume higher value for aces

		} else {
			totalValue += parseInt(card.face, 10); // Numeric cards are equivalent to their face value
		}
	});

	// When the score is above 21 with aces in hand, diminish their value to stay in play
	while (totalValue > 21 && aces > 0) {
		totalValue -= 10;
		aces--;
	}

	return totalValue;
};

Hand.prototype.toString = function() {   // This method displays the hand in appealing format
	var string = "Your Hand:\n";

	this.cards.forEach(function(card) {
		string += "  " + card.face + " of " + card.suit + "\n";
	});

	string += "Total Points: " + this.totalValue() + "\n";

	return string;
};
 
Hand.prototype.bust = function() {      // Checks if the current hand is a bust
	return this.totalValue() > this.limit;
};

module.exports = Hand;