//1
filledArr = new Array(50).fill(1,0,50);
console.log(filledArr.length,filledArr);

//2
numArr = Array.from({length:50}, (v, i) => i + 1);
console.log(numArr)

//3
const obj  =  {
  letter : 'a', 
  letter : 'B',
  letter : 'C'
};
const arrFromObj = Array.from(obj.letter);
console.log(arrFromObj);

//from using a map function
const myName = 'yitzhak';
const nameArr = Array.from(myName, function(character){
  return  character.toUpperCase();
});
console.log(nameArr);

//4
const arrObj  =  [{
  a : 1,
  b : 2,
  c : 3
}];
const objFromArr = arrObj.reduce((accumulator,  current) => 
{return accumulator;}); 
console.log(objFromArr);

const nameObjFromArr = Object.assign({},nameArr);
console.log(nameObjFromArr);

//5
let arr = [1,2,3,4];
console.log(Array.isArray(arr));

//6a
const nameArrCopy = Array.from(nameArr);
console.log('from: ', nameArrCopy);
const nameArrCopy2 = [...nameArr];
console.log('spread: ', nameArrCopy2);

//6b - changed sliced copy does not modify originaal but modify orig changes copy
const nameArrMutating= nameArrCopy.slice(0);
nameArrMutating.pop();
console.log('copy:', nameArrMutating);
console.log('original:', nameArrCopy);

