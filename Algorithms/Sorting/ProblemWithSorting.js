// Time and space complexity of the sort cannot be guarunteed
const letters = ['a', 'b', 'z', 'e', 'r', 'b'];
const baskets = [2, 65, 34, 2, 1, 7, 8];
console.log(letters.sort());
console.log(baskets.sort());

console.log(
  baskets.sort((a, b) => {
    return a - b;
  })
);
console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('7'.charCodeAt(0));
