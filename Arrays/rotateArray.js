var rotate = function (nums, k) {
  const numTemp = [...nums];
  for (let index = 0; index < numTemp.length; index++) {
    const newIndex = (index + k) % numTemp.length;
    nums[newIndex] = numTemp[index];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
