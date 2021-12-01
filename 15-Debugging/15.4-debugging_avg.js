function calcAverage(arr) {
  var sum; //undefined
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
//sum is undefined then trying to add a number to undefi
