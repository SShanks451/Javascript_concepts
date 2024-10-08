//-------------------------------------------------------What is Call?

/*
var obj = { name: "Piyush" };

function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}

console.log(sayHello(24));
console.log(sayHello.call(obj, 24));
*/

//-------------------------------------------------------What is Apply?

/*
var obj = { name: "Piyush" };

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and is an " + profession;
}

console.log(sayHello.apply(obj, [24, "Software Engineer"]));
*/

//------------------------------------------------------What is Bind?
// It provides us with function which we can call later to execute

/*
var obj = { name: "Piyush" };

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and is an " + profession;
}

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "Software Engineer"));
console.log(bindFunc(69, "Youtube"));
*/

//-------------------------------------------------------Output Based question

/*
const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));
*/

//-------------------------------------------------------Output Based question

/*
const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };

console.log(person.getAge.call(person2)); // 24
*/

//-------------------------------------------------------Output Based question

/*
var status = "emoji1";

setTimeout(() => {
  const status = "emoji2";

  const data = {
    status: "emoji3",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // emoji3
  console.log(data.getStatus.call(this)); // emoji1
}, 0);
*/

// 'this' never points to a function and here 'setTimeout' is a function. So 'this' will point to the context of the 'setTimout' function which is the global object.

//-------------------------------------------------------Output Based question
// Call printAnimals such that it prints all animals in object

/*
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}
*/

//-------------------------------------------------------Output Based question
// Append an array to another array

/*
const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array);
*/

//-------------------------------------------------------Output Based question
// Using apply to enhance Built-in functions

// Find min/max number in an array

/*
const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, numbers));
*/

//-------------------------------------------------------Output Based question
// Bound function

/*
function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();
*/

// Here, default context of 'f' is global object / window object, so if null context is pass, then 'f' will point to default context.

//-------------------------------------------------------Output Based question
// Bind chaining

/*
function f() {
  console.log(this.name); // John
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();
*/

// Bind chaining doesn't exist.

//----------------------------------------------------------Example

/*
function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") success();
  else failed();
}

let user = {
  name: "Piyush Agarwal",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name} failed to logged in`);
  },
};

checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));
*/

//----------------------------------------------------------Partial application for login function

/*
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "Roadside coder") ok();
  else fail();
}

let user = {
  name: "Piyush Agarwal",

  login(result) {
    console.log(this.name + (result ? " login successful" : " login failed"));
  },
};

checkPassword(user.login.bind(user, true), user.login.bind(user, false));
*/

//----------------------------------------------------------Explicit Binding with Arrow Function

/*
const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age); // 24
  },
};

var person2 = { age: 24 };

person.getAgeArrow.call(person2);
person.getAge.call(person2);
*/

/*
var declarations at the top level attach to the global object (window in browsers).
const and let do not attach to the global object; they create block-scoped variables.
*/

//----------------------------------------------------------Polyfill for Call Method

/*
let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " Its not callable");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "Rs", 50000000);
*/

//----------------------------------------------------------Polyfill for Apply Method

/*
let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " Its not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFormulaLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ["Rs", 50000000]);
*/

//----------------------------------------------------------Polyfill for Bind Method

/*
let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car1);
newFunc("Rs", 5000000);
*/
