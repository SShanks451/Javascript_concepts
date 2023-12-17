// -----------------------------------------------------What is function declaration?-----------------------------------

/*
function square(num) {
  return num * num;
}
*/

//-------------------------------------------- What is function expression?-------------------------------------------------------------------------

/*
const square = function (num) {
  return num * num;
};
console.log(square(5));
*/
// Here the function without name is known as 'anonymous function'

// -------------------------------------------------------What are First Class Functions()?-------------------------------------------------------------
// In a language where a function can be treated like a variable, there functions can be called as first class function.

/*
function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);
*/

// ------------------------------------------------------What is IIFE?---------------------------------------------------------------------
// IIFE -> Immediately Invoked Functional Expression

/*
(function square(num) {
  console.log(num * num);
})(5);
*/

/*
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
*/

//------------------------------------------------------ Function Scope-----------------------------------------------------------

// The following variables are defined in the global scope

/*
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply());

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore());
*/

//-------------------------------------------------Function Scope - O/P Based Question-----------------------------------------

/*
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
*/
// In this case, the variable i is block-scoped due to the use of let. The setTimeout function creates a closure that captures the current value of i at each iteration. As a result, the output will be the values of i at each iteration

/*
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
*/
// When using var, the variable i is function-scoped and is hoisted to the top of the function. In this case, the setTimeout functions share the same reference to the variable i, and by the time the setTimeout callbacks are executed, the loop has already completed, and i is equal to 5.

//-----------------------------------------------------------------Hoisting in functions------------------------------------------

/*
functionName();

function functionName() {
  console.log("Roadside Coder"); // Will show 'Roadside Coder' because functions are hoisted completely.
}
*/

// Hositing works differently in case of functions. It doesn't matter it is called before or after defining, it's still going to work

/*
functionName();

function functionName() {
  console.log(x);
  var x = 5;

  console.log("Roadside Coder");
}
*/

// ------------------------------------------------------------Function Hoisting - O/P Based Question-----------------------------------------

/*
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
*/
// Creates a seperate execution context for that function/local scope

//---------------------------------------------------------------Params vs Arguments---------------------

/*
function square(num) { // Paramns
  console.log(num * num);
}

square(5); // Arguments
*/

//---------------------------------------------------------------Spread vs Rest Operators---------------------

/*
function multiply(...nums) {
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];

multiply(...arr);
*/

/*
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9);
*/
// When we use spread operator or rest operator, it should always be the last one

//-----------------------------------------------------------------------Callback Function--------------------------------------------------------------

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Ex :- document.addEventListener("click", function(params){})

//-------------------------------------------------------------------------Arrow functions--------------------------------------------------

/*
const add = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
*/

// -----------------------------------------------------------Arrow functions  vs Regular Function

// 1 - Syntax

/*
function square(num) {
  return num*num
}

const square = (num) => {
  return num*num
}
*/

// 2 - Implicit "return" keyboard
// const square = (num) => num * num;

// 3 - arguments
// We can't have "arguments" keyword inside arrow function

/*
function fn() {
  console.log(arguments);
}
fn(1, 3, 2);
*/

/*
const fnArr = () => {
  console.log(argumnets);
};
fnArr(1, 3, 2);
*/

// 4 - "this" keyword

/*
let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.username);
  },
  rc2() {
    console.log("Subscribe to " + this.username);
  },
};

user.rc1();
user.rc2();
*/
