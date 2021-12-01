function topFive(lang){
  let formattedLang= lang.toLowerCase();
switch (formattedLang){
  case 'mandarin': 
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('Spanish: ','Num 2') ;
    break;
  case 'english':
    console.log('English: ','Num 3') ;
    break;
  case 'hindi':
    console.log('Num 4') ;
    break;  
  case 'arabic':
    console.log('arabic :','5th') ;
    break;
  default : 
    console.log('Not in top 5');
}
}
topFive('mandarin');