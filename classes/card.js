// ========================= | Card Type Constructor | =========================

// The face and suit are passed in during instantiation. An error is thrown if invalid.
 
var Card = function(face, suit) {
	if (this.faces.indexOf(face) == -1) {
		throw new Error("Invalid Face: " + face);
	}

	if (this.suits.indexOf(suit) == -1) {
		throw new Error("Invalid Suite: " + suit);
	}

	this.face = face;
	this.suit = suit;
};

Card.prototype.faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
Card.prototype.suits = [ 'Hearts', 'Spades', 'Diamonds', 'Clubs' ];

module.exports = Card;