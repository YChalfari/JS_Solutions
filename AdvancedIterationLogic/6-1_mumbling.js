//write function that returns as shown in examples
//accum("abcd")=> "A-Bb_Ccc_Dddd"
//accum("cwAt")=> "C-Ww-Aaa-Tttt"

const createPattern = (str) =>
  str
    .toUpperCase()
    .split("")
    .reduce((acc, curr, i) => {
      acc = acc + "_";
      return acc + curr + curr.repeat(i).toLowerCase();
    });
console.log(createPattern("cwAt"));
