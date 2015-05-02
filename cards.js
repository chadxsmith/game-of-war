
  //The Deck 
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var deck = []
  //The Players
  var playerOne;
  var playerTwo;



  //Shuffle
  function shuffleDeck(array){
    var currentIndex = array.length;
    var randomIndex;
    var temporaryValue;
    while(currentIndex > 0){
      randomIndex   = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue       = array[currentIndex];
      array[currentIndex]  = array[randomIndex];
      array[randomIndex]   = temporaryValue;
    }
    return array;
  }


  //Build,Shuffle, and Slice
  function buildDeck(){
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < suits.length; j++)
                    {
                      var card = {
                          suit: suits[j],
                          card_value: values[i],
                          rank: i
                        };
                        deck.push(card)
                    }
      }

      shuffleDeck(deck).slice(26);
      return deck;

  }


  //Distrubte Deck and Check Winner
    function playGame() {
          var players = buildDeck()
           playerOne = players[0]
          playerTwo = players[1]

          if (playerOne["rank"] > playerTwo["rank"]) {
            console.log("Player One has won")
            console.log("Score")
            console.log("************")
            console.log(playerOne)
            console.log(playerTwo)
          }
          else if (playerOne["rank"] < playerTwo["rank"]) {
            console.log("Player Two has won")
            console.log("Score")
            console.log("************")
            console.log(playerOne)
            console.log(playerTwo)
          }
          else {
            console.log("It's a draw")
          }
  }


  //Let's Play!!!!!
playGame()
