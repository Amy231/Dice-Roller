//Create a variable, named dieRolls, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)

const rollButton = document.querySelector("#Roll-button");
const DieRolls = [];

const ShowAllRollsButton = document.querySelector("#show-all-rolls");
const Totalelement = document.querySelector("#Total");
const rollcounterelement = document.querySelector("#roll-counter")

//Add a click event listener for your "Roll!" button. (1 point)

rollButton.addEventListener('click', function () {
  let newnumberofdice = Number(rollcounterelement.value)
  console.log(newnumberofdice)
  
//Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
  let totalroll = 0; 
  for(let counter = 1; counter <= newnumberofdice; counter += 1){
  //Push the result of each roll onto your dieRolls array. (2 points)
    let roll = Math.floor(Math.random() * 6) + 1
    totalroll+= roll
    DieRolls.push(roll)
  }
  //Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)
  Totalelement.innerHTML = totalroll  
})

//Add a click event listener for your "Show all Rolls" button. (1 point)

ShowAllRollsButton.addEventListener('click', function () {
  
})

//Write a new loop: Loop over the dieRolls array, creating a new List Item for each number and adding that List Item to the innerHTML of the "All Rolls" element. This LI should show the value of the roll. (4 points)