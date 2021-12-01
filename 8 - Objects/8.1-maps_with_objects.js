let obj1 = { name: "laksjdf", id: "13adf" };
let obj2 = { name: "john", id: "99adf" };
let obj3 = { name: "mary", id: "54df" };

let map = new Map([
  [obj1, "obj1id"],
  [obj2, "obj2id"],
  [obj3, "obj3id"],
]);

for (const [obj, value] of map) {
  console.log(obj.name, value);
}
