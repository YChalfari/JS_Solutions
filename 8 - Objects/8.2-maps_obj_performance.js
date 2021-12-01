const emptyObj = {};
const testMap = new Map();
function objTime(obj) {
  for (let i = 0; i < 1000000; i++) {
    obj[i] = i;
  }
}
function mapTime(map) {
  for (let i = 0; i < 1000000; i++) {
    map.set(i, i);
  }
}
console.time(objTime(emptyObj));
console.log("obj", console.timeEnd(objTime(emptyObj)));
console.time(mapTime(testMap));
console.log("map", console.timeEnd(mapTime(testMap)));

function objGetTime(obj) {
  for (let i = 0; i < 1000000; i++) {
    obj[i];
  }
}
function mapGetTime(map) {
  for (let i = 0; i < 1000000; i++) {
    map.get(i, i);
  }
}
console.time(objGetTime(emptyObj));
console.log("obj", console.timeEnd(objGetTime(emptyObj)));
console.time(mapGetTime(testMap));
console.log("map", console.timeEnd(mapGetTime(testMap)));
