alert("you got it");
//declearing variable and assigning the variable 
var secretWords=["LightMyFire","PeopleAreStrange", "LoveStreet", "IndianSummer"];

//global var
var wins = 0;
var losses = 0;
var currentWord = [];
var numberOfGuesesLeft= 9;
var letterAlreadyGuessed = [];
var pickOneWord = "";
var rightLetterCount = 0;



function StartGame()
{
//     pickOneWord = secretWords[Math.floor(Math.random() * secretWords.length)];
//     rightLetterCount = pickOneWord.length;

//     console.log(pickOneWord);

	//reset values
	numberOfGuesesLeft = 9;
	letterAlreadyGuessed= [];
	currentWord = [];
}
StartGame();