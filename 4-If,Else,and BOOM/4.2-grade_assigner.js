//(function gradeAssigner(score){
//   function between(x, min, max) {
//     return x >= min && x <= max;
//   }
//   switch (score) {
// 	case between(score, 0, 64):
// 		console.log('F');
// 		break;
// 	case between(score, 65, 69):
// 		console.log('D');
// 		break;
// 	case between(score, 70, 79):
// 		console.log('C');
// 		break;
// 	case between(score, 80, 89):
// 		console.log('B');
// 		break;
// 	case between(score, 90, 100):
// 		console.log('A');
// 		break;
// 	default:
// 		console.log('INVALID SCORE');
// }
// })

(function gradeAssigner(score) {
  switch (score) {
    case score >= 0 && score <= 64:
      console.log("F");
      break;
    case score >= 65 && score <= 69:
      console.log("D");
      break;
    case score >= 70 && score <= 79:
      console.log("C");
      break;
    case score >= 80 && score <= 89:
      console.log("B");
      break;
    case score >= 90 && score <= 100:
      console.log("A");
      break;
    default:
      console.log("INVALID SCORE");
  }
})()(function gradeAssigner(score) {
  if (score >= 0 && score <= 64) {
    console.log("F");
  } else if (score >= 65 && score <= 69) {
    console.log("D");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 90 && score <= 100) {
    console.log("A");
  } else {
    console.log("Invalid Score");
  }
})();
