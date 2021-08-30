// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return findFactorialRecursive(number - 1) * number;
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let index = 2; index <= number; index++) {
    answer = answer * index;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
