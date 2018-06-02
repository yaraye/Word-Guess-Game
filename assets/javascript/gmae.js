
//declearing variable and assigning the variable 
var secretWords=["lightmyfire","peoplearestrange", "lovestreet", "indiansummer"];

//global var
var wins = 0;
var losses = 0;
var currentWords = [];
var numberOfGuesesLeft= 9;
var letterAlreadyGuessed = [];
var pickOneWord = "";
var rightLetterCount = 0;



function StartGame()
{

	pickOneWord = secretWords[Math.floor(Math.random() * secretWords.length)];
	rightLetterCount = pickOneWord.length;
	console.log(pickOneWord);
	
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

function CompareLetter(word)
{

  letterAlreadyGuessed.push(word);
  document.querySelector("#guessed").innerHTML = letterAlreadyGuessed.join(" ");
  var correctGuess = false;

  for(var i=0;i<pickOneWord.length; i++)
  {
  	if(word == pickOneWord[i])
  	{
  		correctGuess = true;
  		currentWords[i] = word;
  		document.querySelector("#cwords").innerHTML = currentWords.join(" ");
  		rightLetterCount--;
  		
  	}

  }


  if(correctGuess == false)
  {
  	numberOfGuesesLeft--;
  }

  if(numberOfGuesesLeft == 0)
  {
  	losses++;
  	document.querySelector("#losses").innerHTML = losses;
  }

  if(rightLetterCount == 0)
  {
  	wins++;
  	document.querySelector("#wins").innerHTML = wins;
  }

}

StartGame();
document.onkeyup = function(event){

	if(event.keyCode >= 65 && event.keyCode <= 90)
	{
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		//console.log(letter);
		CompareLetter(letter);
	}
	}