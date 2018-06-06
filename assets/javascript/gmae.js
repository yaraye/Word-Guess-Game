
//hangman - user guesses word based on a randomized word 

//list of words
//generate a random word from that list
//user clicks on a letter to guess that word
//everytime user guesses a letter
//program looks at the random word and see if that letter exists
//if letter exists then put that letter in the word _
//if letter doesn't exist then reduce the guesschance by 1
//if user guesses all the letter, increase his win, reset game
//if user guesschange goes to zero he loses, reset game


//declearing variable and assigning the variable 
var secretWords=["fivetoone","ghostsong","lawoman","theend","touchme","gloria","lovestreet"];

//global var
var wins = 0;
var losses = 0;
var currentWords = [];
var numberOfGuesesLeft= 9;
var letterAlreadyGuessed = [];
var pickOneWord = "";
var rightLetterCount = 0;

function RandomWord()
{

	pickOneWord = secretWords[Math.floor(Math.random() * secretWords.length)];
}


function StartGame()
{

	RandomWord();


	rightLetterCount = pickOneWord.length;
	//console.log(pickOneWord);
	//console.log(rightLetterCount);
	
	//reset values
	numberOfGuesesLeft = 9;
	currentWords = [];
	letterAlreadyGuessed = [];

	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;

	for(var i =0; i < pickOneWord.length; i++)
	{
		currentWords.push("_");
	}

	document.querySelector("#cwords").innerHTML = currentWords.join(" ");


}

function resetGame()
{

	guessesLeft=9;
	document.querySelector("#gleft").innerHTML=numberOfGuesesLeft;
	letterAlreadyGuessed=[];
	document.querySelector("#guessed").innerHTML=numberOfGuesesLeft;

	StartGame();
}


function CompareLetter(letter)
{
	//letter gets pushed to the array
  letterAlreadyGuessed.push(letter);
  document.querySelector("#guessed").innerHTML = letterAlreadyGuessed.join(" ");

  var correctGuess = false;

  for(var i=0;i<pickOneWord.length; i++)
  {
  	if(letter == pickOneWord[i])
  	{
  		correctGuess = true;
  		currentWords[i] = letter;
		  document.querySelector("#cwords").innerHTML = currentWords.join(" ");
		  
		rightLetterCount--;	 
  		
  	}

  }

  if(correctGuess == false)
  {
	  numberOfGuesesLeft--;
	  document.querySelector("#gleft").innerHTML=numberOfGuesesLeft;
  }

  

  if(numberOfGuesesLeft == 0)
  {
     losses++;
	  document.querySelector("#losses").innerHTML = losses;
	  resetGame();
  }
  

  if(rightLetterCount == 0)
  {
	  wins++;
	  document.querySelector("#wins").innerHTML = wins;
	  resetGame();
  }

}



StartGame();

function checkLetters(letter)
{
	var isLetter = false;//initial value and then changes when it finds it
	for(var i=0; i < letterAlreadyGuessed.length; i++)
	{
		if(letter == letterAlreadyGuessed[i])
		{
			isLetter = true;
		}
	}

	return isLetter;
}


document.onkeydown = function(event) {
	
		if(event.keyCode >= 65 && event.keyCode <= 90)
			{
				var letter = String.fromCharCode(event.keyCode).toLowerCase();

				var checkValue = checkLetters(letter);

				if(checkValue == true)
				{
					alert("You already typed this letter");
					return;
				}
				//console.log(letter);
				CompareLetter(letter);
			}
    }
