const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    let key = arr[i]; //44
    let j = i - 1; // 0
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

insertionSort(numbers);
console.log(numbers);
