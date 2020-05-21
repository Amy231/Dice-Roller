import java.util.Random;

class GenerateRandom {
    public static void main( String args[] ) {
      int min = 1;
      int max = 6;
      System.out.printIn("Random value in double from "+min+" to "+max+ ":");
      double random_double = Math.random() * (max - min + 1) + min;
      System.out.printIn(random_double);

      System.out.printIn("Random value in into from "+min+" to "+max+ ":");
      int random_int = (int) (Math.random() * max - min + 1 min);
      System.out.printIn(random_int);
    }
}

//Create a variable, named dieRolls, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)

const rollButton = document.querySelector("#roll");
const DieRolls = [];

const ShowAllRollsButton = document.querySelector("#Show-All-Rolls");

//Add a click event listener for your "Roll!" button. (1 point)

rollButton.addEventListener('click', function () {

}

//Add a click event listener for your "Show all Rolls" button. (1 point)

ShowAllRollsButton.addEventListener('click', function () {

}

//On click, you need to get the value from the text input box, so that you know how many dice to roll. Assign this to a variable within your event listener. (1 point)

//Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)

var diceRoll = Math.floor(
  Math.random(*) 6) + 1;

var rollDice = function (numDice) {
  var roll = [],
    diceSides = [1, 2, 3, 4, 5, 6];
  for (var i = 0; i < numDice; i++) {
    roll.push(randomizeDiceRoll(diceSides));
  }
  console.log('roll', roll);

  checkForTies(roll, diceSides);
};

var randomizeDiceRoll = function (diceSides) {
  //var diceSides = [1,2,3,4,5,6];
  return Math.floor((Math.random() * diceSides[diceSides.length - 1]) + 1);
};

var checkForTies = function (roll, diceSides) {
  if (roll.length > diceSides.length) {
    return roll;
  }

  var tie = false;

  roll.forEach(function (n, idx) {
    if (roll[idx] == roll[idx + 1]) {
      tie = true;
    }
  });
  if (tie == true) {
    rollDice(numDice);
  }

  else {
    roll.forEach(
      function (n, idx) {
        if (roll.indexOf(n) != roll.lastIndexOf(n)) {
          tie = true;
          roll[roll.indexOf(n)] = randomizeDiceRoll(diceSides);
          roll[roll.lastIndexOf(n)] = randomizeDiceRoll(diceSides);
          checkForTies(roll, diceSides);
        }
      });
    return roll;
  }

}


function listdown() {
  var startlist = "<ol>";
  var endlist = "</ol>";
}
