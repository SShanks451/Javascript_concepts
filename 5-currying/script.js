//-------------------------------------------------------Currying

// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

//---------------------Convert f(a, b) into f(a)(b).

/*f(a,b) implementation */

/*
function f(a, b) {
  return "Works";
}
*/

/*f(a)(b) implementation */

/*
function f(a) {
  return (b) => {
    return "Works";
  };
}
console.log(f(1)(2)); // works
console.log(f(1));  // (b) => {return "Works" }
*/

//----------------------------------Why should currying be used?

/*
Following are the reasons why currying is good :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/

//-----------------------------------How does currying work?

/*
Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.
*/

/*Simple function*/

/*
const add = (a, b, c)=>{
  return a+ b + c
}
console.log(add(1,2 ,3)); // 6
*/

/* Curried Function */

/*
const addCurry = (a) => { // takes one argument
  return (b)=>{                 //takes second argument
      return (c)=>{             //takes third argument
          return a+b+c
      }
  }
}
console.log(addCurry(1)(2)(3)); //6
*/

//------------------------------------------------------Question

// Convert sum(2,6,1) to sum(2)(6)(1)

/*
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));
*/

//-------------------------------------------------------Question
/*
    evaluate("sum")(4)(2) => 6
    evaluate("multiply")(4)(2) => 8 
    evaluate("divide")(4)(2) => 2
    evaluate("subtract")(4)(2) => 2
*/

/*
function f(a) {
  return function (b) {
    return function (c) {
      if (a === "sum") {
        return b + c;
      } else if (a === "multiply") {
        return b * c;
      } else if (a === "divide") {
        return b / c;
      } else if (a === "subtract") {
        return b - c;
      } else {
        return "Invalid operation";
      }
    };
  };
}

console.log(f("sum")(4)(2));
console.log(f("multiply")(4)(2));
console.log(f("divide")(4)(2));
console.log(f("subtract")(4)(2));
*/

//-------------------------------------------------------Question

// Infinite Currying -> sum(1)(2)(3).....................(n)

/*
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(3)(4)());
*/

//------------------------------------------Currying vs Partial Application

/*
function sum(a) {
  return (b, c) => {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(5, 6));
console.log(x(3, 2));

// or

console.log(sum(20)(1, 4));
*/

//-------------------------------------------------Manipulating DOM

/*
function changeContent(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = changeContent("heading");
updateHeader("HELLO Shashank suman");
*/

//------------------------------------------------curry() implementation (slightly difficult to understand)
//--------------------------------Converts f(a,b,c) into f(a)(b)(c)

/*
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));
*/
