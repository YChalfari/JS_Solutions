const pikachu = new Pokemon("pikachu", "lightning", [
  "lightning strike",
  "tail whip",
]);
const squirtle = new Pokemon("squirtle", "water", [
  "water squirt",
  "shell roll",
]);
const rockdude = new Pokemon("geoman", "earth", ["avalanche", "rock throw"]);

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokeman = function () {
  return console.log(`I choose you ${this.name}`);
};
Pokemon.prototype.attack = function (num) {
  return console.log(`${this.name} used ${this.attackList[num - 1]}`);
};
squirtle.callPokeman();
squirtle.attack(2);
