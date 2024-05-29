//-------------------------Debouncing--------------------------------

// Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed.

//ex :- when we type something in search bar of flipkart, it shows result after certain milliseconds after we stopped typing. It doesn't make API calls at the instant we typed some alphabet.

//------------------------Throttling--------------------------------

// Throttling is a technique used to limit the execution of an event handler function even when this event triggers continously due to user actions.

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval. Throttling ensures that the function executes at regular intervals.

// ex:- new posts shows up when scroll down the twitter page

// ----------------------------------------------------------------

// Ques 1 - Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed" <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times"  count after 800ms of debounce

/*
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
*/

//------------------------------------------------------------------

// Ques 2 - Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed" <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times"  count after 800ms of throttle

/*
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

const throttledCount = _.throttle(() => {
  const now = new Date().getTime();
  console.log(now - start);
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
*/

//------------------------------------------------------------------

// Ques 3 - Create Debounce() Polyfill Implemetation

/*
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCount = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
*/

//------------------------------------------------------------------

// Ques 4 - Create Throttle() Polllyfill Implementation

/*
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

var throttledCount = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
*/
