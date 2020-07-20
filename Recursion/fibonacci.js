//  0 1 1 2 3 5 8 13 21 34 55 89 144 . . .

function fibonacciRecursive(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

function fibonacciIterative(number) {
  let arr = [0, 1];
  for (let i = 2; i < number + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[number];
}

console.log(fibonacciIterative(5));
console.log(fibonacciRecursive(5));
