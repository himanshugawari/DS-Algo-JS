function factorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorialRecursive(number - 1);
}

function factorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer = i * answer;
  }
  return answer;
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
