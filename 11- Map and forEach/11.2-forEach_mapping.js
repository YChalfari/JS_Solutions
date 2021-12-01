const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const wordArr = ["a", "b", "c", "d"];
const doubleValues = (arr) => {
  let doubles = [];
  arr.forEach((n) => {
    doubles.push(n * 2);
  });
  return doubles;
};
console.log("1.forEach: ", doubleValues([1, 2, 3]));
//Same  with map
const doubleValues1 = numArr.map((e) => e * 2);
console.log("1.map: ", doubleValues1);

//2- forEach
const onlyEvenVals = (arr) => {
  let evens = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    }
  });
  return evens;
};
console.log("forEach: ", onlyEvenVals(numArr));
//2- map
const onlyEvenVals2 = (arr) =>
  arr
    .map((e, i) => {
      if (e % 2 === 0) {
        return e;
      } else {
        return null;
      }
    })
    .filter((v, i) => v !== null);
console.log("map: ", onlyEvenVals2(numArr));

//3 - forEach
function showFirstAndLast(arr) {
  firstAndLast = [];
  arr.forEach((v, i) => {
    if (typeof v === "string") {
      if (i === 0) {
        firstAndLast.push(v);
      } else if (i === arr.length - 1) {
        firstAndLast.push(v);
      }
    }
  });
  return firstAndLast;
}
console.log(
  "3.forEach numbers",
  showFirstAndLast(numArr),
  "3.forEach words",
  showFirstAndLast(wordArr)
);
//4
function vowelCount(str) {
  let letterCount = {};
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      console.log(letter, /[aeiou]/.test(letter));
      if (/[aeiou]/.test(letter)) {
        letterCount[letter] = 0;
        letterCount[letter]++;
      }
    });
  return letterCount;
}
console.log("4.forEach: ", vowelCount("hello"));
//5
function capitalize(str) {
  return str
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("");
}
console.log("5.capwithmap: ", capitalize("whytho"));

//6
function shiftLetters(str) {
  strCode = str
    .split("")
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) - 1))
    .join("");
  return strCode;
}
console.log(shiftLetters("bcd"));

//7
function swapCase(str) {
  return str.split(" ").map((word, i) => {
    if (i % 2 === 1) {
      return capitalize(word);
    } else {
      return word;
    }
  });
}
console.log(
  "7: swap case using map: ",
  swapCase("every other word should  be cap")
);
