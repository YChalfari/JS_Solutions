const longestDistinctCharStr = (a, b) => {
  return a
    .concat(b)
    .toLowerCase()
    .split("")
    .sort()
    .reduce((distinct, currentLetter) => {
      console.log(distinct, currentLetter, distinct + currentLetter);
      if (!distinct.includes(currentLetter)) {
        return distinct + currentLetter;
      } else {
        return distinct;
      }
    });
};
console.log(longestDistinctCharStr("zzckdxxy", "zaaabbbcckdxz"));
