function passwordValidation(pw){
  if(pw.length < 7){
    console.log('weak');
  } else {
    console.log('strong');
  }
}
passwordValidation('12klrg');
passwordValidation('112klrg');

let passwordValidation2 = (pw) => pw.length < 7 ? 
console.log('weak') : console.log('strong');

passwordValidation2('12klrg');
passwordValidation2('112klrg');

function passwordValidation3(pw){
  console.log((pw.length < 7 && 'Weak'));
    console.log((pw.length >= 7 && 'Strong'));
}
passwordValidation3('12klrg');
passwordValidation3('112klrg');

let regEx = new RegExp(/[A-Z]/);
function passwordValidation4 (pw){
  pw.length >= 7 && regEx.test(pw) ?
  console.log('Very Strong') : 
  pw.length >= 7 ? console.log('Strong') :
  console.log('weak');
}
passwordValidation4('12klrg' );
passwordValidation4('112klrg');
passwordValidation4('112kLrg');
