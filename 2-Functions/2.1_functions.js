let describeCountry  = function (country,population,capitalCity){
  return `${country} has ${population} people and  its capital city is ${capitalCity}`;
};   
let israel = describeCountry('Israel',9150000,'Jerusalem');
console.log(israel);
let england =  describeCountry('England',54000000,'London');
console.log(england);
let france = describeCountry('France',65000000,'Paris');
console.log(france);
