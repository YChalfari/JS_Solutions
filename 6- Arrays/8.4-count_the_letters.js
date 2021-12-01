const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCountOrganizer(arr){
  let count ={};
  arr.forEach(str => {
      str.toLowerCase().split('').forEach( (letter) => {
      count[letter] ? count[letter]++ : count[letter] = 1;
    })
  });
  return count;
}
console.log(letterCountOrganizer(array));