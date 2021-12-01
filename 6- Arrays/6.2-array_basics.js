const people = ["Greg", "Mary", "Devon", "James"];
// 1
for (i=0; i<people.length;i++){
  console.log(people[i]);}
//2
 people.shift();
console.log('greg is gone: ',people);
//3
people.pop();
console.log('James is gone: ',people);
//4
people.unshift('Matt');
console.log('Welcome Matt: ',people);
//5
people.push('Yitz');
console.log('Yitz at the end: ',people);
//6
for(i=0;i<people.length;i++){
  console.log(people[i]);
  if (people[i] ===  'Mary'){
    break;
  }
}
//7
console.log(people.slice(2));
//8
console.log(people.indexOf('Mary'));
//9
console.log(people.indexOf('Foo'));
//10
people.splice(0,4,"Greg","Mary", "Elizabeth", "Artie", "James");
console.log(people);
//11
let withBob = people.concat('Bob');
console.log(withBob);


