const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries",  , "Pizza",  "Hamburgers"];
const doesInclude = (arr1,arr2) =>{
  let matches = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr2[j].includes(arr1[i]) ? matches.push(arr1[i]) : false    
    }
  }  
  return matches.length ? matches : false    
}
console.log(doesInclude(food1,food));