



  // how many fingers am i holding up? -GAME.

document.getElementById("SubmitAnswer").onclick=function()
{ var randomNumber = Math.random();

  randomNumber = randomNumber * 10 ;
  randomNumber = Math.floor(randomNumber);
  randomNumber = 5
  var inputAnswer = document.getElementById("inputAnswer").value
  if (inputAnswer == randomNumber)
  alert( "Welldone!");

if(inputAnswer > randomNumber) {
    alert(" nope!, try a smaller number")

  };

   if(inputAnswer < randomNumber) {
    alert(" nope!, try a larger number")

  };

}



// new game PART 1


document.getElementById("guessButton").onclick = function () {

var myNumber = document.getElementById("myAnswer").value;

var numberOfGuesses = 1;

var gotIt = false;

while (gotIt == false) {

  var guess =  Math.floor(Math.random() * 10 + 0);

  if (guess == myNumber) {

   gotIt = true; alert ("The correct answer was " + myNumber +  ". It took " + numberOfGuesses + " guess lol!")

  }
  else {
    numberOfGuesses++;
  }


}

}




// new Game PART 2.


function doAGuess (correctA) {

  var guess =  Math.floor(Math.random() * 10 + 0);

  if (guess == correctA) {

  return (true);
  }
  else {
    return(false)
  }

  }


document.getElementById("guessButton2").onclick = function () {

var myNumber2 = document.getElementById("myAnswer2").value;

var numberOfGuesses = 1;

var gotIt2 = false;

while (gotIt2 == false) {

  if (doAGuess(myNumber2) == true) {

   gotIt2 = true; alert ("The correct answer was " + myNumber2 +  ". It took " + numberOfGuesses + " guess lol!")

  }
  else {
    numberOfGuesses++;
  }
  }
  }


  // new Game PART 3.

  function makeGuess (correctAN)
  {
    var guess = Math.floor( Math.random() * 10 + 0 );

    if (guess == correctAN) {
      return(true);
    }
    else {
      return (false);
    }

  }

  document.getElementById("guessBu").onclick = function ()
  {
    var myAnswer3 = document.getElementById("selectAn").value;

    var numberOfGuessesMade = 1;

    var haveAnswer = false;

    while (haveAnswer == false) {
      if(makeGuess(myAnswer3) == true){
        haveAnswer= true; alert( "The answer was " + myAnswer3 + ". And it took " + numberOfGuessesMade +  " guess lol!" );
      }
      else {
        numberOfGuessesMade++ ;
      }
      }
      }
