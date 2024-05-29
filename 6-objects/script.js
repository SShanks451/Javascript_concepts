//------------------------- Objects in Javascript

/*
const user = {
  name: "shashank",
  age: 24,
};

user.name = "satyam";
delete user.age;

console.log(user.name);
*/

//------------------------------------- question

/*
const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);
// delete won't work here
*/

//------------------------------------adding properties

/*
const user = {
  name: "Roadside Coder",
  age: 24,
  "like this video": true,
};

delete user["like this video"];
console.log(user);
*/

//-----------------------adding dynamic key-value pair to an object

/*
const property = "firstName";
const name = "Piyush Agarwal";

const user = {
  [property]: name,
};

console.log(user);
*/

//-----------------------------------Looping through objects

/*
const user = {
  name: "Roadside Coder",
  age: 24,
  isTotallyAwesome: true,
};

for (key in user) {
  console.log(key, user[key]);
}
*/

//--------------------------------------question

/*
const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);
*/

//-----------------------------question
// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

/*
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(nums);
*/

//-------------------------------question
// what's the output?

/*
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a);
console.log(a[b]); // ans :- 456
// when we try to assign b to a, it is assigned as a["[object Object]"] = 123 because b is object and it can't behave as key unless it is converted into string. So js tries to convert it into string and converts in above form. Same happens for 'c' and thus 456 is overwritten over 123
*/

//--------------------------JSON.stringify and JSON.parse

/*
const user = {
  name: "Piyush",
  age: 24,
};

const strObj = JSON.stringify(user);

console.log(strObj);
console.log(JSON.parse(strObj)); // converts string to object (reverse of stringify)
*/

//----------------------------Spread Operator
/*
console.log([..."Lydia"]);
*/

//-----------------------------------Question

/*
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
*/

//--------------------------------------------------Question

/*
const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
*/

//-----------------------------------------------------Question

/*
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, // here this refers to the window and not the object (property of arrow function)
};

console.log(shape.diameter());
console.log(shape.perimeter());
*/

//---------------------------------------------Destructuring

/*
let user = {
  name: "Piyush",
  age: 24,
};

const { name } = user;
console.log(name);
*/

//----------------------------------------------Question

/*
let user = {
  name: "Piyush",
  age: 24,
};

const name = "xyz";
const { name: myName } = user;
console.log(myName);
*/

//------------------------------------------Question

/*
let user = {
  name: "Piyush",
  age: 24,
  fullName: {
    first: "Piyush",
    last: "Agarawl",
  },
};

const name = "Roadside Coder";

const {
  fullName: { first },
} = user;

console.log(first);
*/

//-----------------------------------------------Question

/*
// Rest parameter must be the last in the parameter list
function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));
*/

//---------------------------------------Object Referencing

/*
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// Here we are referencing object 'c' to object 'd'. So any changes in c or d will be in both places
*/

//-----------------------------------------------------Question

/*
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// both will point to different memory space so both are false
*/

//--------------------------------------------------Question

/*
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
*/

//----------------------------------------------Question

/*
let person = { name: "Lydia" };
const members = [person];
person.name = null;

console.log(members);
*/

//-------------------------------------------Question

/*
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 40
multiply(value); // 40
*/

//------------------------------------------------Question

/*
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);
*/

//---------------------------------------Shallow copy and deep copy

// Shallow copy => When one object holds the reference to another object

// Deep copy => When we completely clone an object into an another variable. We don't have any references to the original object

//-------------------------------------Ways of creating a deep copy

// Way - 1

/*
let user = {
  name: "Roadside Coder",
  age: 24,
};

const objClone = Object.assign({}, user);
objClone.name = "Piyush";
console.log(user, objClone);
*/

// Way - 2

/*
let user = {
  name: "Roadside Coder",
  age: 24,
};

const objClone = JSON.parse(JSON.stringify(user));
objClone.name = "Piyush";
console.log(user, objClone);
*/

// Way - 3

/*
let user = {
  name: "Roadside Coder",
  age: 24,
};

const objClone = { ...user };
objClone.name = "Piyush";
console.log(user, objClone);
*/
