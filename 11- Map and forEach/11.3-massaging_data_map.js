const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: { meats: ["ham", "chicken"], fish: ["pike"] },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: { meats: ["bird", "rooster"], fish: ["salmon"] },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function fetchNames(arr) {
  return arr.map((user) => user.name);
}
console.log("names", fetchNames(data));

function fetchBeforeNineties(arr) {
  let beforeNineties = [];
  arr.forEach((obj) => {
    if (obj.birthday.slice(-4) < 1990) {
      beforeNineties.push(obj);
    }
  });
  return beforeNineties;
}
console.log("before 90: ", fetchBeforeNineties(data));

function fetchFoods(arr) {
  let foodsObj = {};
  data.forEach((obj) => {
    obj.favoriteFoods.meats.forEach((meat) => {
      foodsObj[meat] = foodsObj[meat] + 1 || 1;
    });
    obj.favoriteFoods.fish.forEach((fish) => {
      foodsObj[fish] = foodsObj[fish] + 1 || 1;
    });
  });
  return foodsObj;
}
console.log("foods: ", fetchFoods(data));
