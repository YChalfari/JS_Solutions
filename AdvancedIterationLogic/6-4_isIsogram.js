const isIsogram = (str) => {
  const multiplesCount = str
    .toLowerCase()
    .split("")
    .reduce((countObj, currentChar) => {
      // let key = countObj[currentChar]
      countObj[currentChar]
        ? countObj[currentChar]++
        : (countObj[currentChar] = 1);
      return countObj;
    }, {});
  let trueOrFalse;
  Object.values(multiplesCount).forEach((value) => {
    if (value > 1) {
      trueOrFalse = false;
    }
  });
  return trueOrFalse;
};
console.log(isIsogram("zzckdxxy"));
