//!Question 1:
//?In your own words what will this point to and why?  (Note this is the global scope)
console.log(this);
//the window obj since it is being called in the global context
//!Question 2:
//?a. In your own words what will this point to and why.
//? b. How can you fix this code.
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//a. undefined since arrow functions don't get their own version
//of 'this'
//b.
const myObj2 = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj2.greet();

//!Question 3:In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//the window object since the functions context is the window object
//!Question 4:In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//also the window object since it inherits this from it's parent which is the window

//!Question 5:
//?a. In your own words what will this point to and why.
//?b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
//first we need to specify an event to listen to so we add a click for example
//secondly the arrow function is not receiving it's own this so we need to create a function declaration
document.querySelector(".element").addEventListener("click", function log() {
  console.log(this);
});
