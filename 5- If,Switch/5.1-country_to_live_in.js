function countryToLiveIn (lang,isIsland,pop,country){
  if (typeof lang === 'string' && typeof isIsland === 'boolean' && typeof pop === 'number' && typeof country === 'string'){
    if(lang.toLowerCase()=='english' && isIsland === false && pop < 5000){
      console.log(`You should live in ${country}`);
    }
    else {
      console.log(`${country} is not for you`);
    } 
  }
  else {console.log('Invalid arguments'); }
};

countryToLiveIn('English', false,4900,'Israel');