const pair = [1, 2, 4, 4, 8];
const sum = 8;

function pairWithNumber(arr, sum) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log(arr[i], arr[j]);
        return true;
      }
    }
  }
  return false;
}

// Better
function pairWithNumber2(arr, sum) {
  const len = arr.length;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    if (set.has(arr[i])) {
      console.log(i, arr[i]);
      return true;
    }
    set.add(sum - arr[i]);
    console.log('set', set);
  }
  return false;
}

console.log(pairWithNumber(pair, sum));
console.log(pairWithNumber2(pair, sum));
