//----------------------------------------------------------Event Propagation---------------------------------------------------

// (explanation is written in reference to the created html elements)
// HTML --> 'button' is inside 'form' and 'form' is inside 'div' --------> DIV->FORM->BUTTON

// if we put event listeners on all of these three, and then I click on button and Since button is inside form and form is inside div, we are clicking on form and div as well, so events of these two will also be executed.

// this complete process of deciding when and in which direction event will be executed is called event propagation.

//----------------------------------------------------------Event Bubbling-------------------------------------------------------

// In bubbling, events are executed from bottom to top. When we click on button, first 'button' event is fired, then 'form' and then 'div' event is fired. This is default behaviour in this kind of html arrangement.

// there are few events that do not bubble like 'focus', 'blur', etc.

// example :-

/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
  alert("DIV");
});

form.addEventListener("click", function () {
  alert("FORM");
});

button.addEventListener("click", function () {
  alert("BUTTON");
});
*/

//-----------------------------------------------event.target v/s this.target v/s event.currentTarget-----------------------------

/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", func);
form.addEventListener("click", func);
button.addEventListener("click", func);

function func(event) {
  alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this = " + this.tagName);
}
*/

//-------------------------------------------------Event Capturing/Trickling------------------------------------------------------

// By default event bubbling is the process that happens. But there is another process called event capturing which makes element execute from top to bottom. So if I click button, then first 'div' event will be fired, then 'form' and then 'button' will be fired.

/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function () {
    alert("DIV");
  },
  {
    capture: true,
  }
);

form.addEventListener(
  "click",
  function () {
    alert("FORM");
  },
  {
    capture: true,
  }
);

button.addEventListener(
  "click",
  function () {
    alert("BUTTON");
  },
  {
    capture: true,
  }
);
*/

//-----------------------------------------------------How to Stop Bubbling / Capturing-----------------------------------------

/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (e) {
  alert("DIV");
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("FORM");
});

button.addEventListener("click", function (e) {
  alert("BUTTON");
});
*/

// In the given code scenario, first 'button' event will be fired, then 'form' event will be fired and it will stop there. 'div' event will not be fired because stopPropagation is used in the 'form'.

//-------------------------------------------------------Event Delegation-------------------------------------------------------

// for explaining this concept, second html code is used. In this html, there is parent div with class name 'products' and it has some children elements in span tag with unique class names.

// Event delegation is process where we add event listeners to the parent element instead of adding them to the descendent elements.

/*
document.querySelector(".products").addEventListener("click", (event) => {
  // console.log(event);
  console.log(event.target.closest("SPAN"));

  if (event.target.tagName === "SPAN") {
    window.location.href += "/" + event.target.className;
  }
});
*/

//--------------------------------------------------------------------------Question-----------------------------------------

// for the first html, create event propagation in following manner after clicking on button :- form -> button -> div

/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
  alert("DIV");
});

form.addEventListener(
  "click",
  function () {
    alert("FORM");
  },
  {
    capture: true,
  }
);

button.addEventListener("click", function () {
  alert("BUTTON");
});
*/

//-----------------------------------------------------Create a Modal which closes by clicking on negative spacce----------------
// look on youtube (very inportant for interviews)
