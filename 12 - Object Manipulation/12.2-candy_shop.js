const candyStore = {
  candies: [
    { name: "mint gum", id: "as12f", price: 2, amount: 2 },
    { name: "twix", id: "5hd7y", price: 5, amount: 4 },
  ],
  cashRegister: 200,
};

const candiesArr = candyStore.candies;

const getCandy = (arr, idKey) =>
  arr.find((candy) => {
    return candy.id === idKey;
  });
//Get an item or a property from ID
const getFromId = (arr, idKey, prop) =>
  prop === "candy" ? getCandy(arr, idKey) : getCandy(arr, idKey)[prop];

console.log(getCandy(candiesArr, "5hd7y"));
console.log(getFromId(candiesArr, "5hd7y", "price"));

function addCandy(obj, idKey, name, price) {
  let newCandy = {
    name: name,
    id: idKey,
    price: price,
    amount: 1,
  };
  obj.candies.push(newCandy);
}
addCandy(candyStore, "123hj", "3 musketeers", 1.65);

function buy(obj, idKey) {
  let price = getFromId(obj.candies, idKey, "price");
  obj.cashRegister += price;
  getCandy(obj.candies, idKey).amount -= 1;
}
buy(candyStore, "123hj");
console.log(candiesArr, candyStore.cashRegister);
