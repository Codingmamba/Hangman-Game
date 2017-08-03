var doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordBank = ["fish", "shark", "octopus", "squid", "whale", "water", "nemo", "salmon", "jellyfish", "catfish"];

// Holds choosenWord
var choosenWord = "";

// Holds the letters in the word
var lettersInWord = [];

// Holds number of blanks in word
var numBlanks = 0;

// Holds blanks and successful guesses
var blanksAndSuccesses = [];

// Holds wrong guessess
var wrongLetters = [];

//Counters
var winCount = 0;
var loseCount = 0;
var guessessLeft = 9; 
var rightGuessCounter = 0;

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\///\\//\\\///\\\//\\//\\

function reset() {
	
}
	//Chooses word randlomly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	// Splits the choosen word into individual letters
	lettersInWord = choosenWord.split("");
	// Get the number of blanks
	numBlanks = lettersInWord.length;

	//RESET
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessessLeft = 0;
	wrongLetters= [];
	blanksAndSuccesses = [];
	doubleWord = ['a', 'b', 'c', 'd', 
					'e', 'f', 'g', 'h', 
					'i', 'j', 'k', 'l', 
					'm', 'n', 'o', 'p', 
					'q', 'r', 's', 't', 
					'u', 'v', 'w', 'x', 
					'y', 'z'];

	test = false;
	startGame ();
}
function startGame()
{

     //Chooses word randomly from the wordBank
     choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

     lettersInWord = choosenWord.split("");

     numBlanks = lettersInWord.length;	

     //RESET
     rightGuessCounter= 0;
     guessessLeft = 9;
     wrongLetters = [];
     blanksAndSuccesses = [];
     doubleWord = ['a', 'b', 'c', 'd', 
					'e', 'f', 'g', 'h', 
					'i', 'j', 'k', 'l', 
					'm', 'n', 'o', 'p', 
					'q', 'r', 's', 't', 
					'u', 'v', 'w', 'x', 
					'y', 'z'];

	// Populate blanks
	for (var i = 0; i < numBlanks.length; i++) {
			blanksAndSuccesses.push("_");
			document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
}			

//Changes HTML

//joins all elements of an array into a string.
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessessLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("loseCounter").innerHTML = loseCount;

console.log(choosenWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

function compareletters(userkey) {

		console.log("WORKING!");

		// If the user key exist in choosen word then perform this function
		if(choosenWord.indexOf(userkey) > -1) {

			// Loops depending on teh amount of blanks
			for (var i = 0; i < numBlanks, i++) {

				// Fills in right index with user key
				if (lettersInWord[i] === userkey) {
					rightGuessCounter++
					blanksAndSuccesses[i] = userkey;
					document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
				}
			}
			//Test / Debug
			console.log(blanksAndSuccesses);
		}

	}
	// Wrong Keys
	else {
		wrongLetters.push(userkey);
		guessessLeft--;
		// Changes HTML
		document.getElementById("numGuesses").innerHTML = guessessLeft;
		document.getElementById("wrongGuesses").innerHTML = wrongLetters;
		// Test / Debug
		console.log("Wrong Letters = " + wrongLetters);
		console.log("Guesses left are " + guessessLeft);
	}	

}

function winLose() {
	// When number blanks if filled with right words then you win
	if (rightGuessCounter === numBlanks) {
		// Counts Wins
		winCount++;
		// Changes HTML
		document.getElementById("winCounter").innerHTML = winCount;
		alert("You win");
		reset();
	} // if statement
	else if(guessessLeft === 0) {
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById("loseCounter").innerHTML = loseCount;
		alert("You lose");
		reset();
	}
}	

// Main Process
// ------------ \\ ------------ // ----------- \\

startGame();

document.onkeyup = function(event) {
	test = true;
	var letterGuessed = event.key;
	for (var i = 0; i < doubleWord.length; i++) {
		if(letterGuessed === doubleWord[i] && test === true) {
			var spliceDword = doubleWord.splice(i,1);
			// Test / Debug
			console.log("Double word is = " + doubleWord[i]);
			console.log("Spliced Word is = " + spliceDword);
		}
	}
}