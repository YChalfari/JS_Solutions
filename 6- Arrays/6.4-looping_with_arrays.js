const pop  =  [10,75,55,25];
const popPercCalc = function(pop){
      let worldPop  = 7900;
      return pop / worldPop;}
function  popPercentages(arr){
  let popPercentagesArr  =  [];
  for (let i=0; i<pop.length;i++){
    popPercentagesArr.push(popPercCalc(arr[i]));
  }
  return popPercentagesArr;
}
console.log(popPercentages(pop));

