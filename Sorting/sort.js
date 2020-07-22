const letter = ["a", "d", "z", "e", "r", "b"];

console.log(letter.sort());

const basket = [2, 65, 34, 2, 1, 7, 8];
// numbers are considered as string
console.log(basket.sort());

console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
