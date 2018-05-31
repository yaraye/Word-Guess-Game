//declearing variable and assigning the variable 
var secretWords=["LightMyFire","PeopleAreStrange", "LoveStreet", "IndianSummer"];

var wins=0;
var losses=0;
var currentWords="";
var numberOfGuessesLeft=9;
var lettersAlreadyGuessed="";
var currentWordIndex;
var remainingLetter="";
lettersAlreadyGuessed=[];
currentWords=[];
var lettersWord = [];

function ResetGame()
{
//randomly chose words
var secretWord =secretWords[Math.floor(Math.random ()*secretWords.length)];
console.log(secretWord);
lettersWord = secretWord.split(""); 
remainingLetter = secretWord.length;

//claer out array
lettersAlreadyGuessed=[];
currentWords=[];

//gueesing game
for (var i=0; i < remainingLetter; i++);
{
   currentWords.push("_");
}

document.getElementById('#cword').innerHTML = currentWords;
document.querySelector('#gleft').innerHTML = numberOfGuessesLeft;
document.querySelector('#win').innerHTML = wins;

}


ResetGame();

document.onkeyup = function(event) 
{
  
  var wordLetters = String.fromCharCode(event.keyCode).toLowerCase();
  alert(wordLetters);

}

// var answerarray=[];
// for (var k=0; k<secretWord.length;k++)
// {
//    answerarray[k]="_";
// }

// var remainingLetter=secretWord.length;
// //player guesses
// while (remainingLetter>0)
// {
//    alert(answerarray.join(" "));
   
//    var answerarray= document.getElementById("#cword").answerarray.innerHTML=answerarray.join(" ");

// var userGuess = prompt("Guess a letter");

// if (userGuess===null)
// {
//    break;
// }else if (userGuess.length !==1)
// {
//    alert ("please enter a single letter");
//    console.log(userGuess);
// }else
// {
//    for (var j=0; j<secretWord.length; j++)
//    {
//        if (secretWord[j]===userGuess)
//        {
//            answerarray[j]=userGuess;
//            remainingLetter--;
//        }
//    }
// }}




/*

//self note--.innerHTML= variable assign name

var guess=document.getElementById("guessed").guess.innerHTML= lettersAlreadyGuessed;
document.getElementById("win").innerHTML=wins;
document.getElementById("cword").innerHTML=currentWords;
document.getElementById("gleft").innerHTML=numberOfGuessesLeft;





//answer array

var answerarray=[];
for (var i=0; i< secretWord.length; i++)
{
   answerarray[i]= "_";
}
var remainingLetters=secretWord.length;

if (remainingLetters >0)
{
   alert(answerarray.join(""));
   var userGuess= prompt("Guess a letter");
   // Converts the user's answer to lowercase.
var userGuessLower = userGuess.toLowerCase();

   if (userGuess===null)
   {
       prompt("please enter a letter");
   }else
   {
       for (var j=0; j<secretWord.length; j++);
       if(secretWord[j]===userGuess)
       {
           answerarray[j]=userGuess;
           remainingLetters--;
       }
   }
   var win=document.getElementById("win");wins.innerHTML=win;
   var currentWord=document.getElementById("cword");currentWords.innerHTML=cword;
   var GuessesLeft=document.getElementById("gleft");numberOfGuessesLeft.innerHTML=numberOfGuessesLeft;
   var AlreadyGuessed=document.getElementById("guessed"); lettersAlreadyGuessed.innerHTML=guessed;
}  */


