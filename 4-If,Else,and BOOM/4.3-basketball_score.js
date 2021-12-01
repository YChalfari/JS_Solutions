let john1 = 89;
let john2 = 120;
let john3 = 103;
let mike1 = 116;
let mike2 = 94;
let mike3 = 123;

let johnAvg;
let mikeAvg;
let maryAvg;

let avgCalc=(a,b,c)=>{
  return (a + b + c) / 3;
}

let avgOfTeams = function(){
  johnAvg = avgCalc(john1,john2,john3);
  mikeAvg = avgCalc(mike1,mike2,mike3);
  if (johnAvg == mikeAvg){ 
    console.log(`IT'S A DRAW! The avg score of both teams is ${johnAvg}`);
  }
  else if (johnAvg>mikeAvg){ 
    console.log(`John is the winner with an avg score of ${johnAvg}`);
  }
  else {
    console.log(`Mike wins with an avg score of ${mikeAvg}`);
  }
};

