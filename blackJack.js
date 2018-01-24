
// ==============  blackJack.js | Composed by John Kim | Univeristy of Richmond  ============================= 

//Pseudocode: Math Random to generate card
// Card 1 will have value = 1-10 or Card 1 = A then it's = 1 or 11.
// Card 1 is face card = 10
// Card 2 adds to card 1: if card 1 + card 2 = 21, then game is won.
// Card 1 + card 2 < 21 offer option to hit
// 
// Dealer hits until 17, stays
//
// stay hit user interface


// ======================== | Functions | ==========================================
/*
var inquirer = require("inquirer");

inquirer
    .prompt({
        type: "input",
        message: "",
        name: "##"
    },
    {

    }
   // })

function playGame() {     // constructor : class : function
    var game = new Game(2)
    , dealer = game.players[0]                  // dealer = player 0
    , player = game.players[1];                 // player = player 1

    game.on('deal', function() {
        console.log("cards dealt");

        game.players.forEach(function (_player, i) {
            var name = i ? "Player " + i : "Dealer";
            
            console.log(name + ": " + _player.cardString(i === 0));
        });
        console.log("");
    });
// ======================== | Dealer Actions | ===================================
    dealer.on('turn', function() {
        console.log("Cards dealt");
        console.log(dealer.cardString());
        });

    dealer.on('hit', function() {
        console.log("Dealer hits.");
    });

    dealer.on('stay', function() {
        console.log("Dealer stays.");
    });

    dealer.on('bust', function() {
        console.log("Dealer busts, You win!");
    });
// ======================== | Player Actions | =================================
    player.on('turn', function (fn) {
        console.log("Your turn.");

        console.log("Your hand: " + player.cardString());

        console.log("Dealer's hand" + dealer.cardString(true));

        console.log("Hit or Stay?");

        getCommand(function(input) {
            input = input.trim();
            if(input === 'h' || input === 'hit') return player.hit(fn);
            if(input === 's' || input === 'stay') return player.stay(fn);
        });
    });

    player.on('hit', function() {
        console.log("You hit.");
    });
    player.on('stay', function() {
        console.log("You stay.");
    });
    player.on('bust', function() {
        console.log("You bust");
    });
    player.on('end', function() {
        if(player.won) {
            console.log("You won!");
        } else {
            console.log("You lost.");
        }
        console.log("Your hand: " + player.cardString());
        console.log("Dealer's hand: " + dealer.cardString());

        console.log("\nPlay Again? Yes or No");

        getCommand(function(input) {
            input = input.trim();
            if(input === 'y') return playGame();
            process.exit();
        });
    });
    game.start();
    }

    playGame();
*/
    //============== | Better Alternative | ======================================
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    var Deck = require('./classes/deck.js');
    var Hand = require('./classes/hand.js');
    
    var deck = new Deck().shuffle();   // Create a new deck and shuffle it
    
    var player = new Hand();          // Create a new hand for the player
    
    player.add(deck.draw());          // The player draws two cards from the deck
    player.add(deck.draw());
    
    var play = function() {
        console.log(player.toString());
    
        readline.question("[H]it or [S]tay? ", function(answer) {
            if (answer == 'h' || answer == 'H') {
                player.add(deck.draw());
    
                if (player.bust()) {
                    console.log("BUST!");
                    console.log(player.toString());
                    readline.close();
                } else {
                    console.log("HITTING!");
                    play();
                }
            } else if (answer == 's' || answer == 'S') {
                console.log("STAYING!");
                console.log(player.toString());
                readline.close();
            }
        });
    }
    play();