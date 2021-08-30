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

  while (array1Item || array2Item) {
    if ( array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      console.log('array1Item', array1Item);
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[i];
    }
    i++;
    console.log('index', i);
    return
  }

  return mergedArrayF;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
