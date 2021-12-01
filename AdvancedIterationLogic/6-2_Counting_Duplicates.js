const distinctMultipleChars = (str) => {
  const multiplesCount = str
    .toLowerCase()
    .split("")
    .reduce((countObj, currentChar) => {
      countObj[currentChar]
        ? countObj[currentChar]++
        : (countObj[currentChar] = 1);
      return countObj;
    }, {});
  let distinctMultiples = 0;
  for ([key, value] of Object.entries(multiplesCount)) {
    if (value > 1) {
      distinctMultiples++;
    }
  }
  return distinctMultiples;
};
console.log(distinctMultipleChars("Aabccdee11")); //4 - a,c,e,1
