function addTo80(n) {
  console.log("Long TIme");
  return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

function memoizesAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long Time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizesAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));

console.log(memoized(6));
console.log(memoized(6));
console.log(memoized(6));

// let cache = {};
// function memoizesAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log("Long Time");
//     cache[n] = n + 80;
//     return cache[n];
//   }
// }

// console.log(memoizesAddTo80(5));
// console.log(memoizesAddTo80(5));
// console.log(memoizesAddTo80(5));

// console.log(memoizesAddTo80(6));
// console.log(memoizesAddTo80(6));
// console.log(memoizesAddTo80(6));
