// Object
let n = 1_000_000;
let obj = {};
let map = new Map();
let objMap = {};
let array = [];
let array2 = [];
const startObj = performance.now();
for (n; n > 0; n--) {
  obj[n] = n;
}
const endObj = performance.now();
// Map
n = 1_000_000;
const startMap = performance.now();
for (n; n > 0; n--) {
  map.set(n, n);
}
const endMap = performance.now();
// Object => Map
n = 1_000_000;
const startObjMap1 = performance.now();
for (n; n > 0; n--) {
  objMap[n] = n;
}
objMap = new Map(Object.entries(objMap));
const endObjMap1 = performance.now();
n = 1_000_000;
const startObjMap2 = performance.now();
for (n; n > 0; n--) {
  objMap[n] = n;
}
new Map(Object.entries(objMap));
const endObjMap2 = performance.now();
// from already created obj
const startObjMap3 = performance.now();
const map3 = new Map(Object.entries(obj));
const endObjMap3 = performance.now();
// array
const startArr = performance.now();
n = 1_000_000;
for (n; n > 0; n--) {
  array.push(n);
}
const endArr = performance.now();
// array2
const startArr2 = performance.now();
n = 1_000_000;
for (n; n > 0; n--) {
  array2.push([n, n]);
}
const endArr2 = performance.now();
// // // /// /////
const elapsedObj = endObj - startObj;
const elapsedMap = endMap - startMap;
const elapsedObjMap1 = endObjMap1 - startObjMap1;
const elapsedObjMap2 = endObjMap2 - startObjMap2;
const elapsedObjMap3 = endObjMap3 - startObjMap3;
const elapsedArray = endArr - startArr;
const elapsedArray2 = endArr2 - startArr2;
console.log("object", elapsedObj);
console.log("map", elapsedMap);
console.log("mapObj1", elapsedObjMap1);
console.log("mapObj2", elapsedObjMap2);
console.log("mapObj3", elapsedObjMap3);
console.log("array", elapsedArray);
console.log("array2", elapsedArray2);
