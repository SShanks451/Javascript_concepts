//-------------------------------------Closure------------------------------------------
// A closure is a function that references variable in the outer scope from its inner scope.

//---------------------------------------Lexical Scope----------------------------------
// A scope refers to the current context of your code. It can be either globally or locally defined

/*
var name = "Roadside Coder";

// global scope
function local(){
  // local scope
}
*/

// Lexical Scope :- It means that a variable defined outside a function can be accessible inside of another function defined after a varaible declaration but the opposite is not true. The variable defined inside the function can't be accessed outside the function.

// Ex :-
/*
var username = "Roadside Coder";

function local() {
  console.log(username);
}
local();
*/

/*
function local() {
  var username = "Roadside Coder";
  
}

console.log(username);
local();
*/

// Ex:-

/*
// global scope
function subscribe() {
  var name = "Roadside Coder";
  // inner scope 2
  function displayName() {
    // inner scope
    console.log(name);
  }
  displayName();
}

subscribe();
*/
// Here the function displayName() is closure

//-------------------------------------------Closures----------------------------------

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

/*
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
*/

// -------------------------------------Why Closures------------------------------------
// Closures makes it possible for a function to have private variables. Javascript closure is used to control what is and isn't in the scope of a particular function along with which variables are shared between sibling functions in the same containing scope.

/*
function makeFunc() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

makeFunc()(5);
*/

//---------------------------------------Closure Scope Chain------------------------

/*
Every closure has three scopes:
    Local scope (Own scope)
    Enclosing scope (can be block, function, or module scope)
    Global scope

A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes.
*/

/*
var username = "Piyush";
function makeFunc() {
  var name = "Mozilla";
  function displayName(num, username) {
    console.log(name, num, username);
  }
  return displayName;
}

makeFunc()(5);
*/

/*
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
*/

//-------------------------------------------Q1-----------------------------------------
/*
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count);
  }
  // count = 0
  console.log(count);
})();
*/

//---------------------------------------------Q2---------------------------------------

/* Write a function that would allow you to do this 

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

*/

/*
function createBase(num) {
  return function (innerNum) {
    return innerNum + num;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
*/

//-------------------------------------------Q3---------------------------------------
// Time Optimization

/*
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");
*/

// Optimizing time with closure

/*
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");
*/

//---------------------------------------------------------Q4---------------------
// Block Scope and setTimeout with Closures

/*
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}

a();
*/

// Here output will be 3,3,3 beacuse 'var' doesn't have a block scope. It has a functional scope. If we use 'let' instead of 'var', then it will print 0,1,2 beacuse 'let' has block scope.

// If we want to print 0,1,2 by using 'var', we have to use closure.

/*
function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i); // What is logged?
      }, i * 1000);
    }

    inner(i);
  }
}

a();
*/

//-------------------------------------------Q5------------------------------------
// How would you use a closure to create a private counter?

/*
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrieve());
*/

//-------------------------------------------------Q6---------------------------------
// What is module Pattern?

/*
var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod();
*/

//-------------------------------------------------------Q6--------------------------
// Makes this run only once

/*
let view;
function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subscribed to Roadside Coder");
    } else {
      view = "Roadside Coder";
      console.log("Subscrine  to", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
*/

//-----------------------------------------------------------Q7-----------------------
// Once Polyfill implementation

/*
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
*/

//---------------------------------------------Q8------------------------------------
// Implement Caching/Memoize Function

/*
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000000; i++) {}

  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second call");
*/

//-------------------------------------Q10--------------------------------------------
// Difference between Closure and Scope

// When you create a fuction within another function, then the inner function is the closure.

// Scope in javascript defines what variables you have access to.
