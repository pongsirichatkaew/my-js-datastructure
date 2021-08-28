function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  console.log('arr1', arr1);
  console.log('arr2', arr2);
  // Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item, i);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
      console.log('array1Item', array1Item);
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}
const arr = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log('merged', arr);
console.log('ans', undefined > '1');
