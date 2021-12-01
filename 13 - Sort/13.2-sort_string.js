const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
let foodsAsc = foods.sort();
console.log(foodsAsc);
let foodsDesc = foods.sort().reverse();
console.log(foodsDesc);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
let foodsWithUAsc = foodsWithUpperCase.sort((a, b) =>
  a.toLowerCase() < b.toLowerCase() ? -1 : 1
);
console.log("Asc", foodsWithUAsc);
let foodsWithUDesc = foodsWithUpperCase.sort((a, b) =>
  a.toLowerCase() > b.toLowerCase() ? -1 : 1
);
console.log("Desc", foodsWithUDesc);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

let longestToShortest = words.sort((a, b) => b.length - a.length);
console.log(longestToShortest);
