// var vs let vs const

//------------------------variable scope------------------------------
// Scope -> A certain region of a program where a defined varibale can exist and can be recognised and beyond that can't be recognized
// var -> functional scope
// let and const -> block scope

/*
{
  var a = 5;   //----> functional scope
}
console.log(a);   // a = 5
*/

/*
{
  let a = 5;          //-----> block scope
  console.log(a);      
}
console.log(a);  --> not defined
*/

/*
{
  const a = 5;      //-------> block scope
  console.log(a);      
}
console.log(a);  --> not defined
*/

//-----------------------variable shadowing-----------------------------------------
// while shadowing a variable, we should not cross the boundary of the scope i.e., var can be shadowed by let but opposite can't be done.
//  If we try to shadow let by var, then it is called illegal shadowing and it will show the error that variable is already declared

/*
function test() {
  var a = "Hello";
  // let b = "Bye";

  if (true) {
    let a = "Hi";
    // var b = "Goodbye";
    console.log(a);
    // console.log(b);  // --> will show error that b is already declared
  }

  console.log(a);
}

test();
*/

//---------------------------------Declaration-------------------------------------------------------------
// var can be re-declared in the same scope but let and const can't be re-declared in the same scope

//------------------Declaration without initilization------------------------
// var, let --> can be declared without initializing
// const -> can't be declared without initializing

//---------------------Re-Initilization-----------------------------
// var, let ---> updated
//  const ---> can't be updated

//-----------------------Javascript execution context-------------------------------------------------------------

/*
    2 phases :-
        Creation phase
        Execution phase

        3 things happen in Creation phase :-
            -> It creates a global or window object
            -> It setups a memory heap for storing variables and functions references i.e., it takes up all the variables and functions and stores it inside this window.
            -> It initilizes those functions and variables declaration with undefined.

        Execution phase:-
            -> javascript engine executes the code line by line assigining the values of variables and executes the function calls.
*/

//--------------------------Hoisitng---------------------------------------------------------------------------

/*
console.log(count);
var count = 1;

console.log(count) will show 'undefined'. It will not show any error like 'variable undeclared or unintialized'.
During the creation phase, js moves all the variables and functions to the top of the code and this is known as 'Hoisting'.
So js looks the above code like this :-
    var count;
    console.log(count);
    count = 1;

*/

/*
console.log(count);
let count = 1;

will show 'can't access count before initilization'.
Here, 'count' is in Temporal Dead Zone.
Temporal Dead Zone is the time between declaration and initialization of let and const variables. 
Here, count is hoisted but it is hoisted in temporal dead zone
*/

/*
function abc() {
  console.log(a,b,c);

  const c = 30;
  let b = 20;
  var a = 10;
}

abc();

Here 'a' will show undefined.
'b' and 'c' will show error.
because let and const are not hoisted like var. they are hoisted in the temporal dead zone.
*/

// Temporal dead zone is the term to describe the state where variables are in the scope but they are not yet declared.
