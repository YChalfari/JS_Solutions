const pop  =  [10,75,55,25];
const popPercCalc = (pop)=>{
      let worldPop  = 7900;
      return pop / worldPop;}
function  popPercentages(arr){
  let popPercentagesArr  =  [];
  while (popPercentagesArr.length < arr.length){
    popPercentagesArr.push(popPercCalc(arr[popPercentagesArr.length]));    
  }
  return popPercentagesArr;
}
console.log(popPercentages(pop));