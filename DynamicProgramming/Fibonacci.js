// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 . . .

let calculations = 0;
function fib(n) {
  // for n=13 its 752 calculations
  //   console.log(calculations++);
  if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
}

console.log(fib(13));

function fibonacci() {
  let cache = { 0: 0, 1: 1 };
  return function (n) {
    // console.log(calculations++);
    if (n in cache) return cache[n];
    else {
      cache[n] = memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
      return cache[n];
    }
  };
}

const memoizedFibonacci = fibonacci();

console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(12));
console.log(memoizedFibonacci(13));

function fibonacciBottomUp(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibonacciBottomUp(5));

// let cache = { 0: 0, 1: 1 };
// function fibonacci(n) {
//   // for n=13 its 24 calculations
//   //   console.log(calculations++);
//   if (n in cache) return cache[n];
//   else {
//     cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
//     return cache[n];
//   }
// }

// console.log(fibonacci(13));
