function steps(n) {
  if (n < 1) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    let currentStep = Array(n).fill("#", 0, i);
    for (let j = 0; j < n; j++) {
      if (!currentStep[j]) {
        currentStep[j] = " ";
      }
    }
    console.log("steps: ", `${currentStep.join("")}`);
  }
}
steps(5);

//Better way with 1 loop

function steps1(n) {
  let step = Array(n).fill(" ");
  for (let i = 0; step.indexOf(" ") !== -1; i++) {
    step[i] = "#";
    console.log("step1: ", `'${step.join("")}'`);
  }
}
steps1(5);

//without fill
function steps2(n) {
  let step = [];
  for (let i = 0; i < n; i++) {
    step[i] = "#";
    for (let j = 0; j < n - i - 1; j++) {
      if (step[n - 1] !== "#") {
        step[n - j - 1] = " ";
      }
    }
    console.log("step2: ", `'${step.join("")}'`);
  }
}
steps2(5);

//matrix - not working

function steps3(n) {
  let step = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      i >= j ? (step += "#") : (step += " ");
      console.log(step);
    }
  }
}
steps3(5);
