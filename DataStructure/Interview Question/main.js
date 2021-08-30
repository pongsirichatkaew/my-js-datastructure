// #1 Brute force approach, first thing that comes into the mind
// function containCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// O(n^2)
// O(1) Space Complexity
// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'x'];
// const isContain = containCommonItem(arr1, arr2);
// console.log(`containCommonItem ${isContain}`);

// #2
/* array1 ==> obj {
    a:true,
    b:true,
    c:true,
    x:true
} */
// array2[index] === obj.properties

// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'x'];

// function containCommonItem2(arr1, arr2) {
//   // loop through first array and create object
//   // where properties === items in the array
//   // loop through second array and check if item
//   // in second array exists on created object.

//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(containCommonItem2(arr1, arr2));

// O(a+b) Time Complexity
// O(a) Space Complexity

// #3
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(arr1, arr2));
