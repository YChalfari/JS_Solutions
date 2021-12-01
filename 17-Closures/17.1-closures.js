//Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); //5
//otherFunction at the point of creation,
//it's parent scope is b = 5  even if it's under, the global is also 5 though  so I don't know.

//Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); //1

//since a has been assigned to a function within it's scope
//the a= 10 is referring to function a(){}

//Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); //3 3 3
  };
  setTimeout(log, 100);
}

/* If it was written for(let i = 0)  log//0,1,2  WHY!?
setTimeout remembers what it needs to pass to log to run in 100ms
but it only remembers it if it's in the scope (closure)
*/
