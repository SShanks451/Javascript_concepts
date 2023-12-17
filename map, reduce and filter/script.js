// What is map() ?
// The map method is used for creating new array from existing one by applying a function to each one of the element of the first array.
// map takes a callback function as parameter
// the callback function inside map takes three arguments -> current, index and array

const nums_1 = [1, 2, 3, 4];
const multiplyThree = nums_1.map((num, i, arr) => {
  return num * 3 + i;
});
console.log(multiplyThree);

// num => each element of array, i => index

// What is filter()?
// The filter method takes each element in an array and it applies a conditional statement against it. If the conditional returns true, the element gets pushed into the output array. If the conditional returns false, the element doesn't get pushed into the output array.
// filter takes a callback function as parameter
// the callback function inside filter takes three arguments -> current, index and array

const nums_2 = [1, 2, 3, 4];
const moreThanTwo = nums_2.filter((num) => {
  return num > 2;
});
console.log(moreThanTwo);

// What is reduce()?
// The reduce method reduces an array of values down to just one value
// reduce takes two parameter -> callback function and intial value of accumulator
// callback function inside reduce takes four parameter -> accumulator, current, index, array
// If we don't provide the initial value of the accumulator, then it takes the first element of the array as the initial value and current and index is assigned to second element of the array.

const nums_3 = [1, 2, 3, 4];
const sum = nums_3.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// Polyfill for map()

// Array.map((num, i, arr) => {});

/*
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 3, 4];
const multiply = nums.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiply);
*/

// Plolyfill for filter()

/*
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const nums = [1, 2, 3, 4];
const ans = nums.myFilter((num) => {
  return num > 2;
});
console.log(ans);
*/

// Polyfill for reduce()

// arr.reduce((acc,curr,i,arr)=>{}, initial value)

/*
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];
const sum_t = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum_t);
*/

// map vs forEach
// These both are the array functions to loop through the items of the array
// forEach() method returns nothing. We can this method if we wish to modify our new array
// We can't chain other methods in forEach()

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(mapResult, forEachResult, arr);

// Questions

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1 - Return only name of students in capital
const names = students.map((stu) => {
  return stu.name.toUpperCase();
});
console.log(names);

// Q2 - Return only details of those who scored more than 60
const details = students.filter((stu) => {
  return stu.marks > 60;
});
console.log(details);

// Q3 - More than 60 marks and rollNumber greater than 15
const details_2 = students.filter((stu) => {
  return stu.marks > 60 && stu.rollNumber > 15;
});
console.log(details_2);

// Q4 - Sum of marks of all students
const sum_2 = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(sum_2);

// Q5 - Return only names of students who scored more than 60
const ans = students
  .filter((stu) => {
    return stu.marks > 60;
  })
  .map((stu) => {
    return stu.name;
  });
console.log(ans);

// Q6 - Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(totalMarks);
