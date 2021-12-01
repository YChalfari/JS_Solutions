//1
function logStr(str) {
  return console.log(str);
}
function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}
isString("abc", logStr);

//2
function addDashes(str) {
  return str.replaceAll(" ", "-");
}
function firstWordUpper(str, func) {
  return func(str[0].toUpperCase() + str.slice(1));
}
console.log(firstWordUpper("this is cool", addDashes));
//3
console.log(
  firstWordUpper("log  three times", (str) => {
    return console.log(str, str, str);
  })
);
//4
