let  myCountry  = {
  country : 'Israel',
  capital : 'Jerusalem',
  language : 'Hebrew',
  population : '8000000',
  neighbors : ['Lebanon', 'Egypt', 'Jordan'],
  describe  : function(){
    return console.log(`${this.country} has ${this.population}, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`)
  },
  checkIsland  : function(){
    this.neighbors.length <=0 ? this.isIsland = true : this.isIsland=false;
    console.log(myCountry);
  },
}
myCountry.describe();
myCountry.checkIsland();



