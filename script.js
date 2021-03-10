"use strict";
/*
//document.querySelector helps to select a class or id from html
//.textContent helps to select the text in that html tag
console.log(document.querySelector(".message").textContent);

//In the below case we have set/change the text of <p> tag with class .message
document.querySelector(".message").textContent = "🎉Correct Number🥳";
//few more examples 👇
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//When we change/set the value of an input field we use .value instead of       .textContent
document.querySelector(".guess").value = 10;
*/

//AS WE HAVE LEARNT THE SOME OF THE BASICS NOW WE WILL START TO DEVELOP THE GAME

//Now we will create the random number

//Math.random() only choses number between 0 and 1 in which 1 it can never chose
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
//We are multipplying it with 20 so that it choses number between 1 and 20 but as it can never 1 so the number can't be 20 and that is why we are adding the product with 1
// We are using Math.trunc to round of the number to the nearest natural number

//Now lets add an event whenever the user clicks the check button

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number 🥳";

    document.querySelector(".number").textContent = secretNumber;
    // Now we have replaced the ".number" class or question mark with the number the function choses

    //Manupilating Styles

    //Note: this is an in-line style
    //In css we use background-color but in Javascript we convert every property with 2 or more words into camel casing
    //We always have to use quotes while specifying the property values

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game 😔";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game 😔";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// We don't need to call the function in .addEventListener , javascript does it for us
// We have specified "click" in the addEventListener because we need the function to work when the user CLICKS the button(we have given the class of the check button in querySelector)
//.addEventListener is also an inbuilt function
//In the function first we have saved the value of the input field in the variable guess
//Then we have logged the result to the console with its data type(used typeOf for that)
//The data type of the value WAS coming to be string and we can't compare string with number so we converted the string into a number by using NUMBER FUNCTION
//Then we gave the condition for if the user does not select any value for the field
//How it works 👇
//If the user does not put any value in the input box then javascript will take it as a 0 and 0 is a FALSY value. Now we need the condition to be true so that our code works so we will use the NEGATION/NOT operator ( ! ) to reverse the value from false to true and the code will work.
//If the user puts any other value other than 0 then the code will not run as other number are TRUTHY value and the condition will become false becuase of negation operator. (P.S This is what we want)
