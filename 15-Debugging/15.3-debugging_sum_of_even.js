function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; //Scope Local Return  Value: NaN
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Returning NaN from arr[10] which does not exist
