const arr = [1,7,3,0,-5,7,3,9];
for(let i=0; i<arr.length;i++){
  console.log(arr[i]);
}

function arrLength() {
  let  i;
  for ( i = 0; i < arr.length; i++) {
    console.log(i);
  }
  return console.log(i);
}
arrLength(arr);

function arrSum(){
  let sum =0;
  for ( let i = 0; i < arr.length; i++){
    sum += arr[i];}
  return console.log(sum);
}
arrSum(arr);

function arrMulti(){
  let sum =1;
  for ( let i = 0; i < arr.length; i++){
    sum *=  arr[i];}
  return console.log(sum);
}
arrMulti(arr);

