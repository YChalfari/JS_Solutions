const strArr  = ["boo", "doooo", "hoo","ro"];
function strToLength(arr){
  let lengthArr = [];
  for (let i=0;i<arr.length;i++){
    lengthArr.push(arr[i].length);
  }
  return   lengthArr;
}
console.log(strToLength(strArr));
