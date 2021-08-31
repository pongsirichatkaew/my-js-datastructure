const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const current = array[i]; // 99
    array[i] = array[min]; // 0 = 10
    array[min] = current; // 10 = 0
  }
}

selectionSort(numbers);
console.log(numbers);
