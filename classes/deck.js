// =================  Command line Black Jack | Composed by John Kim | Univeristy of Richmond  ============================= 

// ============================================ | A Black Jack game | ======================================================

// ============================================ | Deck Constructor | =======================================================

var Card = require('./card.js');
var cacheTheCard = require('./card_collection.js');

 //When creating a new deck, we iterate over every known face and suit combination,
 //adding each one to the collection of cards.
 
var Deck = function() {
	var self = this;

	Card.prototype.suits.forEach(function(suit) {
		Card.prototype.faces.forEach(function(face) {
			self.cards.push(new Card(face, suit));
		});
	});
};

Deck.prototype = new cacheTheCard();     // The Deck class extends the cachingTheCard class
Deck.prototype.constructor = Deck;

Deck.prototype.draw = function() {       // A Card draw function from the end of the deck
	return this.cards.pop();
};
 
Deck.prototype.shuffle = function() { 	// Shuffling a deck uses this odd looking function I found from Googling. 

	for (var j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);

	return this;
};

module.exports = Deck;