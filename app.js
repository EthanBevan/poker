var burn = []

var playerOne = []
var computerOne = []

var flop = []
var turn = []
var river = []

//Player 1
var $options_display = $('.options_display')
//Computer 1
var $options_display_two = $('.options_display_two')


var $options_display_flop = $('.options_display_flop')

var $options_display_turn = $('.options_display_turn')

var $options_display_river = $('.options_display_river')




// var amountOfPlayers = prompt('How many players?')


// save all files, give them names and put them in the array.
//generator function instea of writing it all out. 
cardDeck = [ 'Two of Hearts',
'Three of Hearts',
'Four of Hearts',
'Five of Hearts',
'Six of Hearts',
'Seven of Hearts',
'Eight of Hearts',
'Nine of Hearts',
'Ten of Hearts',
'Jack of Hearts',
'Queen of Hearts',
'King of Hearts',
'Ace of Hearts',
'Two of Diamonds',
'Three of Diamonds',
'Four of Diamonds',
'Five of Diamonds',
'Six of Diamonds',
'Seven of Diamonds',
'Eight of Diamonds',
'Nine of Diamonds',
'Ten of Diamonds',
'Jack of Diamonds',
'Queen of Diamonds',
'King of Diamonds',
'Ace of Diamonds',
'Two of Spades',
'Three of Spades',
'Four of Spades',
'Five of Spades',
'Six of Spades',
'Seven of Spades',
'Eight of Spades',
'Nine of Spades',
'Ten of Spades',
'Jack of Spades',
'Queen of Spades',
'King of Spades',
'Ace of Spades',
'Two of Clubs',
'Three of Clubs',
'Four of Clubs',
'Five of Clubs',
'Six of Clubs',
'Seven of Clubs',
'Eight of Clubs',
'Nine of Clubs',
'Ten of Clubs',
'Jack of Clubs',
'Queen of Clubs',
'King of Clubs',
'Ace of Clubs'
]

	cardDeckImages = [ 
	'10C.jpg',
	'10D.jpg',
	'10H.jpg',
	'10S.jpg',
	'2C.jpg',
	'2D.jpg',
	'2H.jpg',
	'2S.jpg',
	'3C.jpg',
	'3D.jpg',
	'3H.jpg',
	'3S.jpg',
	'4C.jpg',
	'4D.jpg',
	'4H.jpg',
	'4S.jpg',
	'5C.jpg',
	'5D.jpg',
	'5H.jpg',
	'5S.jpg',
	'5C.jpg',
	'5D.jpg',
	'5H.jpg',
	'5S.jpg',
	'6C.jpg',
	'6D.jpg',
	'6H.jpg',
	'6S.jpg',
	'7C.jpg',
	'7D.jpg',
	'7H.jpg',
	'7S.jpg',
	'8C.jpg',
	'8D.jpg',
	'8H.jpg',
	'8S.jpg',
	'9C.jpg',
	'9D.jpg',
	'9H.jpg',
	'9S.jpg',
	'AC.jpg',
	'AD.jpg',
	'AH.jpg',
	'AS.jpg',
	'JC.jpg',
	'JD.jpg',
	'JH.jpg',
	'JS.jpg',
	'KC.jpg',
	'KD.jpg',
	'KH.jpg',
	'KS.jpg',
	'QC.jpg',
	'QD.jpg',
	'QH.jpg',
	'QS.jpg'
]

faceDownCardImages = [ 
	'Red_back.jpg',
	]

// if (amountOfPlayers == '2') {

// PLAYER 1 CARDS
//loop through all cards and randomly select 2, then push them into array called playerOne
	var randomCardOne = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	var randomCardTwo = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];


// Putting them on display, under player 1 heading.
	var newImgElem = $('<img>').attr('src', randomCardOne)
	$options_display.append(newImgElem)

	var newImgElemOne = $('<img>').attr('src', randomCardTwo)
	$options_display.append(newImgElemOne)


// putting them into array called plauer 1 for functionality.
	playerOne.push(randomCardOne, randomCardTwo)

	var indexOne = cardDeckImages.indexOf(randomCardOne);
    cardDeckImages.splice(indexOne, 1);

    var indexTwo = cardDeckImages.indexOf(randomCardTwo);
    cardDeckImages.splice(indexTwo, 1);

    // document.write('<p id="playerOne">' + "Player 1: " + playerOne + '</p>')

  // COMPUTER CARDS

//loop through all cards and randomly select 2, then push them into array called computerOne
	var randomCardThree = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	var randomCardFour = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];


	// Putting them on display, under computer 1 heading.
	var newImgElemTwo = $('<img>').attr('src', randomCardThree)
	$options_display_two.append(newImgElemTwo)

	var newImgElemThree = $('<img>').attr('src', randomCardFour)
	$options_display_two.append(newImgElemThree)

	computerOne.push(randomCardThree, randomCardFour)

	var indexThree = cardDeckImages.indexOf(randomCardThree);
    cardDeckImages.splice(indexThree, 1);
    
    var indexFour = cardDeckImages.indexOf(randomCardFour);
    cardDeckImages.splice(indexFour, 1);

	// document.write('<p id="computerOne">' + "Computer 1: " + computerOne + '</p>')

// }


function theflop() {
	var FlopOne = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	var FlopTwo = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	var FlopThree = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	
	//burn card
	var burnCard = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	burn.push(burnCard)
	var indexZero = cardDeckImages.indexOf(burnCard);
    cardDeckImages.splice(indexZero, 1);

    var newh2ElemFlop = $('<h2>')
	newh2ElemFlop.text("Flop")
    var newImgElemThree = $('<img>').attr('src', FlopOne)
    $options_display_flop.append(newh2ElemFlop)
	$options_display_flop.append(newImgElemThree)


	var newImgElemFour = $('<img>').attr('src', FlopTwo)
	$options_display_flop.append(newImgElemFour)

	var newImgElemFive = $('<img>').attr('src', FlopThree)
	$options_display_flop.append(newImgElemFive)

	//flop
	flop.push(FlopOne, FlopTwo, FlopThree)

	var indexFive = cardDeckImages.indexOf(FlopOne);
    cardDeckImages.splice(indexFive, 1);
    
    var indexSix = cardDeckImages.indexOf(FlopTwo);
    cardDeckImages.splice(indexSix, 1);

 	var indexSeven = cardDeckImages.indexOf(FlopThree);
    cardDeckImages.splice(indexSeven, 1);

	// document.write('<p id="burn">' + "Burn: " + burn + '</p>')
 //    document.write('<p id="jstext">' + "Flop: " + flop + '</p>')

}




function theturn() {
	var TurnOne = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	//burn card
	var burnCardTwo = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	burn.push(burnCardTwo)
	var indexZeroBurn = cardDeckImages.indexOf(burnCardTwo);
    cardDeckImages.splice(indexZeroBurn, 1);

	var newh2ElemTurn = $('<h2>')
	newh2ElemTurn.text("Turn")
   var newImgElemSix = $('<img>').attr('src', TurnOne)
   $options_display_turn.append(newh2ElemTurn)
	$options_display_turn.append(newImgElemSix)

	turn.push(TurnOne)


	var indexEight = cardDeckImages.indexOf(TurnOne);
    cardDeckImages.splice(indexEight, 1);


	// document.write('<p id="burn">' + "Burn: " + burn + '</p>')
 // 	document.write('<p id="jstext">' + "Turn: " + turn + '</p>')

}




function theriver() {
	var RiverOne = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	
	//burn card
	var burnCardThree = cardDeckImages[Math.floor(Math.random() * cardDeckImages.length)];
	burn.push(burnCardThree)
	var indexZeroBurnTwo = cardDeckImages.indexOf(burnCardThree);
    cardDeckImages.splice(indexZeroBurnTwo, 1);
	
	var newh2ElemRiver = $('<h2>')
	newh2ElemRiver.text("River")
	var newImgElemSeven = $('<img>').attr('src', RiverOne)
	$options_display_river.append(newh2ElemRiver)
	$options_display_river.append(newImgElemSeven)
	

	river.push(RiverOne)


	var indexNine = cardDeckImages.indexOf(RiverOne);
    cardDeckImages.splice(indexNine, 1);

	// document.write('<p id="burn">' + "Burn: " + burn + '</p>')
 //    document.write('<p id="jstext">' + "River: " + river + '</p>')

}

// function locationReloader() {

// location.reload();

// }


//Event listeners

	// cardDeckImages.remove(randomCardOne)
var flopButton = document.getElementById("myBtnOne")

	flopButton.addEventListener("click", function(){
	theflop()
})


var turnButton = document.getElementById("myBtnTwo")

	turnButton.addEventListener("click", function(){
	theturn()
})

var riverButton = document.getElementById("myBtnThree")

	riverButton.addEventListener("click", function(){
	theriver()
})


// var newRoundButton = document.getElementById("myBtnFour")

// 	newRoundButton.addEventListener("click", function(){
// 	locationReloader()
// })




// Card show and hidden.


























