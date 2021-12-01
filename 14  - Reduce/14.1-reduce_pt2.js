const extractOnlyValue = (arr, key) =>
  arr.reduce((valArr, obj) => {
    return [...valArr, obj[key]];
    // valArr.push(obj[key]);
    // return valArr;
  }, []);
console.log(
  extractOnlyValue([{ id: "123fg" }, { id: "9fxi" }, { id: "nbc72" }], "id")
);

const countOnlyVowels = (str) =>
  [...str].reduce((vowelCount, currLetter) => {
    if (/[aieou]/.test(currLetter)) {
      vowelCount[currLetter]
        ? vowelCount[currLetter]++
        : (vowelCount[currLetter] = 1);
    }
    return vowelCount;
  }, {});
console.log(countOnlyVowels("aaabbbccciiiooooorrr"));

const addKeyAndValues = (arr, key, value) =>
  arr.reduce((newArr, obj) => {
    obj[key] = value;
    console.log("newArr:", newArr);
    return newArr;
  }, arr);

console.log(
  addKeyAndValues(
    [{ id: "123fg" }, { id: "9fxi" }, { id: "nbc72" }],
    "price",
    3
  )
);
