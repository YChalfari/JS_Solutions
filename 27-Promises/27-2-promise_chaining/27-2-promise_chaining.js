const errMessage = "Sorry, words should only include letters";
const invalidArr = ["def", "abc", "hij1"];
const validArr = ["def", "abc", "hij"];
const letters = /^[A-Za-z]+$/;
const isOnlyLetters = (arr) => arr.every((word) => word.match(letters));

const makeAllCaps = function (arr) {
  let capArr = arr.map((word) => word.toUpperCase());
  return new Promise((resolve, reject) => {
    if (isOnlyLetters(arr)) {
      resolve(capArr);
    } else {
      reject(errMessage);
    }
  });
};
const sortArr = function (arr) {
  let sortedArr = arr.sort();
  return new Promise((resolve, reject) => {
    isOnlyLetters(arr) ? resolve(sortedArr) : reject(errMessage);
  });
};

makeAllCaps(validArr)
  .then((res) => sortArr(res))
  .then((sorted) => console.log(sorted))
  .catch((rej) => console.log(rej));

sortArr(validArr)
  .then((res) => makeAllCaps(res))
  .then((capitalized) => console.log(capitalized))
  .catch((rej) => console.log(rej));

makeAllCaps(invalidArr)
  .then((res) => sortArr(res))
  .then((sorted) => console.log(sorted))
  .catch((rej) => console.log(rej));

sortArr(invalidArr)
  .then((res) => makeAllCaps(res))
  .then((capitalized) => console.log(capitalized))
  .catch((rej) => console.log(rej));
