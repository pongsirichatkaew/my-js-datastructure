function reverseString(str) {
  let reverse = '';
  for (let index = str.length; index >= 0; index--) {
    reverse = reverse + str.charAt(index);
  }
  return reverse;
}

console.log(reverseString('yoyo master'));
//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
  if (str.length === 1) {
    return str;
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'
