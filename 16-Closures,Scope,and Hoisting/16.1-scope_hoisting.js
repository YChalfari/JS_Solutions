// Block 1
function funcA() {
  console.log(a); //undefined
  console.log(foo()); // 2 because o f hoisting
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName; //  since this is in the obj which is value of prop
    },
  },
};
console.log(obj.prop.getFullName()); //Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test()); //john doe in browser since this refers to document object

//Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); //undefined
console.log(typeof b); //0 because b = 0 is GLOBAL and not scoped

//Block 4
function funcC() {
  console.log("1");
}
funcC(); //2 because the bottom funcC is hoisted
function funcC() {
  console.log("2");
}
funcC();

//Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // d=1 is global => 1
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); //local to function => not initialized

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //undefined
var f = 1;
funcE(); //1 because var f= 1 was assigned before it
