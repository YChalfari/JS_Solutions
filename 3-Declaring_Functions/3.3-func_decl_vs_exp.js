let israelPopPerc;
let francePopPerc;
let chinaPopPerc;
const worldPop = 7900;
// Expressions
const israelPopPercCalc = function(pop){
  israelPopPerc = (pop / worldPop);
  console.log('israels percentage of the world population: ',israelPopPerc);
}

israelPopPercCalc(10);

const francePopPercCalc = function(pop){
  francePopPerc = (pop / worldPop);
  console.log('frances percentage of the world population: ',francePopPerc);
}

francePopPercCalc(55);

const chinaPopPercCalc = function(pop){
  chinaPopPerc = (pop / worldPop);
  console.log('chinas percentage of the world population: ',chinaPopPerc);
}

chinaPopPercCalc(1441);
// Would be better to make a more universal function that takes 2 arguements?

//Declarations
function israelPopPercCalc(pop){
israelPopPerc = (pop / worldPop);
console.log('israels percentage of the world population: ',israelPopPerc);
}

israelPopPercCalc(10);

function francePopPercCalc(pop){
  francePopPerc = (pop / worldPop);
  console.log('frances percentage of the world population: ',francePopPerc);
}

francePopPercCalc(55);

function chinaPopPercCalc(pop){
  chinaPopPerc = (pop / worldPop);
  console.log('chinas percentage of the world population: ',chinaPopPerc);
}

chinaPopPercCalc(1441);